import { motion } from 'framer-motion'
import { useRef } from 'react'

interface SkillProps {
  name: string
  x: string
  y: string
}

const Skill = ({ name, x, y }: SkillProps) => {
  const ref = useRef(null)
  return (
    <motion.div
      ref={ref}
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
      className="bg-dark text-light dark:bg-light dark:text-dark xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold absolute w-max origin-center cursor-pointer rounded-full px-6 py-3 font-semibold md:px-3 md:py-1.5 md:text-sm lg:px-4 lg:py-2"
    >
      {name}
    </motion.div>
  )
}

const Skills = () => {
  return (
    <>
      <h2 className="mt-64 w-full text-center text-8xl font-bold md:mt-32 md:text-6xl">Skills</h2>
      <div className="bg-circularLight dark:bg-circularDark lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm xs:h-[50vh] relative mb-64 flex h-screen w-full items-center justify-center rounded-full sm:h-[60vh] md:mb-32 lg:h-[80vh]">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-dark text-light shadow-dark dark:bg-light dark:text-dark xs:text-xs xs:p-2 flex cursor-pointer rounded-full p-8 font-semibold md:p-4 lg:p-6"
        >
          Web
        </motion.div>

        <Skill name="HTML" x="-20vw" y="2vw" />
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="JavaScript" x="20vw" y="6vw" />
        <Skill name="ReactJS" x="0vw" y="12vw" />
        <Skill name="VueJS" x="2vw" y="25vw" />
        <Skill name="NextJS" x="-20vw" y="-15vw" />
        <Skill name="NuxtJS" x="9vw" y="15vw" />
        <Skill name="Bootstrap" x="15vw" y="-12vw" />
        <Skill name="Github" x="-35vw" y="-5vw" />
        <Skill name="Web Design" x="29vw" y="-2vw" />
        <Skill name="Websocket" x="36vw" y="-10vw" />
        <Skill name="WebRTC" x="20vw" y="-20vw" />
        <Skill name="Flutter" x="0vw" y="-20vw" />
        <Skill name="Firebase" x="-25vw" y="18vw" />
        <Skill name="React Native" x="-13vw" y="22vw" />
        <Skill name="Tailwind CSS" x="28vw" y="18vw" />
      </div>
    </>
  )
}

export default Skills
