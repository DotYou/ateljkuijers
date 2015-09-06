---
layout: post
title: Paarse Boom
menu_item: murals
category: murals
images:
  row1:
    - name: Boom zijaanzicht
      url: "http://lh6.ggpht.com/-2IsEdk2XZaw/UONOsditiSI/AAAAAAAAA-Y/5PYtQCGn6wg/s400/2012-12-18%25252011.46.11.jpg"
      height: 455
    - name: Bij en bloem
      url: "http://lh3.ggpht.com/-bczS6CYp-kM/UONO-cFy80I/AAAAAAAAA-8/_J7PTtuQdKs/s400/2012-12-18%25252011.44.18.jpg"
      height: 455
  row2:
    - name: Uil
      url: "http://lh5.ggpht.com/-yOLyVFFqPJw/UONPCn6v_PI/AAAAAAAAA_I/PcY5sNbJzdE/s400/2012-12-18%25252011.44.08.jpg"
      height: 455
    - name: Vooraanzicht
      url: "http://lh5.ggpht.com/-Vb4cp1BRTxQ/UONPGxzaKQI/AAAAAAAAA_Q/WdVxk9gTN0Y/s400/2012-12-18%25252011.43.43.jpg"
      height: 455
---
Voor deze muurschildering was de opdracht om een boom te maken met krullen in de takken en vormen. We hebben enkele afbeeldingen bekeken die in de buurt kwamen van wat de wens was, waarna ik een schets heb gemaakt. Het leuke hier vind ik dat de paarse muur direct naast de muur staat waar de schildering op staat. Ik kon wat van de muurverf gebruiken als basis voor de kleur van de boom – natuurlijk heb ik verschillende tinten gemengd om een mooi diepte effect te krijgen. Doordat de boom dezelfde basiskleur heeft als de muur is het een heel mooi geheel geworden.


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

Een leuk detail is het uiltje die vanaf een boomtak eigenwijs de kamer inkijkt. Verder heb ik als laatste wat kleine insecten toegevoegd die de boom gezellig levendig hebben gemaakt, zoals een rupsje, vlinder, bij en lieveheersbeestje.


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