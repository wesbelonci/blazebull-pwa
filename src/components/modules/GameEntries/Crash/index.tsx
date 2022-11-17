import React from "react";
import { Container, Header, Table, Entry, Title, Marker } from "./styles";
import { useCrashGame } from "../../../../hooks/CrashGameContext";
import { ICrash } from "../../../../types/ICrash";
import { FormattedMessage } from "react-intl";
import { FiEdit } from "react-icons/fi";

interface ICrashEntries {
  selectEntry(data: any): void;
}

const CrashEntries: React.FC<ICrashEntries> = ({ selectEntry }) => {
  const { entries } = useCrashGame();

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
              <FormattedMessage id="exit" />
            </th>
            <th className="py-3 text-center text-xs font-medium text-white tracking-wider">
              Crash
            </th>
            <th className="py-3 px-2 text-center text-xs font-medium text-white tracking-wider">
              Gerenciador
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
              <td className="px-6 py-2 whitespace-nowrap text-white">
                {crash.crash_game_bet.toFixed(2)}x
              </td>
              <td className="px-6 py-2 whitespace-nowrap text-white">
                {crash.round.crash_point}x
              </td>
              <td className="flex flex-row px-6 py-2 whitespace-nowrap text-white justify-center">
                {!crash.round.user_entry && (
                  <Marker onClick={() => selectEntry(crash)}>
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

export { CrashEntries };
