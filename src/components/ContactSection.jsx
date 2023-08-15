import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Contact from './Contact.jsx';
import '../styles/ContactSection.css';

export default function ContactSection() {
  const phoneIcon = <FontAwesomeIcon icon={faPhoneSquareAlt} />;
  const githubIcon = <FontAwesomeIcon icon={faGithub} />;
  const linkedinIcon = <FontAwesomeIcon icon={faLinkedin} />;
  return (
    <div className="inline-flex ContactSection px-5 py-2 rounded-xl">
      <Contact
        icon={phoneIcon}
        title="Phone"
        content="000-1234-5678"
      />
      <Contact
        icon={linkedinIcon}
        title="LinkedIn"
        content="linkedin.com/in/awesome/"
      />
      <Contact
        icon={githubIcon}
        title="Github"
        content="github.com/awesomedev"
      />
    </div>
  )
}