import React from 'react';
import ReactDOM from 'react-dom';
import './ref.css';

const References = () => {
  // Örnek müşteri referansları verisi
  const customerReferences = [
    {
      id: 1,
      name: "John Doe",
      company: "ABC Company",
      comment: "Great experience working with this studio. Highly recommended!",
    },
    
    {
      id: 2,
      name: "Jane Smith",
      company: "XYZ Corporation",
      comment: "The studio team delivered beyond our expectations. Very satisfied!",
    },
    {
      id: 3,
      name: "James Deren",
      company: "Pixel Company",
      comment: "Great experience working with this studio. Highly recommended!",
    },
    // Daha fazla müşteri referansı ekleyebilirsiniz...
  ];

  return (
    <div className="customer-references">
      <h2>Customer References</h2>
      <div className="reference-list">
        {customerReferences.map(reference => (
          <div key={reference.id} className="reference">
            <h3>{reference.name}</h3>
            <p>{reference.company}</p>
            <div className="comment-container">
              <p>{reference.comment}</p>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default References;

ReactDOM.render(<References />, document.getElementById('root'));
