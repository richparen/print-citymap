(function(window,undefined){"use strict";observer.subscribe("product/configuration/updated",function(obj){if(obj.key=="illustration"){$('[data-key="labelAlphabet"]').val(page.product.options.illustration[obj.value].letter);$('[data-key="labelOne"]').val(page.product.options.illustration[obj.value].headline);$('[data-key="labelTwo"]').val(page.product.options.illustration[obj.value].name);page.product.variation.labelAlphabet=page.product.options.illustration[obj.value].letter;page.product.labels.labelAlphabet=$('[data-key="labelAlphabet"]').find("option:selected").text();page.product.variation.labelOne=page.product.options.illustration[obj.value].headline;page.product.variation.labelTwo=page.product.options.illustration[obj.value].name;observer.publish("labels/change")}})})(this)