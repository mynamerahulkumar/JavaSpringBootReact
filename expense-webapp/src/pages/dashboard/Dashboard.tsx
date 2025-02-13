import { useEffect, useState } from "react"
import ExpenseList from "../../components/ExpenseList"
import { Expense } from "../../model/Expense"
import { getExpenses } from "../../services/expenseService"
import useExpenses from "../../hooks/useExpenses"
import DashboardStatus from "./DashboardStatus"

const Dashboard = () => {
  const loggedInUser:string='rahul@example.com'
  const{expenses,error,isLoading}=useExpenses();
 const totalExpenses=expenses.reduce((acc:number,expense:Expense)=>acc+expense.amount,0);
  return (
    <div className="container">
      {isLoading && <p> Loading....</p>}
      {error && <p>{error}</p>} 
      <DashboardStatus loggedInUser={loggedInUser} totalExpenses={totalExpenses}/>
      <hr/>
 <ExpenseList expenses={expenses}/>
    </div>
  )
 
}

export default Dashboard
