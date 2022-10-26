import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { Settings as CarouselSetting } from "react-slick";
import { Container, Slide, Card } from "./styles";
import { useClassRoom } from "../../../hooks/ClassRoomContext";
import { FiLock } from "react-icons/fi";

interface ILessons {
  lessons: any[];
}

const CourseSlider: React.FC<ILessons> = ({ lessons }) => {
  const { setCurrentActiveLesson } = useClassRoom();
  const settings: CarouselSetting = {
    className: "slider variable-width",
    infinite: false,
    dots: false,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    autoplay: false,
    variableWidth: true,
  };

  return (
    <Container className="block w-full mt-4">
      <Slider {...settings} className="slider-slick block w-full">
        {lessons.map((lesson) => (
          <Slide key={lesson.id}>
            <Card
              background={lesson.thumb_url}
              onClick={() =>
                lesson.active ? setCurrentActiveLesson(lesson) : null
              }
              active={lesson.active}
            >
              {lesson.user_viewed && (
                <img
                  className="check"
                  src="/assets/objects/check-icon.svg"
                  alt="Check"
                  width={30}
                />
              )}
              <div className="play">
                {lesson.active ? (
                  <img
                    src="/assets/objects/play-circle.svg"
                    alt="Play Course"
                    width={50}
                  />
                ) : (
                  <FiLock size={40} />
                )}
              </div>
              <div className="title">
                <span>{lesson.title}</span>
              </div>
            </Card>
          </Slide>
        ))}
      </Slider>
    </Container>
  );
};

export { CourseSlider };
