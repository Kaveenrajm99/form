import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Form = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ifz8wnu', 'template_asr20um', form.current, 'oSPWabxh6SYj_Vvi1')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        alert("Email send")
        e.target.reset();
    };

    

    return (

        <div className='m-5 app title bg-img'> Contact Form
            <form ref={form} onSubmit={sendEmail} >

                <div className="input-container">
                    <input type="text" className="form-control boxs" name="user_firstname" placeholder="First Name" required maxLength={10}  />
                </div>
                <div className="input-container">
                    <input type="text" className="form-control boxs" name="user_lastname" placeholder="Last Name" required maxLength={10} />
                </div>
                <div className="input-container">
                    <input type="email" className="form-control boxs" name="user_email" placeholder="Email" required />
                </div>
                <div className="input-container">
                    <input type="tel" className="form-control boxs" name="user_tel" placeholder="Tel-00000-00000" pattern="[0-9]{5}-[0-9]{5}" maxLength={11}   />
                </div>
                <div className="input-container">
                    <input type="date" className="form-control boxs" name="user_date" placeholder="DOB" min="1980-01-01"
                        max="2020-12-31"    required />                    
                </div>
                <div className="input-container">
                    <input type="text" className="form-control boxs" name="user_address" placeholder="Address" required/>
                </div>
                <div className="input-container">
                    <input type="text" className="form-control boxs" name="user_city" placeholder="City" required />
                </div>
                <div className="input-container">
                    <input type="text" className="form-control boxs" name="user_state" placeholder="State" required />
                </div>
                <div className="input-container">
                    <input type="text" className="form-control boxs" name="user_message" placeholder="Any Message" maxLength={100} required />
                </div>
                <div className=" input-container fw-bold">
                    <input type="submit" className="form-control " value="Submit" />
                </div>
            </form>
        </div>
    );
};


export default Form