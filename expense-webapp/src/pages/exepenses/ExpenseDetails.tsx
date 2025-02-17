import { Link, useNavigate, useParams } from 'react-router-dom'
import CurrencyUtils from '../../utils/CurrencyUtils';
import DateUtils from '../../utils/DateUtils';
import useExpenseByExpenseId from '../../hooks/useExpenseByExpenseId';
import ConfirmDailog from '../../components/ConfirmDailog';
import { useState } from 'react';
import { deleteByExepenseId } from '../../services/expenseService';
deleteByExepenseId
const ExpenseDetails = () => {
  const{expenseId}=useParams();
  const{expense,errors,isLoading,setLoaders,setErrors}=useExpenseByExpenseId(expenseId!);

  const[showDailog,setShowDailog]=useState<boolean>(false);
  const navigate=useNavigate();
  const handleCancel=()=>{
    console.log("cancel called");
    setShowDailog(false);
  }
  const handleConfirm=()=>{
    setLoaders(true);
    deleteByExepenseId(expenseId!)
    .then((response)=>{
      if(response && response.status===204){
        navigate('/');
      }
     
    })
    .catch((error)=>setErrors(error.message))
    .finally(()=>{
      setLoaders(false);
      setShowDailog(false);
    })
    console.log("confirm called");
    setShowDailog(false);
  }
  if(expenseId){
   <p className='text-danger'>Invalid expenseId</p>
  }
  return (
    <div className='container mt-2'>
      {isLoading&& <p>Loading...</p>}
      {errors &&<p className='text-danger'>{errors}</p>}
      <div className="d-flex flex-row-reverse mb-2">
        <button className='btn btn-sm btn-danger' onClick={()=>setShowDailog(true)}>Delete </button>
        <button className='btn btn-sm btn-warning mx-2'>Edit </button>
        <Link className='btn btn-sm btn-secondary' to='/'>Back </Link>
      </div>
     <div className='card'>
     <div className="card-boary p-3">
      <table className='table table-borderless table-responsive'>
        <tbody>
          <tr>
            <th>
              Name
            </th>
            <td>
              {expense?expense?.name:"N/A"}
            </td>
          </tr>
          <tr>
            <th>Category</th>
            <td>{expense?expense?.category:"N/A"}</td>
          </tr>
          <tr>
            <th>Amount</th>
            <td>{expense?CurrencyUtils.formatINR(expense?.amount!):"N/A"}</td>
          </tr>
          <tr>
            <th>Date</th>
            <td>{expense?DateUtils.formatDateString(expense?.date!):"N/A"}</td>
          </tr>
          <tr>
            <th>Notes</th>
            <td>{expense?expense?.note:"N/A"}</td>
          </tr>
        </tbody>
      </table>
     </div>
     </div>
     <ConfirmDailog onCancel={handleCancel} onConfirm={handleConfirm} show={showDailog} title="Cofirm Delete" message='Are you sure want to delete this item?'></ConfirmDailog>
    </div>
  )
}

export default ExpenseDetails
