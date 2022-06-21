import React from 'react'
import ErrorAsset from '../Images/error.svg';
import { UilExclamationCircle } from '@iconscout/react-unicons';

const FormModalRight = (props) => {
  return (
    <div className='alertMiniModalRight-form'>
      <div className='errorImg'><UilExclamationCircle size={19}/></div>
        {/* <img src={ErrorAsset} /> */}
        <small>{props.message}</small> 
    </div>
  )
}

export default FormModalRight
