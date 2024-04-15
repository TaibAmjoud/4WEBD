import React from "react";
import { EVENTS } from "../events";
import { Events } from "./events";
import "./event.css";
import axios from 'axios';

export const Eventlist = () => {
  // const [eventDetails, setEventDetails] = useState([]); // État pour stocker les détails des événements

  // useEffect(() => {
  //   // Récupérer les détails des événements depuis l'API
  //   axios.get('https://api.com/events')
  //     .then(response => {
  //       setEventDetails(response.data); // Mettre à jour l'état avec les détails des événements
  //     })
  //     .catch(error => {
  //       console.error('Erreur lors de la récupération des détails des événements :', error);
  //     });
  // }, []); // exécuter cet effet une seule fois lors du montage du composant

  return (
    <div>
      <div className="eventTitle">
        <h1>Events in your region</h1>
      </div>

      {/* <div className="events">
        {eventDetails.map((event) => (
          <Events key={event.id} data={event} />
        ))}
      </div> */}

      <div className="events">
        {EVENTS.map((event) => (
          <Events data={event} />
        ))}
      </div>
    </div>
  );
};