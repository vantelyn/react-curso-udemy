import { useSelector } from "react-redux";
import { AddNewFab } from "./_AddNewFab";
import { DeleteEventFab } from "./_DeleteEventFab";
import { Navbar } from "./_Navbar";

export const UiScreen = () => {

    const { activeEvent } = useSelector( state => state.calendar );

    return (
        <>
            <Navbar />
            <AddNewFab />
            {
                (activeEvent) && <DeleteEventFab />
            }
        </>
    )
}