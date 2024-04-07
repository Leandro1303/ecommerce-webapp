import "./user-order.styles.css";

const UserOrders = () => {

  const orderArray ={};
  console.log(orderArray);
  

  return (

    
    <div className="order-container">
      <h2 className="my-orders">My Orders</h2>
      
      
      
        <div className="order">
          <div className="order-header">
            <p className="order-header-text">
              Order Placed <br />
              **2024-02-02**
            </p>

            <p className="order-header-text">
              Order # <br />
              **24-124**
            </p>

            <p className="order-header-text">
              Status <br />
              Delivered
            </p>

            <p className="order-header-text">
              Ship to <br />
              2040 St 500W
            </p>

            <p className="order-header-text">
              Total <br />
              $85.12
            </p>
          </div>

          <table>
            <tr>
              <th>Picture</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Sub-Total</th>
            </tr>

            <tr>
              <td>
                <img
                  src="https://i.ibb.co/bPmVXyP/black-converse.png"
                  alt=""
                  width="80"
                  height="80"
                />
              </td>
              <td>Brown Cap</td>
              <td>$8</td>
              <td>2</td>
              <td>$16</td>
            </tr>

            <tr>
              <td>
                <img
                  src="https://i.ibb.co/bPmVXyP/black-converse.png"
                  alt=""
                  width="80"
                  height="80"
                />
              </td>
              <td>Brown Cap</td>
              <td>$8</td>
              <td>2</td>
              <td>$16</td>
            </tr>
          </table>
        </div>











        <div className="order">
          <div className="order-header">
            <p className="order-header-text">
              Order Placed <br />
              **2024-02-02**
            </p>

            <p className="order-header-text">
              Order # <br />
              **24-124**
            </p>

            <p className="order-header-text">
              Status <br />
              Delivered
            </p>

            <p className="order-header-text">
              Ship to <br />
              2040 St 500W
            </p>

            <p className="order-header-text">
              Total <br />
              $85.12
            </p>
          </div>

          <table>
            <tr>
              <th>Picture</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Sub-Total</th>
            </tr>

            <tr>
              <td>
                <img
                  src="https://i.ibb.co/bPmVXyP/black-converse.png"
                  alt=""
                  width="80"
                  height="80"
                />
              </td>
              <td>Brown Cap</td>
              <td>$8</td>
              <td>2</td>
              <td>$16</td>
            </tr>

            <tr>
              <td>
                <img
                  src="https://i.ibb.co/bPmVXyP/black-converse.png"
                  alt=""
                  width="80"
                  height="80"
                />
              </td>
              <td>Brown Cap</td>
              <td>$8</td>
              <td>2</td>
              <td>$16</td>
            </tr>
          </table>
        </div>








      
    </div>
  );

  

};



export default UserOrders;
