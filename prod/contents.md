---
layout: contents
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
				<dt class="priority-list__term">
					<a class="priority-list__name" href="{{site.url}}/{{priorities.url }}"><h4 class="priority-list__name__text">{{ priorities.title }}</h4></a>
				</dt>
				<dd class="priority-list__description">{{ priorities.teaser }}</dd>
			</dl>
			</section>
		{% endfor %}
		</div>
		<a href="{{site.url}}/highlights/" class="button button--gold">TOP 10 HIGHLIGHTS FROM 2015-16</a>
    	<a href="#" class="button">2015-16 ANNUAL REPORT SUMMARY</a>
	</div>
</div>