import { atom } from "jotai";

// fetch initial value from localStorage
const user = localStorage.getItem("user");

export const currentUser = atom(user ? JSON.parse(user) : {});
