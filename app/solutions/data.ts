// Landing pages for the searches small businesses actually type. Each one renders at /solutions/<slug>.
export type Solution = {
  slug: string;
  navLabel: string;
  title: string; // <title>, ~60 chars
  description: string; // meta description, ~155 chars
  keywords: string;
  eyebrow: string;
  h1: string;
  intro: string;
  problems: { title: string; body: string }[];
  steps: { title: string; body: string }[];
  features: string[];
  faqs: { q: string; a: string }[];
};

export const solutions: Solution[] = [
  {
    slug: "ai-call-answering-service-india",
    navLabel: "AI call answering",
    title: "AI Call Answering Service India — 24/7 AI Receptionist",
    description:
      "RingReply is an AI call answering service for Indian businesses. It picks up every call 24/7, talks in Hindi and English, and books appointments for you.",
    keywords:
      "AI call answering service India, AI phone answering India, AI calls for business, automated call answering India, missed call solution India, AI voice receptionist Hindi",
    eyebrow: "AI call answering",
    h1: "An AI that answers your business calls — in Hindi and English",
    intro:
      "Every missed call is a customer who rings the next business on Google. RingReply answers your calls around the clock, understands what the caller wants, books the appointment, and sends you the details — so you only pick up the phone when you want to.",
    problems: [
      {
        title: "Calls come when you're busy",
        body: "With a patient in the chair or a client mid-haircut, you can't answer. Most callers won't leave a voicemail — they just call someone else.",
      },
      {
        title: "After-hours calls go nowhere",
        body: "People call in the evening and on Sundays. A closed shop means lost bookings that your competitor picks up instead.",
      },
      {
        title: "A full-time receptionist is expensive",
        body: "A receptionist costs ₹12,000–₹20,000 a month, works fixed hours and still misses calls during lunch and leave.",
      },
    ],
    steps: [
      { title: "The caller rings your number", body: "Calls you can't take are forwarded to RingReply, so customers keep dialling the number they already know." },
      { title: "The AI talks to them naturally", body: "It greets them with your business name, answers questions about services, timings and location, and switches between Hindi and English." },
      { title: "The booking lands in your dashboard", body: "It checks your free slots, books the appointment, confirms it with the customer and alerts you." },
    ],
    features: [
      "Answers calls 24/7, including nights and Sundays",
      "Hindi, English and Hinglish conversations",
      "Books, reschedules and cancels appointments",
      "Answers FAQs about prices, timings and location",
      "Confirmation to the customer, alert to you",
      "Booking dashboard for every call",
    ],
    faqs: [
      { q: "What is an AI call answering service?", a: "It's software that picks up your business phone calls like a receptionist would. RingReply understands what the caller says, replies with a natural voice, answers common questions and books appointments into your calendar." },
      { q: "Does it understand Hindi?", a: "Yes. RingReply speaks Hindi and English and handles callers who mix both, which is how most people in India actually talk." },
      { q: "Do I need a new phone number?", a: "No. You keep your existing number and forward calls you can't answer — or all calls — to RingReply." },
      { q: "How much does it cost?", a: "The India plan starts at ₹2,999 per month with setup done for you. See the pricing page for the full comparison." },
    ],
  },
  {
    slug: "ai-receptionist-for-clinics",
    navLabel: "For clinics",
    title: "AI Receptionist for Clinics & Dental Practices in India",
    description:
      "Let an AI receptionist book patient appointments for your clinic 24/7. RingReply answers calls and WhatsApp in Hindi and English and fills your schedule.",
    keywords:
      "AI receptionist for clinic, dental clinic appointment booking India, clinic receptionist software, doctor appointment booking WhatsApp, AI receptionist for doctors India",
    eyebrow: "For clinics & dental practices",
    h1: "Your clinic's receptionist that never takes a break",
    intro:
      "Patients call to book, reschedule and ask about fees — usually while you're with someone else. RingReply handles those calls and WhatsApp messages for you, books the slot and keeps your front desk free for the patients in the room.",
    problems: [
      { title: "Missed calls during consultations", body: "When the doctor and assistant are both busy, new patients who can't get through book elsewhere." },
      { title: "No-shows and last-minute changes", body: "Rescheduling over the phone eats staff time, and empty slots cost you money." },
      { title: "The same questions all day", body: "Fees, timings, location, whether a doctor is in today — answered dozens of times." },
    ],
    steps: [
      { title: "Patient calls or WhatsApps", body: "RingReply replies instantly, any time of day." },
      { title: "AI finds a free slot", body: "It offers available times for the right treatment and doctor and books the patient in." },
      { title: "Everyone is notified", body: "The patient gets a confirmation and your clinic gets the booking with their name and number." },
    ],
    features: [
      "Books cleanings, check-ups, consultations and follow-ups",
      "Knows your treatments, fees and doctor timings",
      "Handles reschedules and cancellations",
      "Works on calls and WhatsApp",
      "Hindi and English",
      "Daily booking list for your front desk",
    ],
    faqs: [
      { q: "Can it book appointments for a dental clinic?", a: "Yes. You tell us your treatments, slot length and working hours, and RingReply books patients into free slots and confirms with them." },
      { q: "Will patients know it's an AI?", a: "It introduces itself as your clinic's assistant and speaks naturally. If a patient needs a human, it takes their details so your staff can call back." },
      { q: "Does it give medical advice?", a: "No. It handles bookings and general information about your clinic only, and directs medical questions to your doctors." },
      { q: "How long does setup take?", a: "Our team sets it up for you — usually within a day once we have your clinic details." },
    ],
  },
  {
    slug: "ai-receptionist-for-salons",
    navLabel: "For salons",
    title: "AI Receptionist for Salons, Spas & Barber Shops — RingReply",
    description:
      "Stop losing bookings while your hands are busy. RingReply's AI receptionist books salon and barber appointments by phone and WhatsApp, 24/7, in Hindi and English.",
    keywords:
      "AI receptionist for salon, salon appointment booking WhatsApp, barber shop booking bot India, spa booking software India, salon call answering service",
    eyebrow: "For salons, spas & barbers",
    h1: "Book clients while your hands are full",
    intro:
      "You can't pick up the phone mid-haircut. RingReply answers calls and WhatsApp messages for your salon, books the service the client wants, and lets you keep your focus on the chair.",
    problems: [
      { title: "The phone rings mid-service", body: "Stopping to answer annoys the client in the chair; ignoring it loses the next one." },
      { title: "Running late with no way to tell people", body: "When the day runs behind, waiting clients get frustrated and some walk out." },
      { title: "Evening and weekend enquiries", body: "Many clients plan their visit late at night — when no one is there to reply." },
    ],
    steps: [
      { title: "Client messages or calls", body: "RingReply replies straight away with your services and prices." },
      { title: "Picks a service and time", body: "It books the haircut, colour, facial or package into an open slot." },
      { title: "You see the booking", body: "The client gets a confirmation and the booking appears in your dashboard." },
    ],
    features: [
      "Books haircuts, colour, spa and grooming services",
      "Shares your price list on request",
      "Works on WhatsApp and calls",
      "Hindi and English",
      "Reschedules and cancellations handled",
      "Owner alerts for every booking",
    ],
    faqs: [
      { q: "Can clients book on WhatsApp?", a: "Yes. Clients message your salon's WhatsApp number and RingReply books them in, just like chatting with your front desk." },
      { q: "Can it handle multiple services and stylists?", a: "Yes. We set it up with your services, durations and working hours so it only offers slots that work." },
      { q: "What if a client wants to talk to me?", a: "RingReply takes their name and number and alerts you so you can call back when you're free." },
    ],
  },
  {
    slug: "whatsapp-booking-bot",
    navLabel: "WhatsApp booking bot",
    title: "WhatsApp Booking Bot for Small Business India — RingReply",
    description:
      "A WhatsApp bot that replies to customers instantly, answers questions and books appointments 24/7. Built on the official WhatsApp Business API. Hindi and English.",
    keywords:
      "WhatsApp booking bot India, WhatsApp appointment booking, WhatsApp chatbot for business India, WhatsApp Business API bot, automated WhatsApp replies for business",
    eyebrow: "WhatsApp booking bot",
    h1: "Turn WhatsApp messages into confirmed bookings",
    intro:
      "Your customers already message you on WhatsApp — and expect a reply in minutes. RingReply replies instantly, answers their questions, and books the appointment without you typing a word.",
    problems: [
      { title: "Slow replies lose customers", body: "If a reply takes hours, the customer has already booked somewhere else." },
      { title: "Typing the same answers again and again", body: "Prices, timings, location and availability — copied and pasted all day." },
      { title: "Bookings scattered across chats", body: "Appointments agreed in chat get forgotten or double-booked." },
    ],
    steps: [
      { title: "Customer sends a message", body: "On your dedicated business WhatsApp number." },
      { title: "The bot understands and replies", body: "It answers questions in Hindi or English and offers open slots." },
      { title: "Booking confirmed", body: "The appointment is saved, the customer gets a confirmation and you get an alert." },
    ],
    features: [
      "Official WhatsApp Business API (not a grey-market tool)",
      "Instant replies 24/7",
      "Understands free-form messages, not just menus",
      "Hindi, English and Hinglish",
      "Bookings, reschedules and FAQs",
      "Works for clinics, salons, coaching institutes and more",
    ],
    faqs: [
      { q: "Can I use my existing WhatsApp number?", a: "We recommend a new, dedicated number for the bot. Moving an existing number to the WhatsApp Business API removes its chat history, and the number can't be used in the regular WhatsApp app afterwards." },
      { q: "Is this the official WhatsApp Business API?", a: "Yes. RingReply runs on Meta's official WhatsApp Business Platform, so your number stays safe from bans that unofficial tools risk." },
      { q: "What do customers see?", a: "A normal WhatsApp chat with your business name. They type naturally and get a reply in seconds." },
    ],
  },
  {
    slug: "ai-receptionist-for-coaching-institutes",
    navLabel: "For coaching institutes",
    title: "AI Receptionist for Coaching Institutes & Colleges — RingReply",
    description:
      "Answer every course and fee enquiry instantly. RingReply's AI handles admission calls and WhatsApp for coaching institutes and colleges, 24/7, in Hindi and English.",
    keywords:
      "AI receptionist for coaching institute, admission enquiry bot, college WhatsApp bot India, coaching centre enquiry management, course fee enquiry automation",
    eyebrow: "For coaching institutes & colleges",
    h1: "Never miss an admission enquiry again",
    intro:
      "Students and parents ask about courses, fees, batches and demo classes — often late in the evening. RingReply answers every enquiry on calls and WhatsApp, collects their details and books demo classes or counselling sessions.",
    problems: [
      { title: "Enquiries peak after office hours", body: "Parents and students research in the evening, when your counsellors have gone home." },
      { title: "Counsellors repeat the same answers", body: "Course details, fees and batch timings take up time better spent on serious leads." },
      { title: "Leads go cold", body: "An enquiry that waits a day for a reply often joins another institute." },
    ],
    steps: [
      { title: "Student or parent enquires", body: "By call or WhatsApp, at any hour." },
      { title: "AI answers and qualifies", body: "It explains courses, fees and batches and captures name, class and interest." },
      { title: "Your team follows up", body: "Demo classes or counselling sessions are booked and the lead is sent to you." },
    ],
    features: [
      "Answers course, fee and batch questions",
      "Books demo classes and counselling sessions",
      "Captures student details for follow-up",
      "WhatsApp and calls",
      "Hindi and English",
      "Lead alerts to your team",
    ],
    faqs: [
      { q: "Can it share fee details and brochures?", a: "Yes. We load your courses, fees and batch information so the AI gives accurate answers every time." },
      { q: "Does it work for colleges too?", a: "Yes — any institution that gets repeated admission and course enquiries." },
      { q: "How do counsellors get the leads?", a: "Each enquiry is sent to your team with the student's details, so counsellors can follow up with warm leads only." },
    ],
  },
];

export function getSolution(slug: string) {
  return solutions.find((s) => s.slug === slug);
}
