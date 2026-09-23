import {
  StickyNavigation,
  SectionContext,
  SectionExist,
  SectionStart,
  SectionReframe,
  SectionResearch,
  SectionReintegration,
  SectionChallenge,
  SectionDecisions,
  SectionPrinciples,
  SectionIaFlow,
  SectionOutput,
  SectionComparison,
  SectionReflection,
} from ".";

import { CaseStudyLayout, DEFAULT_CASE_STUDY_VARIABLES } from "@/components/projects/CaseStudyLayout";

export default function AmaseCaseStudyPage() {
  return (
    <CaseStudyLayout
      variables={DEFAULT_CASE_STUDY_VARIABLES}
      navigation={<StickyNavigation />}
    >
      <SectionContext />
      <SectionExist />
      <SectionStart />
      <SectionReframe />
      <SectionResearch />
      <SectionReintegration />
      <SectionChallenge />
      <SectionDecisions />
      <SectionPrinciples />
      <SectionIaFlow />
      <SectionOutput />
      <SectionComparison />
      <SectionReflection />
    </CaseStudyLayout>
  );
}
