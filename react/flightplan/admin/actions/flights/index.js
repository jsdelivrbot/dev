import _ from 'lodash';
import config from '../../config/';
import * as actionTypes from '../types';
import $ from 'jquery';
import * as flightUtils from '../../lib/flightUtils';

//placeholder data
import departuresData from '../../data/departuresPlaceholder';
import arrivalsData from '../../data/arrivalsPlaceholder';


export function fetchFlightsPlaceholder(flightType) {

    let dataCopy

    if(flightType === 'departures') {
        dataCopy = _.clone(departuresData);
    } 
    else if(flightType === 'arrivals') {
        dataCopy = _.clone(arrivalsData);
    }

    return {
        type: actionTypes.FETCH_FLIGHTS,
        payload: dataCopy
    }
}

export function changeFlightType(id, isSet) {
    return {
        type: actionTypes.FLIGHT_TYPE,
        idPayload: id,
        isSetPayload: isSet
    }
}

export function getGMTtime() {

    return function(dispatch) {

        //will get to this once a feed service gets back to me :)

        // $.getJSON("http://www.timeapi.org/utc/now.json?callback=?",function(json){

        //       dispatch({
        //           type: actionTypes.GMT_TIME,
        //           payload: json.dateString
        //       });

        // });
    }

}

export function changeSearchValue(payload) {
    return {
        type: actionTypes.SEARCH_VALUE,
        payload: payload
    }
}

export function fetchFlights(flightType, flightNumber) {

    //airline type
    const carrier = 'AA';

    //airport (New York)
    const airport = 'JFK';

    const base_uri = "https://api.flightstats.com/flex/flightstatus/rest/";

    let fs_url = '';

    //departures or arrivals
    let type = (flightType === 'departures')? 'dep' : 'arr';

    //get withing the last hour (true);
    let arrivalTime = '';

    let queryData = {};

    if(flightNumber) {
        arrivalTime = flightUtils.dateToday(false);
        fs_url = `${base_uri}v2/jsonp/flight/status/${carrier}/${flightNumber}/${type}/${arrivalTime}?appId=${config.API_ID}&appKey=${config.API_KEY}`;
        queryData = {utc: false, numHours: 5, maxFlights: 5, airport: airport, carrier: carrier};
    }
    else {
        arrivalTime = flightUtils.dateToday(true);
        fs_url = `${base_uri}v2/jsonp/airport/status/${airport}/${type}/${arrivalTime}?appId=${config.API_ID}&appKey=${config.API_KEY}`;
        queryData = {utc: false, numHours: 5, maxFlights: 5, airport: airport}
    }

    return function(dispatch) {
        $.ajax({
            type: 'GET',
            url: fs_url ,
            data: queryData,
            success : function(result) {

                //if error
                if (result.error) {
                    dispatch(fetchFlightsError('there was an error fetching flight data: ', + result.error));
                    return;
                }

                //console.log("result: ", result);


                //id, flightNumber, flightFrom, flightTo, departureTime, arrivalTime, status
                //-------------------------------------------------------------
                
                let flightData = result.flightStatuses.map((item) => {

                    return {
                        id: item.flightId,
                        flightNumber: item.flightNumber,
                        arrivalTime: flightUtils.convertISO8601toDate(item.arrivalDate.dateLocal),
                        departureTime: flightUtils.convertISO8601toDate(item.departureDate.dateLocal),
                        status: flightUtils.getStatus(item.status),
                        flightFrom: item.departureAirportFsCode,
                        flightTo: item.arrivalAirportFsCode
                    };
                });

                dispatch({
                    type: actionTypes.FETCH_FLIGHTS,
                    payload: flightData
                });

            },
            error: function(data, text) { alert('Failed to fetch flight: ' + data); },
            dataType: 'jsonp',
            jsonp: 'callback',
            xhrFields: { withCredentials: true }
            });
    }
}

export function fetchFlightsError(error) {
    return {
        type: actionTypes.FETCH_FLIGHTS_ERROR,
        payload: error
    }
}
