import React, { useState } from 'react';

const ThemeToggle = () => {
    const [darkTheme, setDarkTheme] = useState(false);

    const toggleTheme = () => {
        setDarkTheme((prev) => !prev);
    };

    return (
        <div className={darkTheme ? 'dark-theme' : 'light-theme'} style={{
            minHeight: '100vh',
            padding: '2rem',
            transition: 'background 0.3s, color 0.3s'
        }}>
            <button onClick={toggleTheme}>
                Switch to {darkTheme ? 'Light' : 'Dark'} Theme
            </button>
            <h1>{darkTheme ? 'Dark Theme' : 'Light Theme'} is Active</h1>
            <p>This is a simple theme toggler component.</p>
        </div>
    );
};

export default ThemeToggle;