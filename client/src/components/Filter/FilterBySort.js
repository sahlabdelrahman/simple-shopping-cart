import { useDispatch, useSelector } from "react-redux";
import { filterBySort } from "../../store/actions/products";

import { staticData } from "../../data/static-data";

const FilterBySort = () => {
  const dispatch = useDispatch();
  const { sort, filteredProducts } = useSelector((state) => state.products);

  return (
    <div>
      <span>Order</span>
      <select
        value={sort}
        onChange={(e) =>
          dispatch(filterBySort(filteredProducts, e.target.value))
        }
        className="filter-select"
      >
        {staticData.sortOptions.map((sortOption) => (
          <option key={sortOption} value={sortOption}>
            {sortOption}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterBySort;
