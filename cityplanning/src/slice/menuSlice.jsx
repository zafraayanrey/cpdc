import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: "zafra" };

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    home(state, action) {
      return { ...state, value: action.payload };
    },
    aboutUs(state, action) {
      return { ...state, value: "About Us" };
    },
    plansReports(state, action) {
      return { ...state, value: "Plans and Reports" };
    },
    projects(state, action) {
      return { ...state, value: "Projects" };
    },
    services(state, action) {
      return { ...state, value: "Services" };
    },
    contactUs(state, action) {
      return { ...state, value: "Home" };
    },
  },
});

export const { home, aboutUs, plansReports, projects, services, contactUs } =
  menuSlice.actions;

export default menuSlice.reducer;
