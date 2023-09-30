"use client";
import { useEffect, useState } from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';

function EditCode() {
  const [code, setCode] = useState(
    ``
  );
  useEffect(()=>{
    const x =  window.localStorage.getItem("data");
    x?.replace(",", ",\n")
    setCode(x?x:"")
  }, [])
  return (
    <CodeEditor
      value={code}
      language="json"
      placeholder="Please enter JSON code."
      onChange={(evn) => setCode(evn.target.value)}
      padding={15}
      style={{
        color: "pink",
        fontSize: 14,
        backgroundColor: "black",
        fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
      }}
    />
  );
}

export default EditCode