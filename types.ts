export interface Insight {
  category: string;
  title?: string; // Text before the colon
  observation: string; // Text after the colon
  quotes?: string[];
  quote?: string; // Kept for backward compatibility
}

export interface ImprovementDetail {
  label: string;
  text: string;
}

export interface ImprovementItem {
  title: string;
  category?: string;
  desc?: string;
  details?: ImprovementDetail[];
}

export interface LearningItem {
  title: string;
  text: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  product?: string;
  organization?: string;
  industryTags?: string[];
  role: string;
  duration: string;
  team?: string;
  stakeholders?: { name: string; role: string }[];
  tools?: string[];
  methods: string[];
  overview: string;
  problem: string;
  problemBackground?: string;
  problemBullets?: { h1: string; h2: string; text: string }[];
  purposeOfTool?: { label: string; desc: string }[];
  approachGoal?: string;
  approachGoalPoints?: { title: string; text: string; subText?: string; visualPlaceholder?: string }[];
  researchProcess?: {
    title: string;
    visual?: string;
    items: {
      number: string;
      label: string;
      text: string;
      bullets?: string[];
      handwritingNote?: string;
      subText?: string;
      icon?: string;
      visualPlaceholder?: string;
      visualLabel?: string;
      secondaryVisualPlaceholder?: string;
      secondaryVisualLabel?: string;
      tertiaryVisualPlaceholder?: string;
      tertiaryVisualLabel?: string;
      visuals?: { placeholder: string; label?: string }[];
    }[];
  };
  approachGoalStatement?: string;
  approachGoalImageUrl?: string;
  approachMethods?: string[];
  interactionQualities?: { label: string; desc: string }[];
  mentalModels?: string;
  usabilityFocus?: string;
  participants?: string;
  susScore?: string;
  susDescription?: string;
  detailedInsights?: { category: string; title?: string; observation: string; quote?: string; note?: string }[];
  mentalModelGaps?: Insight[];
  usabilityGaps?: Insight[];
  mentalModelStrengths?: Insight[];
  usabilityStrengths?: Insight[];
  mentalModelImprovements?: ImprovementItem[];
  usabilityImprovements?: ImprovementItem[];
  gaImprovements?: {
    label: string;
    desc?: string;
    tags?: string[];
    why?: string;
  }[];
  gaUsabilityFixes?: string[];
  insightSectionTitle?: string;
  insightSubTitle?: string;
  solution: string;
  impact: string;
  impactSummary?: string;
  impactStats?: { label: string; value: string; subtext?: string }[];
  learnings?: LearningItem[];
  imageUrl: string;
  accentColor: string;
  highlightTags?: string[];
  cardImageTag?: string;
  isWIP?: boolean;
  externalUrl?: string;
}

export interface NavItem {
  label: string;
  path: string;
}