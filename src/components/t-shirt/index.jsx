import React, { useRef, useState, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';

// import { TextureLoader } from 'three';

const Tshirt = (props) => {
  const { handleSetPart, normalMap, bumpMap, design } = props;
  console.log(
    '%c 🧘‍♀️🧘‍♀️🧘‍♀️🧘‍♀️: Tshirt -> design ',
    'font-size:16px;background-color:#05de7b;color:black;',
    design
  );
  // console.log(
  //   '%c 🤞: range ',
  //   'font-size:16px;background-color:#b07888;color:white;',
  //   range.x
  // );

  // const [hovered, set] = useState(null);

  // const ACBump = textLoader.load('bumpMaps/Fabric_034_height.png');
  //const group = useRef();

  const { nodes } = useGLTF('compressed_t-shirt.glb');

  console.log(
    '%c 🆓🆓🆓🆓🆓: nodes -> map',
    'font-size:16px;background-color:#48748c;color:white;',
    nodes
  );

  return (
    <group
      // ref={group}
      dispose={null}
      // onPointerOver={(e) => (
      //   e.stopPropagation(), handleSetPart(e.object.material.name)
      // )}
      // onPointerOut={(e) => e.intersections.length === 0 && handleSetPart(null)}
      //onPointerMissed={() => (state.current = null)}
      // onPointerMissed={() => handleSetPart(null)}
      //onPointerDown={(e) => (e.stopPropagation(), (state.current = e.object.material.name))}
      // onPointerDown={(e) => (
      //   e.stopPropagation(), handleSetPart(null) //handleSetPart(e.object.material.name)
      // )}
      onClick={(e) => (
        e.stopPropagation(), handleSetPart(e.object.material.name)
      )}
    >
      <mesh
        geometry={nodes.BASE_RIB.geometry}
        material={nodes.BASE_RIB.material}
        material-name={null}
      />
      <mesh
        geometry={nodes.BASE_MOON.geometry}
        material={nodes.BASE_MOON.material}
        material-name={null}
        material-normalMap={normalMap}
        material-bumpMap={bumpMap}
        material-map={design.MOON.design}
      />
      <mesh
        geometry={nodes.BASE_BODY_BACK_INNER.geometry}
        material={nodes.BASE_BODY_BACK_INNER.material}
        material-name={'BODY_BACK_INNER'}
        material-normalMap={normalMap}
        material-bumpMap={bumpMap}
        material-map={design.BODY_BACK_INNER.design}
      />
      <mesh
        geometry={nodes.BASE_BODY_FRONT_INNER.geometry}
        material={nodes.BASE_BODY_FRONT_INNER.material}
        material-name={'BODY_FRONT_INNER'}
        material-normalMap={normalMap}
        material-bumpMap={bumpMap}
        material-map={design.BODY_FRONT_INNER.design}
      />
      <mesh
        geometry={nodes.BASE_STITCH.geometry}
        material={nodes.BASE_STITCH.material}
        material-name={null}
      />
      {/* BACK_OUTER */}

      <mesh
        geometry={nodes.BASE_BODY_BACK_OUTER.geometry}
        material={nodes.BASE_BODY_BACK_OUTER.material}
        material-name={'BODY_BACK_OUTER'}
        material-normalMap={normalMap}
        material-bumpMap={bumpMap}
        material-map={design.BODY_BACK_OUTER.design}
        material-map-offset-x={design.BODY_BACK_OUTER.x}
        material-map-offset-y={design.BODY_BACK_OUTER.y}
      />
      {/* SLEEVE_LEFT_OUTER */}
      <mesh
        geometry={nodes.BASE_SLEEVE_LEFT_OUTER.geometry}
        material={nodes.BASE_SLEEVE_LEFT_OUTER.material}
        material-name={'SLEEVE_LEFT_OUTER'}
        material-normalMap={normalMap}
        material-bumpMap={bumpMap}
        material-map={design.SLEEVE_LEFT_OUTER.design}
        material-map-offset-x={design.SLEEVE_LEFT_OUTER.x}
        material-map-offset-y={design.SLEEVE_LEFT_OUTER.y}
      />
      {/* SLEEVE_RIGHT_OUTER */}
      <mesh
        geometry={nodes.BASE_SLEEVE_RIGHT_OUTER.geometry}
        material={nodes.BASE_SLEEVE_RIGHT_OUTER.material}
        material-name={'SLEEVE_RIGHT_OUTER'}
        material-normalMap={normalMap}
        material-bumpMap={bumpMap}
        material-map={design.SLEEVE_RIGHT_OUTER.design}
        material-map-offset-x={design.SLEEVE_RIGHT_OUTER.x}
        material-map-offset-y={design.SLEEVE_RIGHT_OUTER.y}
      />
      <mesh
        geometry={nodes.BASE_SLEEVE_RIGHT_INNER.geometry}
        material={nodes.BASE_SLEEVE_RIGHT_INNER.material}
        material-name={'SLEEVE_RIGHT_INNER'}
        material-normalMap={normalMap}
        material-bumpMap={bumpMap}
        material-map={design.SLEEVE_RIGHT_INNER.design}
      />
      <mesh
        geometry={nodes.BASE_SLEEVE_LEFT_INNER.geometry}
        material={nodes.BASE_SLEEVE_LEFT_INNER.material}
        material-name={'SLEEVE_LEFT_INNER'}
        material-normalMap={normalMap}
        material-bumpMap={bumpMap}
        material-map={design.SLEEVE_LEFT_INNER.design}
      />

      {/* BODY_FRONT_OUTER */}
      <mesh
        geometry={nodes.BASE_BODY_FRONT_OUTER.geometry}
        material={nodes.BASE_BODY_FRONT_OUTER.material}
        material-name={'BODY_FRONT_OUTER'}
        material-normalMap={normalMap}
        material-bumpMap={bumpMap}
        material-map={design.BODY_FRONT_OUTER.design}
        material-map-offset-x={design.BODY_FRONT_OUTER.x}
        material-map-offset-y={design.BODY_FRONT_OUTER.y}
      />
    </group>
  );
};
export default Tshirt;
