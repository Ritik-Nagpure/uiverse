import Header from './Header'
import Footer from './Footer'
import App from './App'

function Layout() {
  return (
    <div className="flex flex-col p-1 h-full bg-blue-950 text-white">
      <div className="">
        <Header />
      </div>
      <div className="flex-grow rounded-md p-2">
        <App />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  )
}

export default Layout