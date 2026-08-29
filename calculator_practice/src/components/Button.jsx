export function Button({ value, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center w-16 h-16 text-xl font-semibold text-white transition rounded-lg bg-gray-700 hover:bg-gray-600 active:scale-95"
    >
      {value}
    </button>
  );
}
