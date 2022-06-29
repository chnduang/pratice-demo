import React, { memo, useEffect, useCallback } from 'react';
import { Editor } from '@toast-ui/react-editor';
import axios from 'axios';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import '@toast-ui/editor/dist/toastui-editor.css';
import 'tui-color-picker/dist/tui-color-picker.css';
import 'codemirror/lib/codemirror.css';

const EditorComp = memo((props: any) => {
  const { currentNode, ref, ...rest } = props;
  console.log('currentNode', currentNode);
  const editorRef: any = React.useRef();

  const handleOnSave = () => {
    if (!editorRef.current?.getInstance()) {
      return;
    }
    editorRef.current?.getInstance().getMarkdown();
  };

  const onKeyDown = (e: any) => {
    const keyCode = e.keyCode || e.which || e.charCode;
    const ctrlKey = e.ctrlKey || e.metaKey;
    if (ctrlKey && keyCode === 83) {
      e.preventDefault();
      handleOnSave();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.addEventListener('keydown', onKeyDown);
    };
  });

  async function uploadFile(fileName: any, content: any) {
    const formData = new FormData();
    formData.append('bucketName', 'doc');
    formData.append('directory', 'doc_classify');

    // const blob = new Blob([content]);
    // const file = new window.File([blob], fileName);
    formData.append('file', content);
    const res = await axios({
      method: 'POST',
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data;charset=UTF-8',
      },
    });
    return res;
  }

  const onUploadIamge = async (file: any, callback: any) => {
    const tempUrl = URL.createObjectURL(file);
    console.log('file', URL.createObjectURL(file));
    // const res = await uploadFile(file.name, file);
    editorRef.current
      .getInstance()
      .insertText(`<img src="${tempUrl}" alt=""  />\n`);
    // callback(tempUrl, 'image');
  };

  return (
    <div style={{ flex: 1 }} {...rest}>
      <Editor
        ref={ref}
        initialValue={currentNode?.title || null}
        previewStyle="vertical"
        height="600px"
        initialEditType="markdown"
        useCommandShortcut={true}
        hooks={{
          // 图片上传的 hook
          addImageBlobHook: async (file, callback) => {
            await onUploadIamge(file, callback);
          },
        }}
      />
    </div>
  );
});

export default EditorComp;
