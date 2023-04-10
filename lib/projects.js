import { publicRuntimeConfig } from "@/next.config";

export const projects = [
    {
        id: '0',
        name: 'Gadgets-Store',
        image: [`${publicRuntimeConfig.PROJECTS_PATH}/Gadgets-Store.png`, `${publicRuntimeConfig.PROJECTS_PATH}/Gadgets-Store-2.png`, `${publicRuntimeConfig.PROJECTS_PATH}/Gadgets-Store-3.png`],
        description: `This is a Complete E-Commerce Solution for both Buyers and Sellers. This App has two interfaces one is for users and another is for Admin users. Regular users can log in, Register, Buy a Product, Do payments through Paypal and Review the Products as well. Admin Users can Create/Edit/Delete/Manage the Products, Users, Orders and Delivery.`,
        technologies: ['React', 'Redux', 'Bootstrap', 'NodeJs', 'Express', 'MongoDB', 'Paypal-payment', 'Cyclic'],
        demoUrl: 'https://gadgets-store.cyclic.app/',
        timeline: `Sept-2021`,
    },
    {
        id: '1',
        name: 'DashKart',
        image: [`${publicRuntimeConfig.PROJECTS_PATH}/Dashkart.png`, `${publicRuntimeConfig.PROJECTS_PATH}/Dashkart-2.png`, `${publicRuntimeConfig.PROJECTS_PATH}/Dashkart-3.png`],
        description: `DashKart is a comprehensive web-based dashboard app that offers a wide range of charts and graphs to help you effectively present and analyze your organization's data on dashboard. This web-app contains charts, tables, pie-charts, geo-charts, line-graphs and many other charts to show the sales and management data effectively.`,
        technologies: ['React', 'NodeJs', 'MongoDB', 'Material-UI', 'Redux', 'Redux-toolkit', 'RTK-Query', 'Nivo-charts', 'Cyclic', 'Netlify'],
        demoUrl: 'https://dashkart.netlify.app/',
        timeline: `March-2023`,
    },
    {
        id: '2',
        name: 'Our-Style',
        image: [`${publicRuntimeConfig.PROJECTS_PATH}/Our-Style.png`, `${publicRuntimeConfig.PROJECTS_PATH}/Our-Style-2.png`, `${publicRuntimeConfig.PROJECTS_PATH}/Our-Style-3.png`], 
        description: `The application is a Progressive Web Application that can be downloaded on desktop, mobile, and web just like a native application. Users can purchase the latest fashion clothing, jackets, shoes, and other accessories. The frontend is developed using React, React-Redux, and Redux-saga, while Firebase is used for authentication and Firestore for the database in the backend. Stripe Payment API is used for payment purposes, and the application is hosted on Heroku.`,
        technologies: ['React', 'React-Router', 'React-Hooks', 'Firebase', 'Stripe-API', 'Progressive-web-application(PWA)', 'Heroku'],
        demoUrl: 'https://our-style-live.herokuapp.com/',
        timeline: `August-2021`,
    },
    {
        id: '3',
        name: 'Color-Factory',
        image: [`${publicRuntimeConfig.PROJECTS_PATH}/Color-Factory.png`, `${publicRuntimeConfig.PROJECTS_PATH}/Color-Factory-2.png`, `${publicRuntimeConfig.PROJECTS_PATH}/Color-Factory-3.png`],
        description: `The application is designed for designers to explore and get inspirations for color palettes. It is a frontend application entirely built in React, using various technologies such as React-Router, React-Form, React-Drag and Drop, and Material UI, to create a dynamic and interactive web experience.`,
        technologies: ['React', 'React-Router', 'React-Form', 'Material-UI', 'React-Drag and Drop'],
        demoUrl: 'https://react-color-factory-lyq3jn0yl-shrinker03.vercel.app/',
        timeline: `July-2021`,
    },
]

export function getAllProjectsIds() {
    return projects.map((project) => {
        return {
            params: {
                id: project.name,
            }
        }
    })
}

export function getProjectData(name) {
    return projects.find((project) => project.name === name);
}