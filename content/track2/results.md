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

### Full-Duplex Interaction Track Results

#### 1. **Task Dimensions and Evaluation Methodology**
The final score for this challenge track is derived using an automated evaluation script, details of which can be found in [Full-Duplex_Interaction_Evaluation](https://github.com/ASLP-lab/Hum-Dial/tree/main/Full-Duplex_Interaction/evaluation). The Total Score comprises three components: the **Interruption Total Score**, the **Rejection Total Score**, and the **Total Delay Score**.
- **Interruption Total Score**: Calculated as the average score of the Chinese (CN) interruption test set and the English (EN) interruption test set.
- **Rejection Total Score**: Calculated as the average score of the Chinese (CN) rejection test set and the English (EN) rejection test set.
- **Total Delay Score**: A relative score derived by remapping each team's Total Delay based on the performance distribution across all participants and the baseline system. The exact mapping rule is specified by the formula below.

\text{Score}(L) = 100 - 40 \times \frac{\log \left( \frac{L}{L_{\text{min}}} \right)}{\log \left( \frac{L_{\text{base}}}{L_{\text{min}}} \right)}

where $$L_{min}$$ represents the minimum latency among all participating systems, and $$L_{base}$$ represents the latency of the baseline system. The total delay score of the baseline system is defined as 60.

It is important to note that system latency can be affected by hardware variations. To ensure fairness, we collected Docker images from all participating teams and conducted official testing on the challenge test sets under controlled conditions, using **identical, idle** machines (RTX A6000). The latency obtained from this official testing were used as the final system latency for each team.

#### 2. Final Total Score Calculation Formula
The **Final Total Score** is a weighted sum of the **Interruption Total Score**, the **Rejection Total Score**, and the **Total Delay Score**. The calculation formula is as follows:

$$Total\_Score = Interruption\_Total\_Score \times 0.4 + Rejection\_Total\_Score \times 0.4 + Total\_Delay\_Score \times 0.2$$

#### 3. Results
A total of eight teams submitted their results and system descriptions for this challenge. The scores and rankings of each team are presented in Table 1 below, and the visualized results are shown in Figure 1. 

{{< figure src="./images/HD-Track2.png"  width="600" >}}

*: invited to submit ICASSP 2-page papers.

#### 4. ICASSP 2-Page Papers
According to the grand challenge official rules, the top 2 teams in this track (cookie_asr and Badcat) are invited to submit papers (2 pages main content + extra page with refs) to the ICASSP 2026 Grand Challenge Track.
- Specific submission instructions will be emailed separately to the qualifying teams.