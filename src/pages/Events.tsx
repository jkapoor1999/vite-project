import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const headers = {
  "Content-Type": "application/json",
  Authorization: "JWT fefege...",
  apiKey: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind6d2treHlwcXh0am54c2VzZWZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM4NTA0MzgsImV4cCI6MjA1OTQyNjQzOH0.LyBJid5CSta13XHOBRwxzp85hlISwUD-VsvUynRfc3I`,
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

const Events = () => {
  const [eventList, setEventList] = useState<EventDetailsObj[]>([]);

  useEffect(() => {
    async function getEventList() {
      try {
        const res = await axios.get(
          `https://wzwkkxypqxtjnxsesefk.supabase.co/rest/v1/events`,
          { headers }
        );
        setEventList(res.data);
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
