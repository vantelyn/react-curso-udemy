import { useDispatch, useSelector } from "react-redux"
import { startLogout } from "../../actions/auth";
import { cleanNotesOnLogout, startNewNote } from "../../actions/notes";
import { JournalEntries } from "./JournalEntries"

export const Sidebar = () => {

  const dispatch = useDispatch();
  const { name } = useSelector(state => state.auth);

  const handleLogOut = () => {
    dispatch( startLogout() );
    dispatch( cleanNotesOnLogout() );
  }

  const handleAddNewEntry = () => {
    dispatch( startNewNote() );
  }

  return (
    <aside className="journal__sidebar">
        <div className="journal__sidebar-navbar">
          <h3 className="mt-5">
            <i className="far fa-moon"></i>
            <span> { name }</span>
          </h3>
          <button 
            className="btn"
            onClick={ handleLogOut }
          >
            Logout
          </button>
        </div>
        <div 
          className="journal__new-entry"
          onClick={ handleAddNewEntry }
        >
          <i className="far fa-calendar-plus fa-5x" />
          <p className="mt-5">
            New entry
          </p>
        </div>
        <JournalEntries />
    </aside>
  )
}
