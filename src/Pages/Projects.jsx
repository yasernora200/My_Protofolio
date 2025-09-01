import { motion } from "framer-motion";

const Projects = () => {
  const portfolioData = [
    {
      id: 1,
      image: "/assets/portfolio1.jpg",
      title: "Portfolio Item 1",
      github: "https://github.com/yasernora200",
      demo: "https://demo1.com",
    },
    {
      id: 2,
      image: "/assets/portfolio2.jpg",
      title: "Portfolio Item 2",
      github: "https://github.com/yasernora200",
      demo: "https://demo2.com",
    },
    {
      id: 3,
      image: "/assets/portfolio3.jpg",
      title: "Portfolio Item 3",
      github: "https://github.com/yasernora200",
      demo: "https://demo3.com",
    },
    {
      id: 4,
      image: "/assets/portfolio4.jpg",
      title: "Portfolio Item 4",
      github: "https://github.com/yasernora200",
      demo: "https://demo4.com",
    },
    {
      id: 5,
      image: "/assets/portfolio5.png",
      title: "Portfolio Item 5",
      github: "https://github.com/yasernora200",
      demo: "https://demo5.com",
    },
    {
      id: 6,
      image: "/assets/portfolio6.jpg",
      title: "Portfolio Item 6",
      github: "https://github.com/yasernora200",
      demo: "https://demo6.com",
    },
  ];

  return (
    <section id='projects' className="relative py-[100px] bg-gradient-to-br from-pink-100 via-pink-200 to-pink-300 overflow-hidden">
      {/* زخارف الخلفية */}
      <div className="absolute top-10 left-[-80px] w-[220px] h-[220px] bg-pink-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-16 right-[-80px] w-[260px] h-[260px] bg-purple-400 rounded-full blur-3xl opacity-40 animate-bounce"></div>

      <div className="container relative z-10">
        {/* عنوان القسم */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gray-700 opacity-80 mb-2">What I Built</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-600 to-purple-500 bg-clip-text text-transparent">
            My Projects
          </h2>
        </motion.div>

        {/* شبكة المشاريع */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-0">
          {portfolioData.map(({ id, image, title, github, demo }, index) => (
            <motion.article
              key={id}
              className="relative rounded-2xl overflow-hidden bg-white/70 backdrop-blur-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* الصورة */}
              <div className="w-full h-[220px] overflow-hidden relative">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-all duration-500"></div>
              </div>

              {/* النص */}
              <div className="p-6 text-center">
                <h3 className="text-gray-800 text-lg font-semibold mb-4">
                  {title}
                </h3>
                <div className="flex justify-center gap-4">
                  <a
                    href={github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 text-sm font-medium text-pink-600 border border-pink-500 rounded-lg hover:bg-pink-600 hover:text-white transition-all duration-300"
                  >
                    Github
                  </a>
                  <a
                    href={demo}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg hover:opacity-90 transition-all duration-300"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
