

const Banner = () => {
    return (
        <div className="bg-[#C2EFD4] pt-5 pb-7">
            <div className="flex justify-between items-center container mx-auto md:flex-row flex-col-reverse">
                <div className="basis-1/2">
                    <h2 className="lg:text-7xl md:text-5xl text-4xl md:mt-0 mt-5 font-bold text-[#224F34] font-Rufina">Life Is Not Perfect But Outfit Can Be!!</h2>
                    <p className="lg:text-2xl text-lg text-[#224F34] mt-5 font-medium">Explore our curated collection of stylish clothing and accessories tailored to your unique taste.</p>
                    <button className="btn bg-[#224F34] text-[#fff] hover:bg-[#173624] hover:shadow-xl mt-5">Explore More</button>
                </div>
                <div className="basis-1/2 flex justify-end items-center lg:pr-10">
                    <div className="lg:w-3/5">
                        <img src="https://i.ibb.co/YRZHJwG/Untitled-design.jpg" className="w-full rounded-lg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;