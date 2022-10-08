import { useState, useEffect, useCallback } from "react";
import { Container, Content, Title, Text, HelpTitle } from "./styles";
import { motion } from "framer-motion";
import { useSocket } from "../../../../hooks/SocketContext";
import { ISocketGameCrash } from "../../../../types/ISocketGameCrash";
import { FiAlertTriangle } from "react-icons/fi";
import { FormattedMessage } from "react-intl";
// import { useBank } from "../../../../hooks/BankContext";
// import { useLocale } from "../../../../hooks/LocaleContext";

const CardCrash = () => {
  const [messages, setMessages] = useState<ISocketGameCrash[]>(
    [] as ISocketGameCrash[]
  );
  const { message } = useSocket();
  // const { formatMessage: f } = useIntl();
  // const { bank } = useBank();
  // const { locale } = useLocale();

  const removeCard = useCallback(() => {
    const checkAnalyzing = messages.find(
      (message) => message.type === "analyzing"
    );

    if (messages.length === 1 && checkAnalyzing) {
      setTimeout(() => {
        setMessages((oldValues) => {
          return oldValues.filter((value) => value.type !== "analyzing");
        });
      }, 15000);
    } else {
      setTimeout(() => {
        setMessages([] as ISocketGameCrash[]);
      }, 10000);
    }
  }, [messages]);

  useEffect(() => {
    if (message && message.game === "crash") {
      const data = message as ISocketGameCrash;
      window.scrollTo(0, 0);

      const alert = new Audio(`${process.env.REACT_APP_ALERT_SOUND}`);
      alert.play();

      if (data.type === "cancel-analyzing") {
        setMessages([] as ISocketGameCrash[]);
      }

      const checkExistGale = messages.find(
        (message) => message.type === "gale"
      );

      if (!checkExistGale && data.type === "gale") {
        data.martingale_sequence = 1;
      }

      if (
        checkExistGale &&
        checkExistGale.martingale_sequence === 1 &&
        data.type === "gale"
      ) {
        data.martingale_sequence = 2;
      }

      setMessages((oldValue) => [...oldValue, data]);

      if (data.type === "loss" || data.type === "win") {
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
                    <Title type={item.type}>
                      <FormattedMessage id="possible-entry" />
                    </Title>
                  )}
                  {item.type === "entry" && (
                    <Title type={item.type}>
                      <FormattedMessage id="confirmed-entry" />
                    </Title>
                  )}

                  {item.type === "gale" && (
                    <Title type={item.type}>
                      {item.martingale_sequence === 1 ? (
                        <FormattedMessage id="make-martingale" />
                      ) : (
                        <FormattedMessage id="make-martingale-again" />
                      )}
                    </Title>
                  )}
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
                        <Text className="text-white">
                          <FormattedMessage id="entry-after" />:{" "}
                        </Text>
                        <Text className="font-bold">{item.last_result}x</Text>
                      </div>
                      <div className="flex flex-row">
                        <Text className="text-white">
                          <FormattedMessage id="exit-in" />:{" "}
                        </Text>
                        <Text className="font-bold">{item.target}x</Text>
                      </div>
                    </>
                  )}

                  {item.type === "gale" && (
                    <>
                      <div className="flex flex-row">
                        <Text className="text-white">
                          <FormattedMessage id="enter-with" />:{" "}
                        </Text>
                        <Text className="font-bold">R$ {item.amount}</Text>
                      </div>
                      <div className="flex flex-row">
                        <Text className="text-white">
                          <FormattedMessage id="exit-in" />:{" "}
                        </Text>
                        <Text className="font-bold">{item.target}x</Text>
                      </div>
                    </>
                  )}
                  {item.type === "win" && (
                    <>
                      <div className="flex flex-row">
                        <Text className="text-white">
                          <FormattedMessage id="entry" />:{" "}
                        </Text>
                        <Text className="font-bold">{item.target}x</Text>
                      </div>
                      <div className="flex flex-row">
                        <Text className="text-white">
                          <FormattedMessage id="crash-in" />:{" "}
                        </Text>
                        <Text className="font-bold">{item.result}x</Text>
                      </div>
                    </>
                  )}
                  {item.type === "loss" && (
                    <>
                      <div className="flex flex-row">
                        <Text className="text-white">
                          <FormattedMessage id="entry" />:{" "}
                        </Text>
                        <Text className="font-bold">{item.target}x</Text>
                      </div>
                      <div className="flex flex-row">
                        <Text className="text-white">
                          <FormattedMessage id="crash-in" />:{" "}
                        </Text>
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
              <FormattedMessage id="wait-for-signal" />
            </span>
          </div>
        </div>
      )}
    </Container>
  );
};

export { CardCrash };
