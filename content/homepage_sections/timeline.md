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

1. **Emotional Intelligence:**: Comming soon
<!-- The competition provides a baseline system built upon [OpenS2S](https://github.com/CASIA-LM/OpenS2S).This baseline serves as a reproducible and extensible starting point, helping participants better benchmark their systems and ensuring fair comparison across different approaches. -->
2. **Full-Duplex Interaction**: The competition provides a baseline system built upon [Easy Turn](https://github.com/ASLP-lab/Easy-Turn) and [OSUM-EChat](https://github.com/ASLP-lab/OSUM/tree/main/OSUM-EChat).This baseline serves as a reproducible and extensible starting point, helping participants better benchmark their systems and ensuring fair comparison across different approaches.

## Guidelines for participants

### 1. General Principles for Resource Usage

To ensure the fairness, impartiality and transparency of the competition, all participating teams must strictly abide by the following resource usage regulations.

#### 1.1 Resource Definition
- **Internal Resources**: Official datasets, baseline models and related documentation directly provided by the organizers.
- **External Resources**: Any resources not provided by the organizers, including but not limited to external data, pre-trained models, open-source tool libraries and third-party API services.

#### 1.2 External Resource Usage Policy
**External Data**
- **Core Requirements**: Must be publicly available datasets. Any researcher or group can directly download or obtain the data through standard application processes via public, free channels (such as official websites, academic data platforms, open-source communities).
- **Strictly Prohibited**: The use of any private, non-public or access-restricted proprietary datasets is strictly prohibited.

**External Pre-trained Models**
- **Core Requirements**: Must be publicly available open-source models.
- **Permitted Scope**: The use of any open-source pre-trained models available through public channels (such as Hugging Face, GitHub, model official websites, etc.) is allowed, along with clear version information.

#### 1.3 Declaration Obligation
Participating teams must clearly and completely declare all used resources and usage methods (including internal and external) in the form of a list in the final technical report.

### 2. Competition Dataset Usage Policy

**Train Set**: Participants may use the official train subset.
- Any form of regular data augmentation based on the official train set is allowed (such as adding noise, pitch shifting, speed variation, etc.).
- The use of external public datasets that fully comply with the regulations in Section 1.2 is permitted for supplementary training.
- If new data is synthesized through models (for example, using TTS technology to generate speech), the synthesis model (such as TTS model) itself must be a publicly available open-source model that complies with Section 1.2.
- All data augmentation and synthesis methods, processes and external data sources used must be fully explained in the final technical report.

**Dev Set**: Can be used for model performance evaluation and debugging.

**Test Set**: Competition rankings will be based on model performance on the test set. The organizers will provide a public test set for participants to verify, but the final ranking will be based on the organizers' combined results of the public test set and successfully reproduced results on the hidden test set.

### 3. Submission Requirements

To ensure the fairness and reproducibility of the competition, all participating teams must submit a complete, independently runnable final deliverable package within the specified time.

#### 3.1 Submission Content List
The submission package of participating teams must include all of the following contents:
- **Final Results File**: Model inference result file generated in the specified format (for example, submission.json).
- **Model Files**: Complete model weights, configuration files and related dependencies.
- **Docker Image**: A Docker image with configured environment that supports one-click inference execution.
- **Technical Documentation**: A detailed README.md document clearly explaining how to use the provided code and model files to reproduce the competition results.

#### 3.2 Source Code Requirements
- **Reproduction Script**: A one-click startup script (such as run.sh) must be provided to execute the complete inference process and generate the final result file.

#### 3.3 Docker Image Specifications
- **Environment Consistency**: The Docker image must contain all necessary environments, software libraries and dependencies to ensure smooth operation in the evaluation environment.
- **One-click Inference**: The image must contain an executable script that can automatically complete all inference steps and output the result file as required when called.
- **Detailed Guide**: Specific specifications for building, using and submitting Docker images will be provided uniformly after the baseline implementation is released.

### 4. Competition Supervision and Right of Interpretation

#### 4.1 Right of Interpretation
The final right of interpretation of all rules of this competition belongs to the organizers. During the competition, the organizers have the right to adjust or supplement the rules according to actual circumstances, and will notify all participating teams in a timely manner.

#### 4.2 Fairness and Authenticity Verification
To ensure the fairness and impartiality of the competition, the organizers reserve the right to review participating works. If necessary, the organizers have the right to request participating teams to provide more detailed technical details, and participating teams must cooperate.

#### 4.3 Violation Handling
If participating teams exhibit any of the following behaviors, the organizers have the right to unilaterally cancel their participation qualification, winning qualification and recover bonuses and prizes:
- Submitted works contain false or forged information.
- Serious violations of competition rules or submission requirements.
- Use of any form of cheating in the competition.
