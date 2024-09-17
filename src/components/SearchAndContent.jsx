export default function SearchAndContent() {
  return (
    <div className="flex mt-3">
      <div className="absolute left-20 top-52 ">
        <div className="w-96 max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8  dark:border-gray-700">
          <form className="space-y-6" action="#">
            <h5 className="text-3xl font-medium text-gray-900 dark:text-black text-center">
              Search the Right Bike
            </h5>

            <div className="flex justify-center">
              <button className="text-black bg-white border p-3 px-5 rounded-md hover:bg-black hover:text-white">
                New Bikes
              </button>
              <button className="text-black border p-3 px-5 bg-white rounded-md hover:bg-black hover:text-white ml-4">
                Used Bikes
              </button>
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                Brand
              </label>
              <select
                class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
              >
                <option disabled>Brand</option>
                <option>New Mexico</option>
                <option>Missouri</option>
                <option>Texas</option>
              </select>
            </div>
            <div>
              <label
                for="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Vehicle Type
              </label>
              <select
                class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
              >
                <option value="" disabled>
                  Type
                </option>
                <option>Scooty</option>
                <option>Sports Bike</option>
                <option>Good Mileage</option>
              </select>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="w-36  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Show this
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* ------------Content----------- */}
      <div className="">
        <img src="carousel-like.jpg" alt="Loading.." className="rounded" />
      </div>
    </div>
  );
}
