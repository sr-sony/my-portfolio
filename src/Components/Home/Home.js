import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import Hero from '../Hero/Hero';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Projects></Projects>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Home;