import {useState, useEffect } from 'react';
import ProgressBar from '@ramonak/react-progress-bar';

const countdownDate = new Date('2021-03-15T00:00:00') as any;
const initialDate = new Date('2021-02-01T00:00:00') as any;

export const Countdown = () => {
    interface countdown {
            days: number,
            hours: number,
            minutes: number,
            seconds: number,
    }

    const calcProgress = (): any=> {
        let diffToday = +new Date() - +new Date(initialDate);
        let diff = +new Date(countdownDate) - +new Date();
        let progress = Math.floor((Math.abs(diffToday / diff)) * 100);
        return progress;
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
    const [progress, setProgress] = useState(0);
    const [timeLeft, setTimeLeft] = useState<countdown>(calcTimeLeft());

    useEffect( ()=> {
        const delay = setTimeout(()=> {
            setTimeLeft(calcTimeLeft());
            setProgress(calcProgress());
        }, 1000);
        return () => window.clearTimeout(delay);
    });
    const title: string = 'Tiempo para vernos';
    const time: string = timeLeft.days + ' días ' + timeLeft.hours + ' horas ' + timeLeft.minutes + ' minutos ' + timeLeft.seconds + ' segundos';
    return (
        <div className='countdown-container'>
            <div className='title'>
                    <h1>{title}</h1>
                </div>
            <div className='card'>
                 <div className='timeLeft'>
                    <h2 className="time">{time}</h2>
                 </div>
                 <div className="progressbar">
                     <ProgressBar completed={progress} bgcolor={"orange"} labelColor={"purple"} labelAlignment={"outside"} />
                 </div>
            </div>
        </div>
    );
}