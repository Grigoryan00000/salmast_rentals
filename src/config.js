import sedan from "./assets/home/home-cars/home-cars-list/sedan-red 1.svg"
import wagon from "./assets/home/home-cars/home-cars-list/wagon-red 1.png"
import coup from "./assets/home/home-cars/home-cars-list/coup-red 1.png"
import convertible from "./assets/home/home-cars/home-cars-list/convertible-red 1.png"
import mpv from "./assets/home/home-cars/home-cars-list/mpv-red 1.png"
import bus from "./assets/home/home-cars/home-cars-list/bus.png"
import kia from "./assets/home/home-banner/kia.png"
import nissan from "./assets/home/home-banner/nissan.png"
import toyota from "./assets/home/home-banner/toyota.png"

export const CONFIG = {
    
    // Header

    headerConfig:[
        {
            id: 1,
            title: "Մեր մասին",
        },
        {
            id: 2,
            title: "Մեքենաներ",
        },
        {
            id: 3,
            title: "Գործընկերներ",
        },
        {
            id: 4,
            title: "Կապ",
        },
    ],

    // home-cars

    homeCars:[
        {
            id: 1,
            img: sedan,
            text: "Սեդան",
        },
        {
            id: 2,
            img: wagon,
            text: "Ամենագնաց",
        },
        {
            id: 3,
            img: coup,
            text: "Կուպե",
        },
        {
            id: 4,
            img: convertible,
            text: "Կաբրիոլետ",
        },
        {
            id: 5,
            img: mpv,
            text: "Մինիվեն",
        },
        {
            id: 6,
            img: bus,
            text: "Ավտոբուս",
        },
    ],

    homeCarsPopupSpecification: [
        {
            id: 1,
            text: "Gear box",
            desc: "Auto",
        },
        {
            id: 2,
            text: "Engine",
            desc: "1.6 — 1.7 l",
        },
        {
            id: 3,
            text: "Year of manufacture",
            desc: "2016 — 2018",
        },
        {
            id: 4,
            text: "Air Conditioning",
            desc: "1-zone climate control",
        },
        {
            id: 5,
            text: "Number of seats",
            desc: "4",
        },
        {
            id: 6,
            text: "Roof",
            desc: "Standard",
        },
    ],

    homeCarsPopupInsurance: [
        {
            id: 1,
            text: "Driver’s age",
            desc: "20 — 65 years",
        },
        {
            id: 2,
            text: "Minimum driving experience",
            desc: "1 year",
        },
        {
            id: 3,
            text: "Mileage limit",
            desc: "No",
        },
    ],
    
    homecarsPopupRent:[
        {
            text: "Rent for 14 days",
            desc: "250$"
        }
    ],

    homecarsPopupDelivery:[
        {
            id: 1,
            text: "Delivery",
            desc: "40$"
        },
        {
            id: 2,
            text: "At pick-up",
            desc: "20$"
        },
        {
            id: 3,
            text: "At drop-off",
            desc: "20$"
        },
    ],

    homecarsPopupOther:[
        {
            id: 1,
            text: "Delivery",
            desc: "40$"
        },
        {
            id: 2,
            text: "At pick-up",
            desc: "20$"
        },
    ],





    homeSlider:[
        {
            id:1,
            title: "SALMAST RENTALS",
            titleColor: "-webkit-linear-gradient(180deg, #E2E2E2 -19.44%, #2C2C2C 100%)",
            img: kia,
            bgColor: "linear-gradient(180deg, #C8CCCE 0%, #929395 100%)",
        },
        {
            id:2,
            title: "SALMAST RENTALS",
            titleColor: "linear-gradient(356.24deg, #3C6397 25.9%, #85A5DB 96.3%)",

            img: nissan,
            bgColor: "linear-gradient(180deg, #B3C2DC 0%, #7596D2 100%)"
        },
        {
            id:3,
            title: "SALMAST RENTALS",
            titleColor: "linear-gradient(356.24deg, #917B00 25.9%, #EACE3F 96.3%)",
            img: toyota,
            bgColor: "linear-gradient(180deg, #FFF6D3 0%, #D8CA7D 100%)",
        }
    ],
        
}


