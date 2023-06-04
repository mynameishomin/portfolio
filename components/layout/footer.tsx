import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full px-8 pb-10 font-han bg-main text-center text-white border-l-2 border-dashed border-white max-lg:border-0">
            <div className="relative flex items-center -top-10 px-10 py-6 bg-point rounded-lg max-lg:flex-col max-lg:items-start">
                <h3 className="text-3xl">함께 하실래요?</h3>
                <p className="grow px-10 text-xl text-left max-lg:px-0 max-lg:py-4">
                    {/* 함께 하고 싶다면 연락 주세요.
                    <br />
                    언제든지 가능합니다.
                    <br />
                    기다릴게요. */}
                    죄송합니다.
                    <br />
                    지금은 구직중이 아닙니다.
                    <br />
                </p>
                <Link className="relative border-b-2" href={"/contact"}>
                    연락처 확인하기
                    <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-sub"></span>
                </Link>
            </div>
            <strong className="block mb-4 text-3xl">
                실패랑 친한 저는 도전을 두려워하지 않습니다.
            </strong>
            <div className="text-sm">
                <Link href="/">
                    <span>Homin&apos;s Portfolio</span>
                </Link>
                <span> © 2023</span>
            </div>
        </footer>
    );
}
