import '../styles/Skill.css';
import { useRef, useState } from 'react';
import ContentEditable from 'react-contenteditable';

function SkillModal({show, handleClick, parentCallback}) {
  const showHideClassName = show ? "display-block" : "display-none";
  const [skillLevel, setSkillLevel] = useState(85);

  const handleChange = (e) => {
    setSkillLevel(e.target.value);
  }
  const handleSave = () => {
    parentCallback(skillLevel);
    // console.log(skillLevel);
    handleClick();
  }
  return (
    <div className={`modal showHide text-xs text-slate-900 py-2 bg-neutral-400 ${showHideClassName}`}>
      <div className="mb-1.5 flex justify-center gap-x-2">
        <label htmlFor="skill-level">Skill level (0-100): </label>
        <input
          type="number"
          id="skill-level"
          name="skill-level"
          min="0"
          max="100"
          onChange={handleChange}
          value={skillLevel}>
        </input>
      </div>
      <div className="flex justify-center gap-x-2">
        <button
          className="rounded-lg bg-emerald-500 py-0.5 px-2"
          onClick={handleSave}>
          Save
        </button>
        <button
          className="rounded-lg bg-rose-500 py-0.5 px-2"
          onClick={handleClick}>
          Close
        </button>
      </div>
    </div>
  );
}

export default function Skill({ title, value, id }) {
  const skill = useRef(title);
  const [isShown, setIsShown] = useState(false);
  const [skillValue, setSkillValue] = useState(value);

  const handleClick = () => {
    setIsShown(current => !current);
  }
  const handleTextChange = (e) => {
    skill.current = e.target.value;
  };

  const onHover = (e) => {
    e.target.style.cursor = 'text';
    e.target.style.border = '0.1rem dashed rgb(161 98 7)';
  }
  const revertToDefault = (e) => {
    e.target.style.cursor = 'default';
    e.target.style.border = 'none';
  }
  const removeDefaultBorder = (e) => {
    e.target.style.outline = "0px solid transparent";
  }
  const parentCallback = (childData) => {
    setSkillValue(childData);
  }

  return (
    <>
      {!isShown &&
        <div className="mb-2">
          <div className="skillName text-sm">
            <ContentEditable
              html={skill.current}
              onChange={handleTextChange}
              onMouseEnter={onHover}
              onMouseOut={revertToDefault}
              onFocus={removeDefaultBorder}
              // id={id}
            />
          </div>
          <progress
            max="100"
            value={skillValue}
            onMouseEnter={onHover}
            onMouseOut={revertToDefault}
            onClick={handleClick}>
          </progress>
        </div>}
      {isShown && <SkillModal
                    id={id}
                    show={true}
                    handleClick={handleClick}
                    parentCallback={parentCallback} />}
    </>
  );
}