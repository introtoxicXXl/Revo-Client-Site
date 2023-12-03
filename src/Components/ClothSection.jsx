

const ClothSection = () => {
    const cloths = [
        {
            id: 1,
            img: "https://i.ibb.co/80ZYssZ/pexels-monstera-6311613-1-1.png",
            title: "Accessories",
            description: "Complete your ensemble with designer accessories such as handbags, scarves, belts, and hats."
        },
        {
            id: 2,
            img: "https://i.ibb.co/LgrCDK5/pexels-dima-valkov-6211614-1.png",
            title: "Dresses",
            description: "Explore a stunning range of designer dresses, including evening gowns and chic day dresses."
        },
        {
            id: 3,
            img: "https://i.ibb.co/sFLz7ZL/pexels-dima-valkov-6211601-1.png",
            title: "Outerwear",
            description: "Browse luxurious designer coats, jackets, and blazers to stay stylishly warm during colder seasons."
        }
    ]
    return (
        <div className="mt-7 container mx-auto">
            <div className="space-y-4 mb-5">
                <h2 className="font-Roboto font-medium lg:text-5xl md:text-3xl text-2xl text-center text-myColor">Designer Clothes For You</h2>
                <p className="font-Poppins text-myColor font-medium lg:text-xl md:text-lg text-sm text-center">Immerse yourself in the world of luxury fashion with our <br /> meticulously crafted designer clothes!</p>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
                {
                    cloths.map(cloth =>
                        <div key={cloth.id}>
                            <img className="w-full" src={cloth.img} alt="" />
                            <h4 className="text-center font-Poppins font-semibold text-3xl mt-5">{cloth.title}</h4>
                            <p className="text-center font-Poppins">{cloth.description}</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ClothSection;