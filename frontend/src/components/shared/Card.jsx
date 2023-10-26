function Card({ title, image, description, link }) {
  return (
    <a href={link} target="_blank">
      <div className="w-44 bg-nyt-darker rounded-xl min-w-[13rem] min-h-[18rem] transition-all duration-150 hover:scale-105">
        {image && (
          <img
            src={image}
            className=" rounded-tl-xl rounded-tr-xl w-full h-40 object-cover"
          />
        )}
        <div className="flex flex-col gap-1 p-2">
          <h1 className=" text-nyt-primary text-md font-bold line-clamp-2">
            {title}
          </h1>
          <p className=" text-nyt-darkest text-xs font-semibold line-clamp-4">
            {description}
          </p>
        </div>
      </div>
    </a>
  );
}

export default Card;
