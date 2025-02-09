import React from 'react';
import { FaCheck } from 'react-icons/fa';

const Price = () => {
  const packages = [
    { title: 'for birthdays', amount: '$250.99' },
    { title: 'for weddings', amount: '$450.99' },
    { title: 'for concerts', amount: '$650.99' },
    { title: 'for others', amount: '$850.99' },
  ];

  return (
    <section className="price" id="price">
      <h1 className="heading"> our <span>price</span> </h1>
      <div className="box-container">
        {packages.map((pkg, index) => (
          <div className="box" key={index}>
            <h3 className="title">{pkg.title}</h3>
            <h3 className="amount">{pkg.amount}</h3>
            <ul>
              <li><FaCheck /> full services</li>
              <li><FaCheck /> decorations</li>
              <li><FaCheck /> music and photos</li>
              <li><FaCheck /> food and drinks</li>
              <li><FaCheck /> invitation card</li>
            </ul>
            <a href="#" className="btn">check out</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Price;