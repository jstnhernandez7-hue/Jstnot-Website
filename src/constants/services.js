import { Video, BarChart2, Megaphone, Users } from 'lucide-react'

export const services = [
  {
    id: 'content-creation',
    number: '01',
    icon: Video,
    title: 'Content Creation',
    description:
      'Short-form video, reels, and TikToks engineered to stop the scroll. We handle scripting, filming direction, editing, and posting — ready for Instagram, TikTok, and YouTube Shorts.',
    tags: ['Short-Form Video', 'Reels', 'TikTok', 'YouTube Shorts'],
  },
  {
    id: 'social-media',
    number: '02',
    icon: Users,
    title: 'Social Media Management',
    description:
      'Full-service account management across all platforms. We build your audience, maintain your brand voice, and turn followers into showroom floor traffic.',
    tags: ['Instagram', 'TikTok', 'Facebook', 'YouTube'],
  },
  {
    id: 'paid-ads',
    number: '03',
    icon: Megaphone,
    title: 'Paid Ads Creative',
    description:
      'High-converting ad creative built specifically for automotive. From video hooks to static creatives — we produce assets that lower your CPL and fill your pipeline.',
    tags: ['Meta Ads', 'TikTok Ads', 'Google Display', 'YouTube Pre-Roll'],
  },
  {
    id: 'lead-gen',
    number: '04',
    icon: BarChart2,
    title: 'Lead Generation Systems',
    description:
      'End-to-end systems that capture, qualify, and nurture leads from social. We connect content strategy to CRM pipelines so every view has a path to conversion.',
    tags: ['Lead Funnels', 'CRM Integration', 'Follow-Up Sequences', 'Analytics'],
  },
]
