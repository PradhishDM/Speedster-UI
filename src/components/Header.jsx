import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [isModal, setIsModal] = useState(false);

  function handleModal() {
    setIsModal(!isModal);
  }

  function handleModalClose() {
    setIsModal(false);
  }

  function handleCloseModal() {
    setIsModal(false);
  }

  return (
    <>
      <nav className="bg-red-500 h-20">
        <div className="flex">
          <img src="bike-logo.jpg" alt="Bike-logo" className="h-20 w-20" />
          <h3 className="font-bold font-sans italic mt-6 ml-0 text-2xl text-black ">
            Speedster
          </h3>
          <div className="ml-72 flex items-center">
            <input type="text" className="m-6  w-96 rounded p-2" />
            <button className="btn bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-6 m-6 ml-0 rounded">
              Search
            </button>
            <div>
              <button className="text-lg ml-48 text-black hover:text-black font-serif font-medium">
                ❤️Wishlist
              </button>
            </div>
          </div>
          <div className="m-7 ml-12">
            {/* <button className="text-lg font-serif mt-1 text-black hover:text-black font-medium"> */}
            <button
              data-modal-target="authentication-modal"
              data-modal-toggle="authentication-modal"
              className="text-lg font-serif mt-1 text-white hover:text-black font-medium"
              type="button"
              onClick={handleModal}
            >
              Login/Register
            </button>
          </div>
          {/* Modal content */}
          {isModal && (
            <div
              id="authentication-modal"
              tabindex="-1"
              aria-hidden="true"
              className=" flex fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full backdrop-blur"
            >
              <div className="relative  w-full max-w-md max-h-full p-1">
                {/* <!-- Modal content --> */}
                <div className="relative bg-white rounded-lg shadow dark:bg-slate-200">
                  {/* <!-- Modal header --> */}
                  <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-black">
                      Sign in to our platform
                    </h3>
                    <button
                      type="button"
                      onClick={handleModalClose}
                      className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-black"
                      data-modal-hide="authentication-modal"
                    >
                      <svg
                        className="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                      <span className="sr-only">Close modal</span>
                    </button>
                  </div>
                  {/* <!-- Modal body --> */}
                  <div className="p-4 md:p-5">
                    <form className="space-y-4" action="#">
                      <div>
                        <label
                          for="email"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-black"
                          placeholder="name@company.com"
                          required
                        />
                      </div>
                      <div>
                        <label
                          for="password"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          id="password"
                          placeholder="••••••••"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-black"
                          required
                        />
                      </div>
                      <div className="flex justify-end">
                        <a
                          href="none"
                          className="text-sm text-blue-700 hover:underline dark:text-blue-500"
                        >
                          Lost Password?
                        </a>
                      </div>
                      <button
                        type="submit"
                        className="w-full text-black bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Login to your account
                      </button>
                      <div className="text-sm font-medium text-gray-500 dark:text-gray-700">
                        Not registered?{" "}
                        <NavLink
                          to="/creating-account"
                          className="text-blue-700 hover:underline dark:text-blue-500"
                          onClick={handleCloseModal}
                        >
                          Create account
                        </NavLink>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
