import { useDispatch, useSelector } from "react-redux";
import { filterBySize, filterBySort } from "../../store/actions/products";

import "../../css/Filter/Filter.css";

import Bounce from "react-reveal";

const Filter = () => {
  const dispatch = useDispatch();
  const { size, sort, filteredProducts } = useSelector(
    (state) => state.products
  );

  return (
    <Bounce right>
      <div className="filter-wrapper">
        <h2 className="filter-title">Filter</h2>
        <div className="filter-products-num">
          Number of Products {filteredProducts && filteredProducts.length}
        </div>
        <div className="filter-by-size">
          <span>Filter</span>
          <select
            value={size}
            onChange={(e) => {
              dispatch(filterBySize(filteredProducts, e.target.value));
            }}
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
            value={sort}
            onChange={(e) =>
              dispatch(filterBySort(filteredProducts, e.target.value))
            }
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
