import _ from 'lodash';
import React from 'react';
//this is the chart module. Have to import a few things for it
//SparklinesReferenceLine gives you an average temperature line indicator
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

//helper function to calculate average
function average(data) {
    return _.round(_.sum(data)/data.length);
}

export default (props) => {
    return (
            <div>
                <Sparklines height={120} width={180} data={props.data}>
                    <SparklinesLine color={props.color} />
                    <SparklinesReferenceLine type="avg" />
                </Sparklines>
                <div>{average(props.data)} {props.units}</div>
            </div>
        );
}