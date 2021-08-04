import { useRef } from 'react';
import './ForgotPasswordModal.scss';

const ForgotPasswordModal = ({ handleShowLogIn, handleShowForgotPassword2 }) => {
  const EmailRef = useRef(null);
  const submitEmail = (e) => {
    e.preventDefault();
    if(!EmailRef.current.value) {
      alert('Invalid input');
      return;
    }
    handleShowForgotPassword2();
  }

  return (
    <div className="fp d-flex flex-column align-items-center">
      <p className="fp-title text-uppercase mb-16px color-nero size-16 text-center">forgot password</p>
      <p className="fp-subtitle color-dim-gray mb-50px size-14 text-center">Input your email, we will send you an instruction to reset your password.</p>
        <form className="fp-form text-center w-100">
          <label className="fp-label size-16 color-nero text-left w-100" htmlFor="login-email">EMAIL</label>
          <input type="email" name="email" ref={EmailRef} id="login-email" className="fp-input size-16 w-100" placeholder="Email" required />
          <button type="submit" onClick={submitEmail} className="fp-btn text-uppercase text-white">
            submit
          </button>
        </form>
      <p className="size-16 text-uppercase color-dark-gray-1">back to <span role="button" className="color-nero" onClick={handleShowLogIn}>LOG IN</span></p>
    </div>
  );
};

export default ForgotPasswordModal;