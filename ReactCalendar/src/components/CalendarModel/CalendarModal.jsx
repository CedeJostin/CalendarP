import dayjs from "dayjs";
import { useState } from 'react';
import Modal from 'react-modal';
import './CalendarModal.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
//import Float from '../FloatinButton/FloatingButton';




const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      
    },
  };
  
  

  Modal.setAppElement('#root');

 const CalendarModal = ({ open, handleOpen, handleClose }) => {

   

   

    const [ formValues, setFormValues ] = useState({
        title: '',
        lugar: '',
        start: dayjs().format(), // Fecha y hora actual en formato ISO 8601
        end: dayjs().format(), // Fecha y hora actual en formato ISO 8601
    });

    const handleInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    }

    const onDateChange = (event, changing) => {
        setFormValues({
            ...formValues,
            [changing]: event
        });
    }

    

  return (
    <Modal 
        isOpen = {open}
       onRequestClose={handleClose}
        style={ customStyles }
        className="modal"
        overlayClassName='modal-fondo'
        
    >


<h1> Nuevo evento </h1>
<hr />
<form className="container">

    <div className="form-group mb-2">
        <label>Añadir Titulo</label>
        <input 
        className="form-control" 
        placeholder="Titulo" 
        name="title"
        value={ formValues.title}
        onChange={handleInputChange}
        />
    </div>

    <div className="form-group mb-2">
        <label>Hora inicial</label>
        <DatePicker
            className="form-control"
            selected={formValues.start && dayjs(formValues.start).isValid() ? dayjs(formValues.start).toDate() : new Date()}
            onChange={ (event) => onDateChange(event, 'start')}
            showTimeSelect
            timeIntervals={15}
            timeCaption="Time"
            dateFormat="MM/dd/yyyy h:mm aa"
            minDate={dayjs('2024-03-24').startOf('week').toDate()}
            maxDate={dayjs('2024-03-24').endOf('week').toDate()}
            openToDate={dayjs('2024-03-24').toDate()}
            
        />
    </div>

    <hr />
    <div className="form-group mb-2">
        <label>Hora final</label>
        <DatePicker
            className="form-control"
            selected={formValues.end && dayjs(formValues.end).isValid() ? dayjs(formValues.end).toDate() : new Date()}
            onChange={ (event) => onDateChange(event, 'end')}
            showTimeSelect
            timeIntervals={15}
            timeCaption="Time"
            dateFormat="MM/dd/yyyy h:mm aa"
            minDate={dayjs('2024-03-24').startOf('week').toDate()}
            maxDate={dayjs('2024-03-24').endOf('week').toDate()}
            openToDate={dayjs('2024-03-24').toDate()}
            
        />
       
    </div>

    <div className="form-group mb-2">
        <label>Lugar</label>
        <input 
            type="text" 
            className="form-control"
            placeholder=" Lugar"
            name="lugar"
            autoComplete="off"
            value={ formValues.lugar }
            onChange={ handleInputChange }
        />
       
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
export default CalendarModal;

