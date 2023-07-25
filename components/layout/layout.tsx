import Footer from "./footer";
import Header from "./header";

export default ({ children }: { children: React.ReactElement }) => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />
            <main className="grow pb-14 shadow-md">{children}</main>
            <Footer />
        </div>
    );
};
