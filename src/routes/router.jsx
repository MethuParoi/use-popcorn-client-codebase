import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import PrivateRoute from "./PrivateRoute";
import Home from "../pages/Home";
import MovieDetails from "../pages/MovieDetails";
// import UpdateProfile from "../components/profile/UpdateProfile";
import ForgotPassword from "../pages/ForgotPassword";
import AllMovies from "../pages/AllMovies";
import AddMovies from "../pages/AddMovies";
import UpdateMovies from "../pages/UpdateMovies";
import MyFavorites from "../pages/MyFavorites";
import UpcomingMovies from "../pages/UpcomingMovies";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-movies",
        element: <AllMovies />,
      },
      {
        path: "/upcoming-movies",
        element: <UpcomingMovies />,
      },
      {
        path: "/add-movie",
        element: (
          <PrivateRoute>
            <AddMovies />
          </PrivateRoute>
        ),
      },
      {
        path: "/update-movie",
        element: (
          <PrivateRoute>
            <UpdateMovies />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-favorites",
        element: (
          <PrivateRoute>
            <MyFavorites />
          </PrivateRoute>
        ),
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
