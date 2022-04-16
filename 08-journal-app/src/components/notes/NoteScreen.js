import { useForm } from "@vantelyn/custom-hooks";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activeNote, startDeleting } from "../../actions/notes";
import { NotesAppBar } from "./NotesAppBar"

export const NoteScreen = () => {

  const dispatch = useDispatch();

  const { active: note } = useSelector(store => store.notes);
  const [ formValues, handleInputChange, reset] = useForm( note );

  const { title, body, id} = formValues;

  useEffect(() => {
    if( id !== note.id )
      reset( note );
  }, [id, note, reset])

  useEffect(() => {
    dispatch( activeNote(formValues.id, {...formValues}) );  
  }, [formValues, dispatch])
  
  const handleDelete = () => {
    dispatch( startDeleting( id ) );
  }

  return (
    <div className="notes__main-content">
      <NotesAppBar />

      <div className="notes__content">
        <input
          name="title"
          type="text"
          placeholder="Me pican las chichis"
          className="notes__title-input"
          value={title}
          onChange={handleInputChange}
        />
        <textarea
          name="body"
          placeholder="What happened today?"
          className="notes__textarea"
          value={body}
          onChange={handleInputChange}
        >
        </textarea>

        {
          (note.url)
          && (
            <div className="notes__image">
              <img
                src={note.url}
                alt="imagen"
              />
            </div>
          )
        }

      </div>

      <button
        className="btn btn-danger"
        onClick={ handleDelete }
      >
        Delete
      </button>

    </div>
  )
}
