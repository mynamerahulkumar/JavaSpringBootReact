import { useEffect, useState } from "react";
import Expense from "../model/Expense";
import { getExpenses } from "../services/expenseService";

const useExpenses=()=>{
    const[expenses,setExpenses]=useState<Expense[]>([]);
    const[error,setErrors]=useState(null);
    const[isLoading,setLoader]=useState(false);
    useEffect(()=>{
      setLoader(true);
     getExpenses()
      .then((response)=>{
        setExpenses(response.data);
  
      })// return promise then we are catching the response or error
      .catch((error)=>setErrors(error.nessage))
      .finally(()=>setLoader(false))
    },[]);// it will load only time unless the array changes
    return {expenses,error,isLoading}
}

export default useExpenses;