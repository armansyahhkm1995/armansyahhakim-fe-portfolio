import {
  StickyNavigation,
  SectionHero,
  SectionContext,
  SectionEcosystem,
  SectionBefore,
  SectionHypothesis,
  SectionBehavior,
  SectionSystem,
  SectionValidation,
  SectionReflection,
} from ".";

import { CaseStudyLayout, DEFAULT_CASE_STUDY_VARIABLES } from "@/components/projects/CaseStudyLayout";

export default function CortevaCaseStudyPage() {
  return (
    <CaseStudyLayout
      variables={DEFAULT_CASE_STUDY_VARIABLES}
      navigation={<StickyNavigation />}
    >
      <SectionHero />
      <SectionContext />
      <SectionEcosystem />
      <SectionBefore />
      <SectionHypothesis />
      <SectionBehavior />
      <SectionSystem />
      <SectionValidation />
      <SectionReflection />
    </CaseStudyLayout>
  );
}
