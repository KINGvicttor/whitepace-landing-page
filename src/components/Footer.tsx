import whitepaceLogo from "../assets/img/whitepace-logo.png"
import rightArrow from "../assets/img/right-arrow-icon.png"

export const Footer = () => {
    return(
        <section className="w-full h-[340px]">
            <div className="container mx-auto w-full h-full">
                <div className="w-full h-[302px] mt-[140px]">
                    <div className="w-full h-[182px] flex justify-between">
                        <div className="w-[205px] h-[169px]">
                            <img src={whitepaceLogo.src} />
                            <p>whitepace was created for <br /> the new ways we live and <br /> work. We make a better <br /> workspace around the world</p>
                        </div>
                        <ul>
                            <li className="font-bold">Products</li>
                            <a href=""><li>Overview</li></a>
                            <a href=""><li>Pricing</li></a>
                            <a href=""><li>Customer histories</li></a>
                        </ul>
                        <ul>
                            <li className="font-bold">Resources</li>
                            <a href=""><li>Blog</li></a>
                            <a href=""><li>Guides & tutorials</li></a>
                            <a href=""><li>Help center</li></a>
                        </ul>
                        <ul>
                            <li className="font-bold">Company</li>
                            <a href=""><li>About us</li></a>
                            <a href=""><li>Careers</li></a>
                            <a href=""><li>Media kit</li></a>
                        </ul>
                        <div className="w-[259px] h-[182px] flex flex-col justify-between">
                            <h1 className="text-2xl font-bold">Try it today</h1>
                            <p className="text-sm">Get started for free. Add your <br /> whole team as your needs grow.</p>
                            <button className="flex justify-center items-center w-[186px] h-[60px] rounded-lg border-primary-blue bg-primary-blue text-white cursor-pointer">
                                <p className="w-[159px] h-[29px]">Start today</p>
                                <img
                                    className="w-[30px] h-[30px]"
                                    src={rightArrow.src} />
                            </button>
                        </div>
                    </div>
                    <div className="w-full h-[20px] mt-[100px] flex justify-between">
                        <div className="w-[737px] h-[20px] flex justify-between">
                            <a href="">English</a>
                            <a href="">Terms & privacy</a>
                            <a href="">Security</a>
                            <a href="">Status</a>
                            <a href="">©2021 Whitepace LLC.</a>
                        </div>
                        <div className="w-[105px] h-[20px]">

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}