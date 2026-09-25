function Card({ technology, onAdd, isAdded }) {
  return (
    <div
      className={`bg-white rounded-2xl p-6 shadow-sm transition-all duration-200 ${
        isAdded
          ? "border border-pink-300"
          : "border border-gray-200"
      }`}
    >
      {/* Icon + Badge */}
      <div className="flex items-center justify-between">
        <div className="w-12 h-12 flex items-center justify-center">
          <img
            src={technology.icon}
            alt={technology.name}
            className="w-9 h-9 object-contain"
          />
        </div>

        <span className="text-xs font-semibold text-pink-700 bg-pink-50 px-3 py-1 rounded-full">
          {technology.badge}
        </span>
      </div>

      {/* Name */}
      <h3 className="text-xl font-bold text-gray-900 mt-5">
        {technology.name}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-600 leading-6 mt-2 min-h-[72px]">
        {technology.description}
      </p>

      {/* Category / Difficulty / Rating */}
      <div className="flex items-center justify-between mt-5 text-xs">
        <span className="text-xs font-medium text-pink-700 bg-pink-50 px-3 py-1 rounded-full">
          {technology.category}
        </span>

        <span className="text-gray-700">
          {technology.difficulty}
        </span>

        <span className="text-gray-700">
          ⭐ {technology.rating}
        </span>
      </div>

      {/* Add Button */}
      <button
        onClick={() => onAdd(technology)}
        disabled={isAdded}
        className={`w-full mt-5 py-2.5 rounded-lg font-medium transition-all ${
          isAdded
            ? "bg-pink-50 text-pink-700 cursor-not-allowed"
            : "bg-gray-900 text-white hover:bg-gray-800"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}

export default Card;
