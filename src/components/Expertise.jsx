import '../styles/Expertise.css';
import Skill from './Skill.jsx';

export default function Expertise() {
  return (
    <div className="Expertise w-full mt-auto px-6 py-5">
      <div className="tracking-wider font-semibold text-lg mt-1 mb-2">EXPERTISE</div>
      <div className="skills grid grid-cols-2 gap-x-7 px-1 mt-1">
        <Skill
          title="JavaScript"
          value="85"
          id="1"
        />
        <Skill
          title="React"
          value="85"
          id="2"
        />
        <Skill
          title="HTML & CSS"
          value="90"
          id="3"
        />
        <Skill
          title="Responsive Design"
          value="70"
          id="4"
        />
      </div>
    </div>
  )
}