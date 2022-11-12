import React from "react";
import { Container, Header, Title, Table, Entry, Marker } from "./styles";
import { useDoubleGame } from "../../../../hooks/DoubleGameContext";
import { IDouble } from "../../../../types/IDouble";
import { FormattedMessage } from "react-intl";
import { FiEdit } from "react-icons/fi";

interface IDoubleEntries {
  selectEntry(data: any): void;
}

const DoubleEntries: React.FC<IDoubleEntries> = ({ selectEntry }) => {
  const { entries } = useDoubleGame();

  return (
    <Container>
      <Header>
        <Title>
          <FormattedMessage id="todays-results" />
        </Title>
        <div className="flex w-6 justify-center items-center">
          <img src="../assets/objects/entries.svg" alt="Entries" />
        </div>
      </Header>
      <Table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="py-3 text-center text-xs font-medium text-white tracking-wider">
              <FormattedMessage id="result" />
            </th>
            <th className="py-3 text-center text-xs font-medium text-white tracking-wider">
              <FormattedMessage id="entry" />
            </th>
            <th className="py-3 px-6 text-center text-xs font-medium text-white tracking-wider">
              <FormattedMessage id="roll" />
            </th>
            <th className="py-3 px-2 text-center text-xs font-medium text-white tracking-wider">
              Gerenciador
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

              <td className="flex flex-row px-6 py-2 whitespace-nowrap text-white justify-center">
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

              <td className="py-2 px-6 whitespace-nowrap text-white text-center mx-auto">
                <div className="block">
                  {double.round.color === "black" && (
                    <img
                      src="/assets/objects/double-black.svg"
                      alt="Black Color"
                      width={21}
                    />
                  )}
                  {double.round.color === "red" && (
                    <img
                      src="/assets/objects/double-red.svg"
                      alt="Red Color"
                      width={21}
                    />
                  )}
                  {double.round.color === "white" && (
                    <img
                      src="/assets/objects/double-white.svg"
                      alt="White Color"
                      width={21}
                    />
                  )}
                </div>
              </td>
              <td className="flex flex-row px-6 py-2 whitespace-nowrap text-white justify-center">
                {!double.round.user_entry && (
                  <Marker onClick={() => selectEntry(double)}>
                    <FiEdit size={20} />
                  </Marker>
                )}
              </td>
            </Entry>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export { DoubleEntries };
