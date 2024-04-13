import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import dayjs from "dayjs";
import NavBar from "./components/NavBar/NavBar";
import CalendarModal from "./components/CalendarModel/CalendarModal";
import FLoatButton from "./components/FloatinButton/FloatingButton.jsx";
import { mockData } from "../../Mock/Mock.js";

function App() {
  const localizer = dayjsLocalizer(dayjs);
  localizer.dayHeaderFormat = "ddd"; // Show only day of week abbreviation

  const [events, setEvents] = useState([]);
  const [personId, setPersonId] = useState("");

  // useEffect(() => {
  //   const dayOfWeekToDate = {
  //     'Monday': '2024-03-25',
  //     'Tuesday': '2024-03-26',
  //     'Wednesday': '2024-03-27',
  //     'Thursday': '2024-03-28',
  //     'Friday': '2024-03-29',
  //     'Saturday': '2024-03-30',
  //   };

  //   const fetchEvents = async () => {
  //     try {
  //       const response = await axios.get('https://tu-api.com/eventos');
  //       const data = response.data;

  //       const fetchedEvents = data.map(event => {
  //         const fecha = dayOfWeekToDate[event.dayOfWeekState];

  //         const EventStart = dayjs(fecha + 'T' + event.start + ':00').toDate();
  //         const EventEnd = dayjs(fecha + 'T' + event.end + ':00').toDate();

  //         return {
  //           title: event.title,
  //           start: EventStart,
  //           end: EventEnd,
  //           lugar: event.lugar,
  //         };
  //       });

  //       console.log(fetchedEvents);
  //       setEvents(fetchedEvents); // Add this line to set the fetched events
  //     } catch (error) {
  //       console.error('Error fetching events', error);
  //     }
  //   };

  //   fetchEvents();
  // }, []);

  useEffect(() => {
    console.log("Fetching data for person ID: ", personId); // consolelog terror de debuggeo de senior

    //objeto que relaciona los dias a las fechas especificas
    const dayOfWeekToDate = {
      Monday: "2024-03-25",
      Tuesday: "2024-03-26",
      Wednesday: "2024-03-27",
      Thursday: "2024-03-28",
      Friday: "2024-03-29",
      Saturday: "2024-03-30",
    };

    //Filtra los eventos del 'mockData' para obtener los que coincidan con el input del label
    // con el ID de la persona y transformamos los eventos en data :) 
    const filteredEvents = mockData.filter(
      (event) =>
        event.personId ===
        Number(personId)).map((event) => {

          //utilizamos dayOfWeekToDate para obtener la fecha 
          const date = dayOfWeekToDate[event.dayOfWeekState];
          const start = dayjs(`${date}T${event.start}:00`).toDate();
          const end = dayjs(`${date}T${event.end}:00`).toDate();

          
          console.log(date)
          console.log(start)
          console.log(end)
          /*Retornamos un nuevo objeto resultante del evento con las propiedades transformadas
          a objeto tipo Date y conservando las demas propiedades como lo son lugar, titulo y mamada y cosa rara*/
          return {
            ...event,
            start: start,
            end: end,
            title: event.title,
            lugar: event.lugar,
          };
        }
    );

    //Debug miedo terror de senior parte 2
    console.log("Eventos Filtrados: ", filteredEvents);

    //Actualizamos el estado Event con los nuevos datos adquiridos de la busqueda
    setEvents([...filteredEvents]);

  }, [personId]);20


  //Settea las fechas limites del calendario para pasarlas como prop (calendarLimit.(lo que queramos obtener))
  // const calendarLimit = {
  //   min: dayjs("22-02-07T06:00:00").toDate(),
  //   max: dayjs("2022-02-13T22:30:00").toDate(),
  //   current: dayjs("2024-03-24").toDate(),
  // };

  const EventComponent = ({ event }) => (
    <div>
      <strong>{event.title}</strong>
      <p>{event.lugar}</p>
    </div>
  );

  return (
    <div className="general__container">

      {/* Pasamos el setPersonId actualizado del use effect */}
      <NavBar onSearchIdChange={setPersonId} />

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
          components={{
            event: EventComponent,
          }}
        />
      </div>
      <FLoatButton />

      <CalendarModal />
    </div>
  );
}
export default App;
