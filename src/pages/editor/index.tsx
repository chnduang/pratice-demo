import React, { useState, useReducer } from 'react';

import { Tree } from 'antd';
import EditorChildren from '../components/editor';

const treeData = [
  {
    title: 'parent 1',
    key: '0-0',
    children: [
      {
        title: 'parent 1-0',
        key: '0-0-0',

        children: [
          {
            title: 'leaf',
            key: '0-0-0-0',
          },
          {
            title: 'leaf-1',
            key: '0-0-0-1',
          },
        ],
      },
      {
        title: 'parent 1-1',
        key: '0-0-1',
      },
    ],
  },
];

interface info {
  selected: boolean;
  selectedNodes: object[];
  node: any;
  event: any;
}

const EditorComp = (props: any) => {
  const [currentNode, setCurrentNode] = useState<any>(null);

  const onSelect = (
    selectedKeys: React.Key[],
    { selected: bool, selectedNodes, node, event }: info,
  ) => {
    const { filekey } = node;
    setCurrentNode(node || null);
  };

  return (
    <div style={{ display: 'flex', padding: '24px', width: '100%' }}>
      <Tree
        defaultExpandAll
        onSelect={(
          selectedKeys: React.Key[],
          { selected, selectedNodes, node, event }: info,
        ) => {
          const { filekey } = node;
          setCurrentNode(node || null);
        }}
        treeData={treeData}
        style={{ marginRight: '24px' }}
      />
      {React.createElement(EditorChildren, {
        key: currentNode && currentNode.key,
        currentNode,
      })}
    </div>
  );
};

export default EditorComp;
