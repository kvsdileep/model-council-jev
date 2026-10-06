"use client";

import { Hero } from "@/components/Hero";
import { PromptLine } from "@/components/PromptLine";
import { TerminalWindow } from "@/components/TerminalWindow";

export default function Home() {
  return (
    <TerminalWindow status="idle">
      <Hero />
      <PromptLine running={false} onAsk={() => {}} onStop={() => {}} />
    </TerminalWindow>
  );
}
