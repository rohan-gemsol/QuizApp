import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";
const QuestionUploadForm = () => {
  
  const navigate = useNavigate();
  const location = useLocation();
  
  const [setIsLogin] = useState(true);

  const [question, setQuestion] = useState({
    title: "",
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    answer: "",
  });

  const [isAdded, setIsAdded] = useState(false);

  const [addQuestionDetails, setAddQuestionDetails] = useState([]);

  const inputEvent = (event) => {
    const { name, value } = event.target;
    setQuestion((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
    setIsAdded(false);
  };

  const addEvent = (e) => {
    setAddQuestionDetails((prevData) => {
      return [...prevData, question];
    });
    setIsAdded(true);
    document.getElementById("form").reset();
  };
  const logout = () => {
    sessionStorage.removeItem("userInfo");
    navigate("/login");
    setIsLogin(false);
  };

  const addTOStorage = () => {
    localStorage.setItem(
      location.state.user+
     `${question.title}`,
      JSON.stringify(addQuestionDetails)
    );
    alert("Quiz Created");
    setAddQuestionDetails([]);
  };
  return (
    <>
     
    
      <div className="container-fluid">
        <div className="row justify-content-end">
      <button className="col-1 btn-info " onClick={logout}>
            Logout
          </button>
          </div>
        <div className="row justify-content-center">
          
          <div className="col-md-4 text-center text-bg-info h2 p-3">
            Enter Quiz Details
          </div>
          
        </div>
        {isAdded ? (
          // <h5 className="text-bg-success ">Question is Added</h5>
          alert("Question Added")
          
        ) : null}
       <div className="row  justify-content-center">
        <form className="col-md-6 col-lg-6 " id="form">
          
          <div className="row w-100">
            <label
              htmlFor="quiz_title"
              className="form-check-label h5"
            >Enter Quiz Title :</label>
            <input
              type="text"
              id="quiz_title"
              name="title"
              value={question.title}
              onChange={inputEvent}
              className=""
              placeholder="Enter Title"
            ></input>
          </div>
          <div className="row mt-3 w-100">
            <label htmlFor="question" className="form-check-label  h6">Enter Question :</label>
            <input
              rows=""
              type ="text"
              id="question"
              name="question"
              columns=""
              value={question.question}
              className=""
              placeholder="Write the Question"
              onChange={inputEvent}
            />
            <div className="container d-flex flex-column justify-content-center align-items-center">
              <input
                placeholder="Option 1"
                name="option1"
                className="mt-3 w-100"
                type="text"
                value={question.option1}
                onChange={inputEvent}
              />
              <input
                placeholder="Option 2 "
                name="option2"
                type="text"
                className="mt-3 w-100"
                value={question.option2}
                onChange={inputEvent}
              />
              <input
                placeholder="Option 3"
                name="option3"
                type="text"
                className="mt-3 w-100"
                value={question.option3}
                onChange={inputEvent}
              />
              <input
                placeholder="Option 4"
                name="option4"
                type="text"
                className="mt-3 w-100"
                value={question.option4}
                onChange={inputEvent}
              />
              <input
                placeholder="Enter the correct answer.."
                name="answer"
                type="text"
                className="mt-3 w-100"
                value={question.answer}
                onChange={inputEvent}
              ></input>

              <div
                type="submit"
                onClick={addEvent}
                className="btn btn-info mt-4"
              >
                Add Question
              </div>
              <div
                type="submit"
                className="btn btn-info mt-4 "
                onClick={addTOStorage}
                style={{ marginLeft: "5px" }}
              >
                Make Quiz
              </div>
            </div>
          </div>
        </form>
      </div>
      </div>
      
    </>
  );
};

export default QuestionUploadForm;
