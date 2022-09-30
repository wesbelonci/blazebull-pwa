import React from "react";
import { Container, Header, Title, Table, Entry } from "./styles";
// import { FiArrowUp, FiArrowDown } from "react-icons/fi";
// import { CardCrash } from "../../elements/Cards/Crash";
import { useCrashGame } from "../../../../hooks/CrashGameContext";
import { ICrash } from "../../../../types/ICrash";

const CrashEntries: React.FC = () => {
  const { entries } = useCrashGame();
  return (
    <Container>
      <Header>
        <Title>Resultados de Hoje</Title>
      </Header>
      <Table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="py-3 text-center text-xs font-medium text-white tracking-wider">
              Resultado
            </th>
            <th className="py-3 text-center text-xs font-medium text-white tracking-wider">
              Saida
            </th>
            <th className="py-3 text-center text-xs font-medium text-white tracking-wider">
              Crash
            </th>
          </tr>
        </thead>
        <tbody>
          {entries?.map((crash: ICrash) => (
            <Entry
              type={crash.win_loss}
              key={crash.id}
              className={`bg-lime-green`}
            >
              <td
                className={`px-6 py-2 whitespace-nowrap uppercase font-semibold ${
                  crash.win_loss === "win" ? "text-lime-green" : "text-red"
                }`}
              >
                {crash.win_loss}
              </td>
              {/* <td className="px-6 py-2 whitespace-nowrap text-white">
              </td> */}
              <td className="px-6 py-2 whitespace-nowrap text-white">
                {crash.crash_game_bet.toFixed(2)}x
              </td>
              <td className="px-6 py-2 whitespace-nowrap text-white">
                {crash.round.crash_point}x
              </td>
            </Entry>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export { CrashEntries };
