import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const AllMovies = () => {
  const location = useLocation();
  useEffect(() => {
    const pageTitle = "usePopcorn | All Movies";
    document.title = pageTitle;
  }, [location]);
  return <div>AllMovies</div>;
};

export default AllMovies;
