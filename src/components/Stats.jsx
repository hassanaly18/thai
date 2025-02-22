import React from "react";

const Stats = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="flex justify-center items-center gap-2 mb-4">
            {/* <div className="h-px w-12 bg-blue-600"></div> */}
            {/* <span className="text-sm font-medium uppercase heading">Our Success</span> */}
            <div className="flex justify-center items-center gap-2 mb-4">
              <div className="h-px w-16 bg-[#312F93]"></div>
              <span className="text-l font-bold uppercase heading">
                Our success
              </span>
              <div className="h-px w-16 bg-[#312F93]"></div>
            </div>
            {/* <div className="h-px w-12 bg-blue-600"></div> */}
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Our Journey in Numbers
          </h2>

          <p className="text-gray-600 text-sm max-w-2xl mx-auto">
            Unveiling the Impact of Our Global Travel Adventures with Thousands
            of Happy Explorers
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {/* Satisfied Customers */}
          <div className="text-center">
            <p
              style={{ color: "var(--blue)" }}
              className="text-blue-600 text-3xl font-bold mb-2"
            >
              10K +
            </p>
            <p
              style={{ color: "var(--blue)" }}
              className="text-gray-600 text-sm"
            >
              Satisfied Customers
            </p>
          </div>

          {/* Destinations Covered */}
          <div className="text-center">
            <p
              style={{ color: "var(--blue)" }}
              className="text-blue-600 text-3xl font-bold mb-2"
            >
              500 +
            </p>
            <p
              style={{ color: "var(--blue)" }}
              className="text-gray-600 text-sm"
            >
              Destinations Covered
            </p>
          </div>

          {/* Tours Completed */}
          <div className="text-center">
            <p
              style={{ color: "var(--blue)" }}
              className="text-blue-600 text-3xl font-bold mb-2"
            >
              2500 +
            </p>
            <p
              style={{ color: "var(--blue)" }}
              className="text-gray-600 text-sm"
            >
              Tours Completed
            </p>
          </div>

          {/* Average Customer Rating */}
          <div className="text-center">
            <p
              style={{ color: "var(--blue)" }}
              className="text-blue-600 text-3xl font-bold mb-2"
            >
              4.8
            </p>
            <p
              style={{ color: "var(--blue)" }}
              className="text-gray-600 text-sm"
            >
              Average Customer Rating
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
