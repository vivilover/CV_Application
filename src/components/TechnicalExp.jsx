import '../styles/TechnicalExp.css';
import { useRef } from 'react';
import ContentEditable from 'react-contenteditable';

export default function TechnicalExp() {

  const time = useRef('2023 Jul - 2023 Aug');
  const jobTitle = useRef('Your Job Title');
  const companyName = useRef('Company Name Here - Location');
  const list1 = useRef('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
  const list2 = useRef('Suspendisse vel gravida enim. Sed quis sapien a sapien condimentum congue.');
  const list3 = useRef('Integer elementum ligula in mi scelerisque, at commodo enim cursus.');

  const handleTimeChange = (e) => {
    time.current = e.target.value;
  };
  const handleJobChange = (e) => {
    jobTitle.current = e.target.value;
  };
  const handleCompNameChange = (e) => {
    companyName.current = e.target.value;
  };
  const handleList1Change = (e) => {
    list1.current = e.target.value;
  };
  const handleList2Change = (e) => {
    list2.current = e.target.value;
  };
  const handleList3Change = (e) => {
    list3.current = e.target.value;
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
    <div className="grid grid-cols-4 gap-y-2 mt-2">
      <div className="year font-medium">
        <ContentEditable
          html={time.current}
          onChange={handleTimeChange}
          onMouseEnter={onHover}
          onMouseOut={revertToDefault}
          onFocus={removeDefaultBorder}
        />
      </div>
      <div className="col-span-3 font-medium">
        <ContentEditable
          html={jobTitle.current}
          onChange={handleJobChange}
          onMouseEnter={onHover}
          onMouseOut={revertToDefault}
          onFocus={removeDefaultBorder}
        />
        <section>
          <ContentEditable
          html={companyName.current}
          onChange={handleCompNameChange}
          onMouseEnter={onHover}
          onMouseOut={revertToDefault}
          onFocus={removeDefaultBorder}
        />
        </section>
      </div>
      <div></div>
      <div className="col-span-3 text-sm pl-2">
        <ul>
            <li key={1}>
              <ContentEditable
                html={list1.current}
                onChange={handleList1Change}
                onMouseEnter={onHover}
                onMouseOut={revertToDefault}
                onFocus={removeDefaultBorder}
              />
            </li>
            <li key={2}>
              <ContentEditable
                html={list2.current}
                onChange={handleList2Change}
                onMouseEnter={onHover}
                onMouseOut={revertToDefault}
                onFocus={removeDefaultBorder}
              />
            </li>
            <li key={3}>
              <ContentEditable
                html={list3.current}
                onChange={handleList3Change}
                onMouseEnter={onHover}
                onMouseOut={revertToDefault}
                onFocus={removeDefaultBorder}
              />
            </li>
        </ul>
      </div>
    </div>
  );
}