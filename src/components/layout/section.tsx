import Container from "@/components/layout/container";

export const Section = ({ children }: { children: React.ReactNode }) => {
    return (
        <Container>
            <div className="mb-[3rem] pb-[2rem] border-b border-gray-500">
                {children}
            </div>
        </Container>
    );
};

export const SectionTitle = ({ title }: { title: string }) => {
    return <h2 className="mb-[1rem] text-right text-2xl font-bold">{title}</h2>;
};
