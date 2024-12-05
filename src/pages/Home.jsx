import { useEffect, useState } from "react";
import HeroSection from "../components/home/HeroSection";
import MovieCards from "../components/home/MovieCard";
import ExtraSection from "../components/home/ExtraSection";
import { useLocation } from "react-router-dom";

function Home() {
  const location = useLocation();
  useEffect(() => {
    const pageTitle = "use-popcorn | Home";
    document.title = pageTitle;
  }, [location]);

  //   const [travelSpot, setTravelSpot] = useState([]);
  //   useEffect(() => {
  //     fetch("Data.json")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setTravelSpot(data);
  //       });
  //   }, []);

  return (
    <div className="">
      <HeroSection />
      <h2 className="text-3xl font-semibold text-center mt-16 mb-8">
        Latest Movies
      </h2>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-16 justify-items-center my-16">
        {travelSpot.map((spot) => (
          <HomeCards key={spot.id} spot={spot} />
        ))}
      <ExtraSection />
      </div> */}
    </div>
  );
}

export default Home;
