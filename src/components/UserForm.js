import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { usernameActions } from '../store/index';
import classes from './UserForm.module.css';

const UserForm = () => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [nameInputTouched, setNameInputTouched] = useState(false);

  const dispatch = useDispatch();

  const enteredUsernameIsValid = enteredUsername.trim() !== '';
  const nameInputIsInvalid = !enteredUsernameIsValid && nameInputTouched;  

  const usernameChangeHandler = event => {
    setEnteredUsername(event.target.value);      
  };

  const nameInputBlurHandler = () => {
    setNameInputTouched(true);  
  };

  const addUserHandler = event => {
    event.preventDefault();
    setNameInputTouched(true);

    if (!enteredUsernameIsValid) {      
      return;
    }

    dispatch(usernameActions.addName(enteredUsername));
    setEnteredUsername('');
    setNameInputTouched(false);
  }; 

  return (
    <form className={`${classes.form} ${nameInputIsInvalid ? classes.invalid : ''}`} onSubmit={addUserHandler}>
      <label htmlFor='name'>Podaj nazwę gracza:</label>
      <input type='text' id='name' value={enteredUsername} onChange={usernameChangeHandler} onBlur={nameInputBlurHandler} />
      {nameInputIsInvalid && <p className={classes.errorText}>Wprowadź nazwę gracza</p>}
      <button type='submit'>OK</button>
    </form>
  );
};

export default UserForm;
