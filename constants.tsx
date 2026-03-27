import { Project } from './types';

// Hand-drawn icon SVGs
const SURVEY_ICON = `<svg viewBox="0 0 100 100" class="w-20 h-20"><path d="M25,20 Q28,15 35,18 L75,18 Q82,20 80,28 L78,75 Q75,82 68,80 L28,78 Q20,75 22,68 Z" fill="white" stroke="#111827" stroke-width="2.5" /><path d="M35,35 L65,35 M35,50 L65,50 M35,65 L50,65" stroke="#111827" stroke-width="2.5" stroke-linecap="round" opacity="0.4" /><circle cx="70" cy="65" r="8" fill="#3B82F6" opacity="0.9" /><path d="M66,65 L69,68 L74,62" stroke="white" stroke-width="2" fill="none" /></svg>`;
const MODERATED_ICON = `<svg viewBox="0 0 100 100" class="w-20 h-20"><path d="M20,25 Q22,20 30,22 L70,22 Q78,20 80,28 L80,65 Q78,72 70,70 L30,70 Q22,72 20,65 Z" fill="white" stroke="#111827" stroke-width="2.5" /><circle cx="50" cy="42" r="10" fill="#3B82F6" opacity="0.8" /><path d="M40,60 Q50,55 60,60" stroke="#111827" stroke-width="2.5" stroke-linecap="round" /><path d="M65,45 L85,65" stroke="#3B82F6" stroke-width="3" stroke-linecap="round" /><circle cx="65" cy="45" r="12" fill="none" stroke="#3B82F6" stroke-width="2" /></svg>`;
const COMPARATIVE_ICON = `<svg viewBox="0 0 100 100" class="w-20 h-20"><path d="M15,30 Q18,25 25,28 L45,28 Q52,25 50,35 L50,70 Q52,78 45,75 L25,75 Q18,78 15,70 Z" fill="white" stroke="#111827" stroke-width="2.5" /><path d="M55,30 Q58,25 65,28 L85,28 Q92,25 90,35 L90,70 Q92,78 85,75 L65,75 Q58,78 55,70 Z" fill="#3B82F6" stroke="#111827" stroke-width="2.5" opacity="0.9" /><path d="M40,50 L60,50 M50,40 L50,60" stroke="#111827" stroke-width="2.5" stroke-linecap="round" opacity="0.5" /></svg>`;
const SUS_ICON = `<svg viewBox="0 0 100 100" class="w-20 h-20"><path d="M20,80 L80,80" stroke="#111827" stroke-width="2.5" stroke-linecap="round" /><path d="M30,80 L30,60 Q32,58 35,60 L35,80" fill="white" stroke="#111827" stroke-width="2" /><path d="M50,80 L50,40 Q52,38 55,40 L55,80" fill="#3B82F6" stroke="#111827" stroke-width="2" /><path d="M70,80 L70,25 Q72,23 75,25 L75,80" fill="white" stroke="#111827" stroke-width="2" /><path d="M20,30 Q50,15 80,35" stroke="#3B82F6" stroke-width="2" stroke-dasharray="4,4" opacity="0.6" /></svg>`;

export const PROJECTS: Project[] = [
  {
    id: 'enterprise-clm-dashboard',
    title: 'Accelerating GA Launch: A 4-Week Strategic UX Research for CLM Dashboard',
    organization: 'Whatfix',
    industryTags: ['B2B', 'SaaS', 'Digital Adoption Platform'],
    product: 'Content Lifecycle Management (CLM) Dashboard',
    tagline: 'Identified critical research gaps; pivoted to a hybrid methodology that drove adoption from 8 to 700 active clients.',
    role: 'UX Research Lead (Project)\n(Scope: Research strategy, execution, synthesis, and recommendations)',
    duration: '4 weeks',
    team: 'Product Manager, UX Designer, UX Research Director, Product VP, Design VP',
    stakeholders: [
      { name: 'Product Manager', role: 'Product Partner' },
      { name: 'UX Designer', role: 'Design Partner' },
      { name: 'UX Research Director', role: 'Manager' },
      { name: 'Product VP', role: 'Decision Maker' },
      { name: 'Design VP', role: 'Decision Maker' }
    ],
    tools: ['Mural', 'Condens', 'Userinterviews', 'Zoom'],
    methods: [
      'Surveys (User Assessment and recruitment fit)',
      'Moderated Usability & Conceptual Testing',
      'Comparative UX Evaluation',
      'System Usability Scale (SUS)',
      'Net Promoter Score (NPS)'
    ],
    overview: 'The CLM dashboard was introduced as a beta feature; however, user adoption remained low, with only a small number of users engaging with it.',
    problem: 'To ensure a successful GA launch, the team needed to identify key issues preventing adoption and find improvements to mental model alignment.',
    problemBackground: 'The CLM dashboard was introduced as a beta feature; however, user adoption remained low, with only a small number of users engaging with it.',
    problemBullets: [
      {
        h1: 'Project Need',
        h2: 'Why was this Research Project needed?',
        text: 'The Content dashboard (abbreviated as CLM) was initially introduced as a beta feature for the clients; however, <span class="font-bold text-gray-900">user adoption remained low</span>, with only a small number of users engaging with it. The Product Manager responsible for this had an OKR to meet; i.e. to <span class="font-bold text-gray-900">release it as a Generally Available (GA) product for all the clients within the next quarter.</span>'
      },
      {
        h1: 'Project Goal',
        h2: 'What was the key requirement?',
        text: 'To ensure a successful GA launch, the Product Manager sought support from the Whatfix UX Research to <span class="highlight-blue font-bold text-gray-900">identify and recommend the key issues and the improvements needed before the GA release.</span>'
      }
    ],
    purposeOfTool: [
      {
        label: 'Content Dashboard (CLM)',
        desc: 'The CLM dashboard is a central screen that gives content creators an overview of all guides and help content that they and their team have created, showing what exists, what needs improvement, and other parameters to manage it for their end users'
      },
      {
        label: 'The Whatfix Platform',
        desc: 'Whatfix is a Digital Adoption Platform that helps end-users learn and use software through step-by-step, in-app guidance. This in-app content and guidance is created and managed by Content Creators, a key user group in this industry; who design walkthroughs, tooltips, and contextual help in general to support users directly inside the application, without the need for external training or documentation.'
      }
    ],
    approachGoalStatement: 'To improve the CLM dashboard with respect to <span class="highlight-blue">users’ mental models</span> and the <span class="highlight-blue">usability gaps</span>.',
    approachGoalImageUrl: 'assets/CLM_Research Goal.png',
    approachGoalPoints: [
      {
        title: 'Initial Assessment',
        text: 'First assessed and studied the existing CLM dashboard and reviewed whether any prior research had informed its design.',
        subText: 'Purpose: To understand if there were earlier discovery or conceptual studies that could be reused to identify gaps, avoid duplication, and speed up the research process.'
      },
      {
        title: 'Identifying Research Gap & Method',
        text: 'Through stakeholder discussions, I found that no prior qualitative or conceptual research had been conducted for this product. Given the low adoption during the beta phase, this indicated a risk that the <span class="font-bold text-gray-900">product might not align well with <span class="highlight-pink">users’ mental models and required a concept testing.</span></span>'
      },
      {
        title: 'Strategic Scoping of Research',
        text: 'The product manager needed a clear, actionable list of all sort of improvements before the GA release. So there was <span class="font-bold text-gray-900">limited time for me to run a separate usability study as well (to find usability gaps)</span>. Hence, I intentionally <span class="font-bold text-gray-900"><span class="highlight-blue">combined conceptual testing and usability testing into a single study.</span></span>',
        subText: 'This allowed me to uncover both high-level conceptual gaps and interaction-level usability issues within a one-month research window, while still providing meaningful insights to improve GA readiness.',
      },
      {
        title: 'Identifying & Recruiting Participants',
        visualPlaceholder: 'Recruitment Visual',
        text: `
          <div class="space-y-6 text-lg">
            <div class="flex flex-col w-full mb-8 relative items-center justify-center">
              <p class="text-lg text-gray-600 font-light leading-relaxed mb-8">
                Following image shows the participant criteria that was found appropriate for this study:
              </p>
              <div class="w-full md:w-[75%] bg-[#FFFFFF] border border-gray-100 rounded-[2rem] shadow-xl shadow-gray-50/50 p-4 md:p-6 flex justify-center items-center">
                <img src="assets/CLM_Persona.png" alt="Participant criteria" class="w-full max-w-xl h-auto object-contain object-center cursor-zoom-in clickable-img" />
              </div>
            </div>
            <div class="quote-box !mt-8 !mb-8">
              <span class="handwritten text-2xl md:text-3xl block text-gray-500 opacity-90">
                 Rationale: Since these users had little to no experience with CLM, they were appropriate for identifying mental model and usability gaps as they wouldn't be familiar with the CLM dashboard yet.
              </span>
            </div>
            <div>
              <p><span class="font-bold text-gray-900">Recruitment:</span> Participants were identified using <span class="font-bold text-gray-900">tracking data</span> of users who had access to the CLM dashboard as a beta feature but had <span class="font-bold text-gray-900">not yet adopted</span> it. They were recruited via:</p>
              <ul class="list-disc ml-8 mt-4 space-y-3 font-light">
                <li><span class="font-bold text-gray-900">email invitations</span>, or</li>
                <li>via <span class="font-bold text-gray-900">internal stakeholders</span> such as Product Managers and Customer Success Managers, who already had an <span class="font-bold text-gray-900">existing relationship</span> with them.</li>
              </ul>
            </div>
          </div>
        `,
      }
    ],
    researchProcess: {
      title: 'Research Process & Methods',
      visual: 'Research Process CLM',
      items: [
        {
          number: '1',
          label: 'Surveys (User Assessment & Recruitment Fit)',
          icon: SURVEY_ICON,
          text: 'First, a short pre-test survey was rolled to understand <span class="font-bold text-gray-900">participants’ prior experience with CLM, their familiarity with the dashboard, and general context of use</span>. Overall this pre-test survey was conducted to:',
          bullets: [
            '<span class="font-bold text-gray-900">assess user fit</span>',
            '<span class="font-bold text-gray-900">segment participants</span>',
            '<span class="font-bold text-gray-900">tailor probes</span> during the session'
          ],
        },
        {
          number: '2',
          label: 'Moderated Conceptual & Usability Testing',
          icon: MODERATED_ICON,
          text: 'Post the pre-test survey and recruitment of participants, moderated conceptual & usability studies were conducted. As a part of these sessions, <span class="font-bold text-gray-900">participants completed 7 key tasks on the CLM dashboard</span> in a moderated session. This allowed the evaluation of:',
          bullets: [
            '<span class="font-bold text-gray-900">Alignment with users’ mental models</span>',
            '<span class="font-bold text-gray-900">Expectation of task flow and navigation</span>',
            '<span class="font-bold text-gray-900">Conceptual clarity of features and information architecture</span>',
            '<span class="font-bold text-gray-900">Terminology and Content</span>, and',
            '<span class="font-bold text-gray-900">Interaction usability & heuristics</span>'
          ],
          handwritingNote: 'The 7 tasks were finalised in order to cover all the major possibilities that CLM dashboard was designed for at that stage. This was done partnering and collaborating with the Designer and the Product Manager, leading the product on their respective front.',
          visuals: [
            {
              placeholder: 'Interview Visual',
              label: 'A snapshot showing the participant conducting the task on the shared prototype while I am facilitating the session.'
            },
            {
              placeholder: 'Followup Questions',
              label: 'To conclude with a holistic feedback, \'follow up\' questions were framed, and asked at the end of the test.'
            },
            {
              placeholder: 'Observation Template',
              label: 'A structured observation template was framed to capture participants’ expressions and comments throughout the sessions.'
            },
            {
              placeholder: 'Task Questions',
              label: 'Task-specific questions were designed to capture user feedback, expectations, and mental models.'
            }
          ],
          subText: 'Techniques like <span class="font-bold text-gray-900 highlight-blue">Think-aloud, Contextual probing, and Rating on likert scale</span> were used throughout.',
        },
        {
          number: '3',
          label: 'Comparative UX Evaluation (Previous vs. New Dashboard)',
          icon: COMPARATIVE_ICON,
          text: 'As part of the same interview, participants <span class="font-bold text-gray-900">compared the previous and new dashboards</span> on key experiential qualities such as:',
          bullets: [
            '<span class="font-bold text-gray-900">Intuitiveness:</span> How easily users understand what to do next without instructions or prior training.',
            '<span class="font-bold text-gray-900">Efficiency:</span> How quickly and with how little effort users can complete their tasks.',
            '<span class="font-bold text-gray-900">Effectiveness:</span> How well the product enables users to achieve their intended goals correctly.'
          ],
          handwritingNote: 'The above qualities were identified as the desired design principles that were being discussed amongst high level decision meetings, and thus were used to benchmark the experience in different user research sessions going forward.',
          visuals: [
            {
              placeholder: 'Mural Activity',
              label: 'A Mural activity was designed to enable participants; evaluate and compare the old and new dashboard concepts based on key experiential qualities.'
            }
          ]
        },
        {
          number: '4',
          label: 'System Usability Scale (SUS)',
          icon: SUS_ICON,
          text: 'Participants completed the SUS questionnaire at the end of the session to capture a <span class="font-bold text-gray-900">standardized, quantitative measure</span> of <span class="font-bold text-gray-900">overall perceived usability</span> of CLM Dashboard.',
          handwritingNote: 'Since it was the first CLM dashboard user test, gathering the SUS rating would quantitatively indicate to the team how well it was being perceived in terms of usability (apart from the qualitative testing) and further set it\'s benchmark that can be used to relatively compare it\'s usability in the upcoming future iterations as well.',
          visualPlaceholder: 'SUS Scale',
          visualLabel: 'A System Usability Scale (SUS) questionnaire; which was used to assess overall usability.'
        }
      ]
    },
    susScore: '74.4',
    susDescription: "The product achieved a <span class='font-bold text-gray-900'>SUS score of 74.4 which falls in the ‘Good’ usability range</span>. This indicates that users were <span class='font-bold text-gray-900 highlight-blue'>generally able to complete tasks with confidence and minimal friction</span>, while also highlighting <span class='font-bold text-gray-900 highlight-blue'>opportunities to further simplify and refine the experience</span> to move toward best-in-class usability.",
    mentalModelGaps: [
      {
        category: 'Non-Intuitive',
        title: "Misalignment of the 'Ready' Stage Meaning",
        observation: "Users interpreted the 'Ready' stage as content being ready for publishing rather than ready for review. This mismatch between the stage name and its actual purpose caused confusion and made the workflow feel non-intuitive.",
        quotes: ["'If it’s meant to be reviewed, then why isn’t it called review?'"]
      },
      {
        category: 'Non-Intuitive',
        title: "No Clear Way to Differentiate Content Versions",
        observation: "Users were unable to tell different versions of the same content apart because version information was not visible. This made it unclear what they were editing or reviewing.",
        quotes: ["'If there were some way to show the version number, it would help. Right now, we don’t know if these are two separate things.'"]
      },
      {
        category: 'Non-Intuitive',
        title: "Unclear Meaning of 'Push All to Production'",
        observation: "Users could not tell whether this action moved content to the next internal stage or published it live to end users. This ambiguity made them hesitant to use the action."
      },
      {
        category: 'Non-Intuitive',
        title: "The 'Ready' Stage Is Difficult for New Users to Understand",
        observation: "New and non-CLM users struggled to understand the purpose of the 'Ready' stage compared to Draft and Production, creating a clear learnability gap."
      },
      {
        category: 'Non-Effective',
        title: 'Absence of a "Trash Bin"',
        observation: 'Users feared accidental deletion and requested a 30-day retention area to maintain control over content.'
      },
      {
        category: 'Non-Intuitive',
        title: 'Fear of Accidental Live Content Removal',
        observation: 'Users were unsure whether sending content back to draft would instantly remove it from the live experience, creating hesitation and fear.'
      },
      {
        category: 'Non-Effective',
        title: 'Users Do Not Trust Preview Mode',
        observation: 'Because preview does not reflect the real end-user experience, users publish content just to test it, increasing unnecessary production pushes.'
      },
      {
        category: 'Non-Intuitive',
        title: 'Users Do Not Understand the Map Stage',
        observation: 'Confusing terminology and unclear instructions made users unsure how to use the Map stage, leading to low adoption.'
      }
    ],
    usabilityGaps: [
      {
        category: 'Recognition rather than recall',
        title: 'Action Buttons Are Far from Selected Content',
        observation: 'Users expected actions related to selected content to appear nearby. Because the buttons were placed at the top of the screen, many users overlooked them, making actions harder to discover.',
        quotes: [
          "'I didn’t even realize there was a big red button that says \"Send to Ready.\"'",
          "'People view screens the way they read. You select the content first, and then expect the next action. My eyes saw everything else before noticing that button.'"
        ]
      },
      {
        category: 'Flexibility and efficiency of use',
        title: 'Tabs and Filters Reset During Navigation',
        observation: 'When users navigate between screens, their selected tabs and filters reset. This forces them to repeatedly reapply filters, slowing down daily workflows.',
        quotes: [
          "'It loses the filters, and from a very practical, daily perspective, that is extremely irritating.'",
          "'There’s no stickiness at all. It’s unbelievably irritating.'"
        ]
      },
      {
        category: 'Flexibility and efficiency of use',
        title: 'Publishing Content Takes Too Long',
        observation: 'Even small updates take 30–40 minutes to reach production, significantly slowing down content delivery.',
        quotes: ["'I think it takes about 30–40 minutes just to push two pop-ups into production.'"]
      },
      {
        category: 'Flexibility and efficiency of use',
        title: 'Users Are Blocked from Working During Publishing',
        observation: 'While content is being pushed to production, users cannot work on other items, which creates unnecessary downtime.',
        quotes: ["'Now I can’t touch any other content to move to production, so it takes a lot of time for us.'"]
      },
      {
        category: 'Visibility of system status',
        title: 'No Clear Way to Remove Content in Production',
        observation: 'Users could not find a clear or discoverable way to remove content once it was in production.',
        quotes: ["'I’m not sure how I should delete this from production, since there’s no delete button here.'"]
      },
      {
        category: 'Flexibility and efficiency of use',
        title: 'Dropdown Menus Close Too Easily',
        observation: 'Small mouse movements cause dropdown menus to disappear, making interactions frustrating and error-prone.',
        quotes: ["'It’s really bad having the dropdown behave like this. You can see how bad it is.'"]
      }
    ],
    mentalModelStrengths: [
      {
        category: 'Effective',
        title: 'Clear Production Safeguards Prevent Accidental Mistakes',
        observation: 'Users clearly understand that content cannot be deleted or copied directly in Production, which helps prevent accidental changes.',
        quotes: [
          '"My understanding is that you need to move it to Draft before you can remove it altogether, which is great because it adds an extra mechanism to avoid deleting something by mistake."',
          '"It’s a good preventive measure. You can’t delete content directly from Production."'
        ]
      },
      {
        category: 'Effective',
        title: 'Draft Editing Feels Safe and Non-Disruptive',
        observation: 'Users understand that editing in Draft creates a separate version and does not impact live users.',
        quotes: ['"This is helpful because it creates a new copy, and when you push it to Production, it overwrites the other copy."']
      },
      {
        category: 'Efficient',
        title: 'CLM Stages Scale Better Than Manual Tagging',
        observation: 'Users find CLM stages much easier to manage than manual tagging when working with large volumes of content.',
        quotes: ['"Content management becomes much easier compared to how we used to tag content, which becomes a hassle when there are more than, say, 50 pieces."']
      }
    ],
    usabilityStrengths: [
      {
        category: 'Visibility of system status',
        title: 'Clear Stage Visibility While Building Widgets',
        observation: "Users can easily see the current stage of a piece while building widgets, which helps them stay oriented.",
        quotes: ['"I can see that this is useful because I can see what state it’s already in."']
      },
      {
        category: 'Consistency and standards',
        title: 'Consistent Deletion Rules Across Draft and Ready',
        observation: 'Users find it intuitive to delete content in Draft and Ready stages because the rules are clear and consistent.',
        quotes: [
          '"Deleting content in draft stage is easy."',
          '"draft and ready is very straightforward. Pretty obvious that there."'
        ]
      }
    ],
    mentalModelImprovements: [
      {
        title: "Version Differentiator",
        category: "Non-Intuitive",
        details: [
          { label: "Non-Intuitive", text: "Users are unable to clearly distinguish between different versions of the same content (for eg., in case when they would have edited the same content multiple times). The interface does not provide strong visual or structural cues to help users quickly understand which version they are viewing or acting on." }
        ]
      },
      {
        title: "Edit in Production",
        category: "Non-Intuitive",
        details: [
          { label: "Non-Intuitive", text: "The system does not clearly communicate how editing content in the production stage differs from editing it in earlier stages. Users are unclear about what actions are allowed, restricted, or risky in production." }
        ]
      },
      {
        title: "Nomenclature (Ready Stage Naming)",
        category: "Non-Intuitive",
        details: [
          { label: "Non-Intuitive", text: "The label “Ready” does not clearly communicate what the stage represents or what actions are expected from the user at this point in the workflow. Users struggle to map this term to their real-world understanding of content progression." }
        ]
      }
    ],
    usabilityImprovements: [
      {
        category: "Match Between System and the Real World",
        title: "Proximity of Action",
        desc: "Stage movement actions such as “Move to Ready” are placed away from the content selection area, breaking users’ natural visual flow after selecting items and slowing task execution."
      },
      {
        category: "User Control and Freedom",
        title: "Stickiness of Tabs",
        desc: "Draft, Ready, and Production tabs—and their associated filters—reset when users navigate away, floral them to redo selections and removing control over their workflow context."
      },
      {
        category: "Visibility of System Status",
        title: "System Status",
        desc: "The system does not clearly communicate the outcomes of critical actions (e.g., pushing all content to production, reverting stages, or overriding versions), leaving users uncertain about system state changes."
      },
      {
        category: "Visibility of System Status",
        title: "Edit in Production",
        desc: "When users attempt to edit content already in the production stage, differences in behavior and consequences are not sufficiently highlighted, making it difficult to understand the system’s current state."
      },
      {
        category: "Consistency and Standards",
        title: "Widget Actions",
        desc: "Bulk actions available for widgets differ from bulk actions for general content, creating inconsistency that forces users to relearn interaction patterns across similar components."
      },
      {
        category: "Error Prevention",
        title: "Stage Restrictions",
        desc: "High-risk actions such as delete or copy are allowed across all stages, instead of being restricted based on context, reducing the system’s ability to prevent accidental content loss."
      }
    ],
    solution: "A redesign of the CLM dashboard focusing on mental model alignment, including renaming 'Ready' to 'Review', providing clear version differentiation, and context-aware action placement.",
    impact: "",
    impactSummary: "I led the concept validation and usability research for the Whatfix CLM Dashboard, re-defining the research strategy and executing a high-velocity study. This ownership ensured that findings were immediately translated into actionable design decisions, removing critical adoption barriers before the GA launch. My contributions to this project are centered around three key pillars of impact:<br><br><ul class=\"list-disc ml-6 space-y-4\"><li><b>[Strategic] UXR Course-Correction</b>: <span class='font-bold text-gray-900 highlight-blue'>Identified conceptual gaps</span> mid-sprint, <span class='font-bold text-gray-900 highlight-blue'>pivoted methodology</span> to validate core concepts 4 weeks before GA launch.</li><li><b>[Business] Accelerated Market Adoption</b>: Drove an exponential increase in <span class='font-bold text-gray-900 highlight-blue'>client adoption; from 8 to 700+</span>; by implementing high-impact insights derived from the foundational study.</li><li><b>[Organizational] Executive Alignment</b>: <span class='font-bold text-gray-900 highlight-blue'>Unified VP-level stakeholders</span> on the UXR proposal and the final recommendations for product's GA release.</li></ul>",
    imageUrl: 'assets/CLM_Background.jpg',
    accentColor: "#3B82F6",
    impactStats: [
      { label: 'Client Adoption Increase', value: '8 → 700', subtext: 'Growth in active client accounts' },
      { label: 'Research-to-Decision Cycle', value: '4 Weeks', subtext: 'Led the entire cycle from start to finalized recommendations' }
    ],
    highlightTags: ['Strategic Roadmap Pivot', 'Scaled Adoption', 'Executive Alignment'],
    cardImageTag: '(Hybrid) Conceptual & Usability Validation',
    learnings: [
      {
        title: "Research doesn’t always follow a linear flow in real-world products",
        text: "While academically the process is often concept testing -> design -> usability testing, in industry especially in fast-moving or startup environments this isn’t always practical. In this project, I learned how to combine concept validation and usability testing within a single study to meet tight timelines while still generating meaningful insights."
      },
      {
        title: "Co-creating recommendations with stakeholders accelerates impact",
        text: "I learned that recommendations are far more effective when shaped through ongoing discussions with Product and Design stakeholders rather than working in isolation. This shared ownership reduced back-and-forth, increased alignment, and significantly shortened the time from insight to action."
      },
      {
        title: "Prioritization and delivery matter more than perfection",
        text: "In fast-paced environments, meeting business timelines can be more critical than running an ideal or exhaustive research process. This project reinforced the importance of focusing on key requirements, making deliberate trade-offs, and delivering actionable insights on time even when conditions are not perfect."
      }
    ],
    gaImprovements: [
      {
        label: "Proximity of Action",
        desc: "Place stage movement actions (like \"Move to Ready\") near the content selection area to match where users naturally look after selecting items.",
      },
      {
        label: "Stickiness of Tabs",
        desc: "Ensure that the Draft, Ready, and Production tabs—and their associated filters—retain their state when a user navigates away to prevent \"unbelievably irritating\" resets.",
      },
      {
        label: "System Status",
        desc: "Clearly convey the consequences of actions, particularly when a user clicks \"Push all to production,\" moves content back to draft, or overrides a content version.",
      },
      {
        label: "Edit in Production",
        desc: "Highlighting and clarifying the specific differences in behavior and actions when a user attempts to edit content already in the production stage.",
      },
      {
        label: "Version Differentiator",
        desc: "Implement a clear way for users to distinguish between different versions of the same piece of content.",
      },
      {
        label: "Delete in Production",
        desc: "Clarify and highlight the difference between \"deleting\" content entirely and simply \"removing\" it from the production environment.",
      },
      {
        label: "Widget Actions",
        desc: "Ensure that bulk actions available for widgets are consistent with the bulk actions available for general content.",
      },
      {
        label: "Stage Restrictions",
        desc: "Restrict certain high-risk actions, such as delete or copy, across specific stages to provide a \"preventive mechanism\" against accidental loss.",
      },
      {
        label: "Nomenclature",
        desc: "Rename the \"Ready\" stage to better reflect users' conceptual understanding (e.g., \"Review\").",
      }
    ],
    gaUsabilityFixes: [
      "Search Behavior: Improve the backend search behavior and the way results are filtered.",
      "List View Fixes: Resolve the issue where the \"Select All\" checkbox only selects visible content on the current page rather than the entire list.",
      "Icon iconography: Update icons to better match user expectations, specifically targeting the \"Create\" button.",
      "Guiding: Provide clear instructional text and guidance for new users, such as labels for the widget dropdown.",
      "Content Fixes: Standardize and improve the text used for snackbars, warnings, button labels, and confirmation prompts."
    ]
  },
  {
    id: 'ai-ux-foundation',
    title: 'Establishing the AI UX Foundation: Collaborative Discovery Research for Whatfix’s AI-First Product Line',
    organization: 'Whatfix',
    industryTags: ['AI', 'B2B', 'SaaS', 'Foundational'],
    product: 'AI-First Product Line',
    tagline: 'Led co-creation and discovery to establish the core UX principles and vision that now govern Whatfix’s AI-first product line',
    role: 'Lead UX Researcher (Foundational)',
    duration: 'Ongoing',
    team: 'Product Leadership, Engineering Leads, AI Designers',
    stakeholders: [],
    tools: [],
    methods: [
      'Collaborative Discovery',
      'Strategic Visioning',
      'Principles Development'
    ],
    overview: 'Work In Progress',
    problem: 'TBD',
    imageUrl: 'assets/AI Project.jpg',
    accentColor: "#8B5CF6",
    cardImageTag: 'Foundational Discovery & Strategic Visioning',
    isWIP: true,
    impact: 'TBD',
    solution: 'TBD'
  },
  {
    id: 'whatfix-mirror',
    title: 'From Insights to Impact: Foundational Research behind a $1M ARR Product',
    organization: 'Whatfix',
    industryTags: ['B2B', 'SaaS', 'Foundational'],
    product: 'Whatfix Mirror',
    tagline: 'Owned and executed the discovery research validating the product opportunity, aligning cross-functional teams, and translating insights into a clear product direction for Whatfix Mirror.',
    role: 'UX Researcher',
    duration: 'Ongoing',
    team: 'Product Leadership, Engineering Leads, AI Designers',
    stakeholders: [],
    tools: [],
    methods: [
      'Collaborative Discovery',
      'Strategic Visioning',
      'Principles Development'
    ],
    overview: 'Work In Progress',
    problem: 'TBD',
    imageUrl: 'assets/Whatfix Mirror background.jpg',
    accentColor: "#8B5CF6",
    cardImageTag: '0→1 PRODUCT DISCOVERY & STRATEGIC PRODUCT DEFINITION',
    isWIP: true,
    impact: 'TBD',
    solution: 'TBD'
  },
  {
    id: 'behance-more',
    title: 'See more on Behance',
    tagline: 'Earlier professional and academic case studies',
    imageUrl: 'assets/behance icon 2.png',
    accentColor: "#053EFF",
    methods: [],
    overview: 'Portfolio',
    problem: 'TBD',
    role: 'UX Researcher',
    duration: '2019 - Present',
    externalUrl: 'https://www.behance.net/135ayushichaudhary',
    impact: 'N/A',
    solution: 'N/A'
  }
];