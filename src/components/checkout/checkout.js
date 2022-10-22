import './checkout.css'

export const Checkout = () => {
  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <div className="checkout-content">
      <div className="checkout-info">
        <h4>Customer information</h4>
        <form>
          <div className="user-info">
          <div className="input-data"> 
            <label>First Name</label>
            <input type="text" name="firstname"/>
          </div>
          <div className="input-data">
            <label>Last Name</label>
            <input type="text" name="laststname"/>
          </div>
          </div>
          <button className="confirm-btn">Confirm</button>
        </form>
      </div>
      </div>
    </div>
  );
};
