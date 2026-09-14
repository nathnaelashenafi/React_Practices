import { useState } from "react";
import { DishList } from "./components/DishList";
import { dishes } from "./data";
import { CategoryBar } from "./components/CategoryBar";

export function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredDishes =
    selectedCategory === "All"
      ? dishes
      : dishes.filter((dish) => dish.category === selectedCategory);

  return (
    <div>
      <h1>Addis Eats</h1>
      <CategoryBar
        categories={["All", "Main", "Vegan", "Desert"]}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <DishList dishes={filteredDishes} />
    </div>
  );
}
