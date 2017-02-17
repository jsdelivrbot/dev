import React from 'react';

const FlightListItem = ({ onClickProp, airline, flightNumber, flightFrom, flightTo, departureTime, arrivalTime, status }) => {

	function onFlightClick(id) {
		onClickProp(id);
	}
	
    return (

       <tr onClick={onFlightClick.bind(this, {flightNumber})}>
         <td>{flightNumber}</td>
         <td>{flightFrom}</td>
         <td>{flightTo}</td>
         <td>{departureTime}</td>
         <td>{arrivalTime}</td>
         <td>{status}</td>
       </tr>

    );
};

export default FlightListItem;