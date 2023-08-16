import '../styles/Header.css';
import { useRef } from 'react';
import ContentEditable from 'react-contenteditable';
// import { ContentEditable } from '../../node_modules/react-ContentEditable/lib/react-contenteditable.js'

export default function Header() {
  const name = useRef('Curtis Garcia');
  const job = useRef('Front-End Developer');

  const handleNameChange = (e) => {
    name.current = e.target.value;
  };
  const handleJobChange = (e) => {
    job.current = e.target.value;
  };

  const onHover = (e) => {
    e.target.style.cursor = 'text';
    e.target.style.border = '2px dashed gray';
  }
  const revertToDefault = (e) => {
    e.target.style.cursor = 'default';
    e.target.style.border = 'none';
  }
  const removeDefaultBorder = (e) => {
    e.target.style.outline = "0px solid transparent";
  }
  return (
    <div className="Header flex flex-wrap text-center pb-2">
      <div className="name text-3xl font-bold tracking-wider basis-full">
        <ContentEditable
          html={name.current}
          onChange={handleNameChange}
          onMouseEnter={onHover}
          onMouseOut={revertToDefault}
          onFocus={removeDefaultBorder}
        />
      </div>
      <div className="jobField text-lg font-medium tracking-wider basis-full">
        <ContentEditable
          html={job.current}
          onChange={handleJobChange}
          onMouseEnter={onHover}
          onMouseOut={revertToDefault}
          onFocus={removeDefaultBorder}
        />
      </div>
    </div>
  )
}