import Link from "next/link"
import ImageProp from "./Image"

const menuList = [
    {
        id: 1,
        name: "Homepage",
        link: "/",
        icon: "home.svg",
    },
    {
        id: 2,
        name: "Explore",
        link: "/",
        icon: "explore.svg",
    },
    {
        id: 3,
        name: "Notification",
        link: "/",
        icon: "notification.svg",
    },
    {
        id: 4,
        name: "Messages",
        link: "/",
        icon: "message.svg",
    },
    {
        id: 5,
        name: "Bookmarks",
        link: "/",
        icon: "bookmark.svg",
    },
    {
        id: 6,
        name: "Profile",
        link: "/",
        icon: "profile.svg",
    },
    {
        id: 7,
        name: "More",
        link: "/",
        icon: "more.svg",
    }
]


const LeftBar = () => {
    return (
        <div className="h-screen sticky top-0 flex flex-col justify-between pt-2 pb-8">
            {/*Logo Menu Button*/}
            <div className="flex flex-col gap-4 text-m items-center xl:items-start">
                {/*Logo*/}
                <Link href="/" className="p-2 rounded-full hover:bg-[#181818]">
                <ImageProp path="icons/logo.svg" alt="logo" w={24} h={24}/>
                </Link>
                {/*Menu List*/}
                <div className="flex flex-col gap-3">
                    {menuList.map(item => (
                        <Link href={item.link} className="p-2 rounded-full hover:bg-[#181818] flex items-center gap-4" key={item.id}>
                            <ImageProp path={`icons/${item.icon}`} alt={item.name} w={24} h={24}/>
                            <span className="hidden xl:inline">{item.name}</span>
                        </Link>
                    ))}
                </div>
                {/*Button*/}
                <Link href="/" className="bg-white text-black rounded-full w-12 h-12 flex items-center justify-center xl:hidden">
                    <ImageProp path="icons/post.svg" alt="post" w={24} h={24}/>
                </Link>
                <Link href="/" className="hidden xl:block bg-white text-black rounded-full font-bold py-2 px-20">Post</Link>
            </div>
            {/*User*/}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 relative rounder-full overflow-hidden">
                        <ImageProp path="/general/avatar.png" alt="DexUp" w={100} h={100} tr={true}/>
                    </div>
                    <div className="hidden xl:flex flex-col">
                        <span className="font-bold">DexUp</span>
                        <span className="text-sm text-textGray">@DexUp</span>
                    </div>
                </div>
                <div className="hidden xl:block cursor-pointer font-bold">...</div>
            </div>
        </div>
    )
}

export default LeftBar