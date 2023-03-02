import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
const Eotp = (props) => {

    const [otp, setOtp] = useState("");
    const [reqid, setReqid] = useState("");
    let navigate = useNavigate();
    console.log(props);



    function apicall2() {
        console.log("api2 called");


    }

    return (
        <form autoComplete="off" className="form">
            <div className="control">
                <h1>
                    OTP
                </h1>
            </div>
            <div className="control block-cube block-input yogesh">
                <input name="otp" placeholder="Enter OTP" type="number" value={otp}
                    onChange={(e) => setOtp(e.target.value)} />
                <div className="bg-top">
                    <div className="bg-inner" />
                </div>
                <div className="bg-right">
                    <div className="bg-inner" />
                </div>
                <div className="bg">
                    <div className="bg-inner" />
                </div>
            </div>

            <button className="btn block-cube block-cube-hover" type="button"
                onClick={() => {
                    apicall2();
                }}>
                <div className="bg-top">
                    <div className="bg-inner" />
                </div>
                <div className="bg-right">
                    <div className="bg-inner" />
                </div>
                <div className="bg">
                    <div className="bg-inner" />
                </div>
                <div className="text" >
                    Submit OTP
                </div>
            </button>
            <div className="credits">
                <a href="https://codepen.io/marko-zub/" target="_blank">
                    My other codepens
                </a>
            </div>
        </form>

    )
}

export default Eotp