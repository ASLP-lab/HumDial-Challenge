---
title: "Timeline"
weight: 60
description: "Timeline"
---

## Timeline

- **August 20, 2025**: Registration opens
- **September 29, 2025**: Release of training set, validation set, and baseline system
- **November 10, 2025**: Release of test set
- **November 25, 2025**: Submission deadline
- **December 7, 2025**: Deadline for submitting 2-page papers to ICASSP 2026 (invited teams only)
- **January 11, 2026**: Notification of acceptance for 2-page ICASSP 2026 papers
- **January 18, 2026**: Submission of final version of papers
- **May 4–8, 2026**: ICASSP 2026 Conference, Barcelona, Spain


## Official Competition Rules
### 1. Resource Usage Policy

To ensure the fairness, integrity, and transparency of the competition, all participating teams must strictly adhere to the following regulations.

#### 1.1 Resource Definitions
- **Internal Resources**: Official datasets, baseline models, and accompanying documentation directly provided by the organizers.
- **External Resources**: Any resources not provided by the organizers, including but not limited to external data, pre-trained models, open-source libraries, and third-party API services.

#### 1.2 External Resource Usage
**External Data**
- Must be publicly available datasets. This includes any data that researchers or groups can obtain through public channels (e.g., official websites, academic data platforms, open-source communities) via direct download or a standard application process.
- The use of any private, non-public, or access-restricted proprietary datasets is strictly prohibited.

**External Pre-trained Models**
- Must be publicly available, open-source models.
- The use of any open-source pre-trained models available through public channels (such as Hugging Face, GitHub, or official model repositories) is permitted. Submissions must be accompanied by clear version information for all external models used.

#### 1.3 Resource Declaration Requirement
In the final technical report, participating teams must provide a clear and complete list of all resources used (both internal and external), detailing how each was applied.

### 2. Competition Dataset Usage Policy
**Train Set**: Participants may use the official training subset provided.
- **Standard data augmentation techniques** (e.g., adding noise, pitch shifting, speed variation) on the official training set are permitted.
- **Supplementary training** with external public datasets is allowed, provided they are in full compliance with Section 1.2.
- **If generating synthetic data** (e.g., using Text-to-Speech), the underlying model (e.g., the TTS model) must itself be a publicly available, open-source model compliant with Section 1.2.
- **All data augmentation methods**, synthesis processes, and external data sources must be thoroughly documented in the final technical report.

**Dev Set**: May be used for model performance evaluation and debugging.

**Test Set**: The competition leaderboard will be based on model performance on the test set. The organizers will provide a public test set for participants to validate their models. However, the final ranking will be determined by a comprehensive evaluation based on performance on both the public test set and a private (hidden) test set, where results must be successfully reproduced by the organizers.

### 3. Submission Requirements
To ensure fairness and reproducibility, all teams must submit a complete and self-contained submission package that is independently runnable by the specified deadline.

#### 3.1 Submission Package Contents
The submission package must include all of the following:
- **Results File**: The model inference output, formatted as specified (e.g., submission.json).
- **Model Files**: Complete model weights, configuration files, and all necessary dependencies.
- **Docker Image**: A Docker image with a pre-configured environment, supporting one-click inference execution.
- **Technical Documentation**: A detailed README.md file that clearly explains how to use the provided code and model files to reproduce the submitted results.

#### 3.2 Source Code Requirements
- **Reproduction Script**: A one-click startup script (e.g., run.sh) must be provided to execute the complete inference pipeline and generate the final result file(s).

#### 3.3 Docker Image Specifications
- **Environment Consistency**: The Docker image must contain all necessary environments, software libraries, and dependencies to ensure seamless execution in the evaluation environment.
- **One-Click Inference**: The Docker image must contain an executable script that, when run, automatically completes the entire inference process and generates the output file in the specified format.
- **Detailed Guide**: Specific instructions for building, using, and submitting the Docker image will be provided with the release of the baseline implementation.

### 4. Oversight and Interpretation
#### 4.1 Right of Interpretation
The organizers reserve the final right to interpret all rules of this competition. The organizers may adjust or supplement the rules as necessary during the competition, and any changes will be communicated to all teams in a timely manner.

#### 4.2 Fairness and Authenticity Verification
To ensure the integrity of the competition, the organizers reserve the right to audit all submissions. If requested, teams are required to provide further technical details to facilitate this review.

#### 4.3 Handling of Violations
If a team engages in any of the following actions, the organizers reserve the right to unilaterally disqualify the team, revoke any awards, and reclaim all prizes and monetary bonuses:
- The submission contains falsified or fabricated information.
- A serious violation of competition rules or submission requirements has occurred.
- Engaging in any form of cheating.
