import React from 'react'
interface ConfirmDailogProps{
    show:boolean;
    title:string;
    message:string;
    onCancel:()=>void;
    onConfirm:()=>void;
}
const ConfirmDailog:React.FC<ConfirmDailogProps> = ({show,title,message,onCancel,onConfirm}) => {
    if(!show){
        return null;
    }
  return (
    <div className='modal show d-block'
      tabIndex={-1}
      style={{backgroundColor:"rgba(0,0,0,0.5"}}>
        <div className='modal-dailog'>
            <div className='modal-content'>
                <div className='modal-header'>
                    <h5 className='modal-title'>{title}</h5>
                    <button className='btn-close'
                    type='button' aria-label='Close'
                    onClick={onCancel} ></button>
                </div>
                <div className='modal-body'>
                    <p>{message}</p>
                </div>
                <div className='modal-footer'>
                    <button className='btn btn-sm btn-secondary' type='button' onClick={onCancel}>Cancel</button>
                    <button className='btn btn-sm btn-primary' type='button' onClick={onConfirm}>Confirm</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ConfirmDailog
