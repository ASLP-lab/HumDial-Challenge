---
title: "Test Set"
description: ""
menu: task1
weight: 80
---

---

## Test Set Description
The test set (HD-Track1-Test) is now officially available, containing both Chinese (zh) and English (en) subsets. Each language subset provides 150 multi-turn dialogues for each of the three tasks (Task 1, 2 & 3). For each task, we provide a corresponding audio folder and a JSONL file. This file outlines the dialogue structure, such as turn order and audio file mapping.

```
HD-Track1-Test
|_zh
  |__HD-Track1-T1/
    |_{dialogue_id}_{turn_id}.wav
  |__HD-Track1-T2/
  |__HD-Track1-T3/
  |__HD-Track1-T1.jsonl
  |__HD-Track1-T2.jsonl
  |__HD-Track1-T3.jsonl
|_en
  |__HD-Track1-T1/
  |__HD-Track1-T2/
  |__HD-Track1-T3/
  |__HD-Track1-T1.jsonl
  |__HD-Track1-T2.jsonl
  |__HD-Track1-T3.jsonl
```

Please note: Registered participants will receive the dataset via email. If you haven't received it, please contact us promptly.

## Evaluation & Ranking Mechanism
The evaluation methodology is specifically designed for the distinct characteristics of each task. For **Task 1 and Task 2**, the evaluation will be conducted primarily through **Large Language Model (LLM) Automated Scoring** to ensure objectivity and efficiency. **Task 3**, on the other hand, focuses on assessing the comprehensive performance of speech emotion interaction, and will therefore combine preliminary LLM scoring with in-depth **Human Evaluation**.

**Task 1 & 2**:
- **LLM Automated Scoring**: This stage involves a comprehensive preliminary evaluation of all submissions. We will leverage a Large Language Model to perform an efficient, quantitative analysis of the model outputs. This analysis will serve as the basis for the initial ranking.

**Task 3**:
- **LLM Automated Scoring**:  As with Task 1 & 2, all submissions for Task 3 will first undergo the same LLM Automated Scoring process described above.
- **Human Scoring**: For the top-performing teams identified in the LLM scoring stage, we will invite professionally trained evaluators to conduct an in-depth assessment. This stage is designed to complement the LLM evaluation, with a particular focus on assessing the speech-related dimensions.
- **Evaluation Process**:
  1. All submissions will first undergo **LLM Automated Scoring**.
  2. We will select the **top-ranked teams** from this stage to advance to the next round.
  3. The submissions from the shortlisted teams will then be scored by human evaluators.
  4. Once the final rankings are determined, we will only announce the results of the top-ranked teams.

The final ranking for this challenge track is determined by a final score that reflects the comprehensive performance across all three tasks. This score is calculated as a weighted sum of LLM (Large Language Model) Automated Scoring and **Human Scoring** to ensure a comprehensive and authoritative assessment.  
To ensure a fair and scientifically rigorous evaluation, the final scoring weights will be dynamically determined. This process will take into account various factors, including the overall performance distribution of all participating models. Therefore, the final weights will be officially announced only after all submissions have been received and the unified evaluation is complete.

- **Detailed Scoring Rules**:
For more detailed evaluation dimensions and scoring criteria, please refer to our official guidance document on [GitHub](https://github.com/ASLP-lab/Hum-Dial/tree/main/Emotional_Intelligence).

## Submission Guidelines
- Submission Method:  
All submissions must be made through [official Google Form](https://forms.gle/QrCWdQKvVQMzmXHz5)

- Submission File and Version Control:   
Teams are required to package all submission materials into a single compressed file named HD-Track1.zip and upload it to their Google Drive. In the official submission form, teams should provide a publicly accessible download link for this ZIP file.  
Teams must ensure that the link's sharing permission is set to "Anyone with the link can view" to prevent submission failure due to access issues. Each team may submit a maximum of three times via the Google Form before the deadline. To update their submission, teams can either replace the old ZIP file in their Google Drive or submit a new form with an updated link.  
The latest link a team submits in the Google Form before the deadline (November 24, 2025, 23:59，AoE) will be considered their official entry. After the deadline, we will download and archive the file from that link a single time. This downloaded version will be considered their final and sole submission. Any modifications made to the file on Google Drive after the deadline will not be considered.

- Submission Checklist:
  1. **jsonl Files**:
     - For each task, you must submit a corresponding result file in .jsonl format.
     - File Structure Example: [HD-Track1-3.jsonl](https://github.com/ASLP-lab/Hum-Dial/blob/main/Emotional_Intelligence/submit/HD-Track1-T3.jsonl)
  2. **Audio Files (Required for Task 3 only)**:
     - If you are participating in **Task 3**, you must submit the audio files generated by your model.
     - The audio files within the ZIP package must strictly follow the naming convention: **{dialogue_id}_{turn_id}_response.wav**
  3. **System Description Document**:
     - Each team must submit a system description document in PDF format, limited to a maximum of 2 pages.
     - The document should outline your **methodology, data construction, model architecture, training strategy**, and other relevant implementation details.
     - The document must adhere to the official ICASSP 2026 paper template, available here: [ICASSP 2026 Paper Kit](https://cmsworkshops.com/ICASSP2026/papers/paper_kit.php#Templates)
  > Important: Both the jsonl files and the system description document are mandatory. Failure to submit either of these components will result in disqualification.
  4. Submission Package Format
  ```
    --HD-Track1
    |__[Your_Team_Name]_System_Description.pdf
    |__zh
    |  |__HD-Track1-T1.jsonl
    |  |__HD-Track1-T2.jsonl
    |  |__HD-Track1-T3.jsonl
    |  |__HD-Track1-T3/
    |     |_{dialogue_id}_{turn_id}_response.wav
    |     |...
    |__en
       |__HD-Track1-T1.jsonl
       |__HD-Track1-T2.jsonl
       |__HD-Track1-T3.jsonl
       |__HD-Track1-T3/
          |_{dialogue_id}_{turn_id}_response.wav
          |...
  ```

## Requirements for Shortlisted Teams
After the submission deadline, please monitor your registered email closely. Teams that advance to the final evaluation stage will be notified by email. Upon receiving this notification, you are required to submit the following supplementary materials within the specified timeframe:

1. **Reproducible Docker Container**:  
  - Must include the complete runtime environment configuration for the model.
  - Must contain a one-click execution script (run.sh) to ensure the organizing committee can directly deploy the model and perform inference tests.
2. **Supplementary Model Documentation**:  
  - A detailed readme.md file that includes comprehensive reproduction steps and a system overview.

## Final Ranking and Interpretation
- **Hidden Test Set**:  
In the event of special circumstances during the final evaluation stage (e.g., top-ranking teams having extremely close scores, or other situations that could compromise the fairness of the ranking), the organizing committee reserves the right to deploy a never-before-seen "hidden test set" to conduct an additional evaluation of the relevant models. Performance on this hidden test set will serve as the key determinant for the final ranking.
- **Final Interpretation**:  
The organizing committee reserves the final right of interpretation for all rules and outcomes of this challenge.

