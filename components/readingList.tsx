import LatestList from "./latestList";

export default function ReadingList({ data }: { data: Object[] }) {
    return (
        <ul>
            <LatestList
                data={data}
                count={3}
                factory={(data: any) => {
                    return (
                        <li
                            className="flex justify-between px-4 py-2 space-x-4 text-sm text-gray-400 border-t-2 border-gray-900 transition duration-300 hover:text-gray-200"
                            key={data.id}
                        >
                            <span className="whitespace-nowrap overflow-hidden text-ellipsis">
                                {data.properties.Name.title[0].plain_text}
                            </span>
                            <span className="px-2 py-0.5 text-sm text-gray-100 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500">
                                <span className="whitespace-nowrap">
                                    {data.properties.Status.status.name}
                                </span>
                            </span>
                        </li>
                    );
                }}
            />
        </ul>
    );
}
