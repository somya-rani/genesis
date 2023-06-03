import React from 'react';

function ParentComponent() {
  const data = 'Hello from Parent';

  return (
    <div>
      <ChildComponent data={data} />
    </div>
  );
}

function ChildComponent({ data }) {
  return <p>{data}</p>;
}

export default ParentComponent;
