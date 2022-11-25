import { Layout } from "../../../layouts/app";
import {
  Container,
  Content,
  Rooms,
  Crash,
  Double,
  RoomStats,
  RoomStatsWin,
  RoomStatsLoss,
  Badge,
  Title,
  Rate,
  DividerStats,
  Live,
  Course,
  CourseHeader,
  KeepWatching,
} from "./styles";
import { FiArrowUp, FiArrowDown, FiChevronRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useCrashGame } from "../../../hooks/CrashGameContext";
import { useDoubleGame } from "../../../hooks/DoubleGameContext";
import { useLocale } from "../../../hooks/LocaleContext";
// import Vimeo from "@u-wave/react-vimeo";
import YouTube from "react-youtube";
import { useClassRoom } from "../../../hooks/ClassRoomContext";
// import { UserEntriesManager } from "../../../components/modules/UserEntriesManager";
// import { FormattedMessage, useIntl } from "react-intl";

function HomePage() {
  const navigate = useNavigate();
  const { daily: dataCrash } = useCrashGame();
  const { daily: dataDouble } = useDoubleGame();
  const { locale } = useLocale();
  const { currentActiveLesson } = useClassRoom();

  return (
    <Layout>
      <Container>
        <Content>
          <Course>
            <CourseHeader>
              <h2>Assista as aulas</h2>
              <div
                className="flex flex-row w-auto items-center cursor-pointer"
                onClick={() => navigate(`/${locale}/classroom`)}
              >
                <span>Sala de aula</span>
                <FiChevronRight size={20} />
              </div>
            </CourseHeader>
            <KeepWatching>
              {currentActiveLesson && (
                <YouTube
                  videoId={currentActiveLesson.video_url}
                  opts={{ allowFullScreen: true, showInfo: 0 }}
                />
              )}
            </KeepWatching>
          </Course>
          <Rooms>
            <h2>Salas de sinais</h2>
            <Crash onClick={() => navigate(`/${locale}/room-crash`)}>
              <Live>
                <span>Ao vivo</span>
              </Live>
              <RoomStats>
                <div className="flex w-auto h-auto flex-row items-center justify-center">
                  <RoomStatsWin>
                    <span>Win</span>
                    <FiArrowUp size={15} />
                    <Badge type="win" className="badge">
                      {dataCrash.win}
                    </Badge>
                  </RoomStatsWin>
                  <DividerStats>
                    <span>x</span>
                  </DividerStats>
                  <RoomStatsLoss>
                    <Badge type="loss" className="badge">
                      {dataCrash.loss}
                    </Badge>
                    <FiArrowDown size={15} />
                    <span>Loss</span>
                  </RoomStatsLoss>
                </div>
                <div className="text-white mt-1">
                  <span>Nas últimas 24h</span>
                </div>
                <Title className="flex items-center h-20">
                  <span className="text-2xl">Sala Crash</span>
                </Title>
                <Rate className="">
                  <span>Taxa de acertos:</span>
                  <span className="text-lime-green">
                    <strong className="text-lime-green font-bold">
                      {dataCrash.win === 0
                        ? 0
                        : Number(
                            ((dataCrash.loss / dataCrash.win) * 100 - 100) * -1
                          ).toFixed(2)}
                      %
                    </strong>
                  </span>
                </Rate>
              </RoomStats>
            </Crash>
            <Double onClick={() => navigate(`/${locale}/room-double`)}>
              <Live>
                <span>Ao vivo</span>
              </Live>
              <RoomStats>
                <div className="flex w-auto h-auto flex-row items-center justify-center">
                  <RoomStatsWin>
                    <span>Win</span>
                    <FiArrowUp size={15} />
                    <Badge type="win" className="badge">
                      {dataDouble.win}
                    </Badge>
                  </RoomStatsWin>
                  <DividerStats>
                    <span>x</span>
                  </DividerStats>
                  <RoomStatsLoss>
                    <Badge type="loss" className="badge">
                      {dataDouble.loss}
                    </Badge>
                    <FiArrowDown size={15} />
                    <span>Loss</span>
                  </RoomStatsLoss>
                </div>
                <div className="text-white mt-1">
                  <span>Nas últimas 24h</span>
                </div>
                <Title className="flex items-center h-20">
                  <span className="text-2xl">Sala Double</span>
                </Title>
                <Rate className="">
                  <span>Taxa de acertos:</span>
                  <span className="text-lime-green">
                    <strong className="text-lime-green font-bold">
                      {dataDouble.win === 0
                        ? 0
                        : Number(
                            ((dataDouble.loss / dataDouble.win) * 100 - 100) *
                              -1
                          ).toFixed(2)}
                      %
                    </strong>
                  </span>
                </Rate>
              </RoomStats>
            </Double>
          </Rooms>
          {/* <UserEntriesManager /> */}
          <div style={{ height: 40 }}></div>
        </Content>
      </Container>
    </Layout>
  );
}

export { HomePage };
