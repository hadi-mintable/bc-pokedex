import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ApolloProvider } from "@apollo/client";
import { client } from "./ApolloClient/client";
// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyCiu-g96oLKnAmZ9e1HHQFQzwEHC6eMfTo",
//   authDomain: "bc-pokedex.firebaseapp.com",
//   projectId: "bc-pokedex",
//   storageBucket: "bc-pokedex.appspot.com",
//   messagingSenderId: "420166589213",
//   appId: "1:420166589213:web:39860992857bf551c3dff4",
//   measurementId: "G-NT5BT4B6ZS",
// };

const queryClient = new QueryClient();
// const firebaseApp = initializeApp(firebaseConfig);

// console.log(firebaseApp);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
