import fs from 'fs';
import path from 'path';

function generateMock(name, category, platform) {
  let steps = [];
  let title = `Practical Example: Using ${name}`;

  if (category === 'ads') {
    title = `Scenario: Launching a lead-gen ad campaign on ${platform}`;
    steps = [
      `Step 1: Setup Objective - Open ${name} and create a new campaign with 'Lead Generation' as your main goal.`,
      `Step 2: Define Audience - Target your ideal demographic. For example, users aged 25-45 interested in technology.`,
      `Step 3: Upload Creative - Attach your beautifully designed image or video. Add a compelling headline and CTA.`,
      `Step 4: Launch & Monitor - Publish the campaign and use the dashboard to track Cost Per Click (CPC) and conversions.`
    ];
  } else if (category === 'analytics') {
    title = `Scenario: Analyzing monthly account performance`;
    steps = [
      `Step 1: Connect Account - Authenticate your ${platform} profile to sync historical data securely.`,
      `Step 2: Dashboard Overview - Check your main dashboard for follower growth, engagement rate, and total reach.`,
      `Step 3: Analyze Top Posts - Filter the view to see which specific posts drove the most interactions this month.`,
      `Step 4: Export Report - Generate a clean PDF or CSV report to share with your clients or stakeholders.`
    ];
  } else if (category === 'scheduling') {
    title = `Scenario: Automating a week's worth of content`;
    steps = [
      `Step 1: Content Calendar - Open the visual calendar view to see where you have gaps in your posting schedule.`,
      `Step 2: Upload Assets - Drag and drop your images or videos into the media library.`,
      `Step 3: Write & Hashtags - Draft your captions and use the built-in hashtag suggestions to maximize reach.`,
      `Step 4: Auto-Schedule - Set the precise dates and times for the posts to go live automatically without manual intervention.`
    ];
  } else if (category === 'content') {
    title = `Scenario: Creating a high-converting social graphic`;
    steps = [
      `Step 1: Choose Template - Start with a pre-sized template optimized specifically for ${platform}.`,
      `Step 2: Apply Brand Kit - Automatically inject your brand colors, fonts, and logos into the template.`,
      `Step 3: Edit & Polish - Use drag-and-drop tools to refine the layout and add engaging text elements.`,
      `Step 4: Export - Download the graphic in high resolution or publish it directly to your connected social channels.`
    ];
  } else if (category === 'leads') {
    title = `Scenario: Building an outbound lead pipeline`;
    steps = [
      `Step 1: Define Prospect - Use advanced search filters to find ideal buyers based on job title, industry, and company size.`,
      `Step 2: Import to List - Save these highly targeted profiles into a dedicated outreach list.`,
      `Step 3: Message Sequence - Set up a gentle, multi-step messaging sequence (e.g., initial hello, value proposition drop, follow-up).`,
      `Step 4: Track Replies - Monitor the integrated inbox to prioritize hot leads who have responded positively.`
    ];
  } else if (category === 'influencer') {
    title = `Scenario: Running a micro-influencer product launch`;
    steps = [
      `Step 1: Discovery - Search the database for creators with high engagement rates.`,
      `Step 2: Outreach - Send automated, personalized pitch emails offering a free product in exchange for honest content.`,
      `Step 3: Manage Logistics - Track product shipping status and unique promo codes directly from the dashboard.`,
      `Step 4: Measure ROI - Once posts go live, track how many sales were driven by each influencer's custom link.`
    ];
  } else if (category === 'listening') {
    title = `Scenario: Real-time brand sentiment monitoring`;
    steps = [
      `Step 1: Setup Keywords - Enter your brand name, competitors, and key industry hashtags into the tracking matrix.`,
      `Step 2: Sentiment AI - Let the tool categorize incoming mentions as Positive, Neutral, or Negative to gauge public perception.`,
      `Step 3: Alert Triggers - Set up SMS or email alerts for sudden spikes in negative mentions to preempt PR crises.`,
      `Step 4: Identify Advocates - Pinpoint the users who engage positively the most and reach out to them for collaboration.`
    ];
  } else {
    // Fallback based on tagline
    title = `Scenario: Applying the tool effectively`;
    steps = [
      `Step 1: Initialization - Connect your platform accounts and set up your initial preferences.`,
      `Step 2: Core Usage - Start utilizing the main features.`,
      `Step 3: Integration - Connect the tool outputs with your broader marketing stack (e.g., your CRM or main analytics).`,
      `Step 4: Review - Periodically evaluate the ROI and time saved by using this tool.`
    ];
  }

  return { title, steps };
}

const toolsPath = './src/data/tools.js';
let content = fs.readFileSync(toolsPath, 'utf8');

// Parse out matches via regex
const regex = /id:\s*'([a-z0-9-]+)',\s*platform:\s*'([a-z]+)',\s*category:\s*'([a-z]+)',\s*name:\s*'([^']+)'/g;
let match;
const updates = [];

while ((match = regex.exec(content)) !== null) {
  const id = match[1];
  const platform = match[2];
  const category = match[3];
  const name = match[4];
  updates.push({ id, platform, category, name });
}

let modifiedContent = content;

for (const update of updates) {
  const mock = generateMock(update.name, update.category, update.platform);
  const mockStr = `mockScenario: {\n      title: ${JSON.stringify(mock.title)},\n      steps: [\n        ${mock.steps.map(s => JSON.stringify(s)).join(',\n        ')}\n      ]\n    },\n    `;
  
  // Replace the exact id line with id line + mockScenario
  const searchString = `id: '${update.id}',`;
  if (!modifiedContent.includes(mockStr.trim())) {
    modifiedContent = modifiedContent.replace(searchString, `${searchString}\n    ${mockStr}`);
  }
}

fs.writeFileSync(toolsPath, modifiedContent, 'utf8');
console.log('Successfully injected mock scenarios into tools.js');
