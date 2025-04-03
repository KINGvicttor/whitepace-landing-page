import rightArrow from "../assets/img/right-arrow-icon.png"
import titleBg from "../assets/img/bg-yellow.png"

export const ExtensionSection = () => {
    return (
        <section className="w-full h-[759px] bg-primary-darkblue">
            <div className="container mx-auto w-full h-full flex justify-between items-center">
                <div className="w-[697px] h-[294px] flex flex-col justify-center">
                    <div className="w-[697px] h-[87px]">
                        <h1 className="text-6xl absolute font-bold">Use as Extension</h1>
                        <img className="w-[409px] h-[48px] ml-26 mt-14"  src={titleBg.src} />
                    </div>
                    <div className="w-[697px] h-[60px]">
                        <p className="text-lg">Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.</p>
                    </div>
                    <button className="flex justify-center items-center w-[171px] mt-10 h-[63px] rounded-lg border-primary-blue bg-primary-blue text-white cursor-pointer">
                        <p className="w-[67px] h-[23px]">Let's go</p>
                        <img
                            className="w-[30px] h-[30px]"
                            src={rightArrow.src} />
                    </button>
                </div>
                <div className="w-[686px] h-[479px] bg-secondary-blue rounded-lg">

                </div>
            </div>
        </section>
    )
}