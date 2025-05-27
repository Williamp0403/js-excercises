import { Fade } from "@mui/material";
import { levels } from "../const/levels";
import { useAuth } from "../context/AuthContext";
import { LockedLevel } from "../components/LockedLevel";
import { ModalLevel } from "../components/Modal";
import { Loading } from "../components/Loading"
import { LevelCompleted } from "../components/LevelCompleted";
import { useEffect } from "react";
import { UseQuestion } from "../hooks/useQuestion";

export function GamePage() {
  const { user } = useAuth()
  const { getInfoUser, loading } = UseQuestion()

  useEffect(() => {
    getInfoUser()
  }, [])

  return (
    <Fade in={true} timeout={700}>
      <main className="flex flex-col items-center h-auto min-h-[calc(100vh-107px)] gap-7 py-5">
        {
          loading ? <Loading/> :
          levels.map((levelData, index) => {
            return (
              levelData.level < user.level ? <LevelCompleted key={levelData.level}/> :
              levelData.level == user.level ? <ModalLevel key={levelData.level} data={levelData}/>
              : <LockedLevel key={levelData.level}/>
            )
          }
        )}
      </main>
    </Fade>
  );
}
