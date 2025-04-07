import rightArrow from "../assets/img/right-arrow-icon.png"
import appleLogo from "../assets/img/apple-white-logo.png"
import windowsLogo from "../assets/img/windows-white-logo.png"
import androidLogo from "../assets/img/android-white-logo.png"

export const TrialSection = () => {
    return (
        <section className="w-full h-[705px]">
            <div className="container mx-auto w-full h-full flex justify-center items-center">
                <div className="w-[608px] h-[533px] flex flex-col items-center">
                    <div className="w-[608px] h-[262px] flex flex-col justify-center items-center text-center">
                        <h1 className="text-6xl font-bold">Try Whitepace <br /> today</h1>
                        <p className="text-lg mt-[24px]">Get started for free. <br /> Add your whole team as your needs grow.</p>
                    </div>
                    <button className="flex justify-center items-center w-[218px] h-[59px] rounded-lg border-primary-blue bg-primary-blue text-white cursor-pointer">
                        <p className="w-[159px] h-[29px]">Try taskey free</p>
                        <img
                            className="w-[30px] h-[30px]"
                            src={rightArrow.src} />
                    </button>
                    <p className="mt-[40px]">On a big team? Contact sales</p>
                    <div className="w-[260px] h-[60px] mt-[40px] flex justify-between">
                        <img className="w-[60px] h-[60px] cursor-pointer" src={appleLogo.src} />
                        <img className="w-[60px] h-[60px] cursor-pointer" src={windowsLogo.src} />
                        <img className="w-[60px] h-[60px] cursor-pointer" src={androidLogo.src} />
                    </div>
                </div>
            </div>
        </section>
    )
}