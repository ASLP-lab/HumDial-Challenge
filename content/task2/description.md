---
title: "Track 2: Full-Duplex Interaction"
description: "Natural human conversation is characterized by the ability to interrupt, pause, or respond at any time, rather than adhering to rigid turn-taking. This track evaluates a speech dialogue system’s capacity to react swiftly, stop appropriately, and respond naturally in scenarios involving interruptions, follow-up questions, topic shifts, or background noise. Annotated real-world multi-turn Chinese and English dialogue datasets will be provided, covering typical interruption and rejection scenarios. Systems will be comprehensively assessed based on response speed, behavioral rationality. This track aims to advance voice dialogue systems toward human-like communication."
menu: task2
weight: 80
---


### **1. Interruption Scenarios**:
- **Negation/Dissatisfaction**: The user expresses dissatisfaction during the system’s response.
- **Follow-up Questions**: The user asks further questions based on the system’s existing reply.
- **Repetition Requests**: The user asks the system to repeat previous answers.
- **Topic Switching**: The user requests a new topic during the system’s response.
- **Silence/Termination**: The user asks the system to stop speaking or end the dialogue immediately.
### 2. **Rejection Scenarios**:
- **Pause Handling**: The system should wait for the user to complete their utterance.
- **User Real-time Backchannels**: Short backchannels (e.g., “uh-huh”, “yes”) should not trigger interruptions.
- **Third-Party Speech**: The system should reject and filter out sudden speech from other people in the environment.
- **Speech Directed at Others**: The system should ignore user speech directed toward third parties.