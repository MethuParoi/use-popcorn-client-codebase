const ViewCard = ({ title, summary, img, link }) => {
  return (
    <div
      onClick={() => window.open(link, "_blank")}
      className="card card-side bg-base-100 dark:bg-gray-700 shadow-xl w-[95%] sm:w-96 cursor-pointer sm:mb-6 lg:mb-0"
    >
      <figure className="w-[200px]">
        <img className="w-full h-full object-cover" src={img} alt="Movie" />
      </figure>
      <div className="card-body w-[75%]">
        <h2 className="card-title line-clamp-1">{title}</h2>
        <p className="line-clamp-4">{summary}</p>
      </div>
    </div>
  );
};

export default ViewCard;
