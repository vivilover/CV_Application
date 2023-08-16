import '../styles/Contact.css';
import { useRef } from 'react';
import ContentEditable from 'react-contenteditable';
// import { ContentEditable } from '../../node_modules/react-ContentEditable/lib/react-contenteditable.js';

export default function Contact({ icon, title, content }) {
  const text = useRef(content);
  const handleChange = evt => {
    text.current = evt.target.value;
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
    <div className="grid grid-cols-5 gap-x-2">
      <div className="cv-contacts-icon text-xl row-span-2 p-0 justify-self-end">{icon}</div>
      <div className="col-span-4 text-sm leading-4 text-slate-200 font-semibold">{title}</div>
      {/* <div className="col-span-4 text-sm leading-4 text-slate-200">{content}</div> */}
      <div className="col-span-4 text-sm leading-4 text-slate-200">
        <ContentEditable
          html={text.current}
          onChange={handleChange}
          onMouseEnter={onHover}
          onMouseOut={revertToDefault}
          onFocus={removeDefaultBorder}
        />
      </div>
    </div>
  )
}