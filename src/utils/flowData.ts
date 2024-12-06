import { Node, Edge } from 'reactflow';

const calculateYPositions = (initial: number, increments: number[]) => {
  return increments.reduce((acc, increment) => {
    acc.push(acc[acc.length - 1] + increment);
    return acc;
  }, [initial]);
};

const yPositions = calculateYPositions(0, [80, 40, 40, 80, 80, 80, 80, 80, 120, 120, 110, 200, 50, 50, 110, 180]);

const strokeDasharray = { strokeDasharray: '10 10' };

export const getHeroFlowData = () => {

  const heroNodes: Node[] = [
    { id: '0', position: { x: 0, y: yPositions[0] }, data: { label: '' }, type: 'anchor'},
    { id: '1', position: { x: 0, y: yPositions[1] }, data: { label: 'Frontend Basics' }, type: 'main'},
    { id: '1.1', position: { x: 400, y: yPositions[0] }, data: { label: 'HTML' }, type: 'sub'},
    { id: '1.2', position: { x: 400, y: yPositions[1] }, data: { label: 'CSS' }, type: 'sub'},
    { id: '1.3', position: { x: 400, y: yPositions[3] }, data: { label: 'JavaScript' }, type: 'sub'},
    { id: '1.3.a', position: { x: 600, y: yPositions[3] }, data: { label: 'TypeScript' }, type: 'sub'},
    { id: '2', position: { x: 200, y: yPositions[6] }, data: { label: 'Libraries' }, type: 'main'},
    { id: '2.1', position: { x: 0, y: yPositions[6] }, data: { label: 'React' }, type: 'sub'},
    { id: '3', position: { x: 830, y: yPositions[6] }, data: { label: 'Frameworks' }, type: 'main'},
    { id: '3.1', position: { x: 830 + 25, y: yPositions[4] + 40}, data: { label: 'Next.js' }, type: 'sub'},
    { id: '4', position: { x: 380, y: yPositions[9] }, data: { label: 'Build Tools' }, type: 'main'},
    { id: '4.1', position: { x: 750, y: yPositions[9] }, data: { label: 'Linters & Formatters' }, type: 'sub'},
    { id: '4.1.a', position: { x: 749, y: yPositions[10] }, data: { label: 'ESLint' }, type: 'sub'},
    { id: '4.1.b', position: { x: 875, y: yPositions[10] }, data: { label: 'Prettier' }, type: 'sub'},
    { id: '4.2', position: { x: 390, y: yPositions[11] }, data: { label: 'Bundlers' }, type: 'sub'},
    { id: '4.2.a', position: { x: 749, y: yPositions[11] }, data: { label: 'Webpack' }, type: 'sub'},
    { id: '4.2.b', position: { x: 910, y: yPositions[11] }, data: { label: 'Vite' }, type: 'sub'},
    { id: '5', position: { x: 0, y: yPositions[9] + 80 }, data: { label: 'Version Control' }, type: 'main'},
    { id: '5.1', position: { x: 60, y: yPositions[8] + 90}, data: { label: 'Git' }, type: 'sub'},
    { id: '5.1.a', position: { x: 40, y: yPositions[8] - 10}, data: { label: 'GitHub' }, type: 'sub'},
    { id: '6', position: { x: 500, y: yPositions[13] }, data: { label: 'Deployment' }, type: 'main'},
    { id: '6.1', position: { x: 821, y: yPositions[12] }, data: { label: 'AWS Amplify' }, type: 'sub'},
    { id: '6.2', position: { x: 821, y: yPositions[14] }, data: { label: 'Firebase' }, type: 'sub'},
    { id: '7', position: { x: 193, y: yPositions[13] }, data: { label: 'Authentication' }, type: 'main'},
    { id: '7.1', position: { x: 0, y: yPositions[13] }, data: { label: 'OAuth' }, type: 'sub'},
    { id: '8', position: { x: 200, y: yPositions[15] }, data: { label: 'Web Security' }, type: 'main'},
    { id: '8.1', position: { x: 430, y: yPositions[15] }, data: { label: 'HTTPS' }, type: 'sub'},
    { id: '8.2', position: { x: 620, y: yPositions[15] }, data: { label: 'CORS' }, type: 'sub'},
    { id: '9', position: { x: 500, y: yPositions[16] }, data: { label: 'Package Managers' }, type: 'main'},
    { id: '9.1', position: { x: 200, y: yPositions[16] }, data: { label: 'npm' }, type: 'sub'},
    { id: '9.2', position: { x: 340, y: yPositions[16] }, data: { label: 'yarn' }, type: 'sub'},
  ];

  const heroEdges: Edge[] = [
    { id: 'e0-1', source: '0', target: '1', sourceHandle: 'bottom-s', targetHandle: 'top-t'},
    { id: 'e1-1.1', source: '1', target: '1.1', sourceHandle: 'right-s', targetHandle: 'left-t', style: strokeDasharray},
    { id: 'e1-1.2', source: '1', target: '1.2', sourceHandle: 'right-s', targetHandle: 'left-t', style: strokeDasharray},
    { id: 'e1-1.3', source: '1', target: '1.3', sourceHandle: 'right-s', targetHandle: 'left-t', style: strokeDasharray},
    { id: 'e1.3-1.3.a', source: '1.3', target: '1.3.a', sourceHandle: 'right-s', targetHandle: 'left-t', style: strokeDasharray},
    { id: 'e1-2', source: '1', target: '2', sourceHandle: 'bottom-s', targetHandle: 'top-t'},
    { id: 'e2-2.1', source: '2', target: '2.1', sourceHandle: 'left-s', targetHandle: 'right-t', style: strokeDasharray},
    { id: 'e2-3', source: '2', target: '3', sourceHandle: 'right-s', targetHandle: 'left-t'},
    { id: 'e3-3.1', source: '3', target: '3.1', sourceHandle: 'top-s', targetHandle: 'bottom-t', style: strokeDasharray},
    { id: 'e3-4', source: '3', target: '4', sourceHandle: 'bottom-s', targetHandle: 'top-t'},
    { id: 'e4-4.1', source: '4', target: '4.1', sourceHandle: 'right-s', targetHandle: 'left-t', style: strokeDasharray},
    { id: 'e4.1-4.1.a', source: '4.1', target: '4.1.a', sourceHandle: 'bottom-s', targetHandle: 'top-t', style: strokeDasharray},
    { id: 'e4.1-4.1.b', source: '4.1', target: '4.1.b', sourceHandle: 'bottom-s', targetHandle: 'top-t', style: strokeDasharray},
    { id: 'e4-4.2', source: '4', target: '4.2', sourceHandle: 'bottom-s', targetHandle: 'top-t', style: strokeDasharray},
    { id: 'e4.2-4.2.a', source: '4.2', target: '4.2.a', sourceHandle: 'right-s', targetHandle: 'left-t', style: strokeDasharray},
    { id: 'e4.2-4.2.b', source: '4.2', target: '4.2.b', sourceHandle: 'right-s', targetHandle: 'left-t', style: strokeDasharray},
    { id: 'e4-5', source: '4', target: '5', sourceHandle: 'left-s', targetHandle: 'right-t'},
    { id: 'e5-5.1', source: '5', target: '5.1', sourceHandle: 'top-s', targetHandle: 'bottom-t', style: strokeDasharray},
    { id: 'e5.1-5.1.a', source: '5.1', target: '5.1.a', sourceHandle: 'top-s', targetHandle: 'bottom-t', style: strokeDasharray},
    { id: 'e5-6', source: '5', target: '6', sourceHandle: 'bottom-s', targetHandle: 'top-t'},
    { id: 'e6-6.1', source: '6', target: '6.1', sourceHandle: 'right-s', targetHandle: 'left-t', style: strokeDasharray},
    { id: 'e6-6.2', source: '6', target: '6.2', sourceHandle: 'right-s', targetHandle: 'left-t', style: strokeDasharray},
    { id: 'e6-7', source: '6', target: '7', sourceHandle: 'left-s', targetHandle: 'right-t'},
    { id: 'e7-7.1', source: '7', target: '7.1', sourceHandle: 'left-s', targetHandle: 'right-t', style: strokeDasharray},
    { id: 'e7-8', source: '7', target: '8', sourceHandle: 'bottom-s', targetHandle: 'top-t'},
    { id: 'e8-8.1', source: '8', target: '8.1', sourceHandle: 'right-s', targetHandle: 'left-t', style: strokeDasharray},
    { id: 'e8-8.2', source: '8', target: '8.2', sourceHandle: 'right-s', targetHandle: 'left-t', style: strokeDasharray},
    { id: 'e8-9', source: '8', target: '9', sourceHandle: 'bottom-s', targetHandle: 'top-t'},
    { id: 'e9-9.1', source: '9', target: '9.1', sourceHandle: 'left-s', targetHandle: 'right-t', style: strokeDasharray},
    { id: 'e9-9.2', source: '9', target: '9.2', sourceHandle: 'left-s', targetHandle: 'right-t', style: strokeDasharray},
  ];

  return { heroNodes, heroEdges };
};

export const getTouchstoneFlowData = (): { projectNodes: Node[], projectEdges: Edge[]} => {

  const projectNodes: Node[] = [
    { id: '0', position: { x: 0, y: yPositions[0] }, data: { label: '' }, type: 'anchor'},
    { id: '1', position: { x: 27, y: yPositions[2] }, data: { label: 'JavaScript' }, type: 'main'},
    { id: '1.1', position: { x: 51, y: yPositions[4] }, data: { label: 'React' }, type: 'sub'},
    { id: '2', position: { x: 795, y: yPositions[2] }, data: { label: 'Module Bundler' }, type: 'main'},
    { id: '2.1', position: { x: 851, y: yPositions[4] }, data: { label: 'Vite' }, type: 'sub'},
    { id: '3', position: { x: 27, y: yPositions[8]}, data: { label: 'UI Library' }, type: 'main'},
    { id: '3.1', position: { x: 21, y: yPositions[9]}, data: { label: 'Material UI' }, type: 'sub'},
    { id: '4', position: { x: 710, y: yPositions[8] }, data: { label: 'Authentication Strategy' }, type: 'main'},
    { id: '4.1', position: { x: 795, y: yPositions[9] }, data: { label: 'OAuth' }, type: 'sub'},
  ];
  
  const projectEdges: Edge[] = [
    { id: 'e0-1', source: '0', target: '1', sourceHandle: 'bottom-s', targetHandle: 'top-t'},
    { id: 'e1-1.1', source: '1', target: '1.1', sourceHandle: 'bottom-s', targetHandle: 'top-t', style: strokeDasharray},
    { id: 'e1-2', source: '1', target: '2', sourceHandle: 'right-s', targetHandle: 'left-t'},
    { id: 'e2-2.1', source: '2', target: '2.1', sourceHandle: 'bottom-s', targetHandle: 'top-t', style: strokeDasharray},
    { id: 'e2-3', source: '2', target: '3', sourceHandle: 'left-s', targetHandle: 'right-t'},
    { id: 'e3-3.1', source: '3', target: '3.1', sourceHandle: 'bottom-s', targetHandle: 'top-t', style: strokeDasharray},
    { id: 'e3-4', source: '3', target: '4', sourceHandle: 'right-s', targetHandle: 'left-t'},
    { id: 'e4-4.1', source: '4', target: '4.1', sourceHandle: 'bottom-s', targetHandle: 'top-t', style: strokeDasharray},
  ];

  return { projectNodes, projectEdges };
}

export const getWrapTintFlowData = (): { projectNodes: Node[], projectEdges: Edge[] } => {

  const projectNodes: Node[] = [
    { id: '0', position: { x: 0, y: yPositions[0] }, data: { label: '' }, type: 'anchor'},
    { id: '1', position: { x: 32, y: yPositions[2] }, data: { label: 'WebFlow' }, type: 'main'},
    { id: '1.1', position: { x: 25, y: yPositions[4] }, data: { label: 'Client First' }, type: 'sub'},
    { id: '2', position: { x: 833, y: yPositions[2] }, data: { label: 'Hosting' }, type: 'main'},
    { id: '2.1', position: { x: 802, y: yPositions[4] }, data: { label: 'AWS Route 53' }, type: 'sub'},
    { id: '3', position: { x: 32, y: yPositions[7]}, data: { label: 'Design' }, type: 'main'},
    { id: '3.1', position: { x: 35, y: yPositions[8] + 40 }, data: { label: 'Figma' }, type: 'sub'},
  ];
  
  const projectEdges: Edge[] = [
    { id: 'e0-1', source: '0', target: '1', sourceHandle: 'bottom-s', targetHandle: 'top-t'},
    { id: 'e1-1.1', source: '1', target: '1.1', sourceHandle: 'bottom-s', targetHandle: 'top-t', style: strokeDasharray},
    { id: 'e1-2', source: '1', target: '2', sourceHandle: 'right-s', targetHandle: 'left-t'},
    { id: 'e2-2.1', source: '2', target: '2.1', sourceHandle: 'bottom-s', targetHandle: 'top-t', style: strokeDasharray},
    { id: 'e2-3', source: '2', target: '3', sourceHandle: 'left-s', targetHandle: 'right-t'},
    { id: 'e3-3.1', source: '3', target: '3.1', sourceHandle: 'bottom-s', targetHandle: 'top-t', style: strokeDasharray},
    { id: 'e3-4', source: '3', target: '4', sourceHandle: 'right-s', targetHandle: 'left-t'},
    { id: 'e4-4.1', source: '4', target: '4.1', sourceHandle: 'bottom-s', targetHandle: 'top-t', style: strokeDasharray},
  ];

  return { projectNodes, projectEdges };
}

export const getInfiniteUiFlowData = (): { projectNodes: Node[], projectEdges: Edge[]} => {

  const projectNodes: Node[] = [
    { id: '0', position: { x: 0, y: yPositions[0] }, data: { label: '' }, type: 'anchor'},
    { id: '1', position: { x: 25, y: yPositions[2] }, data: { label: 'TypeScript' }, type: 'main'},
    { id: '1.1', position: { x: 50, y: yPositions[4] }, data: { label: 'React' }, type: 'sub'},
    { id: '2', position: { x: 790, y: yPositions[2] }, data: { label: 'Module Bundler' }, type: 'main'},
    { id: '2.1', position: { x: 820, y: yPositions[4] }, data: { label: 'Webpack' }, type: 'sub'},
    { id: '3', position: { x: 25, y: yPositions[7]}, data: { label: 'UI Library' }, type: 'main'},
    { id: '3.1', position: { x: 19, y: yPositions[8] + 40 }, data: { label: 'Ant Design' }, type: 'sub'},
    { id: '4', position: { x: 784, y: yPositions[7] }, data: { label: 'Formatter' }, type: 'main'},
    { id: '4.1', position: { x: 795, y: yPositions[8] + 40}, data: { label: 'Prettier' }, type: 'sub'},
    { id: '5', position: { x: 30, y: yPositions[10]}, data: { label: 'Server' }, type: 'main'},
    { id: '5.1', position: { x: 28, y: yPositions[11] + 10}, data: { label: 'Python' }, type: 'sub'},
  ];
  
  const projectEdges: Edge[] = [
    { id: 'e0-1', source: '0', target: '1', sourceHandle: 'bottom-s', targetHandle: 'top-t'},
    { id: 'e1-1.1', source: '1', target: '1.1', sourceHandle: 'bottom-s', targetHandle: 'top-t', style: strokeDasharray},
    { id: 'e1-2', source: '1', target: '2', sourceHandle: 'right-s', targetHandle: 'left-t'},
    { id: 'e2-2.1', source: '2', target: '2.1', sourceHandle: 'bottom-s', targetHandle: 'top-t', style: strokeDasharray},
    { id: 'e2-3', source: '2', target: '3', sourceHandle: 'left-s', targetHandle: 'right-t'},
    { id: 'e3-3.1', source: '3', target: '3.1', sourceHandle: 'bottom-s', targetHandle: 'top-t', style: strokeDasharray},
    { id: 'e3-4', source: '3', target: '4', sourceHandle: 'right-s', targetHandle: 'left-t'},
    { id: 'e4-4.1', source: '4', target: '4.1', sourceHandle: 'bottom-s', targetHandle: 'top-t', style: strokeDasharray},
    { id: 'e4-5', source: '4', target: '5', sourceHandle: 'left-s', targetHandle: 'right-t'},
    { id: 'e5-5.1', source: '5', target: '5.1', sourceHandle: 'bottom-s', targetHandle: 'top-t', style: strokeDasharray},
  ];



  return { projectNodes, projectEdges };
}

export const getDashboardFlowData = (): { projectNodes: Node[], projectEdges: Edge[] } => {

  const projectNodes: Node[] = [
    { id: '0', position: { x: 0, y: yPositions[0] }, data: { label: '' }, type: 'anchor'},
    { id: '1', position: { x: 45, y: yPositions[2] }, data: { label: 'Next.js' }, type: 'main'},
    { id: '1.1', position: { x: 26, y: yPositions[4] }, data: { label: 'TypeScript' }, type: 'sub'},
    { id: '2', position: { x: 790, y: yPositions[2] }, data: { label: 'Chart Library' }, type: 'main'},
    { id: '2.1', position: { x: 805, y: yPositions[4] }, data: { label: 'AG Charts' }, type: 'sub'},
    { id: '3', position: { x: 45, y: yPositions[7]}, data: { label: 'UI Library' }, type: 'main'},
    { id: '3.1', position: { x: 39, y: yPositions[8] + 40 }, data: { label: 'Ant Design' }, type: 'sub'}
  ];
  const projectEdges: Edge[] = [
    { id: 'e0-1', source: '0', target: '1', sourceHandle: 'bottom-s', targetHandle: 'top-t'},
    { id: 'e1-1.1', source: '1', target: '1.1', sourceHandle: 'bottom-s', targetHandle: 'top-t', style: strokeDasharray},
    { id: 'e1-2', source: '1', target: '2', sourceHandle: 'right-s', targetHandle: 'left-t'},
    { id: 'e2-2.1', source: '2', target: '2.1', sourceHandle: 'bottom-s', targetHandle: 'top-t', style: strokeDasharray},
    { id: 'e2-3', source: '2', target: '3', sourceHandle: 'left-s', targetHandle: 'right-t'},
    { id: 'e3-3.1', source: '3', target: '3.1', sourceHandle: 'bottom-s', targetHandle: 'top-t', style: strokeDasharray},
    { id: 'e3-4', source: '3', target: '4', sourceHandle: 'right-s', targetHandle: 'left-t'},
    { id: 'e4-4.1', source: '4', target: '4.1', sourceHandle: 'bottom-s', targetHandle: 'top-t', style: strokeDasharray},
  ];

  return { projectNodes, projectEdges };
}
