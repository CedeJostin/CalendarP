import "./App.css";
import  { useState, useEffect } from 'react';
import axios from 'axios';
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import dayjs from "dayjs";
import NavBar from "./components/NavBar/NavBar";
import { AiFillHome } from "react-icons/ai";
import { MdEditCalendar } from "react-icons/md";
import { BsCalendar2X } from "react-icons/bs";
import CalendarModal from "./components/CalendarModel/CalendarModal";
import { horarios } from '../../Mock/Mock.js';
import FLoatButton from './components/FloatinButton/FloatingButton.jsx'

function App() {
  const localizer = dayjsLocalizer(dayjs);
  localizer.dayHeaderFormat = "ddd"; // Show only day of week abbreviation
  

  const [events, setEvents] = useState([]);

  //  useEffect(() => {
  //    axios.get('https://660d7f6f6ddfa2943b3490bb.mockapi.io/v1/profesores/id/disponibilidad/Disponibilidad')
  //      .then(response => {
  //       // Aquí debes transformar los datos recibidos al formato que necesita el calendario
  //       const newEvents = response.data.map(event => ({
  //         start: dayjs.parse(event.start), // Convierte la fecha de la API
  //         end: dayjs.parse(event.end), // Convierte la fecha de la API
  //         title: event.title,
  //     }));
  
  //        setEvents(newEvents);
  //        console.log(newEvents);
  //      })
  //    .catch(error => console.error('Hubo un error!', error));
  //  }, []);


  

  useEffect(() => {
    const horariosMapeados = horarios.map(event => {
      const start = dayjs(event.start);
      const end = dayjs(event.end);
  
      if (!start.isValid() || !end.isValid()) {
        console.error('Fecha de inicio o fin no válida:', event);
        return null;
      }
  
      return {
        start: start.toDate(),
        end: end.toDate(),
        title: event.title,
      };
    }).filter(Boolean); // Filtra los eventos nulos
  
    console.log(horariosMapeados)
    setEvents(horariosMapeados);
  }, []);

  return (
    <div className="general__container">
      <NavBar />

      <div className="Contenedor">

        <Calendar
          className="Calendar"
          localizer={localizer}
          views={["month", "week", "day"]}
          defaultView="week"
          toolbar={false}
          events={events}
          drilldownView={false}
          onNavigate={() => null}
          min={dayjs("2022-02-07T06:00:00").toDate()}
          max={dayjs("2022-02-13T22:30:00").toDate()}
          date={dayjs("2024-03-24").toDate()}
          formats={{
            dayFormat: "ddd",
          }}
        />
      </div>
        <FLoatButton/>

      <CalendarModal />
    </div>
  );
}
export default App;
