"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useUser } from "@/context/UserContext";
import toast from "react-hot-toast";

const FavoriteButton = ({ product_id }) => {
  const { user, isHydrated } = useUser();
  const [liked, setLiked] = useState(false);
  const [loading, setLoading] = useState(false);

  // ✅ گرفتن وضعیت اولیه علاقه‌مندی از favorite_list
  useEffect(() => {
    if (!user?.id) return;

    const fetchFavoriteStatus = async () => {
      try {
        const formData = new FormData();
        formData.append("user_id", user.id);

        const res = await fetch("https://api.kfp-dental.com/api/favorite_list", {
          method: "POST",
          body: formData,
        });

        if (res.ok) {
          const favorites = await res.json();
          console.log("لیست علاقه‌مندی‌ها:", favorites);

          // ✅ بررسی وجود محصول در علاقه‌مندی‌ها
          const isLiked = favorites.some((fav) => fav.product_id === product_id);
          setLiked(isLiked);
        } else {
          console.error("دریافت لیست علاقه‌مندی‌ها با خطا مواجه شد");
        }
      } catch (error) {
        console.error("خطا در دریافت علاقه‌مندی‌ها:", error);
      }
    };

    fetchFavoriteStatus();
  }, [user?.id, product_id]);

  // ✅ افزودن یا حذف علاقه‌مندی
  const handleFavorite = async () => {
    if (!user?.id) {
      toast.error("برای افزودن به علاقه‌مندی‌ها ابتدا وارد حساب شوید");
      return;
    }

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("user_id", user.id);
      formData.append("product_id", product_id);

      const response = await fetch("https://api.kfp-dental.com/api/product_favorite", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log("پاسخ API علاقه‌مندی:", data);

      if (response.ok) {
        setLiked((prev) => !prev);
        toast.success(!liked ? "محصول به علاقه‌مندی‌ها اضافه شد" : "محصول از علاقه‌مندی‌ها حذف شد");
      } else {
        console.error("به‌روزرسانی علاقه‌مندی ناموفق بود:", data);
        toast.error("به‌روزرسانی علاقه‌مندی انجام نشد");
      }
    } catch (err) {
      console.error("خطا در ارسال علاقه‌مندی:", err);
      toast.error("خطا در ارتباط با سرور");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.button
      whileTap={{ scale: 0.7 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      onClick={handleFavorite}
      className="btn border-0 position-relative p-2"
      disabled={loading}
      aria-label={liked ? "حذف از علاقه‌مندی‌ها" : "افزودن به علاقه‌مندی‌ها"}
      title={liked ? "حذف از علاقه‌مندی‌ها" : "افزودن به علاقه‌مندی‌ها"}
    >
      {/* افکت پس‌زمینه قلب */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: liked ? 1.2 : 0, opacity: liked ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        className="position-absolute top-50 start-50 translate-middle text-primary"
        style={{ zIndex: -1 }}
      >
        <Heart size={24} fill="currentColor" />
      </motion.div>

      {/* آیکون قلب */}
      <Heart
        size={24}
        className={`transition-all ${liked ? "text-primary" : "text-primary"}`}
        fill={liked ? "currentColor" : "none"}
      />
    </motion.button>
  );
};

export default FavoriteButton;
