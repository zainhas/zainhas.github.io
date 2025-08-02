// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-writing",
          title: "writing",
          description: "Technical articles and insights on AI, machine learning, and vector databases.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/writing/";
          },
        },{id: "nav-talks",
          title: "talks",
          description: "Conference talks, workshops, and presentations.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/talks/";
          },
        },{id: "nav-teaching-courses",
          title: "Teaching/Courses",
          description: "Online courses and educational content on AI, machine learning, and vector databases.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-code",
          title: "code",
          description: "Open source projects, GitHub repositories, and code contributions.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/code/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-advanced-rag-techniques",
        
          title: "Advanced RAG Techniques",
        
        description: "Learn how to improve the individual indexing, retreival and generation parts of your RAG pipeline!",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/advanced-rag/";
          
        },
      },{id: "post-openai-39-s-matryoshka-embeddings-in-weaviate",
        
          title: "OpenAI&#39;s Matryoshka Embeddings in Weaviate",
        
        description: "How to use OpenAI&#39;s embedding models trained with Matryoshka Representation Learning in a vector database like Weaviate",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/openais-matryoshka-embeddings/";
          
        },
      },{id: "post-step-by-step-guide-to-choosing-the-best-embedding-model-for-your-application",
        
          title: "Step-by-Step Guide to Choosing the Best Embedding Model for Your Application",
        
        description: "How to select an embedding model for your search and retrieval-augmented generation system.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/how-to-choose-an-embedding-model/";
          
        },
      },{id: "post-32x-reduced-memory-usage-with-binary-quantization",
        
          title: "32x Reduced Memory Usage With Binary Quantization",
        
        description: "In-depth technical breakdown of how binary quantization works and how to use it in Weaviate.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/binary-quantization/";
          
        },
      },{id: "post-accelerating-vector-search-up-to-40-with-intel-s-latest-xeon-cpu-emerald-rapids",
        
          title: "Accelerating Vector Search up to +40% with Intel’s latest Xeon CPU - Emerald...",
        
        description: "Boosting Weaviate using SIMD-AVX512, Loop Unrolling and Compiler Optimizations",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/intel/";
          
        },
      },{id: "post-multimodal-retrieval-augmented-generation-rag",
        
          title: "Multimodal Retrieval-Augmented Generation (RAG)",
        
        description: "Learn how to build Multimodal Retrieval Augmented Generation (MM-RAG) systems that combine text, images, audio, and video. Discover contrastive learning, any-to-any search with vector databases, and practical code examples using Weaviate and OpenAI GPT-4V.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/multimodal-RAG/";
          
        },
      },{id: "post-how-to-reduce-memory-requirements-by-up-to-90-using-product-quantization",
        
          title: "How to Reduce Memory Requirements by up to 90%+ using Product Quantization",
        
        description: "The details behind how you can compress vectors using PQ with little loss of recall!",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/pq-rescoring/";
          
        },
      },{id: "post-a-gentle-introduction-to-vector-databases",
        
          title: "A Gentle Introduction to Vector Databases",
        
        description: "What is a Vector Database? Explaination of core concepts, such as vector embeddings, vector search, and vector indexing",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/vector-database/";
          
        },
      },{id: "post-multimodal-embedding-models",
        
          title: "Multimodal Embedding Models",
        
        description: "ML Models that can see, read, hear and more!",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/multimodal-models/";
          
        },
      },{id: "post-running-large-language-models-privately-privategpt-and-beyond",
        
          title: "Running Large Language Models Privately - privateGPT and Beyond",
        
        description: "A discussion on data privacy and privacy-preserving machine learning for LLMs",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/private-LLM/";
          
        },
      },{id: "post-how-to-create-your-own-chatgpt-plugin",
        
          title: "How to Create Your Own ChatGPT Plugin",
        
        description: "A show-and-tell of how we created the Weaviate Retrieval Plugin for ChatGPT",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/how-to-chatgpt-plugin/";
          
        },
      },{id: "post-the-chatgpt-retrieval-plugin-weaviate-as-a-long-term-memory-store-for-generative-ai",
        
          title: "The ChatGPT Retrieval Plugin - Weaviate as a Long-term Memory Store for Generative...",
        
        description: "Learn how you can connect Weaviate to ChatGPT to generate customized responses.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/weaviate-retrieval-plugin/";
          
        },
      },{id: "post-how-gpt4-0-and-other-large-language-models-work",
        
          title: "How GPT4.0 and other Large Language Models Work",
        
        description: "A gentle introduction to Large Language Models (LLMs) - how they work and what they learn.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/what-are-llms/";
          
        },
      },{id: "post-how-a-i-creates-art-a-gentle-introduction-to-diffusion-models",
        
          title: "How A.I. Creates Art - A Gentle Introduction to Diffusion Models",
        
        description: "Machine learning models can create beautiful and novel images. Learn how Diffusion Models work and how you could make use of them.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/how-ai-creates-art/";
          
        },
      },{id: "post-vector-embeddings-explained",
        
          title: "Vector Embeddings Explained",
        
        description: "Get an intuitive understanding of what exactly vector embeddings are, how they&#39;re generated, and how they&#39;re used in semantic search.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/vector-embeddings-explained/";
          
        },
      },{id: "post-the-details-behind-the-sphere-dataset-in-weaviate",
        
          title: "The Details Behind the Sphere Dataset in Weaviate",
        
        description: "Learn about the hardware, software and performance metric specifications behind our ~1B object import of the Sphere dataset into Weaviate.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/details-behind-the-sphere-dataset-in-weaviate/";
          
        },
      },{id: "post-the-sphere-dataset-in-weaviate",
        
          title: "The Sphere Dataset in Weaviate",
        
        description: "Learn how to import and query the Sphere dataset in Weaviate!",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/sphere-dataset-in-weaviate/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/zainhas", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/zainhas", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/ZainHasan6", "_blank");
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
