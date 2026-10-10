import {
  StickyNavigation,
  SectionHero,
  SectionProblem,
  SectionMechanism,
  SectionOutput,
  SectionImpact,
} from ".";

import { CaseStudyLayout, DEFAULT_CASE_STUDY_VARIABLES } from "@/components/projects/CaseStudyLayout";

export default function AmaseCaseStudyPage() {
  return (
    <CaseStudyLayout
      variables={DEFAULT_CASE_STUDY_VARIABLES}
      navigation={<StickyNavigation />}
    >
      <SectionHero />
      <SectionProblem />
      <SectionMechanism />
      <SectionOutput />
      <SectionImpact />
    </CaseStudyLayout>
  );
}

