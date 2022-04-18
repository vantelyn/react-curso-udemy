import { useDispatch } from "react-redux";
import { uiOpenModal } from "../../redux/actions/uiActions";

export const AddNewFab = () => {

    const dispatch = useDispatch();

    const handleClickNew = () => {
        dispatch( uiOpenModal() );
    }

    return (
        <button
            className="btn btn-primary fab"
            onClick={ handleClickNew }
        >
            <i className="fas fa-plus" />
        </button>
    )
}
