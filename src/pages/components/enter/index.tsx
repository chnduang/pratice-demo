import React, { memo, useEffect, useCallback } from 'react';
import Editor from '../editor';

const EditorComp = (props: any) => {
  const editorRef: any = React.useRef();

  return (
    <div style={{ flex: 1 }}>
      <Editor {...props} ref={editorRef} />
    </div>
  );
};

export default EditorComp;
