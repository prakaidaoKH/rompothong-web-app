import React from "react";
import '../css/Home.css';

function Home() {
    return (
        <div className="Home">
            <header className="Home-header">
                <h1>Welcome to Rom Pho Thong Resort</h1>
                <p>This is the homepage pf my first React web app.</p>
            </header>
            <section>
                <h2>About</h2>
                <p>This web application is create using React.js</p>
            </section>
            <footer>
                <p>@ 2025 Rom Po Thong Resort. All rights reserved,</p>
            </footer>
        </div>
    );
}

export default Home;