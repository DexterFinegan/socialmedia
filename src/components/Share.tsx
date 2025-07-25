import ImageProp from "./Image"

const Share = () => {
    return (
        <div className="p-4 flex gap-4">
            {/*Avatar*/}
            <div className="relative w-10 h-10 rounded-full overflow-hidden">
                <ImageProp path="/general/avatar.png" alt="" w={100} h={100} tr={true}/>
            </div>
            {/*Others*/}
            <div className="flex-1 flex flex-col gap-4">
                <input type="text" placeholder="What's happening?" className="bg-transparent outline-none placeholder:text-gray-500 text-xl"/>
                <div className="flex items-center justify-between gap-4 flex-wrap">
                    <div className="flex gap-4 flex-wrap">
                        <ImageProp path="icons/image.svg" alt="" w={20} h={20} className="cursor-pointer"/>
                        <ImageProp path="icons/gif.svg" alt="" w={20} h={20} className="cursor-pointer"/>
                        <ImageProp path="icons/poll.svg" alt="" w={20} h={20} className="cursor-pointer"/>
                        <ImageProp path="icons/emoji.svg" alt="" w={20} h={20} className="cursor-pointer"/>
                        <ImageProp path="icons/schedule.svg" alt="" w={20} h={20} className="cursor-pointer"/>
                        <ImageProp path="icons/location.svg" alt="" w={20} h={20} className="cursor-pointer"/>
                    </div>
                    <button className="bg-white text-black font-bold rounded-full px-4 py-2">Post</button>
                </div>
            </div>
        </div>
    )
}

export default Share