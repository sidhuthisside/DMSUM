// ─── src/data/tools.js ─────────────────────────────────────────────────────
// Comprehensive tools database for The Marketer's Toolkit

export const tools = [
  // ═══════════════════════════ FACEBOOK ════════════════════════════════════
  {
    id: 'fb-meta-ads-manager',
    platform: 'facebook',
    category: 'ads',
    name: 'Meta Ads Manager',
    tagline: 'The official Facebook advertising platform',
    description: 'Create, manage, and analyze ad campaigns across Facebook, Instagram, and Messenger. Advanced targeting, A/B testing, and detailed performance reporting.',
    pros: ['Unmatched targeting capabilities', 'Reach 3B+ users', 'Cross-platform (FB + IG)', 'Rich analytics suite'],
    cons: ['Steep learning curve', 'Rising CPMs', 'Interface can be overwhelming', 'Frequent policy changes'],
    pricing: 'free',
    pricingNote: 'Free to use; ad spend required',
    strategicGuide: {
      title: "Performance Scaling Protocol",
      steps: [
        { phase: "Foundation", action: "Pixel calibration and CAPI (Conversational API) integration for 100% data fidelity." },
        { phase: "Audience Architecture", action: "Deploying 'Advantage+' catalogs with broad targeting to leverage Meta's AI modeling." },
        { phase: "Creative Deployment", action: "A/B testing dynamic creative optimizations (DCO) to isolate high-performing hooks." },
        { phase: "Optimization", action: "Scaling budgets by 20% every 48 hours for campaigns maintaining target ROAS." }
      ]
    },
    caseStudy: {
      company: "MVMT Watches",
      context: "Direct-to-consumer scaling from $0 to $100M+ revenue.",
      metricName: "Return on Ad Spend (ROAS)",
      before: 1.8,
      after: 4.2,
      label: "Growth Velocity",
      projections: [
        { period: 'Pre-Audit', value: 1.8 },
        { period: 'Phase 1', value: 2.5 },
        { period: 'Phase 2', value: 3.4 },
        { period: 'Full Scale', value: 4.2 }
      ]
    },
    visualizationType: 'analytics-chart',
    rating: 4.7,
    url: 'https://www.facebook.com/adsmanager',
  },
  {
    id: 'fb-pixel',
    platform: 'facebook',
    category: 'analytics',
    name: 'Meta Pixel',
    tagline: 'Conversion tracking and retargeting engine',
    description: 'Track user behavior on your website, build retargeting audiences, measure ad conversions, and power your ad optimization with real data.',
    pros: ['Free tracking', 'Powerful retargeting', 'Easy install via GTM', 'Works with Shops'],
    cons: ['iOS 14+ privacy impact', 'Data delay up to 72h', 'Requires developer setup'],
    pricing: 'free',
    pricingNote: 'Free',
    strategicGuide: {
      title: "Conversion Tracking Architecture",
      steps: [
        { phase: "Deployment", action: "Implementing base code via GTM with 1st-party cookie support for privacy compliance." },
        { phase: "Event Mapping", action: "Mapping 'Add to Cart' and 'Initiate Checkout' standard events for precision retargeting." },
        { phase: "Quality Audit", action: "Verifying event match quality score (EMQ) to ensure AI attribution accuracy." },
        { phase: "Scale", action: "Creating 'Lookalike Audiences' based on the top 10% of high-value purchasers." }
      ]
    },
    caseStudy: {
      company: "Moda Luxe",
      context: "Premium fashion brand optimizing conversion attribution post-iOS14.",
      metricName: "Attributed Revenue Alignment",
      before: 60,
      after: 98,
      label: "Attribution Accuracy %",
      projections: [
        { period: 'Pixel Only', value: 60 },
        { period: 'CAPI Fix', value: 78 },
        { period: 'Event Sync', value: 92 },
        { period: 'Full Fidelity', value: 98 }
      ]
    },
    visualizationType: 'analytics-chart',
    rating: 4.5,
    url: 'https://www.facebook.com/business/tools/meta-pixel',
    icon: '🔍',
  },
  {
    id: 'fb-creator-studio',
    platform: 'facebook',
    category: 'scheduling',
    name: 'Meta Business Suite',
    tagline: 'All-in-one management for Facebook & Instagram',
    description: 'Schedule posts, manage messages, view insights, and run ads for both Facebook and Instagram from one unified dashboard.',
    pros: ['Free & official', 'Cross-platform posting', 'Inbox management', 'Basic analytics'],
    cons: ['Limited analytics depth', 'Slower than native apps', 'Occasional bugs'],
    pricing: 'free',
    pricingNote: 'Free',
    strategicGuide: {
      title: "Unified Organic Command",
      steps: [
        { phase: "Asset Link", action: "Connecting Facebook Pages and Instagram Professional accounts to the Business Suite backend." },
        { phase: "Content Mix", action: "Balancing 'Reels' for reach and 'Grid Posts' for brand authority in the visual planner." },
        { phase: "Community", action: "Centralizing all DMs and comments into the 'Unified Inbox' for 100% response rates." },
        { phase: "Reporting", action: "Exporting cross-platform monthly impact reports for consolidated stakeholder review." }
      ]
    },
    caseStudy: {
      company: "Local Brews",
      context: "Multi-location cafe chain centralizing social media management.",
      metricName: "Community Response Time (Min)",
      before: 480,
      after: 15,
      label: "Minutes per Query",
      projections: [
        { period: 'Fragmented', value: 480 },
        { period: 'Centralized', value: 120 },
        { period: 'Inbox Sync', value: 45 },
        { period: 'Optimized', value: 15 }
      ]
    },
    visualizationType: 'timeline',
    rating: 4.1,
    url: 'https://business.facebook.com',
    icon: '🗓️',
  },
  {
    id: 'fb-canva',
    platform: 'facebook',
    category: 'content',
    name: 'Canva',
    tagline: 'Drag-and-drop design for social creatives',
    description: 'Create stunning Facebook post graphics, cover photos, ad creatives, and Stories with thousands of templates, brand kits, and AI design tools.',
    pros: ['Huge template library', 'Brand Kit feature', 'Team collaboration', 'Magic AI tools'],
    cons: ['Pro plan required for premium assets', 'Not for complex design work'],
    pricing: 'freemium',
    pricingNote: 'Free / Pro from $15/mo',
    rating: 4.9,
    url: 'https://www.canva.com/',
    icon: '🎨',
  },
  {
    id: 'fb-hootsuite',
    platform: 'facebook',
    category: 'scheduling',
    name: 'Hootsuite',
    tagline: 'Enterprise social media scheduling & analytics',
    description: 'Schedule Facebook content months in advance, monitor brand mentions, manage team workflows, and access detailed performance analytics.',
    pros: ['Best-in-class scheduling', 'Team workflows', 'Deep analytics', 'Social listening'],
    cons: ['Expensive for teams', 'Can be complex', 'Analytics lag'],
    pricing: 'paid',
    pricingNote: 'From $99/mo',
    rating: 4.3,
    url: 'https://www.hootsuite.com',
    visualizationType: 'timeline',
  },
  {
    id: 'fb-audience-insights',
    platform: 'facebook',
    category: 'audience',
    name: 'Meta Audience Insights',
    tagline: 'Deep audience research and segmentation',
    description: 'Explore demographic data, interests, and behaviors of Facebook audience segments. Build ideal customer profiles and refine ad targeting strategy.',
    pros: ['Free research tool', 'Rich demographic data', 'Interest overlaps', 'Custom audience builder'],
    cons: ['Data has declined post-iOS 14', 'Less granular than before', 'Requires Page access'],
    pricing: 'free',
    pricingNote: 'Free',
    strategicGuide: {
      title: "Precision Market Mapping",
      steps: [
        { phase: "Data Mining", action: "Filtering by demographics and interests to identify core customer characteristics." },
        { phase: "Interest Intersect", action: "Analyzing overlapping interests (e.g., 'Luxury' + 'Sustainability') for targeting." },
        { phase: "Archetype Build", action: "Exporting persona data to build high-fidelity customer profiles for creative teams." },
        { phase: "Saved Segments", action: "Deploying high-probability interest groups as 'Saved Audiences' in active campaigns." }
      ]
    },
    caseStudy: {
      company: "HealthCore AI",
      context: "Health-tech startup refining target audience for a niche product launch.",
      metricName: "Ad Relevance Score",
      before: 3,
      after: 9,
      label: "Quality Score (1-10)",
      projections: [
        { period: 'Broad Target', value: 3 },
        { period: 'Interest Sync', value: 5 },
        { period: 'Persona Map', value: 7 },
        { period: 'Precision AD', value: 9 }
      ]
    },
    visualizationType: 'analytics-chart',
    rating: 4.0,
    url: 'https://www.facebook.com/ads/audience-insights',
    icon: '🎯',
  },
  {
    id: 'fb-sprout',
    platform: 'facebook',
    category: 'analytics',
    name: 'Sprout Social',
    tagline: 'Premium social analytics and engagement',
    description: 'Monitor Facebook performance, manage team replies, track competitor benchmarks, and generate polished reports for clients and stakeholders.',
    pros: ['Best reporting quality', 'Unified inbox', 'Competitor analysis', 'CRM integrations'],
    cons: ['High cost', 'Overkill for small teams'],
    pricing: 'paid',
    pricingNote: 'From $249/mo',
    strategicGuide: {
      title: "Enterprise Analytics Intelligence",
      steps: [
        { phase: "Setup", action: "Integrating all social channels into the Sprout Unified Smart Inbox." },
        { phase: "Listening", action: "Configuring sentiment analysis streams to monitor brand health keywords." },
        { phase: "Benchmarking", action: "Setting up automated competitor audit reports to measure industry share of voice." },
        { phase: "Scaling", action: "Using AI 'Advocacy' tools to turn employees into brand ambassadors." }
      ]
    },
    caseStudy: {
      company: "Global Hospitality Group",
      context: "Managing brand reputation across 500+ social profiles worldwide.",
      metricName: "Reporting Time (Hours/Mo)",
      before: 80,
      after: 4,
      label: "Hours per Month",
      projections: [
        { period: 'Manual CSV', value: 80 },
        { period: 'Sprout Sync', value: 32 },
        { period: 'Auto-Report', value: 12 },
        { period: 'Optimized', value: 4 }
      ]
    },
    visualizationType: 'analytics-chart',
    rating: 4.6,
    url: 'https://sproutsocial.com',
    icon: '🌱',
  },
  {
    id: 'fb-buffer',
    platform: 'facebook',
    category: 'scheduling',
    name: 'Buffer',
    tagline: 'Simple, affordable social scheduling',
    description: 'Schedule Facebook posts with an elegant, minimal interface. Includes a link shortener, basic analytics, and team collaboration at an affordable price.',
    pros: ['Very affordable', 'Clean UI', 'Instagram Grid planner', 'Good free tier'],
    cons: ['Limited analytics', 'No social listening', 'Basic reporting'],
    pricing: 'freemium',
    pricingNote: 'Free / Essentials $6/mo',
    strategicGuide: {
      title: "Content Flow Optimization",
      steps: [
        { phase: "Curation", action: "Aggregating multi-source content into the visual queue for review." },
        { phase: "Slotting", action: "Setting custom posting slots to align with localized audience peak activity." },
        { phase: "Iteration", action: "Analyzing 'Post-by-Post' performance to refine future scheduling frequency." },
        { phase: "Amplification", action: "Using 'Start Page' to consolidate cross-platform social links for traffic routing." }
      ]
    },
    caseStudy: {
      company: "The Daily Scoop",
      context: "Local news publisher maintaining consistent presence across 5 platforms.",
      metricName: "Weekly Publishing Velocity",
      before: 4,
      after: 28,
      label: "Posts per Week",
      projections: [
        { period: 'Manual', value: 4 },
        { period: 'Daily Mix', value: 12 },
        { period: 'Batching', value: 22 },
        { period: 'Optimized', value: 28 }
      ]
    },
    visualizationType: 'timeline',
    rating: 4.4,
  },
  {
    id: 'fb-video-creator',
    platform: 'facebook',
    category: 'content',
    name: 'Meta Video Creation Kit',
    tagline: 'Turn images into video ads quickly',
    description: 'Native Facebook tool to create video ads from existing image assets, add animated text overlays, music, and transitions — all without video editing software.',
    pros: ['Completely free', 'Native FB integration', 'Quick turnaround', 'Ad-ready output'],
    cons: ['Limited customization', 'Basic templates only', 'No brand kit'],
    pricing: 'free',
    pricingNote: 'Free',
    strategicGuide: {
      title: "Automated Video Production",
      steps: [
        { phase: "Asset Upload", action: "Uploading high-resolution product imagery into the native FB branding suite." },
        { phase: "Template Selection", action: "Choosing vertical-first layouts for 'Stories' and 'Reels' ad placements." },
        { phase: "Text Overlay", action: "Adding dynamic text animations to improve 'sound-off' viewer retention." },
        { phase: "Direct Publish", action: "Drafting creatives directly into Ads Manager for instant campaign deployment." }
      ]
    },
    caseStudy: {
      company: "GearHead Direct",
      context: "Auto-parts retailer scaling ad creative production without a design team.",
      metricName: "Creative Production Cost (per Unit)",
      before: 150,
      after: 0,
      label: "USD per Asset",
      projections: [
        { period: 'Outsourced', value: 150 },
        { period: 'In-House', value: 85 },
        { period: 'Native App', value: 12 },
        { period: 'Meta Studio', value: 0 }
      ]
    },
    visualizationType: 'analytics-chart',
    rating: 3.8,
  },
  {
    id: 'fb-groups-insights',
    platform: 'facebook',
    category: 'audience',
    name: 'Facebook Groups Manager',
    tagline: 'Community management and audience growth',
    description: 'Manage Facebook Groups, view member insights, schedule posts, moderate content, and grow organic communities around your brand.',
    pros: ['Free community building', 'In-depth member analytics', 'Monetization options'],
    cons: ['Time-intensive', 'Algorithm limits reach', 'Moderation workload'],
    pricing: 'free',
    pricingNote: 'Free',
    strategicGuide: {
      title: "Community Growth Engine",
      steps: [
        { phase: "Insight Audit", action: "Monitoring top posts by engagement to identify viral content clusters." },
        { phase: "Member Mapping", action: "Analyzing member demographics to refine brand-voice guidelines." },
        { phase: "Interaction", action: "Utilizing 'Admin Assist' to automate rule enforcement and keyword filtering." },
        { phase: "Monetization", action: "Deploying 'Subscription' models for exclusive community-only content access." }
      ]
    },
    caseStudy: {
      company: "TechTalents Hub",
      context: "Developer community growing from 2k to 50k active members.",
      metricName: "Organic Growth Multiplier",
      before: 1.2,
      after: 5.8,
      label: "Growth Index",
      projections: [
        { period: 'Unmanaged', value: 1.2 },
        { period: 'Moderated', value: 2.5 },
        { period: 'Active Insights', value: 4.2 },
        { period: 'Self-Sustaining', value: 5.8 }
      ]
    },
    visualizationType: 'analytics-chart',
    rating: 4.0,
  },
  {
    id: 'fb-adspy',
    platform: 'facebook',
    category: 'ads',
    name: 'AdSpy',
    tagline: 'Facebook & Instagram ad intelligence',
    description: "Search the world's largest database of Facebook and Instagram ads. Spy on competitors, find winning creatives, and identify high-performing ad angles.",
    pros: ['Massive ad database', 'Advanced filters', 'eCommerce focus', 'Daily updates'],
    cons: ['Expensive plan', 'Learning curve'],
    pricing: 'paid',
    pricingNote: '$149/mo',
    rating: 4.4,
    url: 'https://adspy.com',
    icon: '🕵️',
  },

  // ═══════════════════════════ INSTAGRAM ═══════════════════════════════════
  {
    id: 'ig-metricool',
    platform: 'instagram',
    category: 'analytics',
    name: 'Metricool',
    tagline: 'All-in-one social media analytics and scheduling',
    description: 'Analyze, manage, and grow your digital presence. Metricool provides unified analytics across platforms with clean, easy-to-read charts and a powerful multi-channel scheduler. Excellent for agencies and serious creators.',
    pros: ['Clean data visualization', 'Unified dashboard', 'Competitor tracking', 'Free tier covers multiple platforms'],
    cons: ['UI can feel dense initially', 'Advanced features require paid plan'],
    pricing: 'freemium',
    pricingNote: 'Free / Pro from $18/mo',
    strategicGuide: {
      title: "Cross-Platform Intelligence",
      steps: [
        { phase: "Data Sync", action: "Linking IG, TikTok, and Pinterest into a unified performance dashboard." },
        { phase: "Competitor Benchmarking", action: "Setting up real-time monitoring for competitor engagement spikes." },
        { phase: "Optimal Timing", action: "Using AI-suggested windows to maximize early-post signal strength." },
        { phase: "White-Labeling", action: "Generating automated agency-branded reports for client presentations." }
      ]
    },
    caseStudy: {
      company: "Vivid Agency",
      context: "Social media agency managing 25+ client accounts simultaneously.",
      metricName: "Client Renewal Rate %",
      before: 68,
      after: 92,
      label: "Retention Score",
      projections: [
        { period: 'Manual Reports', value: 68 },
        { period: 'Tool Sync', value: 75 },
        { period: 'Visual Data', value: 88 },
        { period: 'Metricool Mastery', value: 92 }
      ]
    },
    visualizationType: 'analytics-chart',
    rating: 4.7,
  },
  {
    id: 'ig-later',
    platform: 'instagram',
    category: 'scheduling',
    name: 'Later',
    tagline: 'Visual Instagram planner and scheduler',
    description: 'Plan your Instagram grid visually, schedule posts and Reels, manage Stories, and access detailed analytics. The go-to tool for visual brand planners.',
    pros: ['Visual grid planning', 'Link in Bio feature', 'Hashtag suggestions', 'Best-time-to-post AI'],
    cons: ['Reels scheduling limited', 'Analytics in paid only'],
    pricing: 'freemium',
    pricingNote: 'Free / Starter $18/mo',
    strategicGuide: {
      title: "Visual Storyboard Planning",
      steps: [
        { phase: "Grid Design", action: "Drag-and-drop planning to ensure visual harmony across the Instagram 9-grid." },
        { phase: "Asset Prep", action: "Auto-sizing content for 'Reels', 'Stories', and 'Grid' in one workflow." },
        { phase: "Hashtag Lab", action: "Using 'Hashtag Suggestions' to identify low-competition niche tags." },
        { phase: "Engagement", action: "Scheduling 'First Comments' to keep captions clean while maximizing reach." }
      ]
    },
    caseStudy: {
      company: "Luxe Decor",
      context: "Interior design brand scaling visual authority on Instagram.",
      metricName: "Save-to-Reach Ratio %",
      before: 0.5,
      after: 4.5,
      label: "Intention Score",
      projections: [
        { period: 'Random Post', value: 0.5 },
        { period: 'Grid Planned', value: 1.8 },
        { period: 'SEO Hashtags', value: 3.2 },
        { period: 'Strategy Sync', value: 4.5 }
      ]
    },
    visualizationType: 'timeline',
    rating: 4.6,
  },
  {
    id: 'ig-linktree',
    platform: 'instagram',
    category: 'content',
    name: 'Linktree',
    tagline: 'Turn your bio link into a micro-site',
    description: 'Create a customizable landing page with unlimited links for your Instagram bio. Drive traffic to products, blog posts, YouTube, and more from a single link.',
    pros: ['Free tier available', 'Analytics on clicks', 'Branded pages', 'Commerce integrations'],
    cons: ['Free tier has limited customization', 'Competitor alternatives growing'],
    pricing: 'freemium',
    pricingNote: 'Free / Pro $9/mo',
    strategicGuide: {
      title: "Bio-Link Conversion Funnel",
      steps: [
        { phase: "Architecture", action: "Prioritizing high-intent links using 'Animated Links' to draw visual focus." },
        { phase: "Branding", action: "Customizing background aesthetics and button styles to match brand hex codes." },
        { phase: "Commerce", action: "Integrating 'Store' links to allow direct checkouts within the social app environment." },
        { phase: "Analytics", action: "Monitoring 'Click-Through Rates' to identify which content types drive the most traffic." }
      ]
    },
    caseStudy: {
      company: "The Green Table",
      context: "DTC nutrition brand streamlining traffic from IG to specialized product funnels.",
      metricName: "Referral Conversion Rate %",
      before: 1.2,
      after: 6.8,
      label: "Conversion Lift",
      projections: [
        { period: 'Single Link', value: 1.2 },
        { period: 'Multi-Link', value: 2.5 },
        { period: 'Animated', value: 4.8 },
        { period: 'Conversion Opt', value: 6.8 }
      ]
    },
    visualizationType: 'analytics-chart',
    rating: 4.5,
  },
  {
    id: 'ig-inflact',
    platform: 'instagram',
    category: 'analytics',
    name: 'Inflact',
    tagline: 'Instagram growth and hashtag research',
    description: 'Research hashtags, schedule posts, analyze competitors, and track your Instagram growth with AI-powered insights and audience analytics.',
    pros: ['Great hashtag picker', 'Competitor tracking', 'DM automation', 'Profile stats'],
    cons: ['UI can feel cluttered', 'Automation risks TOS'],
    pricing: 'paid',
    pricingNote: 'From $54/mo',
    strategicGuide: {
      title: "Growth Data Intelligence",
      steps: [
        { phase: "Research", action: "Identifying high-reach hashtags using the 'Hashtag Generator' to expand discovery." },
        { phase: "Audit", action: "Analyzing competitor profile growth to identify successful content themes." },
        { phase: "Interaction", action: "Deploying automated DM sequences for high-intent new followers (use with caution)." },
        { phase: "Optimization", action: "Monitoring profile visit trends to refine bio-keywords for better SEO." }
      ]
    },
    caseStudy: {
      company: "SwiftSaaS",
      context: "SaaS startup leveraging competitor intelligence to acquire B2B followers.",
      metricName: "Follower Acquisition ROI",
      before: 12,
      after: 44,
      label: "New Leads/Mo",
      projections: [
        { period: 'Manual Search', value: 12 },
        { period: 'Hashtag Opt', value: 18 },
        { period: 'Competitor Audit', value: 32 },
        { period: 'Optimized Flow', value: 44 }
      ]
    },
    visualizationType: 'analytics-chart',
    rating: 4.1,
  },
  {
    id: 'ig-instagram-insights',
    platform: 'instagram',
    category: 'analytics',
    name: 'Instagram Insights',
    tagline: 'Native in-app analytics for Business accounts',
    description: "Instagram's built-in analytics shows reach, impressions, saves, profile visits, follower demographics, and best-performing content — all for free.",
    pros: ['Completely free', 'Native in-app', 'Stories & Reels data', 'Audience demographics'],
    cons: ['Limited to 90 days history', 'No competitor data', 'Basic export'],
    pricing: 'free',
    pricingNote: 'Free (Business account required)',
    rating: 4.2,
    url: 'https://business.instagram.com',
    icon: '🔭',
  },
  {
    id: 'ig-adobe-express',
    platform: 'instagram',
    category: 'content',
    name: 'Adobe Express',
    tagline: 'Pro-grade creative for Instagram content',
    description: "Design Instagram posts, Reels thumbnails, Story graphics, and Highlights covers using Adobe's template library and AI generation features.",
    pros: ['Adobe quality', 'AI Generative Fill', 'Huge template library', 'Brand kit support'],
    cons: ['Best features require Creative Cloud subscription'],
    pricing: 'freemium',
    pricingNote: 'Free / Premium $9.99/mo',
    strategicGuide: {
      title: "AI-Powered Creative Factory",
      steps: [
        { phase: "Ideation", action: "Using 'Text-to-Image' prompts to generate unique background assets." },
        { phase: "Removal", action: "Utilizing 'One-Click Background Remover' to isolate product shots for ad mockups." },
        { phase: "Scheduling", action: "Directly pushing final designs to the built-in social content calendar." },
        { phase: "Branding", action: "Applying 'Brand Kits' to ensure cross-platform aesthetic uniformity." }
      ]
    },
    caseStudy: {
      company: "Bloom Boutique",
      context: "Local retailer scaling social content production during peak seasons.",
      metricName: "Production Efficiency (Assets/Hr)",
      before: 1,
      after: 12,
      label: "Assets per Hour",
      projections: [
        { period: 'Traditional', value: 1 },
        { period: 'Digital Tools', value: 3 },
        { period: 'Template Flow', value: 7 },
        { period: 'Adobe AI', value: 12 }
      ]
    },
    visualizationType: 'analytics-chart',
    rating: 4.5,
  },
  {
    id: 'ig-grin',
    platform: 'instagram',
    category: 'influencer',
    name: 'GRIN',
    tagline: 'End-to-end influencer marketing management',
    description: 'Discover influencers, manage relationships, track campaign performance, process payments, and measure ROI all in one influencer marketing platform.',
    pros: ['Full campaign lifecycle', 'Deep analytics', 'eCommerce integrations', 'ROI tracking'],
    cons: ['Enterprise pricing', 'Time investment to set up'],
    pricing: 'paid',
    pricingNote: 'Custom pricing (from ~$999/mo)',
    strategicGuide: {
      title: "Influencer Lifecycle Management",
      steps: [
        { phase: "Discovery", action: "Filtering through 30M+ creators by niche, audience size, and engagement depth." },
        { phase: "Relationship", action: "Managing contract negotiations and asset approvals inside the GRIN CRM." },
        { phase: "Attribution", action: "Deploying unique discount codes and tracking links for precise ROI measurement." },
        { phase: "Payments", action: "Automating creator payments and tax compliance in one dashboard." }
      ]
    },
    caseStudy: {
      company: "Evergreen Gear",
      context: "Outdoor apparel brand running large-scale micro-influencer campaigns.",
      metricName: "Influencer ROI (Multiple)",
      before: 2.1,
      after: 7.2,
      label: "ROI Multiplier",
      projections: [
        { period: 'Manual Email', value: 2.1 },
        { period: 'Centralized', value: 3.8 },
        { period: 'Data-Driven', value: 5.4 },
        { period: 'GRIN Mastery', value: 7.2 }
      ]
    },
    visualizationType: 'analytics-chart',
    rating: 4.5,
  },
  {
    id: 'ig-upfluence',
    platform: 'instagram',
    category: 'influencer',
    name: 'Upfluence',
    tagline: 'AI-powered influencer discovery and outreach',
    description: "Search 4M+ influencer profiles, analyze their audience quality, automate outreach emails, and manage gifting campaigns with Upfluence's smart platform.",
    pros: ['Massive influencer database', 'AI scoring', 'Shopify integration', 'Email automation'],
    cons: ['High price point', 'Discovery-focused; weaker post-campaign'],
    pricing: 'paid',
    pricingNote: 'From $795/mo',
    strategicGuide: {
      title: "Data-First Creator Discovery",
      steps: [
        { phase: "Identify", action: "Scanning for influencers who are already mentioning your brand organically." },
        { phase: "Auditing", action: "Running 'Audience Quality Checks' to eliminate accounts with fake followers." },
        { phase: "Outreach", action: "Scaling campaign invites using personalized bulk outreach templates." },
        { phase: "Analysis", action: "Aggregating all creator content into a single 'Library' for multi-channel usage." }
      ]
    },
    caseStudy: {
      company: "FitFuel",
      context: "Nutrition startup rapidly identifying authentic brand advocates.",
      metricName: "Acquisition Cost per Creator",
      before: 450,
      after: 110,
      label: "USD per Creator",
      projections: [
        { period: 'Manual Hunt', value: 450 },
        { period: 'Tool Match', value: 280 },
        { period: 'Batch Invite', value: 160 },
        { period: 'Systemized', value: 110 }
      ]
    },
    visualizationType: 'analytics-chart',
    rating: 4.3,
  },
  {
    id: 'ig-capcut',
    platform: 'instagram',
    category: 'content',
    name: 'CapCut',
    tagline: 'Viral Reels and short-form video editor',
    description: 'Edit Instagram Reels with trending templates, AI auto-captions, music sync, transitions, and effects. Free and used by millions of creators worldwide.',
    pros: ['Completely free', 'Trending templates', 'AI captions', 'Direct IG export'],
    cons: ['Privacy concerns (ByteDance)', 'Limited pro features'],
    pricing: 'free',
    pricingNote: 'Free / Pro $7.99/mo',
    strategicGuide: {
      title: "Viral Video Orchestration",
      steps: [
        { phase: "Transcription", action: "Executing 'Auto-Captions' to ensure 100% readability for silent-scrolling users." },
        { phase: "Dynamic Cuts", action: "Aligning video transitions to trending audio beats using 'Keyframe' animations." },
        { phase: "Effect Layering", action: "Applying 'AI Body Effects' and 'Retro Filters' to match current TikTok/Reels aesthetics." },
        { phase: "Export Opt", action: "Formatting output at 1080p 'Smart Compression' to avoid platform upload degradation." }
      ]
    },
    caseStudy: {
      company: "The Travel Duo",
      context: "Content creators scaling Reels engagement through high-tempo editing.",
      metricName: "Average Reel Engagement",
      before: 1200,
      after: 8500,
      label: "Interactions/Post",
      projections: [
        { period: 'Raw Clips', value: 1200 },
        { period: 'Basic Edit', value: 2800 },
        { period: 'AI Captions', value: 5400 },
        { period: 'Beat Sync', value: 8500 }
      ]
    },
    visualizationType: 'analytics-chart',
    rating: 4.7,
  },
  {
    id: 'ig-iconosquare',
    platform: 'instagram',
    category: 'analytics',
    name: 'Iconosquare',
    tagline: 'Deep Instagram analytics and benchmarking',
    description: "Track follower growth, engagement rates, reach, impressions, hashtag performance, and competitor benchmarks with Iconosquare's specialized Instagram analytics.",
    pros: ['Industry benchmarks', 'Custom report builder', 'Historical data', 'Competitor tracking'],
    cons: ['Pricier than alternatives', 'Instagram-focused (less breadth)'],
    pricing: 'paid',
    pricingNote: 'From $49/mo',
    strategicGuide: {
      title: "Data-Driven Visual Strategy",
      steps: [
        { phase: "Community Audit", action: "Analyzing 'Follower Evolution' to identify which content types drive the most churn." },
        { phase: "Reach Analysis", action: "Deconstructing 'Impressions by Source' to optimize for Explore page discovery." },
        { phase: "Benchmark", action: "Comparing against 'Industry Averages' to identify gaps in engagement performance." },
        { phase: "Reporting", action: "Scheduling 'Automated PDF Exports' for stakeholders with interpreted performance summaries." }
      ]
    },
    caseStudy: {
      company: "Studio Bloom",
      context: "Creative agency optimizing multi-client Instagram growth.",
      metricName: "Month-over-Month Reach",
      before: 15000,
      after: 145000,
      label: "Total Impressions",
      projections: [
        { period: 'Native Stats', value: 15000 },
        { period: 'Historical Fix', value: 45000 },
        { period: 'Content Pivot', value: 92000 },
        { period: 'Optimized SOV', value: 145000 }
      ]
    },
    visualizationType: 'analytics-chart',
    rating: 4.4,
  },
  {
    id: 'ig-meta-ads-ig',
    platform: 'instagram',
    category: 'ads',
    name: 'Instagram Ads (via Meta)',
    tagline: 'Precision advertising across Instagram placements',
    description: "Run photo, video, Carousel, Stories, Reels, and Shopping ads on Instagram using Meta Ads Manager's powerful targeting and measurement tools.",
    pros: ['Massive audience', 'Visual ad formats', 'Shopping integration', 'Excellent ROAS potential'],
    cons: ['Rising CPMs', 'Creative fatigue is fast', 'Requires budget'],
    pricing: 'free',
    pricingNote: 'Free to use; ad spend required',
    strategicGuide: {
      title: "Visual Conversion Architecture",
      steps: [
        { phase: "Placement", action: "Selecting 'Automatic Placements+' to leverage Meta's cross-surface budget optimization." },
        { phase: "Format Mix", action: "Balancing 'Single Image' for clarity and 'Reels Ads' for immersive engagement." },
        { phase: "Retention", action: "Using 'Retargeting Stacks' to reach users who have engaged with specific IG posts." },
        { phase: "Checkout Opt", action: "Enabling 'Instagram Shop' integrations for frictionless in-app purchasing." }
      ]
    },
    caseStudy: {
      company: "Velvet Aura",
      context: "Direct-to-consumer jewelry brand scaling via Instagram-first advertising.",
      metricName: "Ad ROI (ROAS)",
      before: 2.4,
      after: 5.9,
      label: "Return on Spend",
      projections: [
        { period: 'Static Ads', value: 2.4 },
        { period: 'Video Opt', value: 3.8 },
        { period: 'LAL Scalling', value: 4.9 },
        { period: 'Omnichannel', value: 5.9 }
      ]
    },
    visualizationType: 'analytics-chart',
    rating: 4.6,
  },
  {
    id: 'ig-planoly',
    platform: 'instagram',
    category: 'scheduling',
    name: 'Planoly',
    tagline: 'Visual content planner for Instagram & Pinterest',
    description: 'Plan, schedule, and auto-post to Instagram with a drag-and-drop visual grid. Includes Reels scheduling, Stories, and first comment automation.',
    pros: ['Beautiful UI', 'Auto-posting', 'Stories planning', 'Analytics included'],
    cons: ['Limited platforms on free tier'],
    pricing: 'freemium',
    pricingNote: 'Free / Starter $14/mo',
    rating: 4.4,
    url: 'https://www.planoly.com',
    icon: '🗂️',
  },
  {
    id: 'ig-preview-app',
    platform: 'instagram',
    category: 'content',
    name: 'Preview App',
    tagline: 'Plan your Instagram aesthetic perfectly',
    description: 'Drag and rearrange your upcoming Instagram posts to perfect your grid aesthetic before publishing. Includes caption writing, hashtag management, and analytics.',
    pros: ['Best grid preview', 'Free core features', 'Hashtag manager', 'Clean UX'],
    cons: ['Mobile-only', 'Limited automation'],
    pricing: 'freemium',
    pricingNote: 'Free / Premium $7.99/mo',
    rating: 4.6,
    url: 'https://thepreviewapp.com',
    icon: '🖼️',
  },

  // ═══════════════════════════ SNAPCHAT ════════════════════════════════════
  {
    id: 'snap-ads-manager',
    platform: 'snapchat',
    category: 'ads',
    name: 'Snap Ads Manager',
    tagline: 'Official Snapchat advertising platform',
    description: 'Create and manage Snap Ads, Collection Ads, Story Ads, and Commercials. Advanced targeting by interest, demographics, and custom audiences with real-time analytics.',
    pros: ['Exclusive Gen Z reach', 'Unique AR ad formats', 'Goal-based bidding', 'Competitive CPMs'],
    cons: ['Smaller audience than FB/IG', 'UI less polished', 'Attribution challenges'],
    pricing: 'free',
    pricingNote: 'Free; ad spend required',
    rating: 4.1,
    url: 'https://ads.snapchat.com',
    strategicGuide: {
      title: "Gen Z Engagement Protocol",
      steps: [
        { phase: "Identity", action: "Creating a 'Public Profile' to centralize AR Lenses and organic Stories for the brand." },
        { phase: "Verticality", action: "Developing full-screen vertical video assets that mimic organic user content (UGC)." },
        { phase: "AR Activation", action: "Deploying an 'Interactive Lens' to boost brand recall and drive community sharing." },
        { phase: "Bidding Opt", action: "Setting conversion goals for 'App Installs' or 'Store Visits' to optimize spend." }
      ]
    },
    caseStudy: {
      company: "Zap Beverages",
      context: "Low-sugar soda brand reaching Gen Z through mobile-first video ads.",
      metricName: "Cost Per Swipe-Up",
      before: 0.85,
      after: 0.12,
      label: "USD per Interaction",
      projections: [
        { period: 'Broad Video', value: 0.85 },
        { period: 'UGC Style', value: 0.45 },
        { period: 'Lens Sync', value: 0.22 },
        { period: 'Hyper-Target', value: 0.12 }
      ]
    },
    visualizationType: 'analytics-chart',
    rating: 4.1,
  },
  {
    id: 'snap-lens-studio',
    platform: 'snapchat',
    category: 'ar',
    name: 'Lens Studio',
    tagline: 'Build branded AR Lenses for Snapchat',
    description: "Snapchat's professional AR development tool. Create branded face lenses, world lenses, and interactive AR experiences that Snapchatters can use and share.",
    pros: ['Free to use', 'Powerful AR engine', 'Massive distribution', 'Templates for beginners'],
    cons: ['Steep learning curve', 'Requires AR/3D skills', 'Publishing review time'],
    pricing: 'free',
    pricingNote: 'Free',
    strategicGuide: {
      title: "AR Experience Development",
      steps: [
        { phase: "Drafting", action: "Utilizing 'Lens Templates' (Face, World, Hair) to accelerate initial prototyping." },
        { phase: "Interaction", action: "Adding 'Visual Scripting' nodes to trigger animations based on user gestures." },
        { phase: "Testing", action: "Previewing Lenses in real-time on mobile devices via the Snapchat push feature." },
        { phase: "Discovery", action: "Submitting Lenses to the 'Global Lens Explorer' for maximum organic reach." }
      ]
    },
    caseStudy: {
      company: "Retro Kickz",
      context: "Sneaker brand creating 3D 'Try-On' experiences for new launches.",
      metricName: "Lens Playtime (Seconds)",
      before: 4,
      after: 34,
      label: "Average Engagement",
      projections: [
        { period: 'Static Lens', value: 4 },
        { period: 'Face Filter', value: 12 },
        { period: '3D Try-On', value: 22 },
        { period: 'Full AR Gamified', value: 34 }
      ]
    },
    visualizationType: 'analytics-chart',
    rating: 4.4,
  },
  {
    id: 'snap-snap-pixel',
    platform: 'snapchat',
    category: 'analytics',
    name: 'Snap Pixel',
    tagline: 'Conversion tracking for Snapchat campaigns',
    description: 'Install the Snap Pixel to track website conversions from Snapchat ads, build retargeting audiences, and optimize your campaigns for real business outcomes.',
    pros: ['Free tracking', 'CAPI support', 'eCommerce compatible', 'Lookalike audiences'],
    cons: ['Less data than Meta Pixel', 'Smaller retargeting pool'],
    pricing: 'free',
    pricingNote: 'Free',
    strategicGuide: {
      title: "Conversion Tracking Deployment",
      steps: [
        { phase: "Installation", action: "Deploying the Snap Pixel via GTM to track website visits and swipe-up conversions." },
        { phase: "Event Setup", action: "Configuring 'Purchase' and 'Sign Up' events to measure direct campaign contribution." },
        { phase: "Audience Build", action: "Creating 'Pixel Custom Audiences' to retarget users who abandoned carts on Snap." },
        { phase: "Optimization", action: "Verifying CAPI (Conversion API) health to bridge data gaps from privacy updates." }
      ]
    },
    caseStudy: {
      company: "Glow Skin",
      context: "DTC skincare brand measuring Snapchat ad attribution with high precision.",
      metricName: "Attributed ROAS",
      before: 1.5,
      after: 3.8,
      label: "Revenue Return",
      projections: [
        { period: 'No Pixel', value: 1.5 },
        { period: 'Base Pixel', value: 2.2 },
        { period: 'Event Sync', value: 3.1 },
        { period: 'Full CAPI', value: 3.8 }
      ]
    },
    visualizationType: 'analytics-chart',
    rating: 4.0,
  },
  {
    id: 'snap-story-studio',
    platform: 'snapchat',
    category: 'content',
    name: 'Story Studio',
    tagline: 'Professional Snapchat Stories creator',
    description: "Snap's own video editor built specifically for creating high-quality vertical Stories and Spotlight content with templates, transitions, and audio sync.",
    pros: ['Official Snap app', 'Made for vertical video', 'Templates included', 'Direct publishing'],
    cons: ['iOS only', 'Limited editing depth'],
    pricing: 'free',
    pricingNote: 'Free',
    strategicGuide: {
      title: "Vertical Story Architecture",
      steps: [
        { phase: "Creative Prep", action: "Drafting 9:16 vertical video stories with fast-paced cuts for high retention." },
        { phase: "Audio Sync", action: "Utilizing trending licensed tracks to align with native user experience." },
        { phase: "Engagement", action: "Adding 'Polls' and 'Interactive Elements' to drive user participation." },
        { phase: "Publishing", action: "Batching 'Spotlight' content to maximize organic discovery within the Snap app." }
      ]
    },
    caseStudy: {
      company: "Urban Beats",
      context: "Streetwear brand scaling vertical story content for Gen Z reach.",
      metricName: "Average Completion Rate %",
      before: 15,
      after: 62,
      label: "Retention Score",
      projections: [
        { period: 'Widescreen', value: 15 },
        { period: 'Vertical', value: 35 },
        { period: 'Fast Cuts', value: 48 },
        { period: 'Engagement Hook', value: 62 }
      ]
    },
    visualizationType: 'analytics-chart',
    rating: 4.2,
  },
  {
    id: 'snap-socialbakers',
    platform: 'snapchat',
    category: 'analytics',
    name: 'Emplifi (Socialbakers)',
    tagline: 'Cross-platform social analytics with Snap data',
    description: 'Unified analytics including Snapchat performance data. Track audience sentiment, benchmark against competitors, and report across all social channels.',
    pros: ['Unified dashboards', 'AI-powered insights', 'Cross-platform reporting', 'Influencer module'],
    cons: ['Very expensive', 'Enterprise-focused'],
    pricing: 'paid',
    pricingNote: 'Custom enterprise pricing',
    strategicGuide: {
      title: "Enterprise Social Intelligence",
      steps: [
        { phase: "Aggregation", action: "Linking multi-market social accounts into a single global performance view." },
        { phase: "Sentiment Analysis", action: "Deploying AI-driven listening to monitor brand health spikes in real-time." },
        { phase: "Competitive Audit", action: "Benchmarking against 15+ competitors to identify industry share of voice gaps." },
        { phase: "Response Opt", action: "Automating customer care workflows to reduce average resolution time." }
      ]
    },
    caseStudy: {
      company: "AirJet Travel",
      context: "International airline managing high-volume customer sentiment during travel peaks.",
      metricName: "SLA Resolution Rate %",
      before: 45,
      after: 98,
      label: "Service Score",
      projections: [
        { period: 'Manual DMs', value: 45 },
        { period: 'Unified Inbox', value: 65 },
        { period: 'AI Routing', value: 82 },
        { period: 'Enterprise Sync', value: 98 }
      ]
    },
    visualizationType: 'analytics-chart',
    rating: 4.2,
  },
  {
    id: 'snap-creator-marketplace',
    platform: 'snapchat',
    category: 'ads',
    name: 'Snap Creator Marketplace',
    tagline: 'Discover and partner with Snap creators',
    description: 'Find verified Snapchat creators for sponsored content campaigns. Filter by category, audience size, engagement, and demographics to find your ideal partners.',
    pros: ['Official Snap platform', 'Verified creator data', 'Deal management', 'Integrated payments'],
    cons: ['Limited creator pool vs competitors', 'US-heavy'],
    pricing: 'free',
    pricingNote: 'Free to access; creator fees apply',
    rating: 3.9,
    url: 'https://forbusiness.snapchat.com/creator-marketplace',
    icon: '🌟',
  },
  {
    id: 'snap-veed',
    platform: 'snapchat',
    category: 'content',
    name: 'VEED.IO',
    tagline: 'Online video editor for vertical content',
    description: 'Browser-based video editor perfect for creating Snapchat-optimized vertical video content with subtitles, effects, transitions, and brand overlays.',
    pros: ['Browser-based (no install)', 'Auto-subtitles', 'Vertical templates', 'Team sharing'],
    cons: ['Watermark on free tier', 'Limited to online use'],
    pricing: 'freemium',
    pricingNote: 'Free / Pro $25/mo',
    rating: 4.4,
    url: 'https://www.veed.io',
    icon: '🎞️',
  },
  {
    id: 'snap-ar-studio-partner',
    platform: 'snapchat',
    category: 'ar',
    name: 'Snap AR Partner Network',
    tagline: 'Connect with certified AR Lens creators',
    description: 'Find Snapchat-certified AR developers and creative studios to build custom branded Lenses for your marketing campaigns at scale.',
    pros: ['Certified quality', 'Wide range of styles', 'Faster execution', 'Support from Snap'],
    cons: ['Cost varies widely', 'Not DIY'],
    pricing: 'paid',
    pricingNote: 'Custom pricing per project',
    rating: 4.3,
    url: 'https://ar.snap.com/lens-creative-partners',
    icon: '🏅',
  },
  {
    id: 'snap-brandwatch',
    platform: 'snapchat',
    category: 'analytics',
    name: 'Brandwatch',
    tagline: 'Social intelligence and audience research',
    description: 'Monitor brand mentions related to your Snapchat campaigns, track trends among Gen Z audiences, and get deep audience intelligence for smarter targeting.',
    pros: ['Best-in-class listening', 'AI insights', 'Massive data coverage', 'Trend detection'],
    cons: ['Very expensive', 'Snap-specific features limited'],
    pricing: 'paid',
    pricingNote: 'From $1,000/mo',
    rating: 4.5,
    url: 'https://www.brandwatch.com',
    icon: '👁️',
  },

  // ═══════════════════════════ TWITTER / X ═════════════════════════════════
  {
    id: 'tw-x-ads',
    platform: 'twitter',
    category: 'ads',
    name: 'X Ads (Twitter Ads)',
    tagline: 'Promoted content and trend takeovers on X',
    description: "X's native ad platform for running Promoted Tweets, Follower Ads, Trend Takeovers, and video campaigns. Unique keyword targeting reaches users in active conversations.",
    pros: ['Conversation targeting unique to X', 'Trend Takeovers for massive reach', 'Real-time engagement'],
    cons: ['Performance fluctuated post-rebrand', 'Less brand-safe than competitors', 'Rising CPMs'],
    pricing: 'free',
    pricingNote: 'Free; ad spend required',
    rating: 3.8,
    url: 'https://ads.twitter.com',
    icon: '🐦',
    strategicGuide: {
      title: "Real-Time Conversation Dominance",
      steps: [
        { phase: "Trend Alignment", action: "Identifying trending industry hashtags to anchor brand messaging in active dialogues." },
        { phase: "Targeting", action: "Deploying 'Keyword Ads' to users engaging in real-time niche conversations." },
        { phase: "Thread Building", action: "Constructing high-value 'X Threads' to drive deeper narrative engagement." },
        { phase: "Optimization", action: "Iterating ad copy hourly during fast-moving cultural moments to maximize CTR." }
      ]
    },
    caseStudy: {
      company: "CryptoVault",
      context: "Fintech brand scaling during high-velocity market news cycles.",
      metricName: "Cost Per Follower (CPF)",
      before: 4.5,
      after: 0.8,
      label: "USD per New User",
      projections: [
        { period: 'Generic Ads', value: 4.5 },
        { period: 'Keyword Opt', value: 3.2 },
        { period: 'Thread Promos', value: 1.8 },
        { period: 'Topic Dominance', value: 0.8 }
      ]
    },
    visualizationType: 'analytics-chart',
    rating: 3.8,
  },
  {
    id: 'tw-tweetdeck',
    platform: 'twitter',
    category: 'scheduling',
    name: 'TweetDeck (XPro)',
    tagline: 'Power user dashboard for X/Twitter',
    description: "X's official multi-column dashboard for monitoring multiple timelines, lists, mentions, and hashtags. Schedule tweets and manage multiple accounts.",
    pros: ['Official X tool', 'Multi-column view', 'Account management', 'Search columns'],
    cons: ['Now requires X Premium', 'Feature set is basic vs third-party'],
    pricing: 'paid',
    pricingNote: 'Requires X Premium ($8/mo)',
    strategicGuide: {
      title: "Advanced Column Workflow",
      steps: [
        { phase: "Search Streams", action: "Setting up Boolean search columns to monitor specific competitors and keywords." },
        { phase: "List Management", action: "Curating expert lists to filter signal from noise in high-volume feeds." },
        { phase: "Scheduling", action: "Batching 'Thread' releases during peak verified-user activity windows." },
        { phase: "Engagement", action: "Utilizing 'Power-User' shortcuts to maintain multiple active conversations." }
      ]
    },
    caseStudy: {
      company: "Journalist Collective",
      context: "Media group managing breaking news streams across 20+ accounts.",
      metricName: "Information Relay Speed (Min)",
      before: 15,
      after: 2,
      label: "Minutes to Live",
      projections: [
        { period: 'Single Feed', value: 15 },
        { period: 'Multi-Tab', value: 8 },
        { period: 'Pro-Columns', value: 4 },
        { period: 'Optimized Workflow', value: 2 }
      ]
    },
    visualizationType: 'timeline',
    rating: 4.0,
  },
  {
    id: 'tw-brandwatch-twitter',
    platform: 'twitter',
    category: 'listening',
    name: 'Brandwatch',
    tagline: 'Real-time Twitter listening and intelligence',
    description: 'Monitor mentions, hashtags, and conversations about your brand on X/Twitter in real time. Identify trends, influencers, and sentiment shifts the moment they happen.',
    pros: ['Largest Twitter data access', 'Historical data', 'AI sentiment analysis', 'Crisis detection'],
    cons: ['Very expensive enterprise tool'],
    pricing: 'paid',
    pricingNote: 'From $1,000/mo',
    rating: 4.5,
    url: 'https://www.brandwatch.com/twitter',
    icon: '📡',
  },
  {
    id: 'tw-sprinklr',
    platform: 'twitter',
    category: 'listening',
    name: 'Sprinklr',
    tagline: 'Unified customer experience management',
    description: 'Manage Twitter customer care, social listening, content publishing, and paid media in one enterprise-grade platform used by Fortune 500 brands.',
    pros: ['True enterprise scale', 'AI-powered workflows', 'Customer care SLA tracking', 'Deep X integration'],
    cons: ['Very complex setup', 'Prohibitive cost for SMBs'],
    pricing: 'paid',
    pricingNote: 'Enterprise pricing',
    rating: 4.4,
    url: 'https://www.sprinklr.com',
    icon: '🏢',
  },
  {
    id: 'tw-mentionmapp',
    platform: 'twitter',
    category: 'analytics',
    name: 'Followerwonk',
    tagline: 'Twitter follower analytics and optimization',
    description: 'Analyze your Twitter followers, find influencers in any niche, compare accounts, and discover the best times to post based on your audience activity.',
    pros: ['Best Twitter follower analysis', 'Influencer discovery', 'Compare accounts', 'Best-time data'],
    cons: ['Fewer features post-API changes', 'X API limitations'],
    pricing: 'freemium',
    pricingNote: 'Free / Pro $23/mo',
    rating: 4.0,
    url: 'https://followerwonk.com',
    icon: '🔍',
  },
  {
    id: 'tw-audiense',
    platform: 'twitter',
    category: 'analytics',
    name: 'Audiense',
    tagline: 'Deep Twitter audience intelligence',
    description: 'Segment and deeply understand Twitter/X audiences using psychographic profiling, interest clustering, and personality insights powered by IBM Watson.',
    pros: ['Unmatched audience insights', 'Psychographic data', 'Campaign targeting data', 'Segment builder'],
    cons: ['Expensive', 'X API dependency affects data'],
    pricing: 'freemium',
    pricingNote: 'Free (limited) / Insights from $1,499/mo',
    rating: 4.3,
    url: 'https://audiense.com',
    icon: '🧠',
  },
  {
    id: 'tw-hypefury',
    platform: 'twitter',
    category: 'scheduling',
    name: 'Hypefury',
    tagline: 'Grow your X/Twitter audience on autopilot',
    description: 'Schedule tweets and threads, auto-retweet evergreen content, auto-DM new followers, and cross-post to other platforms. Built specifically for X/Twitter creators.',
    pros: ['Thread composer', 'Auto-retweet feature', 'Cross-posting to IG', 'Newsletter integration'],
    cons: ['X-only focus', 'Some automation features risky for accounts'],
    pricing: 'paid',
    pricingNote: 'From $19/mo',
    rating: 4.4,
    url: 'https://hypefury.com',
    icon: '⚡',
    strategicGuide: {
      title: "Strategic Blueprint: Automated Growth Orchestration",
      steps: [
        "Evergreen Rotation - Add your highest-performing tweets to the evergreen library for automated periodic recycling.",
        "Thread Construction - Architect high-value educational threads using the distraction-free writer to maximize bookmarks.",
        "Engagement Triggers - Configure 'Auto-DM' for new followers to deliver lead magnets or welcome messages instantly.",
        "Cross-Platform Bridge - Automate the cross-posting of your top-performing tweets to Instagram as high-aesthetic quote cards."
      ]
    }
  },
  {
    id: 'tw-typefully',
    platform: 'twitter',
    category: 'scheduling',
    name: 'Typefully',
    tagline: 'Distraction-free X thread writer',
    description: 'Write, schedule, and publish Twitter threads with a beautiful, distraction-free editor. Includes analytics, AI suggestions, and collaboration for team content.',
    pros: ['Best thread writing experience', 'Clean AI suggestions', 'Analytics included', 'Team collaboration'],
    cons: ['X-only focus', 'Limited free tier'],
    pricing: 'freemium',
    pricingNote: 'Free / Creator $12.50/mo',
    rating: 4.6,
    url: 'https://typefully.com',
    icon: '✍️',
  },
  {
    id: 'tw-x-analytics',
    platform: 'twitter',
    category: 'analytics',
    name: 'X Analytics (Native)',
    tagline: "X's built-in tweet performance dashboard",
    description: 'Access tweet impressions, engagement rates, link clicks, likes, retweets, and audience demographics directly through the X Analytics dashboard — completely free.',
    pros: ['Free', 'Native integration', 'Historical tweet data', 'Export to CSV'],
    cons: ['Basic metrics only', 'No competitor data', 'Limited visualization'],
    pricing: 'free',
    pricingNote: 'Free',
    rating: 3.9,
    url: 'https://analytics.twitter.com',
    icon: '📊',
  },

  // ═══════════════════════════ LINKEDIN ════════════════════════════════════
  {
    id: 'li-campaign-manager',
    platform: 'linkedin',
    category: 'ads',
    name: 'LinkedIn Campaign Manager',
    tagline: 'The most powerful B2B ad platform on the web',
    description: "Run Sponsored Content, Message Ads, Lead Gen Forms, and Dynamic Ads targeting LinkedIn's 950M+ professionals by job title, company, industry, seniority, and skills.",
    pros: ['Unmatched B2B targeting', 'Lead Gen Forms native', 'Account-based marketing', 'High-intent audience'],
    cons: ['Most expensive CPCs/CPMs', 'Minimum budget $10/day', 'Steeper learning curve'],
    pricing: 'free',
    pricingNote: 'Free; ad spend required',
    rating: 4.5,
    url: 'https://www.linkedin.com/campaignmanager',
    icon: '🎯',
    strategicGuide: {
      title: "High-Intent B2B Prospecting",
      steps: [
        { phase: "ABM Setup", action: "Uploading target company lists to reach decision-makers at specific accounts." },
        { phase: "Lead Forms", action: "Utilizing native pre-filled forms to reduce friction and improve conversion rates." },
        { phase: "Thought Leadership", action: "Promoting long-form 'Thought Leadership' articles to build industry authority." },
        { phase: "Conversion Opt", action: "Tracking member seniority and job function data to optimize high-value bidding." }
      ]
    },
    caseStudy: {
      company: "CloudScale Enterprise",
      context: "SaaS company targeting C-suite executives in the Fortune 500.",
      metricName: "Qualified Lead Volume",
      before: 12,
      after: 84,
      label: "SQLs per Month",
      projections: [
        { period: 'Cold Search', value: 12 },
        { period: 'Sponsored Post', value: 28 },
        { period: 'ABM Target', value: 52 },
        { period: 'Native Lead Gen', value: 84 }
      ]
    },
    visualizationType: 'analytics-chart',
    rating: 4.5,
  },
  {
    id: 'li-sales-navigator',
    platform: 'linkedin',
    category: 'leads',
    name: 'LinkedIn Sales Navigator',
    tagline: 'Advanced B2B prospecting and lead generation',
    description: 'Access advanced LinkedIn search filters, get lead recommendations, track account signals, and use InMail credits to reach ideal B2B prospects at scale.',
    pros: ['Best-in-class B2B prospecting', 'CRM integrations', 'Account alerts', 'TeamLink feature'],
    cons: ['Very expensive', 'InMail quotas', 'Data not always current'],
    pricing: 'paid',
    pricingNote: 'Core $99/mo / Advanced $169/mo',
    rating: 4.5,
    url: 'https://business.linkedin.com/sales-solutions/sales-navigator',
    icon: '🧭',
    strategicGuide: {
      title: "Precision Lead Generation",
      steps: [
        { phase: "Filtering", action: "Using 'Advanced Search' to identify decision-makers by seniority and function." },
        { phase: "Account Signals", action: "Monitoring 'Job Changes' and 'Company News' to time outreach perfectly." },
        { phase: "Warm Introductions", action: "Utilizing 'TeamLink' to find shared connections for professional introductions." },
        { phase: "Sync", action: "Exporting saved leads to CRM (HubSpot/Salesforce) for multi-channel follow-up." }
      ]
    },
    caseStudy: {
      company: "ProLogistics Global",
      context: "Logistics firm scaling cold outreach to supply chain directors.",
      metricName: "InMail Response Rate %",
      before: 4,
      after: 29,
      label: "Success Rate",
      projections: [
        { period: 'Cold Outreach', value: 4 },
        { period: 'Targeted Pref', value: 12 },
        { period: 'Signal Timed', value: 19 },
        { period: 'Warm Intro Opt', value: 29 }
      ]
    },
    visualizationType: 'analytics-chart',
    rating: 4.5,
  },
  {
    id: 'li-linkedin-analytics',
    platform: 'linkedin',
    category: 'analytics',
    name: 'LinkedIn Page Analytics',
    tagline: 'Deep native analytics for Company Pages',
    description: "LinkedIn's free analytics for Company Pages covering visitors, followers, post performance, competitor benchmarks, employee advocacy, and audience demographics.",
    pros: ['Free', 'Competitor benchmarking', 'Follower demographics', 'Content performance'],
    cons: ['Limited to 90-day window', 'No personal profile analytics', 'Export is basic'],
    pricing: 'free',
    pricingNote: 'Free',
    rating: 4.2,
    url: 'https://www.linkedin.com/company/analytics',
    icon: '📊',
  },
  {
    id: 'li-shield-analytics',
    platform: 'linkedin',
    category: 'analytics',
    name: 'Shield Analytics',
    tagline: 'Advanced LinkedIn personal analytics',
    description: 'Track your personal LinkedIn post performance with metrics LinkedIn hides: impression patterns, profile view trends, content benchmarks, and top-performing posts.',
    pros: ['Personal profile analytics', 'Historical data', 'Creator-focused insights', 'Simple UI'],
    cons: ['LinkedIn only', 'Some data limitations'],
    pricing: 'paid',
    pricingNote: 'From $8/mo',
    strategicGuide: {
      title: "Personal Brand Authority",
      steps: [
        { phase: "Audit", action: "Analyzing 'Impression Heatmaps' to identify the best time of day for your niche." },
        { phase: "Benchmark", action: "Comparing personal post reach against the top 1% of creators in your industry." },
        { phase: "Content Mix", action: "Identifying which content types (Text vs. Poll vs. Doc) drive the most profile views." },
        { phase: "Loyalty", action: "Tracking 'Returning Reader' metrics to measure long-term audience retention." }
      ]
    },
    caseStudy: {
      company: "Marketing Maven (Solo)",
      context: "B2B consultant building a personal brand to drive inbound consulting leads.",
      metricName: "Monthly Inbound Inquiries",
      before: 2,
      after: 18,
      label: "Leads per Month",
      projections: [
        { period: 'Inconsistent', value: 2 },
        { period: 'Scheduled', value: 5 },
        { period: 'Data-Optimized', value: 12 },
        { period: 'Thought Leader', value: 18 }
      ]
    },
    visualizationType: 'analytics-chart',
    rating: 4.5,
  },
  {
    id: 'li-expandi',
    platform: 'linkedin',
    category: 'leads',
    name: 'Expandi',
    tagline: 'Safe LinkedIn automation for outreach',
    description: 'Automate personalized LinkedIn connection requests, follow-up messages, and InMails within safe daily limits. Build drip sequences and track campaign ROI.',
    pros: ['Cloud-based (no browser required)', 'Dynamic personalization', 'A/B testing', 'Webhook integrations'],
    cons: ['Against LinkedIn TOS if abused', 'Account ban risk if misconfigured'],
    pricing: 'paid',
    pricingNote: '$99/mo per seat',
    strategicGuide: {
      title: "Outreach Automation Architecture",
      steps: [
        { phase: "Safety", action: "Configuring daily activity limits to stay within LinkedIn anti-spam thresholds." },
        { phase: "Sequence", action: "Building a 5-step drip campaign: Connection -> Value Link -> Follow-up -> Close." },
        { phase: "Personalization", action: "Utilizing dynamic placeholders to inject company-specific news into openers." },
        { phase: "Testing", action: "Running A/B tests on subject lines to maximize connection acceptance rates." }
      ]
    },
    caseStudy: {
      company: "SaaS Rocket",
      context: "Enterprise software startup scaling outbound prospecting for Series A growth.",
      metricName: "Meeting Booked ROI",
      before: 12,
      after: 65,
      label: "Meetings/Mo",
      projections: [
        { period: 'Manual Search', value: 12 },
        { period: 'Basic Auto', value: 25 },
        { period: 'Personalized Drip', value: 42 },
        { period: 'High-Scale Opt', value: 65 }
      ]
    },
    visualizationType: 'analytics-chart',
    rating: 4.2,
  },
  {
    id: 'li-taplio',
    platform: 'linkedin',
    category: 'content',
    name: 'Taplio',
    tagline: 'AI-powered LinkedIn content and scheduling',
    description: 'Generate LinkedIn content ideas with AI, write and schedule posts, track analytics, and engage with your network — all in one LinkedIn-first content tool.',
    pros: ['AI content generation', 'Scheduling', 'Analytics', 'Carousel maker'],
    cons: ['LinkedIn only', 'AI content needs editing', 'Slightly expensive'],
    pricing: 'paid',
    pricingNote: 'From $49/mo',
    strategicGuide: {
      title: "AI Content Factory",
      steps: [
        { phase: "Ideation", action: "Using 'Topic Generator' to find viral sub-themes within your professional niche." },
        { phase: "Drafting", action: "Leveraging AI to turn one-line ideas into high-engagement B2B carousels." },
        { phase: "Curation", action: "Daily auditing of the library of 1M+ top LinkedIn posts for creative inspiration." },
        { phase: "Engagement", action: "Using 'Smart Reply' to manage post comments and boost algorithm reach." }
      ]
    },
    caseStudy: {
      company: "FinTech Insights",
      context: "Corporate publication scaling LinkedIn presence with a small team.",
      metricName: "Post Impressions / Year",
      before: 0.5,
      after: 4.2,
      label: "M Impressions",
      projections: [
        { period: 'Manual Post', value: 0.5 },
        { period: 'Scheduled Mix', value: 1.2 },
        { period: 'AI Carousel', value: 2.8 },
        { period: 'Network Dominance', value: 4.2 }
      ]
    },
    visualizationType: 'analytics-chart',
    rating: 4.4,
  },
  {
    id: 'li-lusha',
    platform: 'linkedin',
    category: 'leads',
    name: 'Lusha',
    tagline: 'Enrich LinkedIn leads with contact data',
    description: 'LinkedIn Chrome extension that reveals verified contact data (email, phone) for LinkedIn profiles. Ideal for sales teams who need to take LinkedIn prospects off-platform.',
    pros: ['Browser extension ease of use', 'Good data accuracy', 'CRM integrations', 'Free tier available'],
    cons: ['GDPR compliance concerns', 'Free credits limited', 'Data can be outdated'],
    pricing: 'freemium',
    pricingNote: 'Free (5 credits/mo) / Pro from $36/mo',
    strategicGuide: {
      title: "Contact Intelligence Enrichment",
      steps: [
        { phase: "Extension Setup", action: "Installing the Chrome browser companion for instant profile data revealing." },
        { phase: "Bulk Reveal", action: "Revealing up to 25 profile contacts at once from a single LinkedIn search page." },
        { phase: "Verification", action: "Using the 'Lusha Verification' layer to ensure 90%+ email deliverability." },
        { phase: "CRM Push", action: "Syncing revealed phone and email data directly to the HubSpot sales pipeline." }
      ]
    },
    caseStudy: {
      company: "Prime Recruiters",
      context: "Headhunting firm optimizing candidate outreach speed.",
      metricName: "Lead Reveal Velocity",
      before: 5,
      after: 45,
      label: "Records / Hour",
      projections: [
        { period: 'Manual Google', value: 5 },
        { period: 'Database Hunt', value: 12 },
        { period: 'Basic Extension', value: 25 },
        { period: 'Enriched Batch', value: 45 }
      ]
    },
    visualizationType: 'analytics-chart',
    rating: 4.1,
  },
  {
    id: 'li-linkedin-recruiter',
    platform: 'linkedin',
    category: 'recruiting',
    name: 'LinkedIn Recruiter',
    tagline: "World's largest professional talent database",
    description: "Source and engage passive candidates with advanced InMail, smart pipeline management, and the full depth of LinkedIn's 950M professional profiles.",
    pros: ['Unmatched candidate pool', '150 InMails/mo', 'ATS integrations', 'Talent insights'],
    cons: ['Very expensive', 'InMail response rates declining', 'Not for SMBs'],
    pricing: 'paid',
    pricingNote: 'From $835/mo',
    strategicGuide: {
      title: "Advanced Talent Sourcing",
      steps: [
        { phase: "Pipeline Architecture", action: "Setting up 'Projects' to categorize candidates by seniority and skill-cluster." },
        { phase: "InMail Blueprint", action: "Writing high-engagement templates with 'Smart Fields' to reduce candidate churn." },
        { phase: "Insights", action: "Utilizing 'Talent Insights' to identify companies with high attrition for prospecting." },
        { phase: "Collaboration", action: "Sharing 'Candidate Shortlists' with hiring managers for instant feedback sync." }
      ]
    },
    caseStudy: {
      company: "Apex Tech Talent",
      context: "Global recruiting firm scaling executive search performance.",
      metricName: "Candidate Response Rate %",
      before: 18,
      after: 42,
      label: "Engagement Multiplier",
      projections: [
        { period: 'Cold InMail', value: 18 },
        { period: 'Personalized', value: 25 },
        { period: 'Signal-Based', value: 34 },
        { period: 'Recruiter Opt', value: 42 }
      ]
    },
    visualizationType: 'analytics-chart',
    rating: 4.4,
  },
  {
    id: 'li-lemlist',
    platform: 'linkedin',
    category: 'leads',
    name: 'Lemlist',
    tagline: 'Multi-channel outreach with LinkedIn sequences',
    description: 'Build outreach sequences combining LinkedIn touches, personalized emails, and cold calls. Uses AI to personalize at scale with images, videos, and dynamic text.',
    pros: ['Multi-channel sequences', 'Personalized images/videos', 'A/B testing', 'Deliverability tools'],
    cons: ['Some LinkedIn steps still manual', 'Pricing adds up for teams'],
    pricing: 'paid',
    pricingNote: 'Email Outreach $59/mo / Sales Engagement $99/mo',
    strategicGuide: {
      title: "Multi-Channel Outreach",
      steps: [
        { phase: "Sequence Build", action: "Constructing 'LinkedIn -> Email -> LinkedIn' touch-point sequences." },
        { phase: "Image Personalization", action: "Using AI to generate custom 'Coffee Mug' or 'Whiteboard' welcome images." },
        { phase: "Warm-up", action: "Activating 'Email Warm-up' to ensure 100% deliverability for outbound domains." },
        { phase: "Workflow", action: "Automating follow-ups based on 'Link Click' or 'Profile View' triggers." }
      ]
    },
    caseStudy: {
      company: "ByteScale SaaS",
      context: "B2B software startup scaling outbound sales for mid-market clients.",
      metricName: "Pipeline Revenue Generated",
      before: 45000,
      after: 250000,
      label: "USD per Month",
      projections: [
        { period: 'Email Only', value: 45000 },
        { period: 'Multi-Touch', value: 95000 },
        { period: 'AI Personas', value: 165000 },
        { period: 'Lemlist Master', value: 250000 }
      ]
    },
    visualizationType: 'analytics-chart',
    rating: 4.4,
  },
  {
    id: 'li-dux-soup',
    platform: 'linkedin',
    category: 'leads',
    name: 'Dux-Soup',
    tagline: 'LinkedIn automation for systematic prospecting',
    description: 'Automate LinkedIn profile visits, connection requests, and follow-up messages. Integrates with CRMs like HubSpot and Pipedrive for full sales workflow automation.',
    pros: ['CRM sync', 'Drip campaigns', 'Tag and note profiles', 'Team accounts'],
    cons: ['Chrome extension (not cloud)', 'TOS risk', 'Requires LinkedIn open'],
    pricing: 'freemium',
    pricingNote: 'Free / Pro $14.99/mo / Turbo $55/mo',
    strategicGuide: {
      title: "Automated Lead Extraction",
      steps: [
        { phase: "Profile Scraping", action: "Automatically visiting and recording data from 100+ targeted profiles daily." },
        { phase: "Tagging", action: "Using 'Smart Tags' to segment leads directly inside the LinkedIn UI." },
        { phase: "Drip Messaging", action: "Setting up a 'Delayed Follow-up' sequence for new connection acceptances." },
        { phase: "CRM Automation", action: "Syncing visited profile data to Pipedrive for centralized lead management." }
      ]
    },
    caseStudy: {
      company: "Solar Solutions",
      context: "Regional energy company automating B2B field sales prospecting.",
      metricName: "Leads Managed / Rep",
      before: 50,
      after: 450,
      label: "Prospects/Mo",
      projections: [
        { period: 'Manual Log', value: 50 },
        { period: 'Chrome Batch', value: 120 },
        { period: 'Auto-Visit', value: 280 },
        { period: 'Dux-Soup Flow', value: 450 }
      ]
    },
    visualizationType: 'analytics-chart',
    rating: 4.0,
  },
  {
    id: 'li-linkedin-pages',
    platform: 'linkedin',
    category: 'content',
    name: 'LinkedIn Pages (Native)',
    tagline: 'Organic content publishing for brands',
    description: 'Publish text posts, articles, documents, video, and carousels directly on LinkedIn Company Pages. Includes scheduling, newsletter creation, and organic analytics.',
    pros: ['Free native tool', 'Newsletter feature', 'Document/carousel posts', 'Employee advocacy'],
    cons: ['No advanced scheduling', 'Limited analytics vs paid tools'],
    pricing: 'free',
    pricingNote: 'Free',
    strategicGuide: {
      title: "Corporate Page Growth",
      steps: [
        { phase: "Newsletter", action: "Launching a 'Weekly Industry Brief' to build a recurring subscriber audience." },
        { phase: "Advocacy", action: "Configuring 'Employee Notifications' to boost early engagement signals on new posts." },
        { phase: "Live Events", action: "Scheduling 'LinkedIn Live' sessions to drive real-time decision-maker interaction." },
        { phase: "Analytics Audit", action: "Monitoring 'Follower Seniority' to ensure content is reaching the C-suite tier." }
      ]
    },
    caseStudy: {
      company: "TechNexus Global",
      context: "Enterprise IT firm scaling LinkedIn page authority for B2B trust.",
      metricName: "Organic Share of Voice",
      before: 2,
      after: 14,
      label: "% Industry Reach",
      projections: [
        { period: 'Static News', value: 2 },
        { period: 'Video-First', value: 5 },
        { period: 'Advocacy Push', value: 9 },
        { period: 'Newsletter Opt', value: 14 }
      ]
    },
    visualizationType: 'analytics-chart',
    rating: 4.1,
  },
  {
    id: 'li-phantombuster',
    platform: 'linkedin',
    category: 'leads',
    name: 'PhantomBuster',
    tagline: 'No-code LinkedIn data extraction and automation',
    description: "Extract LinkedIn search results, group members, and event attendees. Automate profile visits and connection requests using cloud 'Phantoms' with no coding required.",
    pros: ['No-code automation', 'Wide range of Phantoms', 'Cloud-based', 'Integrates with Zapier'],
    cons: ['TOS risk', 'Can get accounts flagged', 'Credits model confusing'],
    pricing: 'freemium',
    pricingNote: 'Free trial / Starter $56/mo',
    strategicGuide: {
      title: "Complex Cloud Automation",
      steps: [
        { phase: "Workflow Build", action: "Connecting 'LinkedIn Search' to 'Email Discovery' Phantoms for full-funnel scrapes." },
        { phase: "Account Warming", action: "Setting 'Slow-Start' delays to mimic realistic user activity patterns." },
        { phase: "Webhooks", action: "Pushing scraped lead data to Slack or CRM via automated webhook triggers." },
        { phase: "Scaling", action: "Running multiple 'Phantoms' simultaneously in the cloud for 24/7 lead mining." }
      ]
    },
    caseStudy: {
      company: "DataDiggers",
      context: "Growth hacking agency automating lead data enrichment at scale.",
      metricName: "Enriched Records per Day",
      before: 500,
      after: 12500,
      label: "Leads Processed",
      projections: [
        { period: 'Manual Copy', value: 500 },
        { period: 'Desktop Bot', value: 2200 },
        { period: 'Cloud Phantom', value: 7500 },
        { period: 'Multi-Grid Opt', value: 12500 }
      ]
    },
    visualizationType: 'analytics-chart',
    rating: 4.1,
  },
];

export const getToolsByPlatform = (platformId) =>
  tools.filter((t) => t.platform === platformId);

export const getToolsByPlatformAndCategory = (platformId, categoryId) =>
  categoryId === 'all'
    ? getToolsByPlatform(platformId)
    : tools.filter((t) => t.platform === platformId && t.category === categoryId);
