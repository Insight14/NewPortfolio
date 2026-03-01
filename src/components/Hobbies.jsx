import { motion } from "framer-motion";

const hobbies = [
  { name: "Real Madrid", image: "/projects/Real_Madrid_CF.svg.png" },
  { name: "Mbappe", image: "/projects/mbappe.png" },
  { name: "Man City", image: "/projects/Manchester_City_FC_badge.svg.png" },
  { name: "De Bruyne 2", image: "/projects/debruyne2.jpeg" },
  { name: "FCM", image: "/projects/fcm.png" },
  { name: "Minecraft", image: "/projects/minecraft-1-logo-svg-vector.svg" },
  { name: "Sukuna", image: "/projects/sukuna.jpg" },
  { name: "Karate", image: "/projects/karate-clipart-lg.png" },
  { name: "Travis Scott", image: "/projects/Travis_Scott_-_Astroworld.png" },
  { name: "LeetCode", image: "/projects/LeetCode_Logo_1.png" },
];

export const Hobbies = () => {
  const marqueeItems = [...hobbies, ...hobbies];

  return (
    <motion.section
      id="hobbies"
      className="hobbies-bar"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2>Hobbies & Interests</h2>

      <div className="hobbies-track">
        {marqueeItems.map((hobby, index) => (
          <div className="hobby-item" key={`${hobby.name}-${index}`}>
            <img src={hobby.image} alt={hobby.name} className="hobby-item-image" />
          </div>
        ))}
      </div>
    </motion.section>
  );
};
