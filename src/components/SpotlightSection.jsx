import Varities from "./Varities";

export default function SpotlightSection() {
  return (
    <div className="mt-3">
      <h2 className="text-2xl font-bold font-sans mx-7"> Bikes in Spotlight</h2>
      <div className="flex justify-center">
        <Varities
          model=" TVS Scooty"
          cost=" ₹60,500 - ₹75000"
          image="scooty.jpg"
        />
        <Varities
          model="KTM Duke"
          cost="₹ 1,60,000 - ₹3,75,000"
          image="duke.jpg"
        />
        <Varities
          model="Bajaj Pulsar"
          cost="₹1,20,000 - ₹2,50,000"
          image="pulsar.jpg"
        />
        <Varities
          model="Suzuki Access"
          cost="₹70,000 - ₹90,000"
          image="access.jpg"
        />
      </div>
    </div>
  );
}
