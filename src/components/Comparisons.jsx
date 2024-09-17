import ComparisonCard from "./ComparisonCard";

export default function Comparisons() {
  return (
    <div className="mx-16">
      <div>
        <h2 className="text-2xl font-sans font-semibold">
          Popular Comparisons
        </h2>
      </div>
      <div className="flex justify-center">
        <ComparisonCard
          firstBike="RE Hunter-350"
          secondBike="RE Meteor-350"
          firstNickName="Hunter"
          secondNickName="Meteor"
          costOfBike1="₹1.50 - ₹1.75 Lakhs"
          costOfBike2="₹2.05 - ₹2.50 Lakhs"
          firstBikeImage="hunter.jpg"
          secondBikeImage="meteor.jpg"
        />
        <ComparisonCard
          firstBike="Honda Shine"
          secondBike="Honda SP-125"
          firstNickName="Shine"
          secondNickName="SP-125"
          costOfBike1="₹80,250 - ₹84,250"
          costOfBike2="₹86,454 - ₹90,474"
          firstBikeImage="shine.jpg"
          secondBikeImage="honda-comp.jpg"
        />
        <ComparisonCard
          firstBike="Yamaha MT-15 V2"
          secondBike="Yamaha R15 V4"
          firstNickName="MT-15"
          secondNickName="R-15"
          costOfBike1="₹1.68 - ₹1.74 Lakhs"
          costOfBike2="₹1.82 - ₹1.98 Lakhs"
          firstBikeImage="MT.jpg"
          secondBikeImage="v3.jpg"
        />
      </div>
    </div>
  );
}
