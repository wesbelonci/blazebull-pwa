import { useState, useEffect, useCallback } from "react";
import { Container, Content, Title, Text, HelpTitle } from "./styles";
import { motion } from "framer-motion";
import { useSocket } from "../../../../hooks/SocketContext";
import { ISocketGameDouble } from "../../../../types/ISocketGameDouble";
import { FiAlertTriangle } from "react-icons/fi";

const CardDouble = () => {
  const [messages, setMessages] = useState<ISocketGameDouble[]>(
    [] as ISocketGameDouble[]
  );
  const audio = "https://blazebull-pwa.vercel.app/sounds/alert.mp3";

  const { message } = useSocket();

  const removeCard = useCallback(() => {
    setTimeout(() => {
      setMessages([] as ISocketGameDouble[]);
    }, 15000);
  }, []);

  useEffect(() => {
    if (message && message.game === "double") {
      window.scrollTo(0, 0);

      const checkAnalyzing = messages.find(
        (message) => message.type === "analyzing"
      );

      if (checkAnalyzing) {
        setMessages([] as ISocketGameDouble[]);
      }

      const alert = new Audio(audio);

      alert.play();

      setMessages((oldValue) => [...oldValue, message]);

      if (message.type === "loss" || message.type === "win") {
        removeCard();
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

                  {item.type === "analyzing" && (
                    <HelpTitle type={item.type}>
                      <FiAlertTriangle size={15} />
                      Aguarde confirmação
                    </HelpTitle>
                  )}
                </div>
                <div className="flex w-full h-full flex-col mt-2">
                  {item.type === "analyzing" && (
                    <div
                      className={`flex w-full flex-col ${
                        messages.length > 1 ? "whitespace-nowrap" : "flex-wrap"
                      }`}
                    >
                      <Text className="text-white">
                        Fique atento, nossa inteligência artificial está
                        analisando uma possível entrada.
                      </Text>
                    </div>
                  )}
                  {item.type === "entry" && (
                    <>
                      <div className="flex flex-row">
                        <Text className="text-white">Apostar na cor: </Text>
                        <Text color={item.target} className="font-bold">
                          {item.target === "red"
                            ? "Vermelho"
                            : item.target === "black"
                            ? "Preto"
                            : "Branco"}
                        </Text>
                        {item.target === "red" ? (
                          <img src="/assets/objects/double-red.svg" alt="Red" />
                        ) : (
                          <img
                            src="/assets/objects/double-black.svg"
                            alt="Black"
                          />
                        )}
                      </div>
                      <div className="flex flex-row">
                        <Text className="text-white">Menor valor no: </Text>
                        <Text color="white" className="font-bold">
                          Banco
                        </Text>
                        <img
                          src="/assets/objects/double-white.svg"
                          alt="White"
                        />
                      </div>
                    </>
                  )}

                  {item.type === "gale" && (
                    <>
                      <div className="flex flex-row">
                        <Text className="text-white">Apostar na cor: </Text>
                        <Text color={item.target} className="font-bold">
                          {item.target === "red" ? "Vermelho" : "Preto"}
                        </Text>
                        {item.target === "red" ? (
                          <img src="/assets/objects/double-red.svg" alt="Red" />
                        ) : (
                          <img
                            src="/assets/objects/double-black.svg"
                            alt="Black"
                          />
                        )}
                      </div>
                      <div className="flex flex-row">
                        <Text className="text-white">Menor valor no: </Text>
                        <Text color="white" className="font-bold">
                          Banco
                        </Text>
                        <img
                          src="/assets/objects/double-white.svg"
                          alt="White"
                        />
                      </div>
                    </>
                  )}
                  {item.type === "win" && (
                    <>
                      <div className="flex flex-row">
                        <Text className="text-white">Cor apostada: </Text>
                        <Text color={item.result} className="font-bold">
                          {item.result === "red"
                            ? "Vermelho"
                            : item.result === "black"
                            ? "Preto"
                            : "Branco"}
                        </Text>
                        {item.result === "red" ? (
                          <img src="/assets/objects/double-red.svg" alt="Red" />
                        ) : item.result === "black" ? (
                          <img
                            src="/assets/objects/double-black.svg"
                            alt="Black"
                          />
                        ) : (
                          <img
                            src="/assets/objects/double-white.svg"
                            alt="White"
                          />
                        )}
                      </div>
                    </>
                  )}
                  {item.type === "loss" && (
                    <>
                      <div className="flex flex-row">
                        <Text className="text-white">Cor apostada: </Text>
                        <Text color={item.target} className="font-bold">
                          {item.target === "red"
                            ? "Vermelho"
                            : item.target === "black"
                            ? "Preto"
                            : "Branco"}
                        </Text>
                        {item.result === "red" ? (
                          <img src="/assets/objects/double-red.svg" alt="Red" />
                        ) : item.result === "black" ? (
                          <img
                            src="/assets/objects/double-black.svg"
                            alt="Black"
                          />
                        ) : (
                          <img
                            src="/assets/objects/double-white.svg"
                            alt="White"
                          />
                        )}
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
