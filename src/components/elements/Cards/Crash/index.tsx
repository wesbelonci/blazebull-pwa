import React, { useState, useEffect, useCallback } from "react";
import { Container, Content, Title, Text } from "./styles";
import { motion } from "framer-motion";

interface CardProps {
  id: string;
  type: "analyzing" | "entry" | "win" | "loss" | "gale";
  target: number;
  text?: string;
  amount?: number;
  last?: number;
  result?: number;
  hour: string;
}

const response: CardProps[] = [
  {
    id: "489037tjfiosd",
    type: "analyzing",
    target: 2,
    hour: "19:10",
  },
  {
    id: "fsduiogh0io4",
    type: "entry",
    target: 2,
    last: 29.4,
    hour: "19:10",
  },
  {
    id: "fsduiogh03453",
    type: "gale",
    text: "Faça Martingale",
    amount: 5,
    target: 2,
    hour: "19:10",
  },
  {
    id: "fsdiop[j4894",
    type: "gale",
    text: "Faça Martingale",
    amount: 10,
    target: 2,
    hour: "19:10",
  },
  {
    id: "uiotsdfghjof",
    type: "win",
    target: 2,
    result: 8.29,
    hour: "19:11",
  },
  // {
  //   id: "4fgj0sdjrt5r",
  //   type: "loss",
  //   target: 2,
  //   result: 1.1,
  //   hour: "19:11",
  // },
];

const CardCrash = () => {
  const [data, setData] = useState<CardProps[]>([] as CardProps[]);
  const [count, setCount] = useState(0);

  const removeCard = useCallback(() => {
    setTimeout(() => {
      setData([] as CardProps[]);
    }, 10000);
  }, []);

  useEffect(() => {
    let counter = count;
    const interval = setInterval(() => {
      if (counter >= response.length) {
        clearInterval(interval);
      } else {
        setCount((count) => count + 1);
        setData((oldValue) => [...oldValue, response[count]]);

        if (response[count].type === "loss" || response[count].type === "win") {
          removeCard();
        }
        counter++;
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [count, removeCard]);

  return (
    <Container>
      {data.map((item, index) => (
        <motion.div
          key={item.id}
          className="frame"
          initial={{ width: 0, x: window.innerWidth, zIndex: 999 }}
          animate={{ width: "100%", x: 0 }}
          transition={{ duration: 0.2, origin: 0 }}
          exit={{ x: window.innerWidth }}
        >
          <Content
            className="card"
            type={item.type}
            position={data.length - index}
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
                    <Text className="font-bold">{item.last}x</Text>
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
