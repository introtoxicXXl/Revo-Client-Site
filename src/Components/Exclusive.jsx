import CountDown from "./CountDown";


const Exclusive = () => {
    return (
        <div className="container mx-auto mt-10">
            <div className="w-11/12 mx-auto bg-[#C2EFD4] px-8 flex justify-between items-center rounded-2xl md:flex-row flex-col">
                <div className="basis-1/2">
                    <img src="https://i.ibb.co/31YnQ2p/excited-white-girl-bright-stylish-glasses-posing-pink-dreamy-curly-woman-playing-with-her-ginger-hai.png" alt="" />
                </div>
                <div className="basis-1/2 space-y-3 md:my-0 my-5">
                    <h2 className="font-Roboto text-myColor font-bold md:text-4xl text-2xl">Exclusive Offer</h2>
                    <p className="text-myColor font-Poppins md:text-xl text-sm">Unlock the ultimate style upgrade with our exclusive offer Enjoy savings of up to 40% off on our latest New Arrivals</p>
                    <CountDown/>
                    <button className="px-7 rounded border-myColor hover:bg-myColor hover:text-[#fff] transition-all hover:shadow-xl btn bg-transparent hover:border-none text-myColor my-8 py-2 border-2 flex items-center">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Exclusive;