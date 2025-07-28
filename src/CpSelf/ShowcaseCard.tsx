
type Props = {
  title: string;
  industry: string;
  image: string;
  liveUrl: string;
};

const ShowcaseCard: React.FC<Props> = ({ title, industry, image, liveUrl }) => (
  <a
    href={liveUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="group block bg-white rounded-xl shadow-lg overflow-hidden hover:ring-2 hover:ring-indigo-500 transition"
  >
    <div className="relative">
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent group-hover:opacity-50 opacity-0 transition" />
    </div>
    <div className="p-5">
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      <p className="text-sm text-indigo-600">{industry}</p>
    </div>
  </a>
);

export default ShowcaseCard;
