import {
    FaGithub,
    FaLinkedin,
    FaTwitter
  } from "react-icons/fa";
  import { FiMail } from "react-icons/fi";
  
  const siteConfig = {
    copyright: `Copyright © ${new Date().getFullYear()} Josh Campbell. All Rights Reserved.`,
    author: {
      name: "Josh Campbell",
      accounts: [
        {
          url: "https://github.com/jCAMP8311",
          label: "Github Account",
          type: "gray",
          icon: <FaGithub />
        },
        {
          url: "https://twitter.com/just_jebus",
          label: "Twitter Account",
          type: "twitter",
          icon: <FaTwitter />
        },
        {
          url: "https://linkedin.com/in/me",
          label: "LinkedIn Account",
          type: "linkedin",
          icon: <FaLinkedin />
        },
        {
          url: "mailto:jcampbell1228@gmail.com",
          label: "Mail Josh",
          type: "gray",
          icon: <FiMail />
        }
      ]
    }
  };
  
  export default siteConfig;