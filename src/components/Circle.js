import React from 'react';

const Circle = (props) => {
        return (
            // style={{ backgroundColor: props.color}}
            // {`circle ${props.color}`}
        <div className={`circle ${props.color}`}>{props.id}</div> 
        
       );
};

export default Circle;