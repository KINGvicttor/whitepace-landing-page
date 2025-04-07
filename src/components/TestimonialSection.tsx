import titleBg from "../assets/img/bg-yellow.png"
import quotesIcon from "../assets/img/quotes.png"
import quotesIconBlue from "../assets/img/quotes2.png"
import sliderIcon from "../assets/img/slider.png"
import avatar1 from "../assets/img/avatar1.png"
import avatar2 from "../assets/img/avatar2.png"
import avatar3 from "../assets/img/avatar3.png"

export const TestimonialSection = () => {
    return (
        <section className="w-full h-[994px] bg-white text-black">
            <div className="container mx-auto w-full h-full flex flex-col items-center justify-center">
                <div className="w-full h-[84px] flex flex-col justify-center items-center">
                    <h1 className="text-6xl font-bold">What Our Clients Says</h1>
                    <img className="w-[280px] h-[47px] ml-[450px]" src={titleBg.src} />
                </div>
                <div className="w-full h-[498px] mt-[60px] flex justify-between items-center">
                    <div className="w-[471px] h-[498px] flex flex-col items-center shadow-lg rounded-lg">
                        <div className="w-[391px] h-[223px] mt-[60px] border-b border-secondary-black">
                            <img className="w-[86px] h-[61px]" src={quotesIcon.src} />
                            <p className="mt-[32px]">Whitepate is designed as a collaboration tool <br /> for businesses that is a full project management <br /> solution.</p>
                        </div>
                        <div className="w-[383px] h-[95px] mt-[60px] mb-[60px] flex items-center">
                            <img className="w-[95px] h-[95px] rounded-full" src={avatar1.src} />
                            <div className="w-[246px] h-[80px] ml-[42px] flex flex-col justify-between">
                                <h1 className="font-bold">Oberon Shaw, MCH</h1>
                                <p className="text-sm">Head of Talent Acquisition, North America</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[471px] h-[498px] flex flex-col items-center shadow-lg rounded-lg bg-primary-blue">
                        <div className="w-[391px] h-[223px] mt-[60px] border-b border-secondary-black">
                            <img className="w-[86px] h-[61px]" src={quotesIconBlue.src} />
                            <p className="mt-[32px]">Whitepate is designed as a collaboration tool <br /> for businesses that is a full project management <br /> solution.</p>
                        </div>
                        <div className="w-[383px] h-[95px] mt-[60px] mb-[60px] flex items-center">
                            <img className="w-[95px] h-[95px] rounded-full" src={avatar2.src} />
                            <div className="w-[246px] h-[80px] ml-[42px] flex flex-col justify-between">
                                <h1 className="font-bold">Oberon Shaw, MCH</h1>
                                <p className="text-sm">Head of Talent Acquisition, North America</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[471px] h-[498px] flex flex-col items-center shadow-lg rounded-lg bg-primary-blue ">
                        <div className="w-[391px] h-[223px] mt-[60px] border-b border-secondary-black">
                            <img className="w-[86px] h-[61px]" src={quotesIconBlue.src} />
                            <p className="mt-[32px]">Whitepate is designed as a collaboration tool <br /> for businesses that is a full project management <br /> solution.</p>
                        </div>
                        <div className="w-[383px] h-[95px] mt-[60px] mb-[60px] flex items-center">
                            <img className="w-[95px] h-[95px] rounded-full" src={avatar3.src} />
                            <div className="w-[246px] h-[80px] ml-[42px] flex flex-col justify-between">
                                <h1 className="font-bold">Oberon Shaw, MCH</h1>
                                <p className="text-sm">Head of Talent Acquisition, North America</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[60px] h-[12px] mt-[60px] cursor-pointer">
                    <img src={sliderIcon.src} />
                </div>
            </div>
        </section>
    )
}