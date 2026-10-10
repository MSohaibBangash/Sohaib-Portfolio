import React from "react";
import { motion } from "framer-motion";
import {
  SiAngular,
  SiAntdesign,
  SiAxios,
  SiBootstrap,
  SiChartdotjs,
  SiCloudinary,
  SiCss,
  SiDocker,
  SiExpress,
  SiGit,
  SiGoogleanalytics,
  SiGooglemaps,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiRabbitmq,
  SiReact,
  SiReactquery,
  SiReactrouter,
  SiRedis,
  SiRedux,
  SiSass,
  SiSequelize,
  SiSocketdotio,
  SiStripe,
  SiSwagger,
  SiSwiper,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import "./skill.css";

const skillGroups = [
  {
    title: "Frontend",
    items: [
      { name: "React.js", Icon: SiReact },
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "Angular", Icon: SiAngular },
      { name: "TypeScript", Icon: SiTypescript },
      { name: "JavaScript (ES6+)", Icon: SiJavascript },
      { name: "HTML5", Icon: SiHtml5 },
      { name: "CSS3", Icon: SiCss },
      { name: "Sass", Icon: SiSass },
      { name: "Tailwind CSS", Icon: SiTailwindcss },
      { name: "Redux Toolkit", Icon: SiRedux },
      { name: "React Query", Icon: SiReactquery },
      { name: "React Router", Icon: SiReactrouter },
    ],
  },
  {
    title: "UI Libraries",
    items: [
      { name: "Ant Design", Icon: SiAntdesign },
      { name: "shadcn/ui" },
      { name: "PrimeReact" },
      { name: "Bootstrap", Icon: SiBootstrap },
      { name: "Chart.js", Icon: SiChartdotjs },
      { name: "Swiper", Icon: SiSwiper },
    ],
  },
  {
    title: "Forms & Utilities",
    items: [
      { name: "Formik" },
      { name: "Yup" },
      { name: "i18next" },
      { name: "Crypto.js" },
      { name: "Moment.js" },
    ],
  },
  {
    title: "Backend & Database",
    items: [
      { name: "Node.js", Icon: SiNodedotjs },
      { name: "Express.js", Icon: SiExpress },
      { name: "RESTful APIs" },
      { name: "Prisma", Icon: SiPrisma },
      { name: "Sequelize", Icon: SiSequelize },
      { name: "Socket.io", Icon: SiSocketdotio },
      { name: "JWT", Icon: SiJsonwebtokens },
      { name: "MongoDB", Icon: SiMongodb },
      { name: "MySQL", Icon: SiMysql },
      { name: "PostgreSQL", Icon: SiPostgresql },
      { name: "Redis", Icon: SiRedis },
    ],
  },
  {
    title: "DevOps, Auth & Tools",
    items: [
      { name: "Docker", Icon: SiDocker },
      { name: "RabbitMQ", Icon: SiRabbitmq },
      { name: "Git", Icon: SiGit },
      { name: "OAuth" },
      { name: "Azure AD" },
      { name: "Stripe", Icon: SiStripe },
      { name: "Cloudinary", Icon: SiCloudinary },
      { name: "Google Maps", Icon: SiGooglemaps },
      { name: "Google Analytics", Icon: SiGoogleanalytics },
      { name: "Swagger", Icon: SiSwagger },
      { name: "Postman", Icon: SiPostman },
      { name: "Axios", Icon: SiAxios },
    ],
  },
];

const Skill = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.2, staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { y: 16, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.4 } },
  };

  return (
    <div className="section container">
      <motion.h2
        className="title"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      >
        Skills
      </motion.h2>
      <motion.p
        className="sub-title"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.15 }}
      >
        Tools and technologies across my stack
      </motion.p>

      <motion.div
        className="skills_modern"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {skillGroups.map((group) => (
          <motion.div
            key={group.title}
            className="skills_group"
            variants={itemVariants}
          >
            <h3 className="skills_group-title">{group.title}</h3>
            <div className="skills_tags">
              {group.items.map(({ name, Icon }) => (
                <span key={name} className="skill_tag">
                  {Icon ? <Icon className="skill_tag-icon" aria-hidden="true" /> : null}
                  {name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skill;
