import React, { useState } from "react";
import "./Number.css";
import "bootstrap/dist/css/bootstrap.min.css";

const NumberComp = () => {
  const [lowNumber, setLowNumber] = useState(0);
  const [highNumber, setHighNumber] = useState(0);

  const [perfectnumber, setPerfectnumber] = useState([]);
  const [polidnumber, setPolidnumber] = useState([]);

  const oneNumber = (e) => {
    // console.log(e);
    // console.log(e.target.value);
    setLowNumber(e.target.value);
  };
  // console.log(lowNumber)

  const twoNumber = (e) => {
    // console.log(e);
    // console.log(e.target.value);
    setHighNumber(e.target.value);
  };
  // console.log(highNumber)
  // console.log(typeof highNumber)

  const perfectClick = () => {
    console.log(lowNumber);
    console.log(highNumber);
    console.log(typeof lowNumber);

    let array = [];
    for (let i = Number(lowNumber); i < highNumber; i++) {
      let sum = 0;
      for (let j = 1; j <= i / 2; j++) {
        if (i % j === 0) {
          sum += j;
        }
        // console.log(sum);
      }
      if (sum === i && sum !== 0) {
        array.push(sum);
      }
    }
    console.log(array);
    setPerfectnumber(array);

  };

  console.log(perfectnumber);

  const polidClick = () => {
    // console.log(lowNumber);
    let array = [];
    for (let i = lowNumber; i < highNumber; i++) {
      if (String(i) === String(i).split("").reverse().join("")) {
        array.push(i);
      }
    }
    // console.log(array);
    setPolidnumber(array);
  };

  // console.log(polidnumber);

  return (
    <div className=" text-center pt-5 g-5">
      <h1>PERFECT AND POLİNDROM NUMBER LİST</h1>
      <div className="Pdiv">
        <p>
          {" "}
          <span className="text-danger">
            What is the palindromic numbers?
          </span>{" "}
          <br /> A palindromic number (also known as a numeral palindrome or a
          numeric palindrome) is a number (such as 16461) that remains the same
          when its digits are reversed. In other words, it has reflectional
          symmetry across a vertical axis. The term palindromic is derived from
          palindrome, which refers to a word (such as rotor or racecar) whose
          spelling is unchanged when its letters are reversed.The first 30
          palindromic numbers (in decimal) are: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
          11, 22, 33, 44, 55, 66, 77, 88, 99, 101, 111, 121, 131, 141, 151, 161,
          171, 181, 191, 202
        </p>

        <p>
          {" "}
          <span className="text-danger">
            What is perfect numbers?
          </span> <br /> Perfect Number: In number theory, a perfect number is a
          positive integer that is equal to the sum of its positive divisors,
          excluding the number itself. For instance, 6 has divisors 1, 2 and 3,
          and 1 + 2 + 3 = 6, so 6 is a perfect number.
        </p>
      </div>

      <div className="Input d-flex justify-content-center ">

          <input
            style={{ width: "25%" }}
            onChange={oneNumber}
            type="text"
            aria-label="First name"
            className="form-control low mx-2"
          />



          <input
            style={{ width: "25%" }}
            onChange={twoNumber}
            type="text"
            aria-label="Last name"
            className="form-control high mx-2"
          />

      </div>

      <div className="button d-flex justify-content-center mt-3">
        <button
          style={{ width: "25%" }}
          onClick={perfectClick}
          type="button"
          className="btn btn-primary btn-lg bg-success mx-2 d-flex justify-content-center"
        >
          Perfect Number List
        </button>

        <button
          style={{ width: "25%" }}
          onClick={polidClick}
          type="button"
          className="btn btn-secondary btn-lg bg-danger mx-2 d-flex justify-content-center"
        >
          Polindrom Number List
        </button>
      </div>

      <div className="d-flex justify-content-center  desc">
        <ul style={{ width: "25%" }} className="perfect text-center mx-2">
          {perfectnumber.map((item, index) => (
            <li
              className="text-start w-100"
              key={index}
              // style={{ width: "25%" }}
            >
              {item}
            </li>
          ))}
        </ul>

        <ul style={{ width: "25%" }} className="polid text-center mx-2">
          {polidnumber.map((item, index) => (
            <li
              className="text-start w-100"
              key={index}
              // style={{ width: "4rem" }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NumberComp;
