import Dashboard from "./pages/dashboard/Dashboard"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import Navbar from "./components/Navbar"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/login/Login"
import Register from "./pages/login/Register"
import ExpenseDetails from "./pages/exepenses/ExpenseDetails"
import ExpenseReport from "./pages/exepenses/ExpenseReport"
import NewExpense from "./pages/exepenses/NewExpense"
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Dashboard/>}></Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/expensedetail" element={<ExpenseDetails/>}/>
        <Route path="/expensereport" element={<ExpenseReport/>}/>
        <Route path="/newexpense" element={<NewExpense/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
