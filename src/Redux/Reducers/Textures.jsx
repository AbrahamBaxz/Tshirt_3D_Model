import { TextureLoader } from 'three';

const textLoader = new TextureLoader();
const Fabric_034_Bump = textLoader.load('bumpMaps/Fabric_034_height.png');
const Fabric_Knitted_Bump = textLoader.load(
  'bumpMaps/Fabric_Knitted_005_height.png'
);
const Fabric_Nylon_Bump = textLoader.load(
  'bumpMaps/Fabric_Nylon_002_height.png'
);

const Fabric_034_Normal = textLoader.load('normalMaps/Fabric_034_normal.jpg');
const Fabric_Knitted_Normal = textLoader.load(
  'normalMaps/Fabric_Knitted_005_normal.jpg'
);
const Fabric_Nylon_Normal = textLoader.load(
  'normalMaps/Fabric_Nylon_002_normal.jpg'
);

const initialState = {
  normal: Fabric_Knitted_Normal,
  bump: Fabric_Knitted_Bump,
};

const Textures = (state = initialState, action) => {
  switch (action.type) {
    case 'NO_TEXTURE':
      return (state = { normal: null, bump: null });
    // case 'FABRIC_034_BUMP':
    //   return (state = { normal: undefined, bump: Fabric_034_Bump });
    // case 'FABRIC_KNIT_BUMP':
    //   return (state = { normal: undefined, bump: Fabric_Knitted_Bump });
    // case 'FABRIC_NYLON_BUMP':
    //   return (state = { normal: undefined, bump: Fabric_Nylon_Bump });
    // case 'FABRIC_034_NORMAL':
    //   return (state = { bump: undefined, normal: Fabric_034_Normal });
    // case 'FABRIC_KNIT_NORMAL':
    //   return (state = { bump: undefined, normal: Fabric_Knitted_Normal });
    // case 'FABRIC_NYLON_NORMAL':
    //   return (state = { bump: undefined, normal: Fabric_Nylon_Normal });

    case 'FABRIC_034':
      return (state = { bump: Fabric_034_Bump, normal: Fabric_034_Normal });
    case 'FABRIC_KNIT':
      return (state = {
        bump: Fabric_Knitted_Bump,
        normal: Fabric_Knitted_Normal,
      });
    case 'FABRIC_NYLON':
      return (state = { bump: Fabric_Nylon_Bump, normal: Fabric_Nylon_Normal });
    // case 'CUSTOM':
    //   return (state = { ...state, normal: action.payload });
    default:
      return state;
  }
};

export default Textures;
