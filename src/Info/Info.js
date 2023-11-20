import mock1 from "../Image/mock1.jpg"
import mock2 from "../Image/mock2.jpg"
import mock3 from "../Image/mock3.jpg"
import mock4 from "../Image/mock4.jpg"

export let colors = ["rgb(0,0,128", "rgb(255,165,0)"];


export const info = {
    firstName: "Alexis",
    lastName: "Papon",
    initials: "ap",
    position: "Développeur Web",
    selfPortrait: "",
    gradient: `-webkit-linear-gradient(90deg, ${colors})`,
    miniBio: [
        {
            emoji: '🌎',
            text: 'Situer en France'
        },
        {
            emoji: '💼',
            text: 'Formation développeur Web'
        },
        {
            emoji: '📧',
            text: 'alexispapon3@gmail.com'
        }
    ],
    socials: [
        {
            link: "https://instagram.com",
            icon: 'fa fa-instagram',
            label: 'instagram' 
        },
        {
            link: "https://github.com",
            icon: 'fa fa-github',
            label: 'github' 
        },
        {
            link: "https://linkedin.com",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
    ],

    bio: "Bonjour je suis Alexis, actuellement en formation Développeur Web chez OpenClassroom, je suis fan d'espace et d'univers fantastique.",
    skills:[
        {
            icon : "html-5.svg",
            text : "HTML 5"
        },
        {
            icon : "css-3.svg",
            text : "CSS 3"
        },
        {
            icon : "javascript.svg",
            text : "JavaScript"
        },
        {
            icon : "react.svg",
            text : "React"
        },
        {
            icon : "github-icon.svg",
            text : "GitHub"
        },
        {
            icon : "sass.svg",
            text : "SASS"
        },
        {
            icon : "java.svg",
            text : "Java"
        },
    ],
    hobbies: [
        {
            label: 'Anime',
            emoji: '💢'
        },
        {
            label: 'Lecture',
            emoji: '📖'
        },
        {
            label: 'Gaming',
            emoji: '🕹️'
        },
        {
            label: 'Voyager',
            emoji: '✈️'
        }
    ],
    portfolio: [
        {
            title : "Argent Bank",
            live: "",
            source: "https://github.com/WhiteSlimes/oc-p11",
            image: mock1
        },
        {
            title : "Portfolio Architecte",
            live: "",
            source: "https://github.com/WhiteSlimes/OpenClassroom/tree/main/Projet_6",
            image: mock2
        },
        {
            title : "Kasa",
            live: "",
            source: "https://github.com/WhiteSlimes/OC-P8",
            image: mock3
        },
        {
            title : "Booki",
            live: "",
            source: "https://github.com/WhiteSlimes/OpenClassroom/tree/main/Projet_3/Booki",
            image: mock4
        },

    ]
}