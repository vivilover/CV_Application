import { useRef } from 'react';
import ContentEditable from 'react-contenteditable';

export default function Achievement() {
  const desc1 = useRef('California Cooperate');
  const desc2 = useRef('UI Award Design Winner');

  const handleDesc1Change = (e) => {
    desc1.current = e.target.value;
  };
  const handleDesc2Change = (e) => {
    desc2.current = e.target.value;
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
    <div className="pt-2 pl-8">
      <div className="font-semibold text-lg">
        ACHIEVEMENT
      </div>
      <div className="font-medium text-sm">
        <ContentEditable
          html={desc1.current}
          onChange={handleDesc1Change}
          onMouseEnter={onHover}
          onMouseOut={revertToDefault}
          onFocus={removeDefaultBorder}
        />
        <section className="italic">
          <ContentEditable
          html={desc2.current}
          onChange={handleDesc2Change}
          onMouseEnter={onHover}
          onMouseOut={revertToDefault}
          onFocus={removeDefaultBorder}
          />
        </section>
      </div>
    </div>
  )
}