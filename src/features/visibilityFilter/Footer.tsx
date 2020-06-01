import React from "react";
import FilterButton from "./FilterButton";

import { VisiblityFilter } from "./visibilityFilterSlice";

const Fotter = (): JSX.Element => {
  return (
    <div>
      <span>Show: </span>
      <FilterButton visibilityFilter={VisiblityFilter.ShowAll} text={"All"} />
      <FilterButton
        visibilityFilter={VisiblityFilter.ShowActive}
        text={"Active"}
      />
      <FilterButton
        visibilityFilter={VisiblityFilter.ShowCompleted}
        text={"Completed"}
      />
    </div>
  );
};

export default Fotter;
