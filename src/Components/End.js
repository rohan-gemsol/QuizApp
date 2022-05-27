import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
const End = ({ results, data, onReset, onAnswersCheck, time }) => {
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const navigate = useNavigate();


  const [setIsLogin] = useState(true);
  useEffect(() => {
    let correct = 0;
    results.forEach((result, index) => {
      if (result.a === data[index].answer) {
        correct++;
      }
    });
    setCorrectAnswers(correct);
    // const logout = () => {
    //   sessionStorage.removeItem("userInfo");
    //   navigate("/login");
    //   setIsLogin(false);
    // };

  }, []);

  const logout = () => {
    sessionStorage.removeItem("userInfo");
    navigate("/login");
    setIsLogin(false);
  };
  return (

    <>
      <div class="container">
        <div className="row justify-content-end">
          <button className="col-1 btn-info " onClick={logout}>
            Logout
          </button>
        </div>

      </div>




      <div className="card mt-3" style={{ width: "18rem" }}>
        <div className="card-body ">
          <div className="content">
            <h3>Results</h3>
            <p>
              {correctAnswers} of {data.length}
            </p>

            <button className="btn btn-info mt-4" onClick={onReset}>
              Try again
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default End;
