/** @jsxImportSource @emotion/react */
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

const TypeWriter = ({ text, delay }: any) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setCurrentText(prevText => prevText + text[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, delay);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, delay, text]);

    return (
        <div data-testid="type-writer">
            <div>
                <span>{currentText}</span>
            </div>
            <Link to="contact">
                <button className="mt-20 text-2xl border border-white rounded-lg px-5 py-3 hover:bg-white hover:text-[#00d1b2]">Open Contact</button>
            </Link>
        </div>
    );
};

export default TypeWriter;