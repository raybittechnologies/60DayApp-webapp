export const caseStudiesData = {
  'expense-tracker': {
    hero: {
      industry: "IT Industry",
      titlePart1: "Expense Tracking",
      titlePart2: "Mobile App",
      description: "A smart expense tracking app with AI-powered spend categorisation, budget alerts, multi-currency support, and monthly reports — built and live on both stores in just 8 weeks.",
      isMockupA: true
    },
    client: {
      initials: "ABC",
      name: "ABC Software Solutions",
      location: "United States"
    },
    tabs: {
      overview: {
        p1: "ABC FinTech Solutions is a modern digital product company focused on simplifying personal finance management. The goal was to design and develop a <span class='text-[#F05A28]'>mobile-first Expense Tracking Application</span> that helps users manage daily expenses, monitor spending habits, and improve financial decision-making.",
        p2: "The app was envisioned as a <span class='text-[#F05A28]'>simple, secure, and user-friendly platform</span> tailored for individuals dealing with frequent and scattered expenses."
      },
      goals: {
        p1: "To build a <span class='text-[#F05A28]'>fast, intuitive, and visually clear expense tracking mobile app</span> that enables users to manage their finances efficiently from a single platform.",
        list: [
          { num: "#1", title: "Quick Expense Entry", desc: "The objective was to allow users to log expenses within seconds with minimal input effort." },
          { num: "#2", title: "Clear Financial Insights", desc: "The app needed to provide visual summaries such as charts and reports to help users understand spending patterns." },
          { num: "#3", title: "Budget Management", desc: "It required features for setting budgets and tracking limits to encourage better financial discipline." }
        ]
      },
      challenges: {
        p1: "The project required balancing simplicity with functionality while ensuring users remained engaged and consistent in tracking their expenses.",
        list: [
          { num: "#1", title: "User Retention", desc: "Users often stop using expense apps after a short time due to complexity or lack of motivation." },
          { num: "#2", title: "Data Clarity", desc: "Presenting financial data in a simple, understandable way without overwhelming users was a key challenge." },
          { num: "#3", title: "Speed vs Functionality", desc: "Ensuring quick expense entry while still offering meaningful insights." },
          { num: "#4", title: "Intuitive, Minimal UI", desc: "Designing an interface that is minimal but still provides all essential features." }
        ]
      },
      solutions: {
        title: "Desired Solutions",
        p1: "We designed and developed a <span class='text-[#FF8055]'>mobile-first expense tracking solution</span> from the ground up, focusing on speed, clarity, and usability.",
        p2: "The app was built with a <span class='text-[#FF8055]'>streamlined user flow</span>, allowing users to quickly add expenses, categorize them, and instantly view summaries. A clean and modern UI was crafted to ensure ease of use and reduce cognitive load.",
        p3: "The system integrates <span class='text-[#FF8055]'>real-time data visualization</span>, budget tracking, and categorized expense management, enabling users to monitor their financial behavior effectively."
      },
      features: {
        p1: "The application offers powerful yet simple tools that make financial tracking effortless and engaging.",
        list: [
          { num: "#1", title: "Expense Tracking Dashboard", desc: "A centralized dashboard showing total balance, recent transactions, and spending summaries." },
          { num: "#2", title: "Quick Add Expense", desc: "One-tap expense entry with category selection and minimal input fields." },
          { num: "#3", title: "Visual Analytics", desc: "Interactive charts (pie/bar) to display spending patterns and category distribution." },
          { num: "#4", title: "Budget Tracking", desc: "Users can set monthly budgets and receive alerts when limits are exceeded." },
          { num: "#5", title: "Smart Categorization", desc: "Predefined categories like Food, Travel, Bills, and Shopping for easy organization." }
        ]
      },
      impact: {
        p1: "The launch of the Expense Tracking App significantly improved how users manage their finances.",
        p2: "Users were able to:",
        list: [
          "Track expenses quickly and consistently",
          "Gain clear insights into their spending habits",
          "Improve budgeting and financial discipline",
          "Access their data easily through a clean and responsive mobile interface"
        ],
        p3: "The app's simplicity and visual approach increased user engagement and made expense tracking a <span class='text-[#FF8055]'>daily habit rather than a burden.</span>"
      },
      conclusion: {
        p1: "This project demonstrates how a <span class='text-[#FF8055]'>user-centered design approach</span> can simplify financial management.",
        p2: "By focusing on <span class='text-[#FF8055]'>speed, clarity, and usability</span>, the Expense Tracking App transforms a complex task into a <span class='text-[#FF8055]'>seamless and intuitive experience</span>, empowering users to take control of their finances."
      }
    }
  },
  'travel-booking': {
    hero: {
      industry: "Travel & Tourism",
      titlePart1: "Travel Booking",
      titlePart2: "Platform",
      description: "A complete holiday booking app with flight search, hotel listings, itinerary planning, and secure payment checkout — from wireframes to both App Stores in 55 days.",
      isMockupA: false
    },
    client: {
      initials: "TB",
      name: "TravelBook Inc.",
      location: "United Kingdom"
    },
    tabs: {
      overview: {
        p1: "TravelBook Inc. wanted to disrupt the holiday booking market with a unified platform. The goal was to build a <span class='text-[#F05A28]'>comprehensive travel booking engine</span> that combined flights, hotels, and experiences into a single seamless itinerary.",
        p2: "The app needed to be a <span class='text-[#F05A28]'>one-stop-shop for travelers</span>, providing real-time pricing, extreme reliability, and a frictionless checkout process."
      },
      goals: {
        p1: "To launch a <span class='text-[#F05A28]'>highly scalable and robust travel booking platform</span> across web and mobile platforms simultaneously.",
        list: [
          { num: "#1", title: "Unified Search", desc: "Allow users to search for flights, hotels, and car rentals from a single search interface." },
          { num: "#2", title: "Real-time Availability", desc: "Integrate with multiple third-party APIs to show real-time inventory and pricing." },
          { num: "#3", title: "Frictionless Checkout", desc: "A streamlined payment flow supporting multiple currencies and payment gateways." }
        ]
      },
      challenges: {
        p1: "Developing a travel platform comes with significant technical challenges, particularly around data consistency and third-party integrations.",
        list: [
          { num: "#1", title: "Complex Integrations", desc: "Connecting to varying legacy APIs from different airlines and hotel chains." },
          { num: "#2", title: "Performance", desc: "Ensuring search results load in under 2 seconds despite querying multiple external providers." },
          { num: "#3", title: "Scalability", desc: "Handling massive spikes in traffic during holiday seasons without downtime." },
          { num: "#4", title: "Secure Payments", desc: "Implementing PCI compliant payment flows with robust fraud detection." }
        ]
      },
      solutions: {
        title: "Technical Architecture",
        p1: "We engineered a <span class='text-[#FF8055]'>microservices-based backend</span> using Node.js and Redis to cache search results, dramatically reducing load times.",
        p2: "For the frontend, we used React Native to deliver a <span class='text-[#FF8055]'>unified mobile experience</span> across iOS and Android, ensuring smooth navigation and animations.",
        p3: "The booking flow was completely redesigned, breaking down complex forms into <span class='text-[#FF8055]'>bite-sized, conversational steps</span> that significantly improved conversion rates."
      },
      features: {
        p1: "The platform comes packed with features designed to make travel planning as enjoyable as the trip itself.",
        list: [
          { num: "#1", title: "Smart Itinerary Builder", desc: "Automatically aggregates bookings into a unified timeline." },
          { num: "#2", title: "Price Drop Alerts", desc: "Push notifications when saved flights or hotels drop in price." },
          { num: "#3", title: "Offline Mode", desc: "Access boarding passes and hotel confirmations without internet access." },
          { num: "#4", title: "Split Payments", desc: "Allow travelers to split the cost of group bookings seamlessly." },
          { num: "#5", title: "Multi-language Support", desc: "Fully localized in 6 languages with dynamic currency conversion." }
        ]
      },
      impact: {
        p1: "The launch was a massive success, exceeding all initial KPIs established by the client.",
        p2: "Within the first 3 months:",
        list: [
          "Achieved over 100,000 active app downloads",
          "Processed $2M+ in cross-border travel bookings",
          "Maintained a 99.99% uptime during peak holiday booking season",
          "Reduced customer support tickets by 40% through intuitive self-service UI"
        ],
        p3: "The platform's reliability and speed positioned TravelBook as a <span class='text-[#FF8055]'>formidable new player in the travel tech space.</span>"
      },
      conclusion: {
        p1: "The Travel Booking Platform is a testament to how <span class='text-[#FF8055]'>modern architecture and robust integrations</span> can redefine an industry.",
        p2: "By prioritizing <span class='text-[#FF8055]'>performance, security, and user experience</span>, we delivered a product that not only met the technical requirements but truly delighted end users."
      }
    }
  }
};
