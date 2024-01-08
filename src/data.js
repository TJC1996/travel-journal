import images from "./images.js"

const data = [
    {
        title: "Lagen Island",
        location: "Philippines",
        googleMapsUrl: "https://www.google.com/maps/place/Lagen+Island/@11.0871355,119.3773528,7099m/data=!3m2!1e3!4b1!4m6!3m5!1s0x33b65636f906983d:0xda14a580c4411722!8m2!3d11.0872124!4d119.397616!16s%2Fg%2F1tgf59sk?entry=ttu",
        startDate: "23 Oct, 2018",
        endDate: "26 Oct, 2018",
        description: "Lagen Island, located in El Nido, Philippines, is renowned for its breathtaking beauty and serene environment. Known for its clear waters and vibrant marine life, it's a haven for snorkelers and divers. The island, surrounded by lush forests, is also a gateway to explore the stunning El Nido archipelago, a favorite among tourists seeking a tranquil and picturesque escape.",
        imageUrl: images.find(img => img.id === 3).src
    },
    {
        title: "Palawan",
        location: "Coron, Philippines",
        googleMapsUrl: "https://www.google.com/maps/place/Two+Seasons+Coron+Island+Resort/@11.7776639,120.1335277,1771m/data=!3m1!1e3!4m9!3m8!1s0x33b9ffe83a4e088f:0x1a34a89a314b39d4!5m2!4m1!1i2!8m2!3d11.7777148!4d120.1361955!16s%2Fg%2F11yf_s6z6?entry=ttu",
        startDate: "28 Oct, 2018",
        endDate: "1 Nov, 2018",
        description: "Coron, situated in the Palawan province of the Philippines, is famed for its crystal-clear lakes, stunning limestone cliffs, and world-class wreck diving sites. This tropical paradise, with its rich marine biodiversity, is a top destination for snorkeling and scuba diving enthusiasts. Coron's unique geological formations and the enchanting beauty of its landscapes make it a must-visit for travelers seeking a blend of adventure and serene natural scenery.",
        imageUrl: images.find(img => img.id === 1).src
    },
    {
        title: "Sunset Cliffs",
        location: "San Diego",
        googleMapsUrl: "https://www.google.com/maps/place/Sunset+Cliffs+Natural+Park/@32.7289948,-117.2827379,9591m/data=!3m1!1e3!4m15!1m8!3m7!1s0x80deabcf1ef85a99:0x84d5574e08697c16!2sSunset+Cliffs,+San+Diego,+CA+92107!3b1!8m2!3d32.725184!4d-117.2530541!16s%2Fm%2F0489zmt!3m5!1s0x80deabc34865ae03:0xea49f2d4b5e09115!8m2!3d32.715915!4d-117.2551679!16s%2Fg%2F1thxwjjl?entry=ttu",
        startDate: "29 Nov, 2023",
        endDate: "2 Dec, 2023",
        description: "Sunset Cliffs in San Diego, California, is renowned for its stunning ocean views and dramatic cliffside landscapes. This picturesque locale offers a peaceful retreat with its breathtaking sunsets and soothing ocean sounds. Popular for leisurely walks, photography, and surfing, it's a favorite spot for both locals and tourists seeking a tranquil seaside experience. The cliffs provide a unique vantage point for whale watching and are a cherished San Diego landmark.",
        imageUrl: images.find(img => img.id === 2).src
    },
]

export default data;