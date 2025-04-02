import logo from "../assets/img/whitepace-logo.png"
import downArrow from "../assets/img/down-arrow.png"
import rightArrow from "../assets/img/right-arrow-icon.png"

export const Header = () => {

    return (
        <header className="w-full h-[92px] flex justify-center">
            <div className="container mx-auto flex justify-between items-center">
                <div className="w-[191px] h-[34px]">
                    <img
                        src={logo.src}
                        alt="whitepace logo" />
                </div>
                <div className="w-[988px] h-[60px] flex items-center">
                    <nav className="w-[551px] h-[24px]">
                        <ul className="flex">
                            <li className="w-[117px] h-[24px] flex">
                                <p className="w-[78px] h-[23px]">Products</p>
                                <img
                                    className="w-[29px] h-[24px] hover:cursor-pointer"
                                    src={downArrow.src} />
                            </li>
                            <li className="w-[117px] h-[24px] flex">
                                <p className="w-[78px] h-[23px]">Solutions</p>
                                <img
                                    className="w-[29px] h-[24px] hover:cursor-pointer"
                                    src={downArrow.src} />
                            </li>
                            <li className="w-[117px] h-[24px] flex">
                                <p className="w-[78px] h-[23px]">Resources</p>
                                <img
                                    className="w-[29px] h-[24px] hover:cursor-pointer"
                                    src={downArrow.src} />
                            </li>
                            <li className="w-[117px] h-[24px] flex">
                                <p className="w-[78px] h-[23px]">Pricing</p>
                                <img
                                    className="w-[29px] h-[24px] hover:cursor-pointer"
                                    src={downArrow.src} />
                            </li>
                        </ul>
                    </nav>
                    <div className="w-full h-[60px] flex items-center justify-end">
                        <button className="flex justify-center items-center w-[126px] h-[60px] rounded-lg border-secondary-yellow bg-secondary-yellow text-primary-darkblue cursor-pointer">
                            <p className="w-[46px] h-[23px]">Login</p>
                        </button>
                        <button className="flex justify-center items-center w-[227px]  h-[60px] ml-4 rounded-lg border-primary-blue bg-primary-blue text-white cursor-pointer">
                            <p className="w-[159px] h-[29px]">Try whitepace free</p>
                            <img
                                className="w-[30px] h-[30px]"
                                src={rightArrow.src} />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}