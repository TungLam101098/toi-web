import React, { useState } from 'react';
import { Modal } from 'antd';

import LoginModal from '../LoginModal/LoginModal';
// import ForgotPasswordModal from '../ForgotPasswordModal/ForgotPasswordModal';
// import ForgotPasswordModal2 from '../ForgotPasswordModal2/ForgotPasswordModal2';
// import SignupModal from '../SignupModal/SignupModal';

import profileIcon from '../../assets/img/icon/Profile.svg';
import closeIcon from '../../assets/img/icon/Close.svg';

import './ModalButton.scss';

const ModalButton = ({className, initialModalAction}) => {
  // const modalRef = useRef(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentModal, setCurrentModal] = useState("LOG_IN");
  // const {currentModal} = useSelector((state) => state.modal);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(initialModalAction);
  // }, []);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    // dispatch(initialModalAction);
  };

  const handleCurrentModal = () => {
    switch (currentModal) {
      case "LOG_IN":
        return <LoginModal />;
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
