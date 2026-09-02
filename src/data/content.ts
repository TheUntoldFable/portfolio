export type ExperienceItem = {
  employer: string;
  name: string;
  type: string;
  copy: string;
  demoAvailable?: boolean;
};

/** Employer sub-heading shown above the first item of each group. */
export const employerMeta: Record<string, string> = {
  'Pytek · Sofia': 'Web & Mobile Developer · Jul 2020 — Feb 2022',
  'Looming Tech': 'Senior Software Engineer · Feb 2022 — Present',
  'Own products': 'Independent products',
};

export const experience: ExperienceItem[] = [
  {
    employer: 'Pytek · Sofia',
    name: 'Cardbox · Annum Planner · Untold Fable · Moto Phoe',
    type: 'Web & Mobile Developer · Jul 2020 — Feb 2022',
    copy: 'Worked across four products — Cardbox, Annum Planner, Untold Fable, and Moto Phoe — building experience across web and mobile product development before joining Looming Tech.',
  },
  {
    employer: 'Looming Tech',
    name: 'Afya',
    type: 'Full-stack engineer · 2022 — 2024',
    copy: 'My first engagement after joining Looming Tech, embedded for two years with Hintsa Performance. I built real-time in-app chat between coaches and clients, animated data-visualisation charts, an in-app video player, REST endpoints in Express, and CMS content-management surfaces.',
  },
  {
    employer: 'Looming Tech',
    name: 'Ampeco · Adhoc Payment Portal',
    type: 'Full-stack engineer',
    copy: 'Redesigned the portal frontend and built the backend behind it, carrying the payment journey end to end through Stripe and Worldline integrations.',
  },
  {
    employer: 'Looming Tech',
    name: 'E.ON Home',
    type: 'React Native engineer · client: E.ON Digital Technology GmbH',
    copy: 'Contributed to a major UI revamp of a smart-home app used by more than 100,000 people, spanning solar, EV charging and wallbox, energy analytics, and smart-home control.',
  },
  {
    employer: 'Looming Tech',
    name: 'Imray · Tides Planner',
    type: 'React Native lead',
    copy: 'Led the Xamarin to React Native replatform end to end and remained the primary client contact. I ported tidal-calculation algorithms into Expo Native Modules while preserving the precision of the original C# implementation.',
  },
  {
    employer: 'Looming Tech',
    name: 'ProfitTips: Football Advisor',
    type: 'Lead mobile engineer',
    copy: 'Raised the crash-free rate from 88.99% to 99.8% on a live product. Led the React Navigation v7 upgrade and worked across Firebase, Google Sign-In, RevenueCat subscriptions, and App Store and Play Store releases.',
  },
  {
    employer: 'Looming Tech',
    name: 'FGE NexantECA · Platform',
    type: 'Full-stack engineer',
    copy: 'Worked on a type-safe, tRPC-powered Next.js application integrated with Snowflake for large-scale data processing, including interactive data visualisation, responsive UI layouts, API layers, and ongoing client support.',
  },
  {
    employer: 'Looming Tech',
    name: 'Involve WEB',
    type: 'Senior frontend engineer · client: HedgehogLabs · 2026',
    copy: 'Delivered a three-month ground-up rebuild of a multi-tenant B2B platform as a parallel V2 alongside the legacy app. Owned the shared component library and multi-tenant theming layer, plus real-time chat and video with Pusher/Laravel Echo and Whereby, react-intl, and the Zodios + React Query data layer.',
  },
  {
    employer: 'Looming Tech',
    name: 'WUR Executive',
    type: 'Full-stack engineer · client: HedgehogLabs · 2026',
    copy: 'Worked on an AI-automated executive insights platform, leading the Next.js/Tailwind redesign and reworking the NestJS API. The stack included OpenAI, BullMQ/Redis background jobs, Prisma/PostgreSQL, Auth.js, next-intl, Recharts, and a Turborepo monorepo with Playwright and Stryker on CircleCI.',
  },
  {
    employer: 'Own products',
    name: 'Artel',
    type: 'Founder & sole engineer · 2026 — Present · pre-launch',
    copy: 'A two-sided Bulgarian marketplace connecting construction workers with contractors. Built independently across roughly 15,000 lines and 36 screens with React Native, Expo Router, Convex, server-side entitlement gates, Clerk phone/SMS OTP auth, OneSignal, PostHog, RevenueCat subscriptions, and 25 Vitest suites.',
    demoAvailable: true,
  },
  {
    employer: 'Own products',
    name: 'ChargeMe',
    type: 'Co-founder & frontend lead · 2024 — Present · live',
    copy: 'A mobile-first restaurant menu and ordering product: scan a table code, browse, order, pay by card, and follow live order status. Built with Next.js, Tailwind, Zustand, TanStack Query, STOMP/WebSockets, Stripe, geofenced ordering, and bilingual BG/EN support.',
  },
  {
    employer: 'Own products',
    name: 'Barbershop Premium',
    type: 'Designer & sole engineer · 2026 · live',
    copy: 'A booking site for a Sofia barbershop, designed and built solo. A requested hour is held for ten minutes by the Convex scheduler and offered to the shop phone over the Viber Bot API with approve and decline buttons; accepting keeps the hour and emails the customer a calendar invite through Resend, while a decline or silence returns it to the grid. Built with Next.js 16, React 19, Convex in the EU region, and 75 Vitest and convex-test suites.',
  },
];

/**
 * Specific technologies, each one evidenced by an engagement in `experience`.
 * Ordered frontend → mobile → data → backend → infrastructure → quality.
 */
export const toolkit = [
  'React',
  'Next.js',
  'TypeScript',
  'Tailwind CSS',
  'React Native',
  'Expo',
  'Reanimated',
  'TanStack Query',
  'Zustand',
  'Redux',
  'tRPC',
  'Convex',
  'Node.js',
  'NestJS',
  'Express',
  'PostgreSQL',
  'Prisma',
  'Redis / BullMQ',
  'Stripe',
  'Docker',
  'Firebase',
  'Playwright',
];

export const offTheClock = ['Travel', 'DJing', 'Architecture', 'Good coffee'];

export const contact = {
  email: 'tsvetomir.uzunoff@gmail.com',
  linkedin: 'https://www.linkedin.com/in/tuzunoff/',
  github: 'https://github.com/TheUntoldFable',
};
