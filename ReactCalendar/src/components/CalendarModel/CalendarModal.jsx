
import { useState } from 'react';
import Modal from 'react-modal';
import './CalendarModal.css';
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
        <input className="form-control" placeholder="Titulo" />
    </div>

    <div className="form-group mb-2">
        <label>Hora inicial</label>
        <input className="form-control" placeholder="Hora Inicial" />
    </div>

    <hr />
    <div className="form-group mb-2">
        <label>Hora final</label>
        <input 
            type="text" 
            className="form-control"
            placeholder="Hotal Final"
            name="title"
            autoComplete="off"
        />
       
    </div>

    <div className="form-group mb-2">
        <label>Lugar</label>
        <input 
            type="text" 
            className="form-control"
            placeholder=" Lugar"
            name="title"
            autoComplete="off"
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

