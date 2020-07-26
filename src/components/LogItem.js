import React from 'react';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Moment from 'react-moment';

const LogItem = ({
  log: { _id, priority, text, user, created },
  deleteItem,
}) => {
  const setVariant = () => {
    switch (priority) {
      case 'high':
        return 'danger';
      case 'moderate':
        return 'warning';
      case 'low':
        return 'success';
      default:
        return 'primary';
    }
  };

  return (
    <tr>
      <td>
        <Badge variant={setVariant()} className='p-2'>
          {priority.charAt(0).toUpperCase() + priority.slice(1)}
        </Badge>
      </td>
      <td>{text}</td>
      <td>{user}</td>
      <td>
        <Moment format='MMMM Do YYYY, h:mm:ss a'>{new Date(created)}</Moment>
      </td>
      <td>
        <Button variant='danger' size='sm' onClick={() => deleteItem(_id)}>
          x
        </Button>
      </td>
    </tr>
  );
};

export default LogItem;
