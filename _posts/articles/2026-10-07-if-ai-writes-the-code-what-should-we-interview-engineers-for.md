---
layout: post
title: "If AI Writes the Code, What Should We Interview Engineers For?"
modified: 2026-10-07
categories: articles
excerpt: "AI didn't make technical interviews obsolete. It exposed what they were actually measuring. A thought experiment on how I'd interview engineers now."
comments: true
share: true
date: 2026-10-07T15:00:00+03:00
tags: [ai, software-engineering, interviews, hiring]
og_image: og-interview-engineers.png
---

A comment on my last essay, *[AI Can Write the Code. Someone Still Has to Own the Decision]({% post_url articles/2026-10-07-ai-can-write-the-code-someone-still-has-to-own-the-decision %})*, asked a question I couldn't stop thinking about: if AI can write the code and the engineer's job is now owning the decision, what happens to technical interviews?

This isn't a survey of how companies interview today. I don't have the evidence to make that claim. It's a thought experiment grounded in my own interview notes: how would I interview now, and why?

## What my interviews actually measured

For years my interviews followed the same shape: an hour and a list of subjects (fundamentals, some system design, testing, communication). It's the format I inherited, and I never changed it.

Going back through my notes wasn't a flattering read. Most of them are checklists of concepts recalled: streams, lambdas, the difference between two interfaces that do almost the same thing, checked versus unchecked exceptions. The plans almost always included a design question or a small exercise. The notes almost never record one being run. With an hour on the clock, the interview kept drifting back to what's fastest to ask and easiest to score, which is recall. And the feedback I wrote afterwards, in a hurry, was honestly closer to a feeling than to an examination.

What I find more interesting is what my decisions rewarded, as opposed to what my questions asked. The candidates I recommended hiring weren't the ones with the cleanest recall. Both had gaps in the language fundamentals I'd spent half the hour on. What carried them was that they could walk through a real system they'd built, end to end, explain why it was shaped that way, and they thought about edge cases before I asked. One of my own feedback notes says it in three words: practical over theoretical. The verdicts I hedged on came down to recall gaps.

> So even before AI, my format measured one thing and my judgment rewarded another.
{: .pullquote}

So even before AI, my format measured one thing and my judgment rewarded another. AI widens that gap, but it didn't create it. I don't think it made technical interviews obsolete either. It exposed what they were actually measuring.

## What the job needs now

If AI exposed the mismatch, the next question is what the interview should measure instead. My previous essay argued that AI can write the code, but someone still has to own the decision. That means spotting the change that's plausible but wrong, asking the question that decides the answer, carrying the context nobody wrote down, judging whether a system can afford to be wrong. Almost none of that shows up in a recall checklist. And the parts of my old format that did test production (write this function, implement this structure) are increasingly the parts an assistant can do in seconds, in an interview as easily as at work.

Then, while preparing this, I found an interview framework I'd once asked an assistant to adapt for the "AI era". It still gave AI-era skills a twentieth of the weight. And its own "spot the subtle bug" question said the code had no bug, then offered a fix for one. Plausible, confident and wrong, in the very document meant to check whether candidates can catch that kind of thing, and it had been sitting in my own files.

## The fundamentals objection

There's an obvious objection, and I half believe it myself. Over the last two years I've noticed what looks like a drop in fundamentals among junior and mid-level developers. I'm speculating about the cause. AI is the tempting explanation, but the hiring market, the way people learned during the pandemic, or simply who happened to apply could all explain it. If fundamentals really are slipping, maybe recall questions are catching something real, and I'm about to argue for removing the one filter that works.

I don't think fundamentals matter less. They're what judgment is built on. You can't find a race condition in an AI-written cache without understanding concurrency, or notice that a generated query will fall over at scale without knowing how the database runs it. The mistake is testing them as trivia, because trivia is exactly what an assistant can supply. Test them in use, through review and explanation.

## The interview I'd run now

> I'm trying to find out whether they can take responsibility for the output of an AI-assisted process, which means understanding it, questioning it, checking it and standing behind the result.
{: .pullquote}

Interviews where candidates work with AI, or review its output, aren't a new idea, and some teams already run them. The exercise matters less than what it's meant to establish. I'm not trying to find out whether someone can beat the AI, or even whether they can find a bug. I'm trying to find out whether they can take responsibility for the output of an AI-assisted process, which means understanding it, questioning it, checking it and standing behind the result. My last essay argued that the question decides the answer, and that holds for interviewers too. The biggest decision is no longer which coding problem to give, but which question will produce evidence of the judgment the job actually requires.

I'd keep the hour. It isn't enough, but it's the constraint most of us actually have, and a format that routinely needs three hours won't survive contact with scheduling. Here's the structure I'd try.

<figure class="diagram">
<svg viewBox="0 0 560 150" role="img" aria-label="The sixty minute interview split into six blocks: 5 minutes introduction, 15 on a real project, 20 reviewing an AI-written pull request, 12 on design, 5 on AI use, 3 for questions." xmlns="http://www.w3.org/2000/svg" font-family="inherit">
<text x="20" y="24" font-size="13" font-weight="700" fill="currentColor" opacity="0.7">THE HOUR, IN MINUTES</text>
<rect x="20.0" y="40" width="43.3" height="52" fill="#e8dccb" stroke="var(--bg)" stroke-width="3"/>
<rect x="63.3" y="40" width="130.0" height="52" fill="#c1562c" stroke="var(--bg)" stroke-width="3"/>
<rect x="193.3" y="40" width="173.3" height="52" fill="#9e4323" stroke="var(--bg)" stroke-width="3"/>
<rect x="366.7" y="40" width="104.0" height="52" fill="#c1562c" stroke="var(--bg)" stroke-width="3"/>
<rect x="470.7" y="40" width="43.3" height="52" fill="#e8dccb" stroke="var(--bg)" stroke-width="3"/>
<rect x="514.0" y="40" width="26.0" height="52" fill="#e8dccb" stroke="var(--bg)" stroke-width="3"/>
<text x="41.7" y="72" fill="#2a221c" font-weight="700" font-size="16" text-anchor="middle">5</text>
<text x="128.3" y="72" fill="#fff" font-weight="700" font-size="16" text-anchor="middle">15</text>
<text x="280.0" y="72" fill="#fff" font-weight="700" font-size="16" text-anchor="middle">20</text>
<text x="418.7" y="72" fill="#fff" font-weight="700" font-size="16" text-anchor="middle">12</text>
<text x="492.3" y="72" fill="#2a221c" font-weight="700" font-size="16" text-anchor="middle">5</text>
<text x="527.0" y="72" fill="#2a221c" font-weight="700" font-size="16" text-anchor="middle">3</text>
<text x="41.7" y="112" font-size="12" text-anchor="middle" fill="currentColor" opacity="0.8">Intro</text>
<text x="128.3" y="130" font-size="12" text-anchor="middle" fill="currentColor" opacity="0.8">Real project</text>
<text x="280.0" y="112" font-size="12" text-anchor="middle" fill="currentColor" opacity="0.8">Review an AI-written PR</text>
<text x="418.7" y="130" font-size="12" text-anchor="middle" fill="currentColor" opacity="0.8">Design + toggle</text>
<text x="492.3" y="112" font-size="12" text-anchor="middle" fill="currentColor" opacity="0.8">AI use</text>
<text x="527.0" y="130" font-size="12" text-anchor="middle" fill="currentColor" opacity="0.8">Q&amp;A</text>
</svg>
<figcaption>Where the sixty minutes go. Over half is spent on ownership and investigation, not recall.</figcaption>
</figure>

**Five minutes of introduction.**

**Fifteen minutes on a real project.** "Walk me through a system you owned. Why is it built that way? What would you change? What broke, and how did you find out?" In my notes this was the strongest signal by far, and it's where ownership is easiest to examine through follow-up questions. It's also where a pattern older than AI shows up: impressive work on the CV, with answers suggesting it was done mechanically.

**Twenty minutes reviewing an AI-written pull request, with AI tools allowed.** Thirty to fifty lines, a short note on what the code should do, and one flaw that looks fine at first glance. Say, a cache that checks for a value, removes it if stale, then fetches again: correct in a single thread, a stampede under load. Better still would be a real PR from our own history, anonymised, where a flaw like that actually shipped or nearly did. It feels less like a trick because it isn't one. I'd provide a shared editor with an assistant next to the code, so nobody depends on their own tooling, and watch what they ask it, what they check, and whether they accept its first answer.

A planted bug rewards whoever hit that exact bug last month, so the point isn't whether they recognise mine. It's whether they can turn uncertainty into an investigation. "I don't trust this path yet: are these operations atomic, and what happens with concurrent requests?" shows the skill before anything is found. Spotting the race instantly because you fixed one last week shows less than it looks. If they're stuck after ten minutes, I'd ask "what happens when two requests arrive at the same time?" Reasoning from there still counts, and it separates "didn't spot it" from "can't reason about it".

**Twelve minutes on design, with a twist.** "We're going to ship this behind a feature toggle. What would you verify before that, and what can't a toggle protect you from?" Toggles and metrics are a fine default for systems that are cheap to get wrong. What I want to know is whether the candidate can tell when this isn't one of them. I'd also listen for the clarifying questions they ask before they start answering.

**Five minutes on how they actually use AI.** "Tell me about the last time an assistant gave you wrong code. How did you notice?" In my old notes, the one candidate who mentioned an AI tool got credit for it as a sign of quick learning, and nobody asked how they used it. Using an assistant is increasingly the baseline; the interesting part is knowing when not to believe it.

**Three minutes for their questions.**

The two levels test different things, not easier and harder versions of the same thing. For seniors it's judgment under ambiguity: a larger PR where the flaw only shows with context, and more time on design. For juniors it's comprehension and how they take a correction, which I come back to below.

## Replacing the feeling

The hour still forces quick feedback, so I'd give the feeling some structure. Four signals, and for each one a line of evidence written down during the interview. No scores.

1. **Ownership:** do they own their past work, or describe it from a distance? *Weak: can't say why it's built that way. Strong: explains the trade-offs, including the ones they got wrong.*
2. **Investigation:** how do they handle code they don't trust yet? *Weak: reads it once and approves, or hunts for my bug. Strong: names what they'd need to be sure of, and checks it.*
3. **Asking the right question:** what did they ask before they answered? *Weak: jumps straight to a solution. Strong: first asks about load, failure modes or what "correct" means here.*
4. **Calibrated trust in AI:** do they know when to doubt it? *Weak: pastes its output without reading it. Strong: questions the assistant on edge cases and checks its answers against the language and framework rules.*

The verdict gets written within ten minutes, from the evidence lines rather than from memory. I'd rather have structured judgment than a number pretending to be a measurement. It's still fast, but it's no longer just a feeling.

> AI-generated prep deserves the same review as an AI-generated PR.
{: .pullquote}

The same lesson applies to the interviewer. I used an assistant to turn CVs into profiles and interview plans, and my terse notes into written feedback. It was useful, and it caught gaps, like a planned question I'd never asked. It also inflated CVs, describing one candidate as a multi-stack architect when my notes showed they couldn't name a basic resilience pattern, and added feedback details my notes didn't contain. AI-generated prep deserves the same review as an AI-generated PR. That's the whole point of this essay, turned on the interviewer.

The tempting next step is to let the AI run the interview too. It can ask, follow up, transcribe and draft a verdict, and for a first screen it might be more consistent than a tired interviewer late in the day. What it can't do is own the hire. Someone has to stand behind it when it goes wrong, or when a rejected candidate asks why. And with the candidate's assistant on one side and the interviewer's on the other, the interview risks becoming two models gaming the same proxy. So the interviewer's job shifts the same way the engineer's does, from asking every question to reviewing an AI-assisted process and owning the result.

## The junior problem

My last essay ended on the idea that understanding still has to get built somehow. For juniors, that's where it bites. If AI does the work they used to learn on, where does judgment come from? Three of my four written feedbacks made the hire conditional on someone having time to mentor. The junior track in that framework still focused on writing simple working code, the exact skill being automated. We may be filtering juniors on the part of the job that's disappearing and ignoring the part they'll need.

For juniors the test shifts. Nobody expects them to predict a production stampede. They need to show that generated code isn't a black box to them, so their review block is reading comprehension: "walk me through what line 14 does to the state when this loop runs twice", "what does this return if the list is empty?" Somewhere in the walkthrough I'd correct them once and watch what they do with it. Do they defend the wrong answer, quietly accept it, or use it to re-read the next line? When three of my four verdicts already depended on someone having time to mentor, how a candidate takes a correction may be one of the most useful junior signals of all.

Code comprehension is a prerequisite, not the destination. Judgment comes from what follows, from seeing causes, watching things fail, carrying context, making decisions and living with the consequences. An interview can check the prerequisite. Whether the rest still gets built, once AI takes over the low-stakes work juniors used to learn on, I honestly don't know. Teams may have to create those learning environments on purpose. A junior who can't read what the AI wrote has no reliable foundation for it. One who can only prompt for more of it is the risk.

## What I don't know

Plenty. I haven't tried this format on a real candidate. I don't know whether twenty minutes is enough to investigate a planted flaw under interview pressure, even with the hint. I don't know how the hires I recommended actually performed, which is the only real test of which signals mattered. And I don't know how interviews are run today by the teams who've had to adapt in practice. The format also leans toward my side of the split from the last essay, systems that are expensive to get wrong. A team building prototypes it can throw away might reasonably weigh speed above investigation.

So I'll end with the question that started this. If you're interviewing engineers now, what's changed in how you do it? Are candidates using AI live? Have you dropped anything, or added anything? I'd like to hear it. Your answers are the evidence this essay is missing.
