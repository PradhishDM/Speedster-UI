export default function ComparisonCard({
  firstBike,
  secondBike,
  firstNickName,
  secondNickName,
  costOfBike1,
  costOfBike2,
  firstBikeImage,
  secondBikeImage,
}) {
  return (
    <div className="m-3">
      <div className="max-w-sm bg-slate-200 border border-gray-200 rounded-xl shadow-xl m-2 pb-0">
        <div className="flex">
          <a href="none">
            <img className="rounded" src={firstBikeImage} alt="" />
          </a>
          <a href="none">
            <img className="rounded" src={secondBikeImage} alt="" />
          </a>
        </div>
        <div className="p-5">
          <div className="flex justify-between">
            <div>
              <a href="none">
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-black">
                  {firstBike}
                </h5>
              </a>
            </div>
            <div className="text-center">
              <a href="none">
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-black mx-3">
                  {secondBike}
                </h5>
              </a>
            </div>
          </div>
          <div className="flex justify-between">
            <p className="mb-3 font-normal text-gray-700">{costOfBike1}</p>
            <p className="mb-3 font-normal text-gray-700  mx-3">
              {costOfBike2}
            </p>
          </div>
          <div className="flex justify-center mt-4">
            <a
              href="none"
              className="inline-flex items-center px-16 py-2 text-md font-medium text-center text-red-500 bg-white rounded-lg dark:hover:bg-red-500  hover:text-white border border-red-700"
            >
              {firstNickName} vs {secondNickName}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
