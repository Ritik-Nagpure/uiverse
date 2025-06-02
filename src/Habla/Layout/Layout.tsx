import Header from "./Header";
import Footer from "./Footer";
import App from "./App";

function Layout() {
  return (
    <div className="flex flex-col p-1 h-screen">
      <Header />
      <div className="flex-grow rounded-md overflow-hidden p-2">
        <App />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
