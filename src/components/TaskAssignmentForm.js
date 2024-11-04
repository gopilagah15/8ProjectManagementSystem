import React, { useState } from 'react';

const TaskAssignmentForm = ({ onAssignTask }) => {
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');
  const [assignee, setAssignee] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      description,
      deadline,
      assignee,
      status: 'Pending'
    };
    onAssignTask(newTask);
    setDescription('');
    setDeadline('');
    setAssignee('');
  };

  return (
    <div>
      <h2>Task Assignment Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Assignee"
          value={assignee}
          onChange={(e) => setAssignee(e.target.value)}
          required
        />
        <button type="submit">Assign Task</button>
      </form>
    </div>
  );
};

export default TaskAssignmentForm;
