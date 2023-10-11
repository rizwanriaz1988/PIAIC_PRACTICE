import Link from "next/dist/client/link";

const ButtonSample2 = () => {
  return (
    <div className="wrapper flex flex-col bg-gray-900 h-screen px-3 items-center justify-around rounded-3xl">
      <div className="">
        <input
          type="email"
          className="rounded-sm px-5 h-8"
          placeholder="Email Address"
        ></input>
        <button
          type="submit"
          className="text-center  login login-link py-2 my-2 rounded-sm  bg-black px-3 text-sm hover:bg-slate-400 hover:text-black  hover:border-[black] font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none active:shadow-lg"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};
export default ButtonSample2;
