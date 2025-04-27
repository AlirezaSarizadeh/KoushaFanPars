'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const Chrono = dynamic(() => import('react-chrono').then(mod => mod.Chrono), {
  ssr: false
});

export default function Timeline() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems([
      {
        title: "فروردین 1403",
        cardTitle: "شروع پروژه",
        cardSubtitle: "ایده‌پردازی",
        cardDetailedText: "بررسی اولیه تیم",
        media: {
          type: "IMAGE",
          source: {
            url: "https://via.placeholder.com/300x200.png?text=شروع+پروژه"
          }
        }
      },
      {
        title: "خرداد 1403",
        cardTitle: "طراحی اولیه",
        cardSubtitle: "وایرفریم",
        cardDetailedText: "طراحی صفحات اولیه",
        media: {
          type: "IMAGE",
          source: {
            url: "https://via.placeholder.com/300x200.png?text=طراحی+اولیه"
          }
        }
      },
      {
        title: "مرداد 1403",
        cardTitle: "توسعه",
        cardSubtitle: "کدنویسی",
        cardDetailedText: "شروع فرانت‌اند و بک‌اند",
        media: {
          type: "IMAGE",
          source: {
            url: "https://via.placeholder.com/300x200.png?text=توسعه"
          }
        }
      },
      {
        title: "آبان 1403",
        cardTitle: "لانچ",
        cardSubtitle: "عرضه محصول",
        cardDetailedText: "محصول نهایی آماده شد",
        media: {
          type: "IMAGE",
          source: {
            url: "https://via.placeholder.com/300x200.png?text=لانچ"
          }
        }
      }
    ]);
  }, []);

  if (items.length === 0) return null; // هنوز آیتم‌ها نیومدن، چیزی نشون نده

  return (
    <div dir="rtl" style={{ direction: 'rtl' }}>
      <div style={{
        transform: 'scaleX(-1)',
        backgroundColor: "#c5effd",
        padding: "20px",
        borderRadius: "16px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
      }}>
        <Chrono
          items={items}
          mode="horizontal"
          slideShow
          allowDynamicUpdate
          cardHeight={250}
          theme={{
            primary: "#0077b6",
            secondary: "#48cae4",
            cardBgColor: "#ffffff",
            cardForeColor: "#000000",
            titleColor: "#0077b6",
          }}
          fontSizes={{
            cardSubtitle: "1rem",
            cardText: "0.9rem",
            title: "1.2rem"
          }}
          scrollable={{ scrollbar: true }}
          mediaSettings={{ align: 'center', fit: 'cover' }}
        />
      </div>
    </div>
  );
}
