{% comment %} Hitung sisa waktu ke September 2026 {% endcomment %}
{% assign target_year = 2026 %}
{% assign target_month = 9 %}
{% assign now_year = "now" | date: "%Y" | plus: 0 %}
{% assign now_month = "now" | date: "%m" | plus: 0 %}
{% assign months_left = target_year | minus: now_year | times: 12 | plus: target_month | minus: now_month %}
