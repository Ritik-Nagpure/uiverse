import kiracar from '../../assets/allpics/kiracar.jpg'
import astrobit from '../../assets/allpics/astrobit.jpg'
import codegears from '../../assets/allpics/codegears.png'
import habla from '../../assets/allpics/habla.webp'

export type project_data = {
    title: string;  
    desc: string;
    link: string;     
    img: string;
}

export const projectDetails : project_data[] = [
    {
        title: "Kiracar",
        desc: "Rental Service Site offers a user-friendly platform for self drive cars for rent. With an extensive catalog, transparent pricing, and a convenient booking system, users can easily find, reserve, and deploy equipment tailored to their project needs. Backed by responsive customer support and detailed information, the site aims to simplify the rental process and enhance the efficiency of construction and industrial projects.",
        link: "/uiverse/Kiracar",
        img : kiracar,
    },
    {
        title: "AstroBit",
        desc: "Astrobit provides a secure and user-friendly platform for managing digital assets. With robust security features and an intuitive interface, users can easily store, send, and receive various cryptocurrencies. Simplifying the complexities of crypto management, the site prioritizes both security and user experience for seamless transactions.",
        link: "/uiverse/Astrobit",
        img : astrobit
    },
    {
        title: "CodeGears",
        desc: "The CodeGears is a Team Collaboration platform caters specifically to small teams, offering a streamlined solution for efficient collaboration. With user-friendly features like task management and progress tracking, it enhances team productivity. This tool prioritizes simplicity and essential functionalities to empower small teams in achieving their goals.",
        link: "/uiverse/Codegears",
        img : codegears
    },
    {
        title: "Habla",
        desc: "Habla, a secure chat application, empowers users to create private group chats with ease. Offering a robust platform for secure communication, it prioritizes user privacy in group discussions. With Habla, users can confidently connect and collaborate within a protected and private chat environment.",
        link: "/uiverse/Habla",
        img : habla
    },

]
