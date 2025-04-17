"use client";

import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { v4 as uuidv4 } from "uuid";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const ToursAdminDashboard = () => {
  const [tours, setTours] = useState([]);
  const [currentTour, setCurrentTour] = useState({
    id: "",
    title: "",
    description: "",
    price: 0,
    rating: 0,
    reviews: 0,
    duration: 0,
    country: "",
    season: "",
    categories: [],
    departure_location: "",
    destination_location: "",
    main_image: "",
    images: [],
    highlights_data: {
      mapImage: "",
      included: [],
      notIncluded: [],
      highlights: [],
    },
  });

  const [mainImageFile, setMainImageFile] = useState(null);
  const [additionalImageFiles, setAdditionalImageFiles] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchTours();
  }, []);

  const fetchTours = async () => {
    const { data, error } = await supabase.from("tours").select("*");
    if (error) console.error("Error fetching tours:", error);
    else setTours(data);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentTour((prev) => ({ ...prev, [name]: value }));
  };

  const handleHighlightDataChange = (e) => {
    const { name, value } = e.target;
    setCurrentTour(prev => ({
      ...prev,
      highlights_data: {
        ...prev.highlights_data,
        [name]: value
      }
    }));
  };

  const handleImageUpload = async (file, path) => {
    if (!file) return null;
    const fileExt = file.name.split(".").pop();
    const fileName = `${uuidv4()}.${fileExt}`;
    const filePath = `${path}/${fileName}`;

    const { error } = await supabase.storage
      .from("tour-images")
      .upload(filePath, file);

    if (error) {
      console.error("Error uploading image:", error);
      return null;
    }

    return supabase.storage.from("tour-images").getPublicUrl(filePath).data
      .publicUrl;
  };

  const handleSubmit = async () => {
    try {
      // Upload images
      const mainImageUrl = mainImageFile
        ? await handleImageUpload(mainImageFile, "main-images")
        : currentTour.main_image;
  
      const additionalImageUrls =
        additionalImageFiles.length > 0
          ? await Promise.all(
              additionalImageFiles.map((file) =>
                handleImageUpload(file, "additional-images")
              )
            )
          : currentTour.images;
  
      const tourData = {
        ...currentTour,
        // Generate a new UUID for new tours
        id: isEditing ? currentTour.id : uuidv4(),
        main_image: mainImageUrl,
        images: additionalImageUrls,
        highlights_data: {
          mapImage: "", // Using empty string by default for mapImage
          included: currentTour.highlights_data.included.split(",").map(item => item.trim()),
          notIncluded: currentTour.highlights_data.notIncluded.split(",").map(item => item.trim()),
          highlights: currentTour.highlights_data.highlights.split(",").map(item => item.trim())
        },
        price: parseFloat(currentTour.price).toFixed(2),
        rating: parseFloat(currentTour.rating).toFixed(1),
        reviews: parseInt(currentTour.reviews),
        duration: parseInt(currentTour.duration),
        categories: typeof currentTour.categories === 'string' 
          ? currentTour.categories.split(",").map((c) => c.trim())
          : currentTour.categories,
      };
  
      const { error } = isEditing
        ? await supabase.from("tours").update(tourData).eq("id", currentTour.id)
        : await supabase.from("tours").insert(tourData);
  
      if (error) throw error;
  
      resetForm();
      fetchTours();
    } catch (error) {
      console.error("Error saving tour:", error);
    }
  };

  const handleEdit = (tour) => {
    setCurrentTour({
      ...tour,
      categories: Array.isArray(tour.categories) ? tour.categories.join(", ") : tour.categories,
      highlights_data: {
        mapImage: "",
        included: Array.isArray(tour.highlights_data?.included) 
          ? tour.highlights_data.included.join(", ") 
          : tour.highlights_data?.included || "",
        notIncluded: Array.isArray(tour.highlights_data?.notIncluded)
          ? tour.highlights_data.notIncluded.join(", ")
          : tour.highlights_data?.notIncluded || "",
        highlights: Array.isArray(tour.highlights_data?.highlights)
          ? tour.highlights_data.highlights.join(", ")
          : tour.highlights_data?.highlights || "",
      },
    });
    setIsEditing(true);
  };

  const handleDeleteTour = async (id) => {
    if (confirm("Are you sure you want to delete this tour?")) {
      const { error } = await supabase.from("tours").delete().eq("id", id);
      if (error) console.error("Error deleting tour:", error);
      else fetchTours();
    }
  };

  const resetForm = () => {
    setCurrentTour({
      id: "",
      title: "",
      description: "",
      price: 0,
      rating: 0,
      reviews: 0,
      duration: 0,
      country: "",
      season: "",
      categories: [],
      departure_location: "",
      destination_location: "",
      main_image: "",
      images: [],
      highlights_data: {
        mapImage: "",
        included: [],
        notIncluded: [],
        highlights: [],
      },
    });
    setMainImageFile(null);
    setAdditionalImageFiles([]);
    setIsEditing(false);
  };

  return (
    <div className="container mx-auto p-4 mt-24">
      <div className="bg-white shadow-md text-gray-800 rounded-lg overflow-hidden">
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Tour Form */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold mb-4">
                {isEditing ? "Edit Tour" : "Add New Tour"}
              </h2>

              {/* Basic Information */}
              <input
                name="title"
                placeholder="Tour Title"
                value={currentTour.title}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />

              <textarea
                name="description"
                placeholder="Description"
                value={currentTour.description}
                onChange={handleInputChange}
                className="w-full p-2 border rounded h-32"
              />

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Price ($)</label>
                  <input
                    type="number"
                    name="price"
                    step="0.01"
                    placeholder="Price"
                    value={currentTour.price}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Rating (0-5)</label>
                  <input
                    type="number"
                    name="rating"
                    placeholder="Rating"
                    step="0.1"
                    max="5"
                    value={currentTour.rating}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Number of Reviews</label>
                  <input
                    type="number"
                    name="reviews"
                    placeholder="Reviews Count"
                    value={currentTour.reviews}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Duration (days)</label>
                  <input
                    type="number"
                    name="duration"
                    placeholder="Duration (days)"
                    value={currentTour.duration}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input
                  name="country"
                  placeholder="Country"
                  value={currentTour.country}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
                <div>
                  <input
                    name="season"
                    placeholder="Season (e.g., January - March)"
                    value={currentTour.season}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input
                  name="departure_location"
                  placeholder="Departure Location"
                  value={currentTour.departure_location}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
                <input
                  name="destination_location"
                  placeholder="Destination Location"
                  value={currentTour.destination_location}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
              </div>

              <input
                name="categories"
                placeholder="Categories (comma separated)"
                value={currentTour.categories}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />

              {/* Image Uploads */}
              <div className="space-y-4">
                <div>
                  <label>Main Image</label>
                  <input
                    type="file"
                    onChange={(e) => setMainImageFile(e.target.files[0])}
                    className="w-full p-2 border rounded"
                  />
                  {currentTour.main_image && (
                    <img src={currentTour.main_image} className="h-32 mt-2" alt="Main tour image" />
                  )}
                </div>

                <div>
                  <label>Additional Images</label>
                  <input
                    type="file"
                    multiple
                    onChange={(e) =>
                      setAdditionalImageFiles([...e.target.files])
                    }
                    className="w-full p-2 border rounded"
                  />
                  <div className="flex flex-wrap gap-2 mt-2">
                    {currentTour.images?.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        className="h-24 w-24 object-cover"
                        alt={`Tour image ${i+1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Highlights Data */}
              <div className="space-y-4">
                <textarea
                  name="included"
                  placeholder="Included Features (comma separated)"
                  value={currentTour.highlights_data.included || ""}
                  onChange={handleHighlightDataChange}
                  className="w-full p-2 border rounded h-32"
                />
                <textarea
                  name="notIncluded"
                  placeholder="Not Included (comma separated)"
                  value={currentTour.highlights_data.notIncluded || ""}
                  onChange={handleHighlightDataChange}
                  className="w-full p-2 border rounded h-32"
                />
                <textarea
                  name="highlights"
                  placeholder="Highlights (comma separated)"
                  value={currentTour.highlights_data.highlights || ""}
                  onChange={handleHighlightDataChange}
                  className="w-full p-2 border rounded h-32"
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
              >
                {isEditing ? "Update Tour" : "Add Tour"}
              </button>
            </div>

            {/* Existing Tours List */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Existing Tours</h2>
              <div className="space-y-4">
                {tours.map((tour) => (
                  <div key={tour.id} className="border p-4 rounded">
                    <h3 className="font-bold">{tour.title}</h3>
                    <div className="flex gap-2 mt-2">
                      <button
                        onClick={() => handleEdit(tour)}
                        className="bg-yellow-500 text-white px-2 py-1 rounded"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteTour(tour.id)}
                        className="bg-red-500 text-white px-2 py-1 rounded"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToursAdminDashboard;




// "use client";

// import React, { useState, useEffect } from "react";
// import { createClient } from "@supabase/supabase-js";
// import { v4 as uuidv4 } from "uuid";

// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL,
//   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
// );

// const ToursAdminDashboard = () => {
//   const [tours, setTours] = useState([]);
//   const [currentTour, setCurrentTour] = useState({
//     id: "",
//     title: "",
//     description: "",
//     price: 0,
//     rating: 0,
//     reviews: 0,
//     duration: 0,
//     country: "",
//     season: "Year Round",
//     categories: [],
//     departure_location: "",
//     destination_location: "",
//     main_image: "",
//     images: [],
//     highlights_data: {
//       mapImage: "",
//       included: [],
//       notIncluded: [],
//       highlights: [],
//     },
//   });

//   const [mainImageFile, setMainImageFile] = useState(null);
//   const [additionalImageFiles, setAdditionalImageFiles] = useState([]);
//   const [mapImageFile, setMapImageFile] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);

//   useEffect(() => {
//     fetchTours();
//   }, []);

//   const fetchTours = async () => {
//     const { data, error } = await supabase.from("tours").select("*");
//     if (error) console.error("Error fetching tours:", error);
//     else setTours(data);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setCurrentTour((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleHighlightDataChange = (e) => {
//     const { name, value } = e.target;
//     setCurrentTour(prev => ({
//       ...prev,
//       highlights_data: {
//         ...prev.highlights_data,
//         [name]: value
//       }
//     }));
//   };

//   const handleImageUpload = async (file, path) => {
//     if (!file) return null;
//     const fileExt = file.name.split(".").pop();
//     const fileName = `${uuidv4()}.${fileExt}`;
//     const filePath = `${path}/${fileName}`;

//     const { error } = await supabase.storage
//       .from("tour-images")
//       .upload(filePath, file);

//     if (error) {
//       console.error("Error uploading image:", error);
//       return null;
//     }

//     return supabase.storage.from("tour-images").getPublicUrl(filePath).data
//       .publicUrl;
//   };

//   const handleSubmit = async () => {
//     try {
//       // Upload images
//       const mainImageUrl = mainImageFile
//         ? await handleImageUpload(mainImageFile, "main-images")
//         : currentTour.main_image;
  
//       const additionalImageUrls =
//         additionalImageFiles.length > 0
//           ? await Promise.all(
//               additionalImageFiles.map((file) =>
//                 handleImageUpload(file, "additional-images")
//               )
//             )
//           : currentTour.images;
  
//       const mapImageUrl = mapImageFile
//         ? await handleImageUpload(mapImageFile, "map-images")
//         : currentTour.highlights_data.mapImage;
  
//       const tourData = {
//         ...currentTour,
//         // Generate a new UUID for new tours
//         id: isEditing ? currentTour.id : uuidv4(),
//         main_image: mainImageUrl,
//         images: additionalImageUrls,
//         highlights_data: {
//           mapImage: mapImageUrl,  // Fixed: Using the uploaded mapImageUrl
//           included: currentTour.highlights_data.included.split(",").map(item => item.trim()),
//           notIncluded: currentTour.highlights_data.notIncluded.split(",").map(item => item.trim()),
//           highlights: currentTour.highlights_data.highlights.split(",").map(item => item.trim())
//         },
//         price: parseFloat(currentTour.price).toFixed(2),
//         rating: parseFloat(currentTour.rating).toFixed(1),
//         reviews: parseInt(currentTour.reviews),
//         duration: parseInt(currentTour.duration),
//         categories: typeof currentTour.categories === 'string' 
//           ? currentTour.categories.split(",").map((c) => c.trim())
//           : currentTour.categories,
//       };
  
//       const { error } = isEditing
//         ? await supabase.from("tours").update(tourData).eq("id", currentTour.id)
//         : await supabase.from("tours").insert(tourData);
  
//       if (error) throw error;
  
//       resetForm();
//       fetchTours();
//     } catch (error) {
//       console.error("Error saving tour:", error);
//     }
//   };

//   const handleEdit = (tour) => {
//     setCurrentTour({
//       ...tour,
//       categories: Array.isArray(tour.categories) ? tour.categories.join(", ") : tour.categories,
//       highlights_data: {
//         mapImage: tour.highlights_data?.mapImage || "",
//         included: Array.isArray(tour.highlights_data?.included) 
//           ? tour.highlights_data.included.join(", ") 
//           : tour.highlights_data?.included || "",
//         notIncluded: Array.isArray(tour.highlights_data?.notIncluded)
//           ? tour.highlights_data.notIncluded.join(", ")
//           : tour.highlights_data?.notIncluded || "",
//         highlights: Array.isArray(tour.highlights_data?.highlights)
//           ? tour.highlights_data.highlights.join(", ")
//           : tour.highlights_data?.highlights || "",
//       },
//     });
//     setIsEditing(true);
//   };

//   const handleDeleteTour = async (id) => {
//     if (confirm("Are you sure you want to delete this tour?")) {
//       const { error } = await supabase.from("tours").delete().eq("id", id);
//       if (error) console.error("Error deleting tour:", error);
//       else fetchTours();
//     }
//   };

//   const resetForm = () => {
//     setCurrentTour({
//       id: "",
//       title: "",
//       description: "",
//       price: 0,
//       rating: 0,
//       reviews: 0,
//       duration: 0,
//       country: "",
//       season: "Year Round",
//       categories: [],
//       departure_location: "",
//       destination_location: "",
//       main_image: "",
//       images: [],
//       highlights_data: {
//         mapImage: "",
//         included: [],
//         notIncluded: [],
//         highlights: [],
//       },
//     });
//     setMainImageFile(null);
//     setAdditionalImageFiles([]);
//     setMapImageFile(null);
//     setIsEditing(false);
//   };

//   return (
//     <div className="container mx-auto p-4 mt-24">
//       <div className="bg-white shadow-md text-gray-800 rounded-lg overflow-hidden">
//         <div className="p-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* Tour Form */}
//             <div className="space-y-4">
//               <h2 className="text-xl font-semibold mb-4">
//                 {isEditing ? "Edit Tour" : "Add New Tour"}
//               </h2>

//               {/* Basic Information */}
//               <input
//                 name="title"
//                 placeholder="Tour Title"
//                 value={currentTour.title}
//                 onChange={handleInputChange}
//                 className="w-full p-2 border rounded"
//               />

//               <textarea
//                 name="description"
//                 placeholder="Description"
//                 value={currentTour.description}
//                 onChange={handleInputChange}
//                 className="w-full p-2 border rounded h-32"
//               />

//               <div className="grid grid-cols-2 gap-4">
//                 <input
//                   type="number"
//                   name="price"
//                   step="0.01"
//                   placeholder="Price"
//                   value={currentTour.price}
//                   onChange={handleInputChange}
//                   className="w-full p-2 border rounded"
//                 />
//                 <input
//                   type="number"
//                   name="rating"
//                   placeholder="Rating"
//                   step="0.1"
//                   max="5"
//                   value={currentTour.rating}
//                   onChange={handleInputChange}
//                   className="w-full p-2 border rounded"
//                 />
//               </div>

//               <div className="grid grid-cols-2 gap-4">
//                 <input
//                   type="number"
//                   name="reviews"
//                   placeholder="Reviews Count"
//                   value={currentTour.reviews}
//                   onChange={handleInputChange}
//                   className="w-full p-2 border rounded"
//                 />
//                 <input
//                   type="number"
//                   name="duration"
//                   placeholder="Duration (days)"
//                   value={currentTour.duration}
//                   onChange={handleInputChange}
//                   className="w-full p-2 border rounded"
//                 />
//               </div>

//               <div className="grid grid-cols-2 gap-4">
//                 <input
//                   name="country"
//                   placeholder="Country"
//                   value={currentTour.country}
//                   onChange={handleInputChange}
//                   className="w-full p-2 border rounded"
//                 />
//                 <select
//                   name="season"
//                   value={currentTour.season}
//                   onChange={handleInputChange}
//                   className="w-full p-2 border rounded"
//                 >
//                   <option>Year Round</option>
//                   <option>October - April</option>
//                   <option>November - April</option>
//                 </select>
//               </div>

//               <div className="grid grid-cols-2 gap-4">
//                 <input
//                   name="departure_location"
//                   placeholder="Departure Location"
//                   value={currentTour.departure_location}
//                   onChange={handleInputChange}
//                   className="w-full p-2 border rounded"
//                 />
//                 <input
//                   name="destination_location"
//                   placeholder="Destination Location"
//                   value={currentTour.destination_location}
//                   onChange={handleInputChange}
//                   className="w-full p-2 border rounded"
//                 />
//               </div>

//               <input
//                 name="categories"
//                 placeholder="Categories (comma separated)"
//                 value={currentTour.categories}
//                 onChange={handleInputChange}
//                 className="w-full p-2 border rounded"
//               />

//               {/* Image Uploads */}
//               <div className="space-y-4">
//                 <div>
//                   <label>Main Image</label>
//                   <input
//                     type="file"
//                     onChange={(e) => setMainImageFile(e.target.files[0])}
//                     className="w-full p-2 border rounded"
//                   />
//                   {currentTour.main_image && (
//                     <img src={currentTour.main_image} className="h-32 mt-2" alt="Main tour image" />
//                   )}
//                 </div>

//                 <div>
//                   <label>Additional Images</label>
//                   <input
//                     type="file"
//                     multiple
//                     onChange={(e) =>
//                       setAdditionalImageFiles([...e.target.files])
//                     }
//                     className="w-full p-2 border rounded"
//                   />
//                   <div className="flex flex-wrap gap-2 mt-2">
//                     {currentTour.images?.map((img, i) => (
//                       <img
//                         key={i}
//                         src={img}
//                         className="h-24 w-24 object-cover"
//                         alt={`Tour image ${i+1}`}
//                       />
//                     ))}
//                   </div>
//                 </div>

//                 <div>
//                   <label>Map Image</label>
//                   <input
//                     type="file"
//                     onChange={(e) => setMapImageFile(e.target.files[0])}
//                     className="w-full p-2 border rounded"
//                   />
//                   {currentTour.highlights_data?.mapImage && (
//                     <img
//                       src={currentTour.highlights_data.mapImage}
//                       className="h-32 mt-2"
//                       alt="Tour map"
//                     />
//                   )}
//                 </div>
//               </div>

//               {/* Highlights Data */}
//               <div className="space-y-4">
//                 <textarea
//                   name="included"
//                   placeholder="Included Features (comma separated)"
//                   value={currentTour.highlights_data.included || ""}
//                   onChange={handleHighlightDataChange}
//                   className="w-full p-2 border rounded h-32"
//                 />
//                 <textarea
//                   name="notIncluded"
//                   placeholder="Not Included (comma separated)"
//                   value={currentTour.highlights_data.notIncluded || ""}
//                   onChange={handleHighlightDataChange}
//                   className="w-full p-2 border rounded h-32"
//                 />
//                 <textarea
//                   name="highlights"
//                   placeholder="Highlights (comma separated)"
//                   value={currentTour.highlights_data.highlights || ""}
//                   onChange={handleHighlightDataChange}
//                   className="w-full p-2 border rounded h-32"
//                 />
//               </div>

//               <button
//                 onClick={handleSubmit}
//                 className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
//               >
//                 {isEditing ? "Update Tour" : "Add Tour"}
//               </button>
//             </div>

//             {/* Existing Tours List */}
//             <div>
//               <h2 className="text-xl font-semibold mb-4">Existing Tours</h2>
//               <div className="space-y-4">
//                 {tours.map((tour) => (
//                   <div key={tour.id} className="border p-4 rounded">
//                     <h3 className="font-bold">{tour.title}</h3>
//                     <div className="flex gap-2 mt-2">
//                       <button
//                         onClick={() => handleEdit(tour)}
//                         className="bg-yellow-500 text-white px-2 py-1 rounded"
//                       >
//                         Edit
//                       </button>
//                       <button
//                         onClick={() => handleDeleteTour(tour.id)}
//                         className="bg-red-500 text-white px-2 py-1 rounded"
//                       >
//                         Delete
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ToursAdminDashboard;