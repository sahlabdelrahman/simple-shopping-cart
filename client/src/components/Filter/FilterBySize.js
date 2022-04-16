import { useDispatch, useSelector } from "react-redux";
import { filterBySize } from "../../store/actions/products";

import { staticData } from "../../data/static-data";

const FilterBySize = () => {
  const dispatch = useDispatch();
  const { size, filteredProducts } = useSelector((state) => state.products);

  return (
    <div className="filter-by-size">
      <span>{staticData.filterText}</span>
      <select
        value={size}
        onChange={(e) => {
          dispatch(filterBySize(filteredProducts, e.target.value));
        }}
        className="filter-select"
      >
        {staticData.sizes.map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterBySize;
