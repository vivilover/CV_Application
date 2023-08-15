import School from './School.jsx';
import Expertise from './Expertise.jsx';
import '../styles/School.css';

export default function Education() {
  return (
    <div className="basis-1/2 flex flex-col">
      <div className="Education text-xl font-semibold mb-2">Education</div>
      <School />
      <School />
      <Expertise />
    </div>
  )
}