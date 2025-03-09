"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Share2 } from "lucide-react";
import { FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";

const ShareButton = () => {
  const [showOptions, setShowOptions] = useState(false);

  const shareOptions = [
    { name: "Facebook", url: "https://www.facebook.com/sharer/sharer.php?u=", icon: <FaFacebook className="text-primary fs-5" /> },
    { name: "Twitter", url: "https://twitter.com/intent/tweet?url=", icon: <FaTwitter className="text-info fs-5" /> },
    { name: "WhatsApp", url: "https://api.whatsapp.com/send?text=", icon: <FaWhatsapp className="text-success fs-5" /> },
  ];

  const currentUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <div className="position-relative d-inline-block">
      {/* Main Share Button */}
      <motion.button
        whileTap={{ scale: 0.7 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="border-0 bg-transparent"
        onClick={() => setShowOptions(!showOptions)}
      >
        <Share2 size={24} className="me-1 text-primary" />
      </motion.button>

      {/* Share Options (Dropdown) */}
      <AnimatePresence>
        {showOptions && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="position-absolute top-100 bg-white shadow rounded p-2 mt-2"
            style={{ zIndex: 10, right: "-100px" }}
          >
            {shareOptions.map((option, index) => (
              <a
                key={index}
                href={`${option.url}${encodeURIComponent(currentUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="d-flex align-items-center text-dark text-decoration-none p-2"
              >
                {option.icon} <span className="ms-2">{option.name}</span>
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ShareButton;
