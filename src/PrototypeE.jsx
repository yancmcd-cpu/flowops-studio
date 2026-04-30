import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useInView, useReducedMotion } from 'framer-motion';
import Lenis from '@studio-freight/lenis';
import {
  BadgeDollarSign,
  Bot,
  CalendarCheck2,
  CheckCircle2,
  Gauge,
  House,
  Layers3,
  MessageSquareText,
  PhoneCall,
  Sparkles,
  Stethoscope,
  Wrench
} from 'lucide-react';
import { FlowHeroAnimation } from './PrototypeH';
import { LeadBookingsMiniSection } from './components/LeadBookingsMiniSection';
import { PreviewEmbedSection } from './components/PreviewEmbedSection';

const sectionData = [
  {
    headline: "Catch every opportunity, day or night.",
    subheading: "We build systems that consolidate your DMs, forms, and inbound calls into one flawless capture net.",
    microline: "Never let another lead slip through the cracks.",
    video: "/assets/animations/flowops-lead-capture-v1.mp4",
    bgImage: "/assets/section-stills/flowops-lead-capture-v1-still.jpg"
  },
  {
    headline: "Instant answers that sound like you.",
    subheading: "Our custom systems act as your best front-desk employee—answering questions, qualifying leads, and handling objections 24/7.",
    microline: "Speed meets personalization for every customer interaction.",
    video: "/assets/animations/flowops-ai-conversation-v1.mp4",
    bgImage: "/assets/section-stills/flowops-ai-conversation-v1-still.jpg"
  },
  {
    headline: "Turn conversations into calendar bookings.",
    subheading: "Your system is designed to seamlessly guide qualified leads straight into your schedule, so you can focus on the actual work.",
    microline: "Wake up to new appointments booked automatically.",
    video: "/assets/animations/flowops-booking-conversion-v1.mp4",
    bgImage: "/assets/section-stills/flowops-booking-conversion-v1-still.jpg"
  },
  {
    headline: "Less manual work. More time to scale.",
    subheading: "Behind the scenes, the system connects your tools. Contracts are sent, CRM records are updated, and reminders go out without you lifting a finger.",
    microline: "A complete operating engine built perfectly for your workflows.",
    video: "/assets/animations/flowops-automation-system-v1.mp4",
    bgImage: "/assets/section-stills/flowops-automation-system-v1-still.jpg"
  },
  {
    headline: "A premium experience from the first click.",
    subheading: "We design and build high-converting, visually stunning websites that house your new engine—creating an unforgettable first impression.",
    microline: "A powerful system needs a world-class storefront.",
    video: "/assets/animations/flowops-frontend-experience-v1.mp4",
    bgImage: "/assets/section-stills/flowops-frontend-experience-v1-still.jpg"
  }
];

const heroImageData = [
  { src: "/assets/section-stills/flowops-lead-capture-v1-still.jpg", objectPosition: "50% 56%" },
  { src: "/assets/section-stills/flowops-ai-conversation-v1-still.jpg", objectPosition: "50% 50%" },
  { src: "/assets/section-stills/flowops-booking-conversion-v1-still.jpg", objectPosition: "50% 50%" },
  { src: "/assets/section-stills/flowops-automation-system-v1-still.jpg", objectPosition: "50% 56%" },
  { src: "/assets/section-stills/flowops-frontend-experience-v1-still.jpg", objectPosition: "50% 50%" }
];

const howItWorksStepsEn = [
  {
    label: "DISCOVER",
    title: "We map your opportunity flow.",
    body: "We map how enquiries flow through your business and where opportunities are lost."
  },
  {
    label: "BUILD",
    title: "We connect everything into one seamless system.",
    body: "We connect everything - from capturing enquiries to responding and booking - into one seamless system."
  },
  {
    label: "ACTIVATE",
    title: "Your system goes live.",
    body: "Your system goes live and starts handling everything automatically."
  },
  {
    label: "OPTIMISE",
    title: "Your system improves over time.",
    body: "Your system improves over time based on real performance."
  }
];

const finalizedSectionDataEn = [
  {
    descriptor: "AI-Powered Lead Capture",
    headline: "Capture every enquiry - even when you're offline",
    subheading: "Every message from your website, social media, and calls is captured automatically - so no opportunity is ever missed.",
    microline: "Busy? Offline? Closed? Still capturing.",
    video: "/assets/animations/flowops-lead-capture-v1.mp4",
    bgImage: "/assets/section-stills/flowops-lead-capture-v1-still.jpg"
  },
  {
    descriptor: "Instant Lead Response",
    headline: "Reply instantly - while you focus on your business",
    subheading: "Leads receive immediate responses across chat and calls - answering questions, qualifying enquiries, and keeping them engaged.",
    microline: "No delays. No drop-off. No lost bookings.",
    video: "/assets/animations/flowops-ai-conversation-v1.mp4",
    bgImage: "/assets/section-stills/flowops-ai-conversation-v1-still.jpg"
  },
  {
    descriptor: "Automated Booking & Conversion",
    headline: "Turn enquiries into confirmed bookings - automatically",
    subheading: "Leads are guided from first message to confirmed booking - filtering serious enquiries and making the next step simple.",
    microline: "No chasing. No back-and-forth. Just more booked customers - and more revenue.",
    video: "/assets/animations/flowops-booking-conversion-v1.mp4",
    bgImage: "/assets/section-stills/flowops-booking-conversion-v1-still.jpg"
  },
  {
    descriptor: "Business Automation System",
    headline: "Eliminate manual work - let everything run automatically",
    subheading: "Repetitive tasks, internal processes, and day-to-day operations are handled automatically - saving time, reducing errors, and keeping everything running smoothly.",
    microline: "Less admin. Less stress. More growth.",
    video: "/assets/animations/flowops-automation-system-v1.mp4",
    bgImage: "/assets/section-stills/flowops-automation-system-v1-still.jpg"
  },
  {
    descriptor: "Conversion-Focused Website",
    headline: "Turn your website into a lead and booking system",
    subheading: "Your website captures enquiries, guides visitors, and connects directly to your system - turning traffic into paying customers.",
    microline: "Not just pretty. Built to convert.",
    video: "/assets/animations/flowops-frontend-experience-v1.mp4",
    bgImage: "/assets/section-stills/flowops-frontend-experience-v1-still.jpg"
  }
];

const toolsData = [
  {
    label: "Models",
    speedClass: "speed-a",
    names: ["Codex", "GPT", "Gemini", "Claude", "DeepSeek", "Llama", "Grok", "Perplexity", "NotebookLM"]
  },
  {
    label: "Automation",
    speedClass: "speed-b reverse",
    names: ["n8n", "Make", "Activepieces", "Zapier", "Pipedream", "Node-RED", "Gumloop", "Firecrawl"]
  },
  {
    label: "Build & Data",
    speedClass: "speed-c",
    names: ["Claude Code", "Cursor", "Antigravity", "MySQL", "Supabase", "Notion", "Google Workspace", "Microsoft 365"]
  },
  {
    label: "Ops & Hospitality",
    speedClass: "speed-d reverse",
    names: ["GoHighLevel", "ActiveCampaign", "ClickFunnels", "Systeme", "Vendasta", "Guesty", "Hostaway", "Lodgify"]
  },
  {
    label: "Voice & Media",
    speedClass: "speed-e",
    names: ["ElevenLabs", "HeyGen", "Synthesia", "Speechify", "KlingAI", "NanoBanana", "Google Veo", "Sora"]
  }
];

const audienceItems = [
  "Local service businesses (plumbing, HVAC, electrical)",
  "Rental / letting agencies",
  "Clinics & med spas",
  "Businesses relying on inbound leads"
];

const benchmarkItems = [
  "30-50% of leads never followed up",
  "Typical response time: 1-4 hours",
  "<20% conversion without structured follow-up"
];

const beforeItems = [
  "Leads responded to in 2-4 hours",
  "30-50% not followed up",
  "No structured pipeline",
  "15-20 hours/week manual admin"
];

const afterItems = [
  "<2 minute response (SMS, WhatsApp, Messenger, Email)",
  "100% lead capture",
  "AI qualification + scoring",
  "Automated follow-ups",
  "Booking integrated"
];

const workflowInputs = [
  "Website Forms",
  "Facebook Ads",
  "WhatsApp",
  "Messenger",
  "Phone Calls"
];

const workflowSteps = [
  "Instant Response (<2 min)",
  "AI Qualification",
  "Lead Scoring",
  "Auto Routing",
  "Follow-up Sequences",
  "Booking Trigger",
  "CRM Pipeline",
  "Revenue"
];

const industryImpactCards = [
  {
    title: "Local Service Businesses",
    icon: Wrench,
    meta: "80-120 inbound enquiries/month",
    points: [
      "Missed calls -> instant SMS follow-up",
      "Auto booking + multi-step follow-up"
    ],
    impact: "+$3K-$7K/month increase"
  },
  {
    title: "Rental / Letting Agencies",
    icon: House,
    meta: "40-80 enquiries per property portfolio",
    points: [
      "Instant WhatsApp response + lead qualification",
      "Automated viewing booking + follow-ups"
    ],
    impact: "+1-2 extra lets/month | +$4K-$12K/month"
  },
  {
    title: "Clinics & Med Spas",
    icon: Stethoscope,
    meta: "60-100 leads/month",
    points: [
      "Lead qualification + nurture sequences",
      "Automated booking + reminders"
    ],
    impact: "+$2K-$5K/month increase"
  }
];

const pricingCards = [
  {
    title: "Starter System",
    subline: "Best for businesses who want to capture and respond to every lead automatically without manual follow-up",
    priceMain: "$297",
    priceSuffix: "/month",
    setupLine: "No setup fee",
    details: [],
    whatThisDoes: [
      { icon: Gauge, text: "Captures every inbound lead" },
      { icon: MessageSquareText, text: "Sends an instant reply so no enquiry is missed" },
      { icon: Layers3, text: "Keeps all conversations in one place" }
    ],
    includes: [
      "Lead capture system",
      "Instant response (SMS, WhatsApp, Messenger, Email)",
      "Basic follow-up reminders",
      "CRM access (lead tracking)"
    ],
    cta: "Start with a simple system"
  },
  {
    title: "Growth System",
    subline: "Best for businesses ready to turn more enquiries into booked customers and consistent monthly revenue",
    priceMain: "$2,000",
    priceSuffix: " setup",
    secondaryPrice: "$500/month",
    setupLine: "7-14 day implementation",
    details: ["50% upfront, 50% on completion"],
    whatThisDoes: [
      { icon: BadgeDollarSign, text: "Converts more inbound leads into booked jobs" },
      { icon: Sparkles, text: "Qualifies and prioritises the best opportunities" },
      { icon: CalendarCheck2, text: "Follows up automatically until a lead books or drops off" }
    ],
    includes: [
      "Full system build (end-to-end)",
      "Lead qualification & scoring",
      "Multi-step follow-up sequences (7-30 days)",
      "Booking system integration",
      "CRM + pipeline setup",
      "Multi-channel automation (SMS, WhatsApp, Messenger, Email)"
    ],
    impact: "Most businesses see more leads turning into booked jobs within the first 2-4 weeks - without increasing ad spend.",
    cta: "Get your custom system",
    featured: true,
    badge: "Most Popular"
  },
  {
    title: "Custom Systems",
    subline: "Best for businesses that need a more tailored system to match how they already operate",
    priceMain: "From $2,500+",
    priceSuffix: "",
    setupLine: "",
    details: [],
    whatThisDoes: [
      { icon: Layers3, text: "Adapts the system to your specific processes" },
      { icon: Gauge, text: "Supports more complex lead flows" },
      { icon: Bot, text: "Builds on top of the core system" }
    ],
    includes: [
      "Additional workflows and automation",
      "Custom integrations",
      "Extended system setup",
      "Ongoing optimisation"
    ],
    cta: "Request custom plan"
  }
];

const highlightedTools = new Set([
  "Codex",
  "GPT",
  "Gemini",
  "Claude",
  "DeepSeek",
  "Grok",
  "Perplexity",
  "ElevenLabs",
  "Google Veo",
  "Sora"
]);

const faqItemsEn = [
  {
    question: "What exactly does FlowOps build?",
    answer: "We design and implement automated systems that handle key parts of your business - from capturing enquiries and responding to customers, to managing workflows, bookings, and internal operations.\n\nEach system is built around how your business actually runs - not a generic template."
  },
  {
    question: "Is this just chatbots or something more?",
    answer: "Much more.\n\nConversational AI is just one part. The real value is the system behind it - connecting your channels, applying logic, making decisions, and triggering actions automatically.\n\nIt's not just responding - it's running processes."
  },
  {
    question: "Will this work for my business?",
    answer: "If your business relies on leads, enquiries, bookings, or repeat processes, then yes.\n\nThe example shown is just one use case - the same system can be adapted to different industries and workflows."
  },
  {
    question: "How does the system actually work?",
    answer: "At a high level, the system:\n\n• Captures incoming enquiries\n• Responds instantly\n• Applies rules and checks conditions\n• Executes actions (bookings, updates, notifications)\n• Keeps everything synchronised across platforms\n\nAll of this happens automatically, in one continuous flow."
  },
  {
    question: "Do you replace the tools we already use?",
    answer: "No.\n\nIn most cases, we work with the tools you already have.\n\nThe goal isn't to replace everything - it's to connect and orchestrate your existing systems so they work together automatically."
  },
  {
    question: "Can this work with our current website and booking setup?",
    answer: "Yes.\n\nWe design systems to integrate with your existing setup - whether that's your website, booking platforms, CRM, or messaging channels."
  },
  {
    question: "Is the system custom or template-based?",
    answer: "Every system is tailored to your business.\n\nWe use proven structures and frameworks, but the final system is designed around your workflows, processes, and goals."
  },
  {
    question: "How much involvement is required from my side?",
    answer: "Very little.\n\nWe handle the design, build, and implementation. Your input is mainly to help us understand your business and define the outcomes you want."
  },
  {
    question: "Will customers know they're talking to AI?",
    answer: "In most cases, no.\n\nThe system is designed to feel natural, helpful, and aligned with your brand.\n\nWhere needed, it can hand over to a human seamlessly."
  },
  {
    question: "What happens if the system makes a mistake?",
    answer: "Every system is built with rules, safeguards, and validation layers to minimise errors.\n\nFor more sensitive actions, we can include approval steps or human oversight."
  },
  {
    question: "How quickly will I start seeing results?",
    answer: "Usually straight away.\n\nAs soon as the system goes live, it begins capturing opportunities, responding to enquiries, and handling tasks automatically."
  },
  {
    question: "How do I know this will be worth the investment?",
    answer: "We focus on systems that directly impact revenue and efficiency.\n\nThat could mean capturing more opportunities, increasing conversion, or reducing manual workload - often all three.\n\nMost businesses see value quickly because the system starts working immediately."
  },
  {
    question: "Can the system grow as my business grows?",
    answer: "Yes.\n\nYour system is built as a flexible foundation that can expand over time - adding new workflows, integrations, and capabilities as your business evolves."
  },
  {
    question: "What happens after launch?",
    answer: "We continue to support, optimise, and improve your system.\n\nThis includes monitoring performance, refining workflows, and expanding capabilities as needed."
  },
  {
    question: "How is pricing structured?",
    answer: "Pricing depends on the complexity of the system and the level of automation required.\n\nTypically, there is an initial setup and an ongoing monthly fee for support and optimisation."
  },
  {
    question: "What's the next step?",
    answer: "We start with a short discovery call to understand your business and identify where a system will have the biggest impact.\n\nFrom there, we outline a clear approach tailored to you."
  }
];

const systemInActionItemsEn = [
  {
    title: "Enquiry captured",
    body: "Every message from your website, ads, or social channels is captured instantly."
  },
  {
    title: "Instant response",
    body: "Leads receive an immediate response, keeping them engaged."
  },
  {
    title: "Availability checked",
    body: "Availability and key details are verified automatically across your systems."
  },
  {
    title: "Booking confirmed",
    body: "The booking is secured and the customer moves forward."
  },
  {
    title: "Follow-ups handled",
    body: "Reminders, updates, and changes happen automatically."
  }
];

const localizedContent = {
  en: {
    navHowItWorks: "How It Works",
    cta: "Get Your Free Plan",
    heroBrand: "FlowOps Studio",
    heroHeadlineLines: ['MORE LEADS.', 'MORE BOOKINGS.', 'LESS WORK.'],
    heroSubheadline: "Capture every enquiry, respond instantly, and turn more leads into bookings — automatically.",
    heroSupportingHighlight: "30 Minutes",
    heroSupportingRest: ", we'll build a custom plan to help you convert more leads.",
    heroTrustItems: ["No credit card", "30-min session", "No obligation"],
    sections: finalizedSectionDataEn,
    exampleDescriptor: "SYSTEM IN ACTION",
    exampleHeading: "From enquiry to booking - fully automated",
    exampleSupporting: "See how enquiries are captured, responded to, and turned into bookings - automatically.",
    exampleContext: "Real rental business example - but the same system works for any enquiry-driven business.",
    exampleItems: systemInActionItemsEn,
    exampleClosing: "Your business - running on systems, not manual effort.",
    toolsDescriptor: "BUILT WITH INDUSTRY-LEADING TOOLS",
    toolsHeading: "Proven tools - built to perform",
    toolsSupporting: "We use the right platforms, models, and automations to build systems that are fast, reliable, and scalable.",
    toolsMicroline: "We continuously update and maintain your system as tools evolve - so you never fall behind.",
    toolsLabels: ["Models", "Automation", "Build & Data", "Ops & Hospitality", "Voice & Media"],
    howDescriptor: "HOW IT WORKS",
    howHeading: "From first enquiry to fully automated — without the complexity",
    howSupporting: "We design and build everything for you - so it runs smoothly without you having to manage it.",
    howPreline: "Simple process. We handle the complexity.",
    howSteps: howItWorksStepsEn,
    faqDescriptor: "FAQ",
    faqHeading: "Everything you need to know",
    faqSupporting: "Clear answers to help you understand how the system works, what to expect, and how it fits your business.",
    faqItems: faqItemsEn,
    faqOutroHeading: "Still have questions?",
    faqOutroText: "We'll walk you through exactly how a system would work for your business.",
    finalDescriptor: "GET STARTED",
    finalHeading: "See how a custom FlowOps system would work for your business.",
    finalSupporting: "We'll walk you through the clearest opportunities, the right system structure, and exactly how it would work for your business.",
    finalMicroline: "No commitment - just a clear plan tailored to your business.",
    footerPlaceholder: "Footer placeholder for final links, contact details, and legal information."
  },
  th: {
    navHowItWorks: "วิธีการทำงาน",
    cta: "รับแผนเฉพาะสำหรับธุรกิจคุณ",
    heroBrand: "FlowOps Studio",
    heroHeadlineLines: ['ลีดมากขึ้น', 'ยอดจองมากขึ้น', 'ทำงานอัตโนมัติเต็มรูปแบบ'],
    heroSubheadline: "เก็บทุกการติดต่อ ตอบกลับทันที และเปลี่ยนลีดให้เป็นการจองที่ยืนยันแล้ว — แบบอัตโนมัติ",
    heroSupporting: "เราจะพาคุณดูว่าระบบนี้สามารถทำงานกับธุรกิจของคุณได้อย่างไร",
    heroMicrolineAccent: "ไม่มีแรงกดดัน",
    heroMicrolineRest: "ไม่มีข้อผูกมัด",
    sections: [
      { descriptor: "ระบบเก็บลีดด้วย AI", headline: "เก็บทุกการติดต่อได้อัตโนมัติ แม้ตอนคุณออฟไลน์", subheading: "เราสร้างระบบที่รวม DM ฟอร์ม และสายโทรเข้าไว้ในโฟลว์เดียว เพื่อให้ทุกโอกาสถูกติดตามและจัดการ", microline: "ไม่พลาดโอกาสสำคัญอีกต่อไป", video: finalizedSectionDataEn[0].video, bgImage: finalizedSectionDataEn[0].bgImage },
      { descriptor: "ระบบแชตและเสียงด้วย AI", headline: "ตอบทันทีและดูแลทุกลีดโดยไม่ต้องลงมือเอง", subheading: "ระบบของคุณทำหน้าที่เหมือนฟรอนต์เดสก์ คอยตอบคำถาม คัดกรองลีด และพาบทสนทนาเดินหน้าทั้งผ่านแชตและเสียง", microline: "บทสนทนาถูกดูแลให้คุณตลอด 24/7", video: finalizedSectionDataEn[1].video, bgImage: finalizedSectionDataEn[1].bgImage },
      { descriptor: "ระบบแปลงผลและการจองอัตโนมัติ", headline: "คัดกรองลีดและเปลี่ยนให้เป็นการจองที่ยืนยันแล้วโดยอัตโนมัติ", subheading: "ลีดที่ผ่านการคัดกรองจะถูกพาไปสู่ขั้นตอนถัดไป ไม่ว่าจะเป็นการโทร นัดหมาย หรือการจอง และถูกบันทึกลงปฏิทินของคุณโดยตรง", microline: "เปลี่ยนความสนใจให้กลายเป็นการจองจริง", video: finalizedSectionDataEn[2].video, bgImage: finalizedSectionDataEn[2].bgImage },
      { descriptor: "ระบบอัตโนมัติเวิร์กโฟลว์", headline: "ลดงานที่ทำด้วยมือและให้ระบบทำงานประจำวันแทน", subheading: "ตั้งแต่การติดตามผลไปจนถึงกระบวนการภายใน ทุกอย่างถูกจัดการอัตโนมัติ เพื่อให้ธุรกิจเดินหน้าได้โดยไม่ต้องคอยป้อนงานตลอดเวลา", microline: "ให้ธุรกิจเดินต่อได้โดยไม่ต้องใช้แรงตลอดเวลา", video: finalizedSectionDataEn[3].video, bgImage: finalizedSectionDataEn[3].bgImage },
      { descriptor: "เว็บไซต์ที่คอนเวิร์ตสูง", headline: "เปลี่ยนผู้เข้าชมให้เป็นลีดได้มากขึ้นด้วยเว็บไซต์ที่ทำงานได้จริง", subheading: "เราออกแบบและพัฒนาเว็บไซต์ที่เร็ว ทันสมัย และสร้างความเชื่อมั่น พร้อมเชื่อมต่อเข้ากับระบบของคุณอย่างไร้รอยต่อ", microline: "เว็บไซต์ที่สร้างมาเพื่อคอนเวิร์ต ไม่ใช่แค่สวย", video: finalizedSectionDataEn[4].video, bgImage: finalizedSectionDataEn[4].bgImage }
    ],
    exampleDescriptor: "ระบบที่กำลังทำงาน",
    exampleHeading: "ตัวอย่างการติดตั้งระบบ",
    exampleSupporting: "นี่คือตัวอย่างหนึ่งของวิธีที่ FlowOps จับโอกาสทางธุรกิจ จัดการบทสนทนา ตรวจสอบการตัดสินใจ และดำเนินงานต่อเนื่องในโฟลว์เดียว",
    exampleItems: [
      { title: "รับโอกาสทันที", body: "ทุกการติดต่อถูกเก็บเข้าระบบและส่งต่อไปยังโฟลว์อัตโนมัติทันที" },
      { title: "บทสนทนาอัจฉริยะ", body: "ระบบตอบกลับทันที เข้าใจเจตนา และพาลูกค้าเดินหน้าไปยังขั้นต่อไป" },
      { title: "ตรวจสอบและยืนยัน", body: "ความพร้อม เงื่อนไข และลอจิกต่าง ๆ ถูกตรวจสอบอัตโนมัติข้ามแพลตฟอร์มที่เชื่อมต่อ" },
      { title: "ดำเนินการต่อทันที", body: "เมื่อยืนยันแล้ว ระบบจะจองให้เสร็จและสั่งงานขั้นตอนถัดไปโดยอัตโนมัติ" },
      { title: "อัปเดตต่อเนื่อง", body: "ข้อมูลความพร้อม สถานะ และระบบที่เชื่อมต่อจะอัปเดตแบบเรียลไทม์เพื่อป้องกันความขัดแย้ง" }
    ],
    exampleClosing: "นี่เป็นเพียงตัวอย่างหนึ่งของวิธีที่ระบบ FlowOps ทำงาน โครงสร้างแบบเดียวกันนี้สามารถปรับใช้กับการรับลีด การให้บริการ ซัพพอร์ตลูกค้า และงานปฏิบัติการได้",
    toolsDescriptor: "สร้างด้วยเครื่องมือชั้นนำของอุตสาหกรรม",
    toolsHeading: "เลือกโมเดล เครื่องมือ และระบบที่เหมาะกับงานที่สุด",
    toolsSupporting: "เราทำงานกับสแตกที่กว้างและเปลี่ยนแปลงตลอดเวลา ผสานโมเดล ออโตเมชัน แพลตฟอร์ม และซอฟต์แวร์ที่ดีที่สุด เพื่อสร้างระบบที่เหมาะกับธุรกิจของคุณจริง ๆ และปรับอัปเดตตามตลาดที่พัฒนาอยู่เสมอ",
    toolsMicroline: "ทุกอย่างถูกเลือกตามความเหมาะสม ประสิทธิภาพ และความเสถียรระยะยาว",
    toolsLabels: ["โมเดล", "อัตโนมัติ", "พัฒนาและข้อมูล", "ระบบธุรกิจและการบริการ", "เสียงและมีเดีย"],
    howDescriptor: "วิธีการทำงาน",
    howHeading: "จากการติดต่อครั้งแรกสู่ระบบอัตโนมัติเต็มรูปแบบ — โดยไม่ซับซ้อน",
    howSupporting: "เราออกแบบและสร้างระบบเฉพาะสำหรับธุรกิจของคุณ เพื่อให้ทุกอย่างทำงานได้ลื่นไหล อัตโนมัติ และไม่ต้องพึ่งงานแมนนวล",
    howSteps: [
      { label: "ค้นหา", title: "เราเข้าใจว่าธุรกิจของคุณทำงานอย่างไร", body: "เราดูว่าลีดเข้ามาทางไหน โอกาสหายไปตรงไหน และธุรกิจต้องการอะไรเพื่อให้ทำงานได้มีประสิทธิภาพขึ้น" },
      { label: "สร้าง", title: "เราสร้างระบบเฉพาะของคุณ", body: "เราออกแบบ ทดสอบ และเชื่อมทุกอย่างเข้าด้วยกัน ตั้งแต่การรับลีด บทสนทนา การจอง และอัตโนมัติ ให้กลายเป็นระบบเดียว" },
      { label: "เปิดใช้", title: "ทุกอย่างทำงานอัตโนมัติ — พร้อมผลลัพธ์ที่ดีขึ้น", body: "ระบบของคุณจัดการงานประจำวันอัตโนมัติ เพื่อให้คุณโฟกัสกับการส่งมอบ การเติบโต และงานมูลค่าสูงกว่า" },
      { label: "ปรับปรุง", title: "ระบบของคุณพัฒนาและดีขึ้นได้ต่อเนื่อง", body: "เราปรับแต่งและเพิ่มประสิทธิภาพระบบจากข้อมูลการใช้งานจริง เพื่อให้ให้ผลลัพธ์ที่ดีขึ้นเมื่อธุรกิจเติบโต" }
    ],
    faqDescriptor: "คำถามที่พบบ่อย",
    faqHeading: "ทุกสิ่งที่คุณควรรู้ก่อนเริ่มต้น",
    faqSupporting: "คำตอบที่ชัดเจน เข้าใจง่าย และไม่มีคำโฆษณาเกินจริง เพื่อให้คุณเห็นว่าระบบนี้เข้ากับธุรกิจของคุณอย่างไร",
    faqItems: [
      { question: "FlowOps สร้างอะไรให้บ้าง?", answer: "เราออกแบบและติดตั้งระบบอัตโนมัติที่จัดการส่วนสำคัญของธุรกิจคุณ ตั้งแต่การเก็บลีด การตอบลูกค้า ไปจนถึงเวิร์กโฟลว์ การจอง และงานปฏิบัติการภายใน\n\nทุกระบบถูกสร้างตามวิธีการทำงานจริงของธุรกิจคุณ ไม่ใช่เทมเพลตสำเร็จรูป" },
      { question: "นี่เป็นแค่แชตบอตหรือมากกว่านั้น?", answer: "มากกว่านั้นมาก\n\nAI สนทนาเป็นเพียงส่วนหนึ่ง คุณค่าจริงอยู่ที่ระบบเบื้องหลังซึ่งเชื่อมช่องทางต่าง ๆ ใช้ลอจิก ตัดสินใจ และสั่งงานอัตโนมัติ\n\nมันไม่ใช่แค่การตอบกลับ แต่มันคือการทำให้กระบวนการเดินเอง" },
      { question: "ระบบนี้ใช้กับธุรกิจของฉันได้ไหม?", answer: "ถ้าธุรกิจของคุณมีลีด การสอบถาม การจอง หรือกระบวนการซ้ำ ๆ คำตอบคือได้\n\nตัวอย่างที่แสดงเป็นเพียงหนึ่งกรณีเท่านั้น โครงสร้างระบบเดียวกันนี้สามารถปรับใช้ได้กับหลายอุตสาหกรรม เวิร์กโฟลว์ และโมเดลธุรกิจ" },
      { question: "ระบบทำงานจริงอย่างไร?", answer: "ในภาพรวม ระบบจะ:\n\nรับโอกาสที่เข้ามา\nตอบกลับและโต้ตอบแบบเรียลไทม์\nใช้กฎและตรวจสอบเงื่อนไข\nดำเนินการต่อ (การจอง การอัปเดต การแจ้งเตือน ฯลฯ)\nรักษาข้อมูลให้ซิงก์กันข้ามแพลตฟอร์ม\n\nทั้งหมดนี้เกิดขึ้นอัตโนมัติในโฟลว์เดียวต่อเนื่อง" },
      { question: "ต้องเปลี่ยนเครื่องมือที่ใช้อยู่หรือไม่?", answer: "ไม่จำเป็น — ส่วนใหญ่แล้วเราทำงานร่วมกับเครื่องมือที่คุณมีอยู่แล้ว\n\nเป้าหมายไม่ใช่การรื้อทุกอย่างออก แต่คือการเชื่อมและจัดระบบเครื่องมือเดิมให้ทำงานร่วมกันแบบอัตโนมัติ" },
      { question: "เชื่อมกับเว็บไซต์และระบบจองปัจจุบันได้ไหม?", answer: "ได้\n\nเราออกแบบระบบให้เชื่อมกับสิ่งที่คุณใช้อยู่ ไม่ว่าจะเป็นเว็บไซต์ แพลตฟอร์มจอง CRM หรือช่องทางข้อความต่าง ๆ\n\nระบบจะวางทับอยู่ด้านบนและเชื่อมทุกอย่างให้ทำงานต่อเนื่องกัน" },
      { question: "ระบบเป็นแบบเฉพาะหรือเทมเพลต?", answer: "ทุกระบบถูกปรับให้เหมาะกับธุรกิจของคุณ\n\nเราใช้โครงสร้างและเฟรมเวิร์กที่พิสูจน์แล้ว แต่ผลลัพธ์สุดท้ายจะถูกออกแบบตามเวิร์กโฟลว์ กระบวนการ และเป้าหมายของคุณ" },
      { question: "ฉันต้องมีส่วนร่วมมากแค่ไหน?", answer: "น้อยมาก\n\nเราดูแลการออกแบบ การพัฒนา และการติดตั้งทั้งหมด สิ่งที่เราต้องการจากคุณหลัก ๆ คือการทำความเข้าใจธุรกิจและผลลัพธ์ที่คุณต้องการ" },
      { question: "ลูกค้าจะรู้ไหมว่ากำลังคุยกับ AI?", answer: "ส่วนใหญ่ไม่รู้\n\nระบบถูกออกแบบให้เป็นธรรมชาติ มีประโยชน์ และสอดคล้องกับแบรนด์ของคุณ ลูกค้าจะรู้สึกเพียงว่าได้รับคำตอบที่เร็วและแม่นยำ\n\nหากจำเป็น ระบบสามารถส่งต่อให้มนุษย์ได้อย่างลื่นไหล" },
      { question: "ถ้าระบบทำผิดพลาดจะเกิดอะไรขึ้น?", answer: "ทุกระบบถูกสร้างพร้อมกฎ ตัวป้องกัน และชั้นตรวจสอบเพื่อลดความผิดพลาดให้มากที่สุด\n\nสำหรับการกระทำที่อ่อนไหวมากขึ้น เราสามารถเพิ่มขั้นตอนอนุมัติหรือให้มนุษย์ตรวจสอบได้" },
      { question: "จะเริ่มเห็นผลเร็วแค่ไหน?", answer: "โดยมากคือทันที\n\nทันทีที่ระบบเปิดใช้งาน มันจะเริ่มเก็บโอกาส ตอบคำถาม และจัดการงานต่าง ๆ โดยอัตโนมัติ" },
      { question: "จะรู้ได้อย่างไรว่าคุ้มค่ากับการลงทุน?", answer: "เราโฟกัสที่ระบบซึ่งส่งผลโดยตรงต่อรายได้และประสิทธิภาพ\n\nนั่นอาจหมายถึงการเก็บโอกาสได้มากขึ้น เพิ่มอัตราคอนเวิร์ต หรือช่วยลดงานแมนนวล ธุรกิจส่วนใหญ่มองเห็นคุณค่าได้เร็ว เพราะระบบเริ่มทำงานทันที" },
      { question: "ระบบเติบโตไปพร้อมธุรกิจได้ไหม?", answer: "ได้\n\nแต่ละระบบถูกออกแบบให้เป็นฐานที่ยืดหยุ่นและขยายต่อได้ เพิ่มเวิร์กโฟลว์ อินทิเกรชัน และความสามารถใหม่ ๆ ได้เมื่อธุรกิจของคุณเติบโต" },
      { question: "หลังเปิดใช้งานแล้วเกิดอะไรขึ้นต่อ?", answer: "เรายังคงดูแล ปรับปรุง และพัฒนาระบบต่อเนื่อง\n\nรวมถึงการติดตามประสิทธิภาพ ปรับเวิร์กโฟลว์ และขยายความสามารถตามความจำเป็น" },
      { question: "โครงสร้างราคาคิดอย่างไร?", answer: "ราคาขึ้นอยู่กับความซับซ้อนของระบบและระดับอัตโนมัติที่ต้องการ\n\nโดยทั่วไปจะมีค่าติดตั้งเริ่มต้น และค่าบริการรายเดือนสำหรับการดูแลและปรับปรุง" },
      { question: "ขั้นตอนต่อไปคืออะไร?", answer: "เราเริ่มด้วยการพูดคุยสั้น ๆ เพื่อเข้าใจธุรกิจของคุณ และดูว่าระบบจะสร้างผลกระทบได้มากที่สุดตรงไหน\n\nจากนั้นเราจะสรุปแนวทางที่ชัดเจนและเหมาะกับคุณ" }
    ],
    finalDescriptor: "เริ่มต้น",
    finalHeading: "ดูว่าระบบ FlowOps แบบเฉพาะจะทำงานกับธุรกิจของคุณอย่างไร",
    finalSupporting: "เราจะพาคุณดูโอกาสที่ชัดที่สุด โครงสร้างระบบที่เหมาะสม และภาพรวมการติดตั้งสำหรับธุรกิจของคุณ",
    footerPlaceholder: "พื้นที่ชั่วคราวสำหรับลิงก์ท้ายเว็บไซต์ ช่องทางติดต่อ และข้อมูลทางกฎหมาย"
  },
  de: {
    navHowItWorks: "So funktioniert es",
    cta: "Ihren individuellen Plan anfordern",
    heroBrand: "FlowOps Studio",
    heroHeadlineLines: ['MEHR LEADS.', 'MEHR BUCHUNGEN.', 'VOLL AUTOMATISIERT.'],
    heroSubheadline: "Erfassen Sie jede Anfrage, antworten Sie sofort und verwandeln Sie mehr Leads automatisch in bestätigte Buchungen.",
    heroSupporting: "Wir zeigen Ihnen, wie das für Ihr Unternehmen funktionieren könnte.",
    heroMicrolineAccent: "Kein Druck.",
    heroMicrolineRest: "Keine Verpflichtung.",
    sections: [
      { descriptor: "KI-gestützte Lead-Erfassung", headline: "Erfassen Sie jede Anfrage automatisch — auch wenn Sie offline sind", subheading: "Wir bauen Systeme, die Ihre DMs, Formulare und eingehenden Anrufe in einem nahtlosen Erfassungsfluss zusammenführen, damit jede Chance verfolgt und bearbeitet wird.", microline: "Verpassen Sie nie wieder eine Gelegenheit", video: finalizedSectionDataEn[0].video, bgImage: finalizedSectionDataEn[0].bgImage },
      { descriptor: "KI-Chat- & Sprachsysteme", headline: "Antworten Sie sofort und betreuen Sie jeden Lead, ohne einen Finger zu rühren", subheading: "Ihr System fungiert als Empfang — beantwortet Fragen, qualifiziert Leads und führt Gespräche in Echtzeit über Chat und Sprache.", microline: "Gespräche werden 24/7 für Sie geführt", video: finalizedSectionDataEn[1].video, bgImage: finalizedSectionDataEn[1].bgImage },
      { descriptor: "Automatisierte Konvertierung & Buchung", headline: "Qualifizieren Sie Leads automatisch und verwandeln Sie sie in bestätigte Buchungen", subheading: "Qualifizierte Leads werden zum nächsten Schritt geführt — sei es ein Anruf, Termin oder eine Reservierung — und direkt in Ihren Kalender gebucht.", microline: "Interesse in bestätigte Buchungen verwandeln", video: finalizedSectionDataEn[2].video, bgImage: finalizedSectionDataEn[2].bgImage },
      { descriptor: "Workflow-Automatisierungssystem", headline: "Reduzieren Sie manuelle Arbeit und lassen Sie Ihre Systeme den Alltag steuern", subheading: "Von Follow-ups bis zu internen Prozessen wird alles automatisch abgewickelt — damit Ihr Unternehmen ohne ständigen Input weiterläuft.", microline: "Führen Sie Ihr Unternehmen ohne ständigen Aufwand", video: finalizedSectionDataEn[3].video, bgImage: finalizedSectionDataEn[3].bgImage },
      { descriptor: "Website mit hoher Conversion", headline: "Verwandeln Sie mehr Besucher mit einer leistungsstarken Website in Leads", subheading: "Wir gestalten und entwickeln schnelle, moderne Websites, die Aufmerksamkeit erzeugen, Vertrauen aufbauen und sich nahtlos mit Ihrem System verbinden.", microline: "Eine Website, die konvertiert — nicht nur gut aussieht", video: finalizedSectionDataEn[4].video, bgImage: finalizedSectionDataEn[4].bgImage }
    ],
    exampleDescriptor: "System in Aktion",
    exampleHeading: "Beispiel für eine System-Implementierung",
    exampleSupporting: "Ein Beispiel dafür, wie FlowOps Chancen erfasst, Gespräche führt, Entscheidungen validiert und Aktionen in einem durchgehenden Ablauf ausführt.",
    exampleItems: [
      { title: "Chance erfasst", body: "Jede Anfrage wird sofort erfasst und in das System geleitet." },
      { title: "Intelligentes Gespräch", body: "Das System antwortet sofort, versteht die Absicht und bringt den Kunden voran." },
      { title: "Entscheidung & Validierung", body: "Verfügbarkeit, Bedingungen und Logik werden automatisch über verbundene Plattformen geprüft." },
      { title: "Ausführung der Aktion", body: "Nach Bestätigung schließt das System die Buchung ab und löst die nächsten Schritte aus." },
      { title: "Laufende Updates", body: "Verfügbarkeiten, Datensätze und verbundene Systeme werden in Echtzeit aktualisiert, um Konflikte zu vermeiden." }
    ],
    exampleClosing: "Dies ist ein Beispiel dafür, wie ein FlowOps-System arbeitet — dieselbe Struktur kann für Lead-Handling, Leistungserbringung, Kundensupport und Betriebsabläufe angepasst werden.",
    toolsDescriptor: "Mit branchenführenden Tools gebaut",
    toolsHeading: "Die richtigen Modelle, Tools und Systeme — passend für die Aufgabe ausgewählt.",
    toolsSupporting: "Wir arbeiten mit einem breiten und sich ständig weiterentwickelnden Stack und kombinieren die besten Modelle, Automatisierungen, Plattformen und Software, um das System zu bauen, das Ihr Unternehmen wirklich braucht — und aktualisieren diesen Stack, wenn sich der Markt weiterentwickelt.",
    toolsMicroline: "Immer gewählt nach Eignung, Leistung und langfristiger Zuverlässigkeit.",
    toolsLabels: ["Modelle", "Automatisierung", "Build & Daten", "Betrieb & Hospitality", "Sprache & Medien"],
    howDescriptor: "So funktioniert es",
    howHeading: "Von der ersten Anfrage bis voll automatisiert — ohne die Komplexität",
    howSupporting: "Wir entwerfen und bauen ein maßgeschneidertes System rund um Ihr Unternehmen — damit alles reibungslos, automatisch und ohne manuellen Aufwand läuft.",
    howSteps: [
      { label: "ANALYSIEREN", title: "Wir verstehen, wie Ihr Unternehmen funktioniert", body: "Wir prüfen, wie Anfragen eingehen, wo Chancen verloren gehen und was Ihr Unternehmen braucht, um effizienter zu arbeiten." },
      { label: "BAUEN", title: "Wir bauen Ihr individuelles System", body: "Wir entwerfen, testen und verbinden alles — Lead-Erfassung, Gespräche, Buchungen und Automatisierung — zu einem nahtlosen System." },
      { label: "AKTIVIEREN", title: "Alles läuft automatisch — mit besseren Ergebnissen", body: "Ihr System übernimmt den Alltag automatisch, damit Sie sich auf Leistung, Wachstum und wertvollere Arbeit konzentrieren können." },
      { label: "OPTIMIEREN", title: "Ihr System verbessert sich und entwickelt sich weiter", body: "Wir verfeinern, justieren und optimieren Ihr System anhand echter Leistungsdaten, damit es mit Ihrem Unternehmen weiter bessere Ergebnisse liefert." }
    ],
    faqDescriptor: "FAQ",
    faqHeading: "Alles, was Sie vor dem Start wissen sollten.",
    faqSupporting: "Klare Antworten, geringe Reibung und keine übertriebenen Versprechen — genau genug, um zu verstehen, wie das System zu Ihrem Unternehmen passt.",
    faqItems: faqItemsEn,
    finalDescriptor: "Loslegen",
    finalHeading: "Sehen Sie, wie ein individuelles FlowOps-System für Ihr Unternehmen funktionieren würde.",
    finalSupporting: "Wir zeigen Ihnen die klarsten Chancen, die passende Systemstruktur und wie eine Umsetzung für Ihr Unternehmen aussehen könnte.",
    footerPlaceholder: "Footer-Platzhalter für finale Links, Kontaktdaten und rechtliche Informationen."
  },
  es: {
    navHowItWorks: "Cómo funciona",
    cta: "Obtén tu plan personalizado",
    heroBrand: "FlowOps Studio",
    heroHeadlineLines: ['MÁS LEADS.', 'MÁS RESERVAS.', 'TOTALMENTE AUTOMATIZADO.'],
    heroSubheadline: "Captura cada consulta, responde al instante y convierte más leads en reservas confirmadas — automáticamente.",
    heroSupporting: "Te mostraremos cómo podría funcionar esto para tu negocio.",
    heroMicrolineAccent: "Sin presión.",
    heroMicrolineRest: "Sin compromiso.",
    sections: [
      { descriptor: "Captación de leads con IA", headline: "Captura cada consulta automáticamente — incluso cuando estás offline", subheading: "Construimos sistemas que unifican tus DMs, formularios y llamadas entrantes en un flujo de captura continuo, para que cada oportunidad quede registrada y atendida.", microline: "No vuelvas a perder una oportunidad", video: finalizedSectionDataEn[0].video, bgImage: finalizedSectionDataEn[0].bgImage },
      { descriptor: "Sistemas de chat y voz con IA", headline: "Responde al instante y atiende cada lead sin mover un dedo", subheading: "Tu sistema actúa como tu recepción: responde preguntas, califica leads y guía conversaciones en tiempo real por chat y voz.", microline: "Conversaciones gestionadas por ti, 24/7", video: finalizedSectionDataEn[1].video, bgImage: finalizedSectionDataEn[1].bgImage },
      { descriptor: "Conversión y reservas automatizadas", headline: "Califica leads automáticamente y conviértelos en reservas confirmadas", subheading: "Los leads cualificados avanzan al siguiente paso — ya sea una llamada, una cita o una reserva — y se añaden directamente a tu calendario.", microline: "Convierte el interés en reservas confirmadas", video: finalizedSectionDataEn[2].video, bgImage: finalizedSectionDataEn[2].bgImage },
      { descriptor: "Sistema de automatización de flujos", headline: "Elimina trabajo manual y deja que tus sistemas gestionen el día a día", subheading: "Desde seguimientos hasta procesos internos, todo se gestiona automáticamente para que tu negocio siga avanzando sin intervención constante.", microline: "Haz funcionar tu negocio con menos esfuerzo constante", video: finalizedSectionDataEn[3].video, bgImage: finalizedSectionDataEn[3].bgImage },
      { descriptor: "Sitio web de alta conversión", headline: "Convierte más visitantes en leads con un sitio web de alto rendimiento", subheading: "Diseñamos y desarrollamos sitios rápidos y modernos que captan atención, generan confianza y se conectan perfectamente con tu sistema.", microline: "Un sitio web hecho para convertir, no solo para verse bien", video: finalizedSectionDataEn[4].video, bgImage: finalizedSectionDataEn[4].bgImage }
    ],
    exampleDescriptor: "Sistema en acción",
    exampleHeading: "Ejemplo de implementación de sistema",
    exampleSupporting: "Un ejemplo de cómo FlowOps capta oportunidades, gestiona conversaciones, valida decisiones y ejecuta acciones en un flujo continuo.",
    exampleItems: [
      { title: "Oportunidad capturada", body: "Cada consulta se capta al instante y se envía al sistema." },
      { title: "Conversación inteligente", body: "El sistema responde inmediatamente, entiende la intención y hace avanzar al cliente." },
      { title: "Decisión y validación", body: "La disponibilidad, las condiciones y la lógica se comprueban automáticamente en plataformas conectadas." },
      { title: "Ejecución de acciones", body: "Una vez confirmado, el sistema completa la reserva y activa los siguientes pasos." },
      { title: "Actualizaciones continuas", body: "La disponibilidad, los registros y los sistemas conectados se actualizan en tiempo real para evitar conflictos." }
    ],
    exampleClosing: "Este es un ejemplo de cómo opera un sistema FlowOps — la misma estructura puede adaptarse a gestión de leads, entrega de servicios, soporte al cliente y operaciones.",
    toolsDescriptor: "Construido con herramientas líderes del sector",
    toolsHeading: "Los modelos, herramientas y sistemas adecuados — seleccionados para cada trabajo.",
    toolsSupporting: "Trabajamos con un stack amplio y en constante evolución, combinando los mejores modelos, automatizaciones, plataformas y software para construir el sistema que tu negocio realmente necesita — y actualizando ese stack a medida que mejora el mercado.",
    toolsMicroline: "Siempre elegidos por ajuste, rendimiento y fiabilidad a largo plazo.",
    toolsLabels: ["Modelos", "Automatización", "Build y datos", "Operaciones y hospitality", "Voz y medios"],
    howDescriptor: "Cómo funciona",
    howHeading: "Desde la primera consulta hasta totalmente automatizado — sin la complejidad",
    howSupporting: "Diseñamos y construimos un sistema a medida para tu negocio, para que todo funcione de forma fluida, automática y sin esfuerzo manual.",
    howSteps: [
      { label: "DESCUBRIR", title: "Entendemos cómo funciona tu negocio", body: "Analizamos cómo llegan las consultas, dónde se pierden oportunidades y qué necesita tu negocio para operar con más eficiencia." },
      { label: "CONSTRUIR", title: "Construimos tu sistema personalizado", body: "Diseñamos, probamos y conectamos todo — captación de leads, conversaciones, reservas y automatización — en un único sistema fluido." },
      { label: "ACTIVAR", title: "Todo funciona automáticamente — con mejores resultados", body: "Tu sistema gestiona el día a día de forma automática, para que te centres en la entrega, el crecimiento y el trabajo de mayor valor." },
      { label: "OPTIMIZAR", title: "Tu sistema mejora y evoluciona con el tiempo", body: "Refinamos, ajustamos y optimizamos tu sistema según su rendimiento real para que siga ofreciendo mejores resultados a medida que tu negocio crece." }
    ],
    faqDescriptor: "FAQ",
    faqHeading: "Todo lo que necesitas saber antes de empezar.",
    faqSupporting: "Respuestas claras, poca fricción y sin promesas infladas — solo lo necesario para entender cómo encaja el sistema en tu negocio.",
    faqItems: faqItemsEn,
    finalDescriptor: "Empezar",
    finalHeading: "Descubre cómo funcionaría un sistema FlowOps personalizado para tu negocio.",
    finalSupporting: "Te mostraremos las oportunidades más claras, la estructura de sistema adecuada y cómo podría ser la implementación para tu negocio.",
    footerPlaceholder: "Marcador de posición del footer para enlaces finales, datos de contacto e información legal."
  }
};

const languageOptions = [
  { code: 'en', short: 'GB' },
  { code: 'th', short: 'TH' },
  { code: 'de', short: 'DE' },
  { code: 'es', short: 'ES' }
];

function getStackPose(distance) {
  switch (distance) {
    case 0:
      return {
        x: 0,
        y: -4,
        scale: 1,
        opacity: 1,
        rotate: -1.2,
        zIndex: 5,
        filter: 'blur(0px) saturate(1) brightness(1)'
      };
    case 1:
      return {
        x: 46,
        y: 22,
        scale: 0.9,
        opacity: 0.48,
        rotate: 5.4,
        zIndex: 4,
        filter: 'blur(0.55px) saturate(0.86) brightness(0.74)'
      };
    case 2:
      return {
        x: 72,
        y: 34,
        scale: 0.82,
        opacity: 0.18,
        rotate: 7.6,
        zIndex: 3,
        filter: 'blur(1.2px) saturate(0.72) brightness(0.62)'
      };
    case 3:
      return {
        x: 84,
        y: 44,
        scale: 0.91,
        opacity: 0,
        rotate: 8,
        zIndex: 2,
        filter: 'blur(2px) saturate(0.78) brightness(0.64)',
        boxShadow: '0 8px 18px rgba(0,0,0,0.16)'
      };
    default:
      return {
        x: -28,
        y: 86,
        scale: 0.84,
        opacity: 0,
        rotate: -5.4,
        zIndex: 1,
        filter: 'blur(2px) saturate(0.78) brightness(0.64)',
        boxShadow: '0 8px 18px rgba(0,0,0,0.16)'
      };
  }
}

function HeroImageStack() {
  const prefersReducedMotion = false;
  const stackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [outgoingCard, setOutgoingCard] = useState(null);
  const [pointerOffset, setPointerOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (prefersReducedMotion) return;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => {
        setOutgoingCard({ index: current, nonce: Date.now() });
        return (current + 1) % heroImageData.length;
      });
    }, 3400);
    return () => window.clearInterval(timer);
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (!outgoingCard) return undefined;
    const timer = window.setTimeout(() => {
      setOutgoingCard(null);
    }, 760);

    return () => window.clearTimeout(timer);
  }, [outgoingCard]);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const node = stackRef.current;
    if (!node) return;

    const handleMove = (event) => {
      const rect = node.getBoundingClientRect();
      const offsetX = (event.clientX - rect.left) / rect.width - 0.5;
      const offsetY = (event.clientY - rect.top) / rect.height - 0.5;
      setPointerOffset({ x: offsetX * 18, y: offsetY * 16 });
    };

    const handleLeave = () => {
      setPointerOffset({ x: 0, y: 0 });
    };

    node.addEventListener('mousemove', handleMove);
    node.addEventListener('mouseleave', handleLeave);
    return () => {
      node.removeEventListener('mousemove', handleMove);
      node.removeEventListener('mouseleave', handleLeave);
    };
  }, [prefersReducedMotion]);

  return (
    <motion.div
      ref={stackRef}
      className="hero-stack-shell"
      animate={prefersReducedMotion ? undefined : { y: [0, -14, -6, 0], x: [0, 4, -3, 0], rotate: [0, -0.8, 0.4, 0] }}
      transition={prefersReducedMotion ? undefined : { duration: 10.5, repeat: Infinity, ease: 'easeInOut' }}
    >
      <div className="hero-stack-glow" />
      {outgoingCard && (
        <motion.div
          key={`outgoing-${outgoingCard.index}-${outgoingCard.nonce}`}
          className="hero-stack-card"
          initial={{
            x: pointerOffset.x,
            y: -4 + pointerOffset.y,
            scale: 1,
            opacity: 1,
            rotate: -1.2,
            zIndex: 4,
            filter: 'blur(0px) saturate(1) brightness(1)'
          }}
          animate={{
            x: 24 + pointerOffset.x * 0.35,
            y: 16 + pointerOffset.y * 0.35,
            scale: 0.92,
            opacity: 0.34,
            rotate: 3.8,
            zIndex: 3,
            filter: 'blur(0.85px) saturate(0.84) brightness(0.7)'
          }}
          transition={{
            duration: 0.62,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          <div className="hero-stack-card-frame">
            <div className="hero-stack-window-bar">
              <span />
              <span />
              <span />
            </div>
            <img
              src={heroImageData[outgoingCard.index].src}
              alt=""
              loading="eager"
              decoding="async"
              style={{ objectPosition: heroImageData[outgoingCard.index].objectPosition }}
            />
            <div className="hero-stack-card-glare" />
          </div>
        </motion.div>
      )}
      {[0, 1, 2].map((distance) => {
        const imageIndex = (activeIndex + distance) % heroImageData.length;
        const image = heroImageData[imageIndex];
        const pose = getStackPose(distance);
        const multiplier = distance === 0 ? 1 : distance === 1 ? 0.66 : 0.4;

        return (
          <motion.div
            key={`${image.src}-${distance}`}
            className="hero-stack-card"
            initial={false}
            animate={{
              x: pose.x + pointerOffset.x * multiplier,
              y: pose.y + pointerOffset.y * multiplier,
              scale: pose.scale,
              opacity: pose.opacity,
              rotate: pose.rotate,
              zIndex: pose.zIndex,
              filter: pose.filter
            }}
            transition={{
              duration: prefersReducedMotion ? 0.3 : 0.68,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            <div className="hero-stack-card-frame">
              <div className="hero-stack-window-bar">
                <span />
                <span />
                <span />
              </div>
              <img
                src={image.src}
                alt=""
                loading="eager"
                decoding="async"
                style={{ objectPosition: image.objectPosition }}
              />
              <div className="hero-stack-card-glare" />
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

const CinematicForeground = ({ section, idx }) => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.62, margin: "0px 0px -14% 0px" });
  const prefersReducedMotion = useReducedMotion();
  const videoFromLeft = idx % 2 === 0;
  const [videoReveal, setVideoReveal] = useState(false);

  useEffect(() => {
    if (!inView) return undefined;
    if (prefersReducedMotion) {
      setVideoReveal(true);
      return undefined;
    }

    const timer = window.setTimeout(() => {
      setVideoReveal(true);
    }, 120);

    return () => window.clearTimeout(timer);
  }, [inView, prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      className={`cinematic-native-scene prototype-e-scene ${idx === 0 ? 'first-scene' : ''} ${idx % 2 === 0 ? 'reverse' : ''}`}
    >
      <div className="cinematic-content prototype-e-content">
        <motion.div
          className="cinematic-text"
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: prefersReducedMotion ? 0.2 : 0.72, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="microline">{section.descriptor}</div>
          <h2>{section.headline}</h2>
          <p>{section.subheading}</p>
          <div className="microline alt">{section.microline}</div>
        </motion.div>

        <div className="cinematic-visual">
          <div
            className={`premium-bento-frame prototype-e-video-frame ${videoFromLeft ? 'from-left' : 'from-right'} ${videoReveal ? 'is-revealed' : ''}`}
          >
            <video src={section.video} autoPlay loop muted playsInline />
            <div className="frame-glare" />
            <div className="frame-border" />
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureSequence = ({ sections }) => {
  return (
    <div className="feature-sequence-wrapper prototype-e-sequence">
      <div className="sequence-foreground">
        {sections.map((section, idx) => (
          <CinematicForeground key={`fg-${idx}`} section={section} idx={idx} />
        ))}
      </div>
    </div>
  );
};

const ExampleAssetSection = ({ content }) => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.34 });
  const breakdownRef = useRef(null);
  const stepRefs = useRef([]);
  const [leftVisible, setLeftVisible] = useState(false);
  const [leftPulseNonce, setLeftPulseNonce] = useState(0);
  const [centerVisible, setCenterVisible] = useState(false);
  const [chatStage, setChatStage] = useState(0);
  const [rightVisible, setRightVisible] = useState(false);
  const [rightStage, setRightStage] = useState('processing');
  const [leftIndicatorVisible, setLeftIndicatorVisible] = useState(false);
  const [centerIndicatorVisible, setCenterIndicatorVisible] = useState(false);
  const [rightIndicatorVisible, setRightIndicatorVisible] = useState(false);
  const [rightIndicatorText, setRightIndicatorText] = useState('Availability Checked');
  const [activeStep, setActiveStep] = useState(0);
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0, visible: false });
  const cycleTimersRef = useRef([]);

  useEffect(() => {
    if (!inView) return undefined;

    let cancelled = false;

    const clearTimers = () => {
      cycleTimersRef.current.forEach((timer) => window.clearTimeout(timer));
      cycleTimersRef.current = [];
    };

    const schedule = (fn, delay) => {
      const timer = window.setTimeout(() => {
        if (!cancelled) fn();
      }, delay);
      cycleTimersRef.current.push(timer);
    };

    const startCycle = () => {
      setLeftVisible(true);
      setCenterVisible(false);
      setChatStage(0);
      setRightVisible(false);
      setRightStage('processing');
      setLeftIndicatorVisible(false);
      setCenterIndicatorVisible(false);
      setRightIndicatorVisible(false);
      setRightIndicatorText('Availability Checked');

      schedule(() => {
        setLeftPulseNonce((current) => current + 1);
        setLeftIndicatorVisible(true);
      }, 950);
      schedule(() => setCenterVisible(true), 2300);
      schedule(() => {
        setChatStage(2);
        setLeftIndicatorVisible(false);
        setCenterIndicatorVisible(true);
      }, 2700);
      schedule(() => {
        setChatStage(3);
        setCenterIndicatorVisible(false);
      }, 5600);
      schedule(() => {
        setRightVisible(true);
        setRightStage('processing');
      }, 6900);
      schedule(() => {
        setRightStage('availability');
        setRightIndicatorText('Availability Checked');
        setRightIndicatorVisible(true);
      }, 9100);
      schedule(() => setChatStage(4), 10400);
      schedule(() => setChatStage(5), 12900);
      schedule(() => {
        setRightStage('booking');
        setRightIndicatorText('Booking Confirmed');
      }, 13150);
      schedule(startCycle, 16900);
    };

    clearTimers();
    startCycle();

    return () => {
      cancelled = true;
      clearTimers();
    };
  }, [inView]);

  useEffect(() => {
    if (!inView) return undefined;

    const interval = window.setInterval(() => {
      setActiveStep((current) => (current + 1) % content.exampleItems.length);
    }, 1850);

    return () => window.clearInterval(interval);
  }, [inView]);

  useEffect(() => {
    const container = breakdownRef.current;
    const node = stepRefs.current[activeStep];
    if (!container || !node) return undefined;

    const updatePosition = () => {
      const containerRect = container.getBoundingClientRect();
      const nodeRect = node.getBoundingClientRect();
      setDotPosition({
        x: nodeRect.left - containerRect.left + nodeRect.width / 2,
        y: nodeRect.top - containerRect.top + 18,
        visible: true
      });
    };

    updatePosition();
    window.addEventListener('resize', updatePosition);
    return () => window.removeEventListener('resize', updatePosition);
  }, [activeStep]);

  const overlaySrc = chatStage === 0 ? null : `/assets/hero/chat-overlay-${chatStage}.png`;
  const rightPanelSrc =
    rightStage === 'booking'
      ? '/assets/hero/right-panel-booking-complete.png'
      : rightStage === 'availability'
        ? '/assets/hero/right-panel-availability.png'
        : '/assets/hero/right-panel-processing.png';

  return (
    <section ref={sectionRef} className="prototype-e-support-section prototype-e-example-section">
      <div className="prototype-e-system-intro">
        <div className="prototype-e-system-descriptor">{content.exampleDescriptor}</div>
        <h2>{content.exampleHeading}</h2>
        <p>{content.exampleSupporting}</p>
        {content.exampleContext ? <p className="prototype-e-system-context">{content.exampleContext}</p> : null}
      </div>
      <div className="prototype-e-example-stage">
        <div className="prototype-e-system-scene">
          <AnimatePresence>
            {leftVisible ? (
              <motion.div
                className="prototype-e-system-left-wrap"
                initial={{ opacity: 0, x: -120 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{
                  opacity: { duration: 0.95, ease: [0.22, 1, 0.36, 1] },
                  x: { duration: 1.25, ease: [0.22, 1, 0.36, 1] }
                }}
              >
                <AnimatePresence>
                  {leftIndicatorVisible ? (
                    <motion.div
                      key="left-indicator"
                      className="prototype-e-system-indicator prototype-e-system-indicator-left"
                      initial={{ opacity: 0, y: 10, scale: 0.985 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -8, scale: 0.99 }}
                      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    >
                      Enquiry Captured
                    </motion.div>
                  ) : null}
                </AnimatePresence>
                <AnimatePresence mode="sync">
                  <motion.img
                    key={leftPulseNonce}
                    className="prototype-e-system-left"
                    src="/assets/hero/left-panel-click.png"
                    alt="Ad and landing page panel"
                    initial={{ opacity: 0, scale: 0.992 }}
                    animate={{
                      opacity: 1,
                      scale: [1, 1.065, 1.015, 1],
                      filter: ['brightness(1)', 'brightness(1.18)', 'brightness(1.08)', 'brightness(1)'],
                      boxShadow: [
                        '0 0 0 rgba(72, 199, 194, 0)',
                        '0 0 36px rgba(72, 199, 194, 0.34)',
                        '0 0 16px rgba(72, 199, 194, 0.16)',
                        '0 0 0 rgba(72, 199, 194, 0)'
                      ]
                    }}
                    exit={{ opacity: 0, scale: 0.998 }}
                    transition={{ duration: 1.45, ease: [0.22, 1, 0.36, 1] }}
                  />
                </AnimatePresence>
              </motion.div>
            ) : null}
          </AnimatePresence>

          <motion.div
            className="prototype-e-system-center-wrap"
            initial={false}
            animate={centerVisible ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.96, y: 14 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              className="prototype-e-system-center"
              src="/assets/hero/center-card.png"
              alt="System overview"
            />
            <AnimatePresence mode="sync">
              {centerVisible && overlaySrc ? (
                <>
                  <motion.img
                    key={overlaySrc}
                    className="prototype-e-system-chat-overlay"
                    src={overlaySrc}
                    alt="Conversation state"
                    initial={{ opacity: 0, y: 20, scale: 0.988 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -4, scale: 0.998 }}
                    transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <AnimatePresence>
                    {centerIndicatorVisible ? (
                      <motion.div
                        key="center-indicator"
                        className="prototype-e-system-indicator prototype-e-system-indicator-center"
                        initial={{ opacity: 0, y: 8, scale: 0.985 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.99 }}
                        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                      >
                        Instant Response
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </>
              ) : null}
            </AnimatePresence>
          </motion.div>

          <AnimatePresence>
            {rightVisible ? (
              <motion.div
                className="prototype-e-system-right-wrap"
                initial={{ opacity: 0, x: 120 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, x: 80 }}
                transition={{
                  opacity: { duration: 0.95, ease: [0.22, 1, 0.36, 1] },
                  x: { duration: 1.25, ease: [0.22, 1, 0.36, 1] }
                }}
              >
                <AnimatePresence>
                  {rightIndicatorVisible ? (
                    <motion.div
                      key={rightIndicatorText}
                      className="prototype-e-system-indicator prototype-e-system-indicator-right"
                      initial={{ opacity: 0, y: 10, scale: 0.985 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -8, scale: 0.99 }}
                      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {rightIndicatorText}
                    </motion.div>
                  ) : null}
                </AnimatePresence>
                <AnimatePresence mode="sync">
                  <motion.img
                    key={rightPanelSrc}
                    className="prototype-e-system-right"
                    src={rightPanelSrc}
                    alt="Availability and booking status panel"
                    initial={{ opacity: 0, scale: 0.992 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.998 }}
                    transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
                  />
                </AnimatePresence>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
      <div className="prototype-e-system-breakdown-heading">
        How your system works — from enquiry to booking
      </div>
      <div ref={breakdownRef} className="prototype-e-system-breakdown-wrap">
        <motion.div
          className="prototype-e-system-breakdown-dot"
          initial={false}
          animate={{
            opacity: dotPosition.visible ? 1 : 0,
            x: dotPosition.x,
            y: dotPosition.y,
            scale: [1, 1.18, 1]
          }}
          transition={{
            x: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
            y: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
            opacity: { duration: 0.25 },
            scale: { duration: 0.75, ease: [0.22, 1, 0.36, 1] }
          }}
        />
        <div className="prototype-e-system-breakdown">
          {content.exampleItems.map((item, index) => (
            <motion.article
              key={item.title}
              ref={(node) => {
                stepRefs.current[index] = node;
              }}
              className={`prototype-e-system-breakdown-item ${activeStep === index ? 'is-active' : ''}`}
              animate={activeStep === index ? { y: -6, scale: 1.015 } : { y: 0, scale: 1 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="prototype-e-system-step-number">{index + 1}</div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
      <p className="prototype-e-system-closing">{content.exampleClosing}</p>
    </section>
  );
};

const ToolsSection = ({ content }) => {
  return (
    <section className="prototype-e-support-section prototype-e-tools-section">
      <div className="prototype-e-support-intro prototype-e-tools-intro">
        <div className="microline">{content.toolsDescriptor}</div>
        <h2>{content.toolsHeading}</h2>
        <p>{content.toolsSupporting}</p>
        <div className="prototype-e-tools-microline">{content.toolsMicroline}</div>
      </div>
      <div className="prototype-e-tools-marquee-shell">
        {toolsData.map((row, index) => (
          <div key={row.label} className="prototype-e-tools-row">
            <div className="prototype-e-tools-row-label">{content.toolsLabels[index] ?? row.label}</div>
            <div className="prototype-e-tools-marquee-mask">
              <div className={`prototype-e-tools-marquee-track ${row.speedClass}`}>
                <div className="prototype-e-tools-marquee-group">
                  {row.names.map((tool) => (
                    <span
                      key={`${row.label}-${tool}-a`}
                      className={`prototype-e-tool-pill ${highlightedTools.has(tool) ? 'is-highlighted' : ''}`}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <div className="prototype-e-tools-marquee-group" aria-hidden="true">
                  {row.names.map((tool) => (
                    <span
                      key={`${row.label}-${tool}-b`}
                      className={`prototype-e-tool-pill ${highlightedTools.has(tool) ? 'is-highlighted' : ''}`}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const HowItWorksSection = ({ sectionRef, onPrimaryCta, content }) => {
  const prefersReducedMotion = useReducedMotion();
  const localSectionRef = useRef(null);
  const cardsRef = useRef(null);
  const sectionInView = useInView(localSectionRef, { once: true, amount: 0.35 });
  const cardsInView = useInView(cardsRef, { once: true, amount: 0.72 });
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [cardsActivated, setCardsActivated] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion || isPaused) return undefined;
    const timer = window.setInterval(() => {
      setActiveStep((current) => (current + 1) % content.howSteps.length);
    }, 2200);

    return () => window.clearInterval(timer);
  }, [isPaused, prefersReducedMotion]);

  useEffect(() => {
    if (!cardsInView) return undefined;

    const timer = window.setTimeout(() => {
      setCardsActivated(true);
    }, 340);

    return () => window.clearTimeout(timer);
  }, [prefersReducedMotion, cardsInView]);

  const setSectionRefs = (node) => {
    localSectionRef.current = node;
    if (!sectionRef) return;
    sectionRef.current = node;
  };

  return (
    <section ref={setSectionRefs} className="how-it-works-section">
      <div className="how-it-works-inner">
        <div className={`how-it-works-intro ${sectionInView ? 'is-revealed' : ''}`}>
          <div className="microline">{content.howDescriptor}</div>
          <h2>{content.howHeading}</h2>
          <p>{content.howSupporting}</p>
          {content.howPreline ? <div className="how-it-works-preline">{content.howPreline}</div> : null}
        </div>

        <div
          ref={cardsRef}
          className={`how-it-works-grid ${sectionInView ? 'is-visible' : ''} ${cardsActivated ? 'is-revealed' : ''}`}
        >
          {content.howSteps.map((step, idx) => (
            <div
              key={step.label}
              className={`how-it-works-card-entry ${cardsActivated ? 'is-revealed' : ''}`}
              style={prefersReducedMotion ? undefined : { transitionDelay: `${idx * 220}ms` }}
            >
              <motion.article
                className={`how-it-works-card ${activeStep === idx ? 'is-active' : ''} ${idx === content.howSteps.length - 1 ? 'is-optimise' : ''}`}
                initial={false}
                animate={
                  prefersReducedMotion
                    ? { y: activeStep === idx ? -4 : 0, scale: activeStep === idx ? 1.02 : 1 }
                    : idx === content.howSteps.length - 1
                      ? {
                        y: activeStep === idx ? -4 : 0,
                        scale: activeStep === idx ? 1.02 : 1,
                        boxShadow: activeStep === idx
                          ? '0 30px 66px rgba(0,0,0,0.32), 0 0 0 1px rgba(145, 186, 255, 0.24) inset, 0 0 34px rgba(120,160,255,0.18)'
                          : ['0 20px 50px rgba(0,0,0,0.22)', '0 20px 50px rgba(0,0,0,0.22)', '0 20px 50px rgba(0,0,0,0.22), 0 0 24px rgba(120,160,255,0.1)', '0 20px 50px rgba(0,0,0,0.22)'],
                        borderColor: activeStep === idx ? 'rgba(145, 186, 255, 0.32)' : 'rgba(255,255,255,0.08)'
                      }
                      : {
                        y: activeStep === idx ? -4 : 0,
                        scale: activeStep === idx ? 1.02 : 1,
                        boxShadow: activeStep === idx
                          ? '0 30px 66px rgba(0,0,0,0.32), 0 0 0 1px rgba(145, 186, 255, 0.24) inset, 0 0 34px rgba(120,160,255,0.18)'
                          : '0 20px 50px rgba(0,0,0,0.22)',
                        borderColor: activeStep === idx ? 'rgba(145, 186, 255, 0.32)' : 'rgba(255,255,255,0.08)'
                      }
                }
                transition={{
                  duration: prefersReducedMotion ? 0.2 : 0.72,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{
                  y: -4,
                  scale: activeStep === idx ? 1.025 : 1.01,
                  boxShadow: '0 28px 62px rgba(0,0,0,0.3), 0 0 0 1px rgba(145, 186, 255, 0.26) inset, 0 0 28px rgba(120,160,255,0.16)'
                }}
                onHoverStart={() => setIsPaused(true)}
                onHoverEnd={() => setIsPaused(false)}
              >
                <div
                  className={`how-it-works-card-sweep ${cardsActivated ? 'is-revealed' : ''}`}
                  style={prefersReducedMotion ? undefined : { animationDelay: `${180 + idx * 220}ms` }}
                />
                <div className="how-it-works-step">{step.label}</div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </motion.article>
              {idx === 0 ? (
                <button type="button" className="how-it-works-card-cta" onClick={onPrimaryCta}>
                  {content.cta}
                </button>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SiteFooter = ({ onHomeClick, onHowItWorksClick, onPricingClick, onDemoClick, onContactClick, footerRef }) => {
  return (
    <footer ref={footerRef} className="site-footer-placeholder">
      <div className="site-footer-inner">
        <div className="site-footer-panel">
          <div className="site-footer-top">
            <div className="site-footer-brand-block">
              <div className="nav-brand-lockup site-footer-brand-lockup">
                <FlowOpsMark />
                <span>FlowOps Studio LLC</span>
              </div>
              <p className="site-footer-location">Delaware, USA</p>
              <p className="site-footer-description">
                Automating lead capture, follow-up, and booking for service-based businesses.
              </p>
            </div>

            <div className="site-footer-cta-block">
              <button type="button" className="site-footer-primary-btn" onClick={onHomeClick}>
                Get My Free Plan <span aria-hidden="true">→</span>
              </button>
              <p className="site-footer-cta-subline">See exactly how this would work for your business</p>
            </div>
          </div>

          <div className="site-footer-grid">
            <div className="site-footer-column">
              <span className="site-footer-label">Navigation</span>
              <div className="site-footer-links">
                <button type="button" className="site-footer-link" onClick={onHomeClick}>Home</button>
                <span className="site-footer-separator">•</span>
                <button type="button" className="site-footer-link" onClick={onHowItWorksClick}>How It Works</button>
                <span className="site-footer-separator">•</span>
                <button type="button" className="site-footer-link" onClick={onPricingClick}>Pricing</button>
                <span className="site-footer-separator">•</span>
                <button type="button" className="site-footer-link" onClick={onDemoClick}>Demo</button>
                <span className="site-footer-separator">•</span>
                <button type="button" className="site-footer-link" onClick={onContactClick}>Contact</button>
              </div>
            </div>

            <div className="site-footer-column">
              <span className="site-footer-label">Legal</span>
              <div className="site-footer-links">
                <button type="button" className="site-footer-link">Privacy Policy</button>
                <span className="site-footer-separator">•</span>
                <button type="button" className="site-footer-link">Terms of Service</button>
              </div>
            </div>

            <div className="site-footer-column">
              <span className="site-footer-label">Contact</span>
              <a className="site-footer-email" href="mailto:support@flowops-studio.com">support@flowops-studio.com</a>
            </div>
          </div>

          <div className="site-footer-bottom">
            <p>© 2026 Flow Ops Studio LLC. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SiteFooterV2 = ({ onHomeClick, onHowItWorksClick, onPricingClick, onContactClick, onPrimaryCta, footerRef }) => {
  return (
    <footer ref={footerRef} className="site-footer-placeholder">
      <div className="site-footer-inner">
        <div className="site-footer-panel">
          <div className="site-footer-grid">
            <div className="site-footer-brand-block">
              <div className="nav-brand-lockup site-footer-brand-lockup">
                <FlowOpsMark />
                <span>Flow Ops Studio LLC</span>
              </div>
              <p className="site-footer-description">Delaware, USA</p>
              <p className="site-footer-description site-footer-description-secondary">
                Automating lead capture, follow-up, and booking for service-based businesses.
              </p>
            </div>

            <div className="site-footer-column">
              <span className="site-footer-label">Navigation</span>
              <div className="site-footer-links">
                <button type="button" className="site-footer-link" onClick={onHomeClick}>Home</button>
                <button type="button" className="site-footer-link" onClick={onHowItWorksClick}>How It Works</button>
                <button type="button" className="site-footer-link" onClick={onPricingClick}>Pricing</button>
                <button type="button" className="site-footer-link" onClick={onContactClick}>Contact</button>
              </div>
            </div>

            <div className="site-footer-column">
              <span className="site-footer-label">Get Started</span>
              <button type="button" className="site-footer-primary-btn" onClick={onPrimaryCta}>
                Get My Free Plan <span aria-hidden="true">&rarr;</span>
              </button>
              <p className="site-footer-cta-subline">See exactly how this would work for your business</p>
            </div>

            <div className="site-footer-column">
              <span className="site-footer-label">Legal</span>
              <div className="site-footer-links site-footer-links-legal">
                <button type="button" className="site-footer-link">Privacy Policy</button>
                <button type="button" className="site-footer-link">Terms of Service</button>
              </div>
              <span className="site-footer-label site-footer-label-contact">Contact</span>
              <a className="site-footer-email" href="mailto:support@flowops-studio.com">support@flowops-studio.com</a>
            </div>
          </div>

          <div className="site-footer-bottom">
            <p>&copy; 2026 Flow Ops Studio LLC. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FAQSection = ({ content }) => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.24 });
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section ref={sectionRef} className="prototype-e-support-section prototype-e-faq-section">
      <motion.div
        className="prototype-e-support-intro prototype-e-faq-intro"
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="microline">{content.faqDescriptor}</div>
        <h2>{content.faqHeading}</h2>
        <p>{content.faqSupporting}</p>
      </motion.div>

      <div className="prototype-e-faq-list">
        {content.faqItems.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <motion.button
              key={item.question}
              type="button"
              className={`prototype-e-faq-item ${isOpen ? 'is-open' : ''}`}
              onClick={() => setOpenIndex(isOpen ? -1 : idx)}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.52, delay: idx * 0.06 + 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="prototype-e-faq-question-row">
                <span>{item.question}</span>
                <motion.span animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.22 }}>+</motion.span>
              </div>
              {isOpen ? (
                <motion.div
                  className="prototype-e-faq-answer"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                >
                  {item.answer.split('\n\n').map((paragraph, paragraphIndex) => (
                    <p key={`${item.question}-${paragraphIndex}`}>{paragraph}</p>
                  ))}
                </motion.div>
              ) : null}
            </motion.button>
          );
        })}
      </div>
      {content.faqOutroHeading || content.faqOutroText ? (
        <div className="prototype-e-faq-outro">
          {content.faqOutroHeading ? <h3>{content.faqOutroHeading}</h3> : null}
          {content.faqOutroText ? <p>{content.faqOutroText}</p> : null}
        </div>
      ) : null}
    </section>
  );
};

const FinalCtaSection = ({ onPrimaryCta, content }) => {
  const finalMicrolineParts = content.finalMicroline?.includes('—')
    ? content.finalMicroline.split('—')
    : null;

  return (
    <section className="prototype-e-support-section prototype-e-final-cta-section">
      <div className="prototype-e-final-cta-card">
        <div className="microline">{content.finalDescriptor}</div>
        <h2>{content.finalHeading}</h2>
        <p>{content.finalSupporting}</p>
        <button type="button" className="hero-primary-btn prototype-e-final-cta-btn" onClick={onPrimaryCta}>
          {content.cta}
        </button>
        {content.finalMicroline ? (
          <div className="prototype-e-final-cta-microline">
            {finalMicrolineParts ? (
              <>
                <span className="prototype-e-final-cta-microline-accent">{finalMicrolineParts[0].trim()}</span>
                {' — '}
                <span>{finalMicrolineParts.slice(1).join('—').trim()}</span>
              </>
            ) : (
              content.finalMicroline
            )}
          </div>
        ) : null}
      </div>
    </section>
  );
};

const FinalCtaSectionV2 = ({ onPrimaryCta, content }) => {
  const finalMicroline = content.finalMicroline ?? '';
  const finalMicrolineParts = finalMicroline.split(/\s[-\u2013\u2014]\s/);
  const finalTrustItems = content.heroTrustItems ?? ['No credit card', '30-min session', 'No obligation'];

  return (
    <section className="prototype-e-support-section prototype-e-final-cta-section">
      <div className="prototype-e-final-cta-card">
        <div className="microline">{content.finalDescriptor}</div>
        <h2>{content.finalHeading}</h2>
        <p>{content.finalSupporting}</p>
        <button type="button" className="hero-primary-btn prototype-e-final-cta-btn" onClick={onPrimaryCta}>
          {content.cta}
        </button>
        {content.finalMicroline ? (
          <div className="prototype-e-final-cta-microline">
            {finalMicrolineParts.length > 1 ? (
              <>
                <span className="prototype-e-final-cta-microline-accent">{finalMicrolineParts[0].trim()}</span>
                {' - '}
                <span>{finalMicrolineParts.slice(1).join(' - ').trim()}</span>
              </>
            ) : (
              <span className="prototype-e-final-cta-microline-accent">{content.finalMicroline}</span>
            )}
          </div>
        ) : null}
        <div className="hero-trust-row prototype-e-final-cta-trust">
          {finalTrustItems.map((item) => (
            <span key={item} className="hero-trust-item">
              <span className="hero-trust-dot" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

function SectionEyebrow({ children }) {
  return <div className="business-impact-eyebrow">{children}</div>;
}

const BusinessBenchmarksSection = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.28 });

  return (
    <section ref={sectionRef} className="bg-[#05070D] px-5 pt-14 md:px-8 md:pt-16">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="grid gap-5 lg:grid-cols-[1.05fr_1fr_1fr]"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="rounded-[2rem] bg-white/[0.02] p-7 backdrop-blur-[10px]">
            <div className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-cyan-300/90">
              Built for speed
            </div>
            <h2 className="mt-4 text-balance text-2xl font-semibold leading-tight tracking-[-0.04em] text-white md:text-4xl">
              Built for businesses where speed = revenue
            </h2>
          </div>

          <div className="rounded-[2rem] bg-white/[0.02] p-7 backdrop-blur-[10px]">
            <div className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-cyan-300/90">
              Who this is for
            </div>
            <ul className="mt-5 space-y-4">
              {audienceItems.map((item) => (
                <li key={item} className="text-sm leading-6 text-white/76">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] bg-white/[0.02] p-7 backdrop-blur-[10px]">
            <div className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-cyan-300/90">
              Industry benchmarks
            </div>
            <ul className="mt-5 space-y-4">
              {benchmarkItems.map((item) => (
                <li key={item} className="text-sm font-medium leading-6 text-white/82">
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm font-semibold leading-6 text-cyan-100">
              Improving response speed alone can increase conversions by 20-40%
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const RevenueTransformationSection = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.18 });

  return (
    <section ref={sectionRef} className="bg-[#05070D] px-5 pt-14 md:px-8 md:pt-16">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-cyan-300/90">
            Core transformation
          </div>
          <h2 className="mt-4 text-balance text-2xl font-semibold leading-tight tracking-[-0.04em] text-white md:text-4xl">
            How faster lead response turns into real monthly revenue
          </h2>
          <p className="mt-4 text-base leading-7 text-white/66">
            Example based on a typical local service business (plumbing, HVAC, electrical)
            handling 100-150 inbound leads per month. Typical job values range from
            $150-$500 depending on service.
          </p>
        </motion.div>

        <motion.div
          className="relative mt-8 overflow-hidden rounded-[2rem] bg-white/[0.02] backdrop-blur-[10px]"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.68, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,163,255,0.05),transparent_34%)]" />
          <div className="relative grid lg:grid-cols-[1.02fr_1.12fr]">
            <div className="grid divide-y divide-white/10 lg:border-r lg:border-white/10">
              <div className="grid md:grid-cols-2 md:divide-x md:divide-white/10">
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.58, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className="p-7 md:p-8"
                >
                  <div className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-cyan-300/90">
                    Before
                  </div>
                  <ul className="mt-5 space-y-4">
                    {beforeItems.map((item) => (
                      <li key={item} className="text-sm leading-6 text-white/74">{item}</li>
                    ))}
                  </ul>
                </motion.article>

                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.58, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
                  className="p-7 md:p-8"
                >
                  <div className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-cyan-300/90">
                    After
                  </div>
                  <ul className="mt-5 space-y-4">
                    {afterItems.map((item) => (
                      <li key={item} className="text-sm leading-6 text-white/82">{item}</li>
                    ))}
                  </ul>
                </motion.article>
              </div>

              <div className="grid md:grid-cols-[0.92fr_1.08fr] md:divide-x md:divide-white/10">
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.58, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
                  className="p-7 md:p-8"
                >
                  <div className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-cyan-300/90">
                    Results
                  </div>
                  <div className="mt-5 space-y-4">
                    <div className="flex items-center justify-between gap-4 text-sm text-white/66">
                      <span>Response rate</span>
                      <strong className="text-base font-semibold text-white">60% -&gt; 95%+</strong>
                    </div>
                    <div className="h-px bg-white/10" />
                    <div className="flex items-center justify-between gap-4 text-sm text-white/66">
                      <span>Conversion rate</span>
                      <strong className="text-base font-semibold text-white">~18% -&gt; ~28%</strong>
                    </div>
                  </div>
                </motion.article>

                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.58, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="p-7 md:p-8"
                >
                  <div className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-cyan-300/90">
                    Estimated monthly impact
                  </div>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100/70">Before</span>
                      <p className="mt-2 text-base font-semibold text-white">~13 jobs -&gt; $2,000 - $6,500</p>
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100/70">After</span>
                      <p className="mt-2 text-base font-semibold text-white">~32 jobs -&gt; $4,800 - $16,000</p>
                    </div>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <span className="rounded-full bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/10">+19 jobs</span>
                    <span className="rounded-full bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/10">+$2,800 -&gt; $9,500/month</span>
                    <span className="rounded-full bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/10">~15 hours/week saved</span>
                  </div>
                </motion.article>
              </div>
            </div>

            <div className="grid divide-y divide-white/10">
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.58, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
                className="p-7 md:p-8"
              >
                <div className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-cyan-300/90">
                  Lead workflow
                </div>
                <div className="mt-5 flex flex-wrap gap-3">
                  {workflowInputs.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-2 rounded-full bg-white/[0.03] px-4 py-2 text-sm text-white/72 ring-1 ring-white/8"
                    >
                      {item === 'Phone Calls'
                        ? <PhoneCall size={14} strokeWidth={1.5} />
                        : <MessageSquareText size={14} strokeWidth={1.5} />}
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                  {workflowSteps.map((step, index) => (
                    <div key={step} className="rounded-[1.35rem] bg-white/[0.03] p-4 ring-1 ring-white/8">
                      <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/[0.05] text-sm font-semibold text-cyan-100 ring-1 ring-white/8">
                        {index + 1}
                      </div>
                      <div className="mt-4 text-sm font-medium leading-6 text-white/80">{step}</div>
                    </div>
                  ))}
                </div>
              </motion.article>

              <div className="grid md:grid-cols-3 md:divide-x md:divide-white/10">
                {industryImpactCards.map((card, index) => {
                  const Icon = card.icon;

                  return (
                    <motion.article
                      key={card.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.58, delay: 0.24 + index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                      className="p-7 md:p-8"
                    >
                      <div className="flex items-start gap-4">
                        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/[0.04] text-cyan-200 ring-1 ring-white/8">
                          <Icon size={20} strokeWidth={1.5} />
                        </div>
                        <div>
                          <div className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-cyan-300/90">
                            Industry example
                          </div>
                          <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-white">{card.title}</h3>
                        </div>
                      </div>

                      <p className="mt-5 text-sm leading-6 text-white/56">{card.meta}</p>
                      <ul className="mt-5 space-y-4">
                        {card.points.map((point) => (
                          <li key={point} className="text-sm leading-6 text-white/74">{point}</li>
                        ))}
                      </ul>
                      <p className="mt-5 text-sm font-semibold leading-6 text-cyan-100">{card.impact}</p>
                    </motion.article>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};



function FlowOpsMark() {
  return (
    <svg viewBox="0 0 128 128" aria-hidden="true" className="flowops-mark">
      <path
        d="M21 22H74V32H37L49 52H82V62H49L61 84V118H51V87L21 34V22Z"
        fill="url(#flowops-mark-left)"
      />
      <path
        d="M83 22H114L73 87V118H63V84L90 34H79L65 58L56 53L83 22Z"
        fill="url(#flowops-mark-right)"
      />
      <defs>
        <linearGradient id="flowops-mark-left" x1="21" y1="22" x2="61" y2="118" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#48C7C2" />
          <stop offset="100%" stopColor="#43B3B6" />
        </linearGradient>
        <linearGradient id="flowops-mark-right" x1="56" y1="22" x2="114" y2="118" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#6F83FF" />
          <stop offset="100%" stopColor="#5B74F0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function LanguageSwitcher({ language, onChange }) {
  return (
    <div className="language-switcher" role="group" aria-label="Language switcher">
      {languageOptions.map((option) => (
        <button
          key={option.code}
          type="button"
          className={`language-switcher-btn ${language === option.code ? 'is-active' : ''}`}
          onClick={() => onChange(option.code)}
        >
          {option.short}
        </button>
      ))}
    </div>
  );
}



export default function PrototypeE({ onBack }) {
  const reduceMotionForHero = false;
  const heroRef = useRef(null);
  const howItWorksRef = useRef(null);
  const demoRef = useRef(null);
  const pricingRef = useRef(null);
  const footerRef = useRef(null);
  const [showScrolledNav, setShowScrolledNav] = useState(false);
  const [language, setLanguage] = useState('en');
  const content = localizedContent[language] ?? localizedContent.en;

  const ctaRestingShadow = '0 12px 26px rgba(0,0,0,0.22), 0 0 0 1px rgba(255,255,255,0.05) inset, 0 0 18px rgba(72, 199, 194, 0.08)';
  const ctaActivatedShadow = '0 22px 42px rgba(0,0,0,0.28), 0 0 0 1px rgba(255,255,255,0.08) inset, 0 0 44px rgba(72, 199, 194, 0.24)';
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = heroRef.current?.offsetHeight ?? window.innerHeight;
      setShowScrolledNav(window.scrollY > heroHeight - 120);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const scrollToHowItWorks = () => {
    howItWorksRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToHeroCTA = () => {
    heroRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToDemo = () => {
    demoRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToPricing = () => {
    pricingRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handlePrimaryCta = () => {
    window.location.href = 'mailto:support@flowops-studio.com?subject=FlowOps%20Free%20Plan';
  };

  const handleEmbeddedCtaClick = (label) => {
    if (label.toLowerCase().includes('pricing')) {
      scrollToPricing();
      return;
    }

    handlePrimaryCta();
  };

  return (
    <div className="flowops-app proto-d proto-e" data-language={language}>
      <motion.nav
        className={`proto-nav scrolled-nav ${showScrolledNav ? 'is-visible' : ''}`}
        initial={false}
        animate={showScrolledNav ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="nav-brand nav-brand-primary">
          <div className="nav-brand-lockup">
            <FlowOpsMark />
            <span>{content.heroBrand}</span>
          </div>
        </div>
        <div className="scrolled-nav-actions">
          <button type="button" className="nav-cta-btn" onClick={handlePrimaryCta}>{content.cta}</button>
          <button type="button" className="secondary-nav-btn" onClick={scrollToHowItWorks}>{content.navHowItWorks}</button>
          <button type="button" className="secondary-nav-btn" onClick={scrollToPricing}>Pricing</button>
          <button type="button" className="secondary-nav-btn" onClick={scrollToDemo}>Live Demo</button>
        </div>
      </motion.nav>

      <section ref={heroRef} className="cinematic-hero">
        <div className="hero-gradient-layer" />
        <div className="hero-glow hero-glow-blue" />
        <div className="hero-glow hero-glow-violet" />
        <div className="hero-language-switcher-wrap">
          <LanguageSwitcher language={language} onChange={setLanguage} />
        </div>

        <div className="hero-content hero-two-column">
          <div className="hero-copy-block hero-copy-left" key="hero-reveal-v4">
            <motion.div
              className="hero-brand-kicker"
              initial={reduceMotionForHero ? { opacity: 0 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.62,
                delay: 0.04,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <FlowOpsMark />
              <span>{content.heroBrand}</span>
            </motion.div>
            <div className="hero-headline-stack" aria-label={content.heroHeadlineLines.join(' ')}>
              {content.heroHeadlineLines.map((line, idx) => (
                <motion.span
                  key={line}
                  className="hero-headline-line-mask"
                  initial={reduceMotionForHero ? { opacity: 0 } : { opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.84,
                    delay: idx * 0.12,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                >
                  <span className={`hero-headline-line ${idx === 2 ? 'hero-headline-accent' : ''}`}>
                    {line}
                  </span>
                </motion.span>
              ))}
            </div>

            <motion.p
              className="hero-subheadline"
              initial={reduceMotionForHero ? { opacity: 0 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.65,
                delay: 0.94,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              {content.heroSubheadline}
            </motion.p>

            <div className="cta-group hero-cta-group">
              <motion.p
                className="hero-supporting-line"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.45,
                  delay: 1.18,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                {content.heroSupportingHighlight ? (
                  <>
                    <span className="hero-supporting-highlight">{content.heroSupportingHighlight}</span>
                    {content.heroSupportingRest}
                  </>
                ) : (
                  content.heroSupporting
                )}
              </motion.p>

              <motion.button
                className="primary-btn hero-primary-btn"
                type="button"
                onClick={handlePrimaryCta}
                initial={reduceMotionForHero ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.985 }}
                animate={reduceMotionForHero ? {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  filter: 'brightness(1.05)'
                } : {
                  opacity: [0, 1, 1, 1],
                  y: [12, 0, -3, 0],
                  scale: [0.985, 1, 1.065, 1],
                  boxShadow: [ctaRestingShadow, ctaRestingShadow, ctaActivatedShadow, ctaRestingShadow],
                  filter: ['brightness(1)', 'brightness(1)', 'brightness(1.18)', 'brightness(1)']
                }}
                transition={{
                  duration: reduceMotionForHero ? 0.45 : 1.26,
                  delay: reduceMotionForHero ? 0.34 : 1.08,
                  times: reduceMotionForHero ? undefined : [0, 0.34, 0.64, 1],
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                {content.cta}
              </motion.button>

              <motion.div
                className="hero-trust-row"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.4,
                  delay: 1.34,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                {(content.heroTrustItems ?? ['No credit card', '30-min session', 'No obligation']).map((item) => (
                  <span key={item} className="hero-trust-item">
                    <span className="hero-trust-dot" />
                    {item}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
          <div className="hero-visual-column">
            <div className="hero-flow-visual-wrap">
              <FlowHeroAnimation />
            </div>
          </div>
        </div>
      </section>
      <PreviewEmbedSection src="/preview-conversion-metrics.html" title="Conversion Metrics" minHeight={1180} />
      <PreviewEmbedSection src="/preview-revenue-impact.html" title="Revenue Impact" minHeight={1360} />
      <PreviewEmbedSection src="/preview-workflow.html" title="Workflow" minHeight={1320} />
      <PreviewEmbedSection src="/preview-results.html" title="Results" minHeight={1360} />
      <LeadBookingsMiniSection />
      <PreviewEmbedSection src="/preview-demo.html" title="AI Demo" minHeight={1500} sectionRef={demoRef} />
      <PreviewEmbedSection
        src="/preview-revenue-cta.html"
        title="Revenue CTA"
        minHeight={520}
        allowPointerEvents
        onCtaClick={handleEmbeddedCtaClick}
      />

      {/* Feature Narrative Sequence */}
      <FeatureSequence sections={content.sections.slice(0, 3)} />
      <ExampleAssetSection content={content} />
      <FeatureSequence sections={content.sections.slice(3)} />
      <HowItWorksSection sectionRef={howItWorksRef} onPrimaryCta={handlePrimaryCta} content={content} />
      <PreviewEmbedSection
        src="/preview-pricing.html"
        title="Pricing"
        minHeight={1780}
        sectionRef={pricingRef}
        allowPointerEvents
        onCtaClick={handleEmbeddedCtaClick}
      />
      <ToolsSection content={content} />
      <FAQSection content={content} />
      <FinalCtaSectionV2 onPrimaryCta={handlePrimaryCta} content={content} />
      <SiteFooterV2
        onHomeClick={scrollToHeroCTA}
        onHowItWorksClick={scrollToHowItWorks}
        onPricingClick={scrollToPricing}
        onContactClick={scrollToFooter}
        onPrimaryCta={handlePrimaryCta}
        footerRef={footerRef}
      />
    </div>
  );
}


