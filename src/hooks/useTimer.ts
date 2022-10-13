import { useEffect, useRef, useState } from "react";

export function useTimer(){
    const [count, setCount] = useState(0 as any);
    const ref = useRef(null as any);

    const startCount = () => {
        ref.current = setInterval(() => setCount((ocount: any) => ocount + 1), 1000);
    }

    const reset = () => {
        setCount(0);
        startCount();
    }

    useEffect(() => {
        startCount();

        return () => clearInterval(ref.current)
    }, [])

    useEffect(() => {
        if(count == 5){
            clearInterval(ref.current);
            setCount("Done");
        }
    }, [count]);

    return {count, reset}
}