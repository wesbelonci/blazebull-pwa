import React from "react";
import {
  Container,
  Header,
  Title,
  Live,
  RoomStatsLoss,
  RoomStatsWin,
  Badge,
  DividerStats,
} from "./styles";
import { FiArrowUp, FiArrowDown } from "react-icons/fi";
import { CardCrash } from "../../elements/Cards/Crash";
import { CardDouble } from "../../elements/Cards/Double";
import { useCrashGame } from "../../../hooks/CrashGameContext";
import { useDoubleGame } from "../../../hooks/DoubleGameContext";

interface EntriesProps {
  room: "crash" | "double";
}

const RoomEntries: React.FC<EntriesProps> = ({ room }) => {
  const { daily: crashData } = useCrashGame();
  const { daily: doubleData } = useDoubleGame();

  return (
    <Container>
      <Header>
        <div className="flex w-auto flex-row items-center">
          <Title>Entradas</Title>
          <Live>
            <span>Ao Vivo</span>
          </Live>
        </div>
        <div className="flex w-50 flex-row">
          <RoomStatsWin>
            <span>Win</span>
            <FiArrowUp size={15} />
            <Badge type="win" className="badge">
              {room === "crash" ? crashData.win : doubleData.win}
            </Badge>
          </RoomStatsWin>
          <DividerStats>
            <span>x</span>
          </DividerStats>
          <RoomStatsLoss>
            <Badge type="loss" className="badge">
              {room === "crash" ? crashData.loss : doubleData.loss}
            </Badge>
            <FiArrowDown size={15} />
            <span>Loss</span>
          </RoomStatsLoss>
        </div>
      </Header>
      {room === "crash" ? <CardCrash /> : <CardDouble />}
    </Container>
  );
};

export { RoomEntries };
