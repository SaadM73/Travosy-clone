import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import store from "./redux/store";
import HeaderProvider from "./hoc/HeaderProvider";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HeaderProvider>
        <App />
      </HeaderProvider>
    </Provider>,
  </React.StrictMode>
);

reportWebVitals()