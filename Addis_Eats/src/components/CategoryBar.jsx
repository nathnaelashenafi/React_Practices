function CategoryBar({ categories, selectedCategory, onCategoryChange }) {
  return (
    <div className="flex gap-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={
            selectedCategory === category
              ? "rounded-md bg-black px-4 py-2 text-white"
              : "rounded-md bg-gray-200 px-4 py-2 text-black"
          }
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryBar;
