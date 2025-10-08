---
title: "Track 1: Emotion Intelligence"
description: "The Emotion Intelligence Track aims to evaluate the emotional competence of spoken dialogue systems across five critical dimensions. These dimensions capture how well a system can perceive, interpret, express, and respond to human emotions in interactive scenarios"
menu: task1
weight: 80
---

## Challenge Tasks

- **Task 1**: Emotion Recognition - Identify both surface and deep emotions expressed by users
- **Task 2**: Emotional Trajectory Summary - Accurately identify and concisely summarize users' emotional changes throughout multi-turn conversations
- **Task 3**: Comprehensive Understanding and Insight - Evaluate whether models can synthesize all conversation information to provide profound explanations
- **Task 4**: Multimodal Empathy Assessment - Assess textual and audio empathy as well as naturalness
- **Task 5**: Emotional Voice Synthesis - Generate natural speech with specified emotions

Among them, task 1 and task 5 are not included in the evaluation ranking and no validation sets are set for them.

## Evaluation Metrics

### Task 2: Emotional Trajectory Summary

- **Accuracy_Completeness**: Evaluate whether the model strictly and precisely matches and describes all emotion tags present in the conversation history, and accurately reconstructs the full emotional trajectory.  
  *Score: 1, 3, or 5*

- **Depth_Granularity**: Based strictly on the conversation history, does the model go beyond labeling emotions to describe the intensity and dynamics of emotional shifts in an efficient manner?  
  *Score: 1, 3, or 5*

- **Added_Value**: Does the summary skillfully link abstract emotion tags to concrete events in the conversation, making it feel highly personalized and easily digestible?  
  *Score: 1, 3, or 5*

### Task 3: Comprehensive Understanding and Insight

- **Information_Integration**: Does the response utilize information from **multiple turns**, not just the last one? Does it demonstrate an understanding of the **evolution** of the topic?  
  *Score: 1, 3, or 5*

- **Insight_RootCause**: Does the response go beyond surface-level facts to distill deeper, **unspoken** psychological reasons (e.g., underlying motivations, cognitive conflicts, hidden emotional needs)?  
  *Score: 1, 3, or 5*

- **Clarity_Logic**: Is the explanation clear, logical, easy to understand, and does it provide a complete and justified chain of reasoning?  
  *Score: 1, 3, or 5*

### Task 4: Multimodal Empathy Assessment

- **textual_empathy_insight**: Does the text demonstrate a deep, synthesized understanding of the entire conversation, or is it a shallow summary?  
  *Score: 1, 2, 3, 4 or 5*

- **vocal_empathy_congruence**: Does the audio's emotion perfectly match the text's empathetic intent? This is about emotional delivery, not technical quality.  
  *Score: 1, 2, 3, 4 or 5*

- **audio_quality_naturalness**: How technically sound and human-like is the audio? This is about clarity, fluency, and realism.  
  *Score: 1, 2, 3, 4 or 5*
