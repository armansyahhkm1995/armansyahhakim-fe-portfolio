import {
  StickyNavigation,
  SectionDataDecision,
  SectionDashboardQuestions,
  SectionScheduleModel,
  SectionDeviceAvailability,
  SectionArchitectureFlow,
  SectionInitialDesign,
  SectionFinalDesign,
  SectionV1Scope,
  SectionReflection,
  SectionContext,
  SectionPhysical,
  SectionRequirement,
  SectionRole,
  SectionHero,
  SectionDeviceControl,
} from ".";

import { CaseStudyLayout, DEFAULT_CASE_STUDY_VARIABLES } from "@/components/projects/CaseStudyLayout";

export default function EMSCaseStudyPage() {
  return (
    <CaseStudyLayout
      variables={DEFAULT_CASE_STUDY_VARIABLES}
      navigation={<StickyNavigation />}
    >
      <SectionHero />
      <SectionContext />
      <SectionRequirement />
      <SectionPhysical />
      <SectionRole />
      <SectionDataDecision />
      <SectionDashboardQuestions />
      <SectionDeviceControl />
      <SectionScheduleModel />
      <SectionDeviceAvailability />
      <SectionArchitectureFlow />
      <SectionInitialDesign />
      <SectionFinalDesign />
      <SectionV1Scope />
      <SectionReflection />
    </CaseStudyLayout>
  );
}
