import { combineReducers } from "@reduxjs/toolkit";
import todos from "features/todoList/todoSlice";
import visiblityFilter from "features/visibilityFilter/visibilityFilterSlice";

const rootReducer = combineReducers({
  todos,
  visiblityFilter,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
