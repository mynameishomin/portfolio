import Image from "next/image";
import { motion } from "framer-motion";
import Layout from "@/components/layout/layout";
import Visual from "@/components/layout/visual";
import Container from "@/components/layout/container";

export default () => {
    return (
        <Layout>
            <>
                <Visual>
                    <div className="flex mb-8 pt-12 font-mt">
                        <motion.div
                            className="w-1/2 flex flex-col justify-center"
                            initial={{ x: -500, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{
                                duration: 0.5,
                                ease: "easeInOut",
                            }}
                        >
                            <strong className="block mb-6 text-2xl text-gray-900">
                                안녕하세요 정호민입니다. <br />
                                저를 소개합니다.
                            </strong>
                            <p className="text-base text-gray-600">
                                호기심 넘치고 배움에 욕심이 많은 저는 업무에
                                필요한 기술뿐 아니라 <br />
                                새로운 기술, 새로운 스포츠, 새로운 취미를
                                다양하게 습득합니다.
                                <br />
                                저에게 새로운 것을 알려주실래요?
                            </p>
                        </motion.div>
                        <motion.div
                            className="flex justify-center w-1/2"
                            initial={{ x: 500, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{
                                duration: 0.6,
                                ease: "easeInOut",
                            }}
                        >
                            <Image
                                src="/images/profile_02.png"
                                alt="프로필 사진"
                                width="400"
                                height="400"
                            />
                        </motion.div>
                    </div>
                </Visual>
                <Container>
                    <motion.div
                        className="space-y-20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            delay: 1,
                            duration: 0.5,
                            ease: "easeInOut",
                        }}
                    >
                        <section className="flex space-x-32">
                            <div className="grow">
                                <h3 className="mb-6 text-3xl font-black text-gray-900">
                                    💪🏻 강한 육체에는 강한 정신이 깃든다.
                                </h3>
                                <p className="break-keep">
                                    173cm, 54kg의 가냘픈 체격이 콤플렉스였던
                                    저는 육체적인 활동에 있어서 늘 소극적이고
                                    무기력한 태도를 보였습니다. 그러한 태도는
                                    저의 정신에도 영향을 미쳤고 작은
                                    돌발상황에도 쉽게 흔들리는 성격이
                                    되었습니다.
                                    <br />
                                    <br />
                                    하지만 저는 이러한 콤플렉스를 극복하기 약
                                    2년간 웨이트 트레이닝을 진행하여 체중을
                                    70kg까지 증량하였으며 스쿼트 140kg,
                                    벤치프레스 95kg, 데드리프트 165kg을 수행할
                                    수 있는 근력을 획득하였습니다.
                                    <br />
                                    <br />
                                    덕분에 저는 육체적인 활동 뿐만이 아니라
                                    대부분의 활동에 자신감을 갖게 되었고, 뜨겁고
                                    긍정적인 승부욕을 느낄 수 있게 되었습니다.
                                </p>
                            </div>
                            <div className="relative w-80 shrink-0">
                                <Image
                                    className="block rounded-xl w-full shadow-xl"
                                    src="/images/about-01_01.gif"
                                    width="500"
                                    height="500"
                                    alt="데드리프트 수행 중인 저의 모습"
                                />
                                <span className="absolute bottom-2 right-2  pb-0.5 px-2 text-gray-900 bg-gray-200 rounded font-black text-sm">
                                    데드리프트 165kg 수행
                                </span>
                            </div>
                        </section>

                        <section className="flex space-x-32">
                            <div className="relative w-80 shrink-0">
                                <Image
                                    className="block rounded-xl w-full shadow-xl"
                                    src="/images/about-01_02.gif"
                                    width="500"
                                    height="500"
                                    alt="3 X 3 큐브 연습중인 저의 모습"
                                />
                                <span className="absolute bottom-2 right-2  pb-0.5 px-2 text-gray-900 bg-gray-200 rounded font-black text-sm">
                                    3 X 3 큐브 연습
                                </span>
                            </div>
                            <div className="grow">
                                <h3 className="mb-6 text-3xl font-black text-gray-900">
                                    🧠 "어느정도"의 힘을 믿는다.
                                </h3>
                                <p className="break-keep">
                                    그동안 경험하지 못했던, 완전히 새로운 것을
                                    시작했을 때 그것을 최고로 잘하는 것은 매우
                                    어려운 일이지만 우리는 대부분 그것을
                                    어느정도 해내는 것까지는 쉽게 할 수
                                    있습니다. 그리고 어느정도 할줄 아는 사람과
                                    전혀 할줄 모르는 사람의 차이는 매우 큽니다.
                                    <br />
                                    <br />
                                    며칠을 줘도 3 X 3 큐브를 맞출 수 없었던 제가
                                    한 달만에 20초 안에 맞출 수 있었던 것도
                                    "어느정도"의 힘을 믿었기 때문입니다.
                                    <br />
                                    <br />
                                    이러한 믿음은 새로운 것에 도전하는 것을
                                    두려워하지 않게 만들었고 "할 줄 모릅니다."
                                    라는 말 대신에 "해볼게요." 라는 말을 하도록
                                    만들었습니다.
                                </p>
                            </div>
                        </section>

                        <section className="flex space-x-32">
                            <div className="grow">
                                <h3 className="mb-6 text-3xl font-black text-gray-900">
                                    임시텍스트
                                </h3>
                                <p className="break-keep">
                                    임시 텍스트
                                    <br />
                                </p>
                            </div>
                            <div className="relative w-80 shrink-0">
                                <Image
                                    className="block rounded-xl w-full shadow-xl"
                                    src="/images/about-01_03.jpeg"
                                    width="500"
                                    height="500"
                                    alt="지게차 운전중인 저의 모습"
                                />
                                <span className="absolute bottom-2 right-2  pb-0.5 px-2 text-gray-900 bg-gray-200 rounded font-black text-sm">
                                    임시 텍스트
                                </span>
                            </div>
                        </section>
                    </motion.div>
                </Container>
            </>
        </Layout>
    );
};
