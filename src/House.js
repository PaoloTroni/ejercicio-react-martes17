export const House = ({ title, img, price, bathrooms, highlighted }) => {
  return (
    <div>
      <h2>{title}</h2>
      <img src={img}></img>
      <p>Precio {price}$</p>
      <p>Número de baños{bathrooms}</p>
      {highlighted && <p> Este artículo esta resaltado</p>}
      {/* {highlighted ? <p> Este artículo esta resaltado</p> : null}; */}
    </div>
  );
};

// export {House}
// export default House;
