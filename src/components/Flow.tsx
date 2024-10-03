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


const Flow = () => { 
  const flowWrapperRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const strokeDasharray = '10 10';

  
  const p1 = 0
  const p2 = p1 + 80
  const p3 = p2 + 40
  const p4 = p3 + 80
  const p5 = p4 + 80
  const p6 = p5 + 80
  const p7 = p6 + 80
  const p8 = p7 + 80
  const p9 = p8 + 80
  const p10 = p9 + 120
  const p11 = p10 + 90
  const p12 = p11 + 110
  const p13 = p12 + 160
  const p14 = p13 + 40
  const p15 = p14 + 40
  const p16 = p15 + 110
  const p17 = p16 + 120
  

  const initialNodes: Node[] = [
    { id: '0', position: { x: 0, y: p1 }, data: { label: '' }, type: 'anchor'},
    { id: '1', position: { x: 0, y: p3 }, data: { label: 'Frontend Basics' }, type: 'main'},
    { id: '1.1', position: { x: 400, y: p1 }, data: { label: 'HTML' }, type: 'sub'},
    { id: '1.2', position: { x: 400, y: p2 }, data: { label: 'CSS' }, type: 'sub'},
    { id: '1.3', position: { x: 400, y: p4 }, data: { label: 'JavaScript' }, type: 'sub'},
    { id: '1.4', position: { x: 400, y: p5 }, data: { label: 'TypeScript' }, type: 'sub'},
    { id: '2', position: { x: 200, y: p7 }, data: { label: 'Libraries' }, type: 'main'},
    { id: '2.1', position: { x: 0, y: p7 }, data: { label: 'React' }, type: 'sub'},
    { id: '3', position: { x: 600, y: p7 }, data: { label: 'Frameworks' }, type: 'main'},
    { id: '3.1', position: { x: 625, y: p5 }, data: { label: 'Next.js' }, type: 'sub'},
    { id: '4', position: { x: 380, y: p10 }, data: { label: 'Build Tools' }, type: 'main'},
    { id: '4.1', position: { x: 625, y: p10 }, data: { label: 'Linters & Formatters' }, type: 'sub'},
    { id: '4.1.a', position: { x: 690, y: p9 }, data: { label: 'ESLint' }, type: 'sub'},
    { id: '4.1.b', position: { x: 687, y: p11 }, data: { label: 'Prettier' }, type: 'sub'},
    { id: '4.2', position: { x: 390, y: p12 }, data: { label: 'Bundlers' }, type: 'sub'},
    { id: '4.2.a', position: { x: 625, y: p12 }, data: { label: 'Webpack' }, type: 'sub'},
    { id: '4.2.b', position: { x: 775, y: p12 }, data: { label: 'Vite' }, type: 'sub'},
    { id: '5', position: { x: 0, y: p10 + 80 }, data: { label: 'Version Control' }, type: 'main'},
    { id: '5.1', position: { x: 60, y: p9 + 90}, data: { label: 'Git' }, type: 'sub'},
    { id: '5.1.a', position: { x: 40, y: p9 - 10}, data: { label: 'GitHub' }, type: 'sub'},
    { id: '6', position: { x: 400, y: p14 }, data: { label: 'Deployment' }, type: 'main'},
    { id: '6.1', position: { x: 650, y: p13 }, data: { label: 'AWS Amplify' }, type: 'sub'},
    { id: '6.2', position: { x: 650, y: p15 }, data: { label: 'Firebase' }, type: 'sub'},
    { id: '7', position: { x: 150, y: p14 }, data: { label: 'Authentication' }, type: 'main'},
    { id: '7.1', position: { x: 0, y: p14 }, data: { label: 'OAuth' }, type: 'sub'},
    { id: '8', position: { x: 157, y: p16 }, data: { label: 'Web Security' }, type: 'main'},
    { id: '8.1', position: { x: 410, y: p16 }, data: { label: 'HTTPS' }, type: 'sub'},
    { id: '8.2', position: { x: 600, y: p16 }, data: { label: 'CORS' }, type: 'sub'},
    { id: '9', position: { x: 480, y: p17 }, data: { label: 'Package Managers' }, type: 'main'},
    { id: '9.1', position: { x: 157, y: p17 }, data: { label: 'npm' }, type: 'sub'},
    { id: '9.2', position: { x: 320, y: p17 }, data: { label: 'yarn' }, type: 'sub'},
  ];

  const initialEdges: Edge[] = [
    { id: 'e0-1', source: '0', target: '1', sourceHandle: 'bottom-s', targetHandle: 'top-t'},
    { id: 'e1-1.1', source: '1', target: '1.1', sourceHandle: 'right-s', targetHandle: 'left-t', style: { strokeDasharray: strokeDasharray }},
    { id: 'e1-1.2', source: '1', target: '1.2', sourceHandle: 'right-s', targetHandle: 'left-t', style: { strokeDasharray: strokeDasharray }},
    { id: 'e1-1.3', source: '1', target: '1.3', sourceHandle: 'right-s', targetHandle: 'left-t', style: { strokeDasharray: strokeDasharray }},
    { id: 'e1-1.4', source: '1', target: '1.4', sourceHandle: 'right-s', targetHandle: 'left-t', style: { strokeDasharray: strokeDasharray }},
    { id: 'e1-2', source: '1', target: '2', sourceHandle: 'bottom-s', targetHandle: 'top-t'},
    { id: 'e2-2.1', source: '2', target: '2.1', sourceHandle: 'left-s', targetHandle: 'right-t', style: { strokeDasharray: strokeDasharray }},
    { id: 'e2-3', source: '2', target: '3', sourceHandle: 'right-s', targetHandle: 'left-t'},
    { id: 'e3-3.1', source: '3', target: '3.1', sourceHandle: 'top-s', targetHandle: 'bottom-t', style: { strokeDasharray: strokeDasharray }},
    { id: 'e3-4', source: '3', target: '4', sourceHandle: 'bottom-s', targetHandle: 'top-t'},
    { id: 'e4-4.1', source: '4', target: '4.1', sourceHandle: 'right-s', targetHandle: 'left-t', style: { strokeDasharray: strokeDasharray }},
    { id: 'e4.1-4.1.a', source: '4.1', target: '4.1.a', sourceHandle: 'top-s', targetHandle: 'bottom-t', style: { strokeDasharray: strokeDasharray }},
    { id: 'e4.1-4.1.b', source: '4.1', target: '4.1.b', sourceHandle: 'bottom-s', targetHandle: 'top-t', style: { strokeDasharray: strokeDasharray }},
    { id: 'e4-4.2', source: '4', target: '4.2', sourceHandle: 'bottom-s', targetHandle: 'top-t', style: { strokeDasharray: strokeDasharray }},
    { id: 'e4.2-4.2.a', source: '4.2', target: '4.2.a', sourceHandle: 'right-s', targetHandle: 'left-t', style: { strokeDasharray: strokeDasharray }},
    { id: 'e4.2-4.2.b', source: '4.2', target: '4.2.b', sourceHandle: 'right-s', targetHandle: 'left-t', style: { strokeDasharray: strokeDasharray }},
    { id: 'e4-5', source: '4', target: '5', sourceHandle: 'left-s', targetHandle: 'right-t'},
    { id: 'e5-5.1', source: '5', target: '5.1', sourceHandle: 'top-s', targetHandle: 'bottom-t', style: { strokeDasharray: strokeDasharray }},
    { id: 'e5.1-5.1.a', source: '5.1', target: '5.1.a', sourceHandle: 'top-s', targetHandle: 'bottom-t', style: { strokeDasharray: strokeDasharray }},
    { id: 'e5-6', source: '5', target: '6', sourceHandle: 'bottom-s', targetHandle: 'top-t'},
    { id: 'e6-6.1', source: '6', target: '6.1', sourceHandle: 'right-s', targetHandle: 'left-t', style: { strokeDasharray: strokeDasharray }},
    { id: 'e6-6.2', source: '6', target: '6.2', sourceHandle: 'right-s', targetHandle: 'left-t', style: { strokeDasharray: strokeDasharray }},
    { id: 'e6-7', source: '6', target: '7', sourceHandle: 'left-s', targetHandle: 'right-t'},
    { id: 'e7-7.1', source: '7', target: '7.1', sourceHandle: 'left-s', targetHandle: 'right-t', style: { strokeDasharray: strokeDasharray }},
    { id: 'e7-8', source: '7', target: '8', sourceHandle: 'bottom-s', targetHandle: 'top-t'},
    { id: 'e8-8.1', source: '8', target: '8.1', sourceHandle: 'right-s', targetHandle: 'left-t', style: { strokeDasharray: strokeDasharray }},
    { id: 'e8-8.2', source: '8', target: '8.2', sourceHandle: 'right-s', targetHandle: 'left-t', style: { strokeDasharray: strokeDasharray }},
    { id: 'e8-9', source: '8', target: '9', sourceHandle: 'bottom-s', targetHandle: 'top-t'},
    { id: 'e9-9.1', source: '9', target: '9.1', sourceHandle: 'left-s', targetHandle: 'right-t', style: { strokeDasharray: strokeDasharray }},
    { id: 'e9-9.2', source: '9', target: '9.2', sourceHandle: 'left-s', targetHandle: 'right-t', style: { strokeDasharray: strokeDasharray }},
    

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