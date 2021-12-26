import React, {useEffect, useRef, useState} from 'react';
import {Meter} from "grommet";

function SummMeter() {
    const [value, setValue] = useState(299);

    const timer = useRef();

    clearTimeout(timer.current);

    timer.current = setTimeout(() => {
        // setValue(value > 0 ? value - 1 : 299);
        setValue(value - 1);
    }, 1000);

    useEffect(() => () => {
        clearTimeout(timer.current);
    }, [],);

    return (<Meter type={"bar"} max={300}
                   values={[{
                       value,
                       color: value > 120 ? 'status-ok' : value > 60 ? 'status-warning' : 'status-error'
                   }]}/>);
}

export default SummMeter;