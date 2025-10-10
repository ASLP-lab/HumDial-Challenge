---
title: "Track 2: Full-Duplex Interaction"
description: "Natural human conversation is characterized by the ability to interrupt, pause, or respond at any time, rather than adhering to rigid turn-taking. This track evaluates a speech dialogue system’s capacity to react swiftly, stop appropriately, and respond naturally in scenarios involving interruptions, follow-up questions, topic shifts, or background noise. Annotated real-world multi-turn Chinese and English dialogue datasets will be provided, covering typical interruption and rejection scenarios. Systems will be comprehensively assessed based on response speed, behavioral rationality. This track aims to advance voice dialogue systems toward human-like communication."
menu: task2
weight: 80
---

### Challenge Tasks

#### **1. Interruption Scenarios**:
- **Follow-up Questions**: The user poses a follow-up question based on the model’s previous response, interrupting the ongoing output. The model should promptly address the user’s follow-up inquiry.
- **Negation / Dissatisfaction**: The user expresses dissatisfaction or disagreement with the model’s response using negative statements, interrupting the model mid-sentence. The model should appropriately react to the user’s negation or dissatisfaction in a timely manner.
- **Repetition Requests**: The user interrupts to request a repetition of the model’s previous response due to inaudibility or misunderstanding. The model should promptly respond to the user’s request for repetition.
- **Topic Switching**: The user initiates a new topic, interrupting the model’s current answer. The model should smoothly shift to the new topic as requested.
- **Silence / Termination**: The user asks the model to stop speaking. The model should immediately cease its response and express readiness to resume the dialogue when prompted.

#### 2. **Rejection Scenarios**:
- **User Real-time Backchannels**: During the model’s response, the user may produce short interjections such as “uh-huh” or “yeah.” The model should not interrupt its ongoing utterance upon detecting such backchannels.
- **Pause Handling**: The user may pause mid-sentence due to thinking or hesitation, leading to incomplete semantics. The model should wait until the user’s intent is fully expressed before responding.
- **Third-party Speech**: The model must detect and reject speech from other background speakers, ensuring interaction only with the genuine user.
- **Speech Directed at Others**: During interaction with the model, the user may suddenly turn to converse with another person (often on a different topic). The model should detect and appropriately reject such utterances.

### Evaluation Metrics

For evaluation, we largely follow [Full-Duplex-Bench v1.5](https://github.com/DanielLin94144/Full-Duplex-Bench), while introducing additional metrics to further assess full-duplex capability. 

For **interruption** scenarios, we evaluate the response rate (corresponding to the **RESPOND** score in [Full-Duplex-Bench v1.5](https://github.com/DanielLin94144/Full-Duplex-Bench)), as well as two latency metrics in [Full-Duplex-Bench v1.5](https://github.com/DanielLin94144/Full-Duplex-Bench) — the **stop latency** (how quickly the model halts its current response upon interruption) and the **response latency** (how quickly it begins responding to the new query). 

For **rejection** scenarios, we measure the rejection rate (corresponding to the **RESUME** score in [Full-Duplex-Bench v1.5](https://github.com/DanielLin94144/Full-Duplex-Bench)) and the **early interrupt rate**, assessing the model’s ability to correctly ignore backchannels, incomplete utterances caused by pauses, background or external speech, and conversations directed at others. Additionally, we introduce **first response delay** to evaluate the overall responsiveness of the model.


### Dataset

- The dataset is designed to cover the core scenarios of full-duplex interaction, ensuring diversity and authenticity to comprehensively evaluate the performance of participating models. It includes dialogue scenes in both Chinese and English. 
- For each task in the challenge, we will provide a dedicated set of real-world recorded speech data to serve as the train set, dev set and test set.
- The data will be sent via the registered email.

#### 1. Train Set

Our training set covers both interruption and rejection scenarios, including subsets from eight tasks （**Negation/Dissatisfaction, Follow-up Questions, Repetition Requests, Topic Switching, Silence/Termination, Pause Handling, User Real-time Backchannels, Third-Party Speech**）. It comprises over 107 hours of real human recordings in both Chinese and English, featuring more than 100 speakers.

#### 2. Dev set

We release a development set covering the two major scenarios—interruption and rejection. Each of these scenarios consists of nine sub-tasks (**Negation/Dissatisfaction, Follow-up Questions, Repetition Requests, Topic Switching, Silence/Termination, Pause Handling, User Real-time Backchannels, Third-Party Speech, Speech Directed at Others**), and each sub-task includes 200 test samples (100 in Chinese and 100 in English).


### Baseline

The competition provides a baseline system built upon [Easy Turn](https://github.com/ASLP-lab/Easy-Turn) and [OSUM-EChat](https://github.com/ASLP-lab/OSUM).This baseline serves as a reproducible and extensible starting point, helping participants better benchmark their systems and ensuring fair comparison across different approaches.

We enable [OSUM-EChat](https://github.com/ASLP-lab/OSUM) with full-duplex capability by integrating it with [Easy Turn](https://github.com/ASLP-lab/Easy-Turn). For our baseline, we fine-tune the Easy Turn model using only the training set. You can refer to Easy Turn to generate data in the required format for the baseline and then perform fine-tuning.