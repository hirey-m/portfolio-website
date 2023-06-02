import {
    mobile,
    backend,
    creator,
    web,
    typescript,
    html,
    java,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    docker,
    goevals,
    umum,
    promptpix,
    sloppyjoes,
    threejs,
    pythonlang,
    logotensorflow,
    jenkins,
    medconnect,
    hrconnect,
    fraud,
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
      title: "Full-Stack Developer",
      icon: web,
    },
    {
      title: "Data Analyst",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "3D Artist",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name:"Python 3",
      icon: pythonlang,
    },
    {
      name: "TensorFlow",
      icon: logotensorflow,
    },
    {
      name: "Jenkins",
      icon: jenkins,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Technology Intern",
      company_name: "GoEvals Private Limited",
      icon: goevals,
      iconBg: "#383E56",
      date: "Jan 2022 - June 2022",
      points: [
        "Delivered 100% verified, accurate, complete, and active Employee database using SQL and MS Excel",
        "Collaborated with various business and IT teams to understand and serve their database needs",
        "Designed & executed process improvement: optimizing data delivery, revamped infrastructure for scalability and cut down paperwork by 70%",
        "Devised and formulated an employee performance dashboard using Tableau that facilitated a 40% increase in productivity",
      ],
    },
    {
      title: "Deep Learning Researcher",
      company_name: "University of Mumbai",
      icon: umum,
      iconBg: "#E6DEDD",
      date: "Aug 2021 - Nov 2021",
      points: [
        "Worked on deep learning techniques for image classification, specifically focusing on ultrasound images to detect breast cancer",
        "Increased the prediction accuracy by 10% by data augmentation techniques, such as image rotation, flipping, and scaling, to increase the diversity of the training data and reduce overfitting",
        "Published in the International Journal for Research in Science Engineering & Technology (IJRSET), November Vol. 8 Issue",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "PromptPix",
      description:
        "Intoducting PromptPix: A user-friendly MERN stack-based web application driven by the OpenAI API. PromptPix uses descriptive prompts to make unique images, utilising the capabilities of artificial intelligence. Improve your creativity with AI and share your ideas with a thriving user community. With PromptPix at your disposal, you can dive into the future of picture production.",
      tags: [
        {
          name: "nodejs",
          color: "blue-text-gradient",
        },
        {
          name: "openai",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: promptpix,
      source_code_link: "https://github.com/hirey-m/PromptPix",
    },
    {
      name: "MedConnect",
      description:
        "A Java application that connects people to medical resources. Find doctors, book appointments, and maintain comprehensive patient histories. Empower patients and enable doctors to deliver personalized care with ease. MedConnect simplifies healthcare access and enhances medical outcomes.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "db04",
          color: "green-text-gradient",
        },
        {
          name: "apacheant",
          color: "pink-text-gradient",
        },
      ],
      image: medconnect,
      source_code_link: "https://github.com/hirey-m/MedConnect",
    },
    {
      name: "SloppyJoes",
      description:
        "A real-time, full-stack food delivery web app developed using Node.js, MongoDB, and Express. It offers real-time order management for restaurants and order tracking for customers, all secured with Passport.js authentication. Experience efficient and convenient food delivery with SloppyJoes",
      tags: [
        {
          name: "express",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "passport.js",
          color: "pink-text-gradient",
        },
      ],
      image: sloppyjoes,
      source_code_link: "https://github.com/hirey-m/SloppyJoes",
    },
    {
      name: "HRConnect",
      description:
        " The Java Swing application for HR officers to manage employees. Perform CRUD operations, search profiles, and display employee photos. Streamline employee management with ease using HRConnect",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "swing",
          color: "green-text-gradient",
        },
        {
          name: "db4o",
          color: "pink-text-gradient",
        },
      ],
      image: hrconnect,
      source_code_link: "https://github.com/hirey-m/HRConnect",
    },
    {
      name: "Fraud Detection",
      description:
        " Jupyter Notebook for detecting fraud in a dataset with unbalanced samples. Trained and compared Gradient Boost, Logistic Regression, and Decision Trees using hyperparameter tuning for optimal performance. Simplify fraud detection with powerful machine learning algorithms.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "sklearn",
          color: "green-text-gradient",
        },
        {
          name: "matplotlib",
          color: "pink-text-gradient",
        },
      ],
      image: fraud,
      source_code_link: "https://github.com/hirey-m/FraudTransactionDetection",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };