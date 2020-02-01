const projects = [
  {
    title: "ReversAI",
    gitrepo: "https://gitlab.com/reversai/reversi-ai",
    content: 
      "ReversAI is an AI-Powered reversi player agent that is available online using ReactJS framework. \
      Using the MiniMax Algorithm with Alpha-Beta Pruning, the agent will come up with a move maximizing its success \
      even if the opponent is playing optimally. Not only our users get to fight a formidable foe, but \
      they will also be indulged with the delicate UI and difficulty levels to satisfy our user's eagerness to play. \
      The live application can be accessed through https://reversai.netlify.com.", 
    dark: false
  },
  {
    title: "Impulse",
    gitrepo: "https://gitlab.com/impulse_bot/",
    content: 
      "Impulse is a To-Do Assistant Manager that is available as a Line Bot. \
      It is built using Java Spring Framework implementing Design Patterns and Microservices. This app consists of two main services: \
      ImpulseMind (MessageHandler) and ImpulseAct (Database and API) \
      The main goal of the app is to help our users manage their todos - enable users to easily Create, Update, or Delete \
      their Todos from the LINE application, give them information of which todo is important and remind each of them to complete it.",
    dark: false
  },
  {
    title: "Musica",
    gitrepo: "https://gitlab.com/musica-raspi-sysprog/",
    content: 
      "Musica is a Shared Music Player platform. Raspberry Pi 3+ is used as an Access Point & live server as well as hardware & GPIO mount place for Musica. \
      It enables the user who connects to it to manipulate the shared song queue. Users can get details of the song being played and the queue. On top of that, \
      each user can manipulate the queue as well: either by deleting song entries or adding new ones through the provided search bar which searches songs from Youtube.",
    dark: false
  },
  {
    title: "ToysRent",
    gitrepo: "https://gitlab.com/basdat-a14/toys-rent",
    content:
      "ToysRent is a toy rental service simulator group project built with Django and pure SQL only. \
      This project is an actual implementation of SQL comprehension in web developing using PostgreSQL database. \
      Prior to the creation of the front end side of this project, the database was built from scratch - from the tables, relations, data, \
      triggers, to stored procedures. On top of that base, we created a Django project to enable users to manipulate the database with respected \
      authorizations through user friendly and responsive UI.",
    dark: false
  },
  {
    title: "Minimalist Portfolio CMS",
    gitrepo: "https://github.com/Jonathanjojo19/PortfolioCMS",
    content: 
      "This is a Django based minimalist portfolio page with an admin page to edit the contents displayed in the main page of the site. \
      The owner can set and display various information such as owner name, introduction message, page title, LinkedIn profile link, email, \
      phone number, up to owner's projects with description and URL to the project. The updated values from the admin page will be displayed right away \
      in the main page of this application for visitors to see." ,
    dark: false
  },
  {
    title: "Store Manager",
    gitrepo: "https://github.com/WebStoreGroup/Web-Store-Manager",
    content: 
      "StoreManager is a project of 2 people, which I was assigned to and worked on Web Store Manager's back end side: \
      providing API views and permissions handling. StoreManager's backend is built on a robust Django-REST API services. \
      It is designed to be a usable template for online stores to monitor, \
      display, and manage their own online store through a website: admin dashboard and customer views.",
    dark: false
  }
];

export default projects;