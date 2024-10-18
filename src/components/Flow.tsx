import React, { useCallback, useEffect, useRef, useState } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge, Connection, ReactFlowInstance, Node, Edge } from 'reactflow';
import MainNode from './MainNode';
import SubNode from './SubNode';
import AnchorNode from './AnchorNode';

const nodeTypes = {
  main: MainNode,
  sub: SubNode,
  anchor: AnchorNode,
};

type FlowProps = {
  initialNodes: Node[];
  initialEdges: Edge[];
};

const Flow: React.FC<FlowProps> = ({ initialNodes, initialEdges }) => {
  const flowWrapperRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const [zoomLevel, setZoomLevel] = useState(1);
  const reactFlowInstance = useRef<ReactFlowInstance | null>(null);

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const updateDimensions = useCallback(() => {
    if (flowWrapperRef.current) {
      const { offsetWidth, offsetHeight } = flowWrapperRef.current;
      setDimensions({ width: offsetWidth, height: offsetHeight });

      const newZoomLevel = Math.max(0.5, Math.min(1, offsetWidth / 1000));
      setZoomLevel(newZoomLevel);
      if (reactFlowInstance.current) {
        reactFlowInstance.current.setViewport({ x: 0, y: 0, zoom: newZoomLevel});
      }
    }
  }, []);

  useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => window.removeEventListener('resize', updateDimensions);
  }, [updateDimensions]);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge({ ...params }, eds)),
    [setEdges]
  );

  const onInit = useCallback((instance: ReactFlowInstance) => {
    reactFlowInstance.current = instance;
    instance.setViewport({ x: 0, y: 0, zoom: zoomLevel});
  }, [zoomLevel]);

  useEffect(() => {
    setNodes(initialNodes);
    setEdges(initialEdges);
  }, [initialNodes, initialEdges, setNodes, setEdges]);

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
        translateExtent={[[0, 0], [(dimensions.width ) / zoomLevel, dimensions.height / zoomLevel]]}
        nodeExtent={[[0, 0], [dimensions.width / zoomLevel, dimensions.height / zoomLevel]]}
        proOptions={{ hideAttribution: true }}
      />
    </div>
  );
};

export default Flow;
