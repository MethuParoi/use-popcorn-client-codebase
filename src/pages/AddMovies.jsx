import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const AddMovies = () => {
  const location = useLocation();
  useEffect(() => {
    const pageTitle = "usePopcorn | Add Movies";
    document.title = pageTitle;
  }, [location]);
  return <div>AddMovies</div>;
};

export default AddMovies;
