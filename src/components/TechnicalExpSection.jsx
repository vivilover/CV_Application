import TechnicalExp from './TechnicalExp.jsx';

export default function TechnicalExpSection() {
  return (
    <div className="TechnicalExpSection basis-1/2 border-r border-neutral-400 pr-4 mb-6">
      <div className="text-xl font-semibold">Technical Experience</div>
      <TechnicalExp />
      <TechnicalExp />
    </div>
  );
}