import React, { useState } from 'react';

const ResourceAllocation = ({ resources, onAllocateResource }) => {
  const [resourceName, setResourceName] = useState('');
  const [allocatedTo, setAllocatedTo] = useState('');

  const handleAllocation = (e) => {
    e.preventDefault();
    const newResource = {
      resourceName,
      allocatedTo
    };
    onAllocateResource(newResource);
    setResourceName('');
    setAllocatedTo('');
  };

  return (
    <div>
      <h2>Resource Allocation</h2>
      <form onSubmit={handleAllocation}>
        <input
          type="text"
          placeholder="Resource Name"
          value={resourceName}
          onChange={(e) => setResourceName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Allocated To"
          value={allocatedTo}
          onChange={(e) => setAllocatedTo(e.target.value)}
          required
        />
        <button type="submit">Allocate Resource</button>
      </form>
      <h3>Allocated Resources</h3>
      <ul>
        {resources.map((resource, index) => (
          <li key={index}>
            {resource.resourceName} - Allocated to {resource.allocatedTo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResourceAllocation;
