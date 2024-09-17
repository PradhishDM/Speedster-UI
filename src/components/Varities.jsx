export default function Varities({ model, cost, image }) {
  return (
    <div className="my-2 mx-3">
      <div class="w-full max-w-sm bg-green-100 border border-gray-200 rounded-lg shadow text-black dark:border-gray-700">
        <a href="none">
          <img className="p-8  rounded-2xl" src={image} alt="Hello" />
        </a>
        <div class="px-5 pb-5">
          <a href="none">
            <h5 class="text-2xl font-semibold tracking-tight text-gray-900 dark:text-black">
              {model}
            </h5>
          </a>

          <div class="flex items-center justify-between">
            <span class="text-sm font-bold text-gray-900 dark:text-black">
              {cost}
            </span>
            <a
              href="hello"
              className="text-red-500 bg-white hover:text-white hover:bg-red-500 border border-red-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Add to Cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
