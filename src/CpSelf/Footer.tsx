const Footer = () => (
  <footer className="bg-gray-100 py-10 text-center text-sm text-gray-500">
    <p>&copy; {new Date().getFullYear()} FrontendWare Inc. All rights reserved.</p>
    <div className="mt-2 space-x-4">
      <a href="https://github.com/yourrepo" target="_blank" className="hover:underline">GitHub</a>
      <a href="mailto:team@frontendware.dev" className="hover:underline">Contact Us</a>
    </div>
  </footer>
);
export default Footer;
