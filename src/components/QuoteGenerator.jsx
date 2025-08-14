import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

const quotes = [
  "You can't use up creativity. The more you use, the more you have. - Maya Angelou",
  "The best way to predict the future is to create it. - Peter Drucker",
  "Let us pick up our books and our pens, they are the most powerful weapons. - Malala Yousafzai",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "It always seems impossible until it’s done. - Nelson Mandela",
  "I am not afraid... I was born to do this. - Joan of Arc",
  "Believe you can and you’re halfway there. - Theodore Roosevelt"
];

function QuoteGenerator() {
  const [currentQuote, setCurrentQuote] = useState('');

  const generateQuote = async () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    setCurrentQuote(quote);

    try {
      const response = await axios.post('https://programming-quotesapi.vercel.app/api/random', { quotes: quote });
      console.log('Saved to DB:', response.data);
    } catch (error) {
      console.error('Error saving quote:', error);
    }
  };

  return (
    <div className="quote-generator">
      <button onClick={generateQuote} className="generate-button">Generate Quote</button>
      {currentQuote && <p className="quote-display">{currentQuote}</p>}
    </div>
  );
}

export default QuoteGenerator;

