'use client'
import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './faqBox.css';
import { FaSearch } from 'react-icons/fa';
import Accordion from 'react-bootstrap/Accordion';

function FaqBox() {
  const [activeTab, setActiveTab] = useState("profile");
  const [searchQuery, setSearchQuery] = useState("");

  // 👇 Example data structured per tab
  const faqData = {
    home: [
      { question: "سوال عمومی اول", answer: "پاسخ مربوط به سوال عمومی اول" },
      { question: "سوال عمومی دوم", answer: "پاسخ مربوط به سوال عمومی دوم" }
    ],
    profile: [
      { question: "سوال دندانپزشکی اول", answer: "پاسخ مربوط به دندانپزشکی" },
      { question: "سوال دندانپزشکی دوم", answer: "توضیح درباره درمان‌های دندانپزشکی" }
    ],
    "longer-tab": [
      { question: "سوال دندانسازی اول", answer: "پاسخ دندانسازی" },
      { question: "سوال دندانسازی دوم", answer: "اطلاعات درباره پروتز دندان" }
    ],
    tab4: [
      { question: "سوال تب ۴ اول", answer: "پاسخ تب چهارم" },
    ],
    tab5: [],
    tab6: []
  };

  const tabs = [
    { eventKey: "home", title: "عمومی" },
    { eventKey: "profile", title: "دندانپزشکی" },
    { eventKey: "longer-tab", title: "دندانسازی" },
    { eventKey: "tab4", title: "تب چهارم" },
    { eventKey: "tab5", title: "تب پنجم" },
    { eventKey: "tab6", title: "تب ششم" }
  ];

  // 🔍 Filter Accordion items based on search query
  const filteredFaqs = faqData[activeTab]?.filter(item =>
    item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="faq-container">
      <div className="tabs-search-container">
        {/* Tabs */}
        {/* <div className="scrollable-tabs-container">
          <Tabs
            activeKey={activeTab}
            onSelect={(k) => setActiveTab(k)}
            id="scrollable-tabs"
            className="mb-0 scrollable-tabs"
          >
            {tabs.map((tab) => (
              <Tab 
                key={tab.eventKey} 
                eventKey={tab.eventKey} 
                title={tab.title} 
                className="single-tab"
              />
            ))}
          </Tabs>
        </div> */}

<Tabs
    activeKey={activeTab}
    onSelect={(k) => setActiveTab(k)}
    id="scrollable-tabs"
    className="scrollable-tabs"
  >
    {tabs.map((tab) => (
      <Tab key={tab.eventKey} eventKey={tab.eventKey} title={tab.title} />
    ))}
  </Tabs>

        {/* Search input */}
        <div className="search-input-container">
          <InputGroup className='faq-search-form'>
            <Form.Control
              placeholder="عنوان مدنظر خود را جستجو کنید"
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className='border-0'
            />
            <InputGroup.Text className='border-0 bg-transparent'>
              <FaSearch className='textColor fw-light'/>
            </InputGroup.Text>
          </InputGroup>
        </div>
      </div>

      {/* Accordion content */}
      <div className="tab-content p-3 border-top-0 border">
        {filteredFaqs?.length > 0 ? (
          <Accordion defaultActiveKey="0">
            {filteredFaqs.map((item, index) => (
              <Accordion.Item eventKey={index.toString()} key={index}>
                <Accordion.Header>{item.question}</Accordion.Header>
                <Accordion.Body>{item.answer}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        ) : (
          <p className="text-muted">هیچ موردی یافت نشد.</p>
        )}
      </div>
    </div>
  );
}

export default FaqBox;
