import { useState, useEffect, useCallback } from "react";
import { Container, Content, Title, Text, HelpTitle } from "./styles";
import { motion } from "framer-motion";
import { useSocket } from "../../../../hooks/SocketContext";
import { ISocketGameDouble } from "../../../../types/ISocketGameDouble";

const CardDouble = () => {
  const [messages, setMessages] = useState<ISocketGameDouble[]>([
    {
      id: "fsdop[fokdfsd",
      type: "analyzing",
      result: "",
    },
  ]);

  const { message } = useSocket();

  // const removeCard = useCallback(() => {
  //   const checkAnalyzing = messages.find(
  //     (message) => message.type === "analyzing"
  //   );

  //   if (messages.length === 1 && checkAnalyzing) {
  //     setTimeout(() => {
  //       setMessages((oldValues) => {
  //         return oldValues.filter((value) => value.type !== "analyzing");
  //       });
  //     }, 15000);
  //   } else {
  //     setTimeout(() => {
  //       setMessages([] as ISocketGameDouble[]);
  //     }, 10000);
  //   }
  // }, [messages]);

  useEffect(() => {
    if (message && message.game === "double") {
      console.log(message);
      window.scrollTo(0, 0);

      setMessages((oldValue) => [...oldValue, message]);

      if (
        message.type === "loss" ||
        message.type === "win" ||
        message.type === "analyzing"
      ) {
        // removeCard();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message]);

  return (
    <Container>
      {messages.length > 0 ? (
        <>
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
                  {item.type === "analyzing" && (
                    <Title type={item.type}>Possível entrada</Title>
                  )}
                  {item.type === "entry" && (
                    <Title type={item.type}>Entrada confirmada!</Title>
                  )}
                  {item.type === "gale" && (
                    <Title type={item.type}>Faça Martingale!</Title>
                  )}
                  {item.type === "win" && (
                    <Title type={item.type}>Wiiiiiinnnnnnn!!!!</Title>
                  )}
                  {item.type === "loss" && (
                    <Title type={item.type}>Loss!!!!</Title>
                  )}

                  <HelpTitle type={item.type}>Aguarde confirmação</HelpTitle>
                </div>
                <div className="flex w-full h-full flex-col mt-2">
                  {item.type === "analyzing" && (
                    <>
                      <div className="flex flex-row">
                        <Text className="text-white">
                          Fique atento, nossa inteligência artificial está
                          analisando uma possível entrada.
                        </Text>
                        {/* <Text className="font-bold">
                      nossa inteligência artificial está analisando uma possível
                      entrada.
                    </Text> */}
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
        </>
      ) : (
        <div className="flex justify-center items-center w-full h-full">
          <div className="flex w-8/12 flex-col h-full items-center">
            <div className="block h-full">
              <img
                className="object-contain w-24 h-auto"
                src="/assets/objects/robot.gif"
                alt="Robo Analisando!"
              />
            </div>
            <span className="text-white text-sm -mt-14 text-center">
              Aguarde! Nossa inteligência artificial está analisando as próximas
              entradas!
            </span>
          </div>
        </div>
      )}
    </Container>
  );
};

export { CardDouble };
