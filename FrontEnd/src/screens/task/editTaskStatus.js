import React from 'react';

const getTasksByStatus = (selectedRow, statusName) => {
  const generatedArray = [];
  selectedRow.tasks.map(tsk => {
    if (tsk.status === statusName) {
      generatedArray.push(tsk);
    }
    return null;
  });
  return generatedArray;
};

const changeStatus = e => {
  console.log('e', e);
};

export default props => {
  const todoData = getTasksByStatus(props.selectedRow, 'TO DO');
  const doingData = getTasksByStatus(props.selectedRow, 'DOING');
  const doneData = getTasksByStatus(props.selectedRow, 'DONE');

  console.log('lll', todoData, doingData, doneData);

  return (
    <div>
      <div style={{ float: 'left' }}>
        {/* eslint-disable-next-line */}
        <label>TO DO</label>
        <ol>
          {todoData.map(val => (
            <li>
              {val.task.name}

              &nbsp;
              <input
                type="button"
                value="Change Status"
                onClick={e => changeStatus(e)}
              />
            </li>
          ))}
        </ol>
      </div>
      <div style={{ float: 'left' }}>
        {/* eslint-disable-next-line */}
        <label>DOING</label>
        <ol>
          {doingData.map(val => (
            <li>
              {val.task.name}

              &nbsp;
              <input
                type="button"
                value="Change Status"
                onClick={e => changeStatus(e)}
              />
            </li>
          ))}
        </ol>
      </div>
      <div style={{ float: 'left' }}>
        {/* eslint-disable-next-line */}
        <label>DONE</label>
        <ol>
          {doneData.map(val => (
            <li>
              {val.task.name}

              &nbsp;
              <input
                type="button"
                value="Change Status"
                onClick={e => changeStatus(e)}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};
