import '../styles/Intro.css';
import Header from './Header.jsx';
import Summary from './Summary.jsx';

export default function Intro() {
  return (
    <div className="Intro w-11/12 h-3/10 px-7 pb-7 pt-5">
      <Header className="" /> {/* Name and Job Field*/}
      <Summary className="" /> {/* Summary and Achievement */}
    </div>
  );
}