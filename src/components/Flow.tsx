import React, { useCallback, useEffect, useRef, useState } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge, Connection, Edge, Node, ReactFlowInstance } from 'reactflow';
import MainNode from './MainNode';
import SubNode from './SubNode';
import AnchorNode from './AnchorNode';

const nodeTypes = {
  main: MainNode,
  sub: SubNode,
  anchor: AnchorNode,
};

interface FlowProps {
  nodes: Node[];
  edges: Edge[];
}

const Flow: React.FC<FlowProps> = ({ nodes: initialNodes, edges: initialEdges }) => { 
  const flowWrapperRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const [nodes, , onNodesChange] = useNodesState(initialNodes);
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
    <div style={{ width: '100%', height: '1500px' }} ref={flowWrapperRef}>
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
        proOptions={{ hideAttribution: true }}
      >
      </ReactFlow>
    </div>
  );
};

export default Flow;