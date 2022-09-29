import React from "react";
import "./Question.css";

const Question = () => {
  return (
    <div className="question-blog mt-20 mx-12 rounded-t-sm text-gray-900 font-semibold  bg-slate-400">
      <div className="question px-8 py-4">
        <h1>Question 1 : How does react work ?</h1>
        <p>
          Ans : ReactJS divides the UI into isolated reusable pieces of code
          known as components. React components work similarly to JavaScript
          functions as they accept arbitrary inputs called properties or props.
          It's possible to have as many components as necessary without
          cluttering your code.
        </p>
        <br />
        <hr />
        <br />
        <h1>
          Question 2 : What are the differences between props and state ?
        </h1>
        <p>
          Ans : Props are used to pass data from one component to another. The
          state is a local data storage that is local to the component only and
          cannot be passed to other components. The this. setState property is
          used to update the state values in the component.
        </p>
        <br />
        <hr />
        <br />
        <h1>Question 3 : What are some other use cases for the useEffect () hook without data load ? </h1>
        <p>
          Ans : Running on state change: validating input field. Running on
          state change: live filtering. Running on state change: trigger
          animation on new array value.
        </p>
      </div>
    </div>
  );
};

export default Question;
