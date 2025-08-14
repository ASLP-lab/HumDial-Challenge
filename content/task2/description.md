---
title: "Task 2: Full-Duplex Interaction"
description: "The Full-Duplex Interaction Track focuses on evaluating a model’s ability to carry out natural, real-time, and uninterrupted speech conversations. Unlike traditional turn-taking systems, full-duplex systems must handle overlapping speech, user interruptions, real-time feedback, and smooth coordination between speaking and listening"
menu: task2
weight: 80
---


- Pause Handling: The model’s ability to detect natural pauses in user speech (e.g., due to thinking or hesitation) and decide whether to take over the turn. Evaluation includes the model’s turn-over rate (TOR) and timing precision.
- Backchanneling (Real-Time Feedback): The model’s ability to insert appropriate short feedback expressions (like “uh-huh”, “I see”, “got it”) during user speech without disrupting the flow. Assessment will consider frequency, emotional relevance, and semantic non-interference, along with human or LLM-based scoring of naturalness and appropriateness.
- Turn-Taking Management: The fluency and synchronization of speaking turns between the user and the model, especially in overlapping or silent periods. Measured by response latency and coherence, with human-in-the-loop or LLM-based evaluations for conversational smoothness.
- User Interruption Handling: The system’s robustness when the user abruptly interrupts (e.g., to correct or insert urgent requests). Includes detecting interruption intent, responding quickly, managing emotional outbursts, and maintaining task consistency post-interruption. Evaluation includes interruption detection rate, response delay, and coherence recovery.
- Rejection and Filtering: The ability to reject or ignore irrelevant speech, such as background noise, third-party dialogue, or self-talk. Special attention will be given to ambiguous scenarios where the model must distinguish whether speech is directed at it.
