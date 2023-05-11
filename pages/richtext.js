import { useState } from "react";
// import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import dynamic from "next/dynamic";

const ReactQuill = dynamic(import('react-quill'), { ssr: false })


let first = () => {
 
  const [value, setValue] = useState('');
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      [{ 'font': [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'align': [] }],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'indent': '-1'}, { 'indent': '+1' }],
      ['link', 'image', 'video'],
      ['clean']
    ]
  };

  const formats = [
    'header',
    'font',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'color', 'background',
    'align',
    'list', 'bullet',
    'indent',
    'link', 'image', 'video'
  ];
  
  
  return (<> <div><ReactQuill theme="snow" value={value}   modules={modules}
  formats={formats} onChange={setValue} />
  
  <div className="flex justify-end mr-10"><button onClick={()=>console.log(value)} className="btn btn-primary m-2 ">Submit</button></div>
   </div>
  
   <div dangerouslySetInnerHTML={{ __html: value }} />
  </>
  );
}

export default first;

