import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../homepage/homepage.css";

export const HomePage = ({ setUserInfo }) => {
  const [captcha, setCaptcha] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    enteredCaptcha: "",
    error: "",
  });

  const navigate = useNavigate();
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
    "&",
  ];

  const captchaGenerator = () => {
    let cap = "";
    for (let i = 0; i < 6; i++) {
      cap += alpha[Math.floor(Math.random() * alpha.length)];
    }
    return cap;
  };

  const validateData = () => {
    if (formData.name === "") {
      setFormData((prev) => ({ ...prev, error: "Name field  can't be empty" }));
      return false;
    }
    if (formData.email === "") {
      setFormData((prev) => ({ ...prev, error: "Email field  can't be empty" }));
      return false;
    }
    if (formData.enteredCaptcha === "") {
      setFormData((prev) => ({ ...prev, error: "Captcha field can't be empty" }));
      return false;
    }
    if(formData.enteredCaptcha !== captcha){
        setFormData((prev) => ({ ...prev, error: "Captcha didn't matched! Re-enter" }));
        return false;
    }
    setFormData((prev)=>({...prev, error:null}))
    return true;
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (validateData()) {
        if (formData.enteredCaptcha === captcha) {
            setUserInfo({ name: formData.name, email: formData.email });
            navigate("/info");
            return true;
          } 
    }

   
  };
  const refreshHandler = () => {
    setCaptcha(captchaGenerator());
  };

  useEffect(() => {
    setCaptcha(captchaGenerator());
  }, []);
  return (
    <>
      <div className="login-form">
        <div className="form-title">Contact Us</div>
        {formData.error && (
              <p className="error-msg">
                {formData.error}
              </p>
            )}
        <div className="form-input">
          <label htmlFor="username">Name</label>
          <input
            type="text"
            id="username"
            placeholder="Enter name here"
            value={formData.name}
            onInput={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  name: e.target.value,
                }))}
          />
        </div>
        <div className="form-input">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email here"
            value={formData.email}
            onInput={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  email: e.target.value,
                }))}
          />
        </div>
        <div className="captcha">
          <label htmlFor="captcha-input">Enter captcha</label>
          <div className="preview">{captcha}</div>
          <div className="captcha-form">
            <input
              type="text"
              id="captcha-from"
              placeholder="Enter captcha here"
              value={formData.enteredCaptcha}
              onInput={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  enteredCaptcha: e.target.value,
                }))}
            />
            <button className="captcha-refresh" onClick={refreshHandler}>
              Refresh
            </button>
          </div>
        </div>
        <div className="form-input">
          <button id="login-btn" onClick={submitHandler}>
            Login
          </button>
        </div>
      </div>
    </>
  );
};
