import faceIcon from '../../assets/img/icon/Face.svg';
import instagramIcon from '../../assets/img/icon/Instagram.svg';
import googleIcon from '../../assets/img/icon/Google.svg';
import './LoginModal.scss';

const LoginModal = ({ handleShowSignUp, handleShowForgotPassword }) => {
  return (
    <div className="login d-flex flex-column align-items-center">
      <p className="login-title color-nero size-16 text-center">LOG IN</p>
      <p className="login-greeting size-25 font-title text-center">Hello there, welcome back!</p>
          <form className="login-form w-100">
            <label className="login-label size-16 color-nero text-left w-100" htmlFor="login-email">EMAIL</label>
            <input type="email" name="email" id="login-email" className="login-input size-16 w-100" placeholder="Email" />
            <label className="login-label size-16 color-nero text-left w-100" htmlFor="login-password">PASSWORD</label>
            <input type="password" name="password" id="login-password" className="login-input size-16 w-100" placeholder="Password" />
            <div className="text-left mt-3">
              <div role="button" className="login-forgot-password" onClick={handleShowForgotPassword} >Forgot password</div>
            </div>
            <div className="text-center">
              <button type="submit" className="login-btn text-white">
                LOG IN
              </button>
            </div>
          </form>
      <p className="login-or size-16 text-uppercase">or log in with</p>
      <nav className="login-nav">
        <button className="login-nav-btn">
          <img src={faceIcon} alt=""/>
        </button>
        <button className="login-nav-btn">
          <img src={googleIcon} alt=""/>
        </button>
        <button className="login-nav-btn">
          <img src={instagramIcon} alt=""/>
        </button>
      </nav>
      <p className="color-dark-gray-1 login-signup text-uppercase">don&apos;t have an account, <button className="login-signup-btn color-nero text-uppercase" onClick={handleShowSignUp} >sign up here</button></p>
    </div>
  );
};


export default LoginModal;
