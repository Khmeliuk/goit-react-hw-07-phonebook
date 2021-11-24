import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { filterReducer } from "./filterReducer";
import { itemReducer, loading } from "./itemReducer";

const contactsReducer = combineReducers({
  items: itemReducer,
  filter: filterReducer,
  loading: loading,
});

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

export default store;
