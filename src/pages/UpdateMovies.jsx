import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const UpdateMovies = () => {
  const location = useLocation();
  useEffect(() => {
    const pageTitle = "usePopcorn | Update Movies";
    document.title = pageTitle;
  }, [location]);
  return <div>UpdateMovies</div>;
};

export default UpdateMovies;
