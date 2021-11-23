import { createReducer, configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { deleteContact, addContact, filter } from "./action";

const filterReducer = createReducer("", {
  [filter]: (state, { payload }) => {
    return (state = payload);
  },
});

const itemReducer = createReducer(
  [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
  {
    [addContact]: (state, { payload }) => {
      if (state.find((contact) => contact.name === payload.name)) {
        alert(`${payload.name} is already in contact`);
      } else return [...state, payload];
    },
    [deleteContact]: (state, action) => {
      const arr = state.filter((contact) => action.payload !== contact.id);
      return arr;
    },
  }
);

const contactsReducer = combineReducers({
  items: itemReducer,
  filter: filterReducer,
});

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

export default store;
