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
import { useUserEntries } from "../../../hooks/UserEntriesContext";
// import { FiArrowUp, FiArrowDown } from "react-icons/fi";
// import { CardCrash } from "../../elements/Cards/Crash";
// import { CardDouble } from "../../elements/Cards/Double";
// import { useCrashGame } from "../../../hooks/CrashGameContext";
// import { useDoubleGame } from "../../../hooks/DoubleGameContext";
// import { FormattedMessage } from "react-intl";

interface EntriesProps {
  // room: "crash" | "double";
}

const UserEntriesManager: React.FC<EntriesProps> = () => {
  const { double, crash } = useUserEntries();

  console.log(double, crash);

  return (
    <Container>
      <Header>
        <Title>Meus resultados</Title>
        <div className="flex w-6 justify-center items-center">
          <img src="../assets/objects/entries.svg" alt="Entries" />
        </div>
      </Header>

      <div className="flex flex-col space-y-6">
        {double && (
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
                <Badge>
                  {Number(double?.loss || 0) + Number(double?.win || 0)}
                </Badge>
              </div>
            </HeaderResult>
            <div className="flex flex-row w-full items-center justify-center">
              <div className="w-full block h-48">
                <ResponsiveRadialBar
                  data={[
                    {
                      id: "Placar",
                      data: [
                        {
                          x: "win",
                          y: Number(double?.win || 0),
                        },
                        {
                          x: "loss",
                          y: Number(double?.loss || 0),
                        },
                      ],
                    },
                  ]}
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

                <div className="mx-auto w-full py-4">
                  <span className="text-white font-bold text-xl">Placar</span>
                </div>
              </div>

              <div className="w-full block h-48">
                <ResponsiveRadialBar
                  data={[
                    {
                      id: "Ganhos",
                      data: [
                        {
                          x: "win",
                          y: Number(double?.win_amount || 0),
                        },
                        {
                          x: "loss",
                          y: Number(double?.loss_amount || 0),
                        },
                      ],
                    },
                  ]}
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
                <div className="mx-auto w-full py-4">
                  <span className="text-white font-bold text-xl">Ganhos</span>
                </div>
              </div>
            </div>
          </GameResults>
        )}

        {crash && (
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
                <Badge>
                  {Number(crash?.loss || 0) + Number(crash?.win || 0)}
                </Badge>
              </div>
            </HeaderResult>
            <div className="flex flex-row w-full items-center justify-center">
              <div className="w-full block h-48">
                <ResponsiveRadialBar
                  data={[
                    {
                      id: "Placar",
                      data: [
                        {
                          x: "win",
                          y: Number(crash?.win || 0),
                        },
                        {
                          x: "loss",
                          y: Number(crash?.loss || 0),
                        },
                      ],
                    },
                  ]}
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

                <div className="mx-auto w-full py-4">
                  <span className="text-white font-bold text-xl">Placar</span>
                </div>
              </div>

              <div className="w-full block h-48">
                <ResponsiveRadialBar
                  data={[
                    {
                      id: "Ganhos",
                      data: [
                        {
                          x: "win",
                          y: Number(crash?.win_amount || 0),
                        },
                        {
                          x: "loss",
                          y: Number(crash?.loss_amount || 0),
                        },
                      ],
                    },
                  ]}
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
                <div className="mx-auto w-full py-4">
                  <span className="text-white font-bold text-xl">Ganhos</span>
                </div>
              </div>
            </div>
          </GameResults>
        )}
      </div>

      <FinancialStatus>
        <div className="flex w-full flex-row justify-between text-white py-2">
          <h3>Total investido:</h3>
          <span className="font-light">
            R$ {Number(double?.amount || 0) + Number(crash?.amount || 0)}
          </span>
        </div>
        <Divider />
        <div className="flex w-full flex-row justify-between text-white py-2">
          <h3>Ganhos totais:</h3>
          <span className="font-light">
            R${" "}
            {Number(double?.win_amount || 0) + Number(crash?.win_amount || 0)}
          </span>
        </div>
        <Divider />
        <div className="flex w-full flex-row justify-between text-white py-2">
          <h3>Perdas totais:</h3>
          <span className="font-light">
            R${" "}
            {Number(double?.loss_amount || 0) + Number(crash?.loss_amount || 0)}
          </span>
        </div>
        <Divider />
        <div className="flex w-full flex-row justify-between text-white py-2">
          <h3>Total:</h3>
          <span className="text-lime-green">
            R${" "}
            {Number(double?.win_amount || 0) +
              Number(crash?.win_amount || 0) -
              Number(double?.loss_amount || 0) +
              Number(crash?.loss_amount || 0)}
          </span>
        </div>
        <Divider />
      </FinancialStatus>
    </Container>
  );
};

export { UserEntriesManager };
