export default function CoverUpBackgrounds() {
  return (
    <div className="mt-4">
      <div className="w-full">
        <img src="SAMPLE-BG.png" alt="RE-loading...." />
      </div>
      <div className="bg-red-600 absolute w-full">
        <div className="p-12 ml-32">
          <h2 className="text-3xl font-semibold text-white m-2 p-2 ml-0 pl-0">
            #FindYourTribe
          </h2>
          <div className="w-1/3">
            <p className="text-white mb-10 w-full">
              Considered to be India’s most stylish range of mountain bikes,
              Roadeo is for those who dare to explore uncharted territories and
              take paths that are feared. Be it an early morning ride or an
              adventure trail, Roadeo perfectly complements the bold and
              spirited attitude of today’s teenagers.
            </p>
          </div>
          <a
            href="none"
            className="text-red-700 font-bold border border-white py-3 px-16 my-5 bg-white"
          >
            Explore
          </a>
        </div>
      </div>
      <div className="w-full relative flex justify-end right-48 top-16 ">
        <img src="RE-1.jpg" alt="RE loading...." className="w-1/3 h-96 mb-12" />
      </div>
    </div>
  );
}
