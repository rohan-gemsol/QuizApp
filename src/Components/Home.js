import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLogin, setIsLogin] = useState(true);
  const logout = () => {
    sessionStorage.removeItem("userInfo");
    navigate("/login");
    setIsLogin(false);
  };
  return (
    <>
      {!isLogin ? (
        navigate("/login")
      ) : (
        <>
          <div className="row justify-content-end">
            <button className="col-1 btn-info " onClick={logout}>
              Logout
            </button>
          </div>
          <div className="row justify-content-center">

            <div
              className="col-md-5"

            >
              <div className="fw-bold fs-2 text-center">
                Quiz App
              </div>
              <div
                className="d-flex flex-column justify-content-center "
                
              >
                <button className="btn btn-success mt-5">
                  <Link
                    to={`/home/QuestionsUpload`}
                    state={{ user: location.state.email }}
                  >
                    <span className="text-white ">Create Quiz</span>
                  </Link>
                </button>
                <br />
                <button className="btn btn-success text-center text-decoration-none">
                  <Link
                    to={`/home/showQuizzes`}
                    state={{ user: location.state.email }}



                  >
                    <span className="text-white">Show Quiz</span>
                  </Link>
                </button>
              </div>
            </div>

          </div>
        </>
      )}
    </>
  );
}

export default Home;
