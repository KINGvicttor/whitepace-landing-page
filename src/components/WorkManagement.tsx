import rightArrow from "../assets/img/right-arrow-icon.png"
import logoIcon from "../assets/img/whitepace-logo-icon.png"

export const WorkManagement = () => {
    return (
        <section className="bg-white w-full h-[1588px] text-black">
            <div className="container mx-auto h-full flex flex-col justify-center">
                <div className="w-full h-[547px] flex items-center justify-between">
                    <div className="w-[672px] h-[411] flex flex-col justify-center">
                        <div className="w-[656px] h-[154px]">
                            <h1 className="text-6xl font-bold">Project <br /> Management</h1>
                        </div>
                        <div className="w-[656px] h-[60px]">
                            <p className="text-lg">Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.</p>
                        </div>
                        <button className="flex justify-center items-center w-[201px] mt-10 h-[63px] rounded-lg border-primary-blue bg-primary-blue text-white cursor-pointer">
                            <p className="w-[159px] h-[29px]">Get started</p>
                            <img
                                className="w-[30px] h-[30px]"
                                src={rightArrow.src} />
                        </button>
                    </div>
                    <div className="w-[748px] h-[547px] bg-secondary-blue rounded-lg">

                    </div>
                </div>
                <div className="w-full h-[661px] mt-[100px] flex justify-between items-center">
                    <div className="flex justify-center items-center w-[710px] h-[661px]">
                        <div className="w-[661px] h-[661px] flex justify-center items-center rounded-full border-2 border-dashed rotate-45 border-secondary-blue">
                            <div className="w-[70px] h-[70px] mt-[100%] absolute rounded-full bg-yellow-500"></div>
                            <div className="w-[70px] h-[70px] mb-[100%] absolute rounded-full bg-blue-500"></div>
                            <div className="w-[70px] h-[70px] ml-[100%] absolute rounded-full bg-green-500"></div>
                            <div className="w-[70px] h-[70px] mr-[100%] absolute rounded-full bg-red-500"></div>
                        </div>
                        <div className="w-[387px] h-[387px] flex justify-center items-center absolute rounded-full border-2 border-dashed border-secondary-blue">
                            <div className="w-[70px] h-[70px] mt-[100%] absolute rounded-full bg-yellow-500"></div>
                            <div className="w-[70px] h-[70px] mb-[100%] absolute rounded-full bg-blue-500"></div>
                            <div className="w-[70px] h-[70px] ml-[100%] absolute rounded-full bg-green-500"></div>
                            <div className="w-[70px] h-[70px] mr-[100%] absolute rounded-full bg-red-500"></div>
                        </div>
                        <div className="w-[100px] h-[100px] absolute">
                            <img src={logoIcon.src} alt="whitepace logo" />
                        </div>
                    </div>
                    <div className="w-[670px] h-[294px] flex flex-col justify-center">
                        <div className="w-[670px] h-[87px]">
                            <h1 className="text-6xl font-bold">Work together</h1>
                        </div>
                        <div className="w-[670px] h-[60px]">
                            <p className="text-lg">With whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.</p>
                        </div>
                        <button className="flex justify-center items-center w-[201px] mt-[60px] h-[63px] rounded-lg border-primary-blue bg-primary-blue text-white cursor-pointer">
                            <p className="w-[159px] h-[29px]">Try it now</p>
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