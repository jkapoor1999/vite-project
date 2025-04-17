import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { EventDetailsObj, headers } from "./Events";

async function getEventDetails(event_id: string): Promise<EventDetailsObj> {
  const res = await fetch(
    `https://wzwkkxypqxtjnxsesefk.supabase.co/rest/v1/events?event_id=eq.${event_id}`,
    { headers }
  );
  const obj = await res.json();
  console.log(obj);

  return obj[0];
}

const EventDetails = () => {
  const [eventDetails, setEventDetails] = useState<EventDetailsObj>();

  const { event_id } = useParams();

  useEffect(() => {
    if (event_id) {
      // Check if event_id is not undefined
      getEventDetails(event_id).then(setEventDetails);
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
