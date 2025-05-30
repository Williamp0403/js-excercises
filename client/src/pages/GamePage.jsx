import { Fade } from "@mui/material";
import { levels } from "../const/levels";
import { useAuth } from "../context/AuthContext";
import { LockedLevel } from "../components/LockedLevel";
import { ModalLevel } from "../components/Modal";
import { Loading } from "../components/Loading";
import { LevelCompleted } from "../components/LevelCompleted";
import { useEffect, useRef } from "react";
import { useResponse } from "../context/ResponsesContext.jsx";

export function GamePage() {
  const { user } = useAuth();
  const { getInfoUser, loading } = useResponse();
  const modalLevelRef = useRef(null)

  useEffect(() => {
    getInfoUser();
  }, []);

  useEffect(() => {
    if (modalLevelRef.current) {
      const elementPosition = modalLevelRef.current.getBoundingClientRect().top + window.scrollY;
      const headerHeight = 120; 
      window.scrollTo({ top: elementPosition - headerHeight, behavior: "smooth" });
    }
  }, [loading]);

  return (
    <Fade in={true} timeout={700}>
      <main className="flex flex-col items-center h-auto min-h-[calc(100vh-107px)] gap-7 py-8">
        {loading ? (
          <Loading />
        ) : (
          levels.map((levelData) => {
            return levelData.level < user.level ? (
              <LevelCompleted key={levelData.level} />
            ) : levelData.level === user.level ? (
              <div key={levelData.level} ref={modalLevelRef}>
                <ModalLevel data={levelData} />
              </div>
            ) : (
              <LockedLevel key={levelData.level} />
            );
          })
        )}
      </main>
    </Fade>
  );
}
