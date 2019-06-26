import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function() {
  const [quotes, loadQuotes] = useState([]);
  useEffect( () => {
    const fetchData = async () => {
      let t = await axios(url + 'api');
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
