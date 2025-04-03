import rightArrow from "../assets/img/right-arrow-icon.png"
import titleBg from "../assets/img/bg-yellow.png"
import containerBg from "../assets/img/spiral-bg.png"

export const CustomizeSection = () => {
    return (
        <section className="w-full h-[812px] bg-white text-black">
            <div className="container mx-auto h-full flex items-center justify-between">
                <img className="w-[602px] h-[500px] absolute mt-[600px] ml-[935px]" src={containerBg.src} />
                <div className="w-[714px] h-[532px] bg-secondary-blue rounded-lg">

                </div>
                <div className="w-[669px] h-[411px] flex flex-col justify-center">
                    <div className="w-[669px] h-[174px]">
                        <h1 className="text-6xl absolute font-bold">Customise it to <br /> your needs</h1>
                        <img className="w-[648px] h-[69px] mt-28 ml-[-150px]" src={titleBg.src} />
                    </div>
                    <div className="w-[669px] h-[90px] bg-none">
                        <p className="text-lg absolute">Customise the app with plugins, custom themes and multiple text editors (Rich <br /> Text or Markdown). Or create your own scripts and plugins using the Extension <br /> API.</p>
                    </div>
                    <button className="flex justify-center z-10 items-center w-[171px] mt-10 h-[63px] rounded-lg border-primary-blue bg-primary-blue text-white cursor-pointer">
                        <p className="w-[67px] h-[23px]">Let's go</p>
                        <img
                            className="w-[30px] h-[30px]"
                            src={rightArrow.src} />
                    </button>
                </div>
            </div>
        </section>
    )
}