import { useRef } from 'react';
import './App.css'
import AppIntro from './components/AppIntro.jsx';
import { CV } from './components/CV.jsx';

function App() {
  const cvRef = useRef(null);
  return (
    <div className="flex min-w-full min-h-full h-screen">
      <div className="basis-1/3 grow min-h-full bg-amber-50">
        <AppIntro getRefFrom={cvRef} />
      </div>
      <div className="basis-2/3 grow min-h-full">
        <CV ref={cvRef} />
      </div>
    </div>
  )
}

export default App
