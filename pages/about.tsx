import Image from "next/image";
import GradientText from "@/components/gradientText";
import { notionInit } from "@/utils/functions";

export default function Page04() {
    return (
        <div className="grow font-han">
            <h2 className="text-point w-full mb-8 text-4xl">ABOUT</h2>
            <div className="flex mb-10 pb-8 border-b-2 border-point border-dashed">
                <div className="mr-12">
                    <h3 className="mb-4 text-3xl">기본 정보</h3>
                    <Image
                        className="w-60 rounded-full"
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
                    5월 실시간 정보
                    <span className="text-base">[2023.05.27 기준]</span>
                </h3>
                <ul className="flex space-x-6">
                    <li className="group relative w-full p-4 border-2 border-point text-center rounded-xl overflow-hidden">
                        <span className="absolute inset-0 translate-y-full -rotate-6 bg-main scale-125 origin-top-right group-hover:translate-y-0 transition-all duration-300"></span>
                        <div className="relative ">
                            <span className="relative block mb-2 text-5xl">
                                <span className="relative">659,200원</span>
                            </span>
                            <div className="group-hover:text-white transition-all duration-300">
                                <h3 className="mb-1 text-xl">총 지출</h3>
                                <p className="font-sans font-semibold text-base">
                                    5월 총 지출은 659,200원이며 가장 많은 지출
                                    항목은 주거비 230,500원입니다.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="group relative w-full p-4 border-2 border-point text-center rounded-xl overflow-hidden">
                        <span className="absolute inset-0 translate-y-full -rotate-6 bg-main scale-125 origin-top-right group-hover:translate-y-0 transition-all duration-300"></span>
                        <div className="relative ">
                            <span className="relative block mb-2 text-5xl">
                                <span className="relative">4권</span>
                            </span>
                            <div className="group-hover:text-white transition-all duration-300">
                                <h3 className="mb-1 text-xl">총 독서</h3>
                                <p className="font-sans font-semibold text-base">
                                    5월 총 독서량은 4권이며 가장 인상 깊었던
                                    도서는 세이노의 가르침-세이노입니다.
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
