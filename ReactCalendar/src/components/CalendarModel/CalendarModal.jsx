import dayjs from "dayjs";
import { useState } from 'react';
import Modal from 'react-modal';
import './CalendarModal.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


//import Select from '../SelectHour/SelectHour'

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      
    },
  };
  
  

  Modal.setAppElement('#root');

 const CalendarModal = () => {

    const closeModal = () => {
        console.log('cerrando modal');
        setIsOpen(false);
    }

    const [isOpen, setIsOpen] = useState(true);

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


  return (
    <Modal 
        isOpen = {isOpen}
        onRequestClose={closeModal}
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
            onChange={date => setFormValues({ ...formValues, start: dayjs(date).format() })}
            dateFormat="MM/dd/yyyy h:mm aa"
        />
    </div>

    <hr />
    <div className="form-group mb-2">
        <label>Hora final</label>
        <DatePicker
            className="form-control"
            selected={formValues.start && dayjs(formValues.start).isValid() ? dayjs(formValues.start).toDate() : new Date()}
            onChange={date => setFormValues({ ...formValues, start: dayjs(date).format() })}
            dateFormat="MM/dd/yyyy h:mm aa"
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

