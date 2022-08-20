
// validation by using formik

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useFormik } from 'formik';

const Form = () => {
    const form = useRef();

    const formik = useFormik({
        initialValues: {
            user_firstname: "",
            user_lastname: "",
            user_email: "",
            user_tel: "",
            user_date: "",
            user_address: "",
            user_city: "",
            user_state: "",
            user_message: ""
        }, validate: values => {
            const errors = {};

            if (!values.user_firstname) {
                errors.user_firstname = 'Enter your FirstName';
            }
            else if (!values.user_lastname) {
                errors.user_lastname = 'Enter your LastName';
            }
            else if (!values.user_email) {
                errors.user_email = 'Enter your EmailId should contain @gmail.com ';
            }
            else if (!values.user_tel) {
                errors.user_tel = 'Enter your Mobile Number Ex : 99xxx-xxx00';
            }
            else if (!values.user_date) {
                errors.user_date = 'Enter your Date Of Birth ';
            }
            else if (!values.user_address) {
                errors.user_address = 'Enter your Address';
            }
            else if (!values.user_city) {
                errors.user_city = 'Enter your City';
            }
            else if (!values.user_state) {
                errors.user_state = 'Enter your State';
            }
            else if (!values.user_message) {
                errors.user_message = 'Share Your Thoughts';
            }
            return errors;
        },
        onSubmit: (values, { resetForm }) => {

            emailjs.sendForm('service_ifz8wnu', 'template_asr20um', form.current, 'oSPWabxh6SYj_Vvi1')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
            console.log(values)
            alert("Email send")
            resetForm()
        }

    })


    

    return (

        <div className='m-5 app title bg-img'> Contact Form
            <form ref={form} onSubmit={formik.handleSubmit} >

                <div className="input-container">
                    <input type="text" className="form-control boxs" name="user_firstname" placeholder="First Name" maxLength={10} onChange={formik.handleChange}
                        value={formik.values.user_firstname} />
                    <span className='error'> {formik.errors.user_firstname}</span>
                </div>
                <div className="input-container">
                    <input type="text" className="form-control boxs" name="user_lastname" placeholder="Last Name" maxLength={10} onChange={formik.handleChange}
                        value={formik.values.user_lastname} />
                    <span className='error'> {formik.errors.user_lastname}</span> 
                </div>
                <div className="input-container">
                    <input type="email" className="form-control boxs" name="user_email" placeholder="Email"
                        onChange={formik.handleChange}
                        value={formik.values.user_email} />
                    <span className='error'> {formik.errors.user_email}</span>
                </div>
                <div className="input-container">
                    <input type="tel" className="form-control boxs" name="user_tel" placeholder="Tel-00000-00000" pattern="[0-9]{5}-[0-9]{5}" maxLength={11} onChange={formik.handleChange}
                        value={formik.values.user_tel} />
                    <span className='error'> {formik.errors.user_tel}</span> 
                </div>
                <div className="input-container">
                    <input type="date" className="form-control boxs" name="user_date" placeholder="DOB" min="1980-01-01"
                        max="2020-12-31" onChange={formik.handleChange}
                        value={formik.values.user_date} />
                    <span className='error'> {formik.errors.user_date}</span>                    
                </div>
                <div className="input-container">
                    <input type="text" className="form-control boxs" name="user_address" placeholder="Address"
                        maxLength={60} onChange={formik.handleChange}
                        value={formik.values.user_address} />
                    <span className='error'> {formik.errors.user_address}</span>
                </div>
                <div className="input-container">
                    <input type="text" className="form-control boxs" name="user_city" placeholder="City" maxLength={15} onChange={formik.handleChange}
                        value={formik.values.user_city} />
                    <span className='error'> {formik.errors.user_city}</span>
                </div>
                <div className="input-container">
                    <input type="text" className="form-control boxs" name="user_state" placeholder="State" maxLength={15} onChange={formik.handleChange}
                        value={formik.values.user_state} />
                    <span className='error'> {formik.errors.user_state}</span>
                </div>
                <div className="input-container">
                    <input type="text" className="form-control boxs" name="user_message" placeholder="Any Message" maxLength={100} onChange={formik.handleChange}
                        value={formik.values.user_message} />
                    <span className='error'> {formik.errors.user_message}</span>
                </div>
                <div className=" input-container fw-bold">
                    <input type="submit" className="form-control " value="Submit" />
                </div>
            </form>
        </div>
    );
};


export default Form


// without using formik for validation

// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';


// const Form = () => {
//     const form = useRef();

//     const sendEmail = (e) => {
//         e.preventDefault();

//         emailjs.sendForm('service_ifz8wnu', 'template_asr20um', form.current, 'oSPWabxh6SYj_Vvi1')
//             .then((result) => {
//                 console.log(result.text);
//             }, (error) => {
//                 console.log(error.text);
//             });
//         alert("Email send")
//         e.target.reset();
//     };



//     return (

//         <div className='m-5 app title bg-img'> Contact Form
//             <form ref={form} onSubmit={sendEmail} >

//                 <div className="input-container">
//                     <input type="text" className="form-control boxs" name="user_firstname" placeholder="First Name" required maxLength={10} />
//                 </div>
//                 <div className="input-container">
//                     <input type="text" className="form-control boxs" name="user_lastname" placeholder="Last Name" required maxLength={10} />
//                 </div>
//                 <div className="input-container">
//                     <input type="email" className="form-control boxs" name="user_email" placeholder="Email" required />
//                 </div>
//                 <div className="input-container">
//                     <input type="tel" className="form-control boxs" name="user_tel" placeholder="Tel-00000-00000" pattern="[0-9]{5}-[0-9]{5}" maxLength={11} />
//                 </div>
//                 <div className="input-container">
//                     <input type="date" className="form-control boxs" name="user_date" placeholder="DOB" min="1980-01-01"
//                         max="2020-12-31" required />
//                 </div>
//                 <div className="input-container">
//                     <input type="text" className="form-control boxs" name="user_address" placeholder="Address" required />
//                 </div>
//                 <div className="input-container">
//                     <input type="text" className="form-control boxs" name="user_city" placeholder="City" required />
//                 </div>
//                 <div className="input-container">
//                     <input type="text" className="form-control boxs" name="user_state" placeholder="State" required />
//                 </div>
//                 <div className="input-container">
//                     <input type="text" className="form-control boxs" name="user_message" placeholder="Any Message" maxLength={100} required />
//                 </div>
//                 <div className=" input-container fw-bold">
//                     <input type="submit" className="form-control " value="Submit" />
//                 </div>
//             </form>
//         </div>
//     );
// };


// export default Form