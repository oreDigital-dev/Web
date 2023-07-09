/* eslint-disable react/no-unescaped-entities */
import backgroundImage from "../assets/loginBg.png";
import InputComp from "../src/screens/LoginComponents/inputComp";
import SmallBtnR from "../src/screens/LoginComponents/smallBtnR";
const Login = () => {
  const styles = {
    backgroundImage: `url(${backgroundImage.src})`,
    backgroundSize: "cover", // Optional: this will cover the entire width and height of the div
  };

  return (
    <div className=" h-screen w-screen flex flex-col md:flex-row items-center justify-center content-center" style={styles}>
        <div className="text-white space-y-4 m-auto">
          <p className="font-[800px] text-5xl w-[50%]">Login to your account</p>
          <p className=" w-[65%]">
            We aim at making your company develop by maximizing security for
            both employees and the products.
          </p>
        </div>
        <form className="rounded-lg w-[30%] bg-white px-12 h-[50%] m-auto space-y-4 flex flex-col justify-center content-center  p-10">
            <p className="font-semibold text-2xl">Welcome Back!</p>
            <p>Don't have a workspace? <a className="text-[#E4A400]">.</a></p>
            <InputComp title="Company name" inputType="text" />
            <InputComp title="Email address" inputType="email" />
            <InputComp title="Password" inputType="password" />
            <SmallBtnR text="Login" route="/" />
        </form>
      </div>
  );
};

export default Login;
