import PricingCard from "../components/PricingCards/PricingCard";

const PricingCards = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-800">
      <div className="flex flex-col my-6 space-y-6 md:space-x-6 md:space-y-0 md:flex-row md:mx-0">
        <PricingCard storage="100GB" tier="Basic" price="1.99" />
        <PricingCard storage="300GB" tier="Standard" price="3.99" selected={true}/>
        <PricingCard storage="2TB" tier="Premium" price="8.99" />
      </div>
    </div>
  );
};

export default PricingCards;
