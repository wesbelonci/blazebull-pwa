import { useState, useEffect, useCallback } from "react";
import { Container, Content, Title, Text } from "./styles";
import { motion } from "framer-motion";
import { useSocket } from "../../../../hooks/SocketContext";
import { IWebSocketCrash } from "../../../../types/ISocketGameCrash";

const CardCrash = () => {
  const [messages, setMessages] = useState<IWebSocketCrash[]>(
    [] as IWebSocketCrash[]
  );

  const { message } = useSocket();

  const removeCard = useCallback(() => {
    // const checkAnalyzing = messages.find(message => message.type === 'analyzing');

    // if (messages.length === 1 && checkAnalyzing) {
    //     setTimeout(() => {
    //       setMessages([] as IWebSocketCrash[]);
    //     }, 10000);
    // } else {
    //   setTimeout(() => {
    //     setMessages([] as IWebSocketCrash[]);
    //   }, 10000);
    // }

    setTimeout(() => {
      setMessages([] as IWebSocketCrash[]);
    }, 10000);
  }, []);

  useEffect(() => {
    if (message && message.game === "crash") {
      window.scrollTo(0, 0);

      setMessages((oldValue) => [...oldValue, message]);

      if (
        message.type === "loss" ||
        message.type === "win" ||
        message.type === "analyzing"
      ) {
        removeCard();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message]);

  return (
    <Container>
      {messages.map((item, index) => (
        <motion.div
          key={index}
          className="frame"
          initial={{ width: 0, x: window.innerWidth, zIndex: 999 }}
          animate={{ width: "100%", x: 0 }}
          transition={{ duration: 0.2, origin: 0 }}
          exit={{ x: window.innerWidth }}
        >
          <Content
            className="card"
            type={item.type}
            position={messages.length - index}
          >
            <div className="flex w-full h-5 items-center justify-between">
              <Title type={item.type}>
                {item.type === "analyzing" && "Possível entrada"}
                {item.type === "entry" && "Entrada confirmada!"}
                {item.type === "gale" && "Faça Martingale!"}
                {item.type === "win" && "Wiiiiiinnnnnnn!!!!"}
                {item.type === "loss" && "Loss!!!!"}
              </Title>
              <span className="text-white text-sm">{item.hour}</span>
            </div>
            <div className="flex w-full h-full flex-col mt-2">
              {item.type === "analyzing" && (
                <>
                  <div className="flex flex-row">
                    <Text className="text-white">Possível entrada em:</Text>
                    <Text className="font-bold">{item.target}x</Text>
                  </div>
                  <div className="flex flex-row">
                    <Text className="text-white">Saida em:</Text>
                    <Text className="font-bold">{item.target}x</Text>
                  </div>
                </>
              )}
              {item.type === "entry" && (
                <>
                  <div className="flex flex-row">
                    <Text className="text-white">Entrada após:</Text>
                    <Text className="font-bold">{item.last_result}x</Text>
                  </div>
                  <div className="flex flex-row">
                    <Text className="text-white">Saida em:</Text>
                    <Text className="font-bold">{item.target}x</Text>
                  </div>
                </>
              )}

              {item.type === "gale" && (
                <>
                  <div className="flex flex-row">
                    <Text className="text-white">Entre com:</Text>
                    <Text className="font-bold">R$ {item.amount}</Text>
                  </div>
                  <div className="flex flex-row">
                    <Text className="text-white">Saida em:</Text>
                    <Text className="font-bold">{item.target}x</Text>
                  </div>
                </>
              )}
              {item.type === "win" && (
                <>
                  <div className="flex flex-row">
                    <Text className="text-white">Entrada:</Text>
                    <Text className="font-bold">{item.target}x</Text>
                  </div>
                  <div className="flex flex-row">
                    <Text className="text-white">Crash em:</Text>
                    <Text className="font-bold">{item.result}x</Text>
                  </div>
                </>
              )}
              {item.type === "loss" && (
                <>
                  <div className="flex flex-row">
                    <Text className="text-white">Entrada:</Text>
                    <Text className="font-bold">{item.target}x</Text>
                  </div>
                  <div className="flex flex-row">
                    <Text className="text-white">Crash em:</Text>
                    <Text className="font-bold">{item.result}x</Text>
                  </div>
                </>
              )}
            </div>
          </Content>
        </motion.div>
      ))}
    </Container>
  );
};

export { CardCrash };
