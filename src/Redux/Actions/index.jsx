//actions for PARTs
export const changeToBodyFrontOuter = () => {
  return {
    type: 'BODY_FRONT_OUTER',
  };
};

export const changeToBodyBackOuter = () => {
  return {
    type: 'BODY_BACK_OUTER',
  };
};

export const changeToSleeveLeftOuter = () => {
  return {
    type: 'SLEEVE_LEFT_OUTER',
  };
};

export const changeToSleeveRightOuter = () => {
  return {
    type: 'SLEEVE_RIGHT_OUTER',
  };
};

export const changePart = (part) => {
  return {
    type: 'SET_PART',
    payload: part,
  };
};

//actions for NormalMaps
export const changeToFabric034Normal = () => {
  return {
    type: 'FABRIC_034_NORMAL',
  };
};

export const changeToFabricKnitNormal = () => {
  return {
    type: 'FABRIC_KNIT_NORMAL',
  };
};

export const changeToFabricNylonNormal = () => {
  return {
    type: 'FABRIC_NYLON_NORMAL',
  };
};

//actions for BumpMaps
export const changeToFabric034Bump = () => {
  return {
    type: 'FABRIC_034_BUMP',
  };
};

export const changeToFabricKnitBump = () => {
  return {
    type: 'FABRIC_KNIT_BUMP',
  };
};

export const changeToFabricNylonBump = () => {
  return {
    type: 'FABRIC_NYLON_BUMP',
  };
};

export const changeToNoTextures = () => {
  return {
    type: 'NO_TEXTURE',
  };
};

export const changeTexture = (action) => {
  return {
    type: action,
  };
};

export const addDesign = (img, part) => {
  return {
    type: part,
    payload: img,
  };
};

export const moveDesignX = (x, part) => {
  console.log(
    '%c 🙇‍♀️: moveDesignX -> x, part ',
    'font-size:16px;background-color:#1b0c0d;color:white;',
    x,
    part.concat('_X')
  );
  return {
    type: part.concat('_X'),
    payload: x,
  };
};

export const moveDesignY = (y, part) => {
  return {
    type: part.concat('_Y'),
    payload: y,
  };
};

export const deleteDesign = () => {
  return {
    type: 'CLEAR_ALL_DESIGNS',
  };
};
