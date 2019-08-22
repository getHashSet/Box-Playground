document.getElementById("child").style.height = ('0px');
document.getElementById("child").style.width = ('0px');
document.getElementById('child').style.backgroundColor = '#e67e22';

const defaultSizey = document.getElementById("child").style.height;
const defaultSizex = document.getElementById("child").style.width;

const childBox = document.getElementById("child");
const parentBox = document.getElementById("parent");

var color = '#e67e22';
childBox.style.backgroundColor = color;

var parseSizeY = Number(0); //called in the GrowFunction().
var parseSizeX = Number(0); //starting value for our box.
var currentSizeY = parseInt(childBox.style.height);
var currentSizeX = parseInt(childBox.style.width);
var border = 1;
var toggle = false; //called in the GetFaded() function.
var valueType = 'px'; //string for size type used in Grow Fucntion.

//Im going to make this a button maker when I'm done.

function Size(x) 
{
    /*
    let grey = '#';
    let darkGrey = '#';
    */

    let buttonPX = document.getElementById('size-px');
    let buttonEM = document.getElementById('size-em');
    let buttonPER = document.getElementById('size-percent');

    let grabNumber = document.getElementById('size-number').value;
    
    switch (x){
        case 'px':
                //alert(grabNumber);
            valueType = 'px';
            parseSizeY = grabNumber;
            parseSizeX = grabNumber;
            childBox.style.height = (parseSizeY + valueType);
            childBox.style.width = (parseSizeX + valueType);
        break;
        case 'em':
            valueType = 'em';
            parseSizeY = grabNumber;
            parseSizeX = grabNumber;
            childBox.style.height = (parseSizeY + valueType);
            childBox.style.width = (parseSizeX + valueType);
        break;
        case 'per':
            valueType = '%';
            parseSizeY = grabNumber;
            parseSizeX = grabNumber;
            childBox.style.height = (parseSizeY + valueType);
            childBox.style.width = (parseSizeX + valueType);
        break;
        }
}

function GrowFunction(x)
{
    if (currentSizeY <= 255) //if the child box is over 255 you wont even see it growing. So lets reset it.
    {
        switch(x){
            case 'grow-y':
        SetNewSize('y'); //call a function to resize the child box.
                break;
            case 'shrink-y':
        SetNewSizeDown('y');
                break;
            case 'grow-x':
        SetNewSize('x');
                break;
            case 'shrink-x':
        SetNewSizeDown('x');
                break;
            case 'grow-b':
        SetNewSize('both');
                break;
            case 'shrink-b':
        SetNewSizeDown('both');
                break;
        }
    } else {
        NextMove(); //call a function to reset the size of the child box if it's too big. We could also just call the reset here if we wanted to.
        //Reset();
    }
}

function SetNewSize(x) //called in GrowFunction
{
    let growBy = document.getElementById('grow-number').value;
    switch(x){
        case 'y':
            SizeY(growBy); // (#) used for self selected numbers.
            break;
        case 'x':
            SizeX(growBy);
            break;
        case 'both':
            SizeBoth(growBy);
            break;
    }
    
    //lets try a nested function! woop woop!

    function SizeY(z)
    {
        parseSizeY = Number(parseSizeY) + Number(z);
        currentSizeY = Number(currentSizeY) + Number(z);
        childBox.style.height = (parseSizeY + valueType);
    }

    function SizeX(z)
    {
        parseSizeX = Number(parseSizeX) + Number(z);
        currentSizeX = Number(currentSizeX) + Number(z);
        childBox.style.width = (parseSizeX + valueType);
    }

    function SizeBoth(z) //I really dont like the var container. I wish I could just call int whatever = this.
    {
        //alert(`${parseSizeX}x ${parseSizeY}y`);
        parseSizeX = Number(parseSizeX) + Number(z);
        currentSizeX = Number(currentSizeX) + Number(z);
        // 
        parseSizeY = Number(parseSizeY) + Number(z);
        currentSizeY = Number(currentSizeY) + Number(z);
        //
        //alert(`${parseSizeX}x ${parseSizeY}y`);
        childBox.style.width = (parseSizeX + valueType);
        childBox.style.height = (parseSizeY + valueType);
    }
}

function SetNewSizeDown(z)
{
    let growBy = document.getElementById('grow-number').value;
    if (currentSizeX >= 0)
    {
        if (currentSizeY >= 0)
        {
        switch(z){
            case 'y':
                SizeY(growBy); // (#) used for self selected numbers.
                break;
            case 'x':
                SizeX(growBy);
                break;
            case 'both':
                SizeBoth(growBy);
                break;
            }
        }
    } else {
        currentSizeX = 0;
        currentSizeY = 0;
        parseSizeX = 0;
        parseSizeY = 0;
    }

    function SizeY(z) // p can be used to add variable in the future to let the user select pixels.
    {
        parseSizeY = Number(parseSizeY) - Number(z);
        currentSizeY = Number(currentSizeY) - Number(z);
        childBox.style.height = (parseSizeY + valueType);
    }

    function SizeX(z)
    {
        parseSizeX = Number(parseSizeX) - Number(z);
        currentSizeX = Number(currentSizeX) - Number(z);
        childBox.style.width = (parseSizeX + valueType);
    }

    function SizeBoth(z)
    {
        //alert(`${parseSizeX}x ${parseSizeY}y`);
        parseSizeX = Number(parseSizeX) - Number(z);
        currentSizeX = Number(currentSizeX) - Number(z);
        // 
        parseSizeY = Number(parseSizeY) - Number(z);
        currentSizeY = Number(currentSizeY) - Number(z);
        //
        //alert(`${parseSizeX}x ${parseSizeY}y`);
        childBox.style.width = (parseSizeX + valueType);
        childBox.style.height = (parseSizeY + valueType);
    }
}

function NextMove() //called in GrowFunction
{
    childBox.style.width = '0px';
    childBox.style.height = '0px';
    parseSizeX = 0;
    parseSizeY = 0;
    currentSizeX = 0;
    currentSizeY = 0;
    border = 1;
    childBox.style.borderRadius =(border + 'px');
}

function Border(x)
{
    let newColor = document.getElementById('color-border').value;
    let borderSize = document.getElementById('input-border').value;
    switch(x){
        case 'solid':
            childBox.style.border = `${borderSize}px solid ${newColor}`;
        break;
        case 'dot':
            childBox.style.border = `${borderSize}px dotted ${newColor}`;
        break;
        case 'dash':
            childBox.style.border = `${borderSize}px dashed ${newColor}`;
        break;
    }
}

function Border2(x)
{
    let newColor = document.getElementById('color-border2').value;
    let borderSize = document.getElementById('input-border2').value;
    switch(x){
        case 'solid':
            childBox.style.borderBottom = `${borderSize}px solid ${newColor}`;
            //alert(`${borderSize}px solid #${newColor}`);
        break;
        case 'dot':
            childBox.style.borderBottom = `${borderSize}px dotted ${newColor}`;
        break;
        case 'dash':
            childBox.style.borderBottom = `${borderSize}px dashed ${newColor}`;
        break;
    }
}

function ChangeColor() //when color button is clicked.
{
    childBox.style.backgroundColor = document.getElementById('color').value; //this pulls the value from the <input type="color"> html.
}

function GetFaded() //when fade button is clicked.
{
    let buttonText = document.getElementById("button3"); //let functions live inside the block only and cannot be used by parent blocks.
    if (toggle === false) // x == y can convert values x === y only compairs them. It's safer in the event we used numbers down the road.
    {
        let sliderValue = document.getElementById("fade-value").value;
        childBox.style.opacity = (sliderValue * .01);
        toggle = true;
        buttonText.innerHTML = "unFade"; //change the text in the fade button.
    } else if (toggle === true)
        {
            childBox.style.opacity = 1;
            toggle = false;
            buttonText.innerHTML = " Fade "; //change back the text in the fade button.
        } //do not follow up with an else {} statment. It's not needed since the return will be void anyway.
}

function randomeNumber(maxNumber){ //add dice roll.
    let x = 0;
    y = Math.floor(Math.random()*maxNumber) +1;
    x = y;

    //random number generator between 1 & maxNumber.
}

var degree = 15; // set degree outside fucntion so it can be added to.
function DABR() {
    document.getElementById('child').style.transform = `translate(-50%, -50%) rotate(${degree}deg)`; // dont forget to add the translate that centers our box in the same statment!
    degree += 30; //degree will be set from [30, 60, 90, ect...] no need to use an array. Var reassignment is cheaper.
}

function Reset()
{
    childBox.style.height = '0px'; //adding the ; is optional as JavaScript will add it for you. This is not true on legacy versions of IE.
    childBox.style.width = '0px';
    childBox.style.opacity = 1;
    childBox.style.backgroundColor = '#e67e22';
    childBox.style.border = '0px solid #000';
    parseSizeX = 0;
    parseSizeY = 0;
    document.getElementById('color').value = '#000000';
    border = 1;
    childBox.style.borderRadius =(border + 'px');
    childBox.style.margin = '50% 0 0 50%';
    childBox.style.transform = `translate(-50%, -50%) rotate(0deg)`; 
    //this is not really resetting anything. It is creating new data and replacing old data. The refresh button in the browser is a slower option as it will have to load the page again.
}

function ChangeShape(x){
    switch(x){ //x is asigned in the HTML
        case 1:
            document.getElementById('child').style.borderRadius = '0px'; //return is not needed as we are changing the Element using code.
            break; //the code block ends here and doesnt need to process any other options now that we hit the break;. This cost less and is easier to read than if/then/else if/else statments. 
        case 2:
            document.getElementById('child').style.borderRadius = '2em';
            break;
        case 3:
            document.getElementById('child').style.borderRadius = '50%';
            break;
    }
}

function positionType(x)
{
    switch(x) {
        case 'absolute':
            childBox.style.position = 'absolute';
        break;
        case 'relative':
            childBox.style.position = 'relative';
        break;
        case 'static':
            childBox.style.position = 'static';
        break;
    }
}

var numberOfButtonsDown = 0;
function positionNew(x) //This code is a bit more of a mess.
{
    let thisButton = document.getElementById(`button-${x}`);
    switch(x) {
        case 't':
            if (thisButton.style.backgroundColor != 'rgb(235, 77, 75)') //here we are able to check the button color rather than make un-needed variables.
            {
                childBox.style.transform = 'translate(0,0)';
                childBox.style.margin = '0';
                childBox.style.top = '0';
                thisButton.style.backgroundColor = '#eb4d4b';
                numberOfButtonsDown++;
            } else {
                childBox.style.top = '';
                thisButton.style.backgroundColor = '#e3e3e3';
                if (numberOfButtonsDown <= 1) //we dont want to reset transforms or margins if other buttons are down.
                {
                    childBox.style.transform = 'translate(-50%,-50%)';
                    childBox.style.marginLeft = '50%';
                    childBox.style.marginTop = '50%';
                }
                numberOfButtonsDown--;
            }
        break;
        case 'b':
            if (thisButton.style.backgroundColor != 'rgb(235, 77, 75)'){
                childBox.style.transform = 'translate(0,0)';
                childBox.style.margin = '0';
                childBox.style.bottom = '0';
                thisButton.style.backgroundColor = '#eb4d4b';
                numberOfButtonsDown++;
            } else {
                childBox.style.bottom = '';
                thisButton.style.backgroundColor = '#e3e3e3';
                if (numberOfButtonsDown <= 1)
                {
                    childBox.style.transform = 'translate(-50%,-50%)';
                    childBox.style.marginLeft = '50%';
                    childBox.style.marginTop = '50%';
                }
                numberOfButtonsDown--;
            }
        break;
        case 'l':
            if (thisButton.style.backgroundColor != 'rgb(235, 77, 75)'){
                childBox.style.transform = 'translate(0,0)';
                childBox.style.margin = '0';
                childBox.style.left = '0';
                thisButton.style.backgroundColor = '#eb4d4b';
                numberOfButtonsDown++;
            } else {
                if (numberOfButtonsDown <= 1)
                {
                    childBox.style.transform = 'translate(-50%,-50%)';
                    childBox.style.marginLeft = '50%';
                    childBox.style.marginTop = '50%';
                }
                childBox.style.left = '';
                thisButton.style.backgroundColor = '#e3e3e3';
                numberOfButtonsDown--;
            }
        break;
        case 'r':
            if (thisButton.style.backgroundColor != 'rgb(235, 77, 75)'){
                childBox.style.transform = 'translate(0,0)';
                childBox.style.margin = '0';
                childBox.style.right = '0';
                thisButton.style.backgroundColor = '#eb4d4b';
                numberOfButtonsDown++;
            } else {
                if (numberOfButtonsDown <= 1)
                {
                    childBox.style.transform = 'translate(-50%,-50%)';
                    childBox.style.marginLeft = '50%';
                    childBox.style.marginTop = '50%';
                }
                childBox.style.right = '';
                thisButton.style.backgroundColor = '#e3e3e3';
                numberOfButtonsDown--;
            }
        break;
    }
}

function CodeUpdate(){
    let refrence = `<span><lable class='orange'>.myBox </lable>{ </span><br>`;
    let refrenceWidth = `<span> &nbsp  &nbsp width: ${currentSizeX}${valueType};</span><br>`;
    let refrenceHeight = `<span> &nbsp &nbsp height: ${currentSizeY}${valueType};</span><br>`;
    let refrencePosition = `<span> &nbsp  &nbsp position: absolute;</span><br>`;
    let refrenceTop = `<span> &nbsp  &nbsp Top: ;</span><br>`;
    let refrenceRight = `<span> &nbsp  &nbsp Right: ;</span><br>`;
    let refrenceBottom = `<span> &nbsp  &nbsp Bottom: ;</span><br>`;
    let refrenceLeft = `<span> &nbsp  &nbsp Left: ;</span><br>`;
    let refrenceZ = `<span> &nbsp  &nbsp z-index: ;</span><br>`;
    let refrenceBackgroundColor = `<span> &nbsp  &nbsp background-color: ${color};</span><br>`;
    let refrenceBorder = `<span> &nbsp  &nbsp border: 0px solid #color;</span><br>`;
    let refrenceBorderBottom = `<span> &nbsp  &nbsp border-bottom: 0px solid #color2;</span><br>`;
    let refrenceBorderRadius = `<span> &nbsp  &nbsp border-radius: 0px;</span><br>`;
    let refrenceOpacity = `<span> &nbsp  &nbsp opacity: 1;</span><br>`;
    let refrenceMarginTop = `<span> &nbsp  &nbsp margin-top: 0px;</span><br>`;
    let refrenceMaginRight = `<span> &nbsp  &nbsp margin-right: 0px;</span><br>`;
    let refrenceMarginBottom = `<span> &nbsp  &nbsp margin-bottom: 0px;</span><br>`;
    let refrenceMarginLeft = `<span> &nbsp  &nbsp margin-left: 0px;</span><br>`;
    let refrenceTransform = `<span> &nbsp  &nbsp transform: translate(-50%, -50%);</span><br>`;
    let refrenceTransition = `<span> &nbsp  &nbsp transition: width 0.2s, height 0.2s;</span><br>`;
    let refrenceLast = `<span>}</span>`;

    //here come the conditional oporators! ES6!

    let bibityBobityBoo = refrence + refrenceWidth + refrenceHeight + refrencePosition + refrenceTop + refrenceRight + refrenceBottom + refrenceLeft + refrenceZ + refrenceBackgroundColor +refrenceBorder + refrenceBorderBottom + refrenceBorderRadius + refrenceOpacity + refrenceMarginTop + refrenceMaginRight + refrenceMarginBottom + refrenceMarginLeft + refrenceTransform + refrenceTransition + refrenceLast;
    document.getElementById('code-box').innerHTML = bibityBobityBoo;
}

//here's were things get a little messy.
const player = document.getElementById('player'); //2nd section lets {get} the element. 
var locationTop = 3; // (Step:1) XY value for margin. You can only set a Z value if the element has position: [atribute]. 
var locationLeft = 3; // this is not a const because we are going to have to change the value as we update using the button.
player.style.marginTop = (locationTop + 'em'); //(Step:2) margin-Top = "string value"; lets creat that!
player.style.marginLeft = (locationTop + 'em'); //ES6 update to how this is written.

function Move(x)
{
    switch(x){ //x is set in the HTML. addtionally the order of buttons goes from most used to least used.
        case up:
            locationTop--;
            player.style.marginTop = (locationTop + 'em');
        break;
        case right:
            locationLeft++;
            player.style.marginLeft = (locationLeft + 'em');
        break;
        case left:
            locationLeft--;
            player.style.marginLeft = (locationLeft + 'em');
        break;
        case down:
            locationTop++;
            player.style.marginTop = (locationTop + 'em');
        break;
    }
    //alert("moved");
}

function Margin(newSide,valueType)
{
    let inputValue = document.getElementById(`input-margin-${newSide}`).value; 
    //lets switch it up and us if statments instead of ... switch statments.
    if (newSide === 'top'){
        childBox.style.marginTop = inputValue + valueType;
    } else if (newSide === 'right'){
        childBox.style.marginRight = inputValue + valueType;
    } else if (newSide === 'bottom'){
        childBox.style.marginBottom = inputValue + valueType;
    } else if (newSide === 'left'){
        childBox.style.marginLeft = inputValue + valueType;
    }
}

function wasd(event)
{
    let key = event.keyCode;
    switch(key){ //used alert(key); to identify keyCode values.
        case 83:
                locationTop++;
                player.style.marginTop = (locationTop + 'em');
        break;
        case 87:
                locationTop--;
                player.style.marginTop = (locationTop + 'em');
        break;
        case 65:
                locationLeft--;
                player.style.marginLeft = (locationLeft + 'em');
        break;
        case 68:
                locationLeft++;
                player.style.marginLeft = (locationLeft + 'em');
        break;
    }
    //alert(key);
}

/*
theres a lot of other styles I wanted to play with, but
I feel this was well done for a bonus activity.
I look forward to learning more!
*/