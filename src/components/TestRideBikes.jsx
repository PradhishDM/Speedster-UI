export default function TestRideBikes({ bikeName, rate, bikeImage }) {
  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-slate-200 dark:border-gray-700 m-2 p-2">
        <a href="none">
          <img
            className="rounded-t-lg"
            src={bikeImage}
            alt={bikeName}
            style={{ width: "100%", height: "200px", objectFit: "cover" }} // Added width and height
          />
        </a>
        <div className="p-5">
          <a href="none">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
              {bikeName}
            </h5>
          </a>
          <p className="font-normal text-gray-700 dark:text-gray-900">{rate}</p>
          <p className="mb-3 font-normal text-gray-600 dark:text-gray-900">
            Free Cancellation, 100% Instant Refund
          </p>
          <a
            href="none"
            className="inline-flex items-center px-24 py-3 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-teal-700 dark:focus:ring-red-800 mt-4"
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}
