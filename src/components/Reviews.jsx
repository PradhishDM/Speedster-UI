import ReviewCard from "./ReviewCard";

export default function Reviews() {
  return (
    <div className="">
      <div className="bg-red-600 mt-4 p-4 pb-20">
        <div className="flex justify-center mt-2 my-4 ">
          <h2 className="text-xl text-black font-sans font-semibold ">
            Our Customers love the{" "}
            <span className="italic font-medium text-white">SPEEDSTER</span>{" "}
            experience
          </h2>
        </div>
        <div className="flex justify-around">
          <ReviewCard
            customerName="Pradhish"
            profilePicture="profile.webp"
            occupation="IAS"
            customerReview="Really got a very pleasant experience whether it was a claim lodgement, surveyor appointment and finally payment settlement. Never encountered this kind of experience. Thanks team"
          />
          <ReviewCard
            customerName="Pari Anandha"
            profilePicture="pari.jpg"
            occupation="IPS"
            customerReview="Renewed my car insurance today with Acko again. Two years in a row. Such a good service. No spam, clean UI on website and email. Quick call connect. Appreciation tweet for Acko."
          />
          <ReviewCard
            customerName="Dinesh"
            profilePicture="pro.jpg"
            occupation="IRS"
            customerReview="The experience was fantastic, very easy to buy, simple to use website, no hollow or hidden sales pitch. I am sure you guys will rock and redefine this sector. All the best👏"
          />
        </div>
      </div>
    </div>
  );
}
