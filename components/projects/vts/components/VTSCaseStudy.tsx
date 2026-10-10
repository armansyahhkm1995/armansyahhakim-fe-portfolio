import {
  StickyNavigation,
  SectionHero,
  SectionFriction,
  SectionMechanism,
  SectionOutput,
  SectionImpact,
} from ".";

import { CaseStudyLayout, DEFAULT_CASE_STUDY_VARIABLES } from "@/components/projects/CaseStudyLayout";

export default function VTSCaseStudyPage() {
  return (
    <CaseStudyLayout
      variables={DEFAULT_CASE_STUDY_VARIABLES}
      navigation={<StickyNavigation />}
    >
      <SectionHero />
      <SectionFriction />
      <SectionMechanism />
      <SectionOutput />
      <SectionImpact />
    </CaseStudyLayout>
  );
}
