import React, { useContext, useEffect } from "react";
import { FiAlertCircle, FiX, FiCheckCircle, FiInfo } from "react-icons/fi";
import { ToastContext, ToastMessage } from "../../../hooks/ToastContext";
import IconButton from "@mui/material/IconButton";
import { SnackbarCustom } from "./styles";

interface ToastProps {
  message: ToastMessage;
}

const Toast: React.FC<ToastProps> = ({ message }) => {
  const { removeToast } = useContext(ToastContext);

  const icons = {
    info: <FiInfo size={35} color="#6edae4" />,
    error: <FiAlertCircle size={35} color="#f12c4c" />,
    success: <FiCheckCircle size={35} color="#04d47c" />,
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, 50000);

    return () => {
      clearTimeout(timer);
    };
  }, [removeToast, message.id]);

  return (
    <div>
      <SnackbarCustom
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={!!message.id}
        sx={{ maxWidth: 400 }}
        onClose={() => removeToast(message.id)}
        autoHideDuration={50000}
        key={message.id}
      >
        <div className="bg-dark">
          <div className="flex justify-between">
            <div className="flex px-4 py-4 h-full items-center justify-center my-auto">
              {icons[message.type || "info"]}
            </div>
            <div className="px-0 border-r border-separator"></div>
            <div className="px-4 py-4 w-full my-auto">
              <span className="font-normal text-white-grey">
                {message.title}
              </span>
            </div>
            <div className="px-4 py-4 my-auto">
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  removeToast(message.id);
                }}
              >
                <FiX size={15} color="#aab0c3" />
              </IconButton>
            </div>
          </div>
        </div>
      </SnackbarCustom>
    </div>
  );
};

export default Toast;
