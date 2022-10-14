// import React from "react";
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
  LoadingBox,
} from "./styles";
import Vimeo from "@u-wave/react-vimeo";
import { CourseSlider } from "../../../components/elements/CourseSlider";
import { useClassRoom } from "../../../hooks/ClassRoomContext";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

function Classroom() {
  const {
    currentActiveLesson,
    classModules,
    totalCompletedLessons,
    totalLessons,
    completeLesson,
  } = useClassRoom();

  console.log(currentActiveLesson);

  return (
    <Layout>
      <Container>
        <Content>
          {currentActiveLesson ? (
            <CurrentClass>
              <Watching>
                {currentActiveLesson && (
                  <Vimeo
                    video={currentActiveLesson.video_url}
                    controls={true}
                    showByline
                    showTitle
                    showPortrait
                  />
                )}
              </Watching>
              <Button
                className="mx-auto"
                onClick={() => completeLesson(currentActiveLesson.id)}
              >
                <img src="/assets/objects/check-icon.svg" alt="Check" />
                <span>Concluir Aula</span>
              </Button>
            </CurrentClass>
          ) : (
            <LoadingBox>
              <Stack sx={{ color: "grey.500" }} spacing={2} direction="row">
                <CircularProgress color="red" />
              </Stack>
            </LoadingBox>
          )}

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
                      100 / Number(totalLessons / totalCompletedLessons)
                    )}
                  />
                </div>
                <span className="text-xs text-white ml-2">
                  {Number(100 / Number(totalLessons / totalCompletedLessons))}%
                </span>
              </div>
            </div>
            {classModules && classModules.length > 0 && (
              <>
                {classModules.map((moduleLession: any) => (
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
