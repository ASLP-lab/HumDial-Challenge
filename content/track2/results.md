---
title: ""
description: ""
menu: track2
draft: false
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


### Full-Duplex Interaction Track Results

#### 1. **Task Dimensions and Evaluation Methodology**
The final score for this challenge track is derived using an automated evaluation script, details of which can be found in [Full-Duplex_Interaction_Evaluation](https://github.com/ASLP-lab/Hum-Dial/tree/main/Full-Duplex_Interaction/evaluation). The Total Score comprises three components: the **Interruption Total Score**, the **Rejection Total Score**, and the **Total Delay Score**.
- **Interruption Total Score**: Calculated as the average score of the Chinese (**CN**) interruption test set and the English (**EN**) interruption test set.
- **Rejection Total Score**: Calculated as the average score of the Chinese (**CN**) rejection test set and the English (**EN**) rejection test set.
- **Total Delay Score**: A relative score derived by remapping each team's Total Delay based on the performance distribution across all participants and the baseline system. The exact mapping rule is specified by the formula below.

$$\text{Score}(L) = 100 - 40 \times \frac{\log \left( \frac{L}{L_{\text{min}}} \right)}{\log \left( \frac{L_{\text{base}}}{L_{\text{min}}} \right)}$$

where $L_{min}$ represents the minimum latency among all participating systems, and $L_{base}$ represents the latency of the baseline system. The total delay score of the baseline system is defined as 60.

It is important to note that system latency can be affected by hardware variations. To ensure fairness, we collected Docker images from all participating teams and conducted official testing on the challenge test sets under controlled conditions, using **identical, idle** machines (RTX A6000). The latency obtained from this official testing were used as the final system latency for each team.

#### 2. Final Total Score Calculation Formula
The **Final Total Score** is a weighted sum of the **Interruption Total Score**, the **Rejection Total Score**, and the **Total Delay Score**. The calculation formula is as follows:

$$\text{Total\_Score} = \text{Interruption\_Total\_Score} \times 0.4 + \text{Rejection\_Total\_Score} \times 0.4 + \text{Total\_Delay\_Score} \times 0.2$$

#### 3. Results
A total of eight teams submitted their results and system descriptions for this challenge. The scores and rankings of each team are presented in Table below, and the visualized results are shown in Figure 1. 


<!-- | Team | Interruption Total Score          | Rejection Total Score |  Total Delay(s) | Total Delay Score | Total Score | Ranking |
|:-----|:-----------:|:-------------------:|:-------:|:-------:|:-------:|:-------:|:-------:|:-------:|:-------:|:-------:|
|      | **CN**      | **EN**  | **Total** | **CN** | **EN** | **Total** | | | | |
| cookie_asr* | 81.8 | 76.8 | 79.3 | 74.5 | 69.8 | 72.2 | 1.260 | 79.9 | 76.6 | 1 |
| Badcat* | 92.6 | 86.8 | 89.7 | 56.5 | 59.0 | 57.3 | 1.632 | 72.6 | 73.3 | 2 |
| SenseDialog | 81.2 | 71.6 | 76.4 | 56.3 | 65.5 | 60.9 | 1.237 | 80.5 | 71.0 | 3 |
|Unity Squad | 85.6 | 51.4 | 68.5 | 60.1 | 42.3 | 51.2 | 1.876 | 68.6 | 61.6| late submission|
| RhythmSense | 81.8 | 73.0 | 77.4 | 41.0 | 36.1 | 38.6 | 1.577 | 73.5 | 61.1 | 4 |
| Lingcon Insight | 76.0 | 59.2 | 67.6 | 45.1 | 32.6 | 38.9 | 1.127 | 83.1 | 59.2 | 5 |
| Baseline | 90.8 | 61.0 | 75.9 | 36.8 | 33.6 | 35.2 | 2.531 | 60.0 | 56.4 | 6 |
| HelloWorld | 57.2 | 45.4 | 51.3 | 36.1 | 36.5 | 36.3 | 0.624 | 100.0 | 55.0 | 7 |
| AISpeech | 66.0 | 29.4 | 47.7 | 37.1 | 30.6 | 33.9 | 3.391 | 51.6 | 43.0 | 8 |
| Cascade | 24.8 | 31.4 | 28.1 | 24.1 | 37.6 | 30.9 | 1.739 | 70.7 | 37.7 | 9 | -->

<table>
<thead>
<tr>
<th rowspan="2">Team</th>
<th colspan="3">Interruption Total Score</th>
<th colspan="3">Rejection Total Score</th>
<th rowspan="2">Total Delay(s)</th>
<th rowspan="2">Total Delay Score</th>
<th rowspan="2">Total Score</th>
<th rowspan="2">Ranking</th>
</tr>
<tr>
<th>CN</th>
<th>EN</th>
<th>Total</th>
<th>CN</th>
<th>EN</th>
<th>Total</th>
</tr>
</thead>
<tbody>
<tr>
<td>cookie_asr*</td>
<td>81.8</td>
<td>76.8</td>
<td>79.3</td>
<td><strong>74.5</strong></td>
<td><strong>69.8</strong></td>
<td><strong>72.2</strong></td>
<td>1.260</td>
<td>79.9</td>
<td><strong>76.6</strong></td>
<td>1</td>
</tr>
<tr>
<td>Badcat*</td>
<td><strong>92.6</strong></td>
<td><strong>86.8</strong></td>
<td><strong>89.7</strong></td>
<td>56.5</td>
<td>59.0</td>
<td>57.8</td>
<td>1.632</td>
<td>72.6</td>
<td>73.5</td>
<td>2</td>
</tr>
<tr>
<td>SenseDialog</td>
<td>81.2</td>
<td>71.6</td>
<td>76.4</td>
<td>56.3</td>
<td>65.5</td>
<td>60.9</td>
<td>1.237</td>
<td>80.5</td>
<td>71.0</td>
<td>3</td>
</tr>
<tr>
<td>RhythmSense</td>
<td>81.8</td>
<td>73.0</td>
<td>77.4</td>
<td>41.0</td>
<td>36.1</td>
<td>38.6</td>
<td>1.577</td>
<td>73.5</td>
<td>61.1</td>
<td>4</td>
</tr>
<tr>
<td>Lingcon Insight</td>
<td>76.0</td>
<td>59.2</td>
<td>67.6</td>
<td>45.1</td>
<td>32.6</td>
<td>38.9</td>
<td>1.127</td>
<td>83.1</td>
<td>59.2</td>
<td>5</td>
</tr>
<tr>
<td>Baseline</td>
<td><strong>90.8</strong></td>
<td>61.0</td>
<td>75.9</td>
<td>36.8</td>
<td>33.6</td>
<td>35.2</td>
<td>2.531</td>
<td>60.0</td>
<td>56.4</td>
<td>6</td>
</tr>
<tr>
<td>HelloWorld</td>
<td>57.2</td>
<td>45.4</td>
<td>51.3</td>
<td>36.1</td>
<td>36.5</td>
<td>36.3</td>
<td><strong>0.624</strong></td>
<td><strong>100.0</strong></td>
<td>55.0</td>
<td>7</td>
</tr>
<tr>
<td>AISpeech</td>
<td>66.0</td>
<td>29.4</td>
<td>47.7</td>
<td>37.1</td>
<td>30.6</td>
<td>33.9</td>
<td>3.391</td>
<td>51.6</td>
<td>43.0</td>
<td>8</td>
</tr>
<tr>
<td>Cascade</td>
<td>24.8</td>
<td>31.4</td>
<td>28.1</td>
<td>24.1</td>
<td>37.6</td>
<td>30.9</td>
<td>1.739</td>
<td>70.7</td>
<td>37.7</td>
<td>9</td>
</tr>
</tbody>
</table>

*: invited to submit ICASSP 2-page papers.

<div align="center">
  <img src="https://raw.githubusercontent.com/ASLP-lab/HumDial-Challenge/main/content/track2/Figure_1.png" width="80%" alt="Figure 1">
</div>

#### 4. ICASSP 2-Page Papers
According to the grand challenge official rules, the top 2 teams in this track (**cookie_asr** and **Badcat**) are invited to submit papers (2 pages main content + extra page with refs) to the ICASSP 2026 Grand Challenge Track.
- Specific submission instructions will be emailed separately to the qualifying teams.
