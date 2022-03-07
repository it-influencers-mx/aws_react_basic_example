const ImageCardComponent = ({title, url}) => {
  return (
    <div className="image-card">
      <h2 className="image-card__title">{title}</h2>
      <img
      src={url}
      alt={title}
      className="image-card__image"
    />
    </div>
  );
};

export default ImageCardComponent;
