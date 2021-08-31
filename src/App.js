import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import React, { useEffect, useState } from "react";
import AppNav from './components/AppNav';

import Loader from './components/Loader';
import Quotes from './components/Quotes';

const API = 'https://boiling-bayou-58132.herokuapp.com/quotes/200';



function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(
        (result) => {
          setItems(result);
          setIsLoaded(true);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return (
          <div className="background">
            <AppNav />
            <Loader />
          </div>
    )
  } else {
    return (
      <div className="background">
        <AppNav />
        <Quotes quotes={items} />
      </div>
    );
  }
}

export default App;
