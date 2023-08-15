import ContactSection from './ContactSection.jsx';
import ImageSection from './ImageSection.jsx';
import Intro from './Intro.jsx';
import ExperienceSection from './ExperienceSection.jsx';
import '../styles/CV.css';
import { forwardRef } from 'react';


export const CV = forwardRef(function CV(props, ref) {
  return (
    <div className="CV border-slate-300" ref={ref}>
      <ContactSection />
      <ImageSection />
      <Intro />
      <ExperienceSection />
    </div>
  );
});
// export default function CV() {
//   return (
//     <div className="CV border-slate-300">
//       <ContactSection />
//       <ImageSection />
//       <Intro />
//       <ExperienceSection />
//     </div>
//   )
// }