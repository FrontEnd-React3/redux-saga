import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCatsFetch } from "./catState";
import "./App.css";

function App() {
  const cats = useSelector(state => state.cats.cats);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCatsFetch());
  }, [dispatch]);
  console.log(cats);
  return (
    <div className="App">
      <h1 className="title">Dog Species</h1>
      <p className="subtitle">Dogs selected with Redux-Saga</p>
      <hr />
      <div className="Gallery">
        {cats.map(cat => (
          <div key={cat.id} className="row">
            <div className="column column-left">
              <img
                alt={cat.name}
                src={(cat.image.url)}
                width="200"
                height="200"
              />
            </div>
            <div className="column column-right">
              <h2 className="bodytxt">{cat.name}</h2>
              <h5 className="bodytxt">Temperament: {cat.temperament}</h5>
              <p className="bodytxt">Description: {cat.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button>View more dogs</button>
    </div>
  );


}

export default App;
