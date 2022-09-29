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
  CardContainer,
} from "./styles";
import { FiArrowUp, FiArrowDown } from "react-icons/fi";
import { CardCrash } from "../../elements/Cards/Crash";
import { useCrashGame } from "../../../hooks/CrashGameContext";

// interface EntryDataProps {
//   win: number;
//   loss: number;
// }

interface EntriesProps {
  room: "crash" | "double";
  // result: EntryDataProps;
}

const RoomEntries: React.FC<EntriesProps> = ({ room }) => {
  const { daily } = useCrashGame();
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
              {daily.win}
            </Badge>
          </RoomStatsWin>
          <DividerStats>
            <span>x</span>
          </DividerStats>
          <RoomStatsLoss>
            <Badge type="loss" className="badge">
              {daily.loss}
            </Badge>
            <FiArrowDown size={15} />
            <span>Loss</span>
          </RoomStatsLoss>
        </div>
      </Header>
      {room === "crash" ? (
        <CardCrash />
      ) : (
        <CardContainer>{/* <CardCrash /> */}</CardContainer>
      )}
    </Container>
  );
};

export { RoomEntries };
