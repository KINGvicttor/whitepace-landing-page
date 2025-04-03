import titleBg from "../assets/img/bg-yellow.png"
import listIcon from "../assets/img/list-icon.png"
import listIconYellow from "../assets/img/list-icon-yellow.png"

export const PlanSection = () => {
    return (
        <section className="w-full h-[1272px] bg-white text-black">
            <div className="container mx-auto flex flex-col justify-center h-full">
                <div className="w-full h-[171px] flex flex-col items-center justify-center">
                    <div className="w-full h-[87px] flex flex-col items-center">
                        <h1 className="text-6xl font-bold">Choose Your Plan</h1>
                        <img className="w-[350px] h-[30px] absolute ml-50 mt-14" src={titleBg.src} />
                    </div>
                    <div className="w-[979px] h-[60px] mt-[24px]">
                        <p className="text-lg text-center">Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has <br /> the right plan for you.</p>
                    </div>
                </div>
                <div className="w-full h-[761px] mt-[60px] flex items-center justify-between">
                    <div className="w-[472px] h-[634px] flex flex-col items-center border border-secondary-yellow rounded-lg">
                        <div className="w-[384px] h-[153px] mt-[40px]">
                            <p className="text-lg">Free</p>
                            <h1 className="text-4xl font-bold mt-[25px]">$0</h1>
                            <p className="mt-[25px]">Capture ideas and find them quickly</p>
                        </div>
                        <div className="w-[384px] h-[300px] mt-[25px]">
                            <ul className="w-full h-full">
                                <li className="text-sm flex"><img className="w-[18px] h-[18px] mr-2" src={listIcon.src} /> Sync unlimited devices</li>
                                <li className="mt-[28px] text-sm flex"><img className="w-[18px] h-[18px] mr-2" src={listIcon.src} /> 10 GB monthly uploads</li>
                                <li className="mt-[28px] text-sm flex"><img className="w-[18px] h-[18px] mr-2" src={listIcon.src} /> 200 MB max. note size</li>
                                <li className="mt-[28px] text-sm flex"><img className="w-[18px] h-[18px] mr-2" src={listIcon.src} /> Customize Home dashboard and access extra widgets</li>
                                <li className="mt-[28px] text-sm flex"><img className="w-[18px] h-[18px] mr-2" src={listIcon.src} /> Connect primary Google Calendar account</li>
                                <li className="mt-[28px] text-sm flex"><img className="w-[18px] h-[18px] mr-2" src={listIcon.src} /> Add due dates, reminders, and notifications to your tasks</li>
                            </ul>
                        </div>
                        <div className="w-[384px] h-[51px] mt-[25px]">
                            <button className="w-[166px] h-[51px] rounded-lg border border-secondary-yellow cursor-pointer">Get started</button>
                        </div>
                    </div>
                    <div className="w-[472px] h-[761px] flex flex-col items-center bg-primary-darkblue text-white rounded-lg">
                        <div className="w-[384px] h-[153px] mt-[80px]">
                            <p className="text-lg">Personal</p>
                            <h1 className="text-4xl font-bold mt-[25px] text-secondary-yellow">$11.99</h1>
                            <p className="mt-[25px]">Capture ideas and find them quickly</p>
                        </div>
                        <div className="w-[384px] h-[347px] mt-[25px]">
                            <ul className="w-full h-full">
                                <li className="text-sm flex"><img className="w-[18px] h-[18px] mr-2" src={listIconYellow.src} /> Sync unlimited devices</li>
                                <li className="mt-[28px] text-sm flex"><img className="w-[18px] h-[18px] mr-2" src={listIconYellow.src} /> 10 GB monthly uploads</li>
                                <li className="mt-[28px] text-sm flex"><img className="w-[18px] h-[18px] mr-2" src={listIconYellow.src} /> 200 MB max. note size</li>
                                <li className="mt-[28px] text-sm flex"><img className="w-[18px] h-[18px] mr-2" src={listIconYellow.src} /> Customize Home dashboard and access extra widgets</li>
                                <li className="mt-[28px] text-sm flex"><img className="w-[18px] h-[18px] mr-2" src={listIconYellow.src} /> Connect primary Google Calendar account</li>
                                <li className="mt-[28px] text-sm flex"><img className="w-[18px] h-[18px] mr-2" src={listIconYellow.src} /> Add due dates, reminders, and notifications to your tasks</li>
                            </ul>
                        </div>
                        <div className="w-[384px] h-[51px] mt-[25px]">
                            <button className="w-[166px] h-[51px] rounded-lg bg-primary-blue cursor-pointer">Get started</button>
                        </div>
                    </div>
                    <div className="w-[472px] h-[634px] flex flex-col items-center border border-secondary-yellow rounded-lg">
                        <div className="w-[384px] h-[153px] mt-[40px]">
                            <p className="text-lg">Organization</p>
                            <h1 className="text-4xl font-bold mt-[25px]">$49.99</h1>
                            <p className="mt-[25px]">Capture ideas and find them quickly</p>
                        </div>
                        <div className="w-[384px] h-[300px] mt-[25px]">
                            <ul className="w-full h-full">
                                <li className="text-sm flex"><img className="w-[18px] h-[18px] mr-2" src={listIcon.src} /> Sync unlimited devices</li>
                                <li className="mt-[28px] text-sm flex"><img className="w-[18px] h-[18px] mr-2" src={listIcon.src} /> 10 GB monthly uploads</li>
                                <li className="mt-[28px] text-sm flex"><img className="w-[18px] h-[18px] mr-2" src={listIcon.src} /> 200 MB max. note size</li>
                                <li className="mt-[28px] text-sm flex"><img className="w-[18px] h-[18px] mr-2" src={listIcon.src} /> Customize Home dashboard and access extra widgets</li>
                                <li className="mt-[28px] text-sm flex"><img className="w-[18px] h-[18px] mr-2" src={listIcon.src} /> Connect primary Google Calendar account</li>
                                <li className="mt-[28px] text-sm flex"><img className="w-[18px] h-[18px] mr-2" src={listIcon.src} /> Add due dates, reminders, and notifications to your tasks</li>
                            </ul>
                        </div>
                        <div className="w-[384px] h-[51px] mt-[25px]">
                            <button className="w-[166px] h-[51px] rounded-lg border border-secondary-yellow cursor-pointer">Get started</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}