---
layout: post
title: Bakken en presenteren
menu_item: projects
category: projects
images:
  row1:
    - name: "4 lagen chocolade"
      url: "http://lh6.ggpht.com/-I_HyfkJVOsg/T7uIFjcIudI/AAAAAAAAAhU/mKgav9f7-ho/s400/Foto1263.jpg"
      height: 241
      caption: "4 lagen chocolade"
  row2:
    - name: "Dobostaart (met uitgelopen vulling)"
      url: "http://lh6.ggpht.com/-Nw6-uBlRcWU/T7uIGIgKwbI/AAAAAAAAAhc/TrdtU46pKrs/s400/Foto1395.jpg"
      height: 204
      caption: "Dobostaart (met uitgelopen vulling)"
    - name: "Stukje Dobostaart"
      url: "http://lh6.ggpht.com/-Y8GPBRnN9dg/T7uIHPaaPWI/AAAAAAAAAho/g7vmbSGb4cc/s400/Foto1399.jpg"
      height: 204
      caption: "Stukje Dobostaart"
    - name: "Chocoladepassietaart. Mooi hé!?"
      url: "http://lh4.ggpht.com/-w_OW8wgdBq4/T7uIGIvok9I/AAAAAAAAAhY/m_WwiLo2LK8/s400/Foto1397.jpg"
      height: 204
      caption: "Chocoladepassietaart. Mooi hé!?"
---

{% for image in page.images.row1 %}
<div class="wp-caption alignleft"><a title="{{ image.name }}" href="{{ image.url }}"><img alt="{{ image.name }}" height="{{ image.height }}" src="{{ image.url }}" /> </a><p class="wp-caption-text">{{ image.caption }}</p></div>
{% endfor %}

Een van mijn grote hobby’s is het bakken van lekkere dingen voor mijn vrienden en familie. Vooral Amerikaanse recepten zijn om de een of andere reden populair; cinnamonrolls, bananabread, brownies, chocolatechip cookies. We hebben het allemaal al meerdere keren geprobeerd. Het leukste is natuurlijk wel als het baksel er dan ook nog mooi uitziet. Met onderstaande recepten was dat -al zeg ik het zelf – wel het geval.

Om te beginnen hier iets wat ik voor een familieweekend had gemaakt. De zelfgemaakte etagierre- zie vorige update – met daarop 4 lagen chocolade lekkernijen. Bovenste laag zijn truffels, het enige wat uit een pakje kwam. Daaronder zelfgemaakte chocolade-mint fudge, die ik overigens tot 3 keer toe (!?) opnieuw heb moeten maken voor het gewenste resultaat was bereikt. De laag daaronder zijn brownies met chocolade icing; een classic. De onderste laag bestaat uit stukken chocolade carameltaart, een nieuw uitprobeersel. Wat we van deze onderneming geleerd hebben? Altijd MINSTENS 20 mensen uitnodigen als ik zoiets nog een keer maak, al die chocolade vult nogal! \\

Tot overmaat van ramp kreeg ik vervolgens voor Sinterklaas een chocoladekookboek van mijn zus. Toen was het hek natuurlijk van de dam. Twee van de mooiste taarten die ik daaruit geprobeerd heb te maken staan hieronder op de foto. Een Chocoladepassietaart en een Dobostaart. Een tip die ik een ieder kan geven die dit ook wil proberen is: neem de Chocoladepassietaart NIET mee naar je schoonouders! Toen we daar aankwamen en de taartdoos opendeden zag het eruit als een moddertaartje… niet zo reisbestendig dus. De Dobostaart daarentegen is een stuk beter bestand tegen een rite met de fiets, trein en bus. Alleen de vulling was wat gesmolten jammer genoeg. Beide taarten waren heerlijk, maar ook hierbij won de Dobostaart handsdown!


<div class="imagerowcontainer">
    <ul class="imagerow">
        {% for image in page.images.row2 %}
            {% for component in site.components %} {% if component.name == "imagerow-caption" %}
                {{ component.content | replace:'%%url%%',image.url | replace:'%%name%%',image.name | replace:'%%height%%',image.height | replace:'%%caption%%',image.caption }}
            {% endif %} {% endfor %}
        {% endfor %}
    </ul>
</div>
<div class="clearer"></div>