import React from 'react';
import Task from './Task';
import CreateTaskInput from './CreateTaskInput';
import { fetchTaskList, createTask, updateTask, deleteTask } from './fetchGateways';

class TasksList extends React.Component {
  state = {
    tasks: [],
  };

  componentDidMount() {
    this.fetchTasks();
  }

  fetchTasks() {
    fetchTaskList().then(taskList => {
      this.setState({
        tasks: taskList,
      });
    });
  }

  createTaskFunc = text => {
    const newTask = {
      text,
      done: false,
    };
    createTask(newTask).then(() => this.fetchTasks());
  };

  updateTaskFunc = id => {
    const { done, text } = this.state.tasks.find(task => task.id === id);
    const newTask = {
      text,
      done: !done,
    };
    updateTask(id, newTask).then(() => this.fetchTasks());
  };

  deleteTaskFunc = id => {
    deleteTask(id).then(() => this.fetchTasks());
  };

  render() {
    const { tasks } = this.state;
    const sortedList = tasks.slice().sort((a, b) => a.done - b.done);
    return (
      <div className="todo-list">
        <CreateTaskInput createTaskFunc={this.createTaskFunc} />
        <ul className="list">
          {sortedList.map(task => (
            <Task
              key={task.id}
              updateTaskFunc={this.updateTaskFunc}
              deleteTaskFunc={this.deleteTaskFunc}
              {...task}
            />
          ))}
        </ul>
      </div>
    );
  }
}
export default TasksList;
