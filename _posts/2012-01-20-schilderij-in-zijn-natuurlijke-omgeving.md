---
layout: post
title: Schilderij in zijn natuurlijke omgeving
images:
  row1:
    - name: Voorstudie foto 1
      url: "http://lh6.ggpht.com/-NbHuS3AImZc/TwiYAZUcasI/AAAAAAAABOw/eLC6Mo1PTSs/Foto0186.jpg"
      height: 240
    - name: Voorstudie foto 2
      url: "http://lh4.ggpht.com/-iCZEXzbr8pM/TwiYE624p1I/AAAAAAAABXU/3qGf1cZ68QM/Foto0188.jpg"
      height: 240
    - name: Voorstudie foto 3
      url: "http://lh6.ggpht.com/-fOS98Oq0kME/TwiYBTWYrrI/AAAAAAAABXQ/ZR93VlKTeo8/Foto0187.jpg"
      height: 240
  row2:
    - name: Work in progress
      url: "http://lh3.ggpht.com/-KgmbeNUTFgs/T7t6s0X00UI/AAAAAAAAAf8/yUPMPitjQCg/Foto0214.jpg"
      height: 173
    - name: "'Levend water'"
      url: "http://lh6.ggpht.com/-XemNXR82WhE/TwiYxrLz_dI/AAAAAAAABCY/0dPuEEmGjM0/Foto0328.jpg"
      height: 173
  row3:
    - name: Schilderij in natuurlijke omgeving
      url: "http://lh5.ggpht.com/-EO5VjFiGy6Y/Txmwjzl0g7I/AAAAAAAABYM/-BFPyV6OCsY/DSCF2841.JPG"
      height: 393
---
De meeste van mijn schilderijen maak ik omdat iets me inspireert. Een kleur, een beeld, een foto of een gevoel. Dan begin ik met schilderen en er ontstaat gaandeweg een schilderij wat uiteindelijk veel verder gaat dan het idee waardoor het ontstond.

Soms gaat het echter anders. Dan krijg ik een opdracht van iemand om een schilderij te maken voor een bepaalde ruimte. In dat geval ontstaat het schilderij door een heel ander proces. Hieronder wil ik jullie een stukje laten meekijken hoe zo&rsquo;n schilderij in opdracht ontstaat.

Het begint met praten met de opdrachtgever. Vaak heeft die al bepaalde idee&euml;n over een onderwerp, kleur, maat van het schilderij etc. Verder kom ik kijken naar de ruimte en maak ik enkele foto&rsquo;s van de kleuren en structuren die daar gebruikt zijn. Dan ontstaat er vaak al een soort grove schets in mijn hoofd van wat mooi zou passen. Dit overleg ik met de opdrachtgever en in dit gesprek ontstaat een eerste idee. Hier enkele foto&rsquo;s van een ruimte waarvoor ik een schilderij heb gemaakt. De opdracht bij dit schilderij was o.a. om de kleuren (warm) grijs, donkerpaars en bladgroen te gebruiken en iets met water te schilderen.

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

Vervolgens gaat het schilderen natuurlijk in enkele stadia. Ik vind de reacties van mensen die zo&rsquo;n &lsquo;work in progress&rsquo; zien altijd grappig. In mijn hoofd zie ik het eindresultaat al, maar anderen zien alleen waar ik op dat moment ben. Als voorbeeld hier een foto van het schilderij als de eerste paar lagen erop zitten. Het is alleen nog grijs en lijkt wat somber.

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

Daarna bracht ik echter de nuances aan met paars en kwam de begroeiing erbij. Daardoor kwam er leven en diepte in dit schilderij. Het eindproduct oogt heel anders dan de vorige foto, hoewel daarop al bijna het hele plaatje op doek stond. Het is toch prachtig om te zien hoeveel kleur dan kan doen.

Wat ik het leukst vind aan het schilderen in opdracht is om te zien hoe een schilderij echt &lsquo;thuishoort&rsquo; in de ruimte. Het is vanaf het begin afgestemd op een bepaalde plek, zowel qua maat als qua kleur en ontwerp. Zoals op de laatste foto te zien is maakt het schilderij de kamer echt af. Dat noem ik nu &lsquo;een schilderij in zijn natuurlijke omgeving&rsquo;.

<div class="imagerowcontainer">
    <ul class="imagerow">
        {% for image in page.images.row3 %}
            {% for component in site.components %} {% if component.name == "imagerow-image" %}
                {{ component.content | replace:'%%url%%',image.url | replace:'%%name%%',image.name | replace:'%%height%%',image.height }}
            {% endif %} {% endfor %}
        {% endfor %}
    </ul>
</div>
<div class="clearer"></div>
