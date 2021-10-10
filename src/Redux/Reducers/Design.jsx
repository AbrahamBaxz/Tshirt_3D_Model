import { TextureLoader } from 'three';

const textLoader = new TextureLoader();
const whitePNG = textLoader.load(
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAA1BMVEX///+nxBvIAAAAR0lEQVR4nO3BAQ0AAADCoPdPbQ8HFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPBgxUwAAU+n3sIAAAAASUVORK5CYII='
);

const getInitialState = () => {
  whitePNG.name = 'whitePNG';
  return {
    MOON: {
      design: whitePNG,
    },
    BODY_FRONT_OUTER: {
      design: whitePNG,
      // x: 0.03,
      // y: -0.16,
      x: 0,
      y: 0,
      Xmin: -29 - 20,
      Xmax: 35 + 20,
      Ymin: -40,
      Ymax: 8,
      status: false,
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
      status: false,
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
      status: false,
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
      status: false,
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
};

const Design2 = (state2 = getInitialState(), action) => {
  console.log(
    '%c 🦁🦁🦁🦁🦁: action ',
    'font-size:16px;background-color:#eec4ad;color:black;',
    action
  );
  switch (action.type) {
    //BODY_FRONT_OUTER
    case 'BODY_FRONT_OUTER':
      return {
        ...state2,
        BODY_FRONT_OUTER: {
          ...state2.BODY_FRONT_OUTER,
          design: action.payload,
        },
      };
    case 'BODY_FRONT_OUTER_X':
      return {
        ...state2,
        BODY_FRONT_OUTER: {
          ...state2.BODY_FRONT_OUTER,
          x: action.payload,
          status: true,
        },
      };
    case 'BODY_FRONT_OUTER_Y':
      return {
        ...state2,
        BODY_FRONT_OUTER: {
          ...state2.BODY_FRONT_OUTER,
          y: action.payload,
          status: true,
        },
      };

    //BODY_BACK_OUTER
    case 'BODY_BACK_OUTER':
      return {
        ...state2,
        BODY_BACK_OUTER: {
          ...state2.BODY_BACK_OUTER,
          design: action.payload,
        },
      };
    case 'BODY_BACK_OUTER_X':
      return {
        ...state2,
        BODY_BACK_OUTER: {
          ...state2.BODY_BACK_OUTER,
          x: action.payload,
          status: true,
        },
      };
    case 'BODY_BACK_OUTER_Y':
      return {
        ...state2,
        BODY_BACK_OUTER: {
          ...state2.BODY_BACK_OUTER,
          y: action.payload,
          status: true,
        },
      };

    //SLEEVE_LEFT_OUTER
    case 'SLEEVE_LEFT_OUTER':
      return (state2 = {
        ...state2,
        SLEEVE_LEFT_OUTER: {
          ...state2.SLEEVE_LEFT_OUTER,
          design: action.payload,
        },
      });
    case 'SLEEVE_LEFT_OUTER_X':
      return (state2 = {
        ...state2,
        SLEEVE_LEFT_OUTER: {
          ...state2.SLEEVE_LEFT_OUTER,
          x: action.payload,
          status: true,
        },
      });
    case 'SLEEVE_LEFT_OUTER_Y':
      return (state2 = {
        ...state2,
        SLEEVE_LEFT_OUTER: {
          ...state2.SLEEVE_LEFT_OUTER,
          y: action.payload,
          status: true,
        },
      });

    //SLEEVE_RIGHT_OUTER
    case 'SLEEVE_RIGHT_OUTER':
      return (state2 = {
        ...state2,
        SLEEVE_RIGHT_OUTER: {
          ...state2.SLEEVE_LEFT_OUTER,
          design: action.payload,
        },
      });
    case 'SLEEVE_RIGHT_OUTER_X':
      return (state2 = {
        ...state2,
        SLEEVE_RIGHT_OUTER: {
          ...state2.SLEEVE_RIGHT_OUTER,
          x: action.payload,
          status: true,
        },
      });
    case 'SLEEVE_RIGHT_OUTER_Y':
      return (state2 = {
        ...state2,
        SLEEVE_RIGHT_OUTER: {
          ...state2.SLEEVE_RIGHT_OUTER,
          y: action.payload,
          status: true,
        },
      });

    //ALL
    case 'ALL':
      let newState = state2;
      newState = {
        ...newState,
        MOON: {
          ...state2.MOON,
          design: action.payload,
        },
      };

      newState = {
        ...newState,
        BODY_FRONT_OUTER: {
          ...state2.BODY_FRONT_OUTER,
          design: action.payload,
        },
      };

      newState = {
        ...newState,
        BODY_BACK_OUTER: {
          ...state2.BODY_BACK_OUTER,
          design: action.payload,
        },
      };

      newState = {
        ...newState,
        SLEEVE_LEFT_OUTER: {
          ...state2.SLEEVE_LEFT_OUTER,
          design: action.payload,
        },
      };
      newState = {
        ...newState,
        SLEEVE_RIGHT_OUTER: {
          ...state2.SLEEVE_LEFT_OUTER,
          design: action.payload,
        },
      };
      newState = {
        ...newState,
        BODY_FRONT_INNER: {
          ...state2.BODY_FRONT_INNER,
          design: action.payload,
        },
      };

      newState = {
        ...newState,
        BODY_BACK_INNER: {
          ...state2.BODY_BACK_INNER,
          design: action.payload,
        },
      };
      newState = {
        ...newState,
        SLEEVE_LEFT_INNER: {
          ...state2.SLEEVE_LEFT_INNER,
          design: action.payload,
        },
      };
      newState = {
        ...newState,
        SLEEVE_RIGHT_INNER: {
          ...state2.SLEEVE_RIGHT_INNER,
          design: action.payload,
        },
      };

      return newState;
    // {
    //   MOON: {
    //     ...state.MOON,
    //     design: action.payload,
    //   },
    //   BODY_FRONT_OUTER: {
    //     ...state.BODY_FRONT_OUTER,
    //     design: action.payload,
    //   },
    //   BODY_BACK_OUTER: {
    //     ...state.BODY_BACK_OUTER,
    //     design: action.payload,
    //   },
    //   SLEEVE_LEFT_OUTER: {
    //     ...state.SLEEVE_LEFT_OUTER,
    //     design: action.payload,
    //   },
    //   SLEEVE_RIGHT_OUTER: {
    //     ...state.SLEEVE_LEFT_OUTER,
    //     design: action.payload,
    //   },

    //   BODY_FRONT_INNER: {
    //     ...state.BODY_FRONT_INNER,
    //     design: action.payload,
    //   },
    //   BODY_BACK_INNER: {
    //     ...state.BODY_BACK_INNER,
    //     design: action.payload,
    //   },
    //   SLEEVE_LEFT_INNER: {
    //     ...state.SLEEVE_LEFT_INNER,
    //     design: action.payload,
    //   },
    //   SLEEVE_RIGHT_INNER: {
    //     ...state.SLEEVE_RIGHT_INNER,
    //     design: action.payload,
    //   },
    // };

    case 'ALL_X':
      return (state2 = {
        ...state2,
        BODY_FRONT_OUTER: {
          ...state2.BODY_FRONT_OUTER,
          x: action.payload,
        },
      });
    case 'ALL_Y':
      return (state2 = {
        ...state2,
        BODY_FRONT_OUTER: {
          ...state2.BODY_FRONT_OUTER,
          y: action.payload,
        },
      });

    case 'CLEAR_ALL_DESIGNS':
      return (state2 = getInitialState());

    default:
      return state2;
  }
};
export default Design2;
