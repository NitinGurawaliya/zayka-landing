import React from 'react';

export interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  featured?: boolean;
  selected?: boolean;
  onClick?: () => void;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  name,
  price,
  description,
  features,
  featured = false,
  selected = false,
  onClick,
}) => (
  <div
    className={`relative flex flex-col rounded-3xl border-2 bg-white px-7 py-10 shadow-md transition-all duration-300 h-full cursor-pointer
      ${featured ? 'border-[#6366F1] shadow-2xl scale-105 z-10' : 'border-[#818cf8]/20 hover:border-[#6366F1]/40'}
      ${selected ? 'ring-4 ring-[#818cf8]/30' : ''}
    `}
    style={{ minHeight: 520 }}
    onClick={onClick}
  >
    {/* Most Loved badge */}
    {featured && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-1 rounded-full bg-gradient-to-r from-[#818cf8] to-[#6366F1] text-white text-xs font-semibold shadow-lg z-20 whitespace-nowrap">
        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 17.75l-6.172 3.245 1.179-6.873L2 9.755l6.908-1.004L12 2.5l3.092 6.251L22 9.755l-5.007 4.367 1.179 6.873z"/></svg>
        Most Loved
      </div>
    )}
    <h3 className="text-2xl font-bold text-gray-900 text-center mb-2 mt-2">{name}</h3>
    <div className="flex justify-center items-end gap-1 mb-2">
      <span className="text-3xl font-extrabold text-[#6366F1]">{price}</span>
      {price !== 'Get Quote' && <span className="text-base text-gray-500 font-medium">/month</span>}
    </div>
    <p className="text-center text-gray-600 mb-6 min-h-[48px]">{description}</p>
    <ul className="mb-8 space-y-3 text-base text-gray-700 flex-1">
      {features.map((feature, i) => (
        <li key={feature} className="flex items-center gap-3">
          <span className="inline-block w-2 h-2 rounded-full bg-[#6366F1] align-middle" style={{ verticalAlign: 'middle' }} />
          <span className="align-middle" style={{ verticalAlign: 'middle' }}>{feature}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default PricingCard; 