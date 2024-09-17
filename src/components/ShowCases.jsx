export default function ShowCases() {
  return (
    <div className="mt-6">
      <hr className="m-4 h-px bg-gray-400 border-0 shadow shadow-gray-400" />
      <div className="flex  justify-center my-14">
        <div className="flex mx-20">
          <svg
            class="h-16 w-16 text-gray-900"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
            />
          </svg>
          <div className="mx-1">
            <h2 className="text-2xl font-semibold font-sans">India's #1</h2>
            <h2 className="font-light">Largest Auto Portal</h2>
          </div>
        </div>

        <div className="flex mx-20">
          <svg
            class="h-16 w-16 text-gray-900"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            {" "}
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <circle cx="5" cy="18" r="3" /> <circle cx="19" cy="18" r="3" />{" "}
            <polyline points="12 19 12 15 9 12 14 8 16 11 19 11" />{" "}
            <circle cx="17" cy="5" r="1" />
          </svg>
          <div className="mx-1">
            <h2 className="text-2xl font-semibold font-sans">Bike Sold</h2>
            <h2 className="font-light">Every 4 minutes</h2>
          </div>
        </div>

        <div className="flex mx-20">
          <svg
            class="h-16 w-16 text-gray-900"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            {" "}
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <line x1="9" y1="15" x2="15" y2="9" />{" "}
            <circle cx="9.5" cy="9.5" r=".5" fill="currentColor" />{" "}
            <circle cx="14.5" cy="14.5" r=".5" fill="currentColor" />{" "}
            <path d="M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7a2.2 2.2 0 0 0 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1a2.2 2.2 0 0 0 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55 v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55 v-1" />
          </svg>
          <div className="mx-1">
            <h2 className="text-2xl font-semibold font-sans">Offers</h2>
            <h2 className="font-light">Stay Updated Pay less</h2>
          </div>
        </div>

        <div className="flex mx-20">
          <svg
            class="h-16 w-16 text-gray-900"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            {" "}
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <circle cx="6" cy="6" r="2" /> <circle cx="18" cy="18" r="2" />{" "}
            <path d="M11 6h5a2 2 0 0 1 2 2v8" />{" "}
            <polyline points="14 9 11 6 14 3" />{" "}
            <path d="M13 18h-5a2 2 0 0 1 -2 -2v-8" />{" "}
            <polyline points="10 15 13 18 10 21" />
          </svg>
          <div className="mx-1">
            <h2 className="text-2xl font-semibold font-sans">Compare</h2>
            <h2 className="font-light">Decode the right Bike</h2>
          </div>
        </div>
      </div>

      <hr className="m-2 h-px my-12 bg-gray-400 border-0 shadow shadow-gray-400" />
    </div>
  );
}
