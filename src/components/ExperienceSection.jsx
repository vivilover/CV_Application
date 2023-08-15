import TechnicalExpSection from './TechnicalExpSection.jsx';
import Education from './Education.jsx';

export default function ExperienceSection() {
  return (
    <div className="px-5 pt-5 flex gap-x-4 w-full ExperienceSection">
      <TechnicalExpSection />
      <Education />
    </div>
  );
}