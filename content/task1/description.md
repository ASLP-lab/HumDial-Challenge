---
title: "Track 1: Emotion Intelligence"
description: "The Emotion Intelligence Track aims to evaluate the emotional competence of spoken dialogue systems across five critical dimensions. These dimensions capture how well a system can perceive, interpret, express, and respond to human emotions in interactive scenarios"
menu: task1
weight: 80
---


### Challenge Tasks

- **Task 1**: Emotional Trajectory Detection - Accurately identify and concisely summarize users' emotional changes throughout multi-turn conversations.
- **Task 2**: Emotional Reasoning - Evaluate whether models can synthesize all conversation information to provide profound explanations.
- **Task 3**: Empathy Assessment - Assess textual and audio empathy as well as naturalness.

The final ranking will be determined based on the comprehensive score of the above three core tasks, and the specific weights of each task will be announced in subsequent stages.

To comprehensively evaluate model performance in specific dimensions, the following supplementary tests will also be conducted:
- **Task 4**: Emotional Recognition Capability - Identify users' surface and deep emotional expressions.
- **Task 5**: Explicit Emotional Instruction Generation Capability - Generate natural speech expressions according to specified emotions.

> **Note**: The evaluation results of supplementary tasks are only used for academic analysis and reference, and will not be counted toward the final ranking score.

### Evaluation Framework

All submitted models will undergo automated evaluation on the test set, using a combination of large language models as judges (LLM-as-a-Judge) and human scoring.

- **Scoring Judge Model**: Qwen3-Omni-30B-A3B-Instruct will be used as the automatic scoring model for the emotional trajectory detection and emotional reasoning tasks. The empathy assessment task will combine scores from Qwen3-Omni-30B-A3B-Instruct and/or other models, along with human scoring to derive the final results.
- **Scoping Prompt**: For detailed scoring prompt design specifications and implementation details, please refer to our provided Git repository.

<!-- ### Evaluation Tasks and Datasets

- **Emotional Trajectory Detection Task & Emotional Reasoning Task**: Will be evaluated on their respective independent test sets.
- **Empathy Assessment Task**: Its test set is sampled from the data of the above two tasks. -->


### Evaluation Metrics

#### Task 1: Emotional Trajectory Summary
- **Accuracy_Completeness**: Evaluate whether the model strictly and precisely matches and describes all emotion tags present in the conversation history, and accurately reconstructs the full emotional trajectory.  
  *Score: 1, 3, or 5*
- **Depth_Granularity**: Based strictly on the conversation history, does the model go beyond labeling emotions to describe the intensity and dynamics of emotional shifts in an efficient manner?  
  *Score: 1, 3, or 5*
- **Added_Value**: Does the summary skillfully link abstract emotion tags to concrete events in the conversation, making it feel highly personalized and easily digestible?  
  *Score: 1, 3, or 5*

#### Task 2: Emotional Reasoning Task
- **Information_Integration**: Does the response utilize information from multiple turns, not just the last one? Does it demonstrate an understanding of the evolution of the topic?  
  *Score: 1, 3, or 5*
- **Insight_RootCause**: Does the response go beyond surface-level facts to distill deeper, unspoken psychological reasons (e.g., underlying motivations, cognitive conflicts, hidden emotional needs)?  
  *Score: 1, 3, or 5*
- **Clarity_Logic**: Is the explanation clear, logical, easy to understand, and does it provide a complete and justified chain of reasoning?  
  *Score: 1, 3, or 5*

#### Task 3: Empathy Assessment Task
- **textual_empathy_insight**: Does the text demonstrate a deep, synthesized understanding of the entire conversation, or is it a shallow summary?  
  *Score: 1, 2, 3, 4 or 5*
- **vocal_empathy_congruence**: Does the audio's emotion perfectly match the text's empathetic intent? This is about emotional delivery, not technical quality.  
  *Score: 1, 2, 3, 4 or 5*
- **audio_quality_naturalness**: How technically sound and human-like is the audio? This is about clarity, fluency, and realism.  
  *Score: 1, 2, 3, 4 or 5*
