export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  content: string[];
};

const AUTHOR = "KMAS Advisory Team";
const DATE = "2026-11-11";

export const blogPosts: BlogPost[] = [
  {
    slug: "hr-audit-the-third-eye",
    title: "Why Every Organisation Needs an HR ‘Third Eye’",
    excerpt:
      "Policies on paper are not the same as practices on the ground. An independent HR audit shows the difference.",
    category: "HR Audit",
    author: AUTHOR,
    date: DATE,
    content: [
      "Most organisations have HR policies. Far fewer know whether those policies are followed consistently across departments, shifts and locations. Over time, small deviations become habits — and habits can turn into compliance risks, employee grievances or disputes.",
      "An HR audit is a structured diagnostic study of people practices, records and statutory compliance. Done by an independent party, it acts as a ‘third eye’: it sees what busy internal teams may miss, without the bias of having designed the system themselves.",
      "At KMAS, an audit is often the first step before taking up an assignment. It tells us — and the management — where the real gaps are, so that effort goes where it matters most. After improvements are introduced, periodical audits check whether they are actually being implemented.",
      "The value of an audit lies in what happens next. Findings should be prioritised, owners assigned and timelines agreed. When this discipline is followed, organisations find they can enforce best practices with ease rather than through repeated firefighting.",
    ],
  },
  {
    slug: "developing-change-agents",
    title: "Turning Middle Managers into Change Agents",
    excerpt:
      "Initiatives announced at the top often fade in the middle. Equipping managers to lead change is what makes it last.",
    category: "Leadership",
    author: AUTHOR,
    date: DATE,
    content: [
      "Many organisational initiatives start with energy and end quietly. The reason is rarely the idea itself — it is that the people expected to carry it forward were never prepared to lead it.",
      "Middle and senior managers sit at the point where strategy meets execution. When they understand the purpose of a change, have the skills to communicate it and feel ownership for it, they become ‘Change Agents’ who carry their teams along.",
      "Building change agents takes more than a single workshop. KMAS combines training with mentoring and coaching, so that managers practise new ways of working on real initiatives and get support while they do it.",
      "Equally important is identifying and nurturing internal talent to carry the initiatives forward after the consultants step back. That is how change moves from a project to the way the organisation works.",
    ],
  },
  {
    slug: "making-long-term-settlements-work",
    title: "Making Long-Term Settlements Work for Both Sides",
    excerpt:
      "A good wage settlement is fair, affordable and sustainable — and it is built on preparation and trust.",
    category: "Industrial Relations",
    author: AUTHOR,
    date: DATE,
    content: [
      "Long-term settlements on wages, bonus, benefits and service conditions shape the relationship between management and employees for years. Handled well, they bring stability and industrial peace; handled poorly, they can leave lasting mistrust.",
      "Preparation is the foundation. The management needs a clear view of costs, business capacity and comparable practices before negotiations begin. Understanding the expectations of the employees and their representation body is just as important.",
      "Whether bipartite or tripartite, negotiations work best when both sides see the process as fair. Good relationship management and negotiation skills help keep the dialogue constructive, even when positions differ.",
      "Finally, the settlement has to be implemented faithfully. Clear communication of the agreed terms and consistent application on the ground are what turn a signed agreement into lasting industrial harmony.",
    ],
  },
  {
    slug: "compliance-as-a-growth-enabler",
    title: "Statutory Compliance: A Foundation for Growth",
    excerpt:
      "Compliance is often seen as paperwork. In reality, it protects the business and builds employee trust.",
    category: "Compliance",
    author: AUTHOR,
    date: DATE,
    content: [
      "For growing organisations, statutory compliance can feel like a burden that distracts from business. Yet gaps in compliance carry real costs — penalties, disputes and a loss of trust among employees.",
      "Becoming compliant starts with knowing where you stand. A structured review of registers, records, returns, wage practices and policies shows the gaps that need attention first.",
      "Staying compliant requires simple systems: clear responsibilities, a compliance calendar and periodical internal reviews. These turn compliance from a last-minute scramble into a routine.",
      "When employees see that their organisation follows the law fairly and consistently, it strengthens their confidence and commitment. Compliance, done right, is a foundation for sustainable growth.",
    ],
  },
  {
    slug: "culture-with-ethos",
    title: "Building a Culture with Ethos and Continuous Learning",
    excerpt:
      "Culture is not a poster on the wall — it is what employees experience every day, from the leadership to the last level.",
    category: "Culture",
    author: AUTHOR,
    date: DATE,
    content: [
      "Every organisation has a culture, whether it is designed or not. Building a culture with ethos begins with vision and mission statements that the leadership truly believes in.",
      "Those statements must then be cascaded to the last level employee through engagement initiatives. Employee surveys help elicit the greatness and the challenges people perceive, giving leaders an honest picture to act on.",
      "Recognising the fast trackers and change agents sends a clear signal about what the organisation values. Just as important is bridging the gap for those who struggle, so that no one is left behind.",
      "Transparent learning and performance evaluation using objective tools builds trust. Over time, these practices bring about pride in working for the growth of the organisation — and a feeling of being good to be part of it.",
    ],
  },
  {
    slug: "making-young-minds-future-ready",
    title: "Making Young Minds Future-Ready",
    excerpt:
      "The gap between campus and workplace can be bridged early — with the right guidance from industry.",
    category: "Future-Ready",
    author: AUTHOR,
    date: DATE,
    content: [
      "Students today have more information than ever, yet many still find the transition from campus to the workplace difficult. Skills such as communication, teamwork, discipline and a positive attitude often matter as much as academic knowledge.",
      "As an obligation to the next generation, KMAS reaches out to young minds in schools and colleges through customised intervention programs designed to make them future-ready.",
      "These programs draw on decades of industry experience to give students a realistic picture of what organisations expect — and practical ways to prepare for it, from goal setting to interview readiness.",
      "When institutions and industry work together in this way, students step into their careers with greater confidence, and organisations gain young employees who are ready to contribute.",
    ],
  },
];
