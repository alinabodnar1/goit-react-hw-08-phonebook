import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./contacts/reducer";

export const store = configureStore({ reducer});


