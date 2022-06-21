import React from 'react'
import ErrorAsset from '../Images/error.svg';
import { UilExclamationCircle } from '@iconscout/react-unicons';

const FormModalLeft = (props) => {
  return (
    <div className='alertMiniModal-form'>
      <div className='errorImg'><UilExclamationCircle size={19}/></div>
      <small>{props.message}</small>
      {/* <img src={ErrorAsset} /> */}
    </div>  
  )
}

export default FormModalLeft
