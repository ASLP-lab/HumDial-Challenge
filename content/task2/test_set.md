---
title: "Test Set Track 2"
description: ""
menu: task2
weight: 80
---

---

## Test Set Description
The test set (HD-Track2-Test) has been officially released and contains two subsets: one in Chinese and one in English. Each language subset covers two major scenarios—Interruption and Rejection. The dataset consists of **9,100 samples in total**, including:
- **5,000 official test samples**: test-{dialogue_id}.wav (Chinese/English ratio = 1:1)
- **4,100 clean audio files** required for scoring interruption and rejection: clean-{dialogue_id}.wav
- **Note**: The data has been randomly shuffled. The test.wav and clean.wav files sharing the same dialogue_id **are not guaranteed to be paired**.

## Evaluation & Ranking Mechanism
- Detailed scoring rules:  
Please refer to the official evaluation guideline on [GitHub](https://github.com/ASLP-lab/Hum-Dial/tree/main/Full-Duplex_Interaction/evaluation).
    Once the final rankings are determined, we will only announce the results of the **top-ranked teams**.
- Weight assignment:  
To ensure a fair and scientifically rigorous evaluation, the final scoring weights will be dynamically determined. This process will take into account various factors, including the overall performance distribution of all participating models. Therefore, the final weights will be officially announced only after all submissions have been received and the unified evaluation is complete.

## Submission Guidelines
- Submission Method  
All submissions must be made through [official Google Form](https://forms.gle/hC1fAin8N5rqMTrp7).
- Submission Method and Version Control  
Teams are required to package all submission materials into a single compressed file named HD-Track2.zip and upload it to their Google Drive. In the official submission form, teams should provide a publicly accessible download link for this ZIP file.  
Teams must ensure that the link's sharing permission is set to "Anyone with the link can view" to prevent submission failure due to access issues. Each team may submit a maximum of three times via the Google Form before the deadline. To update their submission, teams can submit a new form with an updated link.  
The **latest link** a team submits in the Google Form **before** the deadline (November 24, 2025, 23:59，AoE) will be considered their official entry. After the deadline, we will download and archive the file from that link a single time. This downloaded version will be considered their final and sole submission. Any modifications made to the file on Google Drive after the deadline will not be considered.

- Submission Checklist
  1. Audio Files:
    - All generated output audio must be packaged into a zip file named HD-Track2.zip.
    - Inside the zip file, audio must follow the naming rules below:
      HD-Track2/test/test-{dialogue_id}_output.wav
      HD-Track2/clean/clean-{dialogue_id}_output.wav

  2. System Description Document:
    - Each team must submit a system description document in PDF format. The document must be **at least two pages in length**, including references.
    - The document should outline your methodology, data construction, model architecture, training strategy, and other relevant implementation details.
    - The document must adhere to the official ICASSP 2026 paper template, available here: [ICASSP 2026 Paper Kit](https://cmsworkshops.com/ICASSP2026/papers/paper_kit.php#Templates)
    > Important: Both the jsonl files and the system description document are mandatory. Failure to submit either of these components will result in disqualification.

## Requirements for Shortlisted Teams
After the submission deadline, please monitor your registered email closely. Teams that advance to the final evaluation stage will be notified by email. Upon receiving this notification, you are required to submit the following supplementary materials within the specified timeframe:
1. **Reproducible Docker Container**:
  - Must include the complete runtime environment configuration for the model.
  - Must contain a one-click execution script (run.sh) to ensure the organizing committee can directly deploy the model and perform inference tests.
2. **Supplementary Model Documentation**:
  - A detailed readme.md file that includes comprehensive reproduction steps and a system overview.
## Final Ranking and Interpretation
- **Hidden Test Set**:  
In the event of special circumstances during the final evaluation stage (e.g., top-ranking teams having extremely close scores, or other situations that could compromise the fairness of the ranking), the organizing committee **reserves the right to deploy** a **never-before-seen "hidden test set"** to conduct an additional evaluation of the relevant models. Performance on this hidden test set will serve as the key determinant for the final ranking.
- **Final Interpretation**:  
The organizing committee reserves the final right of interpretation for all rules and outcomes of this challenge.