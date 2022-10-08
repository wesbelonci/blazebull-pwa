import React from "react";
import { Container, Header, Table, Entry, Title } from "./styles";
import { useCrashGame } from "../../../../hooks/CrashGameContext";
import { ICrash } from "../../../../types/ICrash";
import { FormattedMessage } from "react-intl";

const CrashEntries: React.FC = () => {
  const { entries } = useCrashGame();

  return (
    <Container>
      <Header>
        <Title>
          <FormattedMessage id="todays-results" />
        </Title>
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
            </Entry>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export { CrashEntries };
