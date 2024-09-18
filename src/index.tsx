import React from 'react';
import ReactDOM from 'react-dom/client';
import "./assets/styles/reset.css"
import "./assets/styles/global.css"
import {RouterProvider} from "react-router-dom";
import {router} from "./routes";
import {Provider} from "react-redux";
import {store} from "./store/store";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router}/>
      </Provider>
  </React.StrictMode>
);

