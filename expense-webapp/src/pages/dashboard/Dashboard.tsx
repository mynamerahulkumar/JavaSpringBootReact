import { useEffect, useState } from "react"
import ExpenseList from "../../components/ExpenseList"
import { Expense } from "../../model/Expense"
import { getExpenses } from "../../services/expenseService"
import useExpenses from "../../hooks/useExpenses"

const Dashboard = () => {
  const{expenses,error,isLoading}=useExpenses();

  return (
    <div className="container">
      {isLoading && <p> Loading....</p>}
      {error && <p>{error}</p>} 
 <ExpenseList expenses={expenses}/>
    </div>
  )
 
}

export default Dashboard
