import { useState } from "react";
import "./solution/Number.css";

const Number = () => {
  let LowNumber;
  console.log(LowNumber);
  let HighNumber;
  console.log(HighNumber);
  const [poliArray, setPoliArray] = useState([]);
  const [perfectArray, setPerfectArray] = useState([]);

  //! inputtan gelen değerleri yakalamak için
  const handleChangeLow = (e) => {
    LowNumber = e.target.value;
  };

  //! inputtan gelen değerleri yakalamak için
  const handleChangeHigh = (e) => {
    HighNumber = e.target.value;
  };

  const numberPoli = (e) => {
    let Array = [];
    for (let i = LowNumber; i < HighNumber; i++) {
      if (String(i) === String(i).split("").reverse().join("")) {
        Array.push(i);
        console.log(Array);
      }
    }
    setPoliArray(Array);
  };  
  console.log(numberPoli);

  const numberPerfect = (e) => {
    let Array = [];
    for (let i = Number(LowNumber); i < Number(HighNumber); i++) {
      let sum = 0;
      for (let j = 1; j <= i / 2; j++) {
        if (i % j === 0) {
          sum += j;
        }
      }
      if ((sum === i) && (sum !== 0)) {
        Array.push(i);
      }
    }

    setPerfectArray(Array);
  };
  console.log(numberPerfect);

  return (
    <div className="container">
      <div className="input-group">
        <input
          onChange={handleChangeLow}
          type="text"
          aria-label="First name"
          className="form-control"
        />
        <input
          onChange={handleChangeHigh}
          type="text"
          aria-label="Last name"
          className="form-control"
        />
      </div>
      <div>
        <button
          onClick={numberPoli}
          type="button"
          className="btn btn-primary btn-lg"
        >
          Polindrom Number List
        </button>
        <button
          onClick={numberPerfect}
          type="button"
          className="btn btn-secondary btn-danger"
        >
          Perfect Number List
        </button>
      </div>

      <div className="d-flex">
        <div className="form-floating">
          {poliArray.map((value, index) => (
            <p key={index}>{value}</p>
          ))}
        </div>
        <div className="form-floating">
          {perfectArray.map((value, index) => (
            <p key={index}>{value}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Number;
