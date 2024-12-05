import { useNavigate } from "react-router-dom";

function MovieCards({ spot }) {
  const navigate = useNavigate();
  const handleExplore = () => {
    navigate(`/adventure-details/${spot.id}`);
  };
  return (
    <div className="card bg-base-100 w-80 shadow-xl">
      <figure>
        <img className="w-full h-60 object-cover" src={spot.image} alt="spot" />
      </figure>
      <div className="card-body">
        <h2 className="card-title line-clamp-1">{spot.title}</h2>
        {spot.ecoFriendlyFeatures.map((feature) => (
          <div
            key={feature}
            className="badge badge-secondary bg-green-200 border-transparent text-gray-800 line-clamp-1"
          >
            {feature}
          </div>
        ))}

        <button
          onClick={() => {
            handleExplore();
            setDetails(spot);
          }}
          className="w-[100%] h-12 bg-primary hover:bg-secondary text-neutral text-lg font-medium rounded-2xl  flex items-center justify-center mx-auto mt-4"
        >
          Explore Now
        </button>
      </div>
    </div>
  );
}

export default MovieCards;
