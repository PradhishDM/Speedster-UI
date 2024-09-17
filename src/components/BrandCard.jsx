export default function BrandCard({ brandImage, brandName }) {
  return (
    <div className="my-4">
      <div className="w-full max-w-sm bg-white border border-red-200 rounded-lg shadow dark:bg-white  p-4 mb-4 ">
        <a href="none">
          <img src={brandImage} alt="Brands Loading..." />
        </a>
        <div className="px-5 pb-5">
          <a href="none">
            <h5 className="text-sm text-center font-semibold tracking-tight text-gray-900 dark:text-black">
              {brandName}
            </h5>
          </a>
        </div>
      </div>
    </div>
  );
}
