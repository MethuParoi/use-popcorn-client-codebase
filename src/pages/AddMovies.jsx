import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";

const AddMovies = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const [rating, setRating] = useState(0); // For star rating
  const user_email = user.email;

  useEffect(() => {
    const pageTitle = "usePopcorn | Add Movies";
    document.title = pageTitle;
  }, [location]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (rating === 0) {
      toast.error("Please select a rating!");
      return;
    }

    const movieData = {
      ...data,
      genre: Array.isArray(data.genre) ? data.genre : [data.genre],
      rating,
      user_email,
    };
    // console.log(movieData);
    axios
      .post(
        "https://assignment-10-server-three-theta.vercel.app/add-movie",
        movieData
      )
      .then((res) => {
        if (res.status === 200) {
          toast.success("Movie added successfully!");
        }
      })
      .catch((err) => {
        toast.error("An error occurred. Please try again.");
      });
  };

  const handleRating = (rate) => {
    setRating(rate);
  };

  return (
    <div className="sm:p-6 p-2  mx-auto mb-10">
      <h2 className="text-3xl font-semibold text-center  my-8 border-b-2 border-gray-400 w-[250px] mx-auto">
        Add New Movie
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Movie Poster */}
        <div className="relative mb-8">
          <label className="block mb-2 font-medium">Movie Poster URL</label>
          <input
            type="url"
            placeholder="Enter image URL"
            {...register("movie_poster", {
              required: "Poster URL is required",
              pattern: {
                value: /^(https?:\/\/)/,
                message: "Please provide a valid image URL",
              },
            })}
            className="input-field border-2 border-gray-400 rounded-lg shadow-lg h-10 px-2"
          />
          {errors.movie_poster && (
            <span className="text-red-500 absolute bottom-[-25px] left-0">
              {errors.movie_poster.message}
            </span>
          )}
        </div>

        {/* Movie Title */}
        <div className="relative mb-8">
          <label className="block mb-2 font-medium">Movie Title</label>
          <input
            type="text"
            placeholder="Enter movie title"
            {...register("movie_title", {
              required: "Title is required",
              minLength: {
                value: 2,
                message: "Title must be at least 2 characters",
              },
            })}
            className="input-field border-2 border-gray-400 rounded-lg shadow-lg h-10 px-2"
          />
          {errors.movie_title && (
            <span className="text-red-500 absolute bottom-[-25px] left-0">
              {errors.movie_title.message}
            </span>
          )}
        </div>

        {/* Genre */}
        <div className="relative mt-20 mb-8">
          <label className="block mb-2 font-medium">Genre</label>
          <select
            {...register("genre", { required: "Please select a genre" })}
            className="input-field border-2 border-gray-400 rounded-lg shadow-lg h-10 px-2"
          >
            <option value="">Select Genre</option>
            <option value="Comedy">Comedy</option>
            <option value="Drama">Drama</option>
            <option value="Horror">Horror</option>
            <option value="Action">Action</option>
            <option value="Biography">Biography</option>
            <option value="History">History</option>
          </select>
          {errors.genre && (
            <span className="text-red-500  absolute bottom-[-25px] left-0">
              {errors.genre.message}
            </span>
          )}
        </div>

        {/* Duration */}
        <div className="relative mb-8">
          <label className="block mb-2 font-medium">Duration (minutes)</label>
          <input
            type="number"
            placeholder="Enter duration in minutes"
            {...register("duration", {
              required: "Duration is required",
              min: {
                value: 60,
                message: "Must be greater than 60 minutes",
              },
            })}
            className="input-field border-2 border-gray-400 rounded-lg shadow-lg h-10 px-2"
          />
          {errors.duration && (
            <span className="text-red-500 absolute bottom-[-25px] left-0">
              {errors.duration.message}
            </span>
          )}
        </div>

        {/* Release Year */}
        <div className="relative mb-8">
          <label className="block mb-2 font-medium">Release Year</label>
          <select
            {...register("release_year", {
              required: "Please select a release year",
            })}
            className="input-field"
          >
            <option value="">Select Year</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="2015">2015</option>
          </select>
          {errors.release_year && (
            <span className="text-red-500 absolute bottom-[-25px] left-0">
              {errors.release_year.message}
            </span>
          )}
        </div>

        {/* Rating */}
        <div className="relative mb-8">
          <label className="block mb-2 font-medium">Rating</label>
          <Rating
            onClick={handleRating}
            ratingValue={rating}
            iconsCount={10}
            size={24}
            fillColor="gold"
            emptyColor="gray"
            SVGstyle={{ display: "inline" }}
          />
          {rating === 0 && (
            <span className="text-red-500 absolute bottom-[-25px] left-0">
              Rating is required
            </span>
          )}
        </div>

        {/* Summary */}
        <div className="relative mb-16">
          <label className="block mb-2 font-medium">Summary</label>
          <textarea
            placeholder="Enter a short summary"
            {...register("summary", {
              required: "Summary is required",
              minLength: {
                value: 10,
                message: "Summary must be at least 10 characters",
              },
            })}
            className="input-field border-2 border-gray-400 rounded-lg shadow-lg h-20 px-2"
          />
          {errors.summary && (
            <span className="text-red-500 absolute bottom-[-25px] left-0">
              {errors.summary.message}
            </span>
          )}
        </div>

        <div className="my-8">
          <button
            type="submit"
            className="mt-6 px-4 w-[310px] py-2 bg-primary text-white rounded hover:bg-secondary"
          >
            Add Movie
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddMovies;


