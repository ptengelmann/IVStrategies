import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface BriefingData {
  contactName: string;
  companyName: string;
  email: string;
  phone: string;
  projectType: string;
  numberOfWebsites: string;
  hasExistingWebsite: string;
  existingWebsiteUrl: string;
  primaryGoal: string;
  secondaryGoals: string[];
  targetAudience: string;
  uniqueSellingPoints: string;
  designStyle: string;
  colorPreferences: string;
  competitorWebsites: string;
  brandAssets: string;
  requiredFeatures: string[];
  otherFeatures: string;
  integrations: string;
  contentReady: string;
  contentHelp: string[];
  numberOfPages: string;
  timeline: string;
  budget: string;
  additionalInfo: string;
}

const projectTypeLabels: Record<string, string> = {
  'new-website': 'Brand New Website',
  'redesign': 'Website Redesign',
  'revamp': 'Refresh / Revamp',
  'ecommerce': 'E-commerce Store',
};

const primaryGoalLabels: Record<string, string> = {
  'generate-leads': 'Generate leads / enquiries',
  'sell-products': 'Sell products online',
  'brand-awareness': 'Build brand awareness',
  'provide-information': 'Provide information / resources',
  'booking-appointments': 'Enable bookings / appointments',
  'portfolio': 'Showcase portfolio / work',
  'other': 'Other',
};

const designStyleLabels: Record<string, string> = {
  'minimal': 'Minimal & Clean',
  'modern': 'Modern & Bold',
  'corporate': 'Corporate & Professional',
  'creative': 'Creative & Artistic',
  'luxury': 'Luxury & Elegant',
  'playful': 'Playful & Fun',
};

const brandAssetsLabels: Record<string, string> = {
  'full-brand': 'Full brand guidelines, logo, colours, fonts',
  'logo-only': 'Just a logo',
  'need-branding': 'Needs branding as well',
  'refresh-needed': 'Existing brand needs refreshing',
};

const timelineLabels: Record<string, string> = {
  'asap': 'ASAP',
  '1-month': 'Within 1 month',
  '2-3-months': '2-3 months',
  '3-6-months': '3-6 months',
  'flexible': 'Flexible / No rush',
  'specific-date': 'Specific date',
};

const budgetLabels: Record<string, string> = {
  'under-2k': 'Under £2,000',
  '2k-5k': '£2,000 - £5,000',
  '5k-10k': '£5,000 - £10,000',
  '10k-20k': '£10,000 - £20,000',
  '20k+': '£20,000+',
  'not-sure': 'Not sure / Flexible',
};

const contentReadyLabels: Record<string, string> = {
  'ready': 'Yes, all ready',
  'partial': 'Partially ready',
  'need-help': 'Needs help',
};

function formatEmailHtml(data: BriefingData): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 700px; margin: 0 auto; }
    .header { background: linear-gradient(135deg, #ff2d9b, #f59e0b); padding: 30px; text-align: center; }
    .header h1 { color: white; margin: 0; font-size: 24px; }
    .section { padding: 20px; border-bottom: 1px solid #eee; }
    .section h2 { color: #ff2d9b; font-size: 18px; margin-bottom: 15px; border-bottom: 2px solid #f59e0b; padding-bottom: 5px; }
    .field { margin-bottom: 12px; }
    .label { font-weight: bold; color: #555; }
    .value { color: #333; }
    .tag { display: inline-block; background: #f59e0b20; color: #b45309; padding: 4px 10px; border-radius: 4px; margin: 2px; font-size: 13px; }
    .footer { background: #1a1a1a; color: #888; padding: 20px; text-align: center; font-size: 12px; }
    .highlight { background: #ff2d9b10; border-left: 4px solid #ff2d9b; padding: 15px; margin: 10px 0; }
  </style>
</head>
<body>
  <div class="header">
    <h1>New Website Briefing Received</h1>
  </div>

  <div class="section">
    <h2>Contact Information</h2>
    <div class="field"><span class="label">Name:</span> <span class="value">${data.contactName}</span></div>
    <div class="field"><span class="label">Company:</span> <span class="value">${data.companyName}</span></div>
    <div class="field"><span class="label">Email:</span> <span class="value"><a href="mailto:${data.email}">${data.email}</a></span></div>
    <div class="field"><span class="label">Phone:</span> <span class="value">${data.phone || 'Not provided'}</span></div>
  </div>

  <div class="section">
    <h2>Project Type</h2>
    <div class="field"><span class="label">Type:</span> <span class="value">${projectTypeLabels[data.projectType] || data.projectType}</span></div>
    <div class="field"><span class="label">Number of Websites:</span> <span class="value" style="font-weight: bold; color: #ff2d9b;">${data.numberOfWebsites || '1'}</span></div>
    <div class="field"><span class="label">Has Existing Website:</span> <span class="value">${data.hasExistingWebsite === 'yes' ? 'Yes' : 'No'}</span></div>
    ${data.existingWebsiteUrl ? `<div class="field"><span class="label">Current URL(s):</span><br><span class="value" style="white-space: pre-line;">${data.existingWebsiteUrl}</span></div>` : ''}
  </div>

  <div class="section">
    <h2>Goals & Objectives</h2>
    <div class="field"><span class="label">Primary Goal:</span> <span class="value">${primaryGoalLabels[data.primaryGoal] || data.primaryGoal}</span></div>
    ${data.secondaryGoals.length > 0 ? `
    <div class="field">
      <span class="label">Secondary Goals:</span><br>
      ${data.secondaryGoals.map(g => `<span class="tag">${g}</span>`).join(' ')}
    </div>` : ''}
    <div class="highlight">
      <div class="field"><span class="label">Target Audience:</span><br><span class="value">${data.targetAudience || 'Not provided'}</span></div>
    </div>
    ${data.uniqueSellingPoints ? `<div class="field"><span class="label">USPs:</span><br><span class="value">${data.uniqueSellingPoints}</span></div>` : ''}
  </div>

  <div class="section">
    <h2>Design Preferences</h2>
    <div class="field"><span class="label">Style:</span> <span class="value">${designStyleLabels[data.designStyle] || data.designStyle}</span></div>
    ${data.colorPreferences ? `<div class="field"><span class="label">Colour Preferences:</span> <span class="value">${data.colorPreferences}</span></div>` : ''}
    ${data.competitorWebsites ? `<div class="field"><span class="label">Inspiration Websites:</span><br><span class="value">${data.competitorWebsites}</span></div>` : ''}
    <div class="field"><span class="label">Brand Assets:</span> <span class="value">${brandAssetsLabels[data.brandAssets] || data.brandAssets || 'Not specified'}</span></div>
  </div>

  <div class="section">
    <h2>Functionality & Content</h2>
    ${data.requiredFeatures.length > 0 ? `
    <div class="field">
      <span class="label">Required Features:</span><br>
      ${data.requiredFeatures.map(f => `<span class="tag">${f}</span>`).join(' ')}
    </div>` : ''}
    ${data.otherFeatures ? `<div class="field"><span class="label">Other Features:</span><br><span class="value">${data.otherFeatures}</span></div>` : ''}
    <div class="field"><span class="label">Content Status:</span> <span class="value">${contentReadyLabels[data.contentReady] || data.contentReady}</span></div>
    ${data.contentHelp.length > 0 ? `
    <div class="field">
      <span class="label">Content Help Needed:</span><br>
      ${data.contentHelp.map(h => `<span class="tag">${h}</span>`).join(' ')}
    </div>` : ''}
    <div class="field"><span class="label">Estimated Pages:</span> <span class="value">${data.numberOfPages || 'Not specified'}</span></div>
  </div>

  <div class="section">
    <h2>Timeline & Budget</h2>
    <div class="highlight">
      <div class="field"><span class="label">Timeline:</span> <span class="value" style="font-size: 16px; font-weight: bold;">${timelineLabels[data.timeline] || data.timeline}</span></div>
      <div class="field"><span class="label">Budget:</span> <span class="value" style="font-size: 16px; font-weight: bold;">${budgetLabels[data.budget] || data.budget}</span></div>
    </div>
  </div>

  ${data.additionalInfo ? `
  <div class="section">
    <h2>Additional Information</h2>
    <div class="value">${data.additionalInfo}</div>
  </div>` : ''}

  <div class="footer">
    <p>This briefing was submitted via the IV Strategies website.</p>
    <p>Submitted on: ${new Date().toLocaleString('en-GB', { dateStyle: 'full', timeStyle: 'short' })}</p>
  </div>
</body>
</html>
  `;
}

export async function POST(request: NextRequest) {
  try {
    const data: BriefingData = await request.json();

    // Validate required fields
    if (!data.contactName || !data.email || !data.companyName) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email using Resend
    await resend.emails.send({
      from: 'IV Strategies <onboarding@resend.dev>', // Change to your domain once verified
      to: 'pedro@iv-creative.co.uk',
      replyTo: data.email,
      subject: `New Website Briefing: ${data.companyName} - ${projectTypeLabels[data.projectType] || data.projectType}`,
      html: formatEmailHtml(data),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Briefing submission error:', error);
    return NextResponse.json(
      { error: 'Failed to submit briefing' },
      { status: 500 }
    );
  }
}
