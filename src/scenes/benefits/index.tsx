import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { BenefitType, SelectedPage, Props } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import { motion } from "framer-motion";
import Benefit from "./Benefit";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "Market Research",
    description:
      "Understanding the market is crucial for any successful music career. Let's find out who are the people who would love to hear your music",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Artist Image Consulting",
    description:
      "Your music is your most potent asset but not the only one. Let's make sure you harness the power of your full potential and gain competitive advantage.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Social Media Strategy",
    description:
      "Even the most extraordinary music can go unnoticed without proper distribution and promotion. Let's come up with effective plan that will help you stand out from the crowd",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* Header */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN SOUND</HText>
          <p className="mt-5 mb-12 text-sm">
            Fighters have a saying:{" "}
            <em>
              if a man looks weak in the midsection, it's because he's weak in
              the midsection
            </em>
            . Neglecting the <em>business</em> in "music business" will be the
            easiest and most detrimantal thing you'll ever do to Your career.
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
          transition={{ duration: 1 }}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* Graphics & Descr */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* Graphic */}
          <img
            src={BenefitsPageGraphic}
            alt="benefits-page-graphic"
            className="mx-auto pb-8"
            width={400}
          />

          {/* Descr */}
          <div>
            {/* Title */}
            <div className="relative">
              <div className="">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>WORLD KEEPS ON SPINNIN'...</HText>
                </motion.div>
              </div>
            </div>
            {/* Para */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                In today's fast-paced music landscape, it's no secret that
                artists need to wear multiple hats to thrive. Gone are the days
                when simply creating incredible music was enough. Now, artists
                must become savvy entrepreneurs, masterful marketers, and shrewd
                negotiators. At our agency, we understand the challenges you
                face and are dedicated to helping you navigate the music
                business maze with confidence.
              </p>
              <p className="mb-5">
                We believe in setting you up for long-term success. While
                independence is valuable, there may come a time when you want to
                partner with a record label or secure other lucrative
                opportunities. Our agency will help you build leverage by
                establishing a strong brand, growing your fan base, and
                optimizing your revenue streams. With our guidance, you'll be in
                a prime position to negotiate favorable deals that propel your
                career to new heights while retaining creative control.
              </p>
            </motion.div>
            {/* Button */}
            <motion.div
              className="relative mt-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.75, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Schedule Free Call
                </ActionButton>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
