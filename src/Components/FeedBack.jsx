

const FeedBack = () => {
    const feedBacks = [
        {
            id: 1,
            name: "Emily Wilson",
            feedBack: "The customer experience was exceptional from start to finish. The website is user-friendly, the checkout process was smooth, and the clothes I ordered fit perfectly. I'm beyond satisfied!"
        },
        {
            id: 2,
            name: "Sarah Thompson",
            feedBack: "I absolutely love the quality and style of the clothing I purchased from this website. customer service was outstanding, and I received my order quickly. Highly recommended!"
        },
        {
            id: 3,
            name: "Olivia Martinez",
            feedBack: "I had a great experience shopping on this website. The clothes I bought are fashionable and comfortable. Highly satisfied!"
        },
    ]
    return (
        <div className="container mx-auto my-10">
            <div>
                <h4 className="text-myColor font-medium font-Roboto text-5xl text-center">Feedback Corner</h4>
            </div>
            <div className="grid md:grid-cols-3 gap-4 mt-5">
                {
                    feedBacks.map(feedBack => 
                    <div className="space-y-4 border-2 border-gray-200 cursor-pointer hover:bg-[#C2EFD4] hover:border-myColor transition-all duration-200 px-6 py-4 rounded-lg md:mx-0 mx-3" key={feedBack.id}>
                        <h1 className="text-myColor font-bold text-6xl font-Poppins">&rdquo;</h1>
                        <h2 className="text-myColor font-Roboto lg:text-2xl text-xl font-medium">{feedBack.name}</h2>
                        <p className="text-sm">{feedBack.feedBack}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default FeedBack;