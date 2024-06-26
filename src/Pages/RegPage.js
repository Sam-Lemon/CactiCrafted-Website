import React, { useState } from "react";
import RegForm from "../Components/RegForm";
import regImage from '../images/regSucc.jpg';


export default function RegPage () {
    const [currentForm, setCurrentForm] = useState('register');

    const toggleForm = (formName) => {
        setCurrentForm(formName);
        console.log("Current form name: ", formName);
    }

    return (
        <section className="main">
            <div className="container py-5 h-100 w-90">
                <div className="row d-flex justify-content-center align-items-center h-100 ">
                        <div className="card p-0" style={{ borderRadius: '1rem' }}>
                            <div className="row g-0" style={{ border: '.75rem double #905175', borderRadius: '1rem' }}>
                                <div className="col-md-6 col-lg-6 d-none d-md-block"
                                    style={{
                                        backgroundImage: `url(${regImage})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                         }}>
                                </div>
                                <div className="col-md-6 col-lg-6 d-flex align-items-center" style={{ backgroundColor: '#b485b3c0',}}>
                                    <div className="card-body p-0 p-lg-5 text-black">
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

