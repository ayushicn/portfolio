import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import styles from './CLMDashboard.module.css';

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const CLMDashboard: React.FC = () => (
  <article className={styles.page}>

    {/* ── Back nav ─────────────────────────────────────────────── */}
    <div className={styles.backWrap}>
      <Link to="/" className={styles.back}>
        <ArrowLeft size={14} strokeWidth={1.8} />
        <span>Back</span>
      </Link>
    </div>

    {/* ── Hero ─────────────────────────────────────────────────── */}
    <motion.section
      className={styles.hero}
      variants={stagger}
      initial="hidden"
      animate="visible"
    >
      <motion.p className={styles.year} variants={fadeUp}>2024 · Whatfix</motion.p>
      <motion.h1 className={styles.title} variants={fadeUp}>
        Reframing a 4-week usability test<br />into a strategic concept study
      </motion.h1>
      <motion.p className={styles.subtitle} variants={fadeUp}>
        How I led research that de-risked launch of Whatfix's CLM Dashboard
      </motion.p>
      <motion.div className={styles.stats} variants={fadeUp}>
        <div className={styles.stat}><span className={styles.statNum}>4</span><span className={styles.statLabel}>weeks end-to-end</span></div>
        <div className={styles.statDiv} />
        <div className={styles.stat}><span className={styles.statNum}>12</span><span className={styles.statLabel}>moderated sessions</span></div>
        <div className={styles.statDiv} />
        <div className={styles.stat}><span className={styles.statNum}>7</span><span className={styles.statLabel}>high-impact recommendations</span></div>
        <div className={styles.statDiv} />
        <div className={styles.stat}><span className={styles.statNum}>8→700+</span><span className={styles.statLabel}>client accounts post-launch</span></div>
      </motion.div>
    </motion.section>

    {/* ── Overview ─────────────────────────────────────────────── */}
    <motion.section
      className={styles.section}
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
    >
      <motion.div className={styles.overviewGrid} variants={stagger}>
        <motion.div className={styles.overviewCard} variants={fadeUp}>
          <p className={styles.cardLabel}>The Ask</p>
          <p className={styles.cardBody}>PM needed a usability test of the CLM Dashboard within 4 weeks, before its Generally Available launch.</p>
        </motion.div>
        <motion.div className={styles.overviewCard} variants={fadeUp}>
          <p className={styles.cardLabel}>What I Did</p>
          <p className={styles.cardBody}>Reframed the scope. Ran a combined concept + usability study to surface both mental model gaps and interaction issues in one sprint.</p>
        </motion.div>
        <motion.div className={styles.overviewCard} variants={fadeUp}>
          <p className={styles.cardLabel}>Impact</p>
          <p className={styles.cardBody}>7 high-impact recommendations shipped into GA. Product scaled from 8 beta clients to 700+ active accounts within two quarters.</p>
        </motion.div>
      </motion.div>
    </motion.section>

    {/* ── Project Setup ────────────────────────────────────────── */}
    <motion.section
      className={styles.section}
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
    >
      <motion.h2 className={styles.sectionLabel} variants={fadeUp}>Project Setup</motion.h2>
      <motion.div className={styles.setupGrid} variants={stagger}>
        <motion.div className={styles.setupCol} variants={fadeUp}>
          <p className={styles.setupLabel}>Role &amp; Timeline</p>
          <p className={styles.setupValue}>(Sole) UX Researcher</p>
          <p className={styles.setupValue}>4 weeks</p>
        </motion.div>
        <motion.div className={styles.setupCol} variants={fadeUp}>
          <p className={styles.setupLabel}>Team</p>
          <p className={styles.setupValue}>Product Manager</p>
          <p className={styles.setupValue}>UX Designer</p>
          <p className={styles.setupValue}>UX Research Director</p>
          <p className={styles.setupValue}>Product VP · Design VP</p>
        </motion.div>
        <motion.div className={styles.setupCol} variants={fadeUp}>
          <p className={styles.setupLabel}>Methodologies</p>
          <p className={styles.setupValue}>Moderated testing</p>
          <p className={styles.setupValue}>Comparative UX evaluation</p>
          <p className={styles.setupValue}>System Usability Scale (SUS)</p>
          <p className={styles.setupValue}>User surveys</p>
        </motion.div>
        <motion.div className={styles.setupCol} variants={fadeUp}>
          <p className={styles.setupLabel}>Tools</p>
          <p className={styles.setupValue}>Mural · Condens</p>
          <p className={styles.setupValue}>UserInterviews · Zoom</p>
        </motion.div>
      </motion.div>
    </motion.section>

    {/* ── The Reframe ──────────────────────────────────────────── */}
    <motion.section
      className={styles.section}
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
    >
      <motion.h2 className={styles.sectionLabel} variants={fadeUp}>The Reframe</motion.h2>

      <motion.div className={styles.reframeFlow} variants={stagger}>
        <motion.div className={styles.reframeBox} variants={fadeUp}>
          <p className={styles.reframeBoxLabel}>Given brief</p>
          <p className={styles.reframeBoxText}>"CLM's adoption has been low — run its usability test, identify the key issues to fix before its GA release."</p>
          <p className={styles.reframeAttrib}>— Product Manager</p>
        </motion.div>

        <motion.div className={styles.reframeArrow} variants={fadeUp}>↓</motion.div>

        <motion.div className={`${styles.reframeBox} ${styles.reframeBoxHighlight}`} variants={fadeUp}>
          <p className={styles.reframeBoxLabel}>Research goal</p>
          <p className={styles.reframeBoxText}>Validate whether the product's concept fits users' mental models; <em>and</em> surface usability gaps — in the same study.</p>
        </motion.div>
      </motion.div>

      <motion.div className={styles.pushbackGrid} variants={stagger}>
        {[
          'Adoption was low, but the team was treating it as a usability problem. I thought differently.',
          'A product built without ever being tested with users couldn\'t be debugged at the interaction layer — the risk was deeper than that.',
          'The real question wasn\'t just "what\'s broken on the screen?"',
          'It was also: "does the product\'s underlying model fit how users actually think about content workflows?"',
          'Concept testing answers the "does the model fit" question — but running it separately would have blown the 4-week deadline.',
          'Combining concept and usability testing into one moderated session was the only way to honour the reframe and the timeline.',
        ].map((text, i) => (
          <motion.div className={styles.pushbackCard} key={i} variants={fadeUp}>
            <span className={styles.pushbackNum}>{String(i + 1).padStart(2, '0')}</span>
            <p className={styles.pushbackText}>{text}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>

    {/* ── Research Design ──────────────────────────────────────── */}
    <motion.section
      className={styles.section}
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
    >
      <motion.h2 className={styles.sectionLabel} variants={fadeUp}>Research Design</motion.h2>
      <motion.p className={styles.sectionSubtext} variants={fadeUp}>Participants were filtered days ahead through a survey, then went deep in a 60-minute session.</motion.p>

      <motion.div className={styles.methodsGrid} variants={stagger}>
        {[
          { phase: 'Ahead of the session', name: 'Pre-Session Survey', desc: 'Short survey to assess user fit, segment participants, and tailor probes. Collected days in advance.' },
          { phase: 'In-session (60 min)', name: 'Moderated Conceptual & Usability Testing', desc: '7 tasks covering the full content lifecycle. Each task surfaced both conceptual fit and interaction issues.' },
          { phase: 'In-session (60 min)', name: 'Comparative UX Evaluation', desc: 'Participants placed descriptors on a custom Mural slider to compare old and new dashboards on intuitiveness, efficiency, and effectiveness.' },
          { phase: 'In-session (60 min)', name: 'System Usability Scale (SUS)', desc: 'Standard 10-item questionnaire to capture a quantitative usability baseline — the first ever for CLM Dashboard.' },
        ].map((m, i) => (
          <motion.div className={styles.methodCard} key={i} variants={fadeUp}>
            <p className={styles.methodPhase}>{m.phase}</p>
            <p className={styles.methodName}>{m.name}</p>
            <p className={styles.methodDesc}>{m.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>

    {/* ── Insights ─────────────────────────────────────────────── */}
    <motion.section
      className={styles.section}
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
    >
      <motion.h2 className={styles.sectionLabel} variants={fadeUp}>Key Insights &amp; Recommendations</motion.h2>
      <motion.p className={styles.sectionSubtext} variants={fadeUp}>
        7 insights prioritised by user-rated severity and importance of resolution. Reviewed and endorsed by Product VP, Design VP, and UX Research Director — without revision.
      </motion.p>

      <motion.p className={styles.insightGroupLabel} variants={fadeUp}>Mental Model Improvements</motion.p>
      <motion.div className={styles.insightGrid} variants={stagger}>
        {[
          { tag: 'Non Intuitive', name: 'Version Differentiator', desc: 'Users could not clearly distinguish between different versions of the same content.' },
          { tag: 'Non Intuitive', name: 'Ready Stage', desc: '"Ready" does not communicate what actions are expected. Users interpreted it as "ready to publish", skipping the review step entirely.' },
          { tag: 'Non Intuitive', name: 'Edit in Production', desc: 'Users could not find a clear or discoverable way to remove content once it was in production.' },
        ].map((ins, i) => (
          <motion.div className={styles.insightCard} key={i} variants={fadeUp}>
            <p className={styles.insightTag}>{ins.tag}</p>
            <p className={styles.insightName}>{ins.name}</p>
            <p className={styles.insightDesc}>{ins.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.p className={styles.insightGroupLabel} variants={fadeUp} style={{ marginTop: 'var(--space-6)' }}>Usability Improvements</motion.p>
      <motion.div className={styles.insightGrid} variants={stagger}>
        {[
          { tag: 'User Control & Freedom', name: 'Stickiness of Tabs', desc: 'Draft, Ready, and Production tabs and their filters reset when users navigate away.' },
          { tag: 'System & Real World Match', name: 'Proximity of Action', desc: 'Stage movement buttons are placed away from the content selection area, causing confusion and slowing task completion.' },
          { tag: 'Consistency & Standards', name: 'Widget Actions', desc: 'Bulk actions available for widgets differ from those for general content, creating inconsistency.' },
          { tag: 'Error Prevention', name: 'Stage Restrictions', desc: 'Actions like "copy" should be restricted in production to prevent accidental editing of live content.' },
        ].map((ins, i) => (
          <motion.div className={styles.insightCard} key={i} variants={fadeUp}>
            <p className={styles.insightTag}>{ins.tag}</p>
            <p className={styles.insightName}>{ins.name}</p>
            <p className={styles.insightDesc}>{ins.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div className={styles.susRow} variants={fadeUp}>
        <span className={styles.susScore}>74.4</span>
        <div className={styles.susText}>
          <p className={styles.susLabel}>SUS Score</p>
          <p className={styles.susDesc}>Users were generally able to complete tasks, with some friction — highlighting clear opportunities to move toward best-in-class usability.</p>
        </div>
      </motion.div>
    </motion.section>

    {/* ── Impact ───────────────────────────────────────────────── */}
    <motion.section
      className={styles.impactSection}
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
    >
      <motion.h2 className={styles.sectionLabel} variants={fadeUp}>Impact</motion.h2>
      <motion.div className={styles.impactNumbers} variants={stagger}>
        <motion.div className={styles.impactStat} variants={fadeUp}>
          <span className={styles.impactNum}>8→700+</span>
          <span className={styles.impactStatLabel}>Client accounts within two quarters of GA launch</span>
        </motion.div>
        <motion.div className={styles.impactStat} variants={fadeUp}>
          <span className={styles.impactNum}>4 weeks</span>
          <span className={styles.impactStatLabel}>From kickoff to finalized recommendations, end-to-end</span>
        </motion.div>
      </motion.div>

      <motion.div className={styles.quotesGrid} variants={stagger}>
        <motion.blockquote className={styles.quote} variants={fadeUp}>
          <p>"Thank you Ayushi for this study and for sharing detailed and valuable insights to further improve the CLM experience."</p>
          <footer>— VP, Product</footer>
        </motion.blockquote>
        <motion.blockquote className={styles.quote} variants={fadeUp}>
          <p>"A huge thanks to Ayushi in conducting this study in a short duration of time and providing a very comprehensive &amp; detailed summary of the insights."</p>
          <footer>— Product Manager</footer>
        </motion.blockquote>
      </motion.div>
    </motion.section>

    {/* ── Learnings ────────────────────────────────────────────── */}
    <motion.section
      className={styles.section}
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
    >
      <motion.h2 className={styles.sectionLabel} variants={fadeUp}>Learnings</motion.h2>
      <motion.div className={styles.learningsGrid} variants={stagger}>
        <motion.div className={styles.learningCard} variants={fadeUp}>
          <p className={styles.learningHead}>Recommendations land harder when stakeholders help co-create them</p>
          <p className={styles.learningBody}>On this project, I co-developed the final recommendations through ongoing conversation with Product and Design. By the time they reached the room, they already had buy-in.</p>
        </motion.div>
        <motion.div className={styles.learningCard} variants={fadeUp}>
          <p className={styles.learningHead}>Prioritisation and delivery matter more than perfection</p>
          <p className={styles.learningBody}>The 4-week timeline forced trade-offs. Even if I'd run separate studies and delivered 'perfect research' after launch, it would have been of little use. Making deliberate trade-offs is the actual craft of industry research.</p>
        </motion.div>
      </motion.div>
    </motion.section>

    {/* ── CTA ──────────────────────────────────────────────────── */}
    <motion.section
      className={styles.ctaSection}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5 }}
    >
      <p className={styles.ctaText}>Want to go deeper?</p>
      <a
        href="https://pitch.com/v/a-4-week-strategic-ux-research-for-clm-dashboard-i5rvk4"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.ctaBtn}
      >
        <span>View full deck in Pitch</span>
        <ArrowUpRight size={15} strokeWidth={1.8} />
      </a>
    </motion.section>

  </article>
);

export default CLMDashboard;
