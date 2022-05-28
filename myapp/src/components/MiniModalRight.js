import React from 'react'
import ErrorAsset from '../Images/error.svg';
import { UilExclamationCircle } from '@iconscout/react-unicons';

const MiniModalRight = (props) => {
  return (
    <div className='alertMiniModalRight'>
      <div className='errorImg'><UilExclamationCircle size={19}/></div>
        {/* <img src={ErrorAsset} /> */}
        <small>{props.message}</small> 
    </div>
  )
}

export default MiniModalRight
