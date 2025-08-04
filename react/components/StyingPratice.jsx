import { useEffect, useState } from "react";
import './StylingPratice.css'

function StylingPratice() {
  const [timeOfDay, setTimeOfDay] = useState("");
  const [meridiem, setMeridiem] = useState("AM")

  const event = new Date();
  event.setHours(21);

  const hours = event.getHours();

  useEffect(() => {
    try {
      if (hours >= 0 && hours <= 12) {
        setTimeOfDay("morning");
        setMeridiem("AM")
        
      } else if (hours >= 12 && hours <= 18) {
        setTimeOfDay("afternoon");
        setMeridiem("PM")
      } else if (hours >= 18 && hours <= 24) {
        setTimeOfDay("evening");
        setMeridiem("PM")
      } else {
        throw new error("Error found: ");
      }
    } catch (error) {
      console.error(error);
    }
  }, []);


  return (
    <h1 className={timeOfDay} id="h1">
      Good {timeOfDay}, it is currently {hours}h {meridiem}
    </h1>
  );
}

export default StylingPratice;
