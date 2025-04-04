import titleBg from "../assets/img/bg-yellow.png"
import rightArrow from "../assets/img/right-arrow-icon.png"
import padlockIcon from "../assets/img/padlock.png"
import keyIcon from "../assets/img/key.png"
import dbIcon from "../assets/img/database.png"
import whitepaceIcon from "../assets/img/whitepace-logo-icon.png"
import protectionIcon from "../assets/img/protection.png"

export const YourDataSection = () => {
    return (
        <section className="w-full h-[661px] bg-white text-black">
            <div className="container mx-auto w-full h-full flex justify-between items-center">
                <div className="w-[800px] h-[324px]">
                    <div className="w-full h-[201px]">
                        <h1 className="text-6xl font-bold">100% your data</h1>
                        <img className="w-[370px] h-[36px] absolute ml-24" src={titleBg.src} />
                        <p className="text-lg mt-[24px]">The app is open source and your notes are saved to an open format, so you'll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them.</p>
                    </div>
                    <div className="w-[197px] h-[63px] mt-[60px]">
                        <button className="flex justify-center items-center w-[197px] h-[63px] rounded-lg border-primary-blue bg-primary-blue text-white cursor-pointer">
                            <p className="w-[159px] h-[29px]">Read more</p>
                            <img
                                className="w-[30px] h-[30px]"
                                src={rightArrow.src} />
                        </button>
                    </div>
                </div>
                <div className="w-[681px] h-[381px] flex justify-center items-center">
                    <div className="w-[680px] h-[340px] absolute flex flex-col overflow-hidden justify-center items-center rounded-t-full border-3 border-dashed  border-primary-blue">
                        <div className="w-[500px] h-[290px] absolute flex items-center justify-center mb-[345px] mr-[155px] border-3 border-t-transparent border-l-transparent rotate-45 border-dashed border-primary-blue">a</div>  
                    </div>
                    <div className="w-[136px] h-[136px] absolute mt-[340px] rounded-lg border-3 border-dashed  border-primary-blue">
                        <img src={whitepaceIcon.src} />
                    </div>
                    <div className="w-[26px] h-[26px] mt-[340px] ml-[400px] absolute bg-primary-blue rounded-full"></div>
                    <div className="w-[26px] h-[26px] mt-[0px] mr-[215px] absolute bg-primary-blue rounded-full"></div>
                    <div className="w-[26px] h-[26px] mt-[-335px] mr-[10px] absolute bg-primary-blue rounded-full"></div>
                    <div className="w-[81px] h-[81px] mt-[340px] mr-[-680px] flex justify-center items-center absolute shadow-lg rounded-lg bg-white">
                        <img className="w-[48px] h-[48px]" src={padlockIcon.src} />
                    </div>
                    <div className="w-[81px] h-[81px] mt-[340px] ml-[-680px] flex justify-center items-center absolute shadow-lg rounded-lg bg-white">
                        <img className="w-[48px] h-[48px]" src={protectionIcon.src} />
                    </div>
                    <div className="w-[81px] h-[81px] mt-[-230px] mr-[-410px] flex justify-center items-center absolute shadow-lg rounded-lg bg-white">
                        <img className="w-[48px] h-[48px]" src={dbIcon.src} />
                    </div>
                    <div className="w-[81px] h-[81px] mt-[-230px] ml-[-410px] flex justify-center items-center absolute shadow-lg rounded-lg bg-white">
                        <img className="w-[48px] h-[48px]" src={keyIcon.src} />
                    </div>
                </div>
            </div>
        </section>
    )
}