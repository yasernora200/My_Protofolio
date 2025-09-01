import { motion } from "framer-motion";

import Socialicons from "../components/Socialicons";

const Home = () => {
  return (
    <section
      id="home"
      className="relative pt-24 pb-16 bg-gradient-to-br from-pink-200 via-pink-300 to-pink-400 overflow-hidden"
    >
      {/*  Blob في الأعلى */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-[-80px] right-[-100px] w-[300px] h-[300px] z-0 opacity-70"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="blob-gradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#f9a8d4" />
              <stop offset="100%" stopColor="#fbcfe8" />
            </linearGradient>
          </defs>
          <path
            fill="url(#blob-gradient)"
            d="M40,-50C60,-40,80,-20,90,10C100,40,100,80,70,90C40,100,0,90,-30,80C-60,70,-80,50,-90,20C-100,-10,-100,-50,-80,-60C-60,-70,-30,-80,0,-80C30,-80,60,-60,40,-50Z"
            transform="translate(100 100)"
          />
        </svg>
      </motion.div>

      {/*  Blob إضافي في اليسار للأسلوب */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute bottom-[100px] left-[-80px] w-[250px] h-[250px] z-0"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="blob-gradient-2" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fbcfe8" />
              <stop offset="100%" stopColor="#f9a8d4" />
            </linearGradient>
          </defs>
          <path
            fill="url(#blob-gradient-2)"
            d="M35,-45C50,-35,70,-20,75,5C80,30,70,60,50,75C30,90,0,90,-30,80C-60,70,-80,50,-85,20C-90,-10,-80,-50,-55,-65C-30,-80,0,-80,25,-70C50,-60,70,-50,35,-45Z"
            transform="translate(100 100)"
          />
        </svg>
      </motion.div>

      {/*  Wave في الأسفل */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          className="relative block w-full h-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 150"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="smooth-gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f9a8d4" />
              <stop offset="100%" stopColor="#fbcfe8" />
            </linearGradient>
          </defs>
          <path
            fill="url(#smooth-gradient)"
            d="M0,64L48,69.3C96,75,192,85,288,74.7C384,64,480,32,576,32C672,32,768,64,864,69.3C960,75,1056,53,1152,48C1248,43,1344,53,1392,58.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto flex flex-col items-center text-center relative z-10">
        {/*  Text Intro */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="py-6"
        >
          <p className="text-white text-lg sm:text-xl tracking-wide mb-2">
            Hi, I’m
          </p>
          <h1 className="text-4xl sm:text-6xl font-extrabold bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent leading-tight">
            Nourhan Yasser
          </h1>
          <p className="mt-3 text-white text-xl sm:text-2xl font-light opacity-80">
            Frontend Developer
          </p>
        </motion.div>

        {/*  Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-6 flex gap-4"
        >
          <a
            href="#contact"
            className="px-6 py-3 bg-purple-700 text-white rounded-full font-semibold shadow-lg hover:bg-purple-800 transition"
          >
            Hire Me
          </a>
          <a
            href="\assets\CV_Nora.pdf"
            download
            className="px-6 py-3 bg-white text-purple-700 rounded-full font-semibold shadow-lg hover:bg-pink-200 transition"
          >
            Download CV
          </a>
        </motion.div>

        {/* ✅ Image with Modern Circular Frame */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="
    relative mt-10 w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] lg:w-[340px] lg:h-[340px]
    rounded-full p-[8px] bg-gradient-to-br from-purple-400 via-pink-300 to-pink-100
    shadow-2xl overflow-hidden flex items-center justify-center
  "
        >
          {/*  خلفية بلوب متحرك */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[160%] h-[160%] bg-pink-300 rounded-full opacity-30"
          ></motion.div>

          {/*  الصورة  */}
          <img
            src="/assets/Nora2.png"
            className="[filter:brightness(1.3)saturate(1.5)] rounded-full object-cover  w-[90%] h-[90%] relative z-10 border-4 border-white shadow-lg object-top"
            alt="Me"
          />
        </motion.div>

        <Socialicons />
      </div>
    </section>
  );
};

export default Home;
