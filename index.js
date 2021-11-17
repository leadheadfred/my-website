const CSS_COLOR_NAMES = [
    "AliceBlue",
    "AntiqueWhite",
    "Aqua",
    "Aquamarine",
    "Azure",
    "Beige",
    "Bisque",
    "Black",
    "BlanchedAlmond",
    "Blue",
    "BlueViolet",
    "Brown",
    "BurlyWood",
    "CadetBlue",
    "Chartreuse",
    "Chocolate",
    "Coral",
    "CornflowerBlue",
    "Cornsilk",
    "Crimson",
    "Cyan",
    "DarkBlue",
    "DarkCyan",
    "DarkGoldenRod",
    "DarkGray",
    "DarkGrey",
    "DarkGreen",
    "DarkKhaki",
    "DarkMagenta",
    "DarkOliveGreen",
    "DarkOrange",
    "DarkOrchid",
    "DarkRed",
    "DarkSalmon",
    "DarkSeaGreen",
    "DarkSlateBlue",
    "DarkSlateGray",
    "DarkSlateGrey",
    "DarkTurquoise",
    "DarkViolet",
    "DeepPink",
    "DeepSkyBlue",
    "DimGray",
    "DimGrey",
    "DodgerBlue",
    "FireBrick",
    "FloralWhite",
    "ForestGreen",
    "Fuchsia",
    "Gainsboro",
    "GhostWhite",
    "Gold",
    "GoldenRod",
    "Gray",
    "Grey",
    "Green",
    "GreenYellow",
    "HoneyDew",
    "HotPink",
    "IndianRed",
    "Indigo",
    "Ivory",
    "Khaki",
    "Lavender",
    "LavenderBlush",
    "LawnGreen",
    "LemonChiffon",
    "LightBlue",
    "LightCoral",
    "LightCyan",
    "LightGoldenRodYellow",
    "LightGray",
    "LightGrey",
    "LightGreen",
    "LightPink",
    "LightSalmon",
    "LightSeaGreen",
    "LightSkyBlue",
    "LightSlateGray",
    "LightSlateGrey",
    "LightSteelBlue",
    "LightYellow",
    "Lime",
    "LimeGreen",
    "Linen",
    "Magenta",
    "Maroon",
    "MediumAquaMarine",
    "MediumBlue",
    "MediumOrchid",
    "MediumPurple",
    "MediumSeaGreen",
    "MediumSlateBlue",
    "MediumSpringGreen",
    "MediumTurquoise",
    "MediumVioletRed",
    "MidnightBlue",
    "MintCream",
    "MistyRose",
    "Moccasin",
    "NavajoWhite",
    "Navy",
    "OldLace",
    "Olive",
    "OliveDrab",
    "Orange",
    "OrangeRed",
    "Orchid",
    "PaleGoldenRod",
    "PaleGreen",
    "PaleTurquoise",
    "PaleVioletRed",
    "PapayaWhip",
    "PeachPuff",
    "Peru",
    "Pink",
    "Plum",
    "PowderBlue",
    "Purple",
    "RebeccaPurple",
    "Red",
    "RosyBrown",
    "RoyalBlue",
    "SaddleBrown",
    "Salmon",
    "SandyBrown",
    "SeaGreen",
    "SeaShell",
    "Sienna",
    "Silver",
    "SkyBlue",
    "SlateBlue",
    "SlateGray",
    "SlateGrey",
    "Snow",
    "SpringGreen",
    "SteelBlue",
    "Tan",
    "Teal",
    "Thistle",
    "Tomato",
    "Turquoise",
    "Violet",
    "Wheat",
    "White",
    "WhiteSmoke",
    "Yellow",
    "YellowGreen",
  ];
let firstElement;
let secondElement;
let initial=000000;
let hexCode;
let firstColor=Number(Math.floor(Math.random()*16777215));
let secondColor=Number(Math.floor(Math.random()*16777215));
let nextColor=firstColor;
let colorCount=0;
let buttonColor=[]

createButton = () =>
{
    let text=prompt(`what do you want your button to say?`);
    firstElement=document.createElement("button")
    let newText=document.createTextNode(text)
    firstElement.appendChild(newText);
    firstElement.setAttribute("onclick","anotherFunction()");
    firstElement.setAttribute("id","button1");
    document.body.appendChild(firstElement);
}
myFunction = () =>
{
    firstElement=document.createElement("button")
    let newText=document.createTextNode("This is a javascript button")
    firstElement.appendChild(newText);
    firstElement.setAttribute("onclick","anotherFunction()");
    firstElement.setAttribute("class","button");
    document.body.appendChild(firstElement);
}   
anotherFunction = ()=>
{
    document.write("This does nothing, dont press it again!")
}
removeElement = ()=>
{
    let remove=confirm(`Are you sure you want to remove the duck?`)
    if (remove==true)
    {
        document.getElementById("img").style.display = "none";
    }
    else
    {
        return
    }
}
newColors = ()=>
{
    firstColor=Number(Math.floor(Math.random()*16777215));
    secondColor=Number(Math.floor(Math.random()*16777215));
    nextColor=firstColor;
    colorCount=0;
}
background = ()=>
{
    //let interval=Number(secondColor-firstColor)/10000
    nextColor=nextColor+2;
    hexCode=nextColor.toString(16)
    while(hexCode.length<6)
    {
        hexCode="0"+hexCode
    }
    document.getElementById("body").style.backgroundColor = `#`+hexCode;
    nextColor=parseInt(hexCode,16);
    if (nextColor==secondColor || nextColor==secondColor+1)
    {
        newColors();
    }
}
changeTextColor = ()=>
{   
    let length = document.getElementsByClassName("text").length;
    for (i=0;i<length;i++)
    {  
    document.getElementsByClassName("text")[i].style.color = CSS_COLOR_NAMES[Math.round(CSS_COLOR_NAMES.length*Math.random())]
    }

}
changeButtonColor = ()=>
{
    let length = document.getElementsByClassName("button").length;
    console.log(Math.floor(Math.random()*16777215).toString(16));
    for (i=0;i<length;i++)
    {  
    document.getElementsByClassName("button")[i].style.backgroundColor = "#" +Math.floor(Math.random()*16777215).toString(16)//CSS_COLOR_NAMES[Math.round(CSS_COLOR_NAMES.length*Math.random())]
    }
}
// testFunction = ()=>
// {
//     let test=document.getElementsByClassName("nav");
//     let length=CSS_COLOR_NAMES.length;
//     for (i=0;i<test.length;i++)
//     {
//         console.log(buttonColor)
//         test[i].addEventListener("mouseover",function(a)
//         {
//             buttonColor[i]=a.target.style.backgroundColor;
//             a.target.style.backgroundColor=CSS_COLOR_NAMES[Math.round(length*Math.random())];
//         })
//         test[i].addEventListener("mouseout",function(a)
//         {
//             a.target.style.backgroundColor=buttonColor[i];
//         })
//     }
// }
submit = ()=>
{
    document.write("Thanks for your email!")
}
let x=Math.random()*CSS_COLOR_NAMES.length;
let color=CSS_COLOR_NAMES[x];