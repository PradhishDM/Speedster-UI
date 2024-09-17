import TestRideBikes from "./TestRideBikes";

export default function TestRidesSection() {
  return (
    <div>
      <h2 className="text-2xl font-sans font-semibold ml-12 pl-3 p-2">
        Test Rides Available
      </h2>
      <div className="flex justify-center">
        <TestRideBikes
          bikeName="Ola S1 Pro"
          rate="From ₹1.30 Lakhs onwards *"
          bikeImage="ola.jpg"
        />
        <TestRideBikes
          bikeName="Ather 450"
          rate="From ₹1.43 Lakhs onwards *"
          bikeImage="ather.jpg"
        />
        <TestRideBikes
          bikeName="Ola S1 X"
          rate="From ₹74,999 onwards *"
          bikeImage="s1.jpg"
        />
        <TestRideBikes
          bikeName="Revolt RV400"
          rate="From ₹1.24 Lakhs onwards *"
          bikeImage="revolt.jpg"
        />
      </div>
    </div>
  );
}
