import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="font-bold text-2xl">Mini-Projects</h1>
      <ul>
        <li>
          <Link to="/email-subscribe">Email Subscribe</Link>
        </li>
        <li>
          <Link to="/pricing-cards">Pricing Cards</Link>
        </li>
        <li>
          <Link to="/product-modal">Product Modal</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
