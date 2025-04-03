import titleBg from "../assets/img/bg-blue.png"
import rightArrow from "../assets/img/right-arrow-icon.png"
import containerBg from "../assets/img/spiral-bg.png"

export const YourWorkSection = () => {
    return (
        <section className="w-full h-[574px] bg-primary-darkblue text-white">
            <div className="container mx-auto w-full h-full flex items-center">
                <div className="w-full h-[294px] flex flex-col items-center">
                    <img className="w-[630px] h-[400px] absolute mt-[-140px] mr-[1800px] rotate-240" src={containerBg.src} />
                    <div className="w-[1064px] h-[171px] flex flex-col items-center">
                        <h1 className="text-6xl font-bold z-10">Your work, everywhere you are</h1>
                        <img className="w-[314px] h-[23px] absolute ml-170 mt-12" src={titleBg.src} />
                        <p className="mt-[24px] text-md text-center">Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and <br /> OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!</p>
                    </div>
                    <div className="w-[195px] h-[63px] mt-[60px]">
                        <button className="flex justify-center items-center w-[195px] h-[63px] rounded-lg border-primary-blue bg-primary-blue text-white cursor-pointer">
                            Try taskey
                            <img
                                className="w-[30px] h-[30px]"
                                src={rightArrow.src} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}