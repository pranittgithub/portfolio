export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'Our Plans',
    href: '#plans',
  },
  {
    id: 3,
    name: 'Amplidev Team',
    href: '#team',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Pranav Mhatre',
    position: 'Startup founder',
    img: 'assets/pp.jpg',
    review:
      "Working with Amplidev was a game-changer for our business. They developed a sleek, modern, and highly functional website for us that exceeded our expectations. The team was professional, responsive, and delivered on time, which is rare in the industry. Our online presence has never been stronger. Highly recommend!",
  },
  {
    id: 2,
    name: 'Anshika Thakur',
    position: 'E-commerce Business Owner',
    img: 'assets/pp.jpg',
    review:
      "Amplidev took our vision for an e-commerce store and turned it into reality with a custom-built dynamic website. The site is fast, user-friendly, and has all the features we needed to streamline our sales. The team provided excellent support, guiding us through every step. We’ve seen a significant boost in traffic and sales since launching the new site!",
  },
  {
    id: 3,
    name: 'Rajesh Patil',
    position: 'Freelance Photographer',
    img: 'assets/pp.jpg',
    review:
      "Amplidev designed my portfolio website, and I couldn’t be happier with the result. They understood my aesthetic preferences and created a visually stunning and responsive site that perfectly showcases my work. The process was smooth from start to finish, and the team made sure every detail was perfect. I’ve already received numerous compliments on the site!",
  },
  {
    id: 4,
    name: 'Suresh K.',
    position: 'Small Business Owner',
    img: 'assets/pp.jpg',
    review:
      "Choosing Amplidev was the best decision we made for our company’s online presence. They developed a highly professional and fully responsive static website that aligns perfectly with our brand. Their customer service was top-notch, and they made the entire process easy and stress-free. I highly recommend them to anyone in need of a reliable web development team."
  },
];

export const myProjects = [
  {
    title: 'BASIC - NORMAL WEBSITE',
    desc:'₹8,999/-',
    subdesc:
      'Our website package includes a 3-page site (Home, About, Contact) with a responsive design for all devices. We provide basic SEO setup, contact form integration, and 1 round of revisions. With a turnaround time of up to 21 days, we deliver a polished website tailored to your needs.',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'STANDARD PLAN - BUSINESS WEBSITE',
    desc:'₹14,999/-',
    subdesc:
    'Our package includes a 5-page website (Home, About, Services, Portfolio/Gallery, Contact) with responsive design and on-page SEO optimization. It features contact form and newsletter integration, social media links, and 2 rounds of revisions. The project is completed within 58 days, ensuring a professional online presence for your business.',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'ADVANCED PLAN - E-COMMERCE WEBSITE',
    desc:'₹28,999/-',
    subdesc:
      'Our e-commerce package includes up to 15 product pages with a responsive desig, complete SEO setup, and shopping cart and payment gateway integration. It features product showcase and categories, customer account setup, and 3 rounds of revisions, with a 90-day turnaround time for a fully functional online store.',
    href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Atharva Sankhe',
    pos: 'CTO',
    duration: 'CHIEF TECHNOLOGY OFFICER',
    title:'Experienced web developer with over two years of expertise in frontend and backend development. I specialize in designing dynamic, responsive websites, blending creativity with technology to deliver user-friendly solutions. As part of a freelance team, I aim to create impactful digital experiences',
    icon: '/assets/ath.jpg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Sahil Shirsekar',
    pos: 'CDO',
    duration: 'CHIEF DEVELOPMENT OFFICER',
    title:'Experienced Chief Development Officer (CDO) specializing in app development and technical strategy. Skilled in leading cross-functional teams to build innovative, user-centric digital solutions that drive business growth and technical excellence.',
    icon: '/assets/sahil.jpeg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Pranit Mankar',
    pos: 'CCO',
    duration: 'CHIEF CREATIVE OFFICER',
    title:'Our CCO leads the creative direction, shaping innovative and visually captivating design solutions that align with client objectives and engage users. With a strong focus on brand identity, user experience, and design excellence, they inspire the team to deliver projects that are not only aesthetically compelling but also strategically impactful.',
    icon: '/assets/pranit.jpg',
    animation: 'salute',
  },
];
