import "./styles/corteva.css";

import { Opening } from "./scenes/Opening";
import { ProgressRail } from "./ProgressRail";
import { Before } from "./scenes/Before";
import { Ecosystem } from "./scenes/Ecosystem";
import { TurningPoint } from "./scenes/TurningPoint";
import { Hypothesis } from "./scenes/Hypothesis";
import { Experience } from "./scenes/Experience";
import { Validation } from "./scenes/Validation";
import { Outcome } from "./scenes/Outcome";

export function CortevaCaseStudy() {
  return (
    <main className="corteva min-h-screen bg-corteva-background text-corteva-foreground">
      <ProgressRail />
      <Opening />
      <Before />
      <Ecosystem />
      <TurningPoint />
      <Hypothesis />
      <Experience />
      <Validation />
      <Outcome />
    </main>
  );
}
