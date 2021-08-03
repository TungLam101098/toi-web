import React, {useState} from 'react';
import './Profile.scss';

import avatar from '../../assets/img/icon/Avatar.svg';
import updateAvatar from '../../assets/img/icon/Update-Avatar.png';

const Profile = () => {
  const [showChangePassword, setShowChangePassword] = useState(false);

  const handleShowChangePassword = () => {
    setShowChangePassword(true);
  };
  return <div className="profile">
    <div className="updateprofile">
    <div className="container">
      <div className="updateprofile-container d-flex flex-column align-items-center">
        <p className="updateprofile-title text-uppercase color-dim-gray size-16">profile</p>
        <p className="updateprofile-subtitle font-title text-center font-weight-bold color-nero size-48">Your profile information</p>
        <div className="up-main d-flex flex-column flex-md-row align-items-center align-items-md-start">
          <div className="up-img-container position-relative mr-0 mr-md-5">
            <img src={avatar} alt="avatar" className="up-img w-100"/>
            <img src={updateAvatar} alt="update" className="up-update-btn position-absolute" />
          </div>
          <div className="up-form-container">
                <form className="up-form d-flex flex-column align-items-start">
                  <div className="up-field-container w-100">
                    <label className="up-label w-100 text-uppercase size-16 color-nero" htmlFor="name">name</label>
                    <input className="up-input w-100 size-16 color-nero" type="text" name="name" placeholder="name" id="name" />
                  </div>
                  <div className="up-field-container w-100">
                    <label className="up-label w-100 text-uppercase size-16 color-nero" htmlFor="phone">phone</label>
                    <input className="up-input w-100 size-16 color-nero" type="text" name="phone" placeholder="phone number" id="phone" />
                  </div>
                  <div className="up-field-container w-100">
                    <label className="up-label w-100 text-uppercase size-16 color-nero" htmlFor="email">email</label>
                    <input className="up-input w-100 size-16 color-nero" type="email" name="email" placeholder="email" id="email" />
                  </div>
                  {!showChangePassword ? 
                    <div className="up-field-container w-100 position-relative mb-0">
                      <label className="up-label w-100 text-uppercase size-16 color-nero" htmlFor="password">password</label>
                      <input className="up-input w-100 size-16 color-nero" type="password" id="password" name="password" value="********" readOnly={true} />
                      <div 
                        className="up-change-pw-btn text-capitalize size-14 position-absolute" 
                        onClick={handleShowChangePassword}
                      >change password</div>
                    </div> : 
                    <div className="up-field-container w-100 d-flex flex-column mb-0">
                      <label className="up-label w-100 text-uppercase size-16 color-nero">change password</label>  
                      <input className="up-input w-100 size-16 color-nero" type="password" name="currentPassword" placeholder="current password" />
                      <input className="up-input w-100 size-16 color-nero" type="password" name="newPassword" placeholder="new password" />
                      <input className="up-input w-100 size-16 color-nero" type="password" name="confirmNewPassword" placeholder="confirm new password" />
                    </div>}
                  <div className="up-btn-container w-100 text-center color-nero">
                  <button type="submit" className="up-btn text-white text-uppercase size-14">
                    update profile
                  </button>
                  </div>
                </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>;
};

export default Profile;