const sampleListings = [
    {
        "title": "Cozy Beachfront Cottage",
        "description": "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
        "image": {
            "url": "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
            "filename": "beachfront_cottage.jpg"
        },
        "price": 1500,
        "location": "Malibu",
        "country": "United States",
        "owner": "66db5b4480a003c809c3e5ba"
    },
    {
        "title": "Modern Loft in Downtown",
        "description": "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
        "image": {
            "url": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
            "filename": "downtown_loft.jpg"
        },
        "price": 1200,
        "location": "New York City",
        "country": "United States",
        "owner": "66db5b4480a003c809c3e5ba"
    },
    {
        "title": "Mountain Retreat",
        "description": "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
        "image": {
            "url": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
            "filename": "mountain_retreat.jpg"
        },
        "price": 1000,
        "location": "Aspen",
        "country": "United States",
        "owner": "66db5b4480a003c809c3e5ba"
    },
    {
        "title": "Historic Villa in Tuscany",
        "description": "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
        "image": {
            "url": "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
            "filename": "tuscany_villa.jpg"
        },
        "price": 2500,
        "location": "Florence",
        "country": "Italy",
        "owner": "66db5b4480a003c809c3e5ba"
    },
    {
        "title": "Secluded Treehouse Getaway",
        "description": "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
        "image": {
            "url": "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
            "filename": "treehouse_getaway.jpg"
        },
        "price": 800,
        "location": "Portland",
        "country": "United States",
        "owner": "66db5b4480a003c809c3e5ba"
    },
    {
        "title": "Beachfront Paradise",
        "description": "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
        "image": {
            "url": "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
            "filename": "beachfront_paradise.jpg"
        },
        "price": 2000,
        "location": "Cancun",
        "country": "Mexico",
        "owner": "66db5b4480a003c809c3e5ba"
    },
    {
        "title": "Rustic Cabin by the Lake",
        "description": "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
        "image": {
            "url": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
            "filename": "lake_cabin.jpg"
        },
        "price": 900,
        "location": "Lake Tahoe",
        "country": "United States",
        "owner": "66db5b4480a003c809c3e5ba"
    },
    {
        "title": "Luxury Penthouse with City Views",
        "description": "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
        "image": {
            "url": "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
            "filename": "luxury_penthouse.jpg"
        },
        "price": 3500,
        "location": "Los Angeles",
        "country": "United States",
        "owner": "66db5b4480a003c809c3e5ba"
    },
    {
        "title": "Ski-In/Ski-Out Chalet",
        "description": "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
        "image": {
            "url": "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
            "filename": "ski_chalet.jpg"
        },
        "price": 3000,
        "location": "Verbier",
        "country": "Switzerland",
        "owner": "66db5b4480a003c809c3e5ba"
    },
    {
        "title": "Safari Lodge in the Serengeti",
        "description": "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
        "image": {
            "url": "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
            "filename": "serengeti_lodge.jpg"
        },
        "price": 4000,
        "location": "Serengeti National Park",
        "country": "Tanzania",
        "owner": "66db5b4480a003c809c3e5ba"
    },
    {
        "title": "Historic Canal House",
        "description": "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
        "image": {
            "url": "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
            "filename": "canal_house.jpg"
        },
        "price": 1800,
        "location": "Amsterdam",
        "country": "Netherlands",
        "owner": "66db5b4480a003c809c3e5ba"
    },
    {
        "title": "Private Island Retreat",
        "description": "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
        "image": {
            "url": "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXNsYW5kJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
            "filename": "private_island.jpg"
        },
        "price": 10000,
        "location": "Fiji",
        "country": "Fiji",
        "owner": "66db5b4480a003c809c3e5ba"
    }
] ;


  
  module.exports = { data: sampleListings };