import { MdDesignServices } from "react-icons/md";
import { IoIosRocket } from "react-icons/io";
import { FaCode } from "react-icons/fa";
import { motion } from "framer-motion";

import { MdOutlineVideoLibrary } from "react-icons/md";    // Educational Content
import { FaBrain } from "react-icons/fa"; // أيقونة دماغ AI


const Services = () => {

  const cards = [
    {
      icon: <FaCode className="text-4xl md:text-5xl text-pink-600 mb-4" />,
      title: "Web Development",
      text: "Building responsive and high-performing web applications using modern tech.",
    },
{
  icon: <FaBrain className="text-4xl md:text-5xl text-pink-600 mb-4" />,
  title: "Data Analysis & Big Data",
  text: "Analyzing, visualizing data and learning Big Data fundamentals for data-driven insights.",
},

    {
      icon: <MdOutlineVideoLibrary className="text-4xl md:text-5xl text-pink-600 mb-4" />,
      title: "Educational Content",
      text: "Creating tutorial videos and learning resources as part of the 'Pregraduate Researchers' initiative.",
    },
  ];


  return (
    <section id='services' className="relative py-[100px] bg-gradient-to-r from-pink-100 via-pink-200 to-pink-300 overflow-hidden">
      {/* زخارف خلفية */}
      <div className="absolute top-10 left-[-60px] w-[200px] h-[200px] bg-purple-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-10 right-[-60px] w-[220px] h-[220px] bg-pink-400 rounded-full blur-3xl opacity-40 animate-bounce"></div>

      <div className="container relative z-10">
        {/* عنوان القسم */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gray-700 opacity-80 mb-2">What I Offer</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-600 to-purple-500 bg-clip-text text-transparent">
            Services
          </h2>
        </motion.div>

        {/* كروت الخدمات */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 md:px-0">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-xl bg-white/80 backdrop-blur-md shadow-md hover:shadow-xl text-center transition-all duration-300 cursor-pointer flex flex-col items-center"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 25px rgba(236, 72, 153, 0.4)",
              }}
            >
              {card.icon}
              <h4 className="font-semibold text-gray-800 text-lg sm:text-xl mb-2">
                {card.title}
              </h4>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
