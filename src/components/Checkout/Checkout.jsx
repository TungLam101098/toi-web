import React from 'react';
import './Checkout.scss';

import "antd/dist/antd.css";
import { Steps } from "antd";
import DollarCircleFilled from "@ant-design/icons/DollarCircleFilled";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import EnvironmentFilled from "@ant-design/icons/EnvironmentFilled";


import CheckoutAddress from '../CheckoutAddress/CheckoutAddress';
import CheckoutPayment from '../CheckoutPayment/CheckoutPayment';

const Checkout = () => {

  const { Step } = Steps;
  const LogIn = () => <p>Login</p>;
  const userIcon = () => (
    <div className="user-step"
    >
      <Avatar
        size={"large"}
        style={{
          backgroundColor: "#BDAA66",
        }}
        icon={<UserOutlined />}
      />
    </div>
  );
  const locationIcon = () => (
    <EnvironmentFilled
      className="step"
      style={{
        color: "#BDAA66",
      }}
    />
  );
  const DollarIcon = () => (
    <DollarCircleFilled
    className="step"
    />
  );
  const next = () => {
    setCurrent(current + 1);
  };

  const steps = [
    {
      content: LogIn(),
      icon: userIcon(),
    },
    {
      content: <CheckoutAddress next={next} />,
      icon: locationIcon(),
    },
    {
      content: <CheckoutPayment />,
      icon: DollarIcon(),
    },
  ];
  const [current, setCurrent] = React.useState(1);

  return <div className="checkout pt-170px">
    <div className="container">
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="steps">
      <Steps current={current}>
        {steps.map((item) => (
          <Step icon={item.icon} key={item.title} />
        ))}
      </Steps>
      </div>
    </div>
    <div className="steps-content">{steps[current].content}</div>
    </div>
  </div>;
};

export default Checkout;