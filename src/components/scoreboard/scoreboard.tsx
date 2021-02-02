import { useState, useEffect, Fragment } from 'react';

const players: number = 2;

export const Scoreboard = () => {

    const [score, setScore] = useState({osk: 0, almu: 0});

    useEffect(() => {

    });

    return (
        <Fragment>
            <h1 className="score-title">Te queso</h1>
            <div>
                
            </div>
        </Fragment>
    );
}