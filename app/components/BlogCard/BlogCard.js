'use client'
import React from "react";
import { Card, Badge } from "react-bootstrap";
import { FaMapMarkerAlt } from "react-icons/fa";

const BlogCard = () => {
  return (
    <Card
      style={{
        borderRadius: "15px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        overflow: "hidden"
      }}
    >
      {/* تصویر بالای کارت */}
      <Card.Img
        variant="top"
        src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ2sazr-jLvOzav56Bf4ZeyklnlTM32UX8vtPXaN6ghODe-uNVrli6x3klYT4Rf1aX0B0K-GV_1_wdzTpsiT_FUMTizyvd7ciVoIoio1g"
        alt="Card Image"
        style={{
          objectFit: "cover",
          maxHeight: "200px",
          width: "100%"
        }}
      />

      {/* محتوای کارت */}
      <Card.Body>
        {/* تاریخ و مکان در یک ردیف */}
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h5 className="text-primary mb-0">
           <FaMapMarkerAlt />  استان مشهد 
          </h5>
          <Badge
            bg="primary"
            style={{
              fontSize: "14px",
              padding: "8px 10px",
              borderRadius: "8px"
            }}
          >
            16 دی
          </Badge>
        </div>

        {/* ستاره‌ها */}
        <div className="mb-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <span key={index} className="text-warning fs-5">
              &#9733;
            </span>
          ))}
        </div>

        {/* متن توضیحات */}
        <p className="text-muted" style={{ fontSize: "14px", lineHeight: "1.6" }}>
          امروز ساختار مجموعه کوشافن پارس بر پایه تعامل با مشتریان، درک نیاز و تحقق خواسته‌های آنان است که همان
          لبخند رضایتشان دلگرمی مدیریت و پرسنل در نیل به اهداف عالی سازمان است.
        </p>
      </Card.Body>
    </Card>
  );
};

export default BlogCard;