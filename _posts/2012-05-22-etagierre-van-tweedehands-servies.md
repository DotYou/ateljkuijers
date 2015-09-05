---
layout: post
title: Etagierre van tweedehands servies
menu_item: projects
category: projects
images:
  row1:
    - name: "Etagierre met 'oma' en 'opa' kopjes"
      url: "http://lh3.ggpht.com/-S57oquYXcOY/T7uCqt7N55I/AAAAAAAAAgo/VArdqzVPZrY/s400/2012-05-22%25252014.09.54.jpg"
      height: 221
      caption: "Etagierre met 'oma' en 'opa' kopjes"
    - name: "Mooie roosjes bovenop"
      url: "http://lh4.ggpht.com/-q6m9YLH2lao/T7uCme7XtwI/AAAAAAAAAgg/NrKLhm0SHg8/s400/2012-05-22%25252014.10.03.jpg"
      height: 221
      caption: "Mooie roosjes bovenop"
    - name: "Stijlvol en praktisch!"
      url: "http://lh4.ggpht.com/-cC_MfBn5_qs/T7uChpkSBzI/AAAAAAAAAgY/xv3hJYWjP5k/s400/2012-05-22%25252014.10.31.jpg"
      height: 221
      caption: "Stijlvol en praktisch!"
---
Een ontzettend leuk idee wat ik al een tijdje geleden via een vriendin had gezien, is het zelf maken van een etagierre. De betreffende vriendin had weer een andere vriendin die voor haar zo’n ding had gemaakt. Echt heel leuk en creatief. Aangezien ik nogal eens lekkere dingen bak wanneer ik mensen over de vloer krijg, leek dit me een prachtige manier om al dat lekkers te presenteren.

Ik kan jullie vertellen dat het echt de moeite waard is! Niet alleen is het resultaat geweldig karakteristiek/gezellig/kitsch, maar ook het maken ervan is hartstikke leuk. De benodigdheden hebben we grotendeels bij het Kringloopcentrum vandaan gehaald. Een schat aan potentieel ligt daar stof te verzamelen en is mee te nemen voor prijzen vanaf € 0,20. Mijn zus en ik hebben daar letterlijk uren lopen te selecteren, stapelen en vergelijken. Het is een wonder dat al het servies heel is gebleven. Want een stapel van 4 borden en 3 schotels is onvastgelijmd niet erg stabiel (en wij zijn niet erg handig). We zijn de gekste, leukste en origineelste borden, schotels en kopjes tegengekomen. Uiteindelijk hebben we gekozen voor een heel klassiek, over-de-top bloemetjes combinatie met 1 turquoise schotel ertussen omdat die kleur in mijn huis veel terugkomt. Hieronder het resultaat.

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

De opmerkzame kijker heeft wellicht gezien dat het bovenste schoteltje al gebroken is. Tja wat zal ik zeggen. Zelfs als de etagierre in elkaar zit blijft die breekbaar, ook al vergeet ik dat soms. Een interessant detail is trouwens dat de speciale alleslijm die ook werkt voor porselein op al het servies prima werkte, behalve op het bovenste schoteltje. Die bleef er maar afvallen. Uiteindelijk hebben we met een lijmpistool en grof geweld het onwillige schoteltje toch bovenop de piramide vast gekregen.