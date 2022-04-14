import "../../css/Filter/Filter.css";

import Bounce from "react-reveal";

const Filter = (props) => {
  return (
    <Bounce right>
      <div className="filter-wrapper">
        <h2 className="filter-title">Filter</h2>
        <div className="filter-products-num">
          Number of Products {props.numberOfProducts}
        </div>
        <div className="filter-by-size">
          <span>Filter</span>
          <select
            value={props.size}
            onChange={props.handleFilterBySize}
            className="filter-select"
          >
            <option value="ALL">ALL</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
        </div>
        <div className="filter-by-size">
          <span>Order</span>
          <select
            value={props.sort}
            onChange={props.handleFilterBySort}
            className="filter-select"
          >
            <option value="latest">Latest</option>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
          </select>
        </div>
      </div>
    </Bounce>
  );
};

export default Filter;
