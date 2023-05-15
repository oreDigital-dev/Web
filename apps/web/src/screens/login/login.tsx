/* eslint-disable react/no-unescaped-entities */
import backgroundImage from "../../../assets/loginBg.png";
import Navbar from "../../common/navbar";
import ButtonComp from "./LoginComponents/buttonComp";
import InputComp from "./LoginComponents/inputComp";
const Login = () => {
  const styles = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover", // Optional: this will cover the entire width and height of the div
  };

  return (
    <div className="w-screen h-screen">
      <Navbar />
      <div className="flex">
        <div className="text-white">
          <p className="font-extrabold text-4xl">Login to your account</p>
          <p>
            We aim at making your company develop by maximizing security for
            both employees and the products.
          </p>
        </div>
        <form className="rounded-lg w-[30%] bg-white px-12">
            <p className="font-bold text-xl">Welcome Back!</p>
            <p>Don't have a workspace? <a className="text-[#E4A400]">Request one.</a></p>
            <InputComp title="Company name" inputType="text" />
            <InputComp title="Email address" inputType="email" />
            <InputComp title="Password" inputType="password" />
            <ButtonComp text="Login" />
        </form>
      </div>
    </div>
  );
};

export default Login;
