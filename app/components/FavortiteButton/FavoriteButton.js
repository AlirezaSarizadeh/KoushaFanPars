"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const FavoriteButton = () => {
  const [liked, setLiked] = useState(false);

  return (
    <motion.button
      whileTap={{ scale: 0.7 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      onClick={() => setLiked(!liked)}
      className="btn border-0 position-relative p-2"
    >
      {/* Animated Background Glow */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: liked ? 1.2 : 0, opacity: liked ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        className="position-absolute top-50 start-50 translate-middle text-primary"
        style={{ zIndex: -1 }}
      >
        <Heart size={24} fill="currentColor" />
      </motion.div>

      {/* Heart Icon */}
      <Heart
        size={24}
        className={`transition-all ${liked ? "text-primary" : "text-primary"}`}
        fill={liked ? "currentColor" : "none"}
      />
    </motion.button>
  );
};

export default FavoriteButton;
