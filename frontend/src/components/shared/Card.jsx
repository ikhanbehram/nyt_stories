function Card({ title, image, description, link }) {
  return (
    <div className="w-44 bg-nyt-darker rounded-xl p-4">
      {image && <img src={image} />}

      <h1 className=" text-nyt-primary text-md font-bold">{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default Card;
