import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const UpcomingMovies = () => {
  const location = useLocation();
  useEffect(() => {
    const pageTitle = "usePopcorn | Upcoming Movies";
    document.title = pageTitle;
  }, [location]);
  return <div>UpcomingMovies</div>;
};

export default UpcomingMovies;
