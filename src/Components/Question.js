import React, { useState, useEffect, useRef } from "react";

const Question = ({
  data,
  onAnswerUpdate,
  numberOfQuestions,
  activeQuestion,
  onSetActiveQuestion,
  onSetStep,
}) => {
  const [selected, setSelected] = useState("");
  const [error, setError] = useState("");
  const radiosWrapper = useRef();
  const choices = [data.option1, data.option2, data.option3, data.option4];
  useEffect(() => {
    const findCheckedInput =
      radiosWrapper.current.querySelector("input:checked");
    if (findCheckedInput) {
      findCheckedInput.checked = false;
    }
  }, [data]);

  const changeHandler = (e) => {
    setSelected(e.target.value);
    if (error) {
      setError("");
    }
  };

  const nextClickHandler = (e) => {
    if (selected === "") {
      return setError("Please select one option!");
    }
    onAnswerUpdate((prevState) => [
      ...prevState,
      { q: data.question, a: selected },
    ]);
    setSelected("");
    if (activeQuestion < numberOfQuestions - 1) {
      onSetActiveQuestion(activeQuestion + 1);
    } else {
      onSetStep(3);
    }
  };

  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <div className="content">
          <h2 className="mb-5">{data.question}</h2>
          <div className="d-flex flex-column" ref={radiosWrapper}>
            {choices.map((choice, i) => (
              <label className="bg-light" key={i}>
                <input
                  type="radio"
                  name="answer"
                  value={choice}
                  onChange={changeHandler}
                  className="mt-4"
                />
                {choice}
              </label>
            ))}
          </div>
          {error && <div className=" mt-4 text-danger">{error}</div>}
          <div class="d-grid mt-4">
            <button
              className="btn btn-primary"
              type="button"
              onClick={nextClickHandler}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
