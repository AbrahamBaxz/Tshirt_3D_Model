import './App.css';
import { Canvas } from '@react-three/fiber';
import Tshirt from './components/t-shirt';
import Picker from './components/Picker';
import React, { useState, Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';
import {
  changePart,
  changeTexture,
  addDesign,
  deleteDesign,
  moveDesignX,
  moveDesignY,
} from './Redux/Actions';

import { useSelector, useDispatch } from 'react-redux';

function App() {
  // const [range, setRange] = useState({
  //   x: 0,
  //   y: -0.16,
  // });
  const part = useSelector((state) => state.part);
  console.log(
    '%c 🏦🏦🏦🏦🏦🏦: App -> part ',
    'font-size:16px;background-color:#dd07c8;color:white;',
    part
  );
  // const normal = useSelector((state) => state.normal);
  // const bump = useSelector((state) => state.bump);
  const texture = useSelector((state) => state.texture);

  const design = useSelector((state) => state.design);
  // console.log(
  //   '%c 🚗: App -> design ',
  //   'font-size:16px;background-color:#6fc642;color:white;',
  //   design
  // );

  const dispatch = useDispatch();

  const handleSetPart = (e) => {
    dispatch(changePart(e.target.value));
  };

  const handleChangeTexture = (e) => {
    dispatch(changeTexture(e.target.value));
  };

  const handleAddDesign = (img, part) => {
    dispatch(addDesign(img, part));
  };

  const handleCleanShirt = () => {
    dispatch(deleteDesign());
  };

  const handleXRange = (e) => {
    console.log('eeeeeeeeXXXXX', e.target.value / 100);
    // console.log(
    //   '%c 🏦🏦🏦🏦🏦🏦: App -> part X ',
    //   'font-size:16px;background-color:#dd07c8;color:white;',
    //   part
    // );
    //setRange({ ...range, x: parseFloat(e.target.value / 100) });
    dispatch(moveDesignX(e.target.value / 100, part));
  };
  const handleYRange = (e) => {
    // console.log(
    //   '%c 🏦🏦🏦🏦🏦🏦: App -> part Y ',
    //   'font-size:16px;background-color:#dd07c8;color:white;',
    //   part
    // );
    console.log('eeeeeeeeYYYYYY', e.target.value / 100);
    //setRange({ ...range, y: parseFloat(e.target.value / 100) });
    dispatch(moveDesignY(e.target.value / 100, part));
  };

  // const onMouseUp = (axis) => {
  //   dispatch(changeStatus(axis, part));
  // };

  return (
    <div>
      <select onChange={handleChangeTexture}>
        <option value="FABRIC_KNIT">FABRIC KNIT </option>
        <option value="FABRIC_034">FABRIC 034 </option>
        <option value="FABRIC_NYLON">FABRIC NYLON</option>
      </select>
      <select onChange={handleSetPart}>
        <option value="null">Choose a part</option>
        <option value="ALL">ALL</option>
        <option value="BODY_FRONT_OUTER">BODY_FRONT_OUTER</option>
        <option value="BODY_BACK_OUTER">BODY_BACK_OUTER</option>
        <option value="SLEEVE_LEFT_OUTER">SLEEVE_LEFT_OUTER</option>
        <option value="SLEEVE_RIGHT_OUTER">SLEEVE_RIGHT_OUTER</option>
        {/* <option value=""></option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option> */}
      </select>
      <button onClick={handleCleanShirt}>Clean T-shirt</button>

      {/* {part !== null &&
        part === 'ALL' &&
        design.BODY_FRONT_OUTER.design.name !== 'whitePNG' && (
          <>
            <label>X</label>
            <input
              type="range"
              min={design.BODY_FRONT_OUTER.Xmin} //-29
              max={design.BODY_FRONT_OUTER.Xmax} // 35
              value={design.BODY_FRONT_OUTER.x * 100}
              onChange={handleXRange}
            />
            <label>Y</label>
            <input
              type="range"
              min={design.BODY_FRONT_OUTER.Ymin} //-40
              max={design.BODY_FRONT_OUTER.Ymax} //8
              value={design.BODY_FRONT_OUTER.y * 100}
              onChange={handleYRange}
            />
          </>
        )} */}

      {part !== null &&
        part !== 'ALL' &&
        design[part].design.name !== 'whitePNG' && (
          <>
            <label>X</label>
            <input
              type="range"
              min={design[part].Xmin} //-29
              max={design[part].Xmax} // 35
              value={design[part].x * 100}
              onChange={handleXRange}
            />
            <label>Y</label>
            <input
              type="range"
              min={design[part].Ymin} //-40
              max={design[part].Ymax} //8
              value={design[part].y * 100}
              onChange={handleYRange}
            />
          </>
        )}

      <Canvas camera={{ position: [13, 7, 117], fov: 40 }}>
        {/* <ambientLight intensity={1} color="fff" /> */}

        <pointLight position={[25, 22, 45]} intensity={1} color={'#ffffff'} />
        <pointLight position={[25, 22, -45]} intensity={1} color={'#ffffff'} />
        <pointLight position={[-25, 22, 45]} intensity={1} color={'#ffffff'} />
        <pointLight position={[-25, 22, -45]} intensity={1} color={'#ffffff'} />

        <Suspense fallback={null}>
          <Tshirt
            normalMap={texture.normal}
            bumpMap={texture.bump}
            design={design}
            part={part}
          />
        </Suspense>
        <OrbitControls />
      </Canvas>
      <Picker currentPart={part} handleAddDesign={handleAddDesign} />
    </div>
  );
}

export default App;
