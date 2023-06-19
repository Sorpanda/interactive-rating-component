# interactive-rating-component
Challenge front-endmentor.io

This is my first Javascript project.
I watched some courses for Javascript, learning the basics.
After learning all about datatypes, loops, arrays etc. etc. I still felt lost so I wanted to just do a challenge without having gone through all the material at once and see where it brought me... 
I figured out how to get the rating buttons to work and show the value in the text. There might be a better/simpler way, but this was done completely on my own so I left it this way.


The showing and hiding of the 2 different elements (Survey and Thank you) after submitting was difficult. 
I searched the internet and found this on stack overflow, 
I did change the id names to apply to my code:

/*
if (document.getElementById('survey')) {
       
        if (document.getElementById('survey').style.display == 'none') {
            document.getElementById('survey').style.display = 'block';
            document.getElementById('afterSubmit').style.display = 'none';
        }
        else {
            document.getElementById('survey').style.display = 'none';
            document.getElementById('afterSubmit').style.display = 'block';
        }
    }
    
}*/

It worked but I didn't fully understand it. After reading it over and over I think it means:

if (document.getElementById('survey')) <-- this equals to true, so it runs the next if/else statement within its block. (this if statement runs only when page is loaded? not after that?


if (document.getElementById('survey').style.display == 'none') <-- this if statement equals to false, skipping the code in the if statement and going to else instead.
The else conditions then only activate when clicking on the button.

This code is supposed to be a toggle, if I would have had another button on the afterSubmit element I could click on that button and after clicking the button. 
The if statement: if (document.getElementById('survey').style.display == 'none') now equals to true and runs the code within,
hiding the afterSubmit element and showing the survey again.

Because I didn't need to toggle between the 2 elements I simplified my code, and it works!

![interactive-rating-mobile](https://github.com/Sorpanda/interactive-rating-component/assets/114673875/0fb8e376-432d-4b89-95ec-e14e8254d066)

![interactive-rating-mobile2](https://github.com/Sorpanda/interactive-rating-component/assets/114673875/d4bbfe91-0cc4-4def-b58d-abbfe46f4610)


