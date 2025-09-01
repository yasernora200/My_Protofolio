import { motion } from "framer-motion";

const Skills = () => {
  const SkillsData = [
    { id: 1, image: "/assets/react.svg", title: "React", disc: "Framework" },
    {
      id: 2,
      image: "/assets/javascript.svg",
      title: "JavaScript",
      disc: "Interaction",
    },
    {
      id: 3,
      image: "/assets/tailwindcss.svg",
      title: "TailwindCSS",
      disc: "User Interface",
    },

    { id: 4, image: "/assets/css3.svg", title: "CSS", disc: "User Interface" },

    {
      id: 5,
      image: "/assets/html5.svg",
      title: "HTML",
      disc: "Markup Language",
    },
    {
      id: 6,
      image: "/assets/bootstrap.svg",
      title: "Bootstrap",
      disc: "UI Framework",
    },
    { id: 7, image: "/assets/figma.svg", title: "Figma", disc: "Design Tool" },

    {
      id: 8,
      image: "/assets/Git-Icon-1788C.svg",
      title: "Git",
      disc: "Version Control",
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-[120px] bg-gradient-to-r from-pink-100 via-pink-200 to-pink-300 overflow-hidden"
    >
      {/* زخارف خلفية */}
      <div className="absolute top-0 left-0 w-[200px] h-[200px] bg-purple-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-pink-400 rounded-full blur-2xl opacity-40 animate-bounce"></div>

      <div className="container relative z-10">
        {/* عنوان القسم */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-pink-600 font-extrabold text-3xl sm:text-4xl md:text-5xl">
            My Skills
          </h2>
          <p className="text-gray-700 opacity-80 text-base md:text-lg">
            Technologies I work with
          </p>
        </motion.div>

        {/* شبكة المهارات */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 px-6 md:px-0">
          {SkillsData.map(({ id, image, title, disc }) => (
            <motion.article
              key={id}
              className="flex flex-col items-center gap-3 text-center p-6 rounded-xl bg-white/80 backdrop-blur-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-pink-200 cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: id * 0.1 }}
            >
              {/* الصورة بخلفية */}
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-300 rounded-xl flex items-center justify-center shadow-md">
                <img
                  src={image}
                  alt={title}
                  className="w-10 h-10 object-contain"
                />
              </div>

              {/* النص */}
              <div>
                <h5 className="text-lg font-semibold text-gray-800">{title}</h5>
                <p className="text-sm text-gray-600">{disc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
