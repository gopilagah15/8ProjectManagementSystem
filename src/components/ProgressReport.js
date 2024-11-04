import React from 'react';

const ProgressReport = ({ tasks }) => {
  return (
    <div>
      <h2>Progress Report</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            Task: {task.description} | Deadline: {task.deadline} | Assignee: {task.assignee} | Status: {task.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProgressReport;
