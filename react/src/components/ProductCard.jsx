const NO_IMAGE = "/no_image.svg";

export default function ProductCard({ product }) {
  const { name, price, images, favoriteCount } = product;

  return (
    <div className="card">
      <img
        className="card-img"
        src={images[0] || NO_IMAGE}
        alt={name}
        onError={(e) => (e.currentTarget.src = NO_IMAGE)}
      />
      <p className="card-name">{name}</p>
      <p className="card-price">{price.toLocalString()}원</p>
      <p className="card-favorite">♡ {favoriteCount}</p>
    </div>
  );
}
