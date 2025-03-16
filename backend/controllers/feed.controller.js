// controllers/feed.controller.js
export const getFeed = (req, res) => {
    const posts = [
            {
                id: 1,
                platform: "twitter",
                username: "@techuseraae",
                timestamp: "2 hours ago",
                content: "Just launched our new product! We've been working tirelessly for months, and it's finally here. Check it out on our website and let us know your thoughts! #technology #innovation #newlaunch",
                likes: 24,
                shares: 8
            },
            {
                id: 2,
                platform: "facebook",
                username: "Jane Smith",
                timestamp: "3 hours ago",
                content: "Had an amazing experience at the tech conference today. Met so many brilliant minds, had insightful discussions about the future of AI, and gained some valuable knowledge that I'll be applying to my own projects. Can't wait for next year!",
                likes: 45,
                shares: 12
            },
            {
                id: 3,
                platform: "instagram",
                 
                username: "@photomaestro",
                timestamp: "5 hours ago",
                content: "New photo series dropping next week! I've been traveling around capturing stunning landscapes and hidden gems, and I can't wait to share these breathtaking moments with you all. Stay tuned for a visual journey like no other. #photography #wanderlust",
                likes: 132,
                shares: 28
            },
            {
                id: 4,
                platform: "youtube",
                 
                username: "TechTutorials",
                timestamp: "1 day ago",
                content: "Learn how to build a React app with shadcn UI in our latest tutorial. We cover everything from setting up your project, designing intuitive UI components, and optimizing performance. This is a must-watch for developers looking to improve their frontend skills!",
                likes: 87,
                shares: 34
            },
            {
                id: 5,
                platform: "twitter",
                 
                username: "@gamingguru",
                timestamp: "4 hours ago",
                content: "Spent the entire weekend testing out the latest game release, and I must say, it's a masterpiece. The graphics are breathtaking, the storyline is gripping, and the gameplay mechanics feel so fluid. Highly recommend checking it out! #gaming #review",
                likes: 76,
                shares: 22
            },
            {
                id: 6,
                platform: "facebook",
                 
                username: "Mark Wilson",
                timestamp: "6 hours ago",
                content: "Finally took the plunge and started my own business! It’s been a challenging journey, but I’m so excited to share my passion with the world. Looking forward to growing and learning along the way. #entrepreneurship #smallbusiness",
                likes: 95,
                shares: 40
            },
            {
                id: 7,
                platform: "instagram",
                 
                username: "@foodiejoy",
                timestamp: "7 hours ago",
                content: "Tried out a new restaurant today and it was an absolute delight! From the mouth-watering appetizers to the rich, flavorful main course, every bite was an experience. Highly recommend their signature dish! #foodie #restaurantreview",
                likes: 210,
                shares: 50
            },
            {
                id: 8,
                platform: "youtube",
                 
                username: "GadgetReviews",
                timestamp: "2 days ago",
                content: "Check out our latest review on the most anticipated smartphone of the year! We break down the camera quality, battery life, design, and overall performance to help you decide if it's worth the upgrade. #techreview #smartphone",
                likes: 180,
                shares: 65
            },
            {
                id: 9,
                platform: "twitter",
                 
                username: "@devtips",
                timestamp: "5 hours ago",
                content: "Debugging can be frustrating, but here’s a tip that saves me every time: Take a break, step away from the screen, and return with fresh eyes. Works like magic! #coding #developerlife",
                likes: 123,
                shares: 44
            },
            {
                id: 10,
                platform: "facebook",
                 
                username: "Emily Johnson",
                timestamp: "8 hours ago",
                content: "Finally finished writing my first novel! It's been a rollercoaster of emotions, but I can't wait to share my story with the world. Hoping to publish soon! #writing #author",
                likes: 150,
                shares: 48
            },
            {
                id: 11,
                platform: "instagram",
                 
                username: "@fitnessjourney",
                timestamp: "1 day ago",
                content: "Consistency is key! 6 months ago, I started my fitness journey, and today, I feel stronger, healthier, and more confident than ever. Progress takes time, but it's worth it! #fitnessmotivation #healthyhabits",
                likes: 320,
                shares: 80
            },
            {
                id: 12,
                platform: "youtube",
                 
                username: "MovieBuff",
                timestamp: "3 days ago",
                content: "In this video, I break down my top 10 favorite movies of all time, analyzing cinematography, storytelling, and acting performances. What are your top picks? #movies #filmreview",
                likes: 290,
                shares: 100
            },
            {
                id: 13,
                platform: "twitter",
                 
                username: "@travelnomad",
                timestamp: "1 day ago",
                content: "Exploring hidden gems around the world! Just arrived in a beautiful coastal town with breathtaking views and amazing local food. Travel is the best way to experience life! #wanderlust #travelblog",
                likes: 210,
                shares: 90
            },
            {
                id: 14,
                platform: "facebook",
                 
                username: "Sarah Green",
                timestamp: "2 days ago",
                content: "Adopted a puppy today! This little guy has already filled my home with so much joy and energy. Can’t wait to share our journey together. #puppylove #adopt",
                likes: 450,
                shares: 200
            },
            {
                id: 15,
                platform: "instagram",
                 
                username: "@artisticmind",
                timestamp: "3 days ago",
                content: "Finally completed my latest painting! This piece was inspired by the beauty of nature and the emotions it evokes. It took weeks of layering colors and perfecting details, but I’m thrilled with the result. Can’t wait to hear what you all think! #artwork #painting",
                likes: 380,
                shares: 120
            },
            {
                id: 16,
                platform: "youtube",
                 
                username: "HistoryExplained",
                timestamp: "4 days ago",
                content: "In this episode, we dive deep into the rise and fall of ancient civilizations. How did powerful empires collapse? What lessons can we learn from history? Join us as we explore the past and connect it to our present world. #history #documentary",
                likes: 500,
                shares: 210
            },
            {
                id: 17,
                platform: "twitter",
                 
                username: "@techupdates",
                timestamp: "2 days ago",
                content: "Breaking: A major tech company has just announced a revolutionary AI model that promises to change the landscape of artificial intelligence forever. Early benchmarks show impressive results. More details coming soon! #AI #technology",
                likes: 610,
                shares: 300
            },
            {
                id: 18,
                platform: "facebook",
                 
                username: "Robert Mitchell",
                timestamp: "5 days ago",
                content: "Just finished my first marathon! Months of training, dedication, and perseverance have led to this moment. Crossing that finish line felt surreal. To everyone chasing a goal—keep pushing forward! #marathon #achievement",
                likes: 480,
                shares: 150
            },
            {
                id: 19,
                platform: "instagram",
                 
                username: "@chefdelights",
                timestamp: "3 days ago",
                content: "Here’s a sneak peek of my latest gourmet creation—handmade pasta with a rich, creamy sauce and fresh truffle shavings. Cooking is an art, and I love sharing my culinary passion with you all! #foodporn #chefslife",
                likes: 520,
                shares: 190
            },
            {
                id: 20,
                platform: "youtube",
                 
                username: "SpaceTalks",
                timestamp: "6 days ago",
                content: "The mysteries of black holes have fascinated scientists for decades. In this episode, we break down how they form, what happens beyond the event horizon, and whether anything can escape their pull. Mind-blowing stuff ahead! #space #science",
                likes: 690,
                shares: 320
            }        
        ];

    // Return a placeholder feed list
    res.status(200).json({
        success: true,
        data: JSON.stringify(posts)
    });
};

export const postFeed = (req, res) => {
    // Return a placeholder for creating a new feed post
    res.status(201).json({
        success: true,
        message: ""
    });
};
