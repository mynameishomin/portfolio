import Image from "next/image";
import { motion } from "framer-motion";
import Layout from "@/components/layout/layout";
import { SubVisual } from "@/components/layout/visual";
import Container from "@/components/layout/container";

export default () => {
    return (
        <Layout>
            <>
                <SubVisual
                    title="FRONT END"
                    text="시키는 일만 하기보다 해야할 일을 찾아내고 기계적으로 일을 하기보다 더 효율적인 방법을 찾아 일하는 것을 좋아합니다."
                    src="/images/profile_01.png"
                    alt="프로필 사진"
                />
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
                                    🖥️ 업무는 효율적으로
                                </h3>
                                <p className="break-keep">
                                    반복적인 일을 기계적으로 수행하면서 시간을
                                    떼우는 것을 싫어합니다. 오히려 시간이 더
                                    걸리더라도 자동화 혹은 단축키 학습 등의
                                    방법을 통해 효율적으로 일하는 것을
                                    선호합니다.
                                    <br />
                                    <br />
                                    개인적으로 진행했던 사이드 프로젝트 중에서
                                    가장 자랑하고 싶은 것은 출결 자동화입니다.
                                    특정 시스템을 통하여 매일 출퇴근을
                                    등록해야하는데 이 과정을 파이썬으로
                                    자동화하여 매일 출퇴근을 직접 등록하지
                                    않아도 되게 만들었습니다.
                                    <br />
                                    <br />
                                    이러한 업무 방식으로 절약한 시간을 통해 더
                                    많은 업무를 수행하거나 기존 업무 프로세스를
                                    더욱 개선하며 더 나은 결과물을 만들어내고자
                                    합니다.
                                </p>
                            </div>
                            <div className="relative w-80 shrink-0">
                                <Image
                                    className="block rounded-xl w-full shadow-xl"
                                    src="/images/about-02_01.jpeg"
                                    width="500"
                                    height="500"
                                    alt="출결 자동화 캡쳐"
                                />
                                <span className="absolute bottom-2 right-2  pb-0.5 px-2 text-gray-900 bg-gray-200 rounded font-black text-sm">
                                    출결 자동화
                                </span>
                            </div>
                        </section>

                        <section className="flex space-x-32">
                            <div className="relative w-80 shrink-0">
                                <Image
                                    className="block rounded-xl w-full shadow-xl"
                                    src="/images/about-02_02.jpeg"
                                    width="500"
                                    height="500"
                                    alt="지게차 운전중인 저의 모습"
                                />
                                <span className="absolute bottom-2 right-2  pb-0.5 px-2 text-gray-900 bg-gray-200 rounded font-black text-sm">
                                    지게차 운전중
                                </span>
                            </div>
                            <div className="grow">
                                <h3 className="mb-6 text-3xl font-black text-gray-900">
                                    🚚 필요한 기술은 찾아서 습득
                                </h3>
                                <p className="break-keep">
                                    업무를 수행하다보면 특정 기술을 습득한다면
                                    생산성이 더욱 높아질 것으로 예상되는 일이
                                    생기기 마련입니다. 이러한 경우에는 누군가
                                    지시하지 않아도 스스로 기술을 습득하여
                                    업무에 적용하고자 합니다.
                                    <br />
                                    <br />
                                    1년간 출하/생산관리 업무를 맡아 수행할 당시
                                    지게차 운전을 할줄 모르기에 제품을
                                    이동시키는 업무를 다른 사람에게 요청해야
                                    했습니다. 때문에 요청하는 시간 및 대기하는
                                    시간이 많아 생산성이 떨어졌습니다. 이때 제가
                                    직접 지게차 운전을 배운다면 생산성이 더욱
                                    높아질 것이라고 판단하였고 상사의 허락 하에
                                    직접 지게차 운전을 배워 업무에 적용하였고.
                                    생산성을 크게 향상시켰습니다.
                                    <br />
                                    <br />
                                    이처럼 생산성이 높아질 것으로 예상되는 범위
                                    내에서 기술을 습득하고 역할을 확장하는 것을
                                    좋아합니다.
                                </p>
                            </div>
                        </section>
                    </motion.div>
                </Container>
            </>
        </Layout>
    );
};
