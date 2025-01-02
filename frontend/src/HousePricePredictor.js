import React, { useState } from 'react';
import axios from 'axios';

function HousePricePredictor() {
  const [rooms, setRooms] = useState('');
  const [predictedPrice, setPredictedPrice] = useState(null);

  const handlePredict = async () => {
    try {
      const response = await axios.post('/predict', { rooms: parseInt(rooms) });
      setPredictedPrice(response.data.predictedPrice);
    } catch (error) {
      console.error('Error making prediction:', error);
    }
  };

  const handleChange= (e)=>{
        setRooms(e.target.value);

  }

  return (
    <div>
      <h1>House Price Prediction</h1>
      <input
        type="number"
        value={rooms}
        name="room"
        onChange={handleChange}
        placeholder="Enter number of rooms"
      />
      <button onClick={handlePredict}>Predict</button>

      {predictedPrice !== null && (
        <div>
          <h2>Predicted Price: ${predictedPrice}</h2>
        </div>
      )}
    </div>
  );
}

export default HousePricePredictor;
