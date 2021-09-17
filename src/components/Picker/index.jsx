import React, { useState, useRef, useEffect } from 'react';
import { Stage, Layer, Rect, Image } from 'react-konva';
import { Texture, TextureLoader } from 'three';
import '../../App.css';
import useImage from 'use-image';

import TranformStar from './Transform/Star';
import TransformQuad from './Transform/Quad';
import TransformPicture from './Transform/Picture';

const Picker = (props) => {
  const [shapes, setShapes] = useState([]);

  const [selectedId, selectShape] = useState(null);
  const stageRef = useRef(null);
  const layerRef = useRef(null);
  // const [image] = useImage(
  //   'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAA1BMVEX///+nxBvIAAAAR0lEQVR4nO3BAQ0AAADCoPdPbQ8HFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPBgxUwAAU+n3sIAAAAASUVORK5CYII='
  // );
  const [pic, setPic] = useState();
  // console.log(
  //   '%c 🌋: Picker -> shapes ',
  //   'font-size:16px;background-color:#1e355c;color:white;',
  //   shapes
  // );
  const { currentPart, handleAddDesign } = props;

  useEffect(() => {
    const image = new window.Image();
    image.src =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAA1BMVEX///+nxBvIAAAAR0lEQVR4nO3BAQ0AAADCoPdPbQ8HFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPBgxUwAAU+n3sIAAAAASUVORK5CYII=';
    setPic(image);
  }, []);

  const handleGenerateStar = () => {
    setShapes([
      ...shapes,
      {
        id: 'star'.concat(Math.random().toString()),
        type: 'star',
        key: Math.random().toString(),
        id: Math.random().toString(),
        x: (Math.random() * window.innerWidth) / 100,
        y: (Math.random() * window.innerHeight) / 100,
        rotation: Math.random() * 180,
        isDragging: false,
        numPoints: 5,
        innerRadius: 100,
        outerRadius: 200,
        fill: '#89b717',
        opacity: 0.8,
      },
    ]);
  };

  const handleQuadangles = () => {
    setShapes([
      ...shapes,
      {
        id: 'quad'.concat(Math.random().toString()),
        type: 'quad',
        key: Math.random().toString(),
        id: Math.random().toString(),
        x: (Math.random() * window.innerWidth) / 2,
        y: (Math.random() * window.innerHeight) / 2,
        rotation: Math.random() * 180,
        isDragging: false,

        width: 100,
        height: 90,
        fill: '#a31724',
        opacity: 0.8,
      },
    ]);
  };

  const handleGenerateImage = (image) => {
    setShapes([
      ...shapes,
      {
        id: 'image'.concat(Math.random().toString()),
        type: 'image',
        key: Math.random().toString(),
        id: Math.random().toString(),
        x: (Math.random() * window.innerWidth) / 100,
        y: (Math.random() * window.innerHeight) / 100,
        isDragging: false,
        opacity: 0.8,
        image,
      },
    ]);
  };

  const clearStage = () => {
    console.log('ssssssssss', layerRef.current.children);
    // const shapes = layerRef.current.children;
    // layerRef.current.children.map((shape) => {
    //   shape.destroy();
    // });
    setShapes([]);
  };

  const handleApply = (applyAll) => {
    if (stageRef !== null) {
      const img = stageRef.current.toDataURL();
      const texture = new TextureLoader().load(img);

      // console.log(
      //   '%c 🗳️: Picker -> stageRef -> texture ',
      //   'font-size:16px;background-color:#df7e78;color:white;',
      //   img
      // );
      texture.flipY = false;
      //texture.matrixAutoUpdate = false;

      if (applyAll) handleAddDesign(texture, 'ALL');

      handleAddDesign(texture, currentPart);
    }
  };

  const checkDeselect = (e) => {
    console.log(
      '%c 👮‍♀️: checkDeselect -> e ',
      'font-size:16px;background-color:#df072a;color:white;',
      e.target
    );
    // deselect when clicked on empty area

    //const clickedOnEmpty = e.target === e.target.getStage();
    const clickedOnEmpty = e.target.attrs.id === 'backgroundWhite';

    if (clickedOnEmpty) {
      selectShape(null);
    }
  };

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    const image = new window.Image();
    image.src = base64;
    setPic(image);

    // console.log('sdfggagdgsdbff', base64);
  };

  const handleUploadPicture = async (e) => {
    const file = e.target.files[0];
    if (file !== null && file !== undefined) {
      const base64 = await convertBase64(file);
      const image = new window.Image();
      image.src = base64;
      handleGenerateImage(image);
    }
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (
    <>
      {currentPart !== 'default' && (
        <>
          <h1>Part: {currentPart} </h1>

          <button onClick={() => handleApply(false)}>Apply</button>
        </>
      )}
      {/* <button onClick={() => handleApply(true)}>Apply All</button> */}

      <button onClick={handleGenerateStar}>Add Star</button>
      <button onClick={handleQuadangles}>Add Rectangle</button>
      <button onClick={clearStage}>Clean Stage</button>
      <label for="myfile">Upload Pattern:</label>
      <input
        type="file"
        inputProps={{ accept: 'image/*' }}
        onChange={handleUpload}
        id="myfile"
        name="myfile"
      />
      <label for="myPic">Upload Picture:</label>
      <input
        type="file"
        inputProps={{ accept: 'image/*' }}
        onChange={handleUploadPicture}
        id="myPic"
        name="myPic"
      />
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        ref={stageRef}
        onMouseDown={checkDeselect}
        onTouchStart={checkDeselect}
      >
        <Layer ref={layerRef}>
          <Rect
            id="backgroundWhite"
            x={0}
            y={0}
            width={window.innerWidth}
            height={window.innerHeight}
            fillPatternImage={pic}
            // fill="white"
          />
          {shapes.length !== 0 &&
            shapes.map((shape, i) => {
              if (shape.type === 'star')
                return (
                  <TranformStar
                    key={i}
                    shapeProps={shape}
                    isSelected={shape.id === selectedId}
                    onSelect={() => {
                      selectShape(shape.id);
                    }}
                    onChange={(newAttrs) => {
                      const shp = shapes.slice();
                      shp[i] = newAttrs;
                      setShapes(shp);
                    }}
                  />
                );
              if (shape.type === 'quad')
                return (
                  <TransformQuad
                    key={i}
                    shapeProps={shape}
                    isSelected={shape.id === selectedId}
                    onSelect={() => {
                      selectShape(shape.id);
                    }}
                    onChange={(newAttrs) => {
                      const shp = shapes.slice();
                      shp[i] = newAttrs;
                      setShapes(shp);
                    }}
                  />
                );
              if (shape.type === 'image')
                return (
                  <TransformPicture
                    key={i}
                    shapeProps={shape}
                    isSelected={shape.id === selectedId}
                    onSelect={() => {
                      selectShape(shape.id);
                    }}
                    onChange={(newAttrs) => {
                      const shp = shapes.slice();
                      shp[i] = newAttrs;
                      setShapes(shp);
                    }}
                  />
                );
            })}
        </Layer>
      </Stage>
    </>
  );
};

export default Picker;
