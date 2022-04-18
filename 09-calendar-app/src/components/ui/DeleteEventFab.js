import { useDispatch } from "react-redux";
import { eventDeleted } from "../../redux/actions/eventsActions";

export const DeleteEventFab = () => {

    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch( eventDeleted() );
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
