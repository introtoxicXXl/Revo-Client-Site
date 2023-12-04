import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useState } from "react";
import useAuth from "../Hook/hook";
import Swal from "sweetalert2";
import SocialUser from "../Components/SocialUser";


const Registration = () => {
    const { handleSignIn, updateUser } = useAuth();
    const [check, setCheck] = useState(false)
    const location = useLocation();
    const navigate = useNavigate();

    const handleRegistration = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const url = e.target.url.value;
        const email = e.target.email.value;
        const password = e.target.password.value;


        if (password.length < 6) {
            Swal.fire({
                icon: "error",
                title: 'Password Must Be 6 Character',
                text: "Something went wrong!"
              });
            return;
        }

        if (!/[A-Z]/.test(password)) {
            Swal.fire({
                icon: "error",
                title: 'Password Must Be Minimum 1 Capital Letter',
                text: "Something went wrong!"
              });
            return;
        }
        if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
            Swal.fire({
                icon: "error",
                title: 'Password Must Be 1 Special Character',
                text: "Something went wrong!"
              });
            return;
        }


        handleSignIn(email, password)
            .then(res => {
                Swal.fire({
                    icon: "success",
                    title: `Welcome to Donaty ${name}`
                  });
                navigate(location?.state ? location.state : '/')
            })
            .catch(err => {
                Swal.fire({
                    icon: "error",
                    title: `${err.message}`,
                    text: "Something went wrong!"
                  });
            })
        updateUser(name, url)
            .then(() => {

            })
            .catch(err => {
                Swal.fire({
                    icon: "error",
                    title: `${err.message}`,
                    text: "Something went wrong!"
                  });
            })
    }



    return (
        <div className="hero min-h-screen">
            <Helmet><title>Registration</title></Helmet>
            <div className="card">
                <div className="card-body shrink-0 w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleRegistration} className="">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input
                                type="url"
                                name="url"
                                placeholder="Photo Url"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className=" relative">
                                <input
                                    type={check ? "text" : "password"}
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered "
                                    required
                                />
                                <span className="absolute top-1/3 right-3 cursor-pointer" onClick={() => setCheck(!check)}>{check ? <IoEyeOff /> : <IoEye />}</span>
                            </div>
                            <label className="label">
                                <a className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn bg-myColor hover:bg-myColor text-[#fff]">Registration</button>
                        </div>
                        <p className="mt-3 text-sm text-center">Already have an account? <Link to='/login' className="hover:underline text-info">Login</Link></p>
                    </form>
                    <SocialUser></SocialUser>
                </div>
            </div>
        </div>
    );
};

export default Registration;