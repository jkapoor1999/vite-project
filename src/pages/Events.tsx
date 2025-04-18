import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const headers = {
  "Content-Type": "application/json",
  Authorization: "JWT fefege...",
  apiKey: import.meta.env.VITE_API_KEY,
};

export interface EventDetailsObj {
  event_id: number;
  name: string;
  description: string;
  start_time: string;
  end_time: string;
  created_at: string;
  updated_at: string;
}

interface EventListObj {
  event_id: number;
  name: string;
}

const Events = () => {
  const [eventList, setEventList] = useState<EventListObj[]>([]);

  useEffect(() => {
    async function getEventList() {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URI}/events?select=event_id,name`, {
          headers,
        });
        setEventList(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getEventList();
  }, []);

  return (
    <>
      <div>
        {eventList.map((eventDetails) => {
          return (
            <Badge key={eventDetails.event_id}>
              <Link to={`/events/${eventDetails.event_id}`}>
                {" "}
                {eventDetails.name}
              </Link>
            </Badge>
          );
        })}
      </div>
    </>
  );
};

export default Events;
