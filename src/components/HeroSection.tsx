import rightArrow from "../assets/img/right-arrow-icon.png"

export const HeroSection = () => {
    return (
        <section className="flex justify-center w-full">
            <div className="container mx-auto flex items-center w-full h-[calc(100vh-92px)]">
                <div className="flex items-center w-full h-[547px]">
                    <div className="flex items-center w-full h-[361px]">
                        <div className="w-full h-[238px]">
                            <div className="w-[656px] h-[154px]">
                                <h1 className="text-6xl font-bold">Get More Done with whitepace</h1>
                            </div>
                            <div className="w-[656px] h-[60px]">
                                <p>Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
                            </div>
                            <button className="flex justify-center items-center w-[219px] mt-10 h-[63px] rounded-lg border-primary-blue bg-primary-blue text-white cursor-pointer">
                                <p className="w-[159px] h-[29px]">Try whitepace free</p>
                                <img
                                    className="w-[30px] h-[30px]"
                                    src={rightArrow.src} />
                            </button>
                        </div>
                        <div className="w-full h-[549px] bg-primary-blue rounded-lg">
                                     
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}