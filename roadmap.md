---
layout: default
title: Rencana Aksi 2025–2026
permalink: /roadmap/
---

# 🗓️ Roadmap Persiapan Akreditasi LAM Teknik

<div class="timeline">
{% for item in site.data.roadmap.timeline %}
  <div class="timeline-item">
    <div class="timeline-date">{{ item.bulan }}</div>
    <div class="timeline-content">
      <h3>{{ item.fokus }}</h3>
      <ul>
        {% for t in item.target %}
        <li>{{ t }}</li>
        {% endfor %}
      </ul>
    </div>
  </div>
{% endfor %}
</div>
