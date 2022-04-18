import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchOrders } from "../../store/actions/order";

import "../../css/Orders/Orders.css";

const Orders = () => {
  const orders = useSelector((state) => state.order.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  return (
    <div className="orders-page">
      <table>
        <thead>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
        </thead>
        <tbody>
          {orders &&
            orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.name}</td>
                <td>{order.email}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
