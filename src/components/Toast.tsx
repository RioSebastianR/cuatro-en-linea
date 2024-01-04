import React from "react";
import {
  ToastContainer as ReactToastifyContainer,
  toast,
} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ToastContainer: React.FC = () => {
  return <ReactToastifyContainer theme="light" newestOnTop draggable />;
};

export const ToastEmiter = toast;
