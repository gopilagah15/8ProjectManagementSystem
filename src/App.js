import React, { useState } from 'react';
import TaskAssignmentForm from './components/TaskAssignmentForm';
import DeadlineReminder from './components/DeadlineReminder';
import ResourceAllocation from './components/ResourceAllocation';
import ProgressReport from './components/ProgressReport';
 

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [resources, setResources] = useState([]);

  // Handle task assignment
  const handleTaskAssignment = (task) => {
    setTasks([...tasks, task]);
  };

  // Handle resource allocation
  const handleResourceAllocation = (resource) => {
    setResources([...resources, resource]);
  };

  return (
    <div>
      <h1>Project Management System</h1>
      <TaskAssignmentForm onAssignTask={handleTaskAssignment} />
      <DeadlineReminder tasks={tasks} />
      <ResourceAllocation resources={resources} onAllocateResource={handleResourceAllocation} />
      <ProgressReport tasks={tasks} />
    </div>
  );
};

export default App;
