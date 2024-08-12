import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
    // Function to generate a random quote
    getRandomQuote() {
        const quotes = [
            "The food you eat can be either the safest and most powerful form of medicine or the slowest form of poison. - Ann Wigmore",
            "Health requires healthy food. - Roger Williams",
            "Your diet is a bank account. Good food choices are good investments. - Bethenny Frankel",
            "To eat is a necessity, but to eat intelligently is an art. - François de la Rochefoucauld",
            "The greatest wealth is health. - Virgil"
        ];
        const randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
    }

    render() {
        const year = new Date().getFullYear();
        return (
            <footer className="footer" style={{ backgroundColor: '#f5f5f5', boxShadow: '0px -5px 5px 0px rgba(0,0,0,0.2)', padding: '20px' }}>
                <div className="container mx-auto">
                    <div className="footer-quote text-center text-bold font-weight-bold">
                        <h1>{this.getRandomQuote()}</h1>
                    </div>
                    <div className="text-center">
                        <a href="/info"><p>&copy; {year}. All rights reserved.</p></a>
                    </div>

                </div>
            </footer>
        );
    }
}

export default Footer;
