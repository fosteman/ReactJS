import React, {useState, useEffect} from 'react'
import './App.css'
import axios from 'axios'
let url = 'http://localhost:3001/';

export default function() {
  const [quotes, loadQuotes] = useState([]);
  useEffect( () => {
    const fetchData = async () => {
      let t = await axios(url + 'data');
      console.log(t.data);
      loadQuotes(t.data);
    };
    fetchData();
  }, []);
  return (
      <p id="qod">
        {
          quotes.length ? quotes[Math.floor(Math.random() * quotes.length)].quoteText : 'loading'
        }
      </p>
  );
}
