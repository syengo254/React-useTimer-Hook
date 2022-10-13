import { useEffect, useRef, useState } from "react";

export function useTimer(startAt: number = 5){
    const [count, setCount] = useState(startAt as any);
    const ref = useRef(null as any);

    const startCount = () => {
        ref.current = setInterval(() => setCount((ocount: any) => ocount - 1), 1000);
    }

    const reset = () => {
        setCount(startAt);
        startCount();
    }

    useEffect(() => {
        startCount();

        return () => clearInterval(ref.current)
    }, [])

    useEffect(() => {
        if(count == 0){
            clearInterval(ref.current);
            setCount("Done");
        }
    }, [count]);

    return {count, reset}
}