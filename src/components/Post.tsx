import  ImageProp  from "./Image"
import PostInfo from "./PostInfo"

const Post = () => {
    return (
        <div className="p-4 border-y-[1px] border-borderGray">
            {/*Post Type*/}
            <div className="flex items-center gap-2 text-sm text-textGray mb-2 font-bold">
                <span>DexUp reposted</span>
            </div>
            {/*Post Content*/}
            <div className="flex gap-4">
                {/*Avatar*/}
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <ImageProp path="general/avatar.png" alt="" w={100} h={100} tr={true}/>
                </div>
                {/*Content*/}
                <div className="flex-1">
                    {/*Top*/}
                    <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2 flex-wrap">
                            <h1 className="text-md font-bold">DexUp</h1>
                            <span className="text-textGray">@DexUp</span>
                            <span className="text-textGray">1 day ago</span>
                        </div>
                        <PostInfo/>
                    </div>
                    {/*Text & Media*/}
                    <p className="">Today I went to the beach but accidentally need tp pee in the ocean so I went... uh-oh!</p>
                    <ImageProp path="general/post.jpeg" alt="" w={600} h={600}/>
                </div>
            </div>
        </div>
    )
}

export default Post