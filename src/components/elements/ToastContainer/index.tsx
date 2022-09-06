import React from "react";
// import { useTransition } from "react-spring";

import { ToastMessage } from "../../../hooks/ToastContext";
import Toast from "../Toast";
import { Container } from "./styles";

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  // const messagesWithTransitions = useTransition(
  //   messages,
  //   (message: ToastMessage) => message.id,
  //   {
  //     from: { right: "-120%", opacity: 0 },
  //     enter: { right: "0%", opacity: 1 },
  //     leave: { right: "-120%", opacity: 0 },
  //   }
  // );

  return (
    <Container>
      {messages.map((message, index) => (
        <Toast key={message.id} message={message} />
      ))}
    </Container>
  );
};

export default ToastContainer;
