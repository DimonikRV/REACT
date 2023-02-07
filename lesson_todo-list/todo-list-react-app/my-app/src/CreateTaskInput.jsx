import React from 'react';

class CreateTaskInput extends React.Component {
  state = {
    value: '',
  };

  onChangeHandler = event => {
    this.setState({
      value: event.target.value,
    });
  };
  onClickHandler = () => {
    const { value } = this.state;
    this.props.createTaskFunc(value);
    this.setState({
      value: '',
    });
  };

  render() {
    return (
      <div className="create-task">
        <input
          type="text"
          className="create-task__input"
          value={this.state.value}
          onChange={this.onChangeHandler}
        />
        <button className="btn create-task__btn" onClick={this.onClickHandler}>
          Create
        </button>
      </div>
    );
  }
}
export default CreateTaskInput;
