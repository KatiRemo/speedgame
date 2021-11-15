import React from 'react';

const Circle = (props) => {
        return (
            <div style={{ backgroundColor: props.color}}
            className="circle">
                <p>{props.id}</p>
               </div> 
       );
};

export default Circle;