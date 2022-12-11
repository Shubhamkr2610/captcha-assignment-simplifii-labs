import React from 'react'
import { useNavigate } from 'react-router-dom'

export const InfoPage = ({info}) => {
    const navigate = useNavigate()
  return (
    <>
    <div className="login-form">
      <div className="form-title">Your Information</div>
      <div className="from-input">
        <label htmlFor="username">Name</label>
        <input type="text" id="username" placeholder="Enter name here" />{info.name}
      </div>
      <div className="from-input">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Enter email here" />{info.email}
      </div>
      <div className="from-input">
        <button id="login-btn" onClick={()=>navigate(-1)}>
          Go back
        </button>
      </div>
    </div>
  </>
  )
}
