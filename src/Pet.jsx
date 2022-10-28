import { Link } from "react-router-dom";

const Pet = ({ name, animal, breed, images, location, id }) => {
  let hero = "http://pet-images.dev-apis.com/pets/none.jpg";

  if (Array.isArray(images) && images.length) {
    hero = images[0];
  }

  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} data-testid="thumbnail" />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2 className="capitalize">
          {animal} | {breed} | {location}
        </h2>
      </div>
    </Link>
  );
};

export default Pet;
