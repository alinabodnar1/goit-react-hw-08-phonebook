import { createSlice, nanoid } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
 
const contactsInitialState = initialState.contacts;

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  reducers: {
    addContact: {
        reducer(state, action) {
          if (state.find(contact => contact.name.toLowerCase().trim() === action.payload.name.toLowerCase().trim())) {
              return alert(`The contact "${action.payload.name}" is already in the contacts!`);
          } else {
            state.push(action.payload);  
          }
        },
        prepare(name, number) {
            return {
                payload: {
                    name,
                    number,
                    id: nanoid(5),
                },
            };
        },
    },
    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
