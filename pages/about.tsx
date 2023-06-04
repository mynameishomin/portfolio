import Image from "next/image";
import { useEffect, useState } from "react";
import {
    getNowDateString,
    notionInit,
    numberWithComma,
} from "@/utils/functions";

export default function Page04() {
    const [realInfo, setrealInfo] = useState<any>([]);
    const nowDate = new Date();
    useEffect(() => {
        (async () => {
            const notionData = await notionInit();

            interface IexpensesData {
                [index: string]: string;
            }
            const expensesData: IexpensesData = {};
            const totalExpenses = notionData.budget.results.reduce(
                (acc: Number, cur: any) => {
                    const amount = cur.properties.Amount.number;
                    let category = cur.properties.Category.select.name;

                    if (expensesData[category]) {
                        expensesData[category] += amount;
                    } else {
                        expensesData[category] = amount;
                    }
                    return (acc += amount);
                },
                0
            );
            const maxCategory = Object.keys(expensesData).reduce(
                (acc: any, cur: string) => {
                    if (acc.amount < expensesData[cur]) {
                        return { name: cur, amount: expensesData[cur] };
                    } else {
                        return acc;
                    }
                },
                { name: "", amount: 0 }
            );

            const bestReading = notionData.reading.results.reduce(
                (acc: any, cur: any) => {
                    if (cur.properties.Score.number > acc.score) {
                        return {
                            name: cur.properties.Name.title[0].plain_text,
                            author: cur.properties.Author.rich_text[0]
                                .plain_text,
                            score: cur.properties.Score.number,
                        };
                    } else {
                        return acc;
                    }
                },
                { name: "", author: "", score: 0 }
            );

            setrealInfo({
                totalExpenses,
                maxCategory,
                bestReading,
                readingList: notionData.reading.results,
            });
        })();
    }, []);
    return (
        <div className="grow font-han">
            <h2 className="text-point w-full mb-8 text-4xl">ABOUT</h2>
            <div className="flex mb-10 pb-8 border-b-2 border-point border-dashed max-lg:flex-col">
                <div className="mr-12">
                    <h3 className="mb-4 text-3xl">기본 정보</h3>
                    <Image
                        className="w-60 rounded-full max-lg:w-40 max-lg:mb-8"
                        src="/images/profile-photo-2.jpeg"
                        alt=""
                        width={400}
                        height={400}
                    />
                </div>
                <ul className="space-y-4 text-2xl text-point">
                    <li className="flex">
                        <h3 className="shrink-0 w-24 mr-2 border-r-2 border-point">
                            이름
                        </h3>
                        <span>정호민</span>
                    </li>
                    <li className="flex">
                        <h3 className="shrink-0 w-24 mr-2 border-r-2 border-point">
                            나이
                        </h3>
                        <span>26세[1998년생]</span>
                    </li>
                    <li className="flex">
                        <h3 className="shrink-0 w-24 mr-2 border-r-2 border-point">
                            학력
                        </h3>
                        <span>
                            안산공업고등학교[컴퓨터과] 졸업
                            <br />
                            <span className="text-xl">
                                *한국방송통신대학교[컴퓨터과학과] 재학중
                            </span>
                        </span>
                    </li>
                    <li className="flex">
                        <h3 className="shrink-0 w-24 mr-2 border-r-2 border-point">
                            경력
                        </h3>
                        <span>
                            1년 4개월
                            <br />
                            <span className="text-xl">*S-ON SYSTEM 재직중</span>
                        </span>
                    </li>
                    <li className="flex">
                        <h3 className="shrink-0 w-24 mr-2 border-r-2 border-point">
                            MBTI
                        </h3>
                        <span>ISFJ</span>
                    </li>
                    <li className="flex">
                        <h3 className="shrink-0 w-24 mr-2 border-r-2 border-point">
                            생활유형
                        </h3>
                        <span>미니멀리즘</span>
                    </li>
                </ul>
            </div>
            <div className="mb-10 pb-8 border-b-2 border-point border-dashed">
                <h3 className="mb-4 text-3xl">
                    {nowDate.getMonth() + 1}월 실시간 정보
                    <span className="text-base max-lg:block">
                        [{getNowDateString(nowDate)} 기준]
                    </span>
                </h3>
                <ul className="flex space-x-6 max-lg:flex-col max-lg:space-x-0 max-lg:space-y-4">
                    <li className="group relative w-full p-4 border-2 border-point text-center rounded-xl overflow-hidden">
                        <span className="absolute inset-0 translate-y-full -rotate-6 bg-main scale-125 origin-top-right group-hover:translate-y-0 transition-all duration-300"></span>
                        <div className="relative ">
                            <span className="relative block mb-2 text-5xl">
                                <span className="relative">
                                    {realInfo.totalExpenses
                                        ? numberWithComma(
                                              realInfo.totalExpenses
                                          )
                                        : "-"}
                                    원
                                </span>
                            </span>
                            <div className="group-hover:text-white transition-all duration-300">
                                <h3 className="mb-1 text-xl">총 지출</h3>
                                <p className="font-sans font-semibold text-base">
                                    {nowDate.getMonth() + 1}월 총 지출은
                                    <strong className="inline-block py-0.5 px-2 m-0.5 rounded bg-point text-white">
                                        {realInfo.totalExpenses
                                            ? numberWithComma(
                                                  realInfo.totalExpenses
                                              )
                                            : "-"}
                                        원
                                    </strong>
                                    이며 가장 많은 지출 항목은
                                    <strong className="inline-block py-0.5 px-2 m-0.5 rounded bg-point text-white">
                                        {realInfo.maxCategory
                                            ? `${realInfo.maxCategory.name}, ${realInfo.maxCategory.amount}`
                                            : "-"}
                                        원
                                    </strong>
                                    입니다.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="group relative w-full p-4 border-2 border-point text-center rounded-xl overflow-hidden">
                        <span className="absolute inset-0 translate-y-full -rotate-6 bg-main scale-125 origin-top-right group-hover:translate-y-0 transition-all duration-300"></span>
                        <div className="relative ">
                            <span className="relative block mb-2 text-5xl">
                                <span className="relative">
                                    {realInfo.readingList
                                        ? realInfo.readingList.length
                                        : "-"}
                                    권
                                </span>
                            </span>
                            <div className="group-hover:text-white transition-all duration-300">
                                <h3 className="mb-1 text-xl">총 독서</h3>
                                <p className="font-sans font-semibold text-base">
                                    {nowDate.getMonth() + 1}월 총 독서량은
                                    <strong className="inline-block py-0.5 px-2 m-0.5 rounded bg-point text-white">
                                        {realInfo.readingList
                                            ? realInfo.readingList.length
                                            : "-"}
                                        권
                                    </strong>
                                    이며 가장 인상 깊었던 도서는
                                    <strong className="inline-block py-0.5 px-2 m-0.5 rounded bg-point text-white">
                                        {realInfo.bestReading
                                            ? `${realInfo.bestReading.name} - ${realInfo.bestReading.author}`
                                            : "-"}
                                    </strong>
                                    입니다.
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div>
                <h3 className="mb-4 text-3xl">자기소개</h3>
                <p className="font-semibold font-sans text-lg">
                    안녕하세요.
                    <br />
                    호기심 많은 행동파 웹퍼블리셔 정호민입니다.
                    <br />
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatibus expedita aut illum facere, labore, officia ea
                    libero ullam perferendis sequi explicabo corporis! Ipsam
                    voluptas eum nostrum vero, molestias quisquam asperiores.
                </p>
            </div>
        </div>
    );
}
