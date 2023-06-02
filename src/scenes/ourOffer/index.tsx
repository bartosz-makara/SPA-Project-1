import { SelectedPage, Props, OfferType } from "@/shared/types";
import image1 from "@/assets/service1.png";
import image2 from "@/assets/service5.png";
import image3 from "@/assets/service4.png";
import image4 from "@/assets/service2.png";
import image5 from "@/assets/service3.png";
import image6 from "@/assets/service6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import OfferComponent from "./OfferComponent";

const offers: Array<OfferType> = [
  {
    name: "Single/Album Rollout",
    description:
      "Getting people excited, then delivering your final product with impact and reception it deserves",
    image: image1,
  },
  {
    name: "Video Editing/Color Grading",
    description:
      "Bringing your music videos to life through color, texture and taking your fans to another dimension through visual storytelling",
    image: image2,
  },
  {
    name: "Set List Curation",
    description:
      "Putting together an irresistible sequence that stirs emotions and turns your performance into a magical experience",
    image: image3,
  },
  {
    name: "Audio Mixing/Mastering",
    description:
      "Fixing up rough edges and making your music sound pro with software used by industry heavyweights",
    image: image4,
  },
  {
    name: "Production & Arrangement",
    description:
      "Synthesising your concepts into a cohesive, exciting narrative with commercial-grade sound design",
    image: image5,
  },
  {
    name: "Composition & Songwriting",
    description:
      "Coming up with infectious concepts that reflect your style and message",
    image: image6,
  },
];

const OurOffer = ({ setSelectedPage }: Props) => {
  return (
    <section id="ouroffer" className="w-full bg-primary-100 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurOffer)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div>
            <HText>OUR OFFER</HText>
            <p className="py-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusantium doloremque tenetur sequi mollitia officia ex, illo
              harum inventore quo neque.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {offers.map((item: OfferType, index) => (
              <OfferComponent
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurOffer;
