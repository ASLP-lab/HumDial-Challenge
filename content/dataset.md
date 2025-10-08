---
title: "Dataset"
description: "The official dataset of the challenge"
menu: main
weight: 80
---


**Track 1: Emotional Intelligence**  

1. Train Set

We release a training set consisting of both Chinese and English dialogues, each containing 3-turn, 4-turn, and 5-turn conversations, focusing on emotional dynamics and underlying reasons for emotional changes. The dataset contains approximately 100 hours of audio data, with only questions recorded, while responses are provided in text format for reference. The data structure is as follows:

train/
├── zh/
│   ├── task1/
│   ├── task2_3/
│   ├── task2_4/
│   ├── task2_5/
│   ├── task3_3/
│   ├── task3_4/
│   ├── task3_5/
│   ├── task1.jsonl
│   ├── task2_3.jsonl
│   ├── task2_4.jsonl
│   ├── task2_5.jsonl
│   ├── task3_3.jsonl
│   ├── task3_4.jsonl
│   └── task3_5.jsonl
└── en/
    ├── task1/
    ├── task2_3/
    ├── task2_4/
    ├── task2_5/
    ├── task3_3/
    ├── task3_4/
    ├── task3_5/
    ├── task1.jsonl
    ├── task2_3.jsonl
    ├── task2_4.jsonl
    ├── task2_5.jsonl
    ├── task3_3.jsonl
    ├── task3_4.jsonl
    └── task3_5.jsonl

task1: 1-turn dialogues, judging users' emotional status, not participating in evaluation

task2: Contains 3, 4, and 5-turn dialogues, where in the final turn users ask the model about their own emotional changes

task3: Contains 3, 4, and 5-turn dialogues, where in the final turn users ask the model about the underlying reasons for emotions


2. dev set

我们放出一个开发集，包含任务二、任务三、任务四（从任务三和任务四中挑取）

task2: Contains 3, 4, and 5-turn dialogues, 用于评估模型的回答文本得分

task3: Contains 3, 4, and 5-turn dialogues, 用于评估模型的回答文本得分

task4: Contains 3, 4, and 5-turn dialogues, 用于评估模型的回答音频得分

dev/
├── zh/
│   ├── task2/
│   ├── task3/
│   ├── task4/
│   ├── task2.jsonl
│   ├── task3.jsonl
│   ├── task4.jsonl
└── en/
    ├── task2/
    ├── task3/
    ├── task4/
    ├── task2.jsonl
    ├── task3.jsonl
    └── task4.jsonl

<!-- You can download it via [Google Drive](https://drive.google.com/drive/folders/1mXjQi_uPPDhwhbvxKsMCqNMtm89ab6Zn?usp=sharing). If that's not convenient, you can use the [123 Cloud](https://www.123912.com/s/QlDejv-h7anA) for downloading. -->

**Track 2: Full-Duplex Interaction**  
We will provide multi-turn Chinese and English dialogue data from real recordings, covering typical scenarios such as speech interruptions and recognition rejection. Accompanied by strict annotations, this dataset will be used to comprehensively evaluate participating systems in three core aspects: response speed, behavioral rationality, and linguistic naturalness.

- The dataset is designed to cover the core scenarios of emotional intelligence and full-duplex interaction, ensuring diversity and authenticity to comprehensively evaluate the performance of participating models. It includes dialogue scenes in both Chinese and English, covering a wide range of emotional and conversational contexts. 
- For each task in the challenge, we will provide a dedicated set of real-world recorded speech data to serve as the train set and test set. These datasets are collected from natural, human-human or human-machine interactions to ensure authenticity and cover diverse scenarios aligned with the respective tasks.
- In addition, we will release the complete data generation pipeline, enabling participants to reproduce or extend the synthetic dataset if desired. Participants are also free to use any publicly available speech or text datasets to train or fine-tune their models, provided they do not use any private or unauthorized data sources.
- All participants are strictly prohibited from using any part of the official test set for training or parameter tuning. The use of test labels or any test data leakage will result in disqualification.