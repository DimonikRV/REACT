const webApi = 'https://63a6da56f8f3f6d4ab138405.mockapi.io/api/v1/tasks';

export const fetchTaskList = () => {
  return fetch(webApi).then(resp => {
    if (!resp.ok) {
      throw new Error('Failed to get Tasks');
    }
    return resp.json();
  });
};

export const createTask = task => {
  return fetch(webApi, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  }).then(resp => {
    if (!resp.ok) {
      throw new Error('Failed to create Task');
    }
  });
};

export const updateTask = (taskId, taskData) => {
  return fetch(`${webApi}/${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(taskData),
  }).then(resp => {
    if (!resp.ok) {
      throw new Error('Failed to update Task');
    }
  });
};

export const deleteTask = taskId => {
  return fetch(`${webApi}/${taskId}`, {
    method: 'DELETE',
  }).then(resp => {
    if (!resp.ok) {
      throw new Error('Failed to delete Task');
    }
  });
};
