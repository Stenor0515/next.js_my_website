import { FaEnvelope, FaGithub, FaGithubAlt, FaTelegram } from 'react-icons/fa';

const ContactBlock = ({ type, value }: propsType) => {
  console.log(new Date().getDate());
  const FontIcons = {
    email: <FaEnvelope />,
    telegram: <FaTelegram />,
    github: <FaGithub />,
  };
  var date = new Date();
  return (
    <div className='contact-block mb-[25px] flex items-center gap-9'>
      <div className='text-[45px]'>
        {type === 'email' && FontIcons.email}
        {type === 'telegram' && FontIcons.telegram}
        {date.getFullYear() >= 2022 &&
          date.getMonth() >= 3 &&
          date.getDate() >= 22 &&
          type === 'github' &&
          FontIcons.github}
      </div>

      <div>
        <h2 className='text-white text-[18px] uppercase'>
          {type === 'github'
            ? date.getFullYear() >= 2022 &&
              date.getMonth() >= 3 &&
              date.getDate() >= 22 &&
              type
            : type}
        </h2>
        <p>
          {type === 'github'
            ? date.getFullYear() >= 2022 &&
              date.getMonth() >= 3 &&
              date.getDate() >= 22 &&
              value
            : value}
        </p>
      </div>
    </div>
  );
};

interface propsType {
  type: string;
  value: string;
}

export default ContactBlock;
