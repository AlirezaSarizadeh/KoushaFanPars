import { FaYoutube, FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa";
import FaqOutro from "../components/FaqOutro/FaqOutro";
import "./footer.css";

// ✅ Reusable server-side function to fetch footer data
async function fetchFooterMenu(position) {
  const formData = new FormData();
  formData.append("position", position);

  const res = await fetch("https://api.kfp-dental.com/api/menu_footer", {
    method: "POST",
    body: formData,
    cache: "no-store", // prevents caching, always fresh
  });

  if (!res.ok) return [];
  return res.json();
}

// ✅ Main Footer Component (Server Side)
export default async function Footer() {
  // dynamically fetch for Footer1 & Footer2
  const [footer1, footer2] = await Promise.all([
    fetchFooterMenu("Footer1"),
    fetchFooterMenu("Footer2"),
  ]);

  return (
    <section className="mt-lg-5 mt-3 footer">
      <FaqOutro />

      <div className="row text-center text-md-start mt-lg-5 mt-4 footer-section">

        {/* ✅ Dynamic Footer1 */}
        <div className="col-md-3 mb-4 mb-md-0">
          <h5 className="fw-bold">دسترسی سریع</h5>
          <ul className="list-unstyled mt-5 footer-section-ul">
            {footer1.length > 0 ? (
              footer1.map(item => (
                <li key={item.id}>
                  <a href={item.link} className="text-dark text-decoration-none">
                    {item.title}
                  </a>
                </li>
              ))
            ) : (
              <li>در حال بارگذاری...</li>
            )}
          </ul>
        </div>

        {/* ✅ Dynamic Footer2 */}
        <div className="col-md-3 mb-4 mb-md-0">
          <h5 className="fw-bold">دسته بندی محصولات</h5>
          <ul className="list-unstyled mt-5 footer-section-ul">
            {footer2.length > 0 ? (
              footer2.map(item => (
                <li key={item.id}>
                  <a href={item.link} className="text-dark text-decoration-none">
                    {item.title}
                  </a>
                </li>
              ))
            ) : (
              <li>در حال بارگذاری...</li>
            )}
          </ul>
        </div>

        {/* ✅ Contact Info (Static) */}
        <div className="col-md-6">
          <h5 className="fw-bold">راه ارتباطی</h5>
          <div className="d-flex flex-column mt-5">
            <p>دفتر مرکزی: تهران، شهرک غرب، بلوار فرحزادی، بالاتر از بیمارستان آتیه، خیابان سپهر، پلاک ۴۵</p>
            <p>کارخانه: جاده قدیم قم، شهرک صنعتی شمس آباد، فاز ۳، بلوار سوسنستان، خیابان گل سرخ ۹</p>
            <p>سینا سنتر: جاده قدیم قم، شهرک صنعتی شمس آباد، فاز ۳، بلوار سوسنستان، خیابان گل سرخ ۹</p>
            <p>تلفن دفتر مرکزی: 021-42804 | تلفن کارخانه: 021-56232550 | تلفن سینا سنتر: 021-56232550</p>
            <p>ایمیل: <a href="mailto:info@kfp-dental.com" className="text-dark">info@kfp-dental.com</a></p>
          </div>
        </div>
      </div>

      <hr className="border-dark" />

      {/* ✅ Social Icons */}
      <div className="row align-items-center pb-3 flex-column flex-md-row">
        <div className="col">
          <div className="row text-start flex-row">
            <div className="col">
              <p className="mb-0 lead textColor company-text">
                تمامی حقوق این سایت برای شرکت کوشافن پارس محفوظ می باشد
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="row text-end">
            <div className="col">
              <FaYoutube size={30} className="mx-2 text-dark" />
              <FaLinkedin size={30} className="mx-2 text-dark" />
              <FaWhatsapp size={30} className="mx-2 text-dark" />
              <FaInstagram size={30} className="mx-2 text-dark" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
