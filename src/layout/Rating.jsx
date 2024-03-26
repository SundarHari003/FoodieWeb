import React, { useState } from 'react';

function Rating() {
  const [rating, setRating] = useState(0); // Initial state for rating

  // Function to handle click on a star
  const handleClick = (value) => {
    setRating(value); // Update rating state with the selected value
  };

  // Function to render stars based on the current rating
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          onClick={() => handleClick(i)}
          style={{ cursor: 'pointer', color: i <= rating ? 'gold' : 'grey' }}
          className=' text-3xl'
        >
          &#9733;
        </span>
      );
    }
    return stars;
  };

  return (
    <div className='flex flex-wrap w-3/4'>
      <p className='me-0 sm:me-12'>Choose rating :</p>
      <div>
        {renderStars()}
      </div>
    </div>
  );
}

export default Rating;
