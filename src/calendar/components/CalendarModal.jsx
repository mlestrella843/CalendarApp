import React, { useMemo, useState } from 'react';
import { addHours, differenceInSeconds } from 'date-fns';
import Modal from 'react-modal';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

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

const CalendarModal = () => {

    const [isOpen, setIsOpen] = useState(true);

    const [formSubmitted, setFormSubmitted] = useState(false);

    const [formValues, setFormValues] = useState({
        title: 'Maria Luisa',
        notes: 'Probando el modal',
        start: new Date(),
        end: addHours( new Date(), 2 ),
    });

   const titleClass = useMemo(() => {
        if( !formSubmitted ) return '';

        return ( formValues.title.length > 0 )
            ? 'is-valid'
            : 'is-invalid';

    }, [ formValues.title, formSubmitted ])

    const onInputChange = ( {target} ) => {
        setFormValues({
            ...formValues,
            [target.name]:target.value
        })
    }

    const onDateChange = ( event, changing ) => {
        setFormValues({
            ...formValues,
            [changing]:event
        })
    }

    const onCloseModal = () => {
        console.log('Cerrando Modal');
        setIsOpen(false);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        setFormSubmitted(true);

        const difference = differenceInSeconds( formValues.end, formValues.start);
        //console.log({ difference });
        if( isNaN(difference) || difference <= 0 ) {
            Swal.fire('Dates wrong', 'Please enter correct dates', 'error' );
            return;
        }
        if( formValues.title.length <= 0 ) return;
        console.log( formValues );
    }

  return (
    <Modal
        isOpen={ isOpen }
        onRequestClose={ onCloseModal }
        style={ customStyles }
        className="modal"
        overlayClassName="modal-fondo"
        closeTimeoutMS={ 200 }
    >
        <h1> New Event </h1>
<hr />
<form className="container" onSubmit={ onSubmit }>
    <div className="form-group mb-2">
        <strong>Start date and time</strong>
        <br />
        <DatePicker 
            className="form-control"
            selected={ formValues.start } 
            onChange={ (event) => onDateChange( event, 'start' ) } 
            dateFormat="Pp" 
            showTimeSelect
        />      
    </div>
    <div className="form-group mb-2">
        <strong>End date and time</strong>
        <br />
        <DatePicker 
            className="form-control"
            minDate={ formValues.start } 
            selected={ formValues.end } 
            onChange={ (event) => onDateChange( event, 'end' ) }
            dateFormat="Pp"
            showTimeSelect
        />
    </div>
    <hr />
    <div className="form-group mb-2">
        <strong>Title and notes</strong>
        <input 
            type="text" 
            className={`form-control ${ titleClass }`} 
            placeholder="Event title"
            name="title"
            autoComplete="off"
            value={ formValues.title } 
            onChange={ onInputChange }
        />
    </div>
    <div className="form-group mb-2">
    <small id="emailHelp" className="form-text text-muted">A short description</small>
        <textarea 
            type="text" 
            className="form-control"
            placeholder="Notes"
            rows="5"
            name="notes"
            value={ formValues.notes }
            onChange={ onInputChange }
        ></textarea>
        <small id="emailHelp" className="form-text text-muted">Additional information</small>
    </div>
    <button
        type="submit"
        className="btn btn-outline-primary btn-block"
    >
        <i className="far fa-save"></i>
        <span> Save</span>
    </button>
</form>
    </Modal>
  )
}

export default CalendarModal
