export default function ReviewCard({
  profilePicture,
  customerName,
  occupation,
  customerReview,
}) {
  return (
    <div>
      <div className=" max-w-sm bg-white border-gray-200 rounded-lg shadow dark:border-gray-700 p-2 m-2 ">
        <div className="flex flex-col items-center pb-10">
          <img
            className="w-24 h-24 mb-3 rounded-full shadow-lg"
            src={profilePicture}
            alt="Profile Loading"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900">
            {customerName}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-900f">
            {occupation}
          </span>
          <div className="flex mt-4 md:mt-6">
            <p className="font-medium">{customerReview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
