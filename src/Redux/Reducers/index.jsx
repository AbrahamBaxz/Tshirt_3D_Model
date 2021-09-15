import { combineReducers } from 'redux';
import Parts from './Parts';
// import NormalMaps from './NormalMaps';
// import BumpMaps from './BumpMaps';
import Textures from './Textures';
// import Design from './Design';
import Design2 from './Design';

const allReducers = combineReducers({
  part: Parts,
  // normal: NormalMaps,
  // bump: BumpMaps,
  texture: Textures,
  // design: Design,
  design: Design2,
});

export default allReducers;
