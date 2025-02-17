import apiClient from "../config/api-client"
import Expense from "../model/Expense"


export const getExpenses=()=>{
    return apiClient.get<Expense[]>('/expense');
}

export const getExpenseByExepenseId=(expenseId:string)=>{
    return apiClient.get<Expense>(`/expense/${expenseId}`);

}

export const deleteByExepenseId=(expenseId:string)=>{
    return apiClient.delete<void>(`/expense/${expenseId}`)
}
