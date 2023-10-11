const login = () => {
  return (
    <div className="flex my-24 justify-center items-center flex-col">
      <div className="items-center bg-gray-900 w-80 py-4 rounded-3xl">
        <div className="flex flex-col justify-center items-start m-4">
          <input
            type="email"
            className="rounded-sm px-5 h-8 m-3"
            placeholder="Email Address"
          ></input>
          <input
            type="password"
            className="rounded-sm px-5 h-8 m-3"
            placeholder="Password"
          ></input>
        </div>
        <div className=" flex justify-center my-4">
          <a
            href="#"
            className="text-center login login-link py-3 mx-2 rounded-full border-2 bg-black px-6 text-sm w-24 hover:bg-slate-400 hover:text-black hover:border-2 hover:border-[black] font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none active:shadow-lg"
          >
            Login
          </a>
          <a
            href="#"
            className="text-center login login-link py-3 mx-2 rounded-full border-2 bg-black px-6 text-sm w-24 hover:bg-slate-400 hover:text-black hover:border-2 hover:border-[black] font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none active:shadow-lg"
          >
            SignUp
          </a>
        </div>
        <div className="flex justify-center">
        <a className="underline text-xs text-zinc-400" href="#" >
            Forgot Password
        </a>
      </div>
      </div>
      
    </div>
  );
};

export default login;
