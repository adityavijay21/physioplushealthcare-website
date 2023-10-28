import React from "react";
import { motion, useAnimation } from "framer-motion";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const cards = [
  {
    title: "Chiropractor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a dolor sed quam rhoncus consequat.",
  },
  {
    title: "Pain Care",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a dolor sed quam rhoncus consequat.",
  },
  {
    title: "Ortho Physio",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a dolor sed quam rhoncus consequat.",
  },
  {
    title: "Sports Physio",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a dolor sed quam rhoncus consequat.",
  },
  {
    title: "Pediatric Care",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a dolor sed quam rhoncus consequat.",
  },
  {
    title: "Neuro Physio",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a dolor sed quam rhoncus consequat.",
  },
  {
    title: "Psychologist",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a dolor sed quam rhoncus consequat.",
  },
  {
    title: "Therapist",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a dolor sed quam rhoncus consequat.",
  },
];

const CardCarousel = () => {
  const containerControls = useAnimation();

  const cardWidth = 300;

  const handleDrag = (event, info) => {
    const dragOffset = info.offset.x;
    containerControls.start({ x: dragOffset });
  };

  return (
    <div
      className="relative overflow-hidden w-full justify-evenly mx-auto cursor-grab"
      style={{ width: "1400px" }}
    >
      <motion.div
        className="flex"
        style={{
          width: cards.length * cardWidth + "px",
        }}
        drag="x"
        dragConstraints={{
          left: -(cards.length * cardWidth - 1400), // Adjust the total width of all cards
          right: 0,
        }}
        dragElastic={0.5}
        onDrag={handleDrag}
        animate={containerControls}
        transition={{ type: "inertia", velocity: 100 }}
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="item p-4 "
            style={{ width: cardWidth + "px" }}
            // style={{ width: "100%" }}
          >
            <div className="bg-purple-50 flex flex-col pl-4 rounded-2xl justify-evenly">
              <div className="text-black text-xl font-bold mt-5 self-start whitespace-nowrap">
                {card.title}
              </div>
              <div className="text-zinc-600 text-sm mt-6">
                {card.description}
              </div>
              <div className="bg-zinc-400 w-[235px] h-px mt-3.5 self-start" />
              <div className="flex w-[235px] max-w-full items-start justify-between gap-5 mt-3.5 mb-5 self-start hover:underline">
                <div className="text-zinc-600 text-sm mt-1.5 self-start hover:cursor-pointer">
                  Explore More
                </div>
                <BsFillArrowRightCircleFill className="hover: cursor-pointer mt-2" />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CardCarousel;
