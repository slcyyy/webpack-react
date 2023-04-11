import { Provider } from "react-redux"; // !😺用的provider是redux的
import { createRoot } from "react-dom/client";
import App from "./App";
import store from "@/store";
import "@/main.css";
// import { fetchUsers } from "@/store/modules/user";

const root = document.querySelector("#root");

if (root) {
  // store.dispatch(fetchUsers()); //!😺可以直接用store派发action
  createRoot(root).render(
    <Provider store={store}>
      <App />
    </Provider>
  );
}
