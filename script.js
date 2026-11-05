/* GENERAL SETTINGS */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    background: linear-gradient(135deg, #05051c, #101044, #190d3d);
    color: white;
    line-height: 1.6;
}


/* NAVIGATION BAR */
nav {
    width: 100%;
    padding: 20px 7%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(5, 5, 30, 0.95);
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: 0 3px 15px rgba(0, 0, 0, 0.4);
}

nav h2 {
    color: #8f8aff;
    font-size: 25px;
    letter-spacing: 2px;
}

nav ul {
    display: flex;
    list-style: none;
    gap: 30px;
}

nav ul li a {
    color: white;
    text-decoration: none;
    font-size: 16px;
    transition: 0.3s;
}

nav ul li a:hover {
    color: #a9a3ff;
}


/* HOME SECTION */
.hero {
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 50px 20px;
    background:
        radial-gradient(circle at center, rgba(91, 75, 190, 0.25), transparent 60%);
}

.hero h1 {
    font-size: 55px;
    color: #aaa5ff;
    margin-bottom: 15px;
    text-shadow: 0 0 20px rgba(137, 125, 255, 0.6);
}

.hero h2 {
    font-size: 30px;
    margin-bottom: 20px;
}

.hero p {
    max-width: 650px;
    font-size: 18px;
    color: #d2d2e8;
    margin-bottom: 30px;
}


/* BUTTON DESIGN */
button {
    padding: 13px 28px;
    background: linear-gradient(135deg, #665cff, #a34dff);
    color: white;
    border: none;
    border-radius: 30px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
    box-shadow: 0 0 15px rgba(124, 91, 255, 0.35);
}

button:hover {
    transform: translateY(-3px);
    box-shadow: 0 0 25px rgba(163, 77, 255, 0.7);
}


/* COMMON SECTION DESIGN */
section {
    padding: 80px 8%;
    text-align: center;
}

section h1 {
    font-size: 36px;
    color: #aaa5ff;
    margin-bottom: 15px;
}

section > p {
    color: #d0d0e8;
    font-size: 17px;
    margin-bottom: 35px;
}


/* CARD DESIGN */
.card {
    display: inline-block;
    width: 300px;
    min-height: 230px;
    padding: 30px 22px;
    margin: 15px;
    vertical-align: top;
    text-align: center;
    background: rgba(255, 255, 255, 0.07);
    border: 1px solid rgba(160, 145, 255, 0.3);
    border-radius: 18px;
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.25);
    transition: 0.3s;
}

.card:hover {
    transform: translateY(-8px);
    border-color: #a49aff;
    box-shadow: 0 10px 30px rgba(110, 91, 255, 0.25);
}

.card h2 {
    color: #c0baff;
    font-size: 22px;
    margin-bottom: 15px;
}

.card p {
    color: #d0d0e8;
    font-size: 15px;
    margin-bottom: 20px;
}


/* TRAINING SECTION */
#training {
    background: rgba(255, 255, 255, 0.02);
}


/* MISSIONS SECTION */
#missions {
    background: rgba(20, 15, 65, 0.35);
}


/* QUIZ SECTION */
#quiz {
    background: rgba(255, 255, 255, 0.02);
}

#quiz-container {
    max-width: 600px;
    margin: 25px auto;
    padding: 30px;
    text-align: center;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(160, 145, 255, 0.3);
    border-radius: 18px;
}

#quiz-container h2 {
    color: #aaa5ff;
    margin-bottom: 20px;
}

#quiz-container h3 {
    margin-bottom: 20px;
    font-size: 20px;
}

#quiz-container button {
    display: block;
    width: 100%;
    margin: 12px auto;
    padding: 14px;
    border-radius: 10px;
}


/* FOOTER */
footer {
    text-align: center;
    padding: 30px 15px;
    background: #050515;
    border-top: 1px solid rgba(160, 145, 255, 0.2);
}

footer h3 {
    color: #aaa5ff;
    margin-bottom: 10px;
}

footer p {
    color: #c5c5dc;
    font-size: 14px;
    margin: 5px;
}


/* MOBILE RESPONSIVE DESIGN */
@media screen and (max-width: 768px) {

    nav {
        flex-direction: column;
        gap: 15px;
    }

    nav ul {
        flex-wrap: wrap;
        justify-content: center;
        gap: 15px;
    }

    nav h2 {
        font-size: 22px;
    }

    .hero h1 {
        font-size: 36px;
    }

    .hero h2 {
        font-size: 23px;
    }

    .hero p {
        font-size: 16px;
    }

    section {
        padding: 55px 15px;
    }

    section h1 {
        font-size: 28px;
    }

    .card {
        width: 100%;
        max-width: 350px;
        margin: 12px auto;
        display: block;
    }

    #quiz-container {
        padding: 20px;
    }
}
