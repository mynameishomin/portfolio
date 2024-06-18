import Image from "next/image";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Layout from "@/components/layout/layout";
import { SubVisual } from "@/components/layout/visual";
import Container from "@/components/layout/container";

interface AboutSectionProps {
    title: string;
    text: string;
    src: string;
    alt: string;
    reverse?: boolean;
}

const AboutSection = ({
    title,
    text,
    src,
    alt,
    reverse,
}: AboutSectionProps) => {
    return (
        <section
            className={`flex ${
                reverse
                    ? "flex-col lg:flex-row-reverse"
                    : "flex-col lg:flex-row"
            } break-keep`}
        >
            <div
                className={`grow mb-8 ${
                    reverse ? "lg:ml-32" : "lg:mr-32"
                } lg:mb-0`}
            >
                <h3 className="mb-6 text-3xl font-black text-gray-900">
                    {title}
                </h3>
                <p className="break-keep whitespace-pre-line">{text}</p>
            </div>
            <div className="w-80 shrink-0 mx-auto lg:mx-0">
                <div className="relative">
                    <Image
                        className="block rounded-xl w-full shadow-xl"
                        src={src}
                        width="500"
                        height="500"
                        alt={alt}
                    />
                    <span className="absolute bottom-2 right-2  pb-0.5 px-2 text-gray-900 bg-gray-200 rounded font-black text-sm">
                        {alt}
                    </span>
                </div>
            </div>
        </section>
    );
};

const AboutHomin = () => {
    return (
        <>
            <SubVisual
                title="HOMIN JUNG"
                text="호기심 넘치고 배움에 욕심이 많은 저는 업무에 필요한 기술뿐 아니라 새로운 기술, 새로운 스포츠, 새로운 취미를 다양하게 습득합니다. 저에게 새로운 것을 알려주실래요?"
                src="/images/profile_02.png"
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
                    <AboutSection
                        title="💪🏻 강한 육체에는 강한 정신이 깃든다."
                        text={`173cm, 54kg의 가냘픈 체격이 콤플렉스였던 저는 육체적인 활동에 있어서 늘 소극적이고 무기력한 태도를 보였습니다. 그러한 태도는 저의 정신에도 영향을 미쳤고 작은 돌발상황에도 쉽게 흔들리는 성격이 되었습니다. \n
                        하지만 저는 이러한 콤플렉스를 극복하기 약 2년간 웨이트 트레이닝을 진행하여 체중을 70kg까지 증량하였으며 스쿼트 140kg, 벤치프레스 95kg, 데드리프트 165kg을 수행할 수 있는 근력을 획득하였습니다. \n                           
                        덕분에 저는 육체적인 활동 뿐만이 아니라 대부분의 활동에 자신감을 갖게 되었고, 뜨겁고 긍정적인 승부욕을 느낄 수 있게 되었습니다.`}
                        src="/images/about-01_01.gif"
                        alt="데드리프트 165kg 수행"
                    />
                    <AboutSection
                        title="🧠 '어느정도'의 힘을 믿는다."
                        text={`그동안 경험하지 못했던, 완전히 새로운 것을 시작했을 때 그것을 최고로 잘하는 것은 매우 어려운 일이지만 우리는 대부분 그것을 어느정도 해내는 것까지는 쉽게 할 수 있습니다. 그리고 어느정도 할줄 아는 사람과 전혀 할줄 모르는 사람의 차이는 매우 큽니다. \n
                며칠을 줘도 3 X 3 큐브를 맞출 수 없었던 제가 한 달만에 20초 안에 맞출 수 있었던 것도 "어느정도"의 힘을 믿었기 때문입니다.\n
                이러한 믿음은 새로운 것에 도전하는 것을 두려워하지 않게 만들었고 "할 줄 모릅니다." 라는 말 대신에 "해볼게요." 라는 말을 하도록 만들었습니다.`}
                        src="/images/about-01_02.gif"
                        alt="3 X 3 큐브 연습중"
                        reverse
                    />
                    <AboutSection
                        title="🤪 실패를 즐긴다."
                        text={`실패란 무섭고 부끄럽다고 생각하는 사람들이 있습니다. 그래서 도전하지 않거나 몰래 도전하고 실패하는 모습을 숨기곤 합니다. 하지만 저는 도전과 실패를 모두 공개하고 그 과정을 즐깁니다. \n
                최근에 클라이밍을 시작하였는데, 잘 하는 사람들 사이에서 못하는 모습, 실패하는 모습을 부끄러워하지 않고 모두 공개하고 그들에게 도움을 받아 배우고 성장하며 실패를 극복해나가는 과정을  즐기고 있습니다.\n
                이러한 태도는 어떤 도전을 하던지 더욱 빠른 속도로 성장할 수 있게 만들어주었습니다.`}
                        src="/images/about-01_03.gif"
                        alt="클라이밍 연습중"
                    />
                </motion.div>
            </Container>
        </>
    );
};

const AboutWebPublisher = () => {
    return (
        <>
            <SubVisual
                title="FRONT END"
                text="시키는 일만 하기보다 해야할 일을 찾아내고 기계적으로 일을 하기보다 더 효율적인 방법을 찾아 일하는 것을 좋아합니다. 저와 함께 일 하실래요?"
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
                    <AboutSection
                        title="🖥️ 업무는 효율적으로."
                        text={` 반복적인 일을 기계적으로 수행하면서 시간을 떼우는 것을 싫어합니다. 오히려 시간이 더 걸리더라도 자동화 혹은 단축키 학습 등의 방법을 통해 효율적으로 일하는 것을 선호합니다.\n
                        개인적으로 진행했던 사이드 프로젝트 중에서 가장 자랑하고 싶은 것은 출결 자동화입니다. 특정 시스템을 통하여 매일 출퇴근을 등록해야하는데 이 과정을 파이썬으로 자동화하여 매일 출퇴근을 직접 등록하지 않아도 되게 만들었습니다.\n
                        이러한 업무 방식으로 절약한 시간을 통해 더 많은 업무를 수행하거나 기존 업무 프로세스를 더욱 개선하며 더 나은 결과물을 만들어내고자 합니다.`}
                        src="/images/about-02_01.jpeg"
                        alt="출결 자동화"
                    />
                    <AboutSection
                        title="🚚 필요한 기술은 찾아서 습득"
                        text={`업무를 수행하다보면 특정 기술을 습득한다면 생산성이 더욱 높아질 것으로 예상되는 일이 생기기 마련입니다. 이러한 경우에는 누군가 지시하지 않아도 스스로 기술을 습득하여 업무에 적용하고자 합니다.\n
                        1년간 출하/생산관리 업무를 맡아 수행할 당시 지게차 운전을 할줄 모르기에 제품을 이동시키는 업무를 다른 사람에게 요청해야 했습니다. 때문에 요청하는 시간 및 대기하는 시간이 많아 생산성이 떨어졌습니다. 이때 제가 직접 지게차 운전을 배운다면 생산성이 더욱 높아질 것이라고 판단하였고 상사의 허락 하에 직접 지게차 운전을 배워 업무에 적용하였고 생산성을 크게 향상시켰습니다.\n
                        이처럼 생산성이 높아질 것으로 예상되는 범위 내에서 기술을 습득하고 역할을 확장하는 것을 좋아합니다.`}
                        src="/images/about-02_02.jpeg"
                        alt="지게차 운전중"
                        reverse
                    />
                </motion.div>
            </Container>
        </>
    );
};

export default () => {
    const router = useRouter();

    return (
        <Layout>
            <>
                {router.query.name === "homin" ? <AboutHomin /> : null}
                {router.query.name === "publisher" ? (
                    <AboutWebPublisher />
                ) : null}
            </>
        </Layout>
    );
};
