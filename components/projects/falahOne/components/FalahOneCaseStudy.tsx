import {
  StickyNavigation,
  SectionHero,
  SectionTechnical,
  SectionAdaptation,
  SectionCritique,
  SectionAudit,
  SectionContext,
  SectionProblem,
  SectionAdoption,
  SectionGovernance,
  SectionVersioning,
  SectionCurrent,
  SectionArtifact,
  SectionApplication,
  SectionReflection,
  SectionProgress,
} from ".";

import { CaseStudyLayout, DEFAULT_CASE_STUDY_VARIABLES } from "@/components/projects/CaseStudyLayout";

export default function FalahOneCaseStudyPage() {
  return (
    <CaseStudyLayout
      variables={DEFAULT_CASE_STUDY_VARIABLES}
      navigation={<StickyNavigation />}
    >
      <SectionHero />
      <SectionContext />
      <SectionProblem />
      <SectionAdoption />
      <SectionTechnical />
      <SectionAudit />
      <SectionCritique />
      <SectionAdaptation />
      <SectionGovernance />
      <SectionVersioning />
      <SectionCurrent />
      <SectionArtifact />
      <SectionApplication />
      <SectionReflection />
      <SectionProgress />
    </CaseStudyLayout>
  );
}
