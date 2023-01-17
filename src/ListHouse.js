import { House } from "./House";

export const ListHouse = ({ houses }) => {
  return houses.map((house, index) => {
    const { title, img, price, bathrooms, highlighted } = house;
    return (
      <House
        key={index}
        title={title}
        img={img}
        price={price}
        bathrooms={bathrooms}
        highlighted={highlighted}
      />
    );
  });
};
