import { Link } from "react-router-dom";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";


const Footer = () => {
    return (
        <footer className="bg-[#C2EFD4]">
            <div className="container mx-auto footer md:p-10 p-4 text-base-content grid-cols-2">
                <aside>
                    <Link className=" text-myColor font-Rufina font-bold text-6xl">Rivo</Link>
                    <div className="grid grid-flow-col gap-4 text-2xl">
                        <FiFacebook /> <FiInstagram /> <FiTwitter />
                    </div>
                </aside>
                <nav>
                    <header className="footer-title">Company</header>
                    <Link className="link link-hover">About us</Link>
                    <Link className="link link-hover">Contact</Link>
                    <Link className="link link-hover">Jobs</Link>
                    <Link className="link link-hover">PSupport</Link>
                </nav>
                <nav className="md:pr-10">
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <div className="col-span-2">
                    <header className="footer-title">Stay up to date</header>
                    <fieldset className="form-control">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="join">
                            <input type="text" placeholder="username@site.com" className="input input-bordered join-item" />
                            <button className="btn bg-myColor text-[#fff] hover:bg-myColor join-item">Subscribe</button>
                        </div>
                    </fieldset>
                </div>
            </div>
        </footer>
    );
};

export default Footer;