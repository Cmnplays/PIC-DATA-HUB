// src/utils/ToastConfig.tsx
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastConfig = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={true}
      newestOnTop={true}
      closeOnClick={true}
      pauseOnHover={true}
      draggable={true}
      rtl={false}
      pauseOnFocusLoss={false}
      theme="light"
      toastStyle={{
        backgroundColor: "#333",
        color: "white",
        fontSize: "16px",
        padding: "15px",
        borderRadius: "8px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        maxWidth: "400px",
      }}
    />
  );
};

export default ToastConfig;
