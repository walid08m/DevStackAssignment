import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/card";
import Footer from "./components/footer";
import technologies from "./data/technologies.json";

function App() {
  const [stack, setStack] = useState([]);

  const handleAdd = (technology) => {
    if (stack.some((item) => item.id === technology.id)) {
      return;
    }

    setStack([...stack, technology]);
  };

  const handleRemove = (id) => {
    setStack(stack.filter((item) => item.id !== id));
  };

  const handleRemoveAll = () => {
    setStack([]);
  };

  return (
    <>
      <Navbar />

      <Hero />

      <section className="max-w-7xl mx-auto px-6 py-16">
        {/* Section Heading */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Explore the{" "}
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="text-gray-600 mt-3">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {/* Cards + Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-10">

          {/* Technology Cards */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {technologies.map((technology) => (
              <Card
                key={technology.id}
                technology={technology}
                onAdd={handleAdd}
                isAdded={stack.some(
                  (item) => item.id === technology.id
                )}
              />
            ))}
          </div>

          {/* Your Stack */}
          <div className="bg-white border border-gray-200 rounded-2xl p-5 h-fit lg:sticky lg:top-24">

            <h3 className="text-xl font-bold text-gray-900">
              Your Stack
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              {stack.length} Technology Selected
            </p>

            {stack.length === 0 ? (
              <div className="mt-6 text-center py-8 border border-dashed border-gray-300 rounded-xl">
                <p className="text-sm text-gray-500">
                  Your stack is empty
                </p>
              </div>
            ) : (
              <div className="mt-5 space-y-3">
                {stack.map((technology) => (
                  <div
                    key={technology.id}
                    className="flex items-center gap-3 border border-gray-200 rounded-xl p-3"
                  >
                    {/* Icon */}
                    <div className="w-9 h-9 flex items-center justify-center shrink-0">
                      <img
                        src={technology.icon}
                        alt={technology.name}
                        className="w-7 h-7 object-contain"
                      />
                    </div>

                    {/* Technology Info */}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-900 truncate">
                        {technology.name}
                      </p>

                      <p className="text-xs text-gray-500 mt-0.5">
                        {technology.category}
                      </p>
                    </div>

                    {/* Remove */}
                    <button
                      onClick={() => handleRemove(technology.id)}
                      className="text-xl font-semibold text-red-400 hover:text-red-600 leading-none"
                      aria-label={`Remove ${technology.name}`}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Remove All */}
            <button
              onClick={handleRemoveAll}
              disabled={stack.length === 0}
              className="w-full mt-5 py-2.5 rounded-lg border border-pink-200 text-sm font-semibold text-pink-600 hover:bg-pink-50 disabled:opacity-40 disabled:hover:bg-transparent"
            >
              Remove All
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default App;