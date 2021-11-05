import App from "../App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CardDetail } from "../components/CardDetail";
import { AlertMessage } from "../components/AlertMessage";

export const Routing = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route exact path="/issues/:id" element={<CardDetail />} />
          <Route
            path="*"
            element={<AlertMessage description="Page not found" message="The page that you trying to go is not found" type="error" />}
          />
        </Routes>
      </BrowserRouter>
    );
  };