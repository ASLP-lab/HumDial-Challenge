---
title: "Timeline"
weight: 60
description: "Timeline"
---

## Timeline

- **August 20, 2025**: Registration opens
- **September 29, 2025**: Release of training set, validation set, and baseline system(delay for a few days)
- **November 10, 2025**: Release of test set
- **November 25, 2025**: Submission deadline
- **December 7, 2025**: Deadline for submitting 2-page papers to ICASSP 2026 (invited teams only)
- **January 11, 2026**: Notification of acceptance for 2-page ICASSP 2026 papers
- **January 18, 2026**: Submission of final version of papers
- **May 4–8, 2026**: ICASSP 2026 Conference, Barcelona, Spain

## Baseline

1. **Emotional Intelligence:**: The competition provides a baseline system built upon [OpenS2S](https://github.com/CASIA-LM/OpenS2S).This baseline serves as a reproducible and extensible starting point, helping participants better benchmark their systems and ensuring fair comparison across different approaches.

## Guidelines for participants
1. **External Resource Usage**
   - **Permitted Scope**: For both Track I and Track II, participants are allowed to use external datasets and pre-trained models, including but not limited to speech foundation models and large language models (LLMs).
   - **Openness Requirement**: Any external resources used must be freely available to all research communities.
   - **Declaration Obligation**: Participants must clearly and completely list all external resources used and their sources in the final system report.

2. **Dataset Usage Guidelines**
   - **Training Data**: Participants may use the officially provided training subset, or any publicly available open-source datasets. When using any non-official datasets, such as synthetic datasets, the source must be clearly indicated and explicitly stated in the final system report.
   - **Development Data**: The development set may only be used for model performance evaluation and debugging.
   - **Evaluation Data**: Any form of unauthorized use of evaluation set data is strictly prohibited. This includes, but is not limited to, using evaluation data for any form of model training, fine-tuning, or parameter tuning. Violation will result in disqualification.
   - For more detailed information about datasets, please refer to the dataset description page.

3. **Model and Inference Requirements**
   Participants are free to choose any pre-trained model or modeling technique, but the final submitted model must meet the following two mandatory conditions:
   - **Offline Inference**: The inference process must run independently without an internet connection.
   - **Hardware Limitation**: The entire inference process must be able to run in a server environment with a single GPU with no more than 48 GB of memory.

4. **Submission Requirements**
   - **Deliverables**: Participants must submit a complete set of system deliverables to ensure reproducibility of results.
   - **Submission Content**: Expected to include final results, model files, and a Docker image that supports one-click inference execution.
   - **Detailed Guidelines**: Specific submission specifications and operational procedures will be provided after the baseline implementation is released.

5. **Final Interpretation**
   The right of final interpretation of the competition rules belongs to the organizers. In special circumstances, the organizers will coordinate and decide according to the specific situation.
