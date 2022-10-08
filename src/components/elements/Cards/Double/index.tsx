import { useState, useEffect, useCallback } from "react";
import { Container, Content, Title, Text, HelpTitle } from "./styles";
import { motion } from "framer-motion";
import { useSocket } from "../../../../hooks/SocketContext";
import { ISocketGameDouble } from "../../../../types/ISocketGameDouble";
import { FiAlertTriangle } from "react-icons/fi";
import { useLoading } from "../../../../hooks/LoadingContext";
import { useBank } from "../../../../hooks/BankContext";
import { useLocale } from "../../../../hooks/LocaleContext";
import { FormattedMessage, useIntl } from "react-intl";

const CardDouble = () => {
  const [messages, setMessages] = useState<ISocketGameDouble[]>([] as ISocketGameDouble[]);
  const [timerCardAnalyzing, setTimerCardAnalyzing] = useState(0);
  const [gale, setGale] = useState<number>(1);
  const { message } = useSocket();
  const { isLoading } = useLoading();
  const { bank } = useBank();
  const { locale } = useLocale();
  const { formatMessage: f } = useIntl();

  const audio = "https://blazebull-pwa.vercel.app/sounds/alert.mp3";

  const removeCard = useCallback(() => {
    setTimeout(() => {
      setMessages([] as ISocketGameDouble[]);
    }, 15000);
  }, []);

  useEffect(() => {
    if (message && message.game === "double" && !isLoading) {
      window.scrollTo(0, 0);

      const alert = new Audio(audio);

      // alert.muted = true;

      alert.play();

      const checkExistGale = messages.find(
        (message) => message.type === "gale"
      );

      if (checkExistGale && message.type === "gale") {
        setGale(1);
      }

      setMessages((oldValue) => [...oldValue, message]);

      if (message.type === "loss" || message.type === "win") {
        removeCard();
        setGale(0);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message, isLoading]);


  useEffect(() => {
    const checkAnalyzing = messages.find(
      (message) => message.type === "analyzing"
    );


    if (checkAnalyzing && messages.length === 1) {
      if(timerCardAnalyzing < 30) {

        setTimeout(() => {
          setTimerCardAnalyzing(timerCardAnalyzing+1)
        }, 1000)
      } 

      if(timerCardAnalyzing === 30) {
        setTimerCardAnalyzing(0)
        setMessages([] as ISocketGameDouble[])
      }
    }


  },[messages, timerCardAnalyzing])

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
                    <Title type={item.type}>
                      <FormattedMessage id="possible-entry" />
                    </Title>
                  )}
                  {item.type === "entry" && (
                    <Title type={item.type}>
                      <FormattedMessage id="confirmed-entry" />
                    </Title>
                  )}

                  {item.type === 'gale' && (
                     <Title type={item.type}>
                     {gale === 0 ? (
                      <FormattedMessage id="make-martingale" />
                     ): (
                      <FormattedMessage id="make-martingale-again" />
                     )}
                   </Title>
                  )}
                  {/* {item.type === "gale" && gale === 0 && (
                    <Title type={item.type}>
                      <FormattedMessage id="make-martingale" />
                    </Title>
                  )}
                  {item.type === "gale" && gale === 1 && (
                    <Title type={item.type}>
                      <FormattedMessage id="make-martingale-again" />
                    </Title>
                  )} */}
                  {item.type === "win" && (
                    <Title type={item.type}>
                      <FormattedMessage id="win" />
                    </Title>
                  )}
                  {item.type === "loss" && (
                    <Title type={item.type}>
                      <FormattedMessage id="loss" />
                    </Title>
                  )}

                  {/* @@@@@@@@@@@@@@@@@@ ANALYZING @@@@@@@@@@@@@@@@@@@@*/}
                  {item.type === "analyzing" && (
                    <HelpTitle type={item.type}>
                      <FiAlertTriangle size={15} />
                      <FormattedMessage id="wait-for-confirmation" />
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
                        <FormattedMessage id="wait-for-confirmation-bot" />
                      </Text>
                    </div>
                  )}

                  {/* @@@@@@@@@@@@@@@@@@ ENTRY @@@@@@@@@@@@@@@@@@@@*/}
                  {item.type === "entry" && (
                    <>
                      <div className="flex flex-row">
                        <Text color={item.target} className="font-bold">
                          {item.target === "red"
                            ? f({ id: "red" })
                            : item.target === "black"
                            ? f({ id: "black" })
                            : f({ id: "white" })}
                        </Text>
                        {item.target === "red" ? (
                          <img src="/assets/objects/double-red.svg" alt="Red" />
                        ) : (
                          <img
                            src="/assets/objects/double-black.svg"
                            alt="Black"
                          />
                        )}
                        <Text className="text-white ml-4">
                          <FormattedMessage id="bet" />:{" "}
                          <FormattedMessage id="currency" />{" "}
                          {bank?.total
                            ? new Intl.NumberFormat(
                                locale === "en"
                                  ? "en-US"
                                  : locale === "pt"
                                  ? "pt-BR"
                                  : "es-ES"
                              ).format(bank.total * 0.01)
                            : "0"}
                        </Text>
                      </div>
                      <div className="flex flex-row">
                        <Text color="white" className="font-bold">
                          <FormattedMessage id="white" />
                        </Text>
                        <img
                          src="/assets/objects/double-white.svg"
                          alt="White"
                        />

                        <Text className="text-white ml-4">
                          <FormattedMessage id="bet" />:{" "}
                          <FormattedMessage id="currency" />{" "}
                          {bank?.total
                            ? new Intl.NumberFormat(
                                locale === "en"
                                  ? "en-US"
                                  : locale === "pt"
                                  ? "pt-BR"
                                  : "es-ES"
                              ).format(bank.total * 0.003)
                            : "0"}
                        </Text>
                      </div>
                    </>
                  )}

                  {/* @@@@@@@@@@@@@@@@@@ GALE @@@@@@@@@@@@@@@@@@@@*/}
                  {item.type === "gale" && (
                    <>
                      <div className="flex flex-row">
                        <Text color={item.target} className="font-bold">
                          {item.target === "red"
                            ? f({ id: "red" })
                            : item.target === "black"
                            ? f({ id: "black" })
                            : f({ id: "white" })}
                        </Text>
                        {item.target === "red" ? (
                          <img src="/assets/objects/double-red.svg" alt="Red" />
                        ) : (
                          <img
                            src="/assets/objects/double-black.svg"
                            alt="Black"
                          />
                        )}
                        <Text className="text-white ml-4">
                          <FormattedMessage id="bet" />:{" "}
                          <FormattedMessage id="currency" />{" "}
                          {bank?.total
                            ? new Intl.NumberFormat(
                                locale === "en"
                                  ? "en-US"
                                  : locale === "pt"
                                  ? "pt-BR"
                                  : "es-ES"
                              ).format(
                                gale === 0
                                  ? bank.total * 0.01 * 2
                                  : bank.total * 0.01 * 4
                              )
                            : "0"}
                        </Text>
                      </div>
                      <div className="flex flex-row">
                        <Text color="white" className="font-bold">
                          <FormattedMessage id="white" />
                        </Text>
                        <img
                          src="/assets/objects/double-white.svg"
                          alt="White"
                        />

                        <Text className="text-white ml-4">
                          <FormattedMessage id="bet" />:{" "}
                          <FormattedMessage id="currency" />{" "}
                          {bank?.total
                            ? new Intl.NumberFormat(
                                locale === "en"
                                  ? "en-US"
                                  : locale === "pt"
                                  ? "pt-BR"
                                  : "es-ES"
                              ).format(
                                gale === 0
                                  ? bank.total * 0.003 * 2
                                  : bank.total * 0.003 * 4
                              )
                            : "0"}
                        </Text>
                      </div>
                    </>
                  )}

                  {/* @@@@@@@@@@@@@@@@@@ WIN @@@@@@@@@@@@@@@@@@@@*/}
                  {item.type === "win" && (
                    <>
                      <div className="flex flex-row">
                        <Text className="text-white">
                          <FormattedMessage id="color-bet" />:{" "}
                        </Text>
                        <Text color={item.result} className="font-bold">
                          {item.result === "red"
                            ? f({ id: "red" })
                            : item.result === "black"
                            ? f({ id: "black" })
                            : f({ id: "white" })}
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

                  {/* @@@@@@@@@@@@@@@@@@ LOSS @@@@@@@@@@@@@@@@@@@@*/}
                  {item.type === "loss" && (
                    <>
                      <div className="flex flex-row">
                        <Text className="text-white">
                          <FormattedMessage id="color-bet" />:{" "}
                        </Text>
                        <Text color={item.target} className="font-bold">
                          {item.target === "red"
                            ? f({ id: "red" })
                            : item.target === "black"
                            ? f({ id: "black" })
                            : f({ id: "white" })}
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
              <FormattedMessage id="wait-for-signal" />
            </span>
          </div>
        </div>
      )}
    </Container>
  );
};

export { CardDouble };
