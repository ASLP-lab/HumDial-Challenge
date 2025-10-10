---
title: "Track 1: Emotion Intelligence"
description: "The Emotion Intelligence Track aims to evaluate the emotional competence of spoken dialogue systems across five critical dimensions (Task 1 to Task 5). These dimensions capture how well a system can perceive, interpret, express, and respond to human emotions in interactive scenarios"
menu: task1
weight: 80
---


### Challenge Tasks

- **Task 1**: Emotional Trajectory Detection - Evaluate the model's ability to accurately identify and concisely summarize a user's emotional changes throughout a multi-turn conversation.
- **Task 2**: Emotional Reasoning - Evaluate the model's ability to perceive the underlying causes of a user's emotions.
- **Task 3**: Empathy Assessment - Evaluate the model's ability to generate empathetic responses in both text and audio formats.

The final ranking will be determined based on the comprehensive score of the above three core tasks, and the specific weights of each task will be announced in subsequent stages.

To comprehensively evaluate model performance in specific dimensions, the following supplementary tasks will also be conducted:
- **Task 4**: Emotional Recognition Capability - Evaluate the model's ability to recognize user emotions from both semantic and acoustic cues.
- **Task 5**: Speech emotion generation - Evaluate the model's ability to generate speech in specified emotional tone.
> **Note**: The evaluation results of supplementary tasks are only used for academic analysis and reference, and will not be counted toward the final ranking score.

### Evaluation Framework

All submitted models will undergo automated evaluation on an emotion test set, using a combination of large language models as judges (LLM-as-a-Judge) and human scoring.

**Scoring Judge Model**: [Qwen/Qwen3-Omni-30B-A3B-Instruct](https://huggingface.co/Qwen/Qwen3-Omni-30B-A3B-Instruct) will be used as the automatic scoring model for the emotional trajectory detection and emotional reasoning tasks. The empathy assessment task will combine scores from Qwen3-Omni-30B-A3B-Instruct and/or other models, along with human scoring to derive the final results.

### Evaluation Metrics

For detailed design specifications and implementation details of the evaluation prompts, please refer to our provided [Git repository](https://github.com/ASLP-lab/Hum-Dial).

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

### Dataset

- The dataset is designed to cover the core scenarios of emotional intelligence, ensuring diversity and authenticity to comprehensively evaluate the performance of participating models. It includes dialogue scenes in both Chinese and English, covering a wide range of emotional and conversational contexts. 
- For each task in the challenge, we will provide a dedicated set of real-world recorded speech data to serve as the train set, dev set and test set.
- The data will be sent via the registered email.

#### 1. Train Set

We release a training set in Chinese and English, including 3-turn, 4-turn, and 5-turn dialogues, focusing on emotional dynamics and underlying reasons for emotional changes. The dataset contains approximately 100 hours of audio data, with only questions recorded, while responses are provided in text format for reference. 

- **Emotional Trajectory Detection**: Contains 3, 4, and 5-turn dialogues, where in the final turn users ask the model about their own emotional changes.
- **Emotional Reasoning**: Contains 3, 4, and 5-turn dialogues, where in the final turn users ask the model about the underlying reasons for emotions.
- **Empathy Assessment**: You can use the data from task2 and task3, and use open-source TTS tools to synthesize response audio for training. Note that it is prohibited to use commercial models to synthesize response audio.

#### 2. dev set

We release a development set, including task 1, task 2, task 3(selected from task 2 and task 3). 

- **Emotional Trajectory Detection**: Contains 3, 4, and 5-turn dialogues, used to evaluate the model's response text score.
- **Emotional Reasoning**: Contains 3, 4, and 5-turn dialogues, used to evaluate the model's response text score.
- **Empathy Assessment**: Contains 3, 4, and 5-turn dialogues, used to evaluate the model's response audio score.

### Baseline

comming soon