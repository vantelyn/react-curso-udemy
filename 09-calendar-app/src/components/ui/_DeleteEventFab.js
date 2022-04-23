
import { actions, useDispatch } from "../../context";

export const DeleteEventFab = () => {

    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch( actions.eventDeleted() );
    }

    return (
        <button
            className="btn btn-danger fab-danger"
            onClick={ handleDelete }
        >
            <i className="fas fa-trash" />
            <span> Borrar evento</span>
        </button>
    )
}
