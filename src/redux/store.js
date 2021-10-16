import { configureStore } from "@reduxjs/toolkit";
import contactsReduser from "./contacts/contactsReduser/contactsReduser";
import middlewarePreventContactsDuplication from "./middlewares/middlewares";

const store = configureStore({
  reducer: { contacts: contactsReduser },
  middleware: [middlewarePreventContactsDuplication],
});

export default store;
