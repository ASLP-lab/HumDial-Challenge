---
title: "Results"
description: ""
menu: track2
draft: false
weight: 80
---

<style>table {
    table-layout: fixed;
    width: 100%;
    border-collapse: collapse;
}
table th,
table td {
    border: 1px solid #e0e0e0;
    padding: 0.75em 1em;
    text-align: center; /* 默认居中对齐 */
}
table th:first-child,
table td:first-child {
    width: 80px;
    text-align: center;
}
table th:nth-child(2),
table td:nth-child(2) {
    width: 250px;
    text-align: center;
}
table th:last-child,
table td:last-child {
    width: 120px;
    text-align: center; /* 修改为居中对齐 */
}
/* 特别指定包含数字的列居中对齐 */
table td:not(:first-child) {
    text-align: center;
}
table thead th {
    background-color: #f5f5f5;
    font-weight: 600;
}
table tbody tr:hover {
    background-color: #fafafa;
}
</style>

### Full-Duplex Interaction Track Results

1. **Task Dimensions and Evaluation Methodology**
The final score for this challenge track is derived using an automated evaluation script, details of which can be found in [Full-Duplex_Interaction_Evaluation](https://github.com/ASLP-lab/Hum-Dial/tree/main/Full-Duplex_Interaction/evaluation). The Total Score comprises three components: the Interruption Total Score, the Rejection Total Score, and the Total Delay Score.
- Interruption Total Score: Calculated as the average score of the Chinese (CN) interruption test set and the English (EN) interruption test set.
- Rejection Total Score: Calculated as the average score of the Chinese (CN) rejection test set and the English (EN) rejection test set.
- Total Delay Score: A relative score derived by remapping each team's Total Delay based on the performance distribution across all participants and the baseline system. The exact mapping rule is specified by the formula below.

\text{Score}(L) = 100 - 40 \times \frac{\log \left( \frac{L}{L_{\text{min}}} \right)}{\log \left( \frac{L_{\text{base}}}{L_{\text{min}}} \right)}

where $$L_{min}$$ represents the minimum latency among all participating systems, and $$L_{base}$$ represents the latency of the baseline system. The total delay score of the baseline system is defined as 60.
It is important to note that system latency can be affected by hardware variations. To ensure fairness, we collected Docker images from all participating teams and conducted official testing on the challenge test sets under controlled conditions, using identical, idle machines (RTX A6000). The latency obtained from this official testing were used as the final system latency for each team.





