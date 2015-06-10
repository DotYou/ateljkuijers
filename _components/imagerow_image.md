<li class="wp-caption alignleft">
    <a title="{{ image.name }}" href="{{ image.url }}">
    {% if image.width %}
        <img src="{{ image.url }}" alt="{{ image.name }}" width="{{ image.width }}" height="{{ image.height }}">
    {% else %}
        <img src="{{ image.url }}" alt="{{ image.name }}" height="{{ image.height }}">
    {% endif %} 
    </a>
    {% if image.caption %}
    <p class="wp-caption-text">{{ image.name }}</p>
    {% endif %}
</li>