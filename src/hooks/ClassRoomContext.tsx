import React, {
  createContext,
  useContext,
  useCallback,
  useState,
  useEffect,
} from "react";
import { useLocation } from "react-router-dom";
import api from "../services/api";
import { useLoading } from "./LoadingContext";
import { useToast } from "./ToastContext";

interface ClassRoomContextData {
  totalCompletedLessons: number;
  totalLessons: number;
  currentActiveLesson: ILesson | null;
  classModules: IModule[] | null;
  setCurrentActiveLesson(lesson: ILesson): void;
  completeLesson(lesson_id: string): void;
}

interface ClassRoomProviderProps {
  children: JSX.Element;
}

interface ILesson {
  id: string;
  title: string;
  description: string;
  thumb_url: string;
  user_viewed: boolean;
  video_url: string;
}

interface IModule {
  id: string;
  title: string;
  thumb_url: string;
  lessons: ILesson[];
}

export const ClassRoomContext = createContext<ClassRoomContextData>(
  {} as ClassRoomContextData
);

export const ClassRoomProvider: React.FC<ClassRoomProviderProps> = ({
  children,
}) => {
  const [classModules, setClassModules] = useState<IModule[] | null>(null);
  const [totalCompletedLessons, setTotalCompletedLessons] = useState<number>(0);
  const [currentActiveLesson, setCurrentActiveLesson] =
    useState<ILesson | null>(null);
  const [totalLessons, setTotalLessons] = useState<number>(0);

  const { setLoadingVisible } = useLoading();
  const location = useLocation();
  const { addToast } = useToast();

  const updateCurrentLesson = useCallback(async (lesson: ILesson) => {
    setCurrentActiveLesson(null);

    setTimeout(() => {
      setCurrentActiveLesson(lesson);
    }, 1000);
  }, []);

  const getModules = useCallback(async () => {
    setLoadingVisible(true);

    try {
      const response = await api.get("/classroom/lessons");

      setClassModules(response.data);

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
      setTotalCompletedLessons(completed);
      if (current_lesson) {
        setCurrentActiveLesson(current_lesson);
      } else {
        setCurrentActiveLesson(response.data[0].lessons[0]);
      }
      setLoadingVisible(false);
    } catch (err) {
      setLoadingVisible(false);
    }
  }, [setLoadingVisible]);

  const completeLesson = useCallback(
    async (lesson_id: string) => {
      try {
        await api.post(`/classroom/lesson/complete/${lesson_id}`);

        addToast({
          title: "Successfully updated",
          type: "success",
        });

        getModules();
      } catch (err) {
        addToast({
          title: "There was an error updating the lesson",
          type: "error",
        });
      }
    },
    [addToast, getModules]
  );

  useEffect(() => {
    const route = location.pathname.split("/");

    if (route[2] === "home" || route[2] === "classroom") {
      getModules();
    }
  }, [getModules, location]);

  return (
    <ClassRoomContext.Provider
      value={{
        currentActiveLesson,
        totalCompletedLessons,
        totalLessons,
        classModules,
        setCurrentActiveLesson: updateCurrentLesson,
        completeLesson,
      }}
    >
      {children}
    </ClassRoomContext.Provider>
  );
};

export function useClassRoom(): ClassRoomContextData {
  const context = useContext(ClassRoomContext);

  if (!context) {
    throw new Error("useClassRoom must be used within a ClassRoomProvider");
  }

  return context;
}
