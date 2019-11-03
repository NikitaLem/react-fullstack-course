import React from 'react';

const PersonForm = ({
  newName,
  newPhone,
  onNameChange,
  onPhoneChange,
  onSubmitHandler,
}) =>
  <>
    <h2>add new</h2>
    <form onSubmit={ onSubmitHandler }>
      <div>
        <span>name:</span>
        <input value={ newName } onChange={ onNameChange }/>
      </div>
      <div>
        <span>phone:</span>
        <input value={ newPhone } onChange={ onPhoneChange }/>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  </>

export default PersonForm;
