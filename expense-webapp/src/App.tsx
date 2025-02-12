import Dashboard from "./pages/dashboard/Dashboard"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import Navbar from "./components/Navbar"
const App = () => {
  return (
    <div>
      <Navbar/>
      <Dashboard/>
    </div>
  )
}

export default App
