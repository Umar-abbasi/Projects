document.addEventListener('DOMContentLoaded', function() {
    const quizzes = {
        "UI/UX Design Quiz": {
            correctAnswers: [
                "User Interface",
                "User satisfaction and usability",
                "All of the above",
                "A low-fidelity, skeletal layout of a design",
                "Figma",
                "Design that adapts to different screen sizes",
                "To create a fictional user to guide design decisions",
                "Navigation bar",
                "Testing two versions of a design to see which performs better",
                "To evaluate how easy and intuitive a product is to use"
            ]
        },
        "Web Development Quiz": {
            correctAnswers: [
                "HyperText Markup Language",
                "<h1>",
                "Adding style",
                "HTML",
                "<link rel='stylesheet' href='style.css'>",
                "Document Object Model",
                "background-color",
                "<a>",
                "getElementById()",
                "Adds space outside an element"
            ]
        },
        "Software Engineering Quiz":{
            correctAnswers: [
                "To produce high-quality software",
                "To find and fix bugs",
                "Iterative development and collaboration",
                "Improving code without changing its behavior",
                "Regularly integrating code changes into a shared repository",
                "Tracking and managing changes to code",
                "Combining development and operations to improve collaboration and efficiency",
                "Waterfall model",
                "Writing tests before writing the code",
                "Reusable solutions to common problems in software design"
            ]
        },
        "Game Development Quiz":{
            correctAnswers: [
                "C#",
                "To render graphics and simulate physics",
                "Unity",
                "Non-Playable Character",
                "Maya",
                "Frames Per Second",
                "JavaScript",
                "A small 2D image or animation",
                "To check if two objects overlap or interact",
                "A sequence of actions that repeats continually during gameplay"
            ]
        },
        "DBMS Quiz":{
            correctAnswers: [
                "Database Management System",
                "SELECT",
                "A unique identifier for each record",
                "The process of reducing data redundancy",
                "Structured Query Language",
                "A key used to create relationships between tables",
                "A data structure that improves query performance",
                "Combining rows from two or more tables based on a related column",
                "A virtual table based on the result of a query",
                "A set of properties ensuring reliable transactions"
            ]
        },
        "DataScience Quiz":{
            correctAnswers: [
                "Artificial Intelligence",
                "Linear Regression",
                "Testing machine intelligence",
                "Weak AI",
                "Natural Language Processing",
                "Reinforcement Learning",
                "TensorFlow",
                "To create intelligent agents",
                "The human brain",
                "Voice assistants like Siri and Alexa"
            ]
        },
        "Cybersecurity Quiz":{
            correctAnswers: [
                "Confidentiality, Integrity, Availability",
                "Blocking unauthorized access",
                "Phishing",
                "An unknown vulnerability",
                "Secure Socket Layer",
                "Worm",
                "Converting data into a secret code",
                "HTTPS",
                "To create a secure connection over a public network",
                "DoS attack"
            ]
        },
        "Networking Quiz":{
            correctAnswers: [
                "Local Area Network",
                "To forward data packets between networks",
                "DHCP",
                "Network Layer",
                "Transmission Control Protocol",
                "Switch",
                "To translate domain names to IP addresses",
                "A unique identifier for a network interface card",
                "Wide Area Network",
                "To divide an IP address into network and host portions"
            ]
        },
        "Android Development Quiz":{
            correctAnswers: [
                "Java",
                "activity_main.xml",
                "Android Package Kit",
                "onCreate()",
                "To declare app permissions and components",
                "RecyclerView",
                "To manage dependencies and build the project",
                "Service",
                "Displays log messages for debugging",
                "All of the above"
            ]
        },
        "AI Quiz":{
            correctAnswers: [
                "Artificial Intelligence",
                "Linear Regression",
                "Testing machine intelligence",
                "Weak AI",
                "Natural Language Processing",
                "Reinforcement Learning",
                "TensorFlow",
                "To create intelligent agents",
                "The human brain",
                "Voice assistants like Siri and Alexa"
            ]
        },
        "Psychology Quiz":{
            correctAnswers: [
                "Wilhelm Wundt",
                "Mental processes such as memory and problem-solving",
                "Psychoanalytic psychology",
                "A pyramid describing levels of human needs",
                "The growth and change that occurs throughout a person's lifespan",
                "Ivan Pavlov",
                "False consensus effect",
                "Diagnostic and Statistical Manual of Mental Disorders, 5th Edition",
                "An irrational and intense fear of an object or situation",
                "B.F. Skinner"
            ]
        }
    };


    function getQuizType() {
        const pageTitle = document.title;
        return pageTitle;
    }

    const quizType = getQuizType();
    if (quizType && quizzes[quizType]) {
        document.getElementById('quizForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const correctAnswers = quizzes[quizType].correctAnswers;

            let score = 0;
            const form = document.getElementById('quizForm');
            correctAnswers.forEach((answer, index) => {
                const selected = form.querySelector(`input[name="q${index + 1}"]:checked`);
                if (selected && selected.value === answer) {
                    score++;
                }
            });

            const percentage = (score / correctAnswers.length) * 100;
            let suggestion;

            if (percentage >= 70) {
                suggestion = `Great job! You have a strong foundation in ${quizType}.`;
            } else if (percentage >= 50) {
                suggestion = `Good attempt! Consider improving your skills in ${quizType}.`;
            } else {
                suggestion = `Keep learning! Explore more resources on ${quizType}.`;
            }

            document.getElementById('score').textContent = `${score}/10`;
            document.getElementById('suggestion').textContent = suggestion;
            document.getElementById('result').style.display = "block";

            // Show career counseling option if score is below 70%
            if (percentage < 70) {
                document.getElementById('career-counseling').classList.remove('hidden');
            }
        });
    }
});
