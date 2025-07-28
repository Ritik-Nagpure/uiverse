export const Hero = () => (
    <section className="bg-gradient-to-tr from-indigo-600 to-purple-600 text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Innovative Frontend Solutions</h1>
        <p className="text-lg max-w-xl mx-auto">Explore beautifully designed UI examples tailored for every industry.</p>
    </section>
);

export const CTA = () => (
    <div className="bg-white py-12 text-center">
        <h2 className="text-3xl font-semibold mb-2">Have a project to showcase?</h2>
        <p className="mb-4 text-gray-600">Contribute your frontend magic and inspire the world.</p>
        <a
            href="https://github.com/yourrepo"
            target="_blank"
            className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition"
        >
            Submit Your Example
        </a>
    </div>
);
