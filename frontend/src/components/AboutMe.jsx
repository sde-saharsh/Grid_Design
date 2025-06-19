import { motion } from "framer-motion";
import React from "react";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 md:px-20 bg-black text-white scroll-mt-20"
    >
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl w-full">
        {/* Left: Image */}
        <div className="w-full md:w-[40%] flex justify-center">
          <motion.div
            whileHover={{
              scale: 1.08,
              rotate: 2,
              boxShadow: "0 0 30px rgba(255, 255, 255, 0.1)",
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
            }}
            className="aspect-square w-full max-w-[600px] sm:max-w-[600px] rounded-2xl overflow-hidden border border-[#2f2f2f] shadow-xl p-2"
          >
            <img
              src="./Profile/Profile.jpeg"
              alt="About me"
              className="w-full h-full object-cover rounded-2xl"
            />
          </motion.div>
        </div>

        {/* Right: Text */}
        <div className="w-full md:w-[60%] flex flex-col gap-4">
          <span className="bg-[#2f2f2f] text-sm px-3 py-1 rounded-full w-fit">
            About Me
          </span>
          <p className="text-lg">Hey, I'm</p>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Saharsh Khalokar
          </h1>
          <p className="text-sm text-gray-300 leading-relaxed">
            I'm a versatile full-stack developer with experience building modern
            web apps using Node.js, React.js, MongoDB, and more. Passionate about
            crafting smooth, user-friendly digital products. Let’s build something cool together! 🚀
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-4">
            <motion.a
              href="mailto:youremail@example.com"
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 10px rgba(255,255,255,0.2)" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white text-black px-4 py-2 rounded-md text-sm"
            >
              ✉️ Send an email
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/saharsh-khalokar-a9a8a731a"
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 10px rgba(255,255,255,0.2)" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-[#2f2f2f] px-4 py-2 rounded-md text-sm"
            >
              🔗 LinkedIn
            </motion.a>

            <motion.a
              href="https://github.com/sde-saharsh"
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 10px rgba(255,255,255,0.2)" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-[#2f2f2f] px-4 py-2 rounded-md text-sm"
            >
              🐙 GitHub
            </motion.a>

            <motion.a
              href="https://leetcode.com/u/SAHARSH_14/"
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 10px rgba(255,255,255,0.2)" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-[#FFA116] text-black px-4 py-2 rounded-md text-sm"
            >
              🧠 LeetCode
            </motion.a>

            <motion.a
              href="https://www.geeksforgeeks.org/user/sde_saharsh/"
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 10px rgba(255,255,255,0.2)" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-green-600 px-4 py-2 rounded-md text-sm"
            >
              📚 GFG
            </motion.a>

            <motion.a
              href="https://www.codechef.com/users/saharshx"
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 10px rgba(255,255,255,0.2)" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-[#5B3CC4] px-4 py-2 rounded-md text-sm"
            >
              🍽️ CodeChef
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
