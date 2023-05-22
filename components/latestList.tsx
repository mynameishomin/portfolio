export default function LatestList({
    data,
    count,
    factory,
}: {
    data: Object[];
    count: number;
    factory: Function;
}) {
    return (
        <>
            {[...data]
                .reverse()
                .slice(0, count)
                .map((item) => {
                    const Element = factory(item);
                    return Element;
                })}
        </>
    );
}
