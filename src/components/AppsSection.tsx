import gmailIcon from "../assets/img/gmail.png"
import dropboxIcon from "../assets/img/dropbox.png"
import slackIcon from "../assets/img/stack.png"
import whitepaceIcon from "../assets/img/whitepace-logo-icon.png"
import outlookIcon from "../assets/img/outlook.png"
import calendarIcon from "../assets/img/google-calendar.png"
import driveIcon from "../assets/img/google-drive.png"
import rightArrow from "../assets/img/right-arrow-icon.png"

export const AppsSection = () => {

    return (
        <section className="w-full h-[750px]">
            <div className="container mx-auto w-full h-full flex justify-between items-center">
                <div className="w-[582px] h-[470px] flex justify-center items-center">
                    <div className="w-[291px] h-[291px] absolute mb-[100px] flex justify-center items-center border-2 border-dashed border-primary-blue rounded-full">
                        <div className="w-[72px] h-[72px] mb-[280px] flex justify-center items-center absolute rounded-full bg-white shadow-lg">
                            <img className="w-[43px] h-[43px]" src={gmailIcon.src} />
                        </div>
                        <div className="w-[72px] h-[72px] ml-[280px] z-10 flex justify-center items-center absolute rounded-full bg-white shadow-lg">
                            <img className="w-[43px] h-[43px]" src={dropboxIcon.src} />
                        </div>
                        <div className="w-[72px] h-[72px] mr-[280px] z-10 flex justify-center items-center absolute rounded-full bg-white shadow-lg">
                            <img className="w-[43px] h-[43px]" src={slackIcon.src} />
                        </div>
                        <div className="w-[103px] h-[103px] mt-[200px] z-10 flex justify-center items-center absolute rounded-full bg-white shadow-lg overflow-hidden">
                            <img className="w-[80px] h-[80px]" src={whitepaceIcon.src} />
                        </div>
                    </div>
                    <div className="w-[291px] h-[291px] absolute mt-[175px] mr-[175px] border-2 border-dashed border-primary-blue rounded-full">
                        <div className="w-[72px] h-[72px] mt-[200px] z-10 flex justify-center items-center absolute rounded-full bg-white shadow-lg">
                            <img className="w-[43px] h-[43px]" src={outlookIcon.src} />
                        </div>
                        <div className="w-[72px] h-[72px] mt-[200px] ml-[200px] z-10 flex justify-center items-center absolute rounded-full bg-white shadow-lg">
                            <img className="w-[43px] h-[43px]" src={calendarIcon.src} />
                        </div>
                    </div>
                    <div className="w-[291px] h-[291px] absolute mt-[175px] ml-[175px] border-2 border-dashed border-primary-blue rounded-full">
                        <div className="w-[72px] h-[72px] mt-[200px] ml-[210px] z-10 flex justify-center items-center absolute rounded-full bg-white shadow-lg">
                            <img className="w-[43px] h-[43px]" src={driveIcon.src} />
                        </div>
                    </div>
                </div>
                <div className="w-[798px] h-[468px] flex justify-between flex-col">
                    <div className="w-[798px] h-[345px]">
                        <h1 className="text-6xl font-bold">Work with Your <br /> Favorite Apps Using <br /> whitepace</h1>
                        <p className="text-lg mt-[24px]">Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to <br /> have all the tools you need for your project success.</p>
                    </div>
                    <div className="w-[194px] h-[63px]">
                        <button className="flex justify-center items-center w-[194px] h-[63px] rounded-lg border-primary-blue bg-primary-blue text-white cursor-pointer">
                            <p>Read more</p>
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