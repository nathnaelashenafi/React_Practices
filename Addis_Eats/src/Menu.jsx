import { useState } from "react";
import { dishes } from "./data";
import DishList from "./components/DishList";
import CategoryBar from "./components/CategoryBar";

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDishes = dishes.filter((dish) => {
    const matchesCategory =
      selectedCategory === "All" || dish.category === selectedCategory;

    const matchesSearch = dish.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <h1>Addis Eats</h1>

      <input
        type="text"
        placeholder="Search dishes..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />

      <CategoryBar
        categories={["All", "Main", "Vegan", "Dessert"]}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <DishList dishes={filteredDishes} />
    </div>
  );
}

export default Menu;
