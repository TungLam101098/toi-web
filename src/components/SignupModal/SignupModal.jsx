import './SignupModal.scss';

const SignupModal = ({ handleShowLogIn }) => {

  return (<div className="signup d-flex flex-column align-items-center">
  <p className="signup-title text-uppercase color-nero size-16 text-center">sign up</p>
  <p className="signup-greeting size-25 font-title text-center">Hello there, welcome to TOI!</p>
    <form className="signup-form w-100">
      <label className="signup-label text-uppercase size-16 color-nero text-left w-100" htmlFor="signup-email">name</label>
      <input type="text" name="name" id="signup-email" className="signup-input size-16 w-100" placeholder="Name" />

      <label className="signup-label text-uppercase size-16 color-nero text-left w-100" htmlFor="signup-email">email</label>
      <input type="email" name="email" id="signup-email" className="signup-input size-16 w-100" placeholder="Email" />

      <label className="signup-label text-uppercase size-16 color-nero text-left w-100" htmlFor="signup-password">password</label>
      <input type="password" name="password" id="signup-password" className="signup-input size-16 w-100" placeholder="Password" />

      <label className="signup-label text-uppercase size-16 color-nero text-left w-100" htmlFor="signup-password-comfirmation">confirm password</label>
      <input type="password" name="passwordConfirmation" id="signup-password" className="signup-input size-16 w-100" placeholder="Password" />
      <div className="text-center">
        <button type="submit" className="signup-btn text-white text-uppercase">
          sign up
        </button>
      </div>
    </form>
  <p className="signup-login color-dark-gray-1 text-uppercase">had an account, <button className="signup-login-btn color-nero text-uppercase" onClick={handleShowLogIn} >log in here</button></p>
</div>);
  
};

export default SignupModal;