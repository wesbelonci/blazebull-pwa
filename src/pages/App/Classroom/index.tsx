import React from "react";
import { Layout } from "../../../layouts/app";
import {
  Container,
  Content,
  Watching,
  CurrentClass,
  Button,
  ModuleAndCourses,
  BorderLinearProgress,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "./styles";
import Vimeo from "@u-wave/react-vimeo";
import { CourseSlider } from "../../../components/elements/CourseSlider";
import { useLoading } from "../../../hooks/LoadingContext";
import api from "../../../services/api";

function Classroom() {
  const [modules, setModules] = React.useState<any[] | null>(null);
  const [totalCompleteLessons, setTotalCompleteLessons] =
    React.useState<number>(0);
  const [totalLessons, setTotalLessons] = React.useState<number>(0);
  const [currentLesson, setCurrentLesson] = React.useState<any | null>();
  const { setLoadingVisible } = useLoading();

  const getModules = React.useCallback(async () => {
    setLoadingVisible(true);

    try {
      const response = await api.get("/lesson");

      setModules(response.data);

      let total = 0;
      let completed = 0;
      let current_lesson: any | null = null;
      // eslint-disable-next-line array-callback-return
      response.data.map((module: any) => {
        total = total + module.lessons.length;

        completed =
          completed +
          module.lessons.filter((lesson: any) => lesson.user_viewed !== null)
            .length;

        if (current_lesson === null) {
          current_lesson = module.lessons.find(
            (lesson: any) =>
              lesson.user_viewed && lesson.user_viewed.complete === false
          );
        }
      });

      setTotalLessons(total);
      setTotalCompleteLessons(completed);
      setCurrentLesson(current_lesson);

      setLoadingVisible(false);
    } catch (err) {
      setLoadingVisible(false);
    }
  }, [setLoadingVisible]);

  React.useEffect(() => {
    if (!modules) {
      getModules();
    }
  }, [getModules, modules]);

  return (
    <Layout>
      <Container>
        <Content>
          <CurrentClass>
            <Watching>
              {modules && currentLesson && (
                <Vimeo
                  video={currentLesson.video_url}
                  controls={true}
                  showByline
                  showTitle
                  showPortrait
                />
              )}
            </Watching>
            <Button className="mx-auto">
              <img src="/assets/objects/check-icon.svg" alt="Check" />
              <span>Concluir Aula</span>
            </Button>
          </CurrentClass>
          <ModuleAndCourses>
            <div className="flex flex-row justify-between w-full items-center mb-4 px-4">
              <div className="w-auto">
                <h2>Modulo e aulas</h2>
              </div>
              <div className="flex w-auto flex-row items-center">
                <span className="text-xs text-white mr-2">Progresso</span>
                <div className="w-24">
                  <BorderLinearProgress
                    variant="determinate"
                    value={Number(
                      100 / Number(totalLessons / totalCompleteLessons)
                    )}
                  />
                </div>
                <span className="text-xs text-white ml-2">
                  {Number(100 / Number(totalLessons / totalCompleteLessons))}%
                </span>
              </div>
            </div>
            {modules && modules.length > 0 && (
              <>
                {modules.map((moduleLession) => (
                  <Accordion
                    background={moduleLession.thumb_url}
                    key={moduleLession.id}
                  >
                    <AccordionSummary
                      aria-controls="panel1d-content"
                      id="panel1d-header"
                    >
                      <div className="flex w-full flex-row justify-between items-center pr-4">
                        <span>{moduleLession.title}</span>
                        <span className="text-xs">
                          {
                            moduleLession.lessons.filter(
                              (lesson: any) => lesson.user_viewed !== null
                            ).length
                          }
                          /{moduleLession.lessons.length}
                        </span>
                      </div>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div className="flex flex-col w-full px-6">
                        <span className="text-white text-md font-semibold">
                          Video Aulas
                        </span>
                      </div>
                      <CourseSlider lessons={moduleLession.lessons} />
                    </AccordionDetails>
                  </Accordion>
                ))}
              </>
            )}
          </ModuleAndCourses>
        </Content>
      </Container>
    </Layout>
  );
}

export { Classroom };
