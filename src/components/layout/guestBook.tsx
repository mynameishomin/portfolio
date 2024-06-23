import { useState, Key } from "react";
import { useForm } from "react-hook-form";

export default function GuestBook({ data }: { data: any }) {
    const [isWrite, setIsWrite] = useState<Boolean>(false);
    const { register, watch } = useForm();
    const commentSubmit = async () => {
        const newGuest = await (
            await fetch("http://localhost:3000/api/addGuestBook", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: watch("name"),
                    comment: watch("comment"),
                }),
            })
        ).json();
        data.unshift(newGuest);
        setIsWrite(false);
    };
    return (
        <>
            {isWrite ? (
                <div className="p-4 border-t-2 border-gray-900">
                    <input
                        className="w-full mb-2 px-2 py-1 bg-gray-600 focus:outline-none"
                        {...register("name")}
                        type="text"
                        placeholder="Name"
                        autoComplete="off"
                    />
                    <textarea
                        className="w-full h-20 mb-4 p-2 bg-gray-600 resize-none focus:outline-none"
                        {...register("comment")}
                        placeholder="Comment"
                        autoComplete="off"
                    ></textarea>
                    <div className="flex justify-end space-x-4">
                        <button
                            className="px-2 py-0.5 text-sm text-gray-100 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500"
                            type="button"
                            onClick={() => setIsWrite(false)}
                        >
                            Cancel
                        </button>
                        <button
                            className="px-2 py-0.5 text-sm text-gray-100 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500"
                            type="button"
                            onClick={commentSubmit}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            ) : (
                <>
                    <ul className="max-h-48 mb-2 border-b-2 border-gray-900 overflow-scroll">
                        {data.map((item: any, index: Key) => {
                            return (
                                <li
                                    className="flex px-4 py-2 space-x-4 text-sm text-gray-400 border-t-2 whitespace-nowrap border-gray-900 transition duration-300 hover:text-gray-200"
                                    key={index}
                                >
                                    <span>
                                        [
                                        {
                                            item.properties.Name.title[0]
                                                .plain_text
                                        }
                                        ]
                                    </span>
                                    <span className="grow overflow-hidden text-ellipsis">
                                        {
                                            item.properties.Comment.rich_text[0]
                                                .plain_text
                                        }
                                    </span>
                                    <span>
                                        {item.created_time.split("T")[0]}
                                    </span>
                                </li>
                            );
                        })}
                    </ul>
                    <div className="flex justify-end px-4 pb-2">
                        <button
                            className="px-2 py-0.5 text-sm text-gray-100 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500"
                            onClick={() => setIsWrite(true)}
                            type="button"
                        >
                            Write
                        </button>
                    </div>
                </>
            )}
        </>
    );
}
