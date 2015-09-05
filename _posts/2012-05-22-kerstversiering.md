---
layout: post
title: Kerstversiering
menu_item: projects
category: projects
images:
  row1:
    - name: "Hier is de slinger papieren versiering tegen de muur goed te zien"
      url: "http://lh6.ggpht.com/-Hc-7fd7KFzo/T0ANROkJDII/AAAAAAAAAP4/gJskqJ4znJs/s400/Foto1249.jpg"
      height: 267
      caption: "Hier is de slinger papieren versiering tegen de muur goed te zien"
    - name: "Overzichtsfoto. Zie ook ons babykerstboompje met strik"
      url: "http://lh4.ggpht.com/-l7jFcAruTok/T0ANYI4T-oI/AAAAAAAAAP8/Ts5rqLpX6g0/s400/Foto1251.jpg"
      height: 267
      caption: "Overzichtsfoto. Zie ook ons babykerstboompje met strik"
  row2:
    - name: "Close-up van de stoffen (1e) en met papier beplakte (2e) kerstballen"
      url: "http://lh3.ggpht.com/-8df7bUWQ0PM/T0ANfCCCP0I/AAAAAAAAAgM/-z40X7Z5CCo/s400/Foto1258.jpg"
      height: 418
      caption: "Close-up van de stoffen (1e) en met papier beplakte (2e) kerstballen"
---
Dit jaar had ik met kerst echt zin in een gezellig versierd huis. Het is het eerste jaar we ons eigen huisje hebben en nu kan het dus ook. Wanneer je op kamers woont is het toch anders. Ik kon me dus echt uitleven dit jaar, we hadden nog bijna niets qua kerstdecoratie dus het kon nog alle kanten op! Ik had echter ook geen zin om veel geld uit te geven aan kerstballen en slingers etc.

De oplossing was uiteindelijk natuurlijk om het zelf te maken. Ik had dit jaar weinig zin in ‘blingbling’ en wilde rustige kleuren en matte versiering. Het resultaat is niet heel ‘kerstig’ geworden, maar wel erg gezellig. Met enkele stofjes van de markt heb ik zelf soort van ‘kerstbal-zakjes’ gemaakt. Verder kreeg ik oude kerstballen van een vriendin waar ik met leuke papiertjes papier-maché overheen gedaan heb. Het resultaat vond ik samen heel schattig.

<div class="imagerowcontainer">
    <ul class="imagerow">
        {% for image in page.images.row1 %}
            {% for component in site.components %} {% if component.name == "imagerow-caption" %}
                {{ component.content | replace:'%%url%%',image.url | replace:'%%name%%',image.name | replace:'%%height%%',image.height | replace:'%%caption%%',image.caption }}
            {% endif %} {% endfor %}
        {% endfor %}
    </ul>
</div>
<div class="clearer"></div>

{% for image in page.images.row2 %}
<div class="wp-caption alignleft">
    <a title="{{ image.name }}" href="{{ image.url }}">
        <img src="{{ image.url }}" alt="{{ image.name }}" height="{{ image.height }}">
    </a>
    <p class="wp-caption-text">{{ image.caption }}</p>
</div>
{% endfor %}

Misschien is het totaal wel ERG schattig en pastel geworden, maar dan knallen we volgend jaar wel weer wat extra! De versiering stond in elk geval mooi bij de inrichting van ons huisje en vooral bij de oude wit geschilderde kast. Die was eerst donkerhout, toen heb ik hem helemaal afgeschuurd en met twee lagen zwarte lakverf beschilderd. Daarna een flinke laag witte muurverf eroverheen en dat weer afschuren zodat het zwart er tussendoor te zien is. Pffff dágen werk, maar ik geniet er nog elke dag van!

Ik had ook een klein sneeuwpopje van proppen krantenpapier en papier-maché gemaakt en die toen geverfd en in een vaas met nepsneeuw gezet. Daar heb ik alleen geen foto van gemaakt jammer genoeg. Voor aan de muren heb ik drie linten gemaakt met papieren versiersels van dezelfde leuke papiertjes waarmee ik de kerstballen beplakt heb. Dat zorgde wel voor een mooi geheel omdat het bij elkaar paste.