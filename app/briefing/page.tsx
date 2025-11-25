'use client';

import { useState } from 'react';
import { Card } from '@/components/Card';
import { Header } from '@/components/Header';
import {
  ClipboardListIcon,
  SendIcon,
  CheckCircleIcon,
  GlobeIcon,
  SparklesIcon,
} from '@/components/icons';

interface FormData {
  // Contact Information
  contactName: string;
  companyName: string;
  email: string;
  phone: string;

  // Project Type
  projectType: string;
  numberOfWebsites: string;
  hasExistingWebsite: string;
  existingWebsiteUrl: string;

  // Goals & Objectives
  primaryGoal: string;
  secondaryGoals: string[];
  targetAudience: string;
  uniqueSellingPoints: string;

  // Design Preferences
  designStyle: string;
  colorPreferences: string;
  competitorWebsites: string;
  brandAssets: string;

  // Functionality Requirements
  requiredFeatures: string[];
  otherFeatures: string;
  integrations: string;

  // Content
  contentReady: string;
  contentHelp: string[];
  numberOfPages: string;

  // Timeline & Budget
  timeline: string;
  budget: string;

  // Additional Information
  additionalInfo: string;
}

const initialFormData: FormData = {
  contactName: '',
  companyName: '',
  email: '',
  phone: '',
  projectType: '',
  numberOfWebsites: '1',
  hasExistingWebsite: '',
  existingWebsiteUrl: '',
  primaryGoal: '',
  secondaryGoals: [],
  targetAudience: '',
  uniqueSellingPoints: '',
  designStyle: '',
  colorPreferences: '',
  competitorWebsites: '',
  brandAssets: '',
  requiredFeatures: [],
  otherFeatures: '',
  integrations: '',
  contentReady: '',
  contentHelp: [],
  numberOfPages: '',
  timeline: '',
  budget: '',
  additionalInfo: '',
};

export default function BriefingPage() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const totalSteps = 6;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (name: keyof FormData, value: string) => {
    setFormData((prev) => {
      const currentValues = prev[name] as string[];
      if (currentValues.includes(value)) {
        return { ...prev, [name]: currentValues.filter((v) => v !== value) };
      } else {
        return { ...prev, [name]: [...currentValues, value] };
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/briefing', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit briefing');
      }

      setIsSubmitted(true);
    } catch (err) {
      setError('There was an error submitting your briefing. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#0f0f0f]">
        <div className="max-w-3xl mx-auto px-5 py-5">
          <Header
            title="Website Briefing"
            tag="IV Strategies"
            logoPath="/assets/ivlogo.png"
          />

          <div className="mt-16 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#2dffb5]/20 mb-6">
              <CheckCircleIcon size={40} className="text-[#2dffb5]" />
            </div>
            <h1 className="text-4xl font-bold mb-4 text-white">Thank You!</h1>
            <p className="text-[#8a8a8a] text-lg mb-8 max-w-md mx-auto">
              Your briefing has been submitted successfully. We&apos;ll review your requirements and get back to you within 24-48 hours.
            </p>
            <Card className="inline-block">
              <p className="text-sm text-[#8a8a8a]">
                Questions? Email us at{' '}
                <a href="mailto:pedro@iv-creative.co.uk" className="text-[#ff2d9b] hover:underline">
                  pedro@iv-creative.co.uk
                </a>
              </p>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f0f0f]">
      <div className="max-w-3xl mx-auto px-5 py-5">
        <Header
          title="Website Briefing"
          tag="IV Strategies"
          logoPath="/assets/ivlogo.png"
        />

        {/* Hero Section */}
        <div className="mt-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-[#ff2d9b]/20 rounded-lg">
              <ClipboardListIcon size={28} className="text-[#ff2d9b]" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Website Project Briefing
            </h1>
          </div>
          <p className="text-[#8a8a8a] text-base leading-relaxed">
            Help us understand your vision. Complete this briefing form and we&apos;ll create a tailored proposal for your website project.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-[#8a8a8a]">Step {currentStep} of {totalSteps}</span>
            <span className="text-sm text-[#ff2d9b]">{Math.round((currentStep / totalSteps) * 100)}% Complete</span>
          </div>
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#ff2d9b] to-[#ff2d9b] transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Step 1: Contact Information */}
          {currentStep === 1 && (
            <Card className="mb-6">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#ff2d9b] text-black font-bold text-sm">1</span>
                <h2 className="text-xl font-bold text-white">Contact Information</h2>
              </div>

              <div className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Your Name *</label>
                    <input
                      type="text"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-[#8a8a8a] focus:outline-none focus:border-[#ff2d9b] transition-colors"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Company Name *</label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-[#8a8a8a] focus:outline-none focus:border-[#ff2d9b] transition-colors"
                      placeholder="Acme Ltd"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-[#8a8a8a] focus:outline-none focus:border-[#ff2d9b] transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-[#8a8a8a] focus:outline-none focus:border-[#ff2d9b] transition-colors"
                      placeholder="+44 7123 456789"
                    />
                  </div>
                </div>
              </div>
            </Card>
          )}

          {/* Step 2: Project Type */}
          {currentStep === 2 && (
            <Card className="mb-6">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#ff2d9b] text-black font-bold text-sm">2</span>
                <h2 className="text-xl font-bold text-white">Project Type</h2>
              </div>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-white mb-3">What type of project is this? *</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      { value: 'new-website', label: 'Brand New Website', icon: <SparklesIcon size={20} /> },
                      { value: 'redesign', label: 'Website Redesign', icon: <GlobeIcon size={20} /> },
                      { value: 'revamp', label: 'Refresh / Revamp', icon: <GlobeIcon size={20} /> },
                      { value: 'ecommerce', label: 'E-commerce Store', icon: <GlobeIcon size={20} /> },
                    ].map((option) => (
                      <label
                        key={option.value}
                        className={`flex items-center gap-3 p-4 rounded-lg border cursor-pointer transition-all ${
                          formData.projectType === option.value
                            ? 'bg-[#ff2d9b]/20 border-[#ff2d9b]'
                            : 'bg-white/5 border-white/10 hover:border-white/20'
                        }`}
                      >
                        <input
                          type="radio"
                          name="projectType"
                          value={option.value}
                          checked={formData.projectType === option.value}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <span className={formData.projectType === option.value ? 'text-[#ff2d9b]' : 'text-[#8a8a8a]'}>
                          {option.icon}
                        </span>
                        <span className="text-white font-medium">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-3">Do you have an existing website? *</label>
                  <div className="flex gap-3">
                    {['Yes', 'No'].map((option) => (
                      <label
                        key={option}
                        className={`flex-1 text-center p-4 rounded-lg border cursor-pointer transition-all ${
                          formData.hasExistingWebsite === option.toLowerCase()
                            ? 'bg-[#ff2d9b]/20 border-[#ff2d9b]'
                            : 'bg-white/5 border-white/10 hover:border-white/20'
                        }`}
                      >
                        <input
                          type="radio"
                          name="hasExistingWebsite"
                          value={option.toLowerCase()}
                          checked={formData.hasExistingWebsite === option.toLowerCase()}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <span className="text-white font-medium">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-3">How many websites is this project for?</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {['1', '2', '3', '4+'].map((num) => (
                      <label
                        key={num}
                        className={`text-center p-4 rounded-lg border cursor-pointer transition-all ${
                          formData.numberOfWebsites === num
                            ? 'bg-[#ff2d9b]/20 border-[#ff2d9b]'
                            : 'bg-white/5 border-white/10 hover:border-white/20'
                        }`}
                      >
                        <input
                          type="radio"
                          name="numberOfWebsites"
                          value={num}
                          checked={formData.numberOfWebsites === num}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <span className="text-white font-medium">{num}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {formData.hasExistingWebsite === 'yes' && (
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Current Website URL(s)
                      <span className="text-[#8a8a8a] font-normal ml-2">- one per line if multiple</span>
                    </label>
                    <textarea
                      name="existingWebsiteUrl"
                      value={formData.existingWebsiteUrl}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-[#8a8a8a] focus:outline-none focus:border-[#ff2d9b] transition-colors resize-none"
                      placeholder="https://www.example1.com&#10;https://www.example2.com&#10;https://www.example3.com"
                    />
                  </div>
                )}
              </div>
            </Card>
          )}

          {/* Step 3: Goals & Objectives */}
          {currentStep === 3 && (
            <Card className="mb-6">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#ff2d9b] text-black font-bold text-sm">3</span>
                <h2 className="text-xl font-bold text-white">Goals & Objectives</h2>
              </div>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-white mb-3">What is the primary goal of your website? *</label>
                  <select
                    name="primaryGoal"
                    value={formData.primaryGoal}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#ff2d9b] transition-colors"
                  >
                    <option value="" className="bg-[#1a1a1a]">Select primary goal...</option>
                    <option value="generate-leads" className="bg-[#1a1a1a]">Generate leads / enquiries</option>
                    <option value="sell-products" className="bg-[#1a1a1a]">Sell products online</option>
                    <option value="brand-awareness" className="bg-[#1a1a1a]">Build brand awareness</option>
                    <option value="provide-information" className="bg-[#1a1a1a]">Provide information / resources</option>
                    <option value="booking-appointments" className="bg-[#1a1a1a]">Enable bookings / appointments</option>
                    <option value="portfolio" className="bg-[#1a1a1a]">Showcase portfolio / work</option>
                    <option value="other" className="bg-[#1a1a1a]">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-3">Secondary goals (select all that apply)</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {[
                      'Increase organic traffic (SEO)',
                      'Build email list',
                      'Improve user experience',
                      'Mobile-first experience',
                      'Integrate with CRM',
                      'Social media integration',
                      'Blog / Content marketing',
                      'Customer support / FAQ',
                    ].map((goal) => (
                      <label
                        key={goal}
                        className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                          formData.secondaryGoals.includes(goal)
                            ? 'bg-[#ff2d9b]/20 border-[#ff2d9b]'
                            : 'bg-white/5 border-white/10 hover:border-white/20'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.secondaryGoals.includes(goal)}
                          onChange={() => handleCheckboxChange('secondaryGoals', goal)}
                          className="sr-only"
                        />
                        <div className={`w-4 h-4 rounded border-2 flex items-center justify-center ${
                          formData.secondaryGoals.includes(goal)
                            ? 'bg-[#ff2d9b] border-[#ff2d9b]'
                            : 'border-white/30'
                        }`}>
                          {formData.secondaryGoals.includes(goal) && (
                            <svg className="w-3 h-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                        <span className="text-white text-sm">{goal}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">Who is your target audience? *</label>
                  <textarea
                    name="targetAudience"
                    value={formData.targetAudience}
                    onChange={handleInputChange}
                    required
                    rows={3}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-[#8a8a8a] focus:outline-none focus:border-[#ff2d9b] transition-colors resize-none"
                    placeholder="Describe your ideal customers - their age, location, interests, problems they're trying to solve..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">What makes your business unique?</label>
                  <textarea
                    name="uniqueSellingPoints"
                    value={formData.uniqueSellingPoints}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-[#8a8a8a] focus:outline-none focus:border-[#ff2d9b] transition-colors resize-none"
                    placeholder="What sets you apart from competitors? Key differentiators, awards, experience..."
                  />
                </div>
              </div>
            </Card>
          )}

          {/* Step 4: Design Preferences */}
          {currentStep === 4 && (
            <Card className="mb-6">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#ff2d9b] text-black font-bold text-sm">4</span>
                <h2 className="text-xl font-bold text-white">Design Preferences</h2>
              </div>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-white mb-3">What design style appeals to you? *</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      { value: 'minimal', label: 'Minimal & Clean' },
                      { value: 'modern', label: 'Modern & Bold' },
                      { value: 'corporate', label: 'Corporate & Professional' },
                      { value: 'creative', label: 'Creative & Artistic' },
                      { value: 'luxury', label: 'Luxury & Elegant' },
                      { value: 'playful', label: 'Playful & Fun' },
                    ].map((style) => (
                      <label
                        key={style.value}
                        className={`p-4 rounded-lg border cursor-pointer transition-all text-center ${
                          formData.designStyle === style.value
                            ? 'bg-[#ff2d9b]/20 border-[#ff2d9b]'
                            : 'bg-white/5 border-white/10 hover:border-white/20'
                        }`}
                      >
                        <input
                          type="radio"
                          name="designStyle"
                          value={style.value}
                          checked={formData.designStyle === style.value}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <span className="text-white font-medium">{style.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">Colour preferences</label>
                  <input
                    type="text"
                    name="colorPreferences"
                    value={formData.colorPreferences}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-[#8a8a8a] focus:outline-none focus:border-[#ff2d9b] transition-colors"
                    placeholder="e.g., Blues and whites, or match our existing branding"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">Websites you admire (competitors or inspiration)</label>
                  <textarea
                    name="competitorWebsites"
                    value={formData.competitorWebsites}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-[#8a8a8a] focus:outline-none focus:border-[#ff2d9b] transition-colors resize-none"
                    placeholder="List 2-3 websites you like and what you like about them..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-3">Do you have existing brand assets?</label>
                  <select
                    name="brandAssets"
                    value={formData.brandAssets}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#ff2d9b] transition-colors"
                  >
                    <option value="" className="bg-[#1a1a1a]">Select...</option>
                    <option value="full-brand" className="bg-[#1a1a1a]">Yes - full brand guidelines, logo, colours, fonts</option>
                    <option value="logo-only" className="bg-[#1a1a1a]">Just a logo</option>
                    <option value="need-branding" className="bg-[#1a1a1a]">No - I need branding as well</option>
                    <option value="refresh-needed" className="bg-[#1a1a1a]">Existing brand needs refreshing</option>
                  </select>
                </div>
              </div>
            </Card>
          )}

          {/* Step 5: Functionality & Content */}
          {currentStep === 5 && (
            <Card className="mb-6">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#ff2d9b] text-black font-bold text-sm">5</span>
                <h2 className="text-xl font-bold text-white">Functionality & Content</h2>
              </div>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-white mb-3">Required features (select all that apply)</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {[
                      'Contact form',
                      'Blog / News section',
                      'E-commerce / Shop',
                      'Booking system',
                      'User accounts / Login',
                      'Newsletter signup',
                      'Live chat',
                      'Video backgrounds',
                      'Animations / Interactions',
                      'Multi-language support',
                      'CMS (content management)',
                      'Analytics integration',
                    ].map((feature) => (
                      <label
                        key={feature}
                        className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                          formData.requiredFeatures.includes(feature)
                            ? 'bg-[#ff2d9b]/20 border-[#ff2d9b]'
                            : 'bg-white/5 border-white/10 hover:border-white/20'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.requiredFeatures.includes(feature)}
                          onChange={() => handleCheckboxChange('requiredFeatures', feature)}
                          className="sr-only"
                        />
                        <div className={`w-4 h-4 rounded border-2 flex items-center justify-center ${
                          formData.requiredFeatures.includes(feature)
                            ? 'bg-[#ff2d9b] border-[#ff2d9b]'
                            : 'border-white/30'
                        }`}>
                          {formData.requiredFeatures.includes(feature) && (
                            <svg className="w-3 h-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                        <span className="text-white text-sm">{feature}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">Other features or integrations needed?</label>
                  <textarea
                    name="otherFeatures"
                    value={formData.otherFeatures}
                    onChange={handleInputChange}
                    rows={2}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-[#8a8a8a] focus:outline-none focus:border-[#ff2d9b] transition-colors resize-none"
                    placeholder="e.g., Specific CRM integration, payment gateway, custom calculator..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-3">Is your content ready?</label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {[
                      { value: 'ready', label: 'Yes, all ready' },
                      { value: 'partial', label: 'Partially ready' },
                      { value: 'need-help', label: 'I need help' },
                    ].map((option) => (
                      <label
                        key={option.value}
                        className={`p-4 rounded-lg border cursor-pointer transition-all text-center ${
                          formData.contentReady === option.value
                            ? 'bg-[#ff2d9b]/20 border-[#ff2d9b]'
                            : 'bg-white/5 border-white/10 hover:border-white/20'
                        }`}
                      >
                        <input
                          type="radio"
                          name="contentReady"
                          value={option.value}
                          checked={formData.contentReady === option.value}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <span className="text-white font-medium">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {(formData.contentReady === 'partial' || formData.contentReady === 'need-help') && (
                  <div>
                    <label className="block text-sm font-medium text-white mb-3">What content help do you need?</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {[
                        'Copywriting',
                        'Photography',
                        'Video production',
                        'Illustrations / Graphics',
                      ].map((help) => (
                        <label
                          key={help}
                          className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                            formData.contentHelp.includes(help)
                              ? 'bg-[#ff2d9b]/20 border-[#ff2d9b]'
                              : 'bg-white/5 border-white/10 hover:border-white/20'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={formData.contentHelp.includes(help)}
                            onChange={() => handleCheckboxChange('contentHelp', help)}
                            className="sr-only"
                          />
                          <div className={`w-4 h-4 rounded border-2 flex items-center justify-center ${
                            formData.contentHelp.includes(help)
                              ? 'bg-[#ff2d9b] border-[#ff2d9b]'
                              : 'border-white/30'
                          }`}>
                            {formData.contentHelp.includes(help) && (
                              <svg className="w-3 h-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </div>
                          <span className="text-white text-sm">{help}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-white mb-2">Estimated number of pages</label>
                  <select
                    name="numberOfPages"
                    value={formData.numberOfPages}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#ff2d9b] transition-colors"
                  >
                    <option value="" className="bg-[#1a1a1a]">Select...</option>
                    <option value="1-5" className="bg-[#1a1a1a]">1-5 pages (simple site)</option>
                    <option value="6-10" className="bg-[#1a1a1a]">6-10 pages</option>
                    <option value="11-20" className="bg-[#1a1a1a]">11-20 pages</option>
                    <option value="20+" className="bg-[#1a1a1a]">20+ pages</option>
                    <option value="not-sure" className="bg-[#1a1a1a]">Not sure yet</option>
                  </select>
                </div>
              </div>
            </Card>
          )}

          {/* Step 6: Timeline & Budget */}
          {currentStep === 6 && (
            <Card className="mb-6">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#ff2d9b] text-black font-bold text-sm">6</span>
                <h2 className="text-xl font-bold text-white">Timeline & Budget</h2>
              </div>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-white mb-3">When do you need the website live? *</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      { value: 'asap', label: 'ASAP' },
                      { value: '1-month', label: 'Within 1 month' },
                      { value: '2-3-months', label: '2-3 months' },
                      { value: '3-6-months', label: '3-6 months' },
                      { value: 'flexible', label: 'Flexible / No rush' },
                      { value: 'specific-date', label: 'Specific date' },
                    ].map((option) => (
                      <label
                        key={option.value}
                        className={`p-4 rounded-lg border cursor-pointer transition-all text-center ${
                          formData.timeline === option.value
                            ? 'bg-[#ff2d9b]/20 border-[#ff2d9b]'
                            : 'bg-white/5 border-white/10 hover:border-white/20'
                        }`}
                      >
                        <input
                          type="radio"
                          name="timeline"
                          value={option.value}
                          checked={formData.timeline === option.value}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <span className="text-white font-medium">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-3">What is your budget range? *</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      { value: 'under-2k', label: 'Under £2,000' },
                      { value: '2k-5k', label: '£2,000 - £5,000' },
                      { value: '5k-10k', label: '£5,000 - £10,000' },
                      { value: '10k-20k', label: '£10,000 - £20,000' },
                      { value: '20k+', label: '£20,000+' },
                      { value: 'not-sure', label: 'Not sure / Flexible' },
                    ].map((option) => (
                      <label
                        key={option.value}
                        className={`p-4 rounded-lg border cursor-pointer transition-all text-center ${
                          formData.budget === option.value
                            ? 'bg-[#ff2d9b]/20 border-[#ff2d9b]'
                            : 'bg-white/5 border-white/10 hover:border-white/20'
                        }`}
                      >
                        <input
                          type="radio"
                          name="budget"
                          value={option.value}
                          checked={formData.budget === option.value}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <span className="text-white font-medium">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">Anything else we should know?</label>
                  <textarea
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-[#8a8a8a] focus:outline-none focus:border-[#ff2d9b] transition-colors resize-none"
                    placeholder="Any other details, concerns, or requirements you'd like to share..."
                  />
                </div>
              </div>
            </Card>
          )}

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
              {error}
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                currentStep === 1
                  ? 'opacity-0 pointer-events-none'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              ← Previous
            </button>

            {currentStep < totalSteps ? (
              <button
                type="button"
                onClick={nextStep}
                className="px-6 py-3 bg-[#ff2d9b] text-black font-semibold rounded-lg hover:bg-[#ff2d9b]/90 transition-all"
              >
                Next Step →
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#ff2d9b] to-[#ff2d9b] text-white font-semibold rounded-lg hover:opacity-90 transition-all disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <SendIcon size={20} />
                    Submit Briefing
                  </>
                )}
              </button>
            )}
          </div>
        </form>

        <div className="text-center mt-10 text-[#8a8a8a] text-xs">
          Website Briefing | IV Strategies | 2025
        </div>
      </div>
    </div>
  );
}
