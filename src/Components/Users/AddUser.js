import React, { useState, useRef } from "react";
import Wrapper from "../Helpers/Wrapper";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
//In this code the usestates are removed and Refs are added

const AddUser = (props) => {
  const nameInputRef = useRef(); //It returns  a value and that value can be used to work with it again//refs
  const ageInputRef = useRef();//refs
  const collegeInputRef=useRef()//refs
//   const [enteredUserName, setEnteredUserName] = useState("");
//   const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();


    const enteredName=nameInputRef.current.value//refs
    const enteredUserAge=ageInputRef.current.value//refs
    const enteredCollege=collegeInputRef.current.value//refs


    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0 ||enteredCollege.trim().length===0 ) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age and college(non-empty values).",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      //adding +enteredAge this as it indicates the entered text should be a number
      setError({
        title: "Invalid age",
        message: "Please enter a valid age(>0).",
      });
      return;
    }

    props.onAddUser(enteredName, enteredUserAge,enteredCollege);
    // setEnteredUserName("");
    // setEnteredAge("");
    nameInputRef.current.value=''
    ageInputRef.current.value=''
    collegeInputRef.current.value=''
  };

//   const userNameChangeHandler = (event) => {
//     // setEnteredUserName(event.target.value);
//   };
//   const ageChangeHandler = (event) => {
//     // setEnteredAge(event.target.value);
//   };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">User Name</label>
          <input
            className="username"
            type="text"
            // value={enteredUserName}
            // onChange={userNameChangeHandler}
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            className="age"
            type="number"
            // value={enteredAge}
            // onChange={ageChangeHandler}
            ref={ageInputRef}
          />
          <label htmlFor="collegeName">College Name</label>
          <input
            className="collegeName"
            type="text"
            ref={collegeInputRef}
            />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
