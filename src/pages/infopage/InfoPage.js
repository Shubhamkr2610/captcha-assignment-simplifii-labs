import React from 'react'
import './infopage.css'
import { useNavigate } from 'react-router-dom'

export const InfoPage = ({info}) => {
    const navigate = useNavigate()
  return (
    <>
    <div className="info-form">
      <div className="info-form-title">Your info</div>
      <div className="info-form-input">
        Name : {info.name}
      </div>
      <div className="info-form-input">
        Email : {info.email}
      </div>
      <div className="info-form-input">
        <button id="login-btn" onClick={()=>navigate(-1)}>
          Go back
        </button>
      </div>
    </div>
  </>
  )
}
