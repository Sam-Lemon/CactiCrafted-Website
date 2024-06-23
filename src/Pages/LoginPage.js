import React from "react";
import backgroundImage from '../images/loginSucc.jpg';
import LoginForm from "../Components/LoginForm";


export default function LoginPage () {
    const sectionStyle = {
        backgroundColor: {backgroundImage},
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    };
    

    return (
        <section className="main" style={sectionStyle}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-10">
                        <div className="card" style={{ borderRadius: '1rem' }}>
                            <div className="row g-0">
                                <div className="col-md-6 col-lg-5 d-none d-md-block">
                                    <img src="../images/loginSucc.jpg" alt="pot of multi-colored succulents" className="img-fluid" style={{ borderRadius: '1rem 0 0 1rem'}} />
                                </div>
                                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                    <div className="card-body p-4 p-lg-5 text-black">
                                        <LoginForm />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
           

    );






}

