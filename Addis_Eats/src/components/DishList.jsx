import Dish from "./Dish";

export function DishList({ dishes }) {
  return (
    <div>
      {dishes.map((dish) => (
        <Dish
          key={dish.id}
          name={dish.name}
          category={dish.category}
          price={dish.price}
        />
      ))}
    </div>
  );
}
