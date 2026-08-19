import type { Service, Product } from "../site";

function service(
  partial: Service & { slug: string }
): Service {
  return partial;
}

export const services: Record<string, Service> = {
  "web-development": service({
    slug: "web-development",
    title: "Web Development",
    h1: "Web Development in Morocco",
    intro:
      "We build fast, professional websites and web applications for businesses and individuals in Morocco. From business websites to custom web platforms, every project is structured for performance, usability, and search visibility.",
    valueProposition:
      "Professional websites and web apps designed to represent your brand and convert visitors into leads.",
    category: "technology",
    audience: "both",
    primaryKeyword: "web development Morocco",
    includes: [
      "Custom website design and development",
      "Responsive, mobile-first layouts",
      "SEO-friendly page structure",
      "Performance optimization",
      "Contact forms and lead capture",
      "CMS or static setup based on project needs",
    ],
    benefits: [
      { title: "Built for your audience", description: "Clear structure for businesses or personal brands with goals that match search intent." },
      { title: "SEO-ready foundation", description: "Semantic HTML, metadata, and clean URLs from day one." },
      { title: "Fast and accessible", description: "Optimized for Core Web Vitals and accessible navigation." },
    ],
    process: [
      { step: "Discovery", description: "We clarify goals, audience, content, and technical requirements." },
      { step: "Structure", description: "We define pages, navigation, and conversion paths." },
      { step: "Design & build", description: "We design and develop your site with performance in mind." },
      { step: "Launch", description: "We deploy, test, and hand over with guidance for updates." },
    ],
    deliverables: ["Responsive website", "SEO metadata setup", "Contact/quote integration", "Launch support"],
    faqs: [
      { question: "Do you build business and personal websites?", answer: "Yes. We build websites for companies, freelancers, creators, and professionals." },
      { question: "Will my website be mobile-friendly?", answer: "Yes. All websites are designed mobile-first and tested across screen sizes." },
      { question: "Can you help with website content?", answer: "We can guide page structure and content placement. Copywriting can be scoped separately if needed." },
    ],
    relatedSlugs: ["software-development", "digital-presence", "branding"],
    metadata: {
      title: "Web Development Morocco | Custom Websites | OryntLabs Rabat",
      description:
        "Professional website development in Morocco. Business sites, portfolios, and web apps built for performance and SEO. Based in Rabat. Request a quote.",
      keywords: ["web development Morocco", "website development Rabat", "business website Morocco"],
    },
  }),

  "software-development": service({
    slug: "software-development",
    title: "Software Development",
    h1: "Custom Software Development in Morocco",
    intro:
      "We develop custom software solutions that help businesses automate workflows, manage operations, and deliver better digital experiences.",
    valueProposition: "Tailored software built around your processes, users, and growth plans.",
    category: "technology",
    audience: "b2b",
    primaryKeyword: "custom software development Morocco",
    includes: ["Requirements analysis", "System architecture", "Backend and frontend development", "API integrations", "Testing and deployment"],
    benefits: [
      { title: "Built for your workflow", description: "Software shaped around real business processes, not generic templates." },
      { title: "Scalable architecture", description: "Foundations designed to grow with your operations." },
      { title: "Integrated ecosystem", description: "Connect with websites, apps, and third-party tools." },
    ],
    process: [
      { step: "Scoping", description: "Define features, users, and technical constraints." },
      { step: "Architecture", description: "Plan data models, APIs, and system components." },
      { step: "Development", description: "Build, test, and iterate in structured milestones." },
      { step: "Deployment", description: "Launch with documentation and support options." },
    ],
    deliverables: ["Custom application", "Technical documentation", "Deployment setup", "Support handover"],
    faqs: [
      { question: "What types of software do you build?", answer: "Internal tools, customer platforms, dashboards, automation systems, and custom business applications." },
      { question: "Do you integrate with existing systems?", answer: "Yes. We can integrate with APIs, CRMs, payment systems, and other third-party services where applicable." },
    ],
    relatedSlugs: ["web-development", "ai-solutions", "saas-development"],
    metadata: {
      title: "Custom Software Development Morocco | OryntLabs",
      description: "Custom software development for businesses in Morocco. Web apps, internal tools, and integrated systems. Request a quote from OryntLabs Rabat.",
      keywords: ["custom software development Morocco", "software company Morocco"],
    },
  }),

  "mobile-app-development": service({
    slug: "mobile-app-development",
    title: "Mobile App Development",
    h1: "Mobile App Development in Morocco",
    intro: "We design and build mobile applications for iOS, Android, and cross-platform use cases.",
    valueProposition: "Mobile experiences that connect your users to your product or service anywhere.",
    category: "technology",
    audience: "both",
    primaryKeyword: "mobile app development Morocco",
    includes: ["UX planning", "UI design", "Native or cross-platform development", "API integration", "App store preparation support"],
    benefits: [
      { title: "User-centered apps", description: "Interfaces designed for clarity and everyday use." },
      { title: "Cross-platform options", description: "Build efficiently for multiple platforms when it fits the project." },
      { title: "Connected products", description: "Integrate with websites, dashboards, and backend systems." },
    ],
    process: [
      { step: "Product definition", description: "Clarify users, features, and platform strategy." },
      { step: "Design", description: "Create flows and UI aligned with your brand." },
      { step: "Build", description: "Develop and test core features." },
      { step: "Launch", description: "Prepare release and post-launch improvements." },
    ],
    deliverables: ["Mobile application", "Design assets", "Release support", "Documentation"],
    faqs: [
      { question: "Do you build iOS and Android apps?", answer: "Yes. We can build native or cross-platform apps depending on project requirements." },
    ],
    relatedSlugs: ["software-development", "web-development", "saas-development"],
    metadata: {
      title: "Mobile App Development Morocco | OryntLabs Rabat",
      description: "Mobile app development in Morocco for iOS, Android, and cross-platform projects. Based in Rabat. Start your app project with OryntLabs.",
      keywords: ["mobile app development Morocco", "app development Rabat"],
    },
  }),

  "ai-solutions": service({
    slug: "ai-solutions",
    title: "AI Solutions",
    h1: "AI Solutions for Businesses in Morocco",
    intro: "We integrate AI capabilities into digital products and business workflows — from intelligent features to automation that saves time.",
    valueProposition: "Practical AI implementations tied to real business outcomes, not buzzwords.",
    category: "technology",
    audience: "b2b",
    primaryKeyword: "AI solutions Morocco",
    includes: ["AI feature planning", "Workflow automation", "LLM integrations", "Custom AI product features", "Evaluation and iteration"],
    benefits: [
      { title: "Practical use cases", description: "AI applied where it improves efficiency, support, or product value." },
      { title: "Product integration", description: "Embed intelligence into existing websites, apps, and platforms." },
      { title: "Responsible implementation", description: "Clear scope, testing, and human oversight where needed." },
    ],
    process: [
      { step: "Use case discovery", description: "Identify where AI creates measurable value." },
      { step: "Solution design", description: "Define models, integrations, and data requirements." },
      { step: "Implementation", description: "Build and validate AI features in production context." },
      { step: "Optimization", description: "Monitor, refine, and expand based on results." },
    ],
    deliverables: ["AI-enabled features", "Integration setup", "Usage guidelines", "Support documentation"],
    faqs: [
      { question: "Is OryntLabs only an AI company?", answer: "No. AI is one part of our broader digital, design, printing, and presence services." },
      { question: "Can AI be added to an existing product?", answer: "Yes, when the product architecture and use case support it." },
    ],
    relatedSlugs: ["software-development", "saas-development", "digital-transformation"],
    metadata: {
      title: "AI Solutions Morocco | Business AI Development | OryntLabs",
      description: "AI solutions for businesses in Morocco. Automation, intelligent features, and practical AI integrations. Based in Rabat.",
      keywords: ["AI solutions Morocco", "AI development Morocco"],
    },
  }),

  "saas-development": service({
    slug: "saas-development",
    title: "SaaS Development",
    h1: "SaaS Development in Morocco",
    intro: "We help businesses plan, build, and launch subscription-based software products with scalable foundations.",
    valueProposition: "From MVP to growth-ready SaaS platforms built for reliability and user experience.",
    category: "technology",
    audience: "b2b",
    primaryKeyword: "SaaS development Morocco",
    includes: ["Product scoping", "Multi-tenant architecture planning", "Subscription flows", "Admin dashboards", "Analytics foundations"],
    benefits: [
      { title: "Launch-ready MVPs", description: "Ship a focused first version with room to grow." },
      { title: "Scalable foundations", description: "Architecture designed for product evolution." },
      { title: "User experience focus", description: "Onboarding, retention, and clarity built in." },
    ],
    process: [
      { step: "Product strategy", description: "Define users, pricing model, and core features." },
      { step: "MVP scope", description: "Prioritize the smallest valuable product." },
      { step: "Build & test", description: "Develop, QA, and prepare for launch." },
      { step: "Iterate", description: "Improve based on user feedback and metrics." },
    ],
    deliverables: ["SaaS platform MVP", "Admin tools", "Deployment setup", "Launch checklist"],
    faqs: [
      { question: "Can you help from idea to launch?", answer: "Yes. We support product definition, design, development, and launch planning." },
    ],
    relatedSlugs: ["software-development", "ai-solutions", "web-development"],
    metadata: {
      title: "SaaS Development Morocco | Product Engineering | OryntLabs",
      description: "SaaS development in Morocco. Build subscription software products with scalable architecture. OryntLabs Rabat.",
      keywords: ["SaaS development Morocco", "SaaS product development"],
    },
  }),

  "digital-transformation": service({
    slug: "digital-transformation",
    title: "Digital Transformation",
    h1: "Digital Transformation for Moroccan Businesses",
    intro: "We help businesses modernize operations, improve digital workflows, and build the tools and presence needed to compete online.",
    valueProposition: "Structured digital change across websites, software, branding, and online presence.",
    category: "technology",
    audience: "b2b",
    primaryKeyword: "digital transformation Morocco",
    includes: ["Digital audit", "Process mapping", "Tool and platform recommendations", "Implementation support", "Training handover"],
    benefits: [
      { title: "Holistic approach", description: "Technology, design, and presence aligned to business goals." },
      { title: "Practical roadmap", description: "Prioritized steps instead of vague transformation talk." },
      { title: "Execution support", description: "We help implement, not just advise." },
    ],
    process: [
      { step: "Assessment", description: "Review current tools, workflows, and digital gaps." },
      { step: "Roadmap", description: "Define priorities, timeline, and budget phases." },
      { step: "Implementation", description: "Build and deploy the agreed solutions." },
      { step: "Adoption", description: "Support team onboarding and iteration." },
    ],
    deliverables: ["Transformation roadmap", "Implemented solutions", "Documentation", "Support period"],
    faqs: [
      { question: "Is digital transformation only for large companies?", answer: "No. SMEs and growing businesses often benefit most from focused, phased digital improvements." },
    ],
    relatedSlugs: ["web-development", "software-development", "digital-presence"],
    metadata: {
      title: "Digital Transformation Morocco | SME Digitalization | OryntLabs",
      description: "Digital transformation services for businesses in Morocco. Modernize workflows, tools, and online presence with OryntLabs Rabat.",
      keywords: ["digital transformation Morocco", "SME digitalization Morocco"],
    },
  }),

  design: service({
    slug: "design",
    title: "Design Services",
    h1: "Graphic Design Services in Morocco",
    intro: "Professional design services for businesses and individuals — from visual identity to marketing materials and personal branding assets.",
    valueProposition: "Design that communicates clearly, looks professional, and works across digital and print.",
    category: "design",
    audience: "both",
    primaryKeyword: "graphic design Morocco",
    includes: ["Visual concept development", "Brand-aligned design", "Marketing and social assets", "Print-ready files", "Revision rounds"],
    benefits: [
      { title: "Consistent identity", description: "Designs that align with your brand across channels." },
      { title: "Print and digital ready", description: "Assets prepared for web, social, and print use." },
      { title: "Professional presentation", description: "Stand out with polished, credible visuals." },
    ],
    process: [
      { step: "Brief", description: "Understand goals, audience, and style direction." },
      { step: "Concepts", description: "Present design directions for feedback." },
      { step: "Refinement", description: "Finalize chosen direction with revisions." },
      { step: "Delivery", description: "Provide files in required formats." },
    ],
    deliverables: ["Design files", "Export formats", "Usage guidance"],
    faqs: [
      { question: "Do you design for both businesses and individuals?", answer: "Yes. We create designs for companies, freelancers, job seekers, and creators." },
    ],
    relatedSlugs: ["logo-design", "branding", "social-media-design"],
    metadata: {
      title: "Graphic Design Morocco | Creative Design Services | OryntLabs",
      description: "Graphic design services in Morocco for businesses and individuals. Brand visuals, marketing design, and creative assets. Rabat.",
      keywords: ["graphic design Morocco", "creative design services Rabat"],
    },
  }),

  "logo-design": service({
    slug: "logo-design",
    title: "Logo Design",
    h1: "Logo Design in Morocco",
    intro: "We create distinctive logos that represent your brand clearly across digital and print touchpoints.",
    valueProposition: "Memorable logos built for real-world use — websites, cards, social profiles, and print.",
    category: "design",
    audience: "both",
    primaryKeyword: "logo design Morocco",
    includes: ["Brand discovery", "Concept exploration", "Logo refinement", "Color and typography direction", "Export package"],
    benefits: [
      { title: "Distinct identity", description: "A logo that fits your brand personality and audience." },
      { title: "Versatile formats", description: "Files for web, social, and print applications." },
      { title: "Foundation for branding", description: "A strong base for broader brand identity work." },
    ],
    process: [
      { step: "Discovery", description: "Learn about your brand, values, and preferences." },
      { step: "Concepts", description: "Explore visual directions." },
      { step: "Refinement", description: "Polish the selected logo." },
      { step: "Delivery", description: "Provide final logo files and usage notes." },
    ],
    deliverables: ["Primary logo", "Variations", "Color versions", "File exports"],
    faqs: [
      { question: "Can logo design include brand guidelines?", answer: "Yes. Branding packages can include broader identity guidelines beyond the logo alone." },
    ],
    relatedSlugs: ["branding", "business-card-design", "design"],
    metadata: {
      title: "Logo Design Morocco | Professional Logo Design | OryntLabs",
      description: "Professional logo design in Morocco for businesses and individuals. Distinctive logos for digital and print. Request a quote.",
      keywords: ["logo design Morocco", "professional logo design Rabat"],
    },
  }),

  branding: service({
    slug: "branding",
    title: "Branding",
    h1: "Branding Services in Morocco",
    intro: "We help businesses and professionals build cohesive brand identities — from logos and colors to voice and visual systems.",
    valueProposition: "Brand identity that looks professional and works consistently everywhere you show up.",
    category: "design",
    audience: "both",
    primaryKeyword: "branding services Morocco",
    includes: ["Brand strategy basics", "Logo and visual identity", "Color and typography systems", "Brand asset templates", "Guidelines document"],
    benefits: [
      { title: "Cohesive presence", description: "One identity across website, social, and print." },
      { title: "Professional credibility", description: "Build trust with consistent visual communication." },
      { title: "Scalable assets", description: "Templates and systems for ongoing use." },
    ],
    process: [
      { step: "Brand discovery", description: "Define positioning, audience, and personality." },
      { step: "Identity design", description: "Create logo, colors, and visual language." },
      { step: "System build", description: "Develop templates and usage rules." },
      { step: "Handover", description: "Deliver assets and guidelines." },
    ],
    deliverables: ["Brand identity package", "Guidelines", "Template assets"],
    faqs: [
      { question: "Is branding only for companies?", answer: "No. Personal brands, freelancers, and creators also benefit from professional branding." },
    ],
    relatedSlugs: ["logo-design", "business-card-design", "social-media-design"],
    metadata: {
      title: "Branding Services Morocco | Brand Identity Design | OryntLabs",
      description: "Branding and brand identity services in Morocco. Logos, visual systems, and professional brand assets. OryntLabs Rabat.",
      keywords: ["branding services Morocco", "brand identity design"],
    },
  }),

  "social-media-design": service({
    slug: "social-media-design",
    title: "Social Media Design",
    h1: "Social Media Design in Morocco",
    intro: "We create social media visuals that align with your brand and help your content look professional across platforms.",
    valueProposition: "On-brand social graphics that improve clarity, consistency, and engagement.",
    category: "design",
    audience: "both",
    primaryKeyword: "social media design Morocco",
    includes: ["Post templates", "Story graphics", "Campaign visuals", "Profile/cover assets", "Brand-consistent layouts"],
    benefits: [
      { title: "Consistent feed", description: "Visual cohesion across posts and campaigns." },
      { title: "Platform-ready formats", description: "Designs sized for major social platforms." },
      { title: "Brand alignment", description: "Graphics that match your identity and message." },
    ],
    process: [
      { step: "Audit", description: "Review brand, platforms, and content needs." },
      { step: "Templates", description: "Create reusable design systems." },
      { step: "Production", description: "Design campaign or ongoing post assets." },
      { step: "Delivery", description: "Export files ready to publish." },
    ],
    deliverables: ["Social templates", "Campaign graphics", "Export files"],
    faqs: [
      { question: "Do you manage social media accounts?", answer: "Our focus is design and digital solutions. Social management can be scoped separately if needed." },
    ],
    relatedSlugs: ["branding", "design", "digital-presence"],
    metadata: {
      title: "Social Media Design Morocco | Social Graphics | OryntLabs",
      description: "Social media design in Morocco. On-brand posts, stories, and campaign graphics for businesses and creators.",
      keywords: ["social media design Morocco", "social media graphics"],
    },
  }),

  "cv-design": service({
    slug: "cv-design",
    title: "CV Design",
    h1: "Professional CV Design in Morocco",
    intro: "Stand out with a professionally designed CV that presents your experience clearly and credibly.",
    valueProposition: "CV designs that help job seekers and professionals make a strong first impression.",
    category: "design",
    audience: "b2c",
    primaryKeyword: "CV design Morocco",
    includes: ["Layout design", "Typography and structure", "Content formatting guidance", "PDF export", "Optional matching cover letter design"],
    benefits: [
      { title: "Clear presentation", description: "Experience and skills organized for quick reading." },
      { title: "Professional look", description: "Design that supports your personal brand." },
      { title: "Print and digital ready", description: "Files suitable for applications and email." },
    ],
    process: [
      { step: "Content review", description: "Understand your background and target roles." },
      { step: "Design", description: "Create a clean, professional layout." },
      { step: "Refinement", description: "Adjust content placement and styling." },
      { step: "Delivery", description: "Provide editable and PDF versions where agreed." },
    ],
    deliverables: ["Designed CV", "PDF export", "Optional cover letter"],
    faqs: [
      { question: "Can you write my CV content?", answer: "We focus on design and structure. Content writing can be discussed if needed." },
    ],
    relatedSlugs: ["branding", "business-card-design", "web-development"],
    metadata: {
      title: "CV Design Morocco | Professional Resume Design | OryntLabs",
      description: "Professional CV design in Morocco for job seekers and professionals. Clean, modern resume layouts. Request a quote.",
      keywords: ["CV design Morocco", "professional resume design"],
    },
  }),

  "business-card-design": service({
    slug: "business-card-design",
    title: "Business Card Design",
    h1: "Business Card Design in Morocco",
    intro: "Professional business card designs for companies and individuals — ready for print and consistent with your brand.",
    valueProposition: "Business cards that look credible, readable, and aligned with your identity.",
    category: "design",
    audience: "both",
    primaryKeyword: "business card design Morocco",
    includes: ["Layout design", "Brand alignment", "Print-ready files", "Front/back design", "Revision rounds"],
    benefits: [
      { title: "Professional first impression", description: "Cards that reflect your brand quality." },
      { title: "Print-ready delivery", description: "Files prepared for production." },
      { title: "Design + print path", description: "Combine with our printing services seamlessly." },
    ],
    process: [
      { step: "Brief", description: "Collect brand assets and contact details." },
      { step: "Design", description: "Create card layouts." },
      { step: "Approval", description: "Refine and finalize." },
      { step: "Handover", description: "Deliver print-ready files or proceed to printing." },
    ],
    deliverables: ["Print-ready card design", "PDF/AI exports"],
    faqs: [
      { question: "Can you design and print business cards?", answer: "Yes. We offer both business card design and printing services." },
    ],
    relatedSlugs: ["business-card-printing", "branding", "logo-design"],
    metadata: {
      title: "Business Card Design Morocco | Professional Cards | OryntLabs",
      description: "Business card design in Morocco for businesses and professionals. Print-ready designs aligned with your brand.",
      keywords: ["business card design Morocco", "professional business card design"],
    },
  }),

  printing: service({
    slug: "printing",
    title: "Printing Services",
    h1: "Printing Services in Morocco",
    intro: "OryntLabs Printing is the professional printing division of OryntLabs, providing business printing, marketing materials, signage, stickers, brochures, business cards, posters and custom printing services for businesses and individuals in Rabat and across Morocco.",
    valueProposition: "Design and print in one place, with quality materials and clear quote-based pricing.",
    category: "printing",
    audience: "both",
    primaryKeyword: "printing services Morocco",
    includes: ["Business cards", "Flyers and brochures", "Posters and stickers", "Catalogues and documents", "Custom print projects"],
    benefits: [
      { title: "One partner", description: "Combine design and print for consistent results." },
      { title: "Flexible quantities", description: "From small runs to larger orders based on project needs." },
      { title: "Professional finish", description: "Quality materials and finishing options." },
    ],
    process: [
      { step: "Quote request", description: "Share format, quantity, and specifications." },
      { step: "File preparation", description: "Confirm or create print-ready artwork." },
      { step: "Production", description: "Print with agreed materials and finishing." },
      { step: "Delivery", description: "Pickup or delivery as arranged." },
    ],
    deliverables: ["Printed materials", "Proof approval where applicable"],
    faqs: [
      { question: "Do you offer design and printing together?", answer: "Yes. We can handle design, print-ready preparation, and production." },
      { question: "What printing services are available?", answer: "Business cards, flyers, brochures, posters, stickers, catalogues, invitations, menus, and custom print." },
    ],
    relatedSlugs: ["digital-printing", "business-card-printing", "custom-printing"],
    metadata: {
      title: "OryntLabs Printing | Professional Printing Services in Morocco",
      description: "OryntLabs Printing is the professional printing division of OryntLabs. Business cards, flyers, brochures, posters, and custom printing in Rabat, Morocco. Request a print quote.",
      keywords: ["printing services Morocco", "OryntLabs Printing", "print shop Rabat"],
    },
  }),

  "digital-printing": service({
    slug: "digital-printing",
    title: "Digital Printing",
    h1: "Digital Printing in Morocco",
    intro: "Fast, flexible digital printing for marketing materials, business stationery, and custom projects.",
    valueProposition: "Quality digital printing with quick turnaround for businesses and individuals.",
    category: "printing",
    audience: "both",
    primaryKeyword: "digital printing Morocco",
    includes: ["Short to medium print runs", "Marketing collateral", "Business stationery", "Custom formats", "Finishing options"],
    benefits: [
      { title: "Flexible runs", description: "Suitable for smaller quantities and fast updates." },
      { title: "Sharp output", description: "Clean results for text-heavy and visual materials." },
      { title: "Quick turnaround", description: "Ideal for time-sensitive projects." },
    ],
    process: [
      { step: "Specifications", description: "Confirm size, paper, and quantity." },
      { step: "Artwork check", description: "Review or prepare print files." },
      { step: "Print", description: "Produce your order." },
      { step: "Delivery", description: "Handover or delivery as agreed." },
    ],
    deliverables: ["Printed materials"],
    faqs: [
      { question: "When is digital printing a good choice?", answer: "Digital printing works well for smaller runs, fast turnaround, and variable content needs." },
    ],
    relatedSlugs: ["printing", "flyer-printing", "business-card-printing"],
    metadata: {
      title: "Digital Printing Morocco | Digital Printing Rabat | OryntLabs",
      description: "Digital printing in Morocco and Rabat. Flyers, cards, brochures, and custom print with flexible quantities.",
      keywords: ["digital printing Morocco", "digital printing Rabat"],
    },
    printingDetails: {
      formats: ["A6", "A5", "A4", "A3", "Custom sizes"],
      materials: ["Standard and premium paper stocks", "Card stock for business cards"],
      finishing: ["Cutting", "Folding", "Lamination where available"],
      delivery: "Rabat and Morocco — [REQUIRES REAL BUSINESS DATA for exact delivery zones]",
    },
  }),

  "business-card-printing": service({
    slug: "business-card-printing",
    title: "Business Card Printing",
    h1: "Business Card Printing in Morocco",
    intro: "Professional business card printing for companies and individuals, with optional design support.",
    valueProposition: "High-quality business cards that represent your brand professionally.",
    category: "printing",
    audience: "both",
    primaryKeyword: "business card printing Morocco",
    includes: ["Standard and premium card stocks", "Single or double-sided printing", "Design integration", "Proof review", "Quantity options"],
    benefits: [
      { title: "Professional finish", description: "Cards suitable for networking and client meetings." },
      { title: "Brand consistency", description: "Match your existing identity or create new designs." },
      { title: "Easy ordering", description: "Request a quote with your specifications." },
    ],
    process: [
      { step: "Specs", description: "Choose size, finish, and quantity." },
      { step: "Artwork", description: "Submit or request design." },
      { step: "Print", description: "Produce your cards." },
      { step: "Delivery", description: "Receive your order." },
    ],
    deliverables: ["Printed business cards"],
    faqs: [
      { question: "Can you design my business cards too?", answer: "Yes. See our business card design service or request both together." },
    ],
    relatedSlugs: ["business-card-design", "digital-printing", "printing"],
    metadata: {
      title: "Business Card Printing Morocco | Print Business Cards | OryntLabs",
      description: "Business card printing in Morocco and Rabat. Professional cards for businesses and individuals. Request a quote.",
      keywords: ["business card printing Morocco", "business card printing Rabat"],
    },
    printingDetails: {
      formats: ["Standard business card sizes", "Custom sizes on request"],
      materials: ["Matte and gloss card stock options"],
      finishing: ["Rounded corners on request", "Double-sided printing"],
      delivery: "Rabat and Morocco — [REQUIRES REAL BUSINESS DATA]",
    },
  }),

  "flyer-printing": service({
    slug: "flyer-printing",
    title: "Flyer Printing",
    h1: "Flyer Printing in Morocco",
    intro: "Eye-catching flyer printing for promotions, events, and marketing campaigns.",
    valueProposition: "Marketing flyers printed with clear quality and flexible quantity options.",
    category: "printing",
    audience: "both",
    primaryKeyword: "flyer printing Morocco",
    includes: ["Multiple sizes", "Single or double-sided", "Design support", "Bulk quantities", "Fast turnaround options"],
    benefits: [
      { title: "Campaign-ready", description: "Flyers designed and printed for real distribution." },
      { title: "Flexible formats", description: "Choose sizes that fit your promotion." },
      { title: "Design support", description: "Create artwork if you do not have print-ready files." },
    ],
    process: [
      { step: "Brief", description: "Define campaign message and format." },
      { step: "Design/file prep", description: "Prepare artwork for print." },
      { step: "Print", description: "Produce your flyers." },
      { step: "Delivery", description: "Receive your order." },
    ],
    deliverables: ["Printed flyers"],
    faqs: [],
    relatedSlugs: ["digital-printing", "brochure-printing", "printing"],
    metadata: {
      title: "Flyer Printing Morocco | Marketing Flyers | OryntLabs",
      description: "Flyer printing in Morocco. Promotional flyers for businesses and events in Rabat. Request a print quote.",
      keywords: ["flyer printing Morocco", "flyer printing Rabat"],
    },
  }),

  "brochure-printing": service({
    slug: "brochure-printing",
    title: "Brochure Printing",
    h1: "Brochure Printing in Morocco",
    intro: "Professional brochure printing for product showcases, company profiles, and marketing materials.",
    valueProposition: "Brochures that present your offer clearly and professionally.",
    category: "printing",
    audience: "b2b",
    primaryKeyword: "brochure printing Morocco",
    includes: ["Bi-fold and tri-fold options", "Premium paper choices", "Design integration", "Proofing", "Quantity options"],
    benefits: [
      { title: "Sales support", description: "Leave-behind materials for meetings and events." },
      { title: "Structured storytelling", description: "Present services and products clearly." },
      { title: "Brand-aligned design", description: "Consistent with your visual identity." },
    ],
    process: [
      { step: "Scope", description: "Define pages, fold, and quantity." },
      { step: "Design", description: "Create or prepare brochure artwork." },
      { step: "Print", description: "Produce brochures." },
      { step: "Delivery", description: "Handover completed order." },
    ],
    deliverables: ["Printed brochures"],
    faqs: [],
    relatedSlugs: ["catalogue-printing", "digital-printing", "printing"],
    metadata: {
      title: "Brochure Printing Morocco | Company Brochures | OryntLabs",
      description: "Brochure printing in Morocco for businesses. Professional marketing brochures in Rabat. Request a quote.",
      keywords: ["brochure printing Morocco", "brochure printing Rabat"],
    },
  }),

  "poster-printing": service({
    slug: "poster-printing",
    title: "Poster Printing",
    h1: "Poster Printing in Morocco",
    intro: "Poster and large-format printing for events, retail, offices, and promotional campaigns.",
    valueProposition: "High-impact posters with sizes suited to your display needs.",
    category: "printing",
    audience: "both",
    primaryKeyword: "poster printing Morocco",
    includes: ["Multiple poster sizes", "Large-format options", "Design support", "Indoor display materials"],
    benefits: [
      { title: "High visibility", description: "Strong visual presence for events and promotions." },
      { title: "Custom sizes", description: "Options based on display location." },
      { title: "Design assistance", description: "Support creating effective poster artwork." },
    ],
    process: [
      { step: "Requirements", description: "Confirm size, quantity, and usage." },
      { step: "Artwork", description: "Prepare high-resolution files." },
      { step: "Print", description: "Produce posters." },
      { step: "Delivery", description: "Receive finished prints." },
    ],
    deliverables: ["Printed posters"],
    faqs: [],
    relatedSlugs: ["sticker-printing", "digital-printing", "printing"],
    metadata: {
      title: "Poster Printing Morocco | Large Format Print | OryntLabs",
      description: "Poster printing in Morocco. Event, retail, and promotional posters in Rabat. Request a quote.",
      keywords: ["poster printing Morocco", "large format printing Rabat"],
    },
  }),

  "sticker-printing": service({
    slug: "sticker-printing",
    title: "Sticker Printing",
    h1: "Sticker Printing in Morocco",
    intro: "Custom sticker printing for branding, packaging, events, and promotions.",
    valueProposition: "Custom stickers that extend your brand to products, packaging, and everyday touchpoints.",
    category: "printing",
    audience: "both",
    primaryKeyword: "sticker printing Morocco",
    includes: ["Custom shapes and sizes", "Branded sticker sheets", "Product labels", "Event stickers"],
    benefits: [
      { title: "Brand visibility", description: "Affordable, repeatable brand touchpoints." },
      { title: "Custom formats", description: "Stickers sized for your use case." },
      { title: "Design support", description: "Create sticker artwork aligned with your identity." },
    ],
    process: [
      { step: "Specs", description: "Define size, shape, and quantity." },
      { step: "Design", description: "Prepare artwork." },
      { step: "Print", description: "Produce stickers." },
      { step: "Delivery", description: "Receive order." },
    ],
    deliverables: ["Printed stickers"],
    faqs: [],
    relatedSlugs: ["custom-printing", "poster-printing", "printing"],
    metadata: {
      title: "Sticker Printing Morocco | Custom Stickers | OryntLabs",
      description: "Custom sticker printing in Morocco. Brand, product, and event stickers in Rabat. Request a quote.",
      keywords: ["sticker printing Morocco", "custom stickers Rabat"],
    },
  }),

  "catalogue-printing": service({
    slug: "catalogue-printing",
    title: "Catalogue Printing",
    h1: "Catalogue Printing in Morocco",
    intro: "Product and service catalogue printing for businesses that need structured, professional printed materials.",
    valueProposition: "Catalogues that showcase your products and services clearly.",
    category: "printing",
    audience: "b2b",
    primaryKeyword: "catalogue printing Morocco",
    includes: ["Multi-page catalogues", "Product layouts", "Binding options", "Design integration", "Volume printing"],
    benefits: [
      { title: "Sales enablement", description: "Support field sales and showrooms with printed catalogues." },
      { title: "Structured presentation", description: "Organize products and services professionally." },
      { title: "Brand consistency", description: "Aligned with your visual identity." },
    ],
    process: [
      { step: "Planning", description: "Define pages, structure, and quantity." },
      { step: "Design/layout", description: "Prepare catalogue content and visuals." },
      { step: "Print", description: "Produce bound catalogues." },
      { step: "Delivery", description: "Deliver finished materials." },
    ],
    deliverables: ["Printed catalogues"],
    faqs: [],
    relatedSlugs: ["brochure-printing", "printing", "branding"],
    metadata: {
      title: "Catalogue Printing Morocco | Product Catalogues | OryntLabs",
      description: "Catalogue printing in Morocco for businesses. Product and service catalogues in Rabat. Request a quote.",
      keywords: ["catalogue printing Morocco", "product catalogue printing"],
    },
  }),

  "custom-printing": service({
    slug: "custom-printing",
    title: "Custom Printing",
    h1: "Custom Printing in Morocco",
    intro: "Custom print projects for unique formats, materials, and campaign needs beyond standard templates.",
    valueProposition: "Tell us what you need printed — we will scope materials, formats, and production.",
    category: "printing",
    audience: "both",
    primaryKeyword: "custom printing Morocco",
    includes: ["Custom sizes and formats", "Special materials", "Invitations and menus", "Documents", "Campaign-specific print"],
    benefits: [
      { title: "Flexible production", description: "Projects tailored to your specifications." },
      { title: "Design support", description: "Help preparing artwork when needed." },
      { title: "Single partner", description: "Design, prep, and print coordinated in one place." },
    ],
    process: [
      { step: "Request", description: "Describe your custom print need." },
      { step: "Quote", description: "Confirm feasibility, materials, and pricing." },
      { step: "Production", description: "Print to agreed specifications." },
      { step: "Delivery", description: "Complete the order." },
    ],
    deliverables: ["Custom printed materials"],
    faqs: [
      { question: "What custom print projects do you handle?", answer: "Invitations, menus, documents, advertising materials, and other formats based on project requirements." },
    ],
    relatedSlugs: ["printing", "digital-printing", "business-card-printing"],
    metadata: {
      title: "Custom Printing Morocco | Print On Demand | OryntLabs",
      description: "Custom printing in Morocco. Unique formats, materials, and print projects for businesses and individuals. Request a quote.",
      keywords: ["custom printing Morocco", "print on demand Morocco"],
    },
  }),

  "domain-hosting": service({
    slug: "domain-hosting",
    title: "Domain & Hosting",
    h1: "Domain and Hosting in Morocco",
    intro: "Get your domain and hosting set up with a partner that can also build and maintain your website.",
    valueProposition: "Domain, hosting, and website creation support in one digital presence workflow.",
    category: "presence",
    audience: "both",
    primaryKeyword: "domain and hosting Morocco",
    includes: ["Domain registration guidance", "Hosting setup", "DNS configuration", "SSL setup", "Website deployment support"],
    benefits: [
      { title: "Simplified setup", description: "One team for domain, hosting, and site launch." },
      { title: "Secure foundation", description: "HTTPS and basic security configuration." },
      { title: "Growth path", description: "Upgrade hosting as your traffic and needs grow." },
    ],
    process: [
      { step: "Plan", description: "Choose domain and hosting requirements." },
      { step: "Setup", description: "Configure domain, DNS, and hosting." },
      { step: "Deploy", description: "Connect your website or application." },
      { step: "Support", description: "Ongoing maintenance options if needed." },
    ],
    deliverables: ["Configured domain/hosting", "Deployment support"],
    faqs: [
      { question: "Can you also build my website?", answer: "Yes. Domain and hosting can be combined with our web development services." },
    ],
    relatedSlugs: ["digital-presence", "web-development", "google-business-profile"],
    metadata: {
      title: "Domain and Hosting Morocco | Website Hosting | OryntLabs",
      description: "Domain registration and website hosting in Morocco. Setup support with website creation from OryntLabs Rabat.",
      keywords: ["domain and hosting Morocco", "website hosting Morocco"],
    },
  }),

  "digital-presence": service({
    slug: "digital-presence",
    title: "Digital Presence",
    h1: "Digital Presence for Businesses and Individuals",
    intro: "Build a credible online presence with websites, branding, content materials, and discoverability foundations.",
    valueProposition: "Everything you need to show up professionally online — not just a website in isolation.",
    category: "presence",
    audience: "both",
    primaryKeyword: "digital presence for businesses",
    includes: ["Website creation", "Brand-aligned content materials", "Basic SEO setup", "Contact and lead paths", "Google presence guidance"],
    benefits: [
      { title: "Cohesive online image", description: "Website, visuals, and messaging aligned." },
      { title: "Discoverability basics", description: "Foundations for search and local visibility." },
      { title: "Professional credibility", description: "Look trustworthy to customers and partners." },
    ],
    process: [
      { step: "Audit", description: "Review current online presence gaps." },
      { step: "Plan", description: "Define website, content, and visibility priorities." },
      { step: "Build", description: "Create site, assets, and listings support." },
      { step: "Launch", description: "Go live with a clear maintenance path." },
    ],
    deliverables: ["Online presence package components", "Launch checklist"],
    faqs: [
      { question: "Is digital presence only for businesses?", answer: "No. Individuals, freelancers, and creators also need professional online presence." },
    ],
    relatedSlugs: ["web-development", "google-business-profile", "branding"],
    metadata: {
      title: "Digital Presence Morocco | Online Presence Services | OryntLabs",
      description: "Digital presence services in Morocco. Websites, branding, and online visibility for businesses and individuals in Rabat.",
      keywords: ["digital presence for businesses", "online presence Morocco"],
    },
  }),

  "google-business-profile": service({
    slug: "google-business-profile",
    title: "Google Business Profile",
    h1: "Google Business Profile Setup in Morocco",
    intro: "Improve local discoverability with Google Business Profile setup and optimization support.",
    valueProposition: "Help customers find you on Google Search and Maps with a complete, accurate profile.",
    category: "presence",
    audience: "b2b",
    primaryKeyword: "Google Business Profile setup Morocco",
    includes: ["Profile creation or cleanup", "Business information alignment", "Category and service setup", "Photo guidance", "Basic optimization checklist"],
    benefits: [
      { title: "Local visibility", description: "Show up when people search for services in your area." },
      { title: "Accurate information", description: "Consistent NAP and business details." },
      { title: "Trust signals", description: "A complete profile looks more credible." },
    ],
    process: [
      { step: "Review", description: "Check existing profile or create new one." },
      { step: "Optimize", description: "Complete categories, services, and details." },
      { step: "Align", description: "Match website and contact information." },
      { step: "Guide", description: "Provide ongoing best practices." },
    ],
    deliverables: ["Optimized profile setup", "Checklist for ongoing updates"],
    faqs: [
      { question: "Do you manage reviews?", answer: "We focus on setup and optimization. Review management can be discussed separately." },
    ],
    relatedSlugs: ["digital-presence", "domain-hosting", "web-development"],
    metadata: {
      title: "Google Business Profile Morocco | Google Maps Presence | OryntLabs",
      description: "Google Business Profile setup in Morocco. Improve local visibility on Google Search and Maps. OryntLabs Rabat.",
      keywords: ["Google Business Profile setup Morocco", "Google Maps presence Rabat"],
    },
  }),
};

export const serviceSlugs = Object.keys(services);

export const hubPages = {
  "business-solutions": {
    slug: "business-solutions",
    h1: "Digital Solutions for Businesses in Morocco",
    intro: "We help businesses build websites, software, brand identity, print materials, and online presence — with one partner across technology, design, and production.",
    primaryKeyword: "digital solutions for businesses",
    featuredSlugs: [
      "web-development",
      "software-development",
      "ai-solutions",
      "saas-development",
      "digital-transformation",
      "branding",
      "business-card-printing",
      "google-business-profile",
    ],
    metadata: {
      title: "Business Digital Solutions Morocco | OryntLabs",
      description: "Digital solutions for Moroccan businesses: websites, software, AI, branding, printing, and online presence. Request a business quote.",
      keywords: ["digital solutions for businesses", "business website Morocco"],
    },
  },
  "individual-solutions": {
    slug: "individual-solutions",
    h1: "Digital Services for Individuals & Professionals",
    intro: "Personal websites, CV design, branding, business cards, and printing services for freelancers, job seekers, creators, and professionals.",
    primaryKeyword: "digital services for individuals",
    featuredSlugs: [
      "cv-design",
      "logo-design",
      "web-development",
      "business-card-design",
      "business-card-printing",
      "branding",
      "digital-presence",
    ],
    metadata: {
      title: "Digital Services for Individuals Morocco | OryntLabs",
      description: "Digital services for individuals in Morocco. Personal websites, CV design, branding, and printing. Start your project with OryntLabs.",
      keywords: ["digital services for individuals", "personal website Morocco"],
    },
  },
} as const;

export const products: Record<string, Product> = {
  langz: {
    slug: "langz",
    name: "Langz",
    status: "live",
    tagline: "AI-Powered Language Learning",
    description:
      "Langz is an intelligent language learning platform that adapts to your learning style, using AI to create personalized language learning experiences.",
    features: ["Personalized AI lessons", "Speech recognition", "Progress analytics"],
    metadata: {
      title: "Langz | AI Language Learning Platform | OryntLabs",
      description: "Langz is an AI-powered language learning platform with personalized lessons, speech recognition, and progress analytics.",
      keywords: ["Langz language learning", "AI language learning app"],
    },
  },
  mahamat: {
    slug: "mahamat",
    name: "Mahamat",
    status: "beta",
    tagline: "Task Marketplace",
    description:
      "Mahamat is a digital marketplace connecting skilled professionals with meaningful tasks and projects.",
    features: ["Smart matching", "Secure payments", "Real-time chat"],
    metadata: {
      title: "Mahamat | Task Marketplace | OryntLabs",
      description: "Mahamat connects skilled professionals with tasks and projects. Currently in beta.",
      keywords: ["Mahamat marketplace", "freelance marketplace Morocco"],
    },
  },
};

export const productSlugs = Object.keys(products);

export function getService(slug: string): Service | undefined {
  return services[slug];
}

export function getProduct(slug: string): Product | undefined {
  return products[slug];
}
