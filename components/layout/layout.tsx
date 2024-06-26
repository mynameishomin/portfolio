import Footer from "./footer";
import Header from "./header";

export default ({ children }: { children: React.ReactElement }) => {
    return (
        <div className="flex flex-col w-screen min-h-screen overflow-hidden">
            <Header />
            <main className="relative grow pb-14 shadow-md">{children}</main>
            <Footer />
        </div>
    );
};
