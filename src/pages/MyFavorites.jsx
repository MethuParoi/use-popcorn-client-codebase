import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const MyFavorites = () => {
  const location = useLocation();
  useEffect(() => {
    const pageTitle = "usePopcorn | My Favorites";
    document.title = pageTitle;
  }, [location]);
  return <div>MyFavorites</div>;
};

export default MyFavorites;
