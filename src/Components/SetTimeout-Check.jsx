import React, { useEffect } from "react";

const SetTimeoutCheck = () => {
    useEffect(() => {
        
        setTimeout(() => {
            console.log("setTimeout fired after 1s");
        },1000);
        for(let i=0; i<100000; i++)
        {
            console.log("Iteration: ", i);
            // Long computation to simulate delay
            // This will block setTimeout thread until all iteration is completed and only then setTimeout will execute irrespective of 1sec.
        }
    }, []);

    return <div>Check the console for setTimeout timing.</div>;
};

export default SetTimeoutCheck;