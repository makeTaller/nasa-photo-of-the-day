import React, {useState} from "react";
import ReactCalendar from "react-calendar";

function Calendar(props){
    /* const [date, setDate] = useState(new Date()); */


  return <div>
        My Calendar!
    <div>
    <Calendar onChange={props.onChange} value={props.selectedDate} />
</div>
    </div>
};

export default ReactCalendar;
