import React, { useEffect, useState } from 'react';

const DeadlineReminder = ({ tasks }) => {
  const [upcomingTasks, setUpcomingTasks] = useState([]);

  useEffect(() => {
    const now = new Date();
    const filteredTasks = tasks.filter((task) => {
      const deadlineDate = new Date(task.deadline);
      const timeDiff = deadlineDate - now;
      return timeDiff > 0 && timeDiff <= 7 * 24 * 60 * 60 * 1000; // within a week
    });
    setUpcomingTasks(filteredTasks);
  }, [tasks]);

  return (
    <div>
      <h2>Upcoming Deadlines</h2>
      <ul>
        {upcomingTasks.length === 0 ? (
          <li>No upcoming deadlines.</li>
        ) : (
          upcomingTasks.map((task, index) => (
            <li key={index}>
              {task.description} - Due by {task.deadline}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default DeadlineReminder;
