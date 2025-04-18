import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { EventDetailsObj, headers } from "./Events";
import axios from "axios";

const EventDetails = () => {
  const [eventDetails, setEventDetails] = useState<EventDetailsObj>();

  const { event_id } = useParams();

  useEffect(() => {
    if (event_id) {
      // Check if event_id is not undefined
      async function getEventDetails(event_id: string) {
        const res = await axios.get(
          `${import.meta.env.VITE_BASE_URI}/events?event_id=eq.${event_id}`,
          { headers: headers }
        );
        setEventDetails(res.data[0]);
      }

      getEventDetails(event_id);
    }
  }, [event_id]);
  return (
    <>
      {eventDetails ? (
        <div>
          <h1>{eventDetails.name}</h1>
          <h1>{eventDetails.description}</h1>
          <h1>{eventDetails.start_time}</h1>
          <h1>{eventDetails.end_time}</h1>
          <h1>{eventDetails.created_at}</h1>
          <h1>{eventDetails.updated_at}</h1>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

export default EventDetails;
