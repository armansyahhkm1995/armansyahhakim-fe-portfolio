import {
  StickyNavigation,
  SectionHero,
  SectionContext,
  SectionProblem,
  SectionQuestion,
  SectionUser,
  SectionProduct,
  SectionStrategy,
  SectionVTSWorkbench,
  SectionSynchronization,
  SectionVTSMaintenance,
  SectionConstraints,
  SectionOutput,
  SectionCriteria,
  SectionReflection,
  SectionFooter,
} from ".";

import { CaseStudyLayout, DEFAULT_CASE_STUDY_VARIABLES } from "@/components/projects/CaseStudyLayout";

export default function VTSCaseStudyPage() {
  return (
    <CaseStudyLayout
      variables={DEFAULT_CASE_STUDY_VARIABLES}
      navigation={<StickyNavigation />}
    >
      <SectionHero />
      <SectionContext />
      <SectionProblem />
      <SectionQuestion />
      <SectionUser />
      <SectionProduct />
      <SectionStrategy />
      <SectionVTSWorkbench />
      <SectionSynchronization />
      <SectionVTSMaintenance />
      <SectionConstraints />
      <SectionOutput />
      <SectionCriteria />
      <SectionReflection />
      <SectionFooter />
    </CaseStudyLayout>
  );
}
