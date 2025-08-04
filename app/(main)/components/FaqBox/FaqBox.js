'use client'
import { useState, useMemo } from 'react';
import { Nav, Form, InputGroup, Accordion } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './faqBox.css';

export default function FaqBox({ data }) {
  const [activeTab, setActiveTab] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // ✅ Transform API response into tabs and faqData
  const { tabs, faqData } = useMemo(() => {
    const categories = Object.keys(data || {});
    const transformedFaqData = {};
    const tabsArr = categories.map((cat, index) => {
      transformedFaqData[cat] = data[cat].map(item => ({
        question: item.title,
        answer: item.desc
      }));
      return { eventKey: cat, title: cat };
    });
    return { tabs: tabsArr, faqData: transformedFaqData };
  }, [data]);

  // ✅ Set default active tab to the first category
  if (!activeTab && tabs.length) setActiveTab(tabs[0].eventKey);

  const filteredFaqs = faqData[activeTab]?.filter(item =>
    item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="faq-container">
      <div className="tabs-search-container">
        {/* ✅ Dynamic Tabs */}
        <Nav variant="tabs" activeKey={activeTab} onSelect={(k) => setActiveTab(k)} className="mb-lg-3 faq-tab-titles">
          <Swiper spaceBetween={10} slidesPerView="auto">
            {tabs.map(tab => (
              <SwiperSlide key={tab.eventKey} style={{ width: 'auto' }}>
                <Nav.Item>
                  <Nav.Link eventKey={tab.eventKey} className="px-3 text-nowrap">
                    {tab.title}
                  </Nav.Link>
                </Nav.Item>
              </SwiperSlide>
            ))}
          </Swiper>
        </Nav>

        {/* ✅ Search */}
        <div className="search-input-container">
          <InputGroup className='faq-search-form'>
            <Form.Control
              placeholder="عنوان مدنظر خود را جستجو کنید"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className='border-0'
            />
            <InputGroup.Text className='border-0 bg-transparent'>
              <FaSearch className='textColor fw-light' />
            </InputGroup.Text>
          </InputGroup>
        </div>
      </div>

      {/* ✅ Accordion Content */}
      <div className="tab-content p-3 border-top-0 border faq-tab-content">
        <div className='row align-items-center justify-content-start row-cols-2 p-lg-5 p-3' style={{ background: '#2d98e7', borderRadius: '15px' }}>
          <span className='fs-3 w-100 text-light fw-bolder mb-lg-5 mb-3'>
            {activeTab}
          </span>

          {filteredFaqs?.length > 0 ? (
            filteredFaqs.map((item, index) => (
              <div className='p-2 faq-acc-item' key={index}>
                <Accordion alwaysOpen>
                  <Accordion.Item eventKey={index.toString()}>
                    <Accordion.Header>{item.question}</Accordion.Header>
                    <Accordion.Body>{item.answer}</Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            ))
          ) : (
            <p className="text-muted">هیچ موردی یافت نشد.</p>
          )}
        </div>
      </div>
    </div>
  );
}
