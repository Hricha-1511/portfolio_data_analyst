import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";



export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Machine Learning",
    icon: web,
  },
  {
    title: "Python",
    icon: mobile,
  },
  {
    title: "Microsoft_PowerBI  Microsoft_Excel",
    icon: backend,
  },
  {
    title: "SQL",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "PowerBI Virtual Case Experience",
    company_name: "Pwc",
    icon: starbucks,
    iconBg: "#383E56",
    date: "June 2023 - June 2023",
    certificate: "https://drive.google.com/file/d/1sxYcyml3RTH3axsPbq7acWUzIQC1JOyb/view?usp=sharing",
    points: [
      "Gained Practical skills in data analytics, business intelligence, and data visualization using Power BI.",
      "Developed Industry experience and understanding of real-life challenges in data analytics.",
      "Increased confidence in abilities and proficiency in generating meaningful insights.",
      "Improved communication and client interaction skills in the context of data analytics.",
    ],
  },
  {
    title: "Data Analytics Consulting Virtual Internship",
    company_name: "KPMG",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "June 2023 - June 2023",
    certificate: "https://drive.google.com/file/d/1KUe_h5HXlf3-RY4Axr40WNFgf5UYFahs/view?usp=sharing",
    points: [
      "Gained experience in analyzing datasets and identifying data quality issues.",
      "Developed skills in extracting valuable insights from real-world datasets.",
      "Acquired proficiency in creating interactive dashboards and visualizations using Power BI.",
      "Learned to leverage data analytics for evaluating performance, tracking progress, and making data-driven decisions to improve business outcomes.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "Machine Learning A-Z: Hands on Python & R in DATA Science",
    name: "Udemy",
    designation: "Kirill Eremenko,",
    company: "Hadelin de Ponteves",
    image: "https://drive.google.com/file/d/12fFYvWJ2sKIKgEaF6nHdvLUbEjFAeNmT/view",
  },
  {
    testimonial:
      "Excel - Microsoft Excel Course Beginner to Expert 2023",
    name: "Udemy",
    designation: "Web Oral,",
    company: "Martin Luther Baidya",
    image: "https://drive.google.com/file/d/1A2IjslINZwn5qwuhVUWjjA46UoEyiht-/view",
  },
  {
    testimonial:
      "Python for Everybody",
    name: "Coursera",
    designation: "UNIVERSITY OF MICHIGAN",
    company: "",
    image: "https://drive.google.com/file/d/1cmgxz9VA12hRlU-73nU1fYefcRfVXB1M/viewhttps://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    testimonial:
      "IBM Badge in DATA Science",
    name: "Coursera",
    designation: "IBM",
    company: "",
    image: "https://drive.google.com/file/d/13M9iYLqnwUggn5Z4P9k4HT-id8dI8Y7O/view",
  },
];

const projects = [
  {
    name: "Phishing Website Detection Using ML",
    description:
      "Machine learning algorithm that effectively detects and provides security against phishing websites in real-life scenarios.",
    tags: [
      {
        name: "Machine Learning",
        color: "blue-text-gradient",
      },
      {
        name: "Decision_Tree",
        color: "green-text-gradient",
      },
      {
        name: "Ensemble_Technique",
        color: "pink-text-gradient",
      },
      {
        name: "sklearn",
        color: "blue-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Hricha-1511/Phishing_Websites_Detection_Project",
  },
  {
    name: "Movie Recommendation System",
    description:
      "Machine Learning Algorithm that ﬁlters all the videos or movies based on our preferences and our watch history and provides recommendations to the users.",
    tags: [
      {
        name: "Machine Learning",
        color: "blue-text-gradient",
      },
      {
        name: "Tfidf_Vectorizer",
        color: "green-text-gradient",
      },
      {
        name: "cosine_similarity",
        color: "pink-text-gradient",
      },
      {
        name: "sklearn",
        color: "blue-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Hricha-1511/Movie_Recommendation_Project",
  },
  {
    name: "Detecting Pair of Duplicate Questions",
    description:
      "This Project uses Quora's dataset in which we have to tell whether a given pair of question is duplicate or not. I used Random Forest and XGboost Model. To solve the problem I used concepts like BagofWords, Fuzzywords and also did some feature engineering to maximize",
    tags: [
      {
        name: "Machine Learning",
        color: "blue-text-gradient",
      },
      {
        name: "BagofWords",
        color: "green-text-gradient",
      },
      {
        name: "Fuzzyword",
        color: "pink-text-gradient",
      },
      {
        name: "Random_Forest",
        color: "blue-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Hricha-1511/Duplicate-quetion-detection",
  },
];

export { services, technologies, experiences, testimonials, projects };
