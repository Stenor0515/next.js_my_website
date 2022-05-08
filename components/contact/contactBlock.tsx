import {
  FaEnvelope,
  FaGithub,
  FaGithubAlt,
  FaTelegram,
  FaLinkedinIn,
} from "react-icons/fa";

const ContactBlock = ({ type, value }: propsType) => {
  console.log(new Date().getDate());
  const FontIcons = {
    email: <FaEnvelope />,
    telegram: <FaTelegram />,
    github: <FaGithub />,
    linkedin: <FaLinkedinIn />,
  };
  return (
    <div className="contact-block mb-[25px] flex items-center gap-9">
      <div className="text-[45px]">
        {type === "email" && FontIcons.email}
        {type === "telegram" && FontIcons.telegram}
        {type === "github" && FontIcons.github}
        {type === "linkedin" && FontIcons.linkedin}
      </div>

      <div>
        <h2 className="text-white text-[18px] uppercase">{type}</h2>
        {type === "email" ? (
          <a href={`mailto:${value}`} target="_blank" rel="noopener noreferrer">
            {value}
          </a>
        ) : (
          <a
            href={`https://${value}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {value}
          </a>
        )}
      </div>
    </div>
  );
};

interface propsType {
  type: string;
  value: string;
}

export default ContactBlock;
