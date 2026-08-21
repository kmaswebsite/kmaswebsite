export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "hr-trends-shaping-the-next-decade",
    title: "5 HR Trends Shaping the Next Decade of Work",
    excerpt:
      "From skills-based hiring to AI-assisted people analytics, here's what forward-looking HR teams are prioritizing now.",
    category: "HR Trends",
    author: "Alina Ferreira",
    date: "2026-05-14",
    content: [
      "Skills-based hiring is quietly replacing degree requirements across mid-market and enterprise organizations alike. The shift isn't ideological — it's practical, driven by talent shortages in roles where traditional credentials don't predict performance.",
      "People analytics has moved from vanity dashboards to decision infrastructure. Leading HR teams now treat attrition risk scoring and span-of-control analysis the same way finance treats forecasting: as a standing input to planning, not a quarterly report.",
      "Finally, the line between L&D and performance management is blurring. Organizations that used to run these as separate systems are merging them into a single continuous-development loop, and early movers are seeing measurably higher engagement scores as a result.",
    ],
  },
  {
    slug: "building-leadership-benches-that-last",
    title: "Building Leadership Benches That Actually Last",
    excerpt:
      "Succession planning fails when it's a spreadsheet exercise. Here's how to make it a living, breathing program.",
    category: "Leadership",
    author: "Marcus Chen",
    date: "2026-04-22",
    content: [
      "Most succession plans die the moment the annual talent review ends. The document gets filed, the named successors get no development plan, and eighteen months later the same critical roles are still single points of failure.",
      "A succession program that lasts treats readiness as an active, tracked variable — not a one-time label. That means development plans tied to specific gaps, coaching relationships that persist between review cycles, and governance that revisits the bench quarterly, not annually.",
      "The organizations getting this right also decouple succession from politics by anchoring readiness assessments in structured competency evidence rather than manager preference alone.",
    ],
  },
  {
    slug: "designing-learning-paths-people-finish",
    title: "Designing Learning Paths People Actually Finish",
    excerpt:
      "Completion rates are the silent metric killing corporate training ROI. Three structural fixes that move the needle.",
    category: "Learning",
    author: "Priya Nathan",
    date: "2026-03-30",
    content: [
      "Low completion rates rarely come down to content quality — they come down to structure. Long, undifferentiated course lists overwhelm learners before they start.",
      "The first fix is sequencing: breaking learning paths into short, clearly-scoped modules with visible progress markers. The second is relevance — tying each module explicitly to a task the learner does that week, not an abstract competency.",
      "The third, and most overlooked, is manager involvement. Completion rates roughly double when a learner's direct manager is looped into the path as a light-touch checkpoint, rather than leaving learning entirely self-directed.",
    ],
  },
  {
    slug: "career-pathing-as-a-retention-lever",
    title: "Career Pathing as Your Most Underused Retention Lever",
    excerpt:
      "Employees don't leave companies, they leave stalled growth. Here's how to make internal mobility visible.",
    category: "Employee Development",
    author: "Sarah Whitfield",
    date: "2026-03-05",
    content: [
      "Exit interview data consistently shows the same pattern: employees don't leave because of pay, they leave because they can't see what's next. Career pathing frameworks fix this by making growth visible instead of implicit.",
      "The most effective frameworks map lateral and vertical moves, not just promotions, giving employees multiple credible paths rather than one narrow ladder.",
      "Pairing the framework with an internal job board and manager training on cross-team referrals turns career pathing from a document into an actual mobility engine.",
    ],
  },
  {
    slug: "digital-hr-without-the-disruption",
    title: "Digital HR Transformation Without the Disruption",
    excerpt:
      "A phased approach to HRIS modernization that keeps operations running while you upgrade the system underneath.",
    category: "Digital HR",
    author: "David Okafor",
    date: "2026-02-18",
    content: [
      "HRIS migrations fail more often from change management gaps than technical ones. Employees and managers who've built workarounds around a legacy system resist a new one, regardless of how much better it is.",
      "A phased rollout — starting with lower-stakes modules like time-off requests before touching payroll or performance data — builds trust incrementally and surfaces integration issues before they're catastrophic.",
      "Parallel-running the old and new systems for one full cycle, though costly, consistently prevents the data-integrity fire drills that derail digital HR projects in their first quarter.",
    ],
  },
  {
    slug: "ai-in-hr-practical-starting-points",
    title: "AI in HR: Practical Starting Points, Not Hype",
    excerpt:
      "Skip the moonshot pilots. These three AI use cases in HR operations deliver value within a single quarter.",
    category: "AI in HR",
    author: "Marcus Chen",
    date: "2026-01-27",
    content: [
      "The AI use cases delivering real value in HR right now aren't flashy — they're operational. Resume screening assistance, policy-question chatbots, and meeting-note-to-action-item summarization are all shipping measurable time savings today.",
      "The pattern across successful pilots is narrow scope: a single well-defined task with a human reviewer in the loop, not an attempt to automate an entire process end-to-end.",
      "Organizations that start narrow build the internal trust and governance muscle needed to expand AI use responsibly into higher-stakes areas like promotion recommendations later.",
    ],
  },
];
