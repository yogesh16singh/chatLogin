import React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';
function Home() {
    const [adh, setAdh] = useState("");
    const [mob, setMob] = useState("");

    let navigate = useNavigate();
    function apicall2() { }

    function apicall() {

        console.log("api call");
        console.log(typeof mob);
        const lstd = Math.ceil(Math.log10(mob + 1)) - 1;

        console.log(mob);
        console.log(mob.slice(7, 10))

        // var digits = '0123456789';
        // let OTP = '';
        // for (let i = 0; i < 5; i++) {
        //     OTP += digits[Math.floor(Math.random() * 10)];
        // }
        // console.log(OTP);


        // const encodedParams = new URLSearchParams();
        // encodedParams.append("txn_id", "17c6fa41-778f-49c1-a80a-cfaf7fae2fb8");
        // encodedParams.append("consent", "Y");
        // encodedParams.append("uidnumber", adh);
        // encodedParams.append("clientid", "222");
        // encodedParams.append("method", "uidvalidatev2");

        // const options = {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/x-www-form-urlencoded',
        //         'X-RapidAPI-Key': 'a1bcdf2ca7msh3d6d7f7704dc9e2p1aaeb7jsn64444f4d05ff',
        //         'X-RapidAPI-Host': 'verifyaadhaarnumber.p.rapidapi.com'
        //     },
        //     body: encodedParams
        // };

        // fetch('https://verifyaadhaarnumber.p.rapidapi.com/Uidverifywebsvcv1/VerifyAadhaarNumber', options)
        //     .then(response => response.json())
        //     .then(response => {
        //         console.log(response);
        //         console.log(response.Succeeded.Uid_Details.Data.verified);
        //         console.log(response.Succeeded.Uid_Details.Data.mobile_number);
        //         console.log(typeof response.Succeeded.Uid_Details.Data.mobile_number);
        //         console.log(response.Succeeded.Uid_Details.Data.mobile_number.slice(7, 10));
        //         if (response.Succeeded.Uid_Details.Data.mobile_number.slice(7, 10) != mob.slice(7, 10)) {
        //             swal("Error!", "Please enter correct details", "error");
        //         }
        //         else {
        //             console.log("details are correct");
        //         }

        //     })
        //     .catch(err => console.error(err));



        // navigate("/chat");
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
                    apicall();
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
                    Log In
                </div>
            </button>
            <div className="credits">
                <a href="https://codepen.io/marko-zub/" target="_blank">
                    My other codepens
                </a>
            </div>
        </form>


    </>
}

export default Home;
