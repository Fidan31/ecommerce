import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Home,Layout} from "./router/index";


export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
              <Home/>
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
     
    </>
  );
};

