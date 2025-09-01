import { motion } from "framer-motion";
import Aboutcard from "../components/Aboutcard";

const About = () => {
  return (
    <section id='about' className="relative py-16 px-6 md:px-12 bg-gradient-to-r from-pink-100 via-pink-200 to-pink-300 overflow-hidden">
      {/* زخارف خلفية */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-purple-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-pink-300 rounded-full blur-2xl opacity-40 animate-bounce"></div>

      <div className="container mx-auto relative z-10">
        {/* العنوان */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h5 className="text-gray-700 tracking-wide text-sm sm:text-base opacity-80">
            Get to Know
          </h5>
          <h2 className="text-pink-600 font-extrabold text-3xl sm:text-4xl md:text-5xl">
            About Me
          </h2>
        </motion.div>

        {/* المحتوى */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* الصورة */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative max-w-[350px] md:max-w-[400px] w-full mx-auto md:mx-0"
          >
            <div
              className="absolute inset-0 rounded-xl transform rotate-6"
              style={{
                background:
                  "linear-gradient(135deg, rgba(156, 39, 176, 0.5), rgba(233, 30, 99, 0.5))",
              }}
            ></div>

            <img
              src="/assets/About-me.jpg"
              alt="About Me"
              className="relative w-full rounded-xl aspect-[4/5] object-cover
 transform rotate-12 hover:rotate-0 hover:scale-105 transition-all duration-500 ease-in-out shadow-xl"
            />
          </motion.div>

          {/* النص والكروت */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col gap-6"
          >
            {/* الكروت */}
            <Aboutcard />

            {/* النص */}
            <p className="text-gray-800 tracking-tight text-base md:text-lg max-w-full md:max-w-[600px] leading-relaxed ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              ipsam error facilis dolorum eaque et, quasi harum quae impedit,
              laudantium cupiditate id, rerum praesentium ratione ducimus
              placeat labore!
            </p>

            {/* الزرار */}
            <button
              className="mt-5 bg-transparent border-2 border-pink-500 text-pink-600 font-semibold py-2 px-6 rounded-lg text-base md:text-lg hover:bg-pink-500 hover:text-white transition-all duration-300 ease-in-out hover:scale-105 shadow-md"
            >
              Let&apos;s Talk
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
