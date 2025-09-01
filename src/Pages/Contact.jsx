import { motion } from "framer-motion";
import ContactCard from "../components/ContactCard";
import FormContact from "../components/FormContact";

const Contact = () => {
  return (
    <section id='contact' className="relative py-[120px] bg-gradient-to-br from-pink-200 via-pink-300 to-pink-400
 overflow-hidden">
      {/* زخارف الخلفية */}
      <div className="absolute top-16 left-[-100px] w-[220px] h-[220px] bg-pink-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-16 right-[-120px] w-[260px] h-[260px] bg-purple-400 rounded-full blur-3xl opacity-40 animate-bounce"></div>

      <div className="container relative z-10">
        {/* العنوان */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gray-700 opacity-80 mb-2">Get in Touch</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-600 to-purple-500 bg-clip-text text-transparent">
            Contact Me
          </h2>
        </motion.div>

        {/* الشبكة الأساسية */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-0">
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="p-6 rounded-2xl bg-white/30 backdrop-blur-md shadow-lg"
  >
    <ContactCard />
  </motion.div>

  <motion.div
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="p-6 rounded-2xl bg-white/30 backdrop-blur-md shadow-lg"
  >
    <FormContact />
  </motion.div>
</div>

        </div>
     
    </section>
  );
};

export default Contact;
