import React, { useState } from 'react';
import { Modal } from 'antd';

import LoginModal from '../LoginModal/LoginModal';
import SignupModal from '../SignupModal/SignupModal';

import profileIcon from '../../assets/img/icon/Profile.svg';
import closeIcon from '../../assets/img/icon/Close.svg';

import './ModalButton.scss';

const ModalButton = ({className, initialModalAction}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentModal, setCurrentModal] = useState("LOG_IN");

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleShowSignUp = () => {
    setCurrentModal("SIGN_UP");
  }

  const handleShowLogIn = () => {
    setCurrentModal("LOG_IN");
  }

  const handleCurrentModal = () => {
    switch (currentModal) {
      case "LOG_IN":
        return <LoginModal handleShowSignUp={handleShowSignUp} />;
      case "SIGN_UP":
        return <SignupModal handleShowLogIn={handleShowLogIn} />;
      default:
        return null;
    }
  };
  
  return (
    <>
      <div className={`modal-btn ${className}`} onClick={showModal}>
          <img src={profileIcon} alt="img" />
          <div className="ml-1 size-12">Log In</div>
      </div>
      <Modal
        className="auth-modal"
        visible={isModalVisible} 
        onCancel={handleCancel} 
        footer={null} 
        closeIcon={<img alt="close" src={closeIcon} />} 
        centered={true} 
        zIndex={9999}
        bodyStyle={{
          'padding': '0px'
        }}
      >
        {handleCurrentModal()}
      </Modal>
    </>
  );
};

export default ModalButton;
