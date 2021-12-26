import React, {useEffect, useRef, useState} from 'react';
import {Meter} from "grommet";

function SummMeter(props) {
    const [value, setValue] = useState(props.barValue);

    const timer = useRef();

    clearTimeout(timer.current);

    timer.current = setTimeout(() => {
        // setValue(value > 0 ? value - 1 : 299);
        setValue(value - 1);
    }, 1000);

    useEffect(() => () => {
        clearTimeout(timer.current);
    }, [],);

    return (<Meter type={"bar"} max={props.maxBarValue}
                   values={[{
                       value,
                       color: value > props.barBp1 ? 'status-ok' :
                           value > props.barBp2 ? 'status-warning' : 'status-error'
                   }]}/>);
}

export default SummMeter;