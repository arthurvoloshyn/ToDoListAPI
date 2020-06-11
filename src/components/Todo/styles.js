const styles = {
  listItem: {
    height: '64px',
  },
  listItemText: completed => {
    const textDecoration = completed ? 'line-through' : 'none';

    return {
      textDecoration,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      marginRight: '7rem',
    };
  },
};

export default styles;
