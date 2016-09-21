---
title: Contents
layout: contents
description: "A table of contents for the strategic roadmap priorities."
permalink: /contents/
---

<div class="section-contents section-light">
	{% include menu-button.html %}
	<div class="inner-wrapper">
		<h2 class="contents__title">YOUR JOURNEY STARTS HERE</h2>
		<a href="{{ site.url }}/message" class="contents__subtitle"><h3 class="contents__subtitle__text">Message from the President</h3></a>
		<div class="priority">
		{% for priorities in site.priorities %}
			<section class="priority-list">
			<dl>
			<a class="priority-list__link" href="{{site.url}}{{priorities.url }}">
				<dt class="priority-list__term">
					<h4 class="priority-list__name__text">Priority {{ priorities.priority-id }} - {{ priorities.title }}</h4>
				</dt>
				<dd class="priority-list__description">{{ priorities.teaser }}</dd>
			</a>
			</dl>
			</section>
		{% endfor %}
		</div>
	</div>
</div>
