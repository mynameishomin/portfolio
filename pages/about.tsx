import Image from "next/image";
import GradientText from "@/components/gradientText";
import { notionInit } from "@/utils/functions";

export default function Page04() {
    return (
        <div className="grow">
            <h2 className="w-full mb-6 pb-4 text-2xl border-b-2 border-gray-400">
                👊🏼 일단 하고 보는 정호민입니다.
            </h2>
            <div className="flex flex-col items-center">
                <div className="w-60 mb-4">
                    <Image
                        className=""
                        src="/images/profile-photo-2.jpeg"
                        alt=""
                        width={400}
                        height={400}
                    />
                </div>
                <div className="mb-12">
                    <GradientText>
                        <span className="block mb-4 text-lg font-bold break-keep">
                            &quot;벼랑 끝에 몰렸을 때 무섭다고 울기보다는 냅다
                            뛰어내리며 도전하고 있습니다.&quot;
                        </span>
                    </GradientText>
                    <ul className="space-y-2">
                        <li className="flex">
                            <span className="block mr-2">☝🏻</span>
                            <span>
                                하고싶은 게 많아요. <br />
                                말뿐이 아니라 하나씩 이뤄가고 있어요.
                            </span>
                        </li>
                        <li className="flex">
                            <span className="block mr-2">☝🏻</span>
                            <span>고집은 세지만 말은 잘 들어요.</span>
                        </li>
                        <li className="flex">
                            <span className="block mr-2">☝🏻</span>
                            <span>
                                호기심이 많아요. <br />
                                여기저기 돌아다니지만 필요할 땐 선택과 집중을
                                해요.
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
