import BrandCard from "./BrandCard";

export default function PopularBrands() {
  return (
    <div className="m-16  border border-gray-400 shadow-xl bg-slate-50">
      <div>
        <h2 className="text-2xl font-semibold font-sans mt-2 mb-3 mx-4">
          Popular Brands
        </h2>
        <hr class="h-px bg-gray-300 border-0 shadow shadow-gray-400 mb-4" />
      </div>
      <div className="flex justify-center space-x-3">
        <BrandCard brandImage="tvs.jpg" brandName="TVS" />
        <BrandCard brandImage="bajaj.jpg" brandName="Bajaj" />
        <BrandCard brandImage="royal-enfield.jpg" brandName="Royal Enfield" />
        <BrandCard brandImage="yamaha.jpg" brandName="Yamaha" />
        <BrandCard brandImage="honda.jpg" brandName="Honda" />
        <BrandCard brandImage="hero.jpg" brandName="Hero" />
      </div>
    </div>
  );
}
