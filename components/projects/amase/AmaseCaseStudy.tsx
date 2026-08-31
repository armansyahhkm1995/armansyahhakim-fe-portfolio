import {
  SceneQuestion,
  SceneMission,
  SceneJourney,
  SceneEcosystem,
  SceneTurningPoint,
  SceneHypothesis,
  SceneExperience,
  SceneValidation,
  SceneProduct,
  SceneTransformation,
  SceneReflection,
  SceneClosing,
} from "@/components/projects/amase/scenes";

import { ProgressRail } from "./ProgressRail";

import "./styles/amase.css";

export function AmaseCaseStudy() {
  return (
    <div className="amase-case-study">
      <ProgressRail />

      <main>
        <SceneQuestion />
        <SceneMission />
        <SceneJourney />
        <SceneEcosystem />
        <SceneTurningPoint />
        <SceneHypothesis />
        <SceneExperience />
        <SceneValidation />
        <SceneProduct />
        <SceneTransformation />
        <SceneReflection />
        <SceneClosing />
      </main>
    </div>
  );
}
