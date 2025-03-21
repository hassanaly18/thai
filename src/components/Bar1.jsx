const Bar1 = () => {
    return (
      <div style={{backgroundColor:"var(--blue"}} className="bar1 text-white py-8 px-8 flex justify-center gap-10 items-center">
        <h2 className="quote text-3xl font-semibold mr-4">
          Words to <span style={{color:"var(--yellow)"}}>Wander</span> By
        </h2>
        <p className="text-md ml-4">
          The world is a book and those who do not travel read only one page. <br />
          <span style={{color:"var(--yellow)"}} className="text-yellow-400 ml-2">— St. Augustine</span>
        </p>
      </div>
    );
  };
  
  export default Bar1;