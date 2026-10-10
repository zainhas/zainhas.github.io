// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-writing",
          title: "Writing",
          description: "Technical deep dives and guides on fine-tuning, evaluation, inference, agents, RAG, and vector search, published on the Together AI and Weaviate blogs.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/writing/";
          },
        },{id: "nav-talks",
          title: "Talks",
          description: "Conference talks, workshops, podcasts, and livestreams on open models, inference, fine-tuning, agents, RAG, and vector search. If you&#39;d like me to speak at your event, reach out on LinkedIn or X.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/talks/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Hands-on, code-first courses for practitioners, from production RAG systems to multimodal search.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
