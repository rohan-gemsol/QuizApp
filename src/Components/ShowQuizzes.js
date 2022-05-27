import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
const ShowQuizzes = () => {
  const location = useLocation();
  const keyArr = Object.keys(localStorage);
  const user = location.state.user;
  return (
    <div>
      {keyArr.map((obj) => {
        if (obj.includes(user)) {
          const arr = JSON.parse(localStorage.getItem(obj));
          const title = obj.substring(user.length);
          return (
            <div className="container">
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  {/* <p className="card-text">This is {title}</p> */}
                  <div className="d-grid">
                    <button className="btn btn-primary">
                      <Link to={`/home/showQuizzes/takeQuiz`} state={{ arr }}>
                        <span className="text-white">Take Quiz </span>
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default ShowQuizzes;
