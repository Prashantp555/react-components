import React, { useState } from 'react';

const Accordion = ({ items }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleClick = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="accordion">
            {items && items.map((item, index) => (
                <div key={index} className="accordion-item">
                    <button
                        className="accordion-title"
                        onClick={() => handleClick(index)}
                        aria-expanded={openIndex === index}
                    >
                        {item.title}
                    </button>
                    {openIndex === index && (
                        <div className="accordion-content">
                            {item.content}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Accordion;