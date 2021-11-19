import { useState, useEffect } from 'react';

function Clock() {
    const [date,setDate] = useState([]);

    function RefreshClock() {
        setDate(new Date());
    }

    useEffect(() => {
        const timerID = setInterval(RefreshClock, 1000)
        return function cleanup() {
            clearInterval(timerID);
        };
    },[])

    let d = date.toLocaleTimeString()

    return (
        <span>
           <p>{d}</p>
        </span>
    )
}

export default Clock;