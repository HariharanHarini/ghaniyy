export interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  duration: string;
  image: string;
  featured?: boolean;
  description?: string;
  features?: string[];
}

export const products: Product[] = [
  // Main Featured Products with Exact Prices from Image
  {
    id: 'adobe-creative-cloud',
    name: 'Adobe Creative Cloud',
    category: 'Design',
    price: '₹499 - ₹2,399',
    duration: '1 Year',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800',
    featured: true,
    description: 'Complete Adobe Creative Cloud suite including Photoshop, Illustrator, Premiere Pro, After Effects, and 20+ creative apps.',
    features: ['20+ Creative Apps', 'Cloud Storage', 'Adobe Fonts', 'Regular Updates']
  },
  {
    id: 'adobe-software-pack',
    name: 'Adobe Software Pack',
    category: 'Design',
    price: '₹69 - ₹299',
    duration: 'Package',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800',
    description: 'Curated Adobe software bundle for professionals and students.',
    features: ['Multiple Adobe Apps', 'Cost-Effective', 'Instant Access']
  },
  {
    id: 'amazon-prime',
    name: 'Amazon Prime',
    category: 'Streaming',
    price: '₹199',
    duration: '6 Months',
    image: 'https://images.unsplash.com/photo-1643208589888-23447d7e747f?w=800',
    featured: true,
    description: 'Amazon Prime Video with unlimited streaming, Prime Shopping benefits, and more.',
    features: ['Prime Video', 'Free Delivery', 'Prime Music', 'Prime Reading']
  },
  {
    id: 'canva-pro',
    name: 'Canva Pro',
    category: 'Design',
    price: '₹29 - ₹1,199',
    duration: 'Monthly',
    image: 'https://i.pinimg.com/736x/ae/f1/66/aef16683ee0b5897a0775dd81f70156c.jpg',
    featured: true,
    description: 'Professional design tool with premium templates, brand kit, and magic resize features.',
    features: ['100M+ Premium Assets', 'Brand Kit', 'Magic Resize', 'Background Remover']
  },
  {
    id: 'canva-lifetime',
    name: 'Canva Pro Lifetime',
    category: 'Design',
    price: 'Premium',
    duration: 'Lifetime',
    image: 'https://i.pinimg.com/736x/a2/1d/1b/a21d1bde3b3f91ed0db0de9d279c4ed4.jpg',
    featured: true,
    description: 'Lifetime access to Canva Pro with all premium features.',
    features: ['Lifetime Access', 'All Pro Features', 'Unlimited Designs', 'Priority Support']
  },
  {
    id: 'canva-reseller',
    name: 'Canva Reseller + Adset Kit',
    category: 'Business',
    price: '₹299 - ₹1,499',
    duration: 'Package',
    image: 'https://images.unsplash.com/photo-1649091245823-18be815da4f7?w=800',
    description: 'Complete reseller package with Canva Pro and marketing ad templates.',
    features: ['Reseller Rights', 'Ad Templates', 'Marketing Materials']
  },
  {
    id: 'capcut-pro',
    name: 'Capcut Pro',
    category: 'Design',
    price: '₹149 - ₹329',
    duration: 'Monthly',
    image: 'https://i.pinimg.com/736x/80/0f/31/800f31dcd38e0b6129d6490d5df7df2c.jpg',
    description: 'Professional video editing tool with AI-powered features.',
    features: ['AI Video Editing', 'Premium Effects', 'No Watermark', 'HD Export']
  },
  {
    id: 'chatgpt-premium',
    name: 'ChatGPT Premium',
    category: 'AI',
    price: '₹449 - ₹1,499',
    duration: '1 Year',
    image: 'https://i.pinimg.com/736x/10/22/ae/1022ae29842a223040b19796bb5af7b3.jpg',
    featured: true,
    description: 'ChatGPT Plus/Premium with GPT-4 access, faster responses, and priority access.',
    features: ['GPT-4 Access', 'Faster Response', 'Priority Access', 'DALL-E Access']
  },
  {
    id: 'cosine-ai',
    name: 'Cosine AI',
    category: 'AI',
    price: '₹199 - ₹399',
    duration: 'Monthly',
    image: 'https://i.pinimg.com/1200x/06/18/46/061846cc0bf717a9976b9bcdcd8fc6f8.jpg',
    description: 'AI-powered coding assistant for developers.',
    features: ['Code Assistance', 'Bug Detection', 'Code Review', 'Multi-Language']
  },
  {
    id: 'cursor-ai-pro',
    name: 'Cursor AI Pro',
    category: 'AI',
    price: '₹1,999',
    duration: 'Monthly',
    image: 'https://i.pinimg.com/1200x/06/18/46/061846cc0bf717a9976b9bcdcd8fc6f8.jpg',
    description: 'Advanced AI code editor with intelligent code completion.',
    features: ['AI Code Completion', 'Smart Debugging', 'Multi-File Editing']
  },
  {
    id: 'elevenlabs-pro',
    name: 'Eleven Labs Pro',
    category: 'AI',
    price: '₹1,399',
    duration: 'Monthly',
    image: 'https://i.pinimg.com/736x/68/e7/30/68e7301585189ceac883b91f185ef293.jpg',
    description: 'Premium AI voice generation and text-to-speech service.',
    features: ['Natural Voices', 'Voice Cloning', 'Multiple Languages', 'High Quality Audio']
  },
  {
    id: 'gemini-pro',
    name: 'Gemini Pro',
    category: 'AI',
    price: '₹99 - ₹349',
    duration: 'Monthly',
    image: 'https://i.pinimg.com/1200x/08/6b/11/086b114c1094ac63db89dcbf8ee63de8.jpg',
    featured: true,
    description: 'Google Gemini Pro AI assistant with advanced capabilities.',
    features: ['Advanced AI', 'Multimodal', 'Fast Response', 'Google Integration']
  },
  {
    id: 'google-veo3',
    name: 'Google Veo3',
    category: 'AI',
    price: '₹699',
    duration: 'Monthly',
    image: 'https://i.pinimg.com/736x/7a/aa/17/7aaa1777868c37810cd73b1e81e65101.jpg',
    description: 'Google\'s advanced video generation AI model.',
    features: ['AI Video Generation', 'High Quality', 'Custom Styles']
  },
  {
    id: 'jio-hotstar',
    name: 'Jio Hotstar Premium',
    category: 'Streaming',
    price: '₹79 - ₹799',
    duration: 'Monthly',
    image: 'https://i.pinimg.com/1200x/3d/65/03/3d650388af374546ea7341abb6d57f00.jpg',
    description: 'Premium access to Disney+ Hotstar with live sports and exclusive content.',
    features: ['Live Sports', 'Disney+ Content', '4K Quality', 'Multi-Device']
  },
  {
    id: 'linkedin-premium',
    name: 'LinkedIn Premium',
    category: 'Professional',
    price: '₹499 - ₹899',
    duration: 'Monthly',
    image: 'https://images.unsplash.com/photo-1762340276999-f7a22a952dc2?w=800',
    featured: true,
    description: 'LinkedIn Premium for professional networking and job searching.',
    features: ['InMail Credits', 'Profile Insights', 'Learning Access', 'Job Insights']
  },
  {
    id: 'microsoft-365',
    name: 'Microsoft 365',
    category: 'Productivity',
    price: '₹399',
    duration: '1 Year',
    image: 'https://images.unsplash.com/photo-1671944378859-08bcfa15a280?w=800',
    featured: true,
    description: 'Complete Microsoft 365 suite with Word, Excel, PowerPoint, and more.',
    features: ['Office Apps', '1TB OneDrive', 'Teams', 'Outlook']
  },
  {
    id: 'netflix-premium',
    name: 'Netflix Premium',
    category: 'Streaming',
    price: '₹119 - ₹799',
    duration: 'Monthly',
    image: 'https://images.unsplash.com/photo-1616469829941-c7200edec809?w=800',
    featured: true,
    description: 'Netflix Premium with 4K streaming and multiple screens.',
    features: ['4K Ultra HD', '4 Screens', 'Unlimited Content', 'Download Offline']
  },
  {
    id: 'perplexity-pro',
    name: 'Perplexity Pro',
    category: 'AI',
    price: '₹119 - ₹699',
    duration: '1 Year',
    image: 'https://i.pinimg.com/1200x/0f/10/bb/0f10bb1512ad51eff3d5bc75fd16fe52.jpg',
    featured: true,
    description: 'Advanced AI search and research assistant.',
    features: ['AI Search', 'Research Tools', 'Unlimited Queries', 'Pro Models']
  },
  {
    id: 'reseller-kit',
    name: 'Reseller Business Kit',
    category: 'Business',
    price: '₹1,999 - ₹3,999',
    duration: 'Package',
    image: 'https://images.unsplash.com/photo-1649091245823-18be815da4f7?w=800',
    description: 'Complete business package for resellers with marketing materials.',
    features: ['Reseller License', 'Marketing Templates', 'Business Tools', 'Support']
  },
  {
    id: 'spotify-premium',
    name: 'Spotify Premium',
    category: 'Streaming',
    price: '₹129 - ₹999',
    duration: 'Monthly',
    image: 'https://images.unsplash.com/photo-1551817958-795f9440ce4d?w=800',
    featured: true,
    description: 'Ad-free music streaming with offline download.',
    features: ['Ad-Free', 'Offline Download', 'High Quality', 'Unlimited Skips']
  },
  {
    id: 'youtube-premium',
    name: 'YouTube Premium',
    category: 'Streaming',
    price: '₹79 - ₹799',
    duration: 'Monthly',
    image: 'https://images.unsplash.com/photo-1762340273700-70c17506e578?w=800',
    featured: true,
    description: 'Ad-free YouTube with background play and YouTube Music.',
    features: ['No Ads', 'Background Play', 'YouTube Music', 'Offline Downloads']
  },

  // Additional Premium Tools
  {
    id: 'framer-basic',
    name: 'Framer Basic',
    category: 'Design',
    price: '₹999',
    duration: '1 Year',
    image: 'https://i.pinimg.com/1200x/62/6a/b2/626ab25a4a065e8f276c1f102f2d0b14.jpg',
    description: 'Professional website builder for designers.',
    features: ['Responsive Design', 'Custom Code', 'CMS', 'SEO Tools']
  },
  {
    id: 'framer-pro',
    name: 'Framer Pro',
    category: 'Design',
    price: '₹1,499',
    duration: '1 Year',
    image: 'https://i.pinimg.com/1200x/2d/77/95/2d7795fea0c9f20c351a09f409c9427c.jpg',
    description: 'Advanced Framer with unlimited projects and premium features.',
    features: ['Unlimited Projects', 'Advanced Features', 'Priority Support', 'Custom Domain']
  },
  {
    id: 'autodesk-suite',
    name: 'Autodesk Suite',
    category: 'Engineering',
    price: '₹19,999',
    duration: '3 Years',
    image: 'https://i.pinimg.com/736x/ed/71/c5/ed71c510443257f952ba79e9c2ec4e39.jpg',
    description: 'Complete Autodesk suite for engineering and 3D design.',
    features: ['AutoCAD', 'Revit', '3ds Max', 'Maya', 'Fusion 360']
  },
  {
    id: 'grammarly-pro',
    name: 'Grammarly Pro',
    category: 'AI',
    price: '₹999',
    duration: '1 Year',
    image: 'https://i.pinimg.com/1200x/a9/bf/9f/a9bf9f39efe8d4dfac98bdfca855a457.jpg',
    description: 'Advanced writing assistant with grammar, style, and tone suggestions.',
    features: ['Grammar Check', 'Style Suggestions', 'Plagiarism Detector', 'Tone Adjustment']
  },
  {
    id: 'asana-advanced',
    name: 'Asana Advanced',
    category: 'Productivity',
    price: '₹1,199',
    duration: '6 Months',
    image: 'https://i.pinimg.com/736x/9d/84/8b/9d848be31941958b1902d85faa413222.jpg',
    description: 'Project management tool for teams.',
    features: ['Project Tracking', 'Timeline View', 'Advanced Search', 'Reporting']
  },
  {
    id: 'webflow-cms',
    name: 'Webflow CMS',
    category: 'Web Development',
    price: '₹1,299',
    duration: '1 Year',
    image: 'https://i.pinimg.com/736x/de/5e/1f/de5e1f5b215c1482cbcdcbca67a7f793.jpg',
    description: 'No-code website builder with powerful CMS.',
    features: ['Visual Editor', 'CMS', 'Hosting', 'SEO Tools']
  },
  {
    id: 'notion-business-ai',
    name: 'Notion Business + AI',
    category: 'Productivity',
    price: '₹1,499',
    duration: '6 Months',
    image: 'https://i.pinimg.com/1200x/3d/8b/ed/3d8bedb0f463fee7cb51983e3a3f4bca.jpg',
    description: 'All-in-one workspace with AI capabilities.',
    features: ['Unlimited Blocks', 'AI Assistant', 'Team Collaboration', 'Advanced Permissions']
  },
  {
    id: 'coreldraw-lifetime',
    name: 'CorelDRAW Lifetime',
    category: 'Design',
    price: 'Premium',
    duration: 'Lifetime',
    image: 'https://i.pinimg.com/736x/52/cd/ad/52cdad468242c3137a58cfb0e8447092.jpg',
    description: 'Professional vector graphics software for Windows and Mac.',
    features: ['Vector Design', 'Photo Editing', 'Typography', 'Multi-Platform']
  },
  {
    id: 'power-bi',
    name: 'Power BI',
    category: 'Analytics',
    price: '₹1,999',
    duration: '2 Years',
    image: 'https://i.pinimg.com/736x/b8/87/63/b8876357eecb487ac780d266086bb55a.jpg',
    description: 'Business intelligence and data visualization tool.',
    features: ['Data Visualization', 'Analytics', 'Reports', 'Dashboards']
  },
  {
    id: 'rezi-ai-lifetime',
    name: 'Rezi AI Lifetime',
    category: 'AI',
    price: 'Premium',
    duration: 'Lifetime',
    image: 'https://i.pinimg.com/1200x/4b/94/0e/4b940e9b385331daef9bba8692fb4cc6.jpg',
    description: 'AI-powered resume builder with lifetime access.',
    features: ['AI Resume Builder', 'ATS Optimization', 'Unlimited Resumes', 'Cover Letters']
  },
  {
    id: 'miro-business',
    name: 'Miro Business',
    category: 'Productivity',
    price: '₹1,499',
    duration: '3 Months (50-100 Seats)',
    image: 'https://i.pinimg.com/1200x/71/5e/09/715e09865d9709b3fbdf24e7b6af0fd0.jpg',
    description: 'Online collaborative whiteboard platform.',
    features: ['Unlimited Boards', 'Team Collaboration', 'Integrations', 'Templates']
  },
  {
    id: 'beautiful-ai',
    name: 'Beautiful.ai',
    category: 'Design',
    price: '₹1,299',
    duration: '1 Year',
    image: 'https://i.pinimg.com/736x/bf/e0/3e/bfe03e87eacbed794ab1b58f567c00d1.jpg',
    description: 'AI-powered presentation software.',
    features: ['Smart Templates', 'AI Design', 'Collaboration', 'Analytics']
  },
  {
    id: 'elevenlabs-creator',
    name: 'ElevenLabs Creator',
    category: 'AI',
    price: '₹1,399',
    duration: '3 Months',
    image: 'https://i.pinimg.com/1200x/46/7b/3b/467b3b5ecd8e38cde59f7e0bdb7e431a.jpg',
    description: 'Premium AI voice generation for creators.',
    features: ['Voice Cloning', 'Text-to-Speech', 'Multiple Languages', 'Commercial Use']
  },
  {
    id: 'spotify-global',
    name: 'Spotify Premium Global',
    category: 'Streaming',
    price: '₹199',
    duration: '3 Months',
    image: 'https://images.unsplash.com/photo-1551817958-795f9440ce4d?w=800',
    description: 'Global Spotify Premium key.',
    features: ['Global Access', 'Premium Features', 'Multi-Region']
  },
];

// Additional services without prices (as mentioned in requirements)
export const additionalServices = [
  // Productivity & Automation
  { name: 'PromptDrive Pro', duration: '1 Year', category: 'AI' },
  { name: 'Zapier Pro', duration: '1 Year', category: 'Automation' },
  { name: 'Make.com Team', duration: '1 Year', category: 'Automation' },
  { name: 'n8n Cloud Starter', duration: '1 Year', category: 'Automation' },
  { name: 'Replit Core', duration: '1 Year', category: 'Development' },
  { name: 'Lovable Pro', duration: '1 Year', category: 'Development' },
  { name: 'Lex Pro', duration: '1 Year', category: 'Productivity' },
  { name: 'Gamma Pro', duration: '1 Year', category: 'Design' },
  { name: 'Granola Business', duration: '1 Year', category: 'Productivity' },
  { name: 'Linear Business', duration: '1 Year', category: 'Productivity' },
  { name: 'Superhuman Starter', duration: '1 Year', category: 'Productivity' },
  { name: 'Raycast Pro', duration: '1 Year', category: 'Productivity' },
  { name: 'ChatPRD Pro', duration: '1 Year', category: 'AI' },
  { name: 'Mobbin Pro', duration: '1 Year', category: 'Design' },
  { name: 'Wispr Flow Pro', duration: '1 Year', category: 'AI' },
  { name: 'Magic Patterns', duration: '1 Year', category: 'Design' },
  { name: 'Otter.ai Pro', duration: '1 Year', category: 'AI' },
  { name: 'Postman Basic', duration: '1 Year', category: 'Development' },
  { name: 'Webflow Business', duration: '1 Year', category: 'Web Development' },
  { name: 'ClickUp Enterprise + $3,000 Credits', duration: '1 Year', category: 'Productivity' },
  { name: 'Supabase Pro', duration: '1 Year', category: 'Development' },
  { name: 'GitLab Ultimate (20 seats)', duration: '1 Year', category: 'Development' },
  { name: 'Backblaze Unlimited Backup', duration: '1 Year', category: 'Storage' },
  { name: 'Yorba Premium', duration: '1 Year', category: 'Business' },
  { name: 'Blinkist Premium', duration: '1 Year', category: 'Education' },
  { name: 'Slidebean Starter', duration: '1 Year', category: 'Design' },
  { name: 'AutoCAD/Autodesk 2025 Full Suite', duration: '1 Year', category: 'Engineering' },
  { name: 'Devin & Replit Plans', duration: '1 Year', category: 'Development' },
  { name: 'PNGTree Lifetime', duration: 'Lifetime', category: 'Design' },
  
  // AI & Writing Tools
  { name: 'Jenni AI', duration: '1 Year', category: 'AI' },
  { name: 'Paperpal Premium', duration: '1 Year', category: 'AI' },
  { name: 'Originality.ai', duration: '1 Month', category: 'AI' },
  { name: 'QuillBot', duration: 'Monthly', category: 'AI' },
  
  // Lead Generation
  { name: 'Leads.CM', duration: '6 Months', category: 'Marketing' },
  { name: 'Full Enrich (1000 credits)', duration: '1 Month', category: 'Marketing' },
  { name: 'Clay AI (7K credits)', duration: '1 Month', category: 'Marketing' },
  
  // Development & Automation
  { name: 'Bolt Pro', duration: '1 Year', category: 'Development' },
  { name: 'Warp Pro', duration: '1 Year', category: 'Development' },
  { name: 'Cosine.sh', duration: '1 Month', category: 'AI' },
  { name: 'Vapi AI ($200 Credits)', duration: 'Credits', category: 'AI' },
  { name: 'Deepgram ($1199 Credits)', duration: 'Credits', category: 'AI' },
  { name: 'Expo.dev Starter Plan', duration: '1 Year', category: 'Development' },
  { name: 'Phantombuster Starter', duration: '1 Month', category: 'Automation' },
  { name: 'EasyGen Pro', duration: '1 Month', category: 'AI' },
  { name: 'Sentry Team', duration: '6 Months', category: 'Development' },
  
  // SEO & Marketing
  { name: 'CreeperSEO Audit', duration: '1 Year', category: 'SEO' },
  { name: 'ZapDigits', duration: '1 Year', category: 'Marketing' },
  { name: 'Scalelist', duration: '1 Month', category: 'Marketing' },
  { name: 'Viral Launch', duration: '1 Month', category: 'Marketing' },
  { name: 'AMZScout', duration: '1 Month', category: 'Marketing' },
  { name: 'Keyword Hero', duration: '6 Months', category: 'SEO' },
  
  // Design & Creative
  { name: 'Frame.io Team', duration: '3 Months', category: 'Design' },
  { name: 'Headliner Pro', duration: '3 Months', category: 'Design' },
  { name: 'Pixpa Pro', duration: '6 Months', category: 'Design' },
  { name: 'ClippingMini Business', duration: '3 Months', category: 'Design' },
  
  // Engineering / 3D / CAD
  { name: '3D Swymer + Collaborative Industry Innovator + SOLIDWORKS Professional', duration: '1 Year', category: 'Engineering' },
  { name: '3D Swymer + NC Shop + Collaborative Innovator', duration: '1 Year', category: 'Engineering' },
  { name: '3DEXPERIENCE SOLIDWORKS Pro + Swymer', duration: '1 Year', category: 'Engineering' },
  
  // Education
  { name: 'Coursera Premium Org Access', duration: '1 Year', category: 'Education' },
  { name: 'EdX Premium', duration: '1 Year', category: 'Education' },
  
  // Team Tools
  { name: 'Fabrile Teams (5 Seats)', duration: '1 Month', category: 'Business' },
  { name: 'Miro Business (100 seats)', duration: '3 Months', category: 'Productivity' },
  { name: 'TraceHQ Pro/Team', duration: '3 Months', category: 'Business' },
  { name: 'Starter Story + Academy', duration: '1 Month', category: 'Education' },
  
  // Software Keys
  { name: 'Windows 10 Pro Lifetime Key', duration: 'Lifetime', category: 'Software' },
  { name: 'Windows 11 Pro Lifetime Key', duration: 'Lifetime', category: 'Software' },
];

export const categories = [
  'All',
  'AI',
  'Design',
  'Streaming',
  'Productivity',
  'Professional',
  'Business',
  'Development',
  'Automation',
  'Web Development',
  'Analytics',
  'Engineering',
  'Education',
  'Marketing',
  'SEO',
  'Storage',
  'Software',
];
