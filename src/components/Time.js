import React from 'react';

const Time = () => {
    const time = new Date();
    let hours = time.getHours;
    let timeOfDay;
    if(hours < 12) {
        timeOfDay = "Good morning";
    }
    else if(hours >=12 && hours <17) {
        timeOfDay = "Good Afternoon";
    }
    else {
        timeOfDay = "Good Evening";
    }
    return (
        <div>
            <h1>{timeOfDay}</h1>
        </div>

    );
}
export default Time;