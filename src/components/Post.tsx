import  ImageProp  from "./Image"
import PostInfo from "./PostInfo"
import PostInteraction from "./PostInteraction"

const Post = () => {
    return (
        <div className="p-4 border-y-[1px] border-borderGray">
            {/*Post Type*/}
            <div className="flex items-center gap-2 text-sm text-textGray mb-2 font-bold">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                <path
                    className="fill-gray-500"
                    d="M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0 .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853 9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0 4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603 4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z"
                />
                </svg>
                <span>DexUp reposted</span>
            </div>
            {/*Post Content*/}
            <div className="flex gap-4">
                {/*Avatar*/}
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <ImageProp path="general/avatar.png" alt="" w={100} h={100} tr={true}/>
                </div>
                {/*Content*/}
                <div className="flex-1 flex flex-col gap-2">
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
                    <PostInteraction/>
                </div>
            </div>
        </div>
    )
}

export default Post