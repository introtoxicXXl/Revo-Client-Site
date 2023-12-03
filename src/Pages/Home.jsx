import Banner from "../Components/Banner";
import BestSell from "../Components/BestSell";
import ClothSection from "../Components/ClothSection";
import Exclusive from "../Components/Exclusive";
import FeedBack from "../Components/FeedBack";
import OurProducts from "../Components/OurProducts";


const Home = () => {
    return (
        <div>
            <Banner/>
            <BestSell/>
            <OurProducts/>
            <Exclusive/>
            <ClothSection/>
            <FeedBack/>
        </div>
    );
};

export default Home;