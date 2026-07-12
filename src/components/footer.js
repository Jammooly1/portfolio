import React from 'react';
import HeartIcon from '../assets/heart.svg';
import SocialIcon from './social_icon';

const Footer = ({ social }) => (
  <footer className="w-full py-6 items-center justify-between md:flex">
    <div className="items-center flex tracking-wide mb-5 md:mb-0 justify-center text-sm">
      <span className="inline-block mr-1">
        © {new Date().getFullYear()} | Developed with
      </span>
      <span className="inline-block mr-1">
        <HeartIcon
          className="h-3 w-3 fill-current"
          style={{ color: '#de3618' }}
        />
      </span>
      <span className="inline-block mr-1">by</span>
      <a
        className="text-primary-500 hover:text-primary-700 font-bold"
        // href="https://barancezayirli.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Jamal Dabas
      </a>
    </div>
    <div className="flex items-center justify-center">
      <a
        className="btn bg-primary-500 text-white"
        href="/Jamal_Dabas_resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
      </a>
    </div>
    <div className="flex items-center justify-center mt-5 md:mt-0">
      {social &&
        social.map(item => (
          <a
            key={item.service}
            className="footer-social-link"
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            title={item.service}
          >
            <SocialIcon type={item.service} />
          </a>
        ))}
    </div>
  </footer>
);

export default Footer;
