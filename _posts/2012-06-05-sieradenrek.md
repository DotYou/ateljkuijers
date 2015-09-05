---
layout: post
title: Sieradenrek
menu_item: projects
category: projects
images:
  row1:
    - name: Rek zonder sieraden
      url: "http://lh5.ggpht.com/-4AsUHYPO5vM/T7uVgjqzpaI/AAAAAAAAAiE/EZgDX_QYNXc/s400/2012-02-10%25252010.58.20.jpg"
      height: 347
      caption: Rek zonder sieraden
    - name: Rek met sieraden
      url: "http://lh3.ggpht.com/-YJzOTd7sgN0/T7uVi_rkaQI/AAAAAAAAAiU/CRqwEzgRmAs/s400/2012-02-10%25252020.33.23.jpg"
      height: 347
      caption: Rek met sieraden
    - name: "Close-up van alle bakjes"
      url: "http://lh4.ggpht.com/-5871bcMoa_c/T7uVj8wJmoI/AAAAAAAAAic/YXGRqSWejjA/s400/2012-02-10%25252020.34.55.jpg"
      height: 347
      caption: "Close-up van alle bakjes"
  row2:
    - name: Close-up van de oorbellen
      url: "http://lh3.ggpht.com/-9Z9bKiVRD5A/T7uVh7mg-lI/AAAAAAAAAiM/dGO9wigc-H8/s400/2012-02-10%25252020.34.19.jpg"
      height: 256
      caption: Close-up van de oorbellen
---
Soms kan een probleem de perfecte aanleiding vormen tot een creatieve uitspatting. Zo had ik al jaren last van rondslingerende sieraden en dergelijken. Kettingen, oorbellen, haarklipjes, nagellak, elastiekjes, noem maar op. Ze lagen door mijn hele kamer verspreid en met grote regelmaat kon ik maar 1 van het paar oorbellen vinden die ik wilde dragen. Of de ketting die ik nog snel om wilde doen op weg naar mijn werk zat verstrikt in een wirwar van 25 andere kettingen. En ja, als het dan alles of niets is ga ik toch voor niets in het geval van kettingen.

Kortom er moest een systeem komen. Iets om mijn sieraden e.d. overzichtelijk op te hangen zodat ze snel te vinden en makkelijk te pakken zouden zijn. Daardoor kwam ik op het idee om een sieradenrek te maken. In de winkel zijn wel wat kleine rekjes, maar daar zou ik een flinke verzameling van moeten aanleggen wil alles erop passen.

Ik begon dus te knutselen. Een plank bij de bouwmarkt (op de fiets mee naar huis genomen(trots)), ijzerdraad, karton, papier-maché. Glas in lood ramen vind ik altijd zo prachtig in oude kerken en daarom werd dat mijn inspiratie. Aangezien mijn sieraden alle kleuren van de regenboog hebben besloot ik het ‘raam’ ook alle kleuren te geven. Dan kan ik mijn sieraden op kleur hangen; nog leuker!

<div class="imagerowcontainer">
    <ul class="imagerow">
        {% for image in page.images.row2 %}
            {% for component in site.components %} {% if component.name == "imagerow-caption" %}
                {{ component.content | replace:'%%url%%',image.url | replace:'%%name%%',image.name | replace:'%%height%%',image.height | replace:'%%caption%%',image.caption }}
            {% endif %} {% endfor %}
        {% endfor %}
    </ul>
</div>

{% for image in page.images.row2 %}
<div class="wp-caption alignleft"><a title="{{ image.name }}" href="{{ image.url }}"><img alt="{{ image.name }}" height="{{ image.height }}" src="{{ image.url }}" /> </a><p class="wp-caption-text">{{ image.caption }}</p></div>
{% endfor %}

Uiteindelijk was de onderneming toch een stuk meer werk dan ik had verwacht. Toen de vorm eindelijk klaar was met alle bakjes, spijkers, draad en kartonnen uitsteeksels paraat, moesten er 2 lagen papier-maché overheen, toen twee lagen Gesso om de krantenlettertjes te bedekken. Daarna dacht ik dat ik bijna klaar was, maar het aanbrengen van de tekening en die inkleuren met verf heeft nog het meeste tijd gekost. Eerst alle kleur en toen uren en urenlang de zwarte lijnen aanbrengen die het lood moeten voorstellen. Niet voor herhaling vatbaar dus, tenzij ik me gruwelijk ga vervelen en 3 maanden verplicht vakantie heb ofzo. Geduld is niet mijn sterkste punt.

Maar ik moet zeggen dat ik over het resultaat wel zeer te spreken ben. Heel decoratief en ontzettend praktisch! Ik ben bijna nooit meer een oorbel kwijt, en ik blijk meer nagellak te hebben dan ik wist. Als alles zo netjes op een rijtje staat weet je tenminste wat je hebt. Een aanrader dus, voor een ieder die tijd heeft of wil maken.