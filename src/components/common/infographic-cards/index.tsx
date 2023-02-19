import React from 'react';
import Xarrow, { useXarrow, Xwrapper } from 'react-xarrows';
import Draggable from 'react-draggable';

const DraggableBox = ({ children }: { children: JSX.Element }) => {
  const updateXarrow = useXarrow();
  return (
    <Draggable onDrag={updateXarrow} onStop={updateXarrow}>
      {children}
    </Draggable>
  );
};

function Test() {
  return (
    <div
      style={{
        // display: 'flex',
        // justifyContent: 'space-evenly',
        width: '100%',
        height: '100%',
        minHeight: '750px',
        position: 'relative',
      }}
    >
      <Xwrapper>
        <div
          id="start"
          className="mx-auto border p-2 text-center"
          style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          Sister Concern
        </div>
        <DraggableBox>
          <div
            id="benemoy"
            className="border p-2 rounded"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              cursor: 'pointer',
            }}
          >
            <img src="http://via.placeholder.com/150x100" alt="" />
            <h3>Benemoy</h3>
            <a href="#">Visit</a>
          </div>
        </DraggableBox>
        <DraggableBox>
          <div
            id="skytrip"
            className="border p-2 rounded"
            style={{
              position: 'absolute',
              top: '15px',
              left: '30%',
              //   transform: 'translateX(-50%)',
            }}
          >
            <img src="http://via.placeholder.com/150x100" alt="" />
            <h3>SkyTrip</h3>
            <a href="#">Visit</a>
          </div>
        </DraggableBox>
        <DraggableBox>
          <div
            id="jsk"
            className="border p-2 rounded"
            style={{
              position: 'absolute',
              top: '0',
              right: '0',
              //   transform: 'translateX(50%)',
              cursor: 'pointer',
            }}
          >
            <img src="http://via.placeholder.com/150x100" alt="" />
            <h3>JSK Group</h3>
            <a href="#">Visit</a>
          </div>
        </DraggableBox>
        <DraggableBox>
          <div
            id="sara"
            className="border p-2 rounded"
            style={{
              position: 'absolute',
              bottom: '0',
              left: '0',
            }}
          >
            <img src="http://via.placeholder.com/150x100" alt="" />
            <h3>Sara Medical</h3>
            <a href="#">Visit</a>
          </div>
        </DraggableBox>
        <DraggableBox>
          <div
            id="technomedia"
            className="border p-2 rounded"
            style={{
              position: 'absolute',
              bottom: '0',
              right: '0',
            }}
          >
            <img src="http://via.placeholder.com/150x100" alt="" />
            <h3>Technomedia Limited</h3>
            <a href="#">Visit</a>
          </div>
        </DraggableBox>
        {/* <DraggableBox id={'elem1'} />
        <DraggableBox id={'elem2'} />
        <DraggableBox id={'elem3'} /> */}
        <Xarrow
          start={'start'}
          end="benemoy"
          showTail
          tailShape="circle"
        />
        <Xarrow
          start={'start'}
          end="skytrip"
          showTail
          tailShape="circle"
        />
        <Xarrow
          start={'start'}
          end="jsk"
          showTail
          tailShape="circle"
        />
        <Xarrow
          start={'start'}
          end="sara"
          showTail
          tailShape="circle"
        />
        <Xarrow
          start={'start'}
          end="technomedia"
          showTail
          tailShape="circle"
        />
        {/* <Xarrow start={'start'} end="elem1" />
        <Xarrow start={'start'} end="elem2" />
        <Xarrow start={'start'} end="elem3" /> */}
      </Xwrapper>
    </div>
  );
}
export default Test;
