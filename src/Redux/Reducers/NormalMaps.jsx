import { TextureLoader } from 'three';

const textLoader = new TextureLoader();
const Fabric_034 = textLoader.load('normalMaps/Fabric_034_normal.jpg');
const Fabric_Knitted = textLoader.load(
  'normalMaps/Fabric_Knitted_005_normal.jpg'
);
const Fabric_Nylon = textLoader.load('normalMaps/Fabric_Nylon_002_normal.jpg');

const NormalMaps = (state = null, action) => {
  console.log(
    '%c 😄: Textures -> action.type ',
    'font-size:16px;background-color:#d6fe86;color:black;',
    action.type
  );
  switch (action.type) {
    case 'NO_NORMAL':
      return (state = null);
    case 'FABRIC_034_NORMAL':
      return (state = Fabric_034);
    case 'FABRIC_KNIT_NORMAL':
      return (state = Fabric_Knitted);
    case 'FABRIC_NYLON_NORMAL':
      return (state = Fabric_Nylon);

    default:
      return state;
  }
};

export default NormalMaps;
