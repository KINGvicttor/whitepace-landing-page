import titleBg from "../assets/img/bg-yellow.png"
import appleLogo from "../assets/img/apple-logo.png"
import windowsLogo from "../assets/img/windows-logo.png"
import slackLogo from "../assets/img/slack-logo.png"
import googleLogo from "../assets/img/google-logo.png"



export const SponsorSection = () => {
    return(
        <section className="w-full h-[538px] flex items-center text-black bg-white"> 
            <div className="container mx-auto w-full h-full flex flex-col">
                <div className="w-full h-[87px] mt-[140px] flex flex-col justify-center items-center">
                    <h1 className="text-6xl font-bold z-10">Our sponsors</h1>
                    <img className="w-[340px] h-[42px] absolute mt-[80px] ml-[70px]" src={titleBg.src} />
                </div>
                <div className="w-full h-[71px] mt-[100px] flex justify-around items-center">
                    <img className="w-[55px] h-[68px]" src={appleLogo.src} />
                    <img className="w-[287px] h-[62px]" src={windowsLogo.src} />
                    <img className="w-[280px] h-[71px]" src={slackLogo.src} />
                    <img className="w-[211px] h-[69px]" src={googleLogo.src} />
                </div>
            </div>
        </section>
    )
}