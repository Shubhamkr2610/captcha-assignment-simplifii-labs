import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../homepage/homepage.css";

export const HomePage = ({setUserInfo}) => {
    const [name , setName] = useState("")
    const [email , setEmail] = useState("")
    const [enteredCaptcha, setEnteredcaptcha] = useState("");
    const [captcha, setCaptcha] = useState("");

  const navigate = useNavigate()
  var alpha = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    '&'
  ];

  const generateCaptcha = () =>{
    let cap = ""
    for ( let i =0 ; i<6 ; i++){
        
        cap += alpha[Math.floor(Math.random() * alpha.length)];
    }
    return cap
  }
  const submitHandler = () => {
    if (enteredCaptcha === captcha) {
    setUserInfo({name : name , email: email})
    navigate("/info")
      return true;

    } else {
      alert("Please enter valid captcha");
      refreshHandler();
      return false;
    }
  };
  const refreshHandler = () => {
    setCaptcha(generateCaptcha());
  };

  useEffect(() => {
    setCaptcha(generateCaptcha());
  }, []);
  return (
    <>
      <div className="login-form">
        <div className="form-title">Contact Us</div>
        <div className="from-input">
          <label htmlFor="username">Name</label>
          <input type="text" id="username" placeholder="Enter name here" value={name} onInput={(e)=> setName(e.target.value)}/>
        </div>
        <div className="from-input">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter email here" value={email} onInput={(e)=> setEmail(e.target.value)}/>
        </div>
        <div className="captcha">
          <label htmlFor="captcha-input">Enter captcha</label>
          <div className="preview">{captcha}</div>
          <div className="captcha-form">
            <input
              type="text"
              id="captcha-from"
              placeholder="Enter captcha here"
              value={enteredCaptcha}
              onInput={(e) => setEnteredcaptcha(e.target.value)}
            />
            <button className="captcha-refresh" onClick={refreshHandler}>
              refresh
            </button>
          </div>
        </div>
        <div className="from-input">
          <button id="login-btn" onClick={submitHandler}>
            Login
          </button>
        </div>
      </div>
    </>
  );
};
