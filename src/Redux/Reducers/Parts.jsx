const Parts = (state = null, action) => {
  switch (action.type) {
    case 'BODY_FRONT_OUTER':
      return (state = 'BODY_FRONT_OUTER');
    case 'BODY_BACK_OUTER':
      return (state = 'BODY_BACK_OUTER');
    case 'SLEEVE_LEFT_OUTER':
      return (state = 'SLEEVE_LEFT_OUTER');
    case 'SLEEVE_RIGHT_OUTER':
      return (state = 'SLEEVE_RIGHT_OUTER');
    case 'SET_PART':
      console.log(
        '%c 🍇: Parts -> action ',
        'font-size:16px;background-color:#eec0c1;color:black;',
        action
      );
      return (state = action.payload);

    default:
      return state;
  }
};

export default Parts;
