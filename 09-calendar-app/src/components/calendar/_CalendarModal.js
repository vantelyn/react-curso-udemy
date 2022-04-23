import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { actions, useDispatch } from '../../context';

import Modal from 'react-modal';
import DateTimePicker from 'react-datetime-picker'
import moment from 'moment';
import Swal from 'sweetalert2';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

const now = moment().minutes(0).seconds(0).add(1, 'hours');
const nowPlus = now.clone().add(1, 'hours');

const initEvent = {
    title: '',
    notes: '',
    start: now.toDate(),
    end: nowPlus.toDate()
}

export const CalendarModal = () => {

    const dispatch = useDispatch();

    const { modalOpen } = useSelector( state => state.ui );
    const { activeEvent } = useSelector( state => state.calendar );

    const [dateStart, setdateStart] = useState(now.toDate())
    const [dateEnd, setdateEnd] = useState(nowPlus.toDate())
    const [titleValid, setTitleValid] = useState(true);

    const [formEvent, setFormEvent] = useState( initEvent );

    const { title, notes, start, end } = formEvent;

    useEffect(() => {
        if(activeEvent){
            setFormEvent( activeEvent )
        } else {
            setFormEvent( initEvent )
        }
    }, [activeEvent, setFormEvent])
    

    const handleInputChange = ({ target }) => {
        setFormEvent({
            ...formEvent,
            [target.name]: target.value
        });
    }

    const closeModal = () => {
        dispatch( actions.uiCloseModal() );
        dispatch( actions.eventClearActive() )
        setFormEvent( initEvent );
    }

    const handleStartDateChange = (e) => {
        setdateStart(e);
        setFormEvent((values) => ({
            ...values,
            start: e
        }))
    }

    const handleEndDateChange = (e) => {
        setdateEnd(e);
        setFormEvent((values) => ({
            ...values,
            end: e
        }))
    }

    const handleSubmitForm = (e) => {
        const momentStart = moment( start );
        const momentEnd = moment( end );
        e.preventDefault();

        if(momentStart.isSameOrAfter(momentEnd)){
            return Swal.fire('Error', 'Fecha fin debe ser mayor', 'error');
        }
        if (title.trim().length < 2) {
            return setTitleValid( false );
        }

        if(activeEvent){
            dispatch( actions.eventUpdated( formEvent ) )
        } else {
            dispatch( actions.eventAddedNew({
                ...formEvent,
                id: new Date().getTime(),
                user: {
                    _id: '123',
                    name: 'Fernando'
                }
            }))
        }


        setTitleValid(true);
        closeModal();
    }

    return (
        <Modal
            className="modal"
            overlayClassName="modal-fondo"
            isOpen={ modalOpen }
            closeTimeoutMS={200}
            // onAfterOpen={afterOpenModal}
            onRequestClose={ closeModal }
            style={customStyles}
        >
            <h3> {(activeEvent)?'Editar':'Nuevo'} evento </h3>
            <hr />
            <form
                className="container"
                onSubmit={ handleSubmitForm }
            >

                <div className="form-group">
                    <label>Fecha y hora inicio</label>
                    <DateTimePicker
                        onChange={handleStartDateChange}
                        value={dateStart}
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label>Fecha y hora fin</label>
                    <DateTimePicker
                        onChange={handleEndDateChange}
                        value={dateEnd}
                        minDate={dateStart}
                        className="form-control"
                    />
                </div>

                <hr />
                <div className="form-group">
                    <label>Titulo y notas</label>
                    <input
                        type="text"
                        className={`form-control ${!titleValid&&'is-invalid'}`}
                        placeholder="Título del evento"
                        name="title"
                        autoComplete="off"
                        value={title}
                        onChange={handleInputChange}
                    />
                    <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
                </div>

                <div className="form-group">
                    <textarea
                        type="text"
                        className="form-control"
                        placeholder="Notas"
                        rows="5"
                        name="notes"
                        value={notes}
                        onChange={handleInputChange}
                    ></textarea>
                    <small id="emailHelp" className="form-text text-muted">Información adicional</small>
                </div>

                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                >
                    <i className="far fa-save"></i>
                    <span> Guardar</span>
                </button>

            </form>
        </Modal>
    )
}
