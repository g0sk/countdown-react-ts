import {useState, useEffect } from 'react';

const countdownDate = new Date('2021-03-15T00:00:00');

export const Countdown = () => {
    interface countdown {
            days: number,
            hours: number,
            minutes: number,
            seconds: number,
    }
    const calcTimeLeft = (): countdown => {
        let diff = +new Date(countdownDate) - +new Date();
        let timeLeft: countdown = { days: 0, hours: 0, minutes: 0, seconds: 0};

        if(diff > 0){
            timeLeft = {
                days: Math.floor(diff / (1000 * 60 * 60 * 24)),
                hours: Math.floor((diff /(1000 * 60 * 60 )) % 24),
                minutes: Math.floor((diff / 1000 / 60 ) % 60),
                seconds: Math.floor((diff/1000) % 60),
            };
        }
        return timeLeft;
    }

    const [timeLeft, setTimeLeft] = useState<countdown>(calcTimeLeft());

    useEffect( ()=> {
        const delay = setTimeout(()=> {
            setTimeLeft(calcTimeLeft());
        }, 1000);
        return () => window.clearTimeout(delay);
    });
    const title: string = 'Tiempo para verte';
    const time: string = timeLeft.days + ' días ' + timeLeft.hours + ' horas ' + timeLeft.minutes + ' minutes ' + timeLeft.seconds + ' seconds';
    return (
        <div className='countdown-container'>
            <div className='title'>
                    <h1>{title}</h1>
                </div>
            <div className='card'>
                 <div className='timeLeft'>
                     <h2>{time}</h2>
                 </div>
            </div>
        </div>
    );
}