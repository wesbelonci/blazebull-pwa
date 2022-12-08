/* eslint-disable react/style-prop-object */
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
import { CourseSlider } from "../../../components/elements/CourseSlider";
import { useClassRoom } from "../../../hooks/ClassRoomContext";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import { FiArrowRight } from "react-icons/fi";
import { FormattedMessage } from "react-intl";
// import { Link } from "react-router-dom";

function Classroom() {
  const {
    currentActiveLesson,
    classModules,
    totalCompletedLessons,
    totalLessons,
    completeLesson,
  } = useClassRoom();

  return (
    <Layout>
      <Container>
        <Content>
          {currentActiveLesson ? (
            <CurrentClass>
              <Watching>
                {currentActiveLesson && (
                  <iframe
                    title="Video"
                    frameBorder="0"
                    allowFullScreen
                    src={currentActiveLesson.video_url}
                    id="ifr_637eb356f44ca1000986d8f4"
                    referrerPolicy="origin"
                  />
                  // <YouTube
                  //   videoId={currentActiveLesson.video_url}
                  //   opts={{ allowFullScreen: true, showInfo: 0 }}
                  // />
                )}
              </Watching>
              {currentActiveLesson.action_url && (
                <a
                  href={currentActiveLesson.action_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button className="mx-auto" color="red">
                    <span>
                      <FormattedMessage id="access-the-website" />
                    </span>
                    <FiArrowRight className="text-red ml-2" size={25} />
                  </Button>
                </a>
              )}

              <Button
                className="mx-auto mt-8"
                color="lime-green"
                onClick={() => completeLesson(currentActiveLesson.id)}
              >
                <img src="/assets/objects/check-icon.svg" alt="Check" />
                <span>
                  <FormattedMessage id="end-class" />
                </span>
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
                <h2>
                  <FormattedMessage id="module-and-classes" />
                </h2>
              </div>
              <div className="flex w-auto flex-row items-center">
                <span className="text-xs text-white mr-2">
                  <FormattedMessage id="progress" />
                </span>
                <div className="w-24">
                  <BorderLinearProgress
                    variant="determinate"
                    value={Number(
                      100 / Number(totalLessons / totalCompletedLessons)
                    )}
                  />
                </div>
                <span className="text-xs text-white ml-2">
                  {Number(
                    100 / Number(totalLessons / totalCompletedLessons)
                  ).toFixed(2)}
                  %
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
                          <FormattedMessage id="video-classes" />
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
