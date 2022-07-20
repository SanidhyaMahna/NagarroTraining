let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener("mouseover", function( event ) {
        // highlight the mouseover target
        event.target.style.color = "red";
      
        // reset the color after a short delay
        setTimeout(function() {
          event.target.style.color = "";
        }, 500);
      }, false);

    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error"
                }
                break;
            case '←':
                if (display.innerText){
                   display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});