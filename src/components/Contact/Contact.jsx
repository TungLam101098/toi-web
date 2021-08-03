import React from 'react';
import './Contact.scss';
import contact1 from '../../assets/img/contact/contact-1.png';


const Contact = () => {
  return (
    <div className="contact pt-200px">
      <div className="container">
        <div className="size-16 color-dim-gray text-center mb-30px">CONTACT US</div>
        <div className="contact-title size-48 color-nero text-center font-title font-weight-bold mb-80px">Thanks for reaching out!</div>
        <div className="row">
          <div className="col-12 mb-5 mb-md-0 col-md-6">
            <div className="p-3 contact-info" style={{backgroundColor: '#fafafa'}}>
              <img src={contact1} alt="img" className="w-100 mb-40px" />
              <div className="size-24 color-nero text-center mb-30px">toiatelier@support.com</div>
              <div className="size-24 color-nero text-center">+84 903 456 678</div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <form className="contact-form p-3">
              <div className="contact-form-group mb-35px">
                <div className="size-16 color-nero mb-12px">NAME</div>
                <input placeholder="Name" type="text" name="name" className="size-16 color-nero pb-18px w-100"/>
              </div>
              <div className="contact-form-group mb-35px">
                <div className="size-16 color-nero mb-12px">EMAIL</div>
                <input placeholder="Email" type="text" name="email" className="size-16 color-nero pb-18px w-100"/>
              </div>
              <div className="contact-form-group mb-35px">
                <div className="size-16 color-nero mb-12px">YOUR COMMENT</div>
                <textarea  rows={8} name="comment" placeholder="Your comment" className="w-100" component="textarea"/>
              </div>
              <button className="contact-btn text size-14 text color-white text-uppercase" type="submit">SEND COMMENT</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;