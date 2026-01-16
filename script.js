

// calculator program 
const screen1 = document.querySelector(".screen1");


screen1.innerText = '0'; // initially display 0 on the screen



const firstFont_size = 3.0; // in rem unit
const rootPx = parseFloat(getComputedStyle(document.documentElement).fontSize);

 
const mxWidth = screen1.parentElement.clientWidth - rootPx*2;



let exp = "";
let fontSize_flag = false;
let flag = 0;

let size0fFont = firstFont_size;

function adjustFont() {


    const text_width = screen1.scrollWidth;

    if(size0fFont < 1.5){

        size0fFont = 2.0;
        screen1.style.fontSize = size0fFont * rootPx + "px";
        screen1.innerText = "Out of Bound";
        screen1.style.fontSize = firstFont_size * rootPx + "px";


        exp = '';

        return;

    }

    if (text_width > mxWidth && size0fFont >=1.5 ) {

        size0fFont -= 0.35;
        screen1.style.fontSize = size0fFont * rootPx + "px";
    }

}







function takeInput(input) {

    if (flag >= 1) {

        exp = "";
        screen1.innerText = exp;

        flag = 0;

    }

    if (fontSize_flag) {

        screen1.style.fontSize = firstFont_size * rootPx + "px";
        size0fFont = firstFont_size;
        fontSize_flag = false;
    }



    if (input === 'C') {

        screen1.innerText = "0";
        exp = "";

        flag = 0;

      

        return;

    }

    else if (input === '=') {

        try {

            // exp = evaluate(exp);
            exp = eval(exp);

            exp = parseFloat(exp.toFixed(9)); /// toFixed();
            screen1.innerText = exp;
            flag++;

            adjustFont();
            fontSize_flag = true;

            return;
        }

        catch {

            exp = "Error"

            screen1.innerText = exp;

            flag++;
            return;



        }
    }

    else if (input === '<-') {

        input = '';
        exp = exp.slice(0, -1);
    }





    exp += input;
    screen1.innerText = exp;


    adjustFont();
    // fontSize_flag = true;



}

