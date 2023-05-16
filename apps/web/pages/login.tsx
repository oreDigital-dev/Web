/* eslint-disable react/no-unescaped-entities */
import backgroundImage from "../assets/loginBg.png";
import ButtonComp from "../src/screens/LoginComponents/buttonComp";
import InputComp from "../src/screens/LoginComponents/inputComp";
const Login = () => {
  const styles = {
    backgroundImage: `url(${backgroundImage.src})`,
    backgroundSize: "cover", // Optional: this will cover the entire width and height of the div
  };

  return (
    <div className=" h-screen w-screen flex px-32" style={styles}>
        <div className="text-white space-y-4 m-auto">
          <p className="font-[800px] text-5xl w-[50%]">Login to your account</p>
          <p className=" w-[65%]">
            We aim at making your company develop by maximizing security for
            both employees and the products.
          </p>
        </div>
        <form className="rounded-lg w-[30%] bg-white px-12 h-[50%] m-auto space-y-4 flex flex-col justify-center content-center">
            <p className="font-semibold text-2xl">Welcome Back!</p>
            <p>Don't have a workspace? <a className="text-[#E4A400]">.</a></p>
            <InputComp title="Company name" inputType="text" />
            <InputComp title="Email address" inputType="email" />
            <InputComp title="Password" inputType="password" />
            <ButtonComp text="Login" />
        </form>
      </div>
  );
};

export default Login;
