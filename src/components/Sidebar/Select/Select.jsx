import React from 'react'
import SelectStyle from './Select.module.css'
export default function Select(props) {
  return (
    <div className={SelectStyle.app}>
      <div className={SelectStyle.main}>
         <div className={SelectStyle.avatar}>
            <h2>CU</h2>
         </div>
         <div className={SelectStyle.title}>
            <h2>&nbsp; &nbsp; {props.title}</h2>
         </div>
      </div>
    </div>
  )
}
