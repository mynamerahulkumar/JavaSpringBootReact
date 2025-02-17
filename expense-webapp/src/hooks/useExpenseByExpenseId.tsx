import { useEffect, useState } from "react";
import { getExpenseByExepenseId } from "../services/expenseService";
import Expense from "../model/Expense";

const useExpenseByExpenseId=(expenseId:string)=>{
    const[expense,setExpense]=useState<Expense|undefined>();
    const[errors,setErrors]=useState<string>("");
    const[isLoading,setLoaders]=useState<boolean>(false);
  
    useEffect(()=>{
      if(expenseId){
        getExpenseByExepenseId(expenseId!)
        .then(response=>setExpense(response.data))
        .catch((error)=>setErrors(error.messsage))
        .finally(()=>setLoaders(false));
      }
     
    },[]);
    return {expense,errors,isLoading,setLoaders,setErrors};
}

export default useExpenseByExpenseId;