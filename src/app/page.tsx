"use client";

import { Hero } from "@/components/Hero";
import { PromptLine } from "@/components/PromptLine";
import { RunView } from "@/components/RunView";
import { TerminalWindow } from "@/components/TerminalWindow";
import { useRun } from "@/lib/useRun";

export default function Home() {
  const { state, ask, stop, retrySynthesis } = useRun();
  const running = state.phase === "running";

  return (
    <TerminalWindow status={running ? "running" : "idle"}>
      {state.phase === "idle" && <Hero />}
      <PromptLine running={running} onAsk={ask} onStop={stop} />
      {state.phase !== "idle" && <RunView state={state} onRetrySynthesis={retrySynthesis} />}
    </TerminalWindow>
  );
}
