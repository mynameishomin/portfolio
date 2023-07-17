import Aside from "./aside";
import Footer from "./footer";
import Header from "./header";
import Main from "./main";

export default function Layout({ children }: { children: React.ReactElement }) {
    return (
        <div className="flex flex-col h-screen overflow-hidden break-keep max-lg:h-auto">
            <div className="flex w-full mb-0 max-w-6xl mx-auto grow h-0 max-lg:flex-col max-lg:h-auto">
                {/* <Aside /> */}
                <div className="flex flex-col grow overflow-scroll scrollbar-hide">
                    <Main>{children}</Main>
                    <Footer />
                </div>
            </div>
        </div>
    );
}
