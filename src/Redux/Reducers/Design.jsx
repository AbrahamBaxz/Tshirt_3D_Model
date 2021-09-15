import { TextureLoader } from 'three';

const textLoader = new TextureLoader();
const whitePNG = textLoader.load(
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAA1BMVEX///+nxBvIAAAAR0lEQVR4nO3BAQ0AAADCoPdPbQ8HFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPBgxUwAAU+n3sIAAAAASUVORK5CYII='
);

/*
{
  design:whitePNG,
  x: 0
  y: 0

}
*/
whitePNG.name = 'whitePNG';
const initialState = {
  BODY_FRONT_OUTER: whitePNG,
  BODY_BACK_OUTER: whitePNG,
  SLEEVE_LEFT_OUTER: whitePNG,
  SLEEVE_RIGHT_OUTER: whitePNG,
};

const Design = (state = initialState, action) => {
  switch (action.type) {
    case 'BODY_FRONT_OUTER':
      return (state = { ...state, BODY_FRONT_OUTER: action.payload });
    case 'BODY_BACK_OUTER':
      return (state = { ...state, BODY_BACK_OUTER: action.payload });
    case 'SLEEVE_LEFT_OUTER':
      return (state = { ...state, SLEEVE_LEFT_OUTER: action.payload });
    case 'SLEEVE_RIGHT_OUTER':
      return (state = { ...state, SLEEVE_RIGHT_OUTER: action.payload });
    case 'ALL':
      return (state = {
        BODY_FRONT_OUTER: action.payload,
        BODY_BACK_OUTER: action.payload,
        SLEEVE_LEFT_OUTER: action.payload,
        SLEEVE_RIGHT_OUTER: action.payload,
      });

    case 'CLEAR_ALL_DESIGNS':
      return (state = initialState);

    default:
      return state;
  }
};

// export default Design;

const initialState2 = {
  MOON: {
    design: whitePNG,
  },
  BODY_FRONT_OUTER: {
    design: whitePNG,
    // x: 0.03,
    // y: -0.16,
    x: 0,
    y: 0,
    Xmin: -29,
    Xmax: 35,
    Ymin: -40,
    Ymax: 8,
  },
  BODY_BACK_OUTER: {
    design: whitePNG,
    // x: -0.27,
    // y: -0.17,
    x: 0,
    y: 0,
    Xmin: -54,
    Xmax: 0,
    Ymin: -42,
    Ymax: 7,
  },
  SLEEVE_LEFT_OUTER: {
    design: whitePNG,
    // x: -0.37,
    // y: -0.02,
    x: 0,
    y: 0,
    Xmin: -57,
    Xmax: 17,
    Ymin: -40,
    Ymax: 38,
  },
  SLEEVE_RIGHT_OUTER: {
    design: whitePNG,
    // x: 0.25,
    // y: 0,
    x: 0,
    y: 0,
    Xmin: -16,
    Xmax: 66,
    Ymin: -38,
    Ymax: 38,
  },
  BODY_FRONT_INNER: {
    design: whitePNG,
  },
  BODY_BACK_INNER: {
    design: whitePNG,
  },
  SLEEVE_LEFT_INNER: {
    design: whitePNG,
  },
  SLEEVE_RIGHT_INNER: {
    design: whitePNG,
  },
};

const Design2 = (state = initialState2, action) => {
  console.log(
    '%c 🦁🦁🦁🦁🦁: action ',
    'font-size:16px;background-color:#eec4ad;color:black;',
    action
  );
  switch (action.type) {
    //BODY_FRONT_OUTER
    case 'BODY_FRONT_OUTER':
      return (state = {
        ...state,
        BODY_FRONT_OUTER: {
          ...state.BODY_FRONT_OUTER,
          design: action.payload,
        },
      });
    case 'BODY_FRONT_OUTER_X':
      return (state = {
        ...state,
        BODY_FRONT_OUTER: {
          ...state.BODY_FRONT_OUTER,
          x: action.payload,
        },
      });
    case 'BODY_FRONT_OUTER_Y':
      return (state = {
        ...state,
        BODY_FRONT_OUTER: {
          ...state.BODY_FRONT_OUTER,
          y: action.payload,
        },
      });

    //BODY_BACK_OUTER
    case 'BODY_BACK_OUTER':
      return (state = {
        ...state,
        BODY_BACK_OUTER: {
          ...state.BODY_BACK_OUTER,
          design: action.payload,
        },
      });
    case 'BODY_BACK_OUTER_X':
      return (state = {
        ...state,
        BODY_BACK_OUTER: {
          ...state.BODY_BACK_OUTER,
          x: action.payload,
        },
      });
    case 'BODY_BACK_OUTER_Y':
      return (state = {
        ...state,
        BODY_BACK_OUTER: {
          ...state.BODY_BACK_OUTER,
          y: action.payload,
        },
      });

    //SLEEVE_LEFT_OUTER
    case 'SLEEVE_LEFT_OUTER':
      return (state = {
        ...state,
        SLEEVE_LEFT_OUTER: {
          ...state.SLEEVE_LEFT_OUTER,
          design: action.payload,
        },
      });
    case 'SLEEVE_LEFT_OUTER_X':
      return (state = {
        ...state,
        SLEEVE_LEFT_OUTER: {
          ...state.SLEEVE_LEFT_OUTER,
          x: action.payload,
        },
      });
    case 'SLEEVE_LEFT_OUTER_Y':
      return (state = {
        ...state,
        SLEEVE_LEFT_OUTER: {
          ...state.SLEEVE_LEFT_OUTER,
          y: action.payload,
        },
      });

    //SLEEVE_RIGHT_OUTER
    case 'SLEEVE_RIGHT_OUTER':
      return (state = {
        ...state,
        SLEEVE_RIGHT_OUTER: {
          ...state.SLEEVE_LEFT_OUTER,
          design: action.payload,
        },
      });
    case 'SLEEVE_RIGHT_OUTER_X':
      return (state = {
        ...state,
        SLEEVE_RIGHT_OUTER: {
          ...state.SLEEVE_RIGHT_OUTER,
          x: action.payload,
        },
      });
    case 'SLEEVE_RIGHT_OUTER_Y':
      return (state = {
        ...state,
        SLEEVE_RIGHT_OUTER: {
          ...state.SLEEVE_RIGHT_OUTER,
          y: action.payload,
        },
      });

    //ALL
    case 'ALL':
      return (state = {
        MOON: {
          ...state.MOON,
          design: action.payload,
        },
        BODY_FRONT_OUTER: {
          ...state.BODY_FRONT_OUTER,
          design: action.payload,
        },
        BODY_BACK_OUTER: {
          ...state.BODY_BACK_OUTER,
          design: action.payload,
        },
        SLEEVE_LEFT_OUTER: {
          ...state.SLEEVE_LEFT_OUTER,
          design: action.payload,
        },
        SLEEVE_RIGHT_OUTER: {
          ...state.SLEEVE_LEFT_OUTER,
          design: action.payload,
        },

        BODY_FRONT_INNER: {
          ...state.BODY_FRONT_INNER,
          design: action.payload,
        },
        BODY_BACK_INNER: {
          ...state.BODY_BACK_INNER,
          design: action.payload,
        },
        SLEEVE_LEFT_INNER: {
          ...state.SLEEVE_LEFT_INNER,
          design: action.payload,
        },
        SLEEVE_RIGHT_INNER: {
          ...state.SLEEVE_RIGHT_INNER,
          design: action.payload,
        },
      });

    case 'CLEAR_ALL_DESIGNS':
      return (state = initialState2);

    default:
      return state;
  }
};
export default Design2;
