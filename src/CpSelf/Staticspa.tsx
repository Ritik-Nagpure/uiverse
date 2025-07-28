
type FrontendExample = {
  title: string;
  industry: string;
  image: string;
  liveUrl: string;
};

const examples: FrontendExample[] = [
  {
    title: "Real Estate Portal UI",
    industry: "Real Estate",
    image: "/images/real-estate.png",
    liveUrl: "https://example.com/real-estate-ui",
  },
  {
    title: "Restaurant Menu Display",
    industry: "Food & Beverage",
    image: "/images/restaurant-menu.png",
    liveUrl: "https://example.com/restaurant-ui",
  },
  {
    title: "Fitness Dashboard",
    industry: "Health & Wellness",
    image: "/images/fitness-dashboard.png",
    liveUrl: "https://example.com/fitness-ui",
  },
  // Add more as needed
];

const FrontendShowcase = () => (
  <main className="bg-gray-50 min-h-screen font-sans text-gray-800">
    <header className="text-center py-10">
      <h1 className="text-4xl font-bold">🖥️ Frontend Industry Showcase</h1>
      <p className="mt-2 text-lg text-gray-600">Elegant UIs for real-world applications</p>
    </header>

    <section className="max-w-7xl mx-auto px-6 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {examples.map(({ title, industry, image, liveUrl }) => (
        <a
          href={liveUrl}
          key={title}
          target="_blank"
          rel="noopener noreferrer"
          className="group transform transition hover:scale-[1.02]"
        >
          <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:ring-2 hover:ring-blue-400">
            <div className="relative overflow-hidden">
              <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover transition group-hover:scale-105 duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-30 transition"></div>
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold">{title}</h2>
              <p className="text-sm text-gray-500">{industry}</p>
            </div>
          </div>
        </a>
      ))}
    </section>

    <footer className="text-center py-10 mt-12 text-sm text-gray-500">
      &copy; {new Date().getFullYear()} Your Dev Brand. All rights reserved.
    </footer>
  </main>
);

export default FrontendShowcase;
