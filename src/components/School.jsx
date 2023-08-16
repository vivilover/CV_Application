import '../styles/School.css';
import { useRef } from 'react';
import ContentEditable from 'react-contenteditable';

export default function School() {
  const time = useRef('Aug 2019 - May 2023');
  const school = useRef('University of California, Los Angeles');
  const major = useRef('B.A. in Computer Science');
  const courses = useRef(`Courses: Data Structures & Algorithm | SQL
                          | Operating Systems | Machine Learning`);

  const handleTimeChange = (e) => {
    time.current = e.target.value;
  };
  const handleSchoolChange = (e) => {
    school.current = e.target.value;
  };
  const handleMajorChange = (e) => {
    major.current = e.target.value;
  };
  const handleCoursesChange = (e) => {
    courses.current = e.target.value;
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
    <div className="School grid grid-cols-4 mb-3">
      <div className="date font-medium">
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
          html={school.current}
          onChange={handleSchoolChange}
          onMouseEnter={onHover}
          onMouseOut={revertToDefault}
          onFocus={removeDefaultBorder}
        />
        <ContentEditable
          html={major.current}
          onChange={handleMajorChange}
          onMouseEnter={onHover}
          onMouseOut={revertToDefault}
          onFocus={removeDefaultBorder}
        />
      </div>
      <div className="col-span-4 text-sm pl-6 pt-2">
        <ContentEditable
          html={courses.current}
          onChange={handleCoursesChange}
          onMouseEnter={onHover}
          onMouseOut={revertToDefault}
          onFocus={removeDefaultBorder}
        />
      </div>
    </div>
  );
}