/** 
 * 
 * 
 * 
 * 
 */


import React, { useState } from "react";
import loginImage from '../images/loginSucc.jpg';
import LoginForm from "../Components/LoginForm";
import RegForm from "../Components/RegForm";


export default function LoginPage () {
    const [currentForm, setCurrentForm] = useState('login');

    const toggleForm = (formName) => {
        setCurrentForm(formName);
        console.log("Current form name: ", formName);
    }


    

    return (
        <section className="main">
            <div className="container py-5 h-100 w-75">
                <div className="row d-flex justify-content-center align-items-center h-100 ">
                        <div className="card p-0" style={{ borderRadius: '1rem' }}>
                            <div className="row g-0" style={{ border: '.75rem double #905175', borderRadius: '1rem' }}>
                                <div className="col-md-6 col-lg-6 d-none d-md-block"
                                    style={{
                                        backgroundImage: `url(${loginImage})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                         }}>
                                </div>
                                <div className="col-md-6 col-lg-6 d-flex align-items-center" style={{ backgroundColor: '#b485b3c0',}}>
                                    <div className="card-body p-2 p-lg-5 text-black">
                                        {
                                            currentForm === 'login' ? <LoginForm onFormSwitch={toggleForm}/> : <RegForm onFormSwitch={toggleForm} />
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    );
}

