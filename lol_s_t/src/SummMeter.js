import React, {useEffect, useRef, useState} from 'react';
import {Meter} from "grommet";

function SummMeter(props) {
    const [value, setValue] = useState(props.barValue);

    const timer = useRef();

    clearTimeout(timer.current);

    timer.current = setTimeout(() => {
        // setValue(value > 0 ? value - 1 : 299);
        // setValue(value - 1);
        setValue(value > 0 ? value - 1: props.summClicked); // If Value is less than 0 then Reset the Summoner
    }, 1000);

    useEffect(() => () => {
        clearTimeout(timer.current);
    }, [],);

    return (<Meter type={"bar"} max={props.maxBarValue} thickness={"small"} size={"small"}
                   values={[{
                       value,
                       color: value > props.barBp1 ? 'status-ok' :
                           value > props.barBp2 ? 'status-warning' : 'status-error'
                   }]}/>);
}

export default SummMeter;