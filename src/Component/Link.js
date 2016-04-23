import React from 'react';

var minou = {
    name: "Remiaou",
    firstName: "Aueliaou",
    competences: ['Sketch', 'HTML', 'JS']
};

export const Link = ({
    active,
    children,
    onClick
}) => {
    if (active) {
        return <span> {children} </span>
    }

    return (
        <a href="#"
           onClick={event => {
                event.preventDefault();
                onClick();
           }}>
            {children}
        </a>
    )
};


Link(
    {active: true, children: 'All'}
);
