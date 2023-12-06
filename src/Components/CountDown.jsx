import { useEffect, useState } from "react";


const CountDown = () => {
    const calculateTimeLeft = () => {
        const difference = +new Date("2024-1-07") - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const { days, hours, minutes, seconds } = timeLeft;
    return (
        <div className="grid grid-flow-col gap-5 text-center auto-cols-max font-Poppins text-myColor">
            <div className="flex flex-col p-2 rounded-box">
                <span className="countdown font-mono text-4xl">
                    <span style={{ "--value": days }}></span>
                </span>
                Days
            </div>
            <div className="flex flex-col p-2 rounded-box">
                <span className="countdown font-mono text-4xl">
                    <span style={{ "--value": hours }}></span>
                </span>
                Hours
            </div>
            <div className="flex flex-col p-2 rounded-box">
                <span className="countdown font-mono text-4xl">
                    <span style={{ "--value": minutes }}></span>
                </span>
                Min
            </div>
            <div className="flex flex-col p-2 rounded-box">
                <span className="countdown font-mono text-4xl">
                    <span style={{ "--value": seconds }}></span>
                </span>
                Sec
            </div>
        </div>
    );
};

export default CountDown;