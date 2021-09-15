import { TextureLoader } from 'three';

const textLoader = new TextureLoader();
const Fabric_034 = textLoader.load('bumpMaps/Fabric_034_height.png');
const Fabric_Knitted = textLoader.load('bumpMaps/Fabric_034_height.png');
const Fabric_Nylon = textLoader.load('bumpMaps/Fabric_Nylon_002_height.png');

const BumpMaps = (state = null, action) => {
  console.log(
    '%c 😄: Textures -> action.type ',
    'font-size:16px;background-color:#d6fe86;color:black;',
    action.type
  );
  switch (action.type) {
    case 'NO_BUMPS':
      return (state = null);
    case 'FABRIC_034_BUMP':
      return (state = Fabric_034);
    case 'FABRIC_KNIT_BUMP':
      return (state = Fabric_Knitted);
    case 'FABRIC_NYLON_BUMP':
      return (state = Fabric_Nylon);
    default:
      return state;
  }
};

export default BumpMaps;
