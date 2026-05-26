const sampleListings = [
    {
        title: "Cozy Beachfront Cottage",
        description:
            "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 1500,
        location: "Malibu",
        country: "United States",
    },
    {
        title: "Modern Loft in Downtown",
        description:
            "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 1200,
        location: "New York City",
        country: "United States",
    },
    {
        title: "Mountain Retreat",
        description:
            "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        price: 1000,
        location: "Aspen",
        country: "United States",
    },
    {
        title: "Historic Villa in Tuscany",
        description:
            "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        price: 2500,
        location: "Florence",
        country: "Italy",
    },
    {
        title: "Secluded Treehouse Getaway",
        description:
            "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 800,
        location: "Portland",
        country: "United States",
    },
    {
        title: "Beachfront Paradise",
        description:
            "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 2000,
        location: "Cancun",
        country: "Mexico",
    },
    {
        title: "Rustic Cabin by the Lake",
        description:
            "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        price: 900,
        location: "Lake Tahoe",
        country: "United States",
    },
    {
        title: "Luxury Penthouse with City Views",
        description:
            "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 3500,
        location: "Los Angeles",
        country: "United States",
    },
    {
        title: "Ski-In/Ski-Out Chalet",
        description:
            "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        price: 3000,
        location: "Verbier",
        country: "Switzerland",
    },
    {
        title: "Safari Lodge in the Serengeti",
        description:
            "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        price: 4000,
        location: "Serengeti National Park",
        country: "Tanzania",
    },
    {
        title: "Historic Canal House",
        description:
            "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 1800,
        location: "Amsterdam",
        country: "Netherlands",
    },
    {
        title: "Private Island Retreat",
        description:
            "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 10000,
        location: "Fiji",
        country: "Fiji",
    },
    {
        title: "Charming Cottage in the Cotswolds",
        description:
            "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 1200,
        location: "Cotswolds",
        country: "United Kingdom",
    },
    {
        title: "Historic Brownstone in Boston",
        description:
            "Step back in time in this elegant historic brownstone located in the heart of Boston.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        price: 2200,
        location: "Boston",
        country: "United States",
    },
    {
        title: "Beachfront Bungalow in Bali",
        description:
            "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 1800,
        location: "Bali",
        country: "Indonesia",
    },
    {
        title: "Mountain View Cabin in Banff",
        description:
            "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        price: 1500,
        location: "Banff",
        country: "Canada",
    },
    {
        title: "Art Deco Apartment in Miami",
        description:
            "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
        image: {
            filename: "listingimage",
            url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        price: 1600,
        location: "Miami",
        country: "United States",
    },
    {
        title: "Tropical Villa in Phuket",
        description:
            "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        price: 3000,
        location: "Phuket",
        country: "Thailand",
    },
    {
        title: "Historic Castle in Scotland",
        description:
            "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 4000,
        location: "Scottish Highlands",
        country: "United Kingdom",
    },
    {
        title: "Desert Oasis in Dubai",
        description:
            "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 5000,
        location: "Dubai",
        country: "United Arab Emirates",
    },
    {
        title: "Rustic Log Cabin in Montana",
        description:
            "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        price: 1100,
        location: "Montana",
        country: "United States",
    },
    {
        title: "Beachfront Villa in Greece",
        description:
            "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 2500,
        location: "Mykonos",
        country: "Greece",
    },
    {
        title: "Eco-Friendly Treehouse Retreat",
        description:
            "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 750,
        location: "Costa Rica",
        country: "Costa Rica",
    },
    {
        title: "Historic Cottage in Charleston",
        description:
            "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        price: 1600,
        location: "Charleston",
        country: "United States",
    },
    {
        title: "Modern Apartment in Tokyo",
        description:
            "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        price: 2000,
        location: "Tokyo",
        country: "Japan",
    },
    {
        title: "Lakefront Cabin in New Hampshire",
        description:
            "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 1200,
        location: "New Hampshire",
        country: "United States",
    },
    {
        title: "Luxury Villa in the Maldives",
        description:
            "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 6000,
        location: "Maldives",
        country: "Maldives",
    },
    {
        title: "Ski Chalet in Aspen",
        description:
            "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 4000,
        location: "Aspen",
        country: "United States",
    },
    {
        title: "Secluded Beach House in Costa Rica",
        description:
            "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 1800,
        location: "Costa Rica",
        country: "Costa Rica",
    },
    {
        title: "Portuguese Heritage Villa",
        description: "Immerse yourself in history in this 150-year-old restored Portuguese villa with a private courtyard pool. Located a short walk from Anjuna Beach.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=60"
        },
        price: 8500,
        location: "Anjuna, Goa",
        country: "India"
    },
    {
        title: "Snow-View Wooden Chalet",
        description: "Unwind in this premium cedar log chalet with glowing stone fireplace and magnificent views of the snow-peaked Solang Valley mountains.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=60"
        },
        price: 6200,
        location: "Manali, Himachal Pradesh",
        country: "India"
    },
    {
        title: "Royal Lake Palace Suite",
        description: "Experience the ultimate royalty of Udaipur. Overlooking Lake Pichola, this hand-painted luxurious suite features marble carvings and heritage vibes.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60"
        },
        price: 14500,
        location: "Udaipur, Rajasthan",
        country: "India"
    },
    {
        title: "Luxury Kerala Backwater Houseboat",
        description: "Cruise the tranquil backwaters of Vembanad Lake in a traditional thatched-roof luxury houseboat. Includes onboard chef serving authentic Malabar cuisine.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=60"
        },
        price: 11000,
        location: "Alleppey, Kerala",
        country: "India"
    },
    {
        title: "Floating Dal Lake Houseboat",
        description: "Stay in a beautifully carved cedar wood Kashmiri houseboat on Dal Lake. Enjoy shikara rides, mountain silhouettes, and morning flower markets.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60"
        },
        price: 5800,
        location: "Srinagar, Jammu & Kashmir",
        country: "India"
    },
    {
        title: "Coffee Estate Heritage Bungalow",
        description: "Immerse yourself in lush coffee plantations inside this colonial-era planter's bungalow. Features high ceilings, wooden swings, and misty mornings.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=60"
        },
        price: 7500,
        location: "Madikeri, Coorg, Karnataka",
        country: "India"
    },
    {
        title: "Ganges River-View Spiritual Retreat",
        description: "Find peace in this modern riverside retreat in the yoga capital. Wake up to direct views of the holy Ganges and nearby green Himalayan foothills.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1545208935-21e7a5139b10?auto=format&fit=crop&w=800&q=60"
        },
        price: 4800,
        location: "Rishikesh, Uttarakhand",
        country: "India"
    },
    {
        title: "Himalayan Ridge Eco Lodge",
        description: "Stunning eco-friendly organic farming lodge. Enjoy crystal-clear views of the Mt. Kanchenjunga range while relaxing on the solar-heated glass balcony.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=60"
        },
        price: 5200,
        location: "Gangtok, Sikkim",
        country: "India"
    },
    {
        title: "Tea Garden Colonial Bungalow",
        description: "Step back in time in this beautifully preserved British-era colonial villa overlooking green rolling tea plantations in the Nilgiris.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?auto=format&fit=crop&w=800&q=60"
        },
        price: 9200,
        location: "Ooty, Tamil Nadu",
        country: "India"
    },
    {
        title: "Lakeside Luxury Glamping Dome",
        description: "Modern geodesic dome with a private deck, plunge pool, and beautiful sunrise views over Pawna Lake. Perfect weekend getaway from Mumbai.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=60"
        },
        price: 8800,
        location: "Lonavala, Maharashtra",
        country: "India"
    },
    {
        title: "Cliffside Sea-View Sanctuary",
        description: "Perched on the red cliffs of Varkala Beach. Wake up to panoramic Arabian Sea views, watch dolphins, and enjoy therapeutic Ayurvedic treatments.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60"
        },
        price: 6800,
        location: "Varkala, Kerala",
        country: "India"
    },
    {
        title: "Desert Dunes Royal Camp",
        description: "Sleep under a blanket of stars in a luxury canvas Swiss tent nestled in the golden sand dunes of Thar Desert. Includes camel safari and folk dance show.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=60"
        },
        price: 7800,
        location: "Sam Sand Dunes, Jaisalmer, Rajasthan",
        country: "India"
    },
    {
        title: "Tiger Reserve Luxury Jungle Lodge",
        description: "Elegant wooden safari suites built adjacent to the tiger reserve. Featuring private outdoor showers, nature trails, and open-jeep safaris.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=60"
        },
        price: 12500,
        location: "Kanha National Park, Madhya Pradesh",
        country: "India"
    },
    {
        title: "Darjeeling Tea Estate Villa",
        description: "Breathtaking views of the Himalayan valleys. Stay inside this pristine wood-paneled cottage with fireplace and organic tea tasting gardens.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1500627869374-13cd993b1115?auto=format&fit=crop&w=800&q=60"
        },
        price: 6900,
        location: "Darjeeling, West Bengal",
        country: "India"
    },
    {
        title: "Cloud-Kissed Rainforest Treehouse",
        description: "Sleep high above the green rainforest canopy in this premium bamboo treehouse. Experience the stunning living root bridges and cascading waterfalls.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=800&q=60"
        },
        price: 8000,
        location: "Cherrapunji, Meghalaya",
        country: "India"
    },
    {
        title: "French Quarter Heritage Home",
        description: "Charming pastel yellow French colonial mansion with high arches, bougainvillea courtyard, and vintage furniture. 2 minutes walk to Rock Beach.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60"
        },
        price: 6400,
        location: "White Town, Pondicherry",
        country: "India"
    },
    {
        title: "Havelock Private Beach Cabana",
        description: "Sleek eco-cabana built on the white sands of Radhanagar Beach. Features beautiful turquoise ocean views, hammock decks, and private scuba guides.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60"
        },
        price: 13500,
        location: "Havelock Island, Andaman & Nicobar",
        country: "India"
    },
    {
        title: "Himalayan Stone Cottage",
        description: "Charming stone cottage set amidst apple orchards. Enjoy direct views of the Nanda Devi peak, organic fruit picking, and crackling fireplaces.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=60"
        },
        price: 4900,
        location: "Mukteshwar, Uttarakhand",
        country: "India"
    },
    {
        title: "Pine Forest Ridge Cabin",
        description: "Perched high in the cedar woods of Dharamshala, this beautiful loft style wood cabin provides quiet views of the Dhauladhar mountain range.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=800&q=60"
        },
        price: 4500,
        location: "McLeod Ganj, Dharamshala, Himachal Pradesh",
        country: "India"
    },
    {
        title: "Hampi Ruins View Heritage Lodge",
        description: "Stay in a beautiful traditional stone mansion blending into the boulder-strewn landscape of Hampi. Excellent rooftop view of the Virupaksha Temple.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60"
        },
        price: 3800,
        location: "Hampi, Karnataka",
        country: "India"
    },
    {
        title: "Traditional Rann Bhunga Cottage",
        description: "Experience Kutch culture in a luxury 'Bhunga' (circular mud cottage) painted with exquisite mirror work. Watch white salt desert sunsets.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=60"
        },
        price: 7200,
        location: "Dhordo, Rann of Kutch, Gujarat",
        country: "India"
    },
    {
        title: "Royal Nizam Palace Suite",
        description: "Live the luxury of the Nizams in this beautifully restored palace wing. Vintage chandeliers, grand arches, and royal carriage rides.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=60"
        },
        price: 18000,
        location: "Hyderabad, Telangana",
        country: "India"
    },
    {
        title: "Pangong Lake Luxury Camp",
        description: "Rest inside warm insulated lake-view camps right next to the crystal blue Pangong Lake. Witness the shifting colors of Ladakh's high-altitude water.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=60"
        },
        price: 8500,
        location: "Pangong Lake, Ladakh",
        country: "India"
    },
    {
        title: "Rhino Sanctuary Forest Cottage",
        description: "Stay in a stilt wooden cottage surrounded by tea gardens and elephant corridors, located minutes from the Kaziranga rhino safari gates.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=60"
        },
        price: 5500,
        location: "Kaziranga, Assam",
        country: "India"
    },
    {
        title: "Tranquil Beachfront Sanctuary",
        description: "Quiet eco-friendly cottages right on the sandy shores of Puri Beach, surrounded by casuarina trees. Includes traditional temple tour guides.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60"
        },
        price: 4200,
        location: "Puri, Odisha",
        country: "India"
    }
];

module.exports = { data: sampleListings };