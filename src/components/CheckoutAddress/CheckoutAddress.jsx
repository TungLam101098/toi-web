import bottomArrow from '../../assets/img/icon/Bottom-Arrow.svg';
import './CheckoutAddress.scss';

const CheckoutAddress = () => {

  return <div className="ca">
    <div className="ca-main">
      <p className="ca-title font-title size-25 color-nero mb-20px">Where should we deliver your order?</p>
        <form className="ca-form w-100">
          <div className="field-container">
            <label className="ca-label text-uppercase size-16 color-nero text-left w-100" htmlFor="ca-email">name</label>
            <input type="text" name="name" id="ca-email" className="ca-input size-16 w-100" placeholder="Your name" />
          </div>

          <div className="field-container">
            <label className="ca-label text-uppercase size-16 color-nero text-left w-100" htmlFor="ca-phone">phone number</label>
            <input type="text" name="phone" id="ca-phone" className="ca-input size-16 w-100" placeholder="Phone number" />
          </div>

          <div className="field-container position-relative">
            <label className="ca-label text-uppercase size-16 color-nero text-left w-100" htmlFor="ca-city">city</label>
            <select
              name="city" 
              id="ca-city" 
              className="ca-input size-16 w-100" 
              placeholder="City" 
            >
              <option value="" disabled defaultValue>City</option>
              <option className="color-nero">city A</option>
              <option className="color-nero">city B</option>
              <option className="color-nero">city C</option>
            </select>
            <img src={bottomArrow} alt="" className="position-absolute" />
          </div>

          <div className="field-container position-relative">
            <label className="ca-label text-uppercase size-16 color-nero text-left w-100" htmlFor="ca-district">district</label>
            <select
              name="district"
              id="ca-district"
              className="ca-input size-16 w-100"
              placeholder="District"
            >
              <option value="" disabled defaultValue>District</option>
              <option className="color-nero">district 1</option>
              <option className="color-nero">district 2</option>
              <option className="color-nero">district 3</option>
            </select>
            <img src={bottomArrow} alt="" className="position-absolute" />
          </div>

          <div className="field-container">
            <label className="ca-label text-uppercase size-16 color-nero text-left w-100" htmlFor="ca-address">address</label>
            <input type="text" name="address" id="ca-address" className="ca-input size-16 w-100" placeholder="Name" />
          </div>
          <div className="text-center">
            <button type="submit"  className="ca-btn text-white text-uppercase">
              deliver to this address
            </button>
          </div>
        </form>
    </div>
  </div>;
};

export default CheckoutAddress;