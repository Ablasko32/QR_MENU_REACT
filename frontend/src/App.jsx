import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
// sites
import CoffeeExample from "./components/Sites/ExampleCoffe";
import LoginPanel from "./components/Sites/LoginPanel";
import Dashboard from "./components/Sites/Dashboard";
import EditItem from "./components/Sites/EditItem";
import NotFoundDefault from "./components/Sites/NotFoundDefault";
import ChooseCategory from "./components/Sites/ChooseCategory";
import UserMenu from "./components/Sites/UserMenu";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/coffe-example1" element={<CoffeeExample />} />
        <Route path="/menu/:name" element={<UserMenu />} />
        <Route path="/admin" element={<LoginPanel />} />
        <Route path="/category" element={<ChooseCategory />} />

        <Route
          path="/dashboard/:category"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/edit/"
          element={
            <PrivateRoute>
              <EditItem />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFoundDefault />} />
      </Routes>
    </Router>
  );
}

export default App;
