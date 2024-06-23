import { useEffect, useState } from "react";

export default function LoadingPage() {
    const [time, setTime] = useState(0);
    useEffect(() => {
        setInterval(() => {
            setTime((time) => {
                return time + 1;
            });
        }, 1000);
    }, []);
    return (
        <div className="flex flex-col justify-center items-center w-screen h-screen pb-24 font-han">
            <svg
                className="w-14 mb-6 animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
            >
                <path
                    fill="currentColor"
                    d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"
                />
            </svg>
            <p className="mb-4 px-10 text-5xl text-center text-point max-lg:text-3xl">
                실시간 데이터를 불러오는 중입니다.
            </p>
            <span className="text-xl">{time}초</span>
        </div>
    );
}
