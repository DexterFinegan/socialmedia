import "./globals.css";
import LeftBar from "@/components/LeftBar";
import RightBar from "@/components/RightBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="max-w-screen-md md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl xxl:max-w-screen-xxl mx-auto flex justify-between">
          <div className="px-2 xm:px-4 xxl:px-8 h-screen">
            <LeftBar />
          </div>
          <div className="lg:min-w-[600px] border-x-[1px] border-borderGray h-screen flex-1">{children}</div>
          <div className="hidden lg:flex ml-4 mg:ml-8 h-screen flex-1">
            <RightBar />
          </div>
        </div>
      </body>
    </html>
  );
}