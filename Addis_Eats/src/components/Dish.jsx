function Dish({ name, category, price }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Category: {category}</p>
      <p>Price: {price}</p>
    </div>
  );
}
export default Dish;
