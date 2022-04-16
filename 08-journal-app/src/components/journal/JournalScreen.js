// import { NothingSelected } from "./NothingSelected"
import { useSelector } from "react-redux";
import { NoteScreen } from "../notes/NoteScreen"
import { NothingSelected } from "./NothingSelected";
import { Sidebar } from "./Sidebar"

export const JournalScreen = () => {

  const { active } = useSelector( store => store.notes );

  return (
    <div className="journal__main-content animate__animated animate__fadeIn animate__faster">

        <Sidebar />

        <main>
          {
            ( active )
              ? ( <NoteScreen /> )
              : ( <NothingSelected /> )
          }
        </main>

    </div>
  )
}
