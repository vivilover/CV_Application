import Achievement from './Achievement.jsx';
import '../styles/Summary.css';
import { useRef } from 'react';
import ContentEditable from 'react-ContentEditable';

export default function Summary() {
  const text = useRef('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel euismod erat, nec vestibulum justo. Maecenas nulla purus, commodo vel erat id, vehicula imperdiet ipsum. Etiam laoreet odio at faucibus posuere. Nunc scelerisque rhoncus est non tempor.');
  const description = useRef('Annual UI Evaluation hosted by Dribbble');

  const handleTextChange = (e) => {
    text.current = e.target.value;
  };
  const handleDescChange = (e) => {
    description.current = e.target.value;
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
    <div className="grid grid-cols-3">
      <div className="summary col-span-2 row-span-2 pl-8 pr-6 pt-2 border-r text-sm">
        <ContentEditable
          html={text.current}
          onChange={handleTextChange}
          onMouseEnter={onHover}
          onMouseOut={revertToDefault}
          onFocus={removeDefaultBorder}
        />
      </div>
      <Achievement />
      <div className="pt-1 pl-8 text-sm">
        <ContentEditable
          html={description.current}
          onChange={handleDescChange}
          onMouseEnter={onHover}
          onMouseOut={revertToDefault}
          onFocus={removeDefaultBorder}
        />
      </div>
    </div>
  )
}