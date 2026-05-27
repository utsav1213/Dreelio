interface PricingCardProps {
  name: string;
  price: number;
  description: string;
  features: string[];
  highlighted?: boolean;
}

export default function PricingCard({
  name,
  price,
  description,
  features,
  highlighted = false,
}: PricingCardProps) {
  return (
    <div className={`pricing-card ${highlighted ? "highlighted" : ""}`}>
      <h3>{name}</h3>
      <p className="price">${price}</p>
      <p className="description">{description}</p>
      <ul className="features">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button className="cta-button">Get Started</button>
    </div>
  );
}
