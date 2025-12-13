---
title: ""
description: ""
menu: task1
weight: 80
---

<script>
  MathJax = {
    tex: {
      inlineMath: [['$', '$'], ['\\(', '\\)']],
      displayMath: [['$$', '$$'], ['\\[', '\\]']],
      processEscapes: true,
      processEnvironments: true
    },
    options: {
      skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre']
    }
  };
</script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js" async></script>
<style>
/* css */
table {
    table-layout: auto;
    width: 100%;
    border-collapse: collapse;
    display: block;             /* 允许横向滚动 */
    overflow-x: auto;          /* 超出时显示横向滚动条 */
}

table th,
table td {
    border: 1px solid #e0e0e0;
    padding: 0.75em 1em;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;       /* 不换行 */
    overflow: hidden;          /* 超出隐藏 */
    text-overflow: ellipsis;   /* 超出显示省略号 */
    word-break: normal;        /* 防止强制换行 */
}

/* 第一列更长 */
table th:first-child,
table td:first-child {
    min-width: 180px;          /* 调整为需要的更长宽度 */
    width: 180px;
    text-align: center;
}

/* 其它列设置最小宽度，保证可见 */
table th:nth-child(2),
table td:nth-child(2) {
    min-width: 200px;
    text-align: center;
}

table th:last-child,
table td:last-child {
    min-width: 120px;
    text-align: center;
}

table thead th {
    background-color: #f5f5f5;
    font-weight: 600;
}
table tbody tr:hover {
    background-color: #fafafa;
}

/* 小屏幕处理：允许换行并适配 */
@media (max-width: 600px) {
    table {
        display: block;
        overflow-x: auto;
    }
    table th, table td {
        white-space: normal;    /* 小屏幕上允许换行以避免水平滚动过大 */
        text-overflow: clip;
    }
}
</style>


### Emotional Intelligence Track Results

#### 1. Task Dimensions & Evaluation Methodology

The final score for this challenge track combines both automated metrics and human evaluation to ensure the results are professional and objective.

**Evaluation Environment**: The automated evaluation utilizes the Qwen/Qwen3-Omni-30B-A3B-Instruct model, which is deployed entirely in a local environment for scoring. For the detailed evaluation prompts, please refer to the [competition guidelines](https://github.com/ASLP-lab/Hum-Dial).

**Task 1: Emotional Trajectory Detection**
- Dimension 1: Accuracy_Completeness
- Dimension 2: Depth_Granularity
- Dimension 3: Added_Value

**Task 2: Emotional Reasoning**
- Dimension 1: Information_Integration
- Dimension 2: Insight_RootCause
- Dimension 3: Clarity_Logic

**Task 3: Empathy Assessment**
- Dimension 1: Textual_empathy_insight
- Dimension 2: Vocal_empathy_congruence
- Dimension 3: Audio_quality_naturalness

|                    **Task Dimension**                     | **Evaluation Method**  |     **Evaluation Tool / Team**     |
|:---------------------------------------------------------:|:----------------------:|:----------------------------------:|
|        **Task 1: Emotional Trajectory Detection**         |  Automated Evaluation  |  Qwen/Qwen3-Omni-30B-A3B-Instruct  |
|              **Task 2: Emotional Reasoning**              |  Automated Evaluation  |  Qwen/Qwen3-Omni-30B-A3B-Instruct  |
|    **Task 3: Empathy Assessment - Dimension 1**    |  Automated Evaluation  |  Qwen/Qwen3-Omni-30B-A3B-Instruct  |
| **Task 3: Empathy Assessment - Dimensions 2 & 3**  |    Human Evaluation    |        20 Human Evaluators         |

⚠️ **Rules on Violations & Anomalies**
To maintain fairness and validity, the following rules strictly apply:
1. **Language Mismatch**: For both the Chinese and English test sets, if the language of a submitted response does not match the input audio, that sample will be automatically assigned the minimum score (1 point).
2. **Human Evaluation Team**
**The evaluation for Dimensions 2 and 3 of Task 3** is conducted by human evaluators organized by Beijing AIShell Co., Ltd. The composition and qualifications of the evaluators are detailed below:
- **Number of Evaluators**: 20 in total.
- **Language Groups**: 10 for the Chinese evaluation group, 10 for the English evaluation group.
- **Experience & Education**: All evaluators possess a university Bachelor's degree or higher and have over six months of relevant data-annotation/subjective-evaluation experience.
- **Language Proficiency**: the Chinese evaluation group is composed of native Mandarin speakers. Evaluators assigned to the English test set possess fluent English proficiency.
- **Demographics**:
  - **Gender Distribution**: 13 female, 7 male.
  - **Age Distribution**: Average age 24.2 years (Range: 22–27 years).

#### 2. Final Scores and Ranking
The **Final Score** for each team is calculated as the weighted sum of scores from the respective task dimensions:

$$\text{Final Score(zh/en)} = (\text{Task-1-Avg} \times 0.2) + (\text{Task-2-Avg} \times 0.2) + (\text{Task-3-D1} \times 0.1) + (\text{Task-3-D2} \times 0.25) + (\text{Task-3-D3} \times 0.25)$$
$$\text{Final Score} = (\text{Final Score(zh)} \times 0.5) + (\text{Final Score(en)} \times 0.5)$$

##### Chinese Test Set Results

| Team               | Task-1-D1 | Task-1-D2 | Task-1-D3 | Task-1-Avg | Task-2-D1 | Task-2-D2 | Task-2-D3 | Task-2-Avg | Task-3-D1 | Task-3-D2 (Human Score) | Task-3-D3 (Human Score) | Final Score (zh) |
|:-------------------|:---------:|:---------:|:---------:|:----------:|:---------:|:---------:|:---------:|:----------:|:---------:|:-----------------------:|:-----------------------:|:----------------:|
| BJTU_Unisound_team |   4.89    |   4.95    |   4.95    |    4.93    |   4.57    |   4.54    |   4.73    |    4.61    |   3.92    |          3.73           |          3.81           |       4.18       |
| HDTLAB             |   4.28    |   3.95    |   4.44    |    4.22    |   4.25    |   4.42    |   5.00    |    4.56    |   3.74    |          3.00           |          3.37           |       3.72       |
| IUSpeech           |   3.53    |   3.19    |   3.57    |    3.43    |   3.15    |   3.15    |   4.78    |    3.69    |   3.40    |          2.78           |          3.13           |       3.24       |
| Lingcon insight    |   3.53    |   3.08    |   3.47    |    3.36    |   3.33    |   3.07    |   4.76    |    3.72    |   3.38    |          2.89           |          3.25           |       3.29       |
| SenseDialog        |   2.40    |   2.41    |   2.41    |    2.41    |   5.00    |   5.00    |   5.00    |    5.00    |   4.96    |          3.62           |          3.76           |       3.82       |
| TeleAI             |   4.95    |   5.00    |   5.00    |    4.98    |   4.91    |   4.96    |   5.00    |    4.96    |   3.87    |          3.69           |          3.87           |       4.26       |
| Tencent Ai Lab-NJU |   4.83    |   4.96    |   4.96    |    4.92    |   5.00    |   5.00    |   5.00    |    5.00    |   4.10    |          3.50           |          3.74           |       4.20       |
| Baseline           |   3.23    |   3.15    |   3.25    |    3.21    |   2.95    |   2.61    |   4.18    |    3.25    |   3.28    |          3.00           |          3.31           |       3.20       |

##### English Test Set Results

| Team               | Task-1-D1 | Task-1-D2 | Task-1-D3 | Task-1-Avg | Task-2-D1 | Task-2-D2 | Task-2-D3 | Task-2-Avg | Task-3-D1 | Task-3-D2 (Human Score) | Task-3-D3 (Human Score) | Final Score (en) |
|:-------------------|:---------:|:---------:|:---------:|:----------:|:---------:|:---------:|:---------:|:----------:|:---------:|:-----------------------:|:-----------------------:|:----------------:|
| BJTU_Unisound_team |   4.48    |   4.65    |   4.65    |    4.59    |   4.88    |   4.89    |   4.95    |    4.91    |   4.13    |          3.96           |          3.72           |       4.23       |
| HDTLAB             |   4.41    |   4.07    |   4.76    |    4.41    |   4.22    |   4.40    |   5.00    |    4.54    |   3.74    |          3.74           |          3.59           |       4.00       |
| IUSpeech           |   2.35    |   2.00    |   2.20    |    2.18    |   2.10    |   1.94    |   2.91    |    2.32    |   2.15    |          3.61           |          3.54           |       2.90       |
| Lingcon insight    |   1.77    |   1.75    |   1.84    |    1.79    |   1.84    |   1.63    |   2.51    |    1.99    |   2.25    |          3.10           |          3.09           |       2.53       |
| SenseDialog        |   4.92    |   4.95    |   4.95    |    4.94    |   4.84    |   4.84    |   4.84    |    4.84    |   4.91    |          3.87           |          3.56           |       4.30       |
| TeleAI             |   4.93    |   4.97    |   4.97    |    4.96    |   5.00    |   5.00    |   5.00    |    5.00    |   3.84    |          3.89           |          3.69           |       4.27       |
| Tencent Ai Lab-NJU |   4.69    |   4.99    |   4.99    |    4.89    |   5.00    |   5.00    |   5.00    |    5.00    |   4.18    |          3.92           |          3.61           |       4.28       |
| Baseline           |   2.74    |   2.40    |   2.56    |    2.56    |   3.15    |   2.77    |   4.51    |    3.48    |   3.31    |          2.70           |          2.81           |       2.92       |

##### Final Score

|         Team         |  Final Score   | Ranking |
|:--------------------:|:--------------:|:-------:|
|       TeleAI*        |      4.27      |    1    |
| Tencent Ai Lab-NJU*  |      4.24      |    2    |
| BJTU_Unisound_team*  |      4.21      |    3    |
|     SenseDialog      |      4.06      |    4    |
|        HDTLAB        |      3.86      |    5    |
|       IUSpeech       |      3.14      |    6    |
|       Baseline       |      3.06      |    7    |
|   Lingcon insight    |      2.96      |    8    |

*: invited to submit ICASSP 2-page papers.


### 3. ICASSP 2-Page Papers

According to the grand challenge official rules, the **top 3 teams in this track (TeleAI, Tencent Ai Lab-NJU and BJTU_Unisound_team)** are invited to submit papers (2 pages main content + extra page with refs) to the ICASSP 2026 Grand Challenge Track.
- Specific submission instructions will be emailed separately to the qualifying teams.