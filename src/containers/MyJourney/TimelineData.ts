interface timelineItem {
  type: string;
  date: string;
  title: string;
  subtitle: string;
  description: string;
  link?: string;
}

const myTimeline: timelineItem[] = [
  {
    title: 'I made Electrical course',
    subtitle: 'SENAI, Brazil',
    description:
      'I studied electrical network dimensioning, static electricity, electric circuits and more.',
    type: 'education',
    date: '2008 - 2009',
  },
  {
    title: 'Started Internet Systems Graduation',
    subtitle: 'IFSudesteMG, Brazil',
    description:
      'I started a course to study everything about Computer Science, like algorithms, data structures, object-oriented programming, database, web services, linux environment, web development, a little bit of Devops, installation and configuration of linux services and much more.',
    type: 'education',
    date: '2011',
  },
  {
    title: 'Made console games using Pascal and C',
    subtitle: 'Github',
    description:
      'Friend and I developed a lot of games in Pascal and C, games are: Snake in Pascal, Plane Battle in Pascal, Hax Race in Pascal, Snake in C, Hax Race in C with Allegro.',
    type: 'project',
    date: '2011',
    link: 'https://github.com/arthurAssuncao/HaxGames',
  },
  {
    title: 'Internship at the SIGAA project',
    subtitle: 'Barbacena, Brazil',
    description:
      'In this work, I fixed bugs in a PHP project and developed features for a Java project.',
    type: 'work',
    date: '2012 - 4 months',
  },
  {
    title: 'Completed Python for Linux Network Administrators course',
    subtitle: 'IFSudesteMG, Rafael Alencar instructor',
    description:
      'I learned Python with a focus on Linux administration, such as data and text processing, operating system functions, Web Crawler and, as a final project, I made modules for an HnTool security analysis framework.',
    type: 'education',
    date: '2012',
  },
  {
    title: 'Internship at AddTI',
    subtitle: 'Barbacena, Brazil',
    description:
      'Development for Android system with Java / Android language and platform. As a result, we have the MaisVendas app, which is an app for sellers to consult and make sales.',
    type: 'work',
    date: '2012-2013',
  },
  {
    title: 'Completed Internet Systems Graduation',
    subtitle: 'IFSudesteMG, Brazil',
    description:
      'I studied everything about Computer Science, like algorithms, data structures, object-oriented programming, database, web services, linux environment, web development, a little bit of Devops, installation and configuration of linux services and much more.',
    type: 'education',
    date: '2014',
  },
  {
    title: 'I made Master in Computer Science',
    subtitle: 'UFOP, Brazil',
    description:
      'At Master of Degree, I learned about Data Structure, Mobile Development, like the old Objective-C and Android / Java, and embedded systems. My research mainly carried out monitoring of vehicle drivers through statistical process control and I published four articles, one in an international journal.',
    type: 'education',
    date: '2014 - 2016',
  },
  {
    title: 'Completed Techniques for Front End Development course',
    subtitle: 'IFSudesteMG, Mateus Ferreira instructor',
    description:
      'I learned SASS, CSS Animation, Grid systems, Flexbox, RESTful API, SEO and ReactJS.',
    type: 'education',
    date: '2015',
  },
  {
    title: 'Published two papers in symposium',
    subtitle: 'SBESC and Mobiwac',
    description:
      'Published at the V Brazilian Symposium on Computer Systems Engineering (SBESC) one paper entitled <a href="http://sbesc.lisha.ufsc.br/sbesc2015/proceedings/146713.pdf">KITT - Intelligent Automotive System with Support to Driver Safety</a> and at the 13th ACM International Symposium on Mobility Management and Wireless Access (MobiWac 2015) another paper entitled <a href="http://dx.doi.org/10.1145/2810362.2810378">Vehicle Driver Monitoring through Statistical Process Control</a>.',
    type: 'science',
    date: '2015',
    link: 'http://dx.doi.org/10.1145/2810362.2810378',
  },
  {
    title: 'Hackathon GDG with EntregaRapida project',
    subtitle: 'Google Developer Group Hackathon',
    description:
      'I participated in the Hackathon of Google Developers Group BH and my team, Mateus Ferreira and I, developed the DeliveryRapida application. An app that allows users to post packages and our collaborators to deliver packages, such as Uber for product deliveries.',
    type: 'project',
    date: '2015',
    link: 'https://github.com/arthurAssuncao/EntregaRapida',
  },
  {
    title: 'Published one papers in Symposium',
    subtitle: 'CBA',
    description:
      'Published at the XXI Congresso Brasileiro de Automática (CBA) one paper entitled <a href="https://ssl4799.websiteseguro.com/swge5/PROCEEDINGS/PDF/CBA2016-0575.pdf">Análise de Sensores para um Ambiente de Testes Automotivos</a>',
    type: 'science',
    date: '2016',
    link: 'https://ssl4799.websiteseguro.com/swge5/PROCEEDINGS/PDF/CBA2016-0575.pdf',
  },
  {
    title: 'Hackathon Globo with GloboHistorias project',
    subtitle: 'Rede Globo Hackathon',
    description:
      'I participated in the 2nd Hackathon of Rede Globo and my team developed the GloboHistorias app. An app that allows users to post videos with their stories in news making the news much richer.',
    type: 'project',
    date: '2016',
    link: 'https://github.com/ArthurAssuncao/globo-historias',
  },
  {
    title: 'Published one papers in international journal',
    subtitle: 'Sensors (Basel) Journal',
    description:
      'Published at the Sensors (Basel) Journal one paper entitled <a href="https://doi.org/10.3390/s19143059">Vehicle Driver Monitoring through the Statistical Process Control</a>.',
    type: 'science',
    date: '2019',
    link: 'https://doi.org/10.3390/s19143059',
  },
  {
    title: 'Completed React Ninja course',
    subtitle: 'Udemy (Fernando Daciuk instructor)',
    description: 'I learned a lot about ReactJS through projects.',
    type: 'education',
    date: '2019',
  },
  {
    title: 'Learned Front-end Design with Figma',
    subtitle: 'Designcode.io',
    description:
      'I learned some design, system design and design construction with Figma.',
    type: 'education',
    date: '2020',
  },
  {
    title: 'Instructor in Online Courses',
    subtitle: 'Youtube',
    description:
      'I created a Youtube Channel and make some courses, like Web Development, CSS position technics, Mobile development with Kodular, Scilab Programming, Spreadsheet and more.',
    type: 'education',
    date: '2020 - present',
    link: 'https://www.youtube.com/channel/UCiac8bfP7-EIP97X18IkDrQ',
  },
  {
    title: 'Started Testing React with Jest and Testing Library course',
    subtitle: 'Udemy (Bonnie Schulkin instructor)',
    description:
      'I learned about front-end testing with Jest and Testing Library and created the HelloSundae app.',
    type: 'education',
    date: '2021',
    link: 'https://github.com/ArthurAssuncao/HelloSundae',
  },
  {
    title: 'PomoTraining App',
    subtitle: 'Project on Github',
    description:
      'PomoTraining is a Pomodoro application with physical activity in short break interval. It is based on MoveIt project of the NLW 4.0 by Rocketseat. But, I made many improvements and changes.',
    type: 'project',
    date: '2021',
    link: 'https://github.com/ArthurAssuncao/pomoTraining',
  },
  {
    title: 'IFMaker Lab website',
    subtitle: 'Project on Github',
    description:
      'The IFMakerSD project is a website for the dissemination of the IF Maker laboratory of the IF Sudeste MG campus Santos Dumont, which began to be created at the end of 2020. The site has a landing page and pages for projects, articles and equipment, these pages are posted by a content manager. The website was made with NextJS, ReactJS, CSS Module with SASS, CSS Variable, CSS Animations, Black and Light themes and more',
    type: 'project',
    date: '2021',
    link: 'https://github.com/ArthurAssuncao/ifmakersd.com.br',
  },
  {
    title: 'TrainRail Hackathon Brasil landing page',
    subtitle: 'Project on Github',
    description:
      'TrainRail Hackathon Brasil is the Brazilian phase of the first global Rail Hackathon that is aimed at universities and railway companies as an initiative of the Union Internationale des Chemins de fer (UIC). The website was made with NextJS, ReactJS, CSS Module with SASS, CSS Variable, CSS animations, i18n and more',
    type: 'project',
    date: '2021',
    link: 'https://github.com/ArthurAssuncao/TrainRailHackathonBrasil.com.br',
  },
  {
    title: 'My Website version 2021',
    subtitle: 'This website',
    description:
      'This website was made with NextJS, ReactJS, CSS Module with SASS, CSS Variable, CSS animations and more',
    type: 'project',
    date: '2021',
  },
];

export default myTimeline;
