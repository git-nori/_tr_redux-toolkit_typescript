import React from "react";

import { setVisiblityFilter, VisiblityFilter } from "./visibilityFilterSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "app/rootReducer";

interface FilterButtonProps {
  visibilityFilter: VisiblityFilter;
  text: string;
}

const FilterButton = ({
  visibilityFilter,
  text,
}: FilterButtonProps): JSX.Element => {
  const dispatch = useDispatch();
  const currentvisibilityFilter = useSelector(
    (state: RootState) => state.visiblityFilter
  );
  const onClick = () => {
    dispatch(setVisiblityFilter(visibilityFilter));
  };

  return (
    <button
      disabled={currentvisibilityFilter === visibilityFilter}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default FilterButton;
