import React from "react";
import {
  Container,
  Header,
  Title,
  GameResults,
  HeaderResult,
  Badge,
  FinancialStatus,
  Divider,
} from "./styles";
import { ResponsiveRadialBar } from "@nivo/radial-bar";
// import { FiArrowUp, FiArrowDown } from "react-icons/fi";
// import { CardCrash } from "../../elements/Cards/Crash";
// import { CardDouble } from "../../elements/Cards/Double";
// import { useCrashGame } from "../../../hooks/CrashGameContext";
// import { useDoubleGame } from "../../../hooks/DoubleGameContext";
// import { FormattedMessage } from "react-intl";

interface EntriesProps {
  // room: "crash" | "double";
}

const data = [
  {
    id: "Ganhos",
    data: [
      {
        x: "win",
        y: 2469,
      },
      {
        x: "loss",
        y: 400,
      },
    ],
  },
];

const UserEntriesManager: React.FC<EntriesProps> = () => {
  return (
    <Container>
      <Header>
        <Title>Meus resultados</Title>
        <div className="flex w-6 justify-center items-center">
          <img src="../assets/objects/entries.svg" alt="Entries" />
        </div>
      </Header>
      <div className="flex flex-col space-y-6">
        <GameResults>
          <HeaderResult>
            <div className="flex flex-row w-auto items-center">
              <h2>Double</h2>
              <img
                className="ml-6 w-10"
                src="../assets/objects/double-result.svg"
                alt=""
              />
            </div>
            <div className="flex flex-row w-auto items-center justify-end">
              <span>Entradas feitas</span>
              <Badge>300</Badge>
            </div>
          </HeaderResult>
          <div className="flex flex-row w-full h-full">
            <div className="w-full block">
              <ResponsiveRadialBar
                data={data}
                // valueFormat=">-$.2f"
                startAngle={0}
                endAngle={360}
                innerRadius={0.15}
                colors={["#32D74B", "#f12c4cb3"]}
                padding={0.6}
                padAngle={7}
                cornerRadius={12}
                // margin={{ top: 2, right: 2, bottom: 2, left: 2 }}
                enableTracks={false}
                enableRadialGrid={false}
                radialAxisStart={null}
                circularAxisOuter={null}
                // radialAxisStart={{ tickSize: 5, tickPadding: 5, tickRotation: 0 }}
                // circularAxisOuter={null}
                labelsTextColor="#ffffff"
                enableLabels={true}
                enableCircularGrid={false}
                labelsSkipAngle={7}
                labelsRadiusOffset={2}
                theme={{
                  fontSize: 16,
                }}
              />

              <div className="mx-auto w-full -mt-10">
                <span className="text-white font-bold text-xl">Placar</span>
              </div>
            </div>

            <div className="w-full block">
              <ResponsiveRadialBar
                data={data}
                // valueFormat=">-.2f"
                startAngle={0}
                endAngle={360}
                innerRadius={0.15}
                colors={["#32D74B", "#f12c4cb3"]}
                padding={0.6}
                padAngle={7}
                cornerRadius={12}
                // margin={{ top: 2, right: 2, bottom: 2, left: 2 }}
                enableTracks={false}
                enableRadialGrid={false}
                radialAxisStart={null}
                circularAxisOuter={null}
                // radialAxisStart={{ tickSize: 5, tickPadding: 5, tickRotation: 0 }}
                // circularAxisOuter={null}
                labelsTextColor="#ffffff"
                enableLabels={true}
                enableCircularGrid={false}
                labelsSkipAngle={7}
                labelsRadiusOffset={2.5}
                theme={{
                  fontSize: 16,
                }}
                // legends={null}
              />
              <div className="mx-auto w-full -mt-10">
                <span className="text-white font-bold text-xl">Ganhos</span>
              </div>
            </div>
          </div>
        </GameResults>

        <GameResults>
          <HeaderResult>
            <div className="flex flex-row w-auto items-center">
              <h2>Crash</h2>
              <img
                className="ml-6 w-8"
                src="../assets/objects/crash-result.svg"
                alt=""
              />
            </div>
            <div className="flex flex-row w-auto items-center justify-end">
              <span>Entradas feitas</span>
              <Badge>300</Badge>
            </div>
          </HeaderResult>
        </GameResults>
      </div>

      <FinancialStatus>
        <div className="flex w-full flex-row justify-between text-white py-2">
          <h3>Total investido:</h3>
          <span className="font-light">R$1.502,68</span>
        </div>
        <Divider />
        <div className="flex w-full flex-row justify-between text-white py-2">
          <h3>Ganhos totais:</h3>
          <span className="font-light">+ R$964,93</span>
        </div>
        <Divider />
        <div className="flex w-full flex-row justify-between text-white py-2">
          <h3>Perdas totais:</h3>
          <span className="font-light">- R$86,88</span>
        </div>
        <Divider />
        <div className="flex w-full flex-row justify-between text-white py-2">
          <h3>Total:</h3>
          <span className="text-lime-green">R$2.380,70</span>
        </div>
        <Divider />
      </FinancialStatus>
    </Container>
  );
};

export { UserEntriesManager };
