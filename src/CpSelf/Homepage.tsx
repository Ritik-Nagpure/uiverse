import { Hero, CTA } from "./hero_cta";
import ShowcaseGrid from "./ShowcaseGrid";
import Footer from "./Footer";

const HomePage = () => (
    <main className="bg-white text-gray-900">
        <Hero />
        <ShowcaseGrid />
        <CTA />
        <Footer />
    </main>
);

export default HomePage;
