import { useSelector } from "react-redux";

import "../../css/Filter/Filter.css";
import FilterBySize from "./FilterBySize";
import FilterBySort from "./FilterBySort";

import Bounce from "react-reveal";
import { staticData } from "../../data/static-data";

const Filter = () => {
  const { filteredProducts } = useSelector((state) => state.products);

  return (
    <Bounce right>
      <div className="filter-wrapper">
        <h2 className="filter-title">Filter</h2>
        <div className="filter-products-num">
          {staticData.numberOfProducts}{" "}
          {filteredProducts && filteredProducts.length}
        </div>
        <FilterBySize />
        <FilterBySort />
      </div>
    </Bounce>
  );
};

export default Filter;
