'use client'
import React from "react";
import { Card, Badge } from "react-bootstrap";
import { FaMapMarkerAlt } from "react-icons/fa";
import './blogcard.css'
const BlogCard = () => {
  return (
    <Card
      style={{
        borderRadius: "15px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
        border: 'none'
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
      <Card.Body className="py-2 px-3 ">
        {/* تاریخ و مکان در یک ردیف */}
        <div className="d-flex justify-content-start align-items-center gap-lg-4 mb-2 position-relative">
          <h5 className=" mb-0 fw-light" style={{ color : '#044F97'}}>
            <FaMapMarkerAlt style={{ color : '#044F97'}} />  استان مشهد
          </h5>
          {/* ستاره‌ها */}
          <div className="pt-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <span key={index} className="text-warning fs-5">
                &#9733;
              </span>
            ))}
          </div>
          <Badge
            className="blog-card-badge"
            bg="primary"
            style={{
              fontSize: "14px",
              padding: "8px 10px",
              borderRadius: "8px"
            }}
          >
            16
            <span>
              دی
            </span>
          </Badge>
        </div>


        {/* متن توضیحات */}
        <p className="text-justify fs-6 limit-4-lines" style={{ fontSize: "14px", lineHeight: "1.6" }}>
          امروز ساختار مجموعه کوشافن پارس بر پایه تعامل با مشتریان، درک نیاز و تحقق خواسته‌های آنان است که همان
          لبخند رضایتشان دلگرمی مدیریت و پرسنل در نیل به اهداف عالی سازمان است.
          امروز ساختار مجموعه کوشافن پارس بر پایه تعامل با مشتریان، درک نیاز و تحقق خواسته‌های آنان است که همان
          لبخند رضایتشان دلگرمی مدیریت و پرسنل در نیل به اهداف عالی سازمان است.
        </p>
      </Card.Body>
    </Card>
  );
};

export default BlogCard;