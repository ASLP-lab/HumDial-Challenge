---
title: "Dataset"
description: "The official dataset of the challenge"
menu: main
weight: 80
---

- The dataset is designed to cover the core scenarios of emotional intelligence and full-duplex interaction, ensuring diversity and authenticity to comprehensively evaluate the performance of participating models. It includes dialogue scenes in both Chinese and English, covering a wide range of emotional and conversational contexts. For each task in the challenge, we will provide a dedicated set of real-world recorded speech data to serve as the development (Dev) set and test (Test) set. These datasets are collected from natural, human-human or human-machine interactions to ensure authenticity and cover diverse scenarios aligned with the respective tasks.
- To support model training, a synthetic training dataset will be released. This dataset is generated through a standardized data synthesis pipeline, which includes: Text generation from predefined task prompts, Emotion and dialogue context conditioning, Speech synthesis using state-of-the-art TTS models with controllable style and prosody, Augmentation with background noise, reverberation, and multi-speaker conditions where appropriate.
- In addition, we will release the complete data generation pipeline, enabling participants to reproduce or extend the synthetic dataset if desired. Participants are also free to use any publicly available speech or text datasets to train or fine-tune their models, provided they do not use any private or unauthorized data sources.
- All participants are strictly prohibited from using any part of the official test set for training or parameter tuning. The use of test labels or any test data leakage will result in disqualification.
- The dataset will be released as scheduled.