import exp from "constants";

export default function Downloads() {
  return (
    <nav className="bg-gray-800 p-4 ">
      <div className="flex items-center justify-between">
        <a href="#" className="text-white">
          Home
        </a>

        <div className="relative group">
          <a href="#" className="text-white group">
            Services
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-4 w-4 inline-block"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </a>

          <div className="absolute hidden bg-white mt-2 p-2 space-y-2 rounded-md shadow-lg group-hover:block">
            <a
              href="#"
              className="block text-gray-800 hover:bg-gray-100 px-4 py-2"
            >
              Service 1
            </a>
            <a
              href="#"
              className="block text-gray-800 hover:bg-gray-100 px-4 py-2"
            >
              Service 2
            </a>
          </div>
        </div>

        <a href="#" className="text-white">
          Contact
        </a>
      </div>
    </nav>
  );
}
