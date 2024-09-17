export default function Enquiry() {
  return (
    <div className="bg-red-600 mt-4 w-full h-64">
      <div className="flex justify-around p-20">
        <div className="">
          <h2 className="text-4xl font-sans font-semibold text-white">
            Talk to our Bike Expert
          </h2>
        </div>
        <div>
          <h2 className="text-lg text-white mb-12 mt-3">
            Need further help regarding your bike? <br />
            Talk to our bike expert here!
          </h2>
          <a
            href="none"
            className="border border-black bg-black text-white py-2 px-8"
          >
            Request Call back
          </a>
        </div>
      </div>
    </div>
  );
}
