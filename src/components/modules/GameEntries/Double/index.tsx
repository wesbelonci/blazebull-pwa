import React from "react";
import { Container, Header, Title, Table, Entry } from "./styles";
// import { FiArrowUp, FiArrowDown } from "react-icons/fi";
// import { CardCrash } from "../../elements/Cards/Crash";
import { useDoubleGame } from "../../../../hooks/DoubleGameContext";
// import { ICrash } from "../../../../types/ICrash";
import { IDouble } from "../../../../types/IDouble";

const DoubleEntries: React.FC = () => {
  const { entries } = useDoubleGame();

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
              Entrada
            </th>
            <th className="py-3 text-center text-xs font-medium text-white tracking-wider">
              Giro
            </th>
          </tr>
        </thead>
        <tbody>
          {entries?.map((double: IDouble) => (
            <Entry
              type={double.win_loss}
              key={double.id}
              className={`bg-lime-green`}
            >
              <td
                className={`px-6 py-2 whitespace-nowrap uppercase font-semibold ${
                  double.win_loss === "win" ? "text-lime-green" : "text-red"
                }`}
              >
                {double.win_loss}
              </td>
              <td className="flex flex-row px-6 py-2 whitespace-nowrap text-white">
                {double.double_game_bet === "black" && (
                  <img
                    src="/assets/objects/double-black.svg"
                    alt="Black Color"
                  />
                )}
                {double.double_game_bet === "red" && (
                  <img src="/assets/objects/double-red.svg" alt="Red Color" />
                )}
                <div className="px-2">
                  <span className="text-white">+</span>
                </div>
                <img src="/assets/objects/double-white.svg" alt="White Color" />
              </td>
              <td className="px-6 py-2 whitespace-nowrap text-white">
                {double.round.color === "black" && (
                  <img
                    src="/assets/objects/double-black.svg"
                    alt="Black Color"
                  />
                )}
                {double.round.color === "red" && (
                  <img src="/assets/objects/double-red.svg" alt="Red Color" />
                )}
              </td>
              {/* <td className="px-6 py-2 whitespace-nowrap text-white">
                {double.round.crash_point}x
              </td> */}
            </Entry>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export { DoubleEntries };
