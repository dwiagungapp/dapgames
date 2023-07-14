import React from "react";
import Cookies from "js-cookie";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import LayoutComponent from "../components/Layout";
import DashboardComponent from "../dashboard/LayoutDashboard";
import { GlobalProvider } from "../context/GlobalContext";
import Login from "../auth/Login";
import Home from "../components/Home";
import Register from "../auth/Register";
// import Profile from "../auth/dashboard/Profile";
// import ChangePassword from "../components/dashboard/ChangePassword";
import NotFound from "../components/errorpages/NotFound";
import CrudData from "../CRUD/CrudData";
import CrudForm from "../CRUD/CrudForm";
import Dashboard from "../dashboard/Dashboard";
import Profile from "../dashboard/Profile";

const Pages = () => {
  const LoginRoute = (props) => {
    if (Cookies.get("token") === undefined) {
      return props.children;
    } else {
      return <Navigate to={"/"} />;
    }
  };

  const DashboardRoute = (props) => {
    if (Cookies.get("token") !== undefined) {
      return props.children;
    } else {
      return <Navigate to={"/login"} />;
    }
  };

  return (
    <BrowserRouter>
      <GlobalProvider>
        <Routes>
          <Route
            path="/"
            element={
              <LayoutComponent>
                <Home />
              </LayoutComponent>
            }
          />

          <Route
            path="/login"
            element={
              <LoginRoute>
                <LayoutComponent>
                  <Login />
                </LayoutComponent>
              </LoginRoute>
            }
          />

          <Route
            path="/register"
            element={
              <LoginRoute>
              <LayoutComponent>
                <Register />
              </LayoutComponent>
              </LoginRoute>
            }
          />

          <Route
            path="*"
            element={
              <LayoutComponent>
                <NotFound/>
              </LayoutComponent>
            }
          />

          <Route
            path="/dashboard"
            element={
              <DashboardRoute>
                <DashboardComponent>
                  <Dashboard />
                </DashboardComponent>
              </DashboardRoute>
            }
          />

          <Route
            path="/dashboard/list-game"
            element={
              <DashboardRoute>
                <DashboardComponent>
                  <CrudData />
                </DashboardComponent>
              </DashboardRoute>
            }
          />

          <Route
            path="/dashboard/list-game/form"
            element={
              <DashboardRoute>
                <DashboardComponent>
                  <CrudForm />
                </DashboardComponent>
              </DashboardRoute>
            }
          />

          <Route
            path="/dashboard/list-game/edit/:slug"
            element={
              <DashboardRoute>
                <DashboardComponent>
                  <CrudForm />
                </DashboardComponent>
              </DashboardRoute>
            }
          />

          <Route
            path="/dashboard/profile"
            element={
              <DashboardRoute>
                <DashboardComponent>
                  <Profile />
                </DashboardComponent>
              </DashboardRoute>
            }
          />

        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  );
};

export default Pages;