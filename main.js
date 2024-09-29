const picker = document.querySelector(".mainColor_js");
const block1 = document.querySelector(".block1_js");
const block2 = document.querySelector(".block2_js");
const block3 = document.querySelector(".block3_js");
const block4 = document.querySelector(".block4_js");
const dopBlock1 = document.querySelector(".dopBlock1_js");
const dopBlock2 = document.querySelector(".dopBlock2_js");
const dopBlock3 = document.querySelector(".dopBlock3_js");
const dopBlock4 = document.querySelector(".dopBlock4_js");
const dopBlock5 = document.querySelector(".dopBlock5_js");
const blText1 = document.querySelector(".blText1");
const blText2 = document.querySelector(".blText2");
const blText3 = document.querySelector(".blText3");
const blText4 = document.querySelector(".blText4");
const blText5 = document.querySelector(".blText5");
let someColor;


picker.addEventListener('input', function(){
    block1.style.backgroundColor = hexToRgb(picker.value, -49, -52, -40);
    dopBlock1.style.backgroundColor = hexToRgb(picker.value, -49, -52, -40);
    someColor = rgbToHex(block1.style.backgroundColor);
    blText1.textContent = someColor;
})

picker.addEventListener('input', function(){
    block2.style.backgroundColor = hexToRgb(picker.value, -78, -90, -40);
    dopBlock2.style.backgroundColor = hexToRgb(picker.value, -78, -90, -40);
    someColor = rgbToHex(block2.style.backgroundColor);
    blText2.textContent = someColor;
})

picker.addEventListener('input', function(){
    block3.style.backgroundColor = hexToRgb(picker.value, -8, -24, 44);
    dopBlock4.style.backgroundColor = hexToRgb(picker.value, -8, -24, 44);
    someColor = rgbToHex(block3.style.backgroundColor);
    blText4.textContent = someColor;
})

picker.addEventListener('input', function(){
    block4.style.backgroundColor = hexToRgb(picker.value, 25, 13, 61);
    dopBlock5.style.backgroundColor = hexToRgb(picker.value, 25, 13, 61);
    someColor = rgbToHex(block4.style.backgroundColor);
    blText5.textContent = someColor;
})

picker.addEventListener('input', function(){
    dopBlock3.style.backgroundColor = picker.value;
    blText3.textContent = picker.value;
})

function hexToRgb(hex, x, y, z) {
    hex = hex.replace(/^#/,'');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    return "rgb(" + (r - x) + "," + (g - y) + "," + (b - z) + ")";
}


function rgbToHex(color) {
    color = ""+ color;
    if (!color || color.indexOf("rgb") < 0) {
        return;
    }

    if (color.charAt(0) == "#") {
        return color;
    }

    var nums = /(.*?)rgb\((\d+),\s*(\d+),\s*(\d+)\)/i.exec(color),
        r = parseInt(nums[2], 10).toString(16),
        g = parseInt(nums[3], 10).toString(16),
        b = parseInt(nums[4], 10).toString(16);

    return "#"+ (
        (r.length == 1 ? "0"+ r : r) +
        (g.length == 1 ? "0"+ g : g) +
        (b.length == 1 ? "0"+ b : b)
    );
}


block1.addEventListener('click', function(){
    picker.value = rgbToHex(block1.style.backgroundColor);
    block1.style.backgroundColor = hexToRgb(picker.value, -49, -52, -40);
    dopBlock1.style.backgroundColor = hexToRgb(picker.value, -49, -52, -40);
    someColor = rgbToHex(block1.style.backgroundColor);
    blText1.textContent = someColor;
    block2.style.backgroundColor = hexToRgb(picker.value, -78, -90, -40);
    dopBlock2.style.backgroundColor = hexToRgb(picker.value, -78, -90, -40);
    someColor = rgbToHex(block2.style.backgroundColor);
    blText2.textContent = someColor;
    dopBlock3.style.backgroundColor = picker.value;
    blText3.textContent = picker.value;
    block3.style.backgroundColor = hexToRgb(picker.value, -8, -24, 44);
    dopBlock4.style.backgroundColor = hexToRgb(picker.value, -8, -24, 44);
    someColor = rgbToHex(block3.style.backgroundColor);
    blText4.textContent = someColor;
    block4.style.backgroundColor = hexToRgb(picker.value, 25, 13, 61);
    dopBlock5.style.backgroundColor = hexToRgb(picker.value, 25, 13, 61);
    someColor = rgbToHex(block4.style.backgroundColor);
    blText5.textContent = someColor;
})

block2.addEventListener('click', function(){
    picker.value = rgbToHex(block2.style.backgroundColor);
    block1.style.backgroundColor = hexToRgb(picker.value, -49, -52, -40);
    dopBlock1.style.backgroundColor = hexToRgb(picker.value, -49, -52, -40);
    someColor = rgbToHex(block1.style.backgroundColor);
    blText1.textContent = someColor;
    block2.style.backgroundColor = hexToRgb(picker.value, -78, -90, -40);
    dopBlock2.style.backgroundColor = hexToRgb(picker.value, -78, -90, -40);
    someColor = rgbToHex(block2.style.backgroundColor);
    blText2.textContent = someColor;
    dopBlock3.style.backgroundColor = picker.value;
    blText3.textContent = picker.value;
    block3.style.backgroundColor = hexToRgb(picker.value, -8, -24, 44);
    dopBlock4.style.backgroundColor = hexToRgb(picker.value, -8, -24, 44);
    someColor = rgbToHex(block3.style.backgroundColor);
    blText4.textContent = someColor;
    block4.style.backgroundColor = hexToRgb(picker.value, 25, 13, 61);
    dopBlock5.style.backgroundColor = hexToRgb(picker.value, 25, 13, 61);
    someColor = rgbToHex(block4.style.backgroundColor);
    blText5.textContent = someColor;
})

block3.addEventListener('click', function(){
    picker.value = rgbToHex(block3.style.backgroundColor);
    block1.style.backgroundColor = hexToRgb(picker.value, -49, -52, -40);
    dopBlock1.style.backgroundColor = hexToRgb(picker.value, -49, -52, -40);
    someColor = rgbToHex(block1.style.backgroundColor);
    blText1.textContent = someColor;
    block2.style.backgroundColor = hexToRgb(picker.value, -78, -90, -40);
    dopBlock2.style.backgroundColor = hexToRgb(picker.value, -78, -90, -40);
    someColor = rgbToHex(block2.style.backgroundColor);
    blText2.textContent = someColor;
    dopBlock3.style.backgroundColor = picker.value;
    blText3.textContent = picker.value;
    block3.style.backgroundColor = hexToRgb(picker.value, -8, -24, 44);
    dopBlock4.style.backgroundColor = hexToRgb(picker.value, -8, -24, 44);
    someColor = rgbToHex(block3.style.backgroundColor);
    blText4.textContent = someColor;
    block4.style.backgroundColor = hexToRgb(picker.value, 25, 13, 61);
    dopBlock5.style.backgroundColor = hexToRgb(picker.value, 25, 13, 61);
    someColor = rgbToHex(block4.style.backgroundColor);
    blText5.textContent = someColor;
})

block4.addEventListener('click', function(){
    picker.value = rgbToHex(block4.style.backgroundColor);
    block1.style.backgroundColor = hexToRgb(picker.value, -49, -52, -40);
    dopBlock1.style.backgroundColor = hexToRgb(picker.value, -49, -52, -40);
    someColor = rgbToHex(block1.style.backgroundColor);
    blText1.textContent = someColor;
    block2.style.backgroundColor = hexToRgb(picker.value, -78, -90, -40);
    dopBlock2.style.backgroundColor = hexToRgb(picker.value, -78, -90, -40);
    someColor = rgbToHex(block2.style.backgroundColor);
    blText2.textContent = someColor;
    dopBlock3.style.backgroundColor = picker.value;
    blText3.textContent = picker.value;
    block3.style.backgroundColor = hexToRgb(picker.value, -8, -24, 44);
    dopBlock4.style.backgroundColor = hexToRgb(picker.value, -8, -24, 44);
    someColor = rgbToHex(block3.style.backgroundColor);
    blText4.textContent = someColor;
    block4.style.backgroundColor = hexToRgb(picker.value, 25, 13, 61);
    dopBlock5.style.backgroundColor = hexToRgb(picker.value, 25, 13, 61);
    someColor = rgbToHex(block4.style.backgroundColor);
    blText5.textContent = someColor;
})

document.addEventListener('DOMContentLoaded', () => { 
    const tooltip = document.getElementById('tooltip');
    const colorBlocks = document.querySelectorAll('.specBlock');

    colorBlocks.forEach(block => {
        block.addEventListener('mouseover', (e) => {
            const bgColor = window.getComputedStyle(block).backgroundColor;
            tooltip.textContent = rgbToHex(bgColor);
            tooltip.style.display = 'block'; 
        });

        block.addEventListener('mousemove', (e) => {
            tooltip.style.left = `${e.pageX + 10}px`; 
            tooltip.style.top = `${e.pageY + 10}px`;
        });

        block.addEventListener('mouseout', () => {
            tooltip.style.display = 'none';
        });
    });
});


$(".dopBlock1").click(function(){
    let temp = $("<input>");
    $("body").append(temp);
    temp.val($(blText1).text()).select();
    document.execCommand("copy");
    temp.remove();
})

$(".dopBlock2").click(function(){
    let temp = $("<input>");
    $("body").append(temp);
    temp.val($(blText2).text()).select();
    document.execCommand("copy");
    temp.remove();
})

$(".dopBlock3").click(function(){
    let temp = $("<input>");
    $("body").append(temp);
    temp.val($(blText3).text()).select();
    document.execCommand("copy");
    temp.remove();
})

$(".dopBlock4").click(function(){
    let temp = $("<input>");
    $("body").append(temp);
    temp.val($(blText4).text()).select();
    document.execCommand("copy");
    temp.remove();
})


$(".dopBlock5").click(function(){
    let temp = $("<input>");
    $("body").append(temp);
    temp.val($(blText5).text()).select();
    document.execCommand("copy");
    temp.remove();
})