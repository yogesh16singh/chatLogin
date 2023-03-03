import React from 'react';
import { useState } from 'react';
import '../App.css'
import { useNavigate } from "react-router-dom";
import { Navigate } from 'react-router-dom';
import swal from 'sweetalert';

function Home() {


    const [adh, setAdh] = useState("");
    const [mob, setMob] = useState("");
    const [otp, setOtp] = useState("");
    const [reqid, setReqid] = useState("27053be9-aafc-4dad-8ef0-3c395a01dd8f");
    const [display, setDisplay] = useState("yogeshhidden");

    let navigate = useNavigate();

    function sendOtp2() {
        let fmob = `+91${mob}`;
        let data = {
            "originator": "SignOTP",
            "recipient": `${fmob}`,
            "content": "Greetings from SimpleCrew, your mobile verification code is: {}",
            "expiry": "600",
            "data_coding": "text"
        }
        console.log(fmob);

        console.log(typeof mob)
        const options2 = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                Token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhdXRoLWJhY2tlbmQ6YXBwIiwic3ViIjoiNWFkNjIzNzUtYjNmYS00OTBlLWE0ZWMtNzNlYThhZGE2ODMyIn0.M1ecWx7Qakshhr40vjTXx7Comddy-faEVAEVMZg0jXU',
                'X-RapidAPI-Key': 'a1bcdf2ca7msh3d6d7f7704dc9e2p1aaeb7jsn64444f4d05ff',
                'X-RapidAPI-Host': 'd7sms.p.rapidapi.com'
            },
            body: JSON.stringify(data)
        };

        fetch('https://d7sms.p.rapidapi.com/verify/v1/otp/send-otp', options2)
            .then(response => response.json())
            .then(response => {
                console.log(response);
                console.log(response.otp_id);
                console.log(response.status);
                setReqid(response.otp_id);
            })
            .catch(err => console.error(err));

    }

    function submitOtp() {
        // 27053be9-aafc-4dad-8ef0-3c395a01dd8f
        console.log("apicall2");
        let data = {
            "otp_id": `${reqid}`,
            "otp_code": `${otp}`
        }
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                Token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhdXRoLWJhY2tlbmQ6YXBwIiwic3ViIjoiNWFkNjIzNzUtYjNmYS00OTBlLWE0ZWMtNzNlYThhZGE2ODMyIn0.M1ecWx7Qakshhr40vjTXx7Comddy-faEVAEVMZg0jXU',
                'X-RapidAPI-Key': 'a1bcdf2ca7msh3d6d7f7704dc9e2p1aaeb7jsn64444f4d05ff',
                'X-RapidAPI-Host': 'd7sms.p.rapidapi.com'
            },
            body: JSON.stringify(data)
        };

        fetch('https://d7sms.p.rapidapi.com/verify/v1/otp/verify-otp', options)
            .then(response => response.json())
            .then(response => {
                console.log(response);
                console.log(response.status);
                if (response.status == "APPROVED")
                    navigate("/Chat");
                else
                    console.log("error in otp");
                swal("Error!", "Please enter Vaild OTP", "error");

            })
            .catch(err => console.error(err));
    }

    function sendOtp() {
        console.log("api call");
        console.log(typeof mob);
        const lstd = Math.ceil(Math.log10(mob + 1)) - 1;

        console.log(mob);
        console.log(mob.slice(7, 10));


        const encodedParams = new URLSearchParams();
        encodedParams.append("txn_id", "17c6fa41-778f-49c1-a80a-cfaf7fae2fb8");
        encodedParams.append("consent", "Y");
        encodedParams.append("uidnumber", adh);
        encodedParams.append("clientid", "222");
        encodedParams.append("method", "uidvalidatev2");

        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'X-RapidAPI-Key': 'a1bcdf2ca7msh3d6d7f7704dc9e2p1aaeb7jsn64444f4d05ff',
                'X-RapidAPI-Host': 'verifyaadhaarnumber.p.rapidapi.com'
            },
            body: encodedParams
        };

        fetch('https://verifyaadhaarnumber.p.rapidapi.com/Uidverifywebsvcv1/VerifyAadhaarNumber', options)
            .then(response => response.json())
            .then(response => {
                console.log(response);
                console.log(response.Succeeded.Uid_Details.Data.verified);
                console.log(response.Succeeded.Uid_Details.Data.mobile_number);
                console.log(typeof response.Succeeded.Uid_Details.Data.mobile_number);
                console.log(response.Succeeded.Uid_Details.Data.mobile_number.slice(7, 10));
                if (response.Succeeded.Uid_Details.Data.mobile_number.slice(7, 10) != mob.slice(7, 10)) {
                    swal("Error!", "Please enter correct details", "error");
                }

                else {
                    setDisplay("yogeshblock");
                    console.log("details are correct");
                    sendOtp2();
                }

            })
            .catch(err => console.error(err));


    }

    return <>
        <form autoComplete="off" className="form">
            <div className="control">
                <h1>
                    Sign In
                </h1>
            </div>
            <div className="control block-cube block-input">
                <input name="adhar" placeholder="Adhar no.." type="number" value={adh}
                    onChange={(e) => setAdh(e.target.value)} />
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
            <div className="control block-cube block-input">
                <input name="mobile" placeholder="mobile no.." type="number" value={mob}
                    onChange={(e) => setMob(e.target.value)} />
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
                    sendOtp();
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
                    Send OTP
                </div>
            </button>
            <div className={display}>
                <div className="control block-cube block-input ">
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
                        submitOtp();
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
            </div>
            <div className="credits">

            </div>
        </form>


    </>
}

export default Home;
