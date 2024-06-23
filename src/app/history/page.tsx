"use client";
import Image from "next/image";
import { Card } from "@/components/card";
import { StuffHistoryProps, StuffProps } from "@/type";
import { useEffect, useState } from "react";
import Button from "@/components/button";

export default function History() {
    const [stuffHistory, setStuffHistory] = useState<null | StuffProps[]>(null);

    const resetStuffHistory = () => {
        localStorage.setItem("stuffHistory", JSON.stringify([]));
        setStuffHistory([]);
    };

    useEffect(() => {
        const storageStuffHistory = localStorage.getItem("stuffHistory");

        if (storageStuffHistory) {
            const test = JSON.parse(storageStuffHistory) as StuffHistoryProps;
            console.log(test);
            setStuffHistory(JSON.parse(storageStuffHistory));
        }
    }, []);

    if (!stuffHistory) return <div></div>;
    return (
        <div className="flex flex-col">
            <div>
                <Button
                    text="내역 초기화"
                    onClick={() => {
                        resetStuffHistory();
                    }}
                />
            </div>
            <ul className="grid grid-cols-4 gap-4 w-fit h-full overflow-auto">
                {stuffHistory.map((stuff: StuffProps, index: number) => {
                    return (
                        <li className="max-w-52" key={index}>
                            <Card>
                                <div className="flex flex-col gap-4 h-full">
                                    <Image
                                        src={stuff.src}
                                        alt={stuff.title}
                                        width={500}
                                        height={500}
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                    <div className="flex flex-col mt-auto">
                                        <div className="mb-2">
                                            <h3 className="text-lg font-bold">
                                                {stuff.title}
                                            </h3>
                                            <p className="text-sm">
                                                {stuff.summary}
                                            </p>
                                        </div>
                                    </div>
                                    <time
                                        className="block text-xs text-right"
                                        dateTime={stuff.emptyDate}
                                    >
                                        {stuff.emptyDate}
                                    </time>
                                </div>
                            </Card>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
