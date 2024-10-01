import React, { useCallback, useEffect, useRef, useState } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge, Connection, Edge, Node, ReactFlowInstance } from 'reactflow';
import MainNode from './MainNode';
import SubNode from './SubNode';

const nodeTypes = {
  main: MainNode,
  sub: SubNode,
};

const Flow = () => { 
  const flowWrapperRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const initialNodes: Node[] = [
    { id: '1', position: { x: 10, y: 100 }, data: { label: 'Frontend Basics' }, type: 'main'},
    { id: '2', position: { x: 400, y: 10 }, data: { label: 'HTML' }, type: 'sub'},
    { id: '3', position: { x: 400, y: 100 }, data: { label: 'CSS' }, type: 'sub'},
    { id: '4', position: { x: 400, y: 200 }, data: { label: 'JavaScript' }, type: 'sub'},
  ];

  const initialEdges: Edge[] = [
    { id: 'e1-2', source: '1', target: '2', sourceHandle: 'right', targetHandle: 'left'},
    { id: 'e1-3', source: '1', target: '3', sourceHandle: 'right', targetHandle: 'left'},
    { id: 'e1-4', source: '1', target: '4', sourceHandle: 'right', targetHandle: 'left'},
  ];

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  useEffect(() => {
    const updateDimensions = () => {
      if (flowWrapperRef.current) {
        setDimensions({
          width: flowWrapperRef.current.offsetWidth,
          height: flowWrapperRef.current.offsetHeight,
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);
  
  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge({ ...params}, eds)),
    [setEdges]
  );

  const onInit = useCallback((instance: ReactFlowInstance) => {
    instance.setViewport({ x: 0, y: 0, zoom: 1 });
  }, []);

  return (
    <div style={{ width: '100%', height: '100vh' }} ref={flowWrapperRef}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onInit={onInit}
        nodeTypes={nodeTypes}
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        preventScrolling={false}
        panOnDrag={false}
        translateExtent={[[0, 0], [dimensions.width, dimensions.height]]}
        nodeExtent={[[0, 0], [dimensions.width, dimensions.height]]}
        attributionPosition='bottom-center'
      >
      </ReactFlow>
    </div>
  );
};

export default Flow;