---
title: "Dataset"
description: "The official dataset of the challenge"
menu: main
weight: 80
---


**Track 1: Emotional Intelligence**  

1. Train Set

We release a training set in Chinese and English, including 3-turn, 4-turn, and 5-turn dialogues, focusing on emotional dynamics and underlying reasons for emotional changes. The dataset contains approximately 100 hours of audio data, with only questions recorded, while responses are provided in text format for reference. 

- **Emotional Trajectory Detection**: Contains 3, 4, and 5-turn dialogues, where in the final turn users ask the model about their own emotional changes.
- **Emotional Reasoning**: Contains 3, 4, and 5-turn dialogues, where in the final turn users ask the model about the underlying reasons for emotions.
- **Empathy Assessment**: You can use the data from task2 and task3, and use open-source TTS tools to synthesize response audio for training. Note that it is prohibited to use commercial models to synthesize response audio.

2. dev set

We release a development set, including task 1, task 2, task 3(selected from task 2 and task 3). 

- **Emotional Trajectory Detection**: Contains 3, 4, and 5-turn dialogues, used to evaluate the model's response text score.
- **Emotional Reasoning**: Contains 3, 4, and 5-turn dialogues, used to evaluate the model's response text score.
- **Empathy Assessment**: Contains 3, 4, and 5-turn dialogues, used to evaluate the model's response audio score.

<!-- You can download it via [Google Drive](https://drive.google.com/drive/folders/1mXjQi_uPPDhwhbvxKsMCqNMtm89ab6Zn?usp=sharing). If that's not convenient, you can use the [123 Cloud](https://www.123912.com/s/QlDejv-h7anA) for downloading. -->

**Track 2: Full-Duplex Interaction**  

1. Train Set

Our training set covers both interruption and rejection scenarios, including subsets from eight tasks other than Speech Directed at Others. It comprises over 107 hours of real human recordings in both Chinese and English, featuring more than 100 speakers.

2. Dev set

We release a development set covering the two major scenarios—interruption and rejection. Each of these scenarios consists of nine sub-tasks, and each sub-task includes 200 test samples (100 in Chinese and 100 in English).



- The dataset is designed to cover the core scenarios of emotional intelligence and full-duplex interaction, ensuring diversity and authenticity to comprehensively evaluate the performance of participating models. It includes dialogue scenes in both Chinese and English, covering a wide range of emotional and conversational contexts. 
- For each task in the challenge, we will provide a dedicated set of real-world recorded speech data to serve as the train set and test set. These datasets are collected from natural, human-human or human-machine interactions to ensure authenticity and cover diverse scenarios aligned with the respective tasks.
- The data will be sent via the registered email.
