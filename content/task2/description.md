---
title: "Track 2: Full-Duplex Interaction"
description: "Natural human conversation is characterized by the ability to interrupt, pause, or respond at any time, rather than adhering to rigid turn-taking. This track evaluates a speech dialogue system’s capacity to react swiftly, stop appropriately, and respond naturally in scenarios involving interruptions, follow-up questions, topic shifts, or background noise. Annotated real-world multi-turn Chinese and English dialogue datasets will be provided, covering typical interruption and rejection scenarios. Systems will be comprehensively assessed based on response speed, behavioral rationality. This track aims to advance voice dialogue systems toward human-like communication."
menu: task2
weight: 80
---


### **1. Interruption Scenarios**:
- **Follow-up Questions**: The user poses a follow-up question based on the model’s previous response, interrupting the ongoing output. The model should promptly address the user’s follow-up inquiry.
- **Negation / Dissatisfaction**: The user expresses dissatisfaction or disagreement with the model’s response using negative statements, interrupting the model mid-sentence. The model should appropriately react to the user’s negation or dissatisfaction in a timely manner.
- **Repetition Requests**: The user interrupts to request a repetition of the model’s previous response due to inaudibility or misunderstanding. The model should promptly respond to the user’s request for repetition.
- **Topic Switching**: The user initiates a new topic, interrupting the model’s current answer. The model should smoothly shift to the new topic as requested.
- **Silence / Termination**: The user asks the model to stop speaking. The model should immediately cease its response and express readiness to resume the dialogue when prompted.
### 2. **Rejection Scenarios**:
- **User Real-time Backchannels**: During the model’s response, the user may produce short interjections such as “uh-huh” or “yeah.” The model should not interrupt its ongoing utterance upon detecting such backchannels.
- **Pause Handling**: The user may pause mid-sentence due to thinking or hesitation, leading to incomplete semantics. The model should wait until the user’s intent is fully expressed before responding.
- **Third-party Speech**: The model must detect and reject speech from other background speakers, ensuring interaction only with the genuine user.
- **Speech Directed at Others**: During interaction with the model, the user may suddenly turn to converse with another person (often on a different topic). The model should detect and appropriately reject such utterances.