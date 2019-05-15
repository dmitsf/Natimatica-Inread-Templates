var css = `
@font-face {
  font-family: 'PragmaticaCyrillic';
  src: url('fonts/PragmaticaCyrillic.svg') format('svg'),
       url('fonts/PragmaticaCyrillic.ttf') format('truetype'),
       url('fonts/PragmaticaCyrillic.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'PFHighwaySansPro';
  src: url('fonts/PFHighwaySansPro.svg') format('svg'),
       url('fonts/PFHighwaySansPro.ttf') format('truetype'),
       url('fonts/PFHighwaySansPro.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'PragmaticaSlab';
  src: url('fonts/PragmaticaSlab-ExtraLight.svg') format('svg'),
       url('fonts/PragmaticaSlab-ExtraLight.ttf') format('truetype'),
       url('fonts/PragmaticaSlab-ExtraLight.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

body {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  margin-bottom: 0;
  background-color: #fff;
}

.sm-span {
  display: none;
}

.calculator-container {
  max-width: 768px;
  border: 0px;
  overflow: hidden;
  margin: 0 auto;
}

.first-calculator-title {
  width: 767px;
  height: 50px;
  background-color: #f5f5f6;
}

.first-calculator-title div {
  padding: 10px 0px 0px 62px;
  width: 642px;
  font-family: 'PFHighwaySansPro';
  font-size: 32px;
  font-weight: 100;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
  white-space: nowrap;
}

.first-question-block {
  width: 768px;
  height: 63px;
  border-bottom: 1px solid #dde0e1;
}

.first-question-block .car-block {
  padding: 5px 0px 0px 62px;
}

.first-question-block .car-block .question-div{
  vertical-align: top;
  padding: 14px 0px 0px 21px;
  width: 364px;
  height: 23px;
  font-family: 'PFHighwaySansPro';
  font-size: 25px;
  font-weight: 100;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #404959;
  display: inline-flex;
}

.circleBase {
  border-radius: 50%;
  behavior: url(PIE.htc); /* remove if you don't care about IE8 */
}

.circle-div{
  width: 52px;
  height: 52px;
  border: 1px solid #dde0e1;
  display: inline-flex;
}

.car_img {
  width: 38px;
  height: 17px;
  padding: 16px 0px 0px 8px;
}

.present_img {
  width: 18px;
  height: 23px;
  padding: 15px 0px 0px 17px;
}

.calculator {
  position: relative;
}

.calculator-title {
  display: inline-block;
  font-size: 14px;
  line-height: 16px;
  color: #010101;
  font-family: 'PragmaticaCyrillic';
  width: 175px;
  margin-left: 75px;
  transform: translate(0%, 23%);
}

.calculator-first-number {
  display: inline-block;
  font-size: 12px;
  line-height: 15px;
  color: #000000;
  font-family: 'PragmaticaCyrillic';
  margin-left: 25px;
  margin-right: 10px;
}

.buttons-container {
  margin: 10px 0 0px 35%;
}

.buttons-container div {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 213px;
  height: 50px;
  border-radius: 10px;
  background-color: #ffe60d;
  cursor: pointer;
  white-space: nowrap;
}

.buttons-container div div{
  width: 58px;
  height: 14px;
  font-family: 'PragmaticaCyrillic';
  font-size: 18px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
}

.calculator_options {
  padding: 0px 56px 0px 63px;
}

input[type="range"] {
  padding: 2px;
  height: 2px;
  width: 100%;
  margin-top: 13px;
  -webkit-appearance: none;
  border-radius: 5px;   
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
}

input[type="text"] {
  padding-left: 20px;
  padding-top: 13px;
  /*width: 51px;
  height: 13px;*/
  font-family: PragmaticaCyrillic;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #939aa1;
  width: 137px;
  height: 53px;
  border-radius: 8px;
  background-color: #f0f4f8;
}

input[type="text"] {
  margin-left: 20px;
  margin-top: 5px;
  width: 137px;
  height: 53px;
  border-radius: 8px;
  background-color: #f0f4f8;
  border: none;
  display: inline-flex;
}


input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 50%; 
  background: #ffffff;
  cursor: pointer;
  border: 2px solid #dde0e1;
}

input[type="range"]::-moz-range-thumb {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #ffffff;
  cursor: pointer;
  border: 2px solid #dde0e1;
}

.item_range {
  width: 141px;
  height: 15px;
  font-family: 'PragmaticaCyrillic';
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #404959;
  white-space: nowrap;
}

.range_block {
  width: 72%;
  margin-top: 13px;
  float: left;
}

.from_item_range {
  white-space: nowrap;
  width: 32px;
  height: 10px;
  font-family: PragmaticaCyrillic;
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #939aa1;
  float: left;
  position: relative;
  left: 5px;
}

.to_item_range {
  white-space: nowrap;
  width: 32px;
  height: 10px;
  font-family: PragmaticaCyrillic;
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #939aa1;
  position: relative;
  left: 85%;
}


.second-calculator-title {
  width: 767px;
  height: 215px;
  background-color: #f5f5f6;
}

.third-calculator-title {
  width: 100%;
  height: 100%;
  background-color: #f5f5f6;
}

.second-calculator-title .tinkoff-drive {
  padding: 17px 0px 0px 69px;
  width: 486px;
  height: 67px;
  font-family: PFHighwaySansPro;
  font-size: 32px;
  font-weight: 100;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
}

.avtoservice {
  padding-top: 24px;
  width: 388px;
  height: 22px;
  font-family: PFHighwaySansPro;
  font-size: 25.5px;
  font-weight: 100;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
  white-space: nowrap;
}

.avtoservice-2 {
  padding-top: 14px;
  width: 388px;
  height: 22px;
  font-family: PFHighwaySansPro;
  font-size: 25.5px;
  font-weight: 100;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
  white-space: nowrap;
}

.sum {
  padding-top: 7px;
  width: 456px;
  height: 15px;
  font-family: PFHighwaySansPro;
  font-size: 16px;
  font-weight: 100;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
  white-space: nowrap;
}

.balls {
  padding: 20px 0px 0px 70px;
  width: 494px;
  height: 18px;
  font-family: PragmaticaCyrillic;
  font-size: 18px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #404959;
  white-space: nowrap;
}

.second-question-block {
  padding: 20px 0px 0px 0px;
  width: 768px;
  height: 79px;
}

.second-question-block .present-block {
  padding: 14px 0px 0px 62px; 
}

.present-text {
  width: 466px;
  height: 54px;
  font-family: PFHighwaySansPro;
  font-size: 25px;
  font-weight: 100;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #404959;
  white-space: nowrap;
}

.present-icon {
  float: left;
  margin-right: 20px;
}

#second-page {
  display: none;
}

.ruble_symbol {
  font-family: PragmaticaSlab;
  font-weight: 200;
}

@media screen and (max-width: 768px) {
  .first-calculator-title div {
    font-size: 24px;
    padding-left: 10%;
  }

  .range_block {
    width: 62%;
  }

  .to_item_range {
    left: 72%;
  }

  .avtoservice {
    font-size: 20px;
  }

  .present-text {
    font-size: 20px;
  }

  .second-calculator-title .tinkoff-drive {
    font-size: 27px;
  }

  .first-question-block .car-block .question-div {
    font-size: 21px;
  }

  .first-question-block {
    height: 63px;
  }

  .buttons-container {
    margin-left: 30%;
  }

  .sum {
    font-size: 14px;
  }

  .avtoservice-2 {
    font-size: 24px;
  }

  .avtoservice {
    font-size: 18px;
  }

  .final_text {
    text-align: center;
    padding-top: 20%;
  }

  .first-question-block .car-block {
    padding-top: 5px;
  }

  input[type="text"] {
    height: 42px;
  }

  .balls {
    height: 0px;
  }

  .second-question-block {
    padding-top: 0px;
    height: 60px;
  }
}


@media screen and (max-width: 700px) {
  .first-question-block .car-block {
    padding-top: 5px;
  }

  .range_block {
    margin-top: 5px;
    width: 59%;
  }

  .buttons-container div {
    height: 42px;
  }

  input[type="text"] {
    height: 35px;
    margin-top: 5px;
  }

  .first-question-block .car-block .question-div {
    padding-top: 5px;
  }
}

@media screen and (max-width: 660px) {
  .first-calculator-title div {
    font-size: 22px;
    padding-left: 10%;
  }

  .second-calculator-title {
    height: 200px;
  }
}

@media screen and (max-width: 620px) {
  input[type="text"] {
    height: 28px;
  }

  .item_range {
    font-size: 14px;
    height: 14px;
  }

  input[type="range"] {
    margin-top: 5px;
  }

  .second-calculator-title {
    height: 180px;
  }

  .second-calculator-title .tinkoff-drive {
    padding-top: 5px;
  }
}

@media screen and (max-width: 590px) {
  .first-calculator-title {
    height: 44px;
  }

  .avtoservice {
    height: 5px;
    padding-top: 15px;
  }

  .second-calculator-title {
    height: 160px;
  }
}

@media screen and (max-width: 566px) {
  .first-calculator-title div {
    font-size: 18px;
  }

  .range_block {
    width: 52%;
  }

  .to_item_range {
    left: 57%;
  }

  .buttons-container {
    margin-left: 25%;
  }

  .first-question-block .car-block .question-div {
    font-size: 16px;
  }

  .avtoservice {
    font-size: 20px;
  }

  .present-text {
    font-size: 14px;
  }

  .second-calculator-title .tinkoff-drive {
    font-size: 22px;
  }

  .sum {
    font-size: 11px;
  }

  .avtoservice-2 {
    font-size: 18px;
  }

  .avtoservice {
    font-size: 14px;
  }

  .final_text {
    text-align: center;
    padding-top: 30%;
  }

  input[type="text"] {
    width: 100px;
    height: 28px;
  }

  .item_range {
    height: 10px;
    font-size: 10px;
  }

  .buttons-container div div {
    font-size: 16px;
  }

  .buttons-container div {
    height: 34px;
  }

  .car_img {
    width: 28px;
    height: 14px;
    padding: 9px 0px 0px 3px;
  }

  .present_img {
    width: 28px;
    height: 14px;
    padding: 9px 0px 0px 3px;
  }

  .circle-div {
    width: 34px;
    height: 34px;
  }

  .first-question-block {
    height: 45px;
  }

  .first-calculator-title {
    height: 35px;
  }

  input[type="text"] {
    width: 100px;
    height: 23px;
  }

  .second-calculator-title {
    height: 130px;
  }

  .second-calculator-title .tinkoff-drive {
    padding-top: 0px;
  }

  .avtoservice {
    padding-top: 10px;
  }
}

#third-page {
  display: none;
}

.final_text {
  text-align: center;
  padding-top: 15%;
  font-size: 36px;
  font-family: PragmaticaCyrillic;
}

.final_text img {
  width: 50%;
}

.get_card, .get_card:hover { 
  text-decoration: none !important; 
}

@media screen and (max-width: 490px) {
  .car_img {
    width: 28px;
    height: 14px;
    padding: 9px 0px 0px 3px;
  }

  .present_img {
    width: 28px;
    height: 14px;
    padding: 9px 0px 0px 3px;
  }

  .circle-div {
    width: 34px;
    height: 34px;
  }

  .first-question-block {
    height: 45px;
  }

  .first-calculator-title {
    height: 34px;
  }

  input[type="text"] {
    height: 20px;
  }

  input[type="range"] {
    margin-top: 0px;
  }

  .item_range {
    height: 8px;
    font-size: 9px;
  }

  .to_item_range {
    left: 60%;
  }

  .buttons-container div div {
    font-size: 14px;
  }

  .buttons-container div {
    height: 30px;
  }

  .second-question-block .present-block {
    padding-top: 0px;
  }

  .second-question-block {
    height: 40px;
  }
}

@media screen and (max-width: 470px) {
  .circle-div {
    width: 28px;
    height: 28px;
  }

  .car_img {
    width: 22px;
    padding: 7px 0px 0px 3px;
  }

  .present_img {
    width: 22px;
    padding: 7px 0px 0px 3px;
  }

  .first-question-block {
    height: 38px;
  }

  .buttons-container div {
    height: 24px;
  }

  input[type="text"] {
    height: 18px;
  }

  .range_block {
    margin-top: 2px;
  }
}

@media screen and (max-width: 460px) {
  .first-calculator-title div {
    padding-left: 20px;
    height: 32px;
  }

  .first-question-block .car-block {
    padding-left: 4px;
  }

  .first-question-block .car-block .question-div {
    padding: 5px 0px 0px 15px
  }

  .calculator_options {
    padding: 0px 0px 0px 8px;
  }

  input[type="text"] {
    width: 100px;
  }

  .range_block {
    width: 60%;
  }

  .to_item_range {
    left: 60%;
  }

  .buttons-container {
    margin-left: 17%;
  }

  .second-calculator-title {
    height: 115px;
  }

  .second-calculator-title .tinkoff-drive {
    font-size: 20px;
  }

  .sum {
    font-size: 10px;
  }

  .avtoservice {
    padding-top: 5px;
    font-size: 12px;
  }

  .avtoservice-2 {
    padding-top: 15px;
    font-size: 16px;
  }

  .second-question-block {
    padding-top: 0px;
  }

  .present-text {
    font-size: 12px;
  }

  .first-page-submit {
    margin-top: 120px;
  }

  .second-page-submit {
    margin-top: 5px;
  }

  .buttons-container {
    margin-left: 25%;
  }
}

@media screen and (max-width: 420px) {
  .first-calculator-title div {
    font-size: 16px;
  }

  .first-calculator-title {
    height: 30px;
  }

  input[type="text"] {
    height: 14px;
    padding-top: 10px;
  }

  .item_range {
    height: 6px;
    font-size: 8px;
  }

  .from_item_range {
    font-size: 8px;
  }

  .to_item_range {
    font-size: 8px;
  }

  input[type="range"] {
    padding: 1px;
    height: 1px;
  }

  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 8px;
    height: 8px;
    border-radius: 50%; 
    background: #ffffff;
    cursor: pointer;
    border: 2px solid #dde0e1;
  }

  input[type="range"]::-moz-range-thumb {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #ffffff;
    cursor: pointer;
    border: 2px solid #dde0e1;
  }

  .range_block {
    margin-top: 0px;
  }

  .car_img {
    width: 18px;
    height: 14px;
    padding: 5px 0px 0px 3px;
  }

  .present_img {
    width: 18px;
    height: 14px;
    padding: 5px 0px 0px 3px;
  }

  .first-question-block {
    height: 34px;
  }

  .buttons-container {
    margin-top: 5px;
  }

  .buttons-container div {
    height: 24px;
  }

  .first-calculator-title div {
    font-size: 14px;
  }

  .first-calculator-title {
    height: 28px;
  }
}

@media screen and (max-width: 400px) {
  .first-calculator-title div {
    font-size: 14px;
    padding-top: 3px;
  }

  .first-calculator-title {
    height: 18px;
  }

  input[type="text"] {
    height: 20px;
    padding-top: 5px;
    font-size: 12px;
    margin-top: 10px;
    width: 60px;
  }

  .first-calculator-title div {
    font-size: 12px;
  }

  .first-question-block .car-block .question-div {
    font-size: 13px;
  }

  .buttons-container div {
    height: 20px;
  }

  .buttons-container div div {
    font-size: 12px;
  }

  .circle-div {
    width: 20px;
    height: 20px;
  }

  .car_img {
    width: 15px;
    height: 10px;
    padding: 5px 0px 0px 3px;
  }

  .present_img {
    width: 15px;
    height: 10px;
    padding: 5px 0px 0px 3px;
  }

  .first-question-block .car-block .question-div {
    padding-top: 2px;
  }

  .first-question-block .car-block {
    padding-top: 1px;
  }

  .first-question-block {
    height: 24px;
  }

  .item_range {
    height: 12px;
    font-size: 9px;
  }

  .second-calculator-title {
    height: 112px;
  }

  .second-calculator-title .tinkoff-drive {
    padding-left: 5%;
  }

  .buttons-container {
    margin-left: 20%;
  }

  .balls {
    padding-top: 5px;
  }
}

@media screen and (max-width: 360px) {
  input[type="text"] {
    height: 14px;
    margin-top: 10px;
  }
  
  .buttons-container div {
    height: 20px;
  }

  .sm-span {
    display: block;
  }

  .from_item_range {
    display: none;
  }

  .to_item_range {
    display: none;
  }

  .item_range {
    height: 12px;
    font-size: 10px;
    font-size: 8px;
  }

  .second-calculator-title .tinkoff-drive {
    padding-left: 30px;
    font-size: 18px;
  }

  .buttons-container {
    margin-left: 10%;
  }

  .sum {
    font-size: 9px;
    padding-top: 0px;
  }

  .avtoservice {
    padding-top: 0px;
  }

  .avtoservice-2 {
    padding-top: 10px;
  }

  .second-question-block .present-block {
    padding-left: 30px;
  }

  .second-calculator-title {
    height: 94px;
  }

  .balls{
    padding: 0px;
  }

  .second-question-block {
    height: 30px;
  }
}

@media screen and (max-width: 320px) {
  input[type="text"] {
    height: 12px;
    margin-top: 10px;
  }

  .buttons-container div {
    height: 15px;
  }

  .item_range {
    height: 12px;
    font-size: 9px;
  }

  .second-question-block .present-block {
    padding-left: 10px;
  }

  .second-calculator-title .tinkoff-drive {
    padding-left: 5px;
  }
}
`;

var head = document.head || document.getElementsByTagName('head')[0];
var style = document.createElement('style');

head.appendChild(style);

style.type = 'text/css';
if (style.styleSheet){
  // This is required for IE8 and below.
  style.styleSheet.cssText = css;
} else {
  style.appendChild(document.createTextNode(css));
}

var body = document.body || document.getElementsByTagName('body')[0];
var root = document.createElement('div');
root.id = 'root';
var emptyDiv = document.createElement('div');
root.appendChild(emptyDiv);

var firstPage = document.createElement('div');
firstPage.id = 'first-page';
firstPage.className = 'calculator-container';
emptyDiv.appendChild(firstPage);
var firstPageEmptyDiv = document.createElement('div');
firstPage.appendChild(firstPageEmptyDiv);
var firstCalculatorTitle = document.createElement('div');
firstCalculatorTitle.className = 'first-calculator-title';
firstPageEmptyDiv.appendChild(firstCalculatorTitle);
var firstCalculatorTitleText = document.createElement('div');
firstCalculatorTitleText.innerHTML = 'Узнайте, сколько можно экономить на автоуслугах!';
firstCalculatorTitle.appendChild(firstCalculatorTitleText);
var firstQuestionBlock = document.createElement('div');
firstQuestionBlock.className = 'first-question-block';
firstPageEmptyDiv.appendChild(firstQuestionBlock);
var carBlock = document.createElement('div');
carBlock.className = 'car-block';
firstQuestionBlock.appendChild(carBlock);
var circleDiv = document.createElement('div');
circleDiv.className = 'circleBase circle-div';
carBlock.appendChild(circleDiv);
var carImg = document.createElement('img');
carImg.className = 'car_img';
carImg.src = 'images/car-side.png';
carImg.alt = 'car standing on oval';
circleDiv.appendChild(carImg);
var questionDiv = document.createElement('div');
questionDiv.className = 'question-div';
carBlock.appendChild(questionDiv);
var calculatorOptionsFuel = document.createElement('div');
calculatorOptionsFuel.className = 'calculator_options';
firstPageEmptyDiv.appendChild(calculatorOptionsFuel);
var calculatorRangeFuel = document.createElement('div');
calculatorRangeFuel.className = 'calculator_range';
calculatorOptionsFuel.appendChild(calculatorRangeFuel);
var rangeBlockFuel = document.createElement('div');
rangeBlockFuel.className = 'range_block';
calculatorRangeFuel.appendChild(rangeBlockFuel);
var itemRangeFuel = document.createElement('div');
itemRangeFuel.className = 'item_range';
itemRangeFuel.innerHTML = 'Топливо (руб/мес) <span class="sm-span">(2 000 - 50 000)</span>';
rangeBlockFuel.appendChild(itemRangeFuel);
var fromItemRangeFuel = document.createElement('div');
fromItemRangeFuel.className = 'from_item_range';
fromItemRangeFuel.innerHTML = '2 000';
rangeBlockFuel.appendChild(fromItemRangeFuel);
var toItemRangeFuel = document.createElement('div');
toItemRangeFuel.className = 'to_item_range';
toItemRangeFuel.innerHTML = '50 000';
rangeBlockFuel.appendChild(toItemRangeFuel);
var inputRangeFuel = document.createElement('input');
inputRangeFuel.id = 'range_fuel';
inputRangeFuel.value = '25000';
inputRangeFuel.min = '2000';
inputRangeFuel.max = '50000';
inputRangeFuel.type = 'range';
inputRangeFuel.addEventListener('input', change_range_fuel);
rangeBlockFuel.appendChild(inputRangeFuel);
var calculatorTextFuel = document.createElement('div');
calculatorTextFuel.className = 'calculator_text';
calculatorRangeFuel.appendChild(calculatorTextFuel);
var inputAmountFuel = document.createElement('input');
inputAmountFuel.id = 'amount_fuel';
inputAmountFuel.type = 'text';
inputAmountFuel.value = '25 000';
inputAmountFuel.min = '2000';
inputAmountFuel.max = '50000';
inputAmountFuel.addEventListener('input', change_text_fuel);
calculatorTextFuel.appendChild(inputAmountFuel);

var calculatorOptionsRepair = document.createElement('div');
calculatorOptionsRepair.className = 'calculator_options';
firstPageEmptyDiv.appendChild(calculatorOptionsRepair);
var calculatorRangeRepair = document.createElement('div');
calculatorRangeRepair.className = 'calculator_range';
calculatorOptionsRepair.appendChild(calculatorRangeRepair);
var rangeBlockRepair = document.createElement('div');
rangeBlockRepair.className = 'range_block';
calculatorRangeRepair.appendChild(rangeBlockRepair);
var itemRangeRepair = document.createElement('div');
itemRangeRepair.className = 'item_range';
itemRangeRepair.innerHTML = 'Ремонт (руб/год) <span class="sm-span">(25 000 - 250 000)</span>';
rangeBlockRepair.appendChild(itemRangeRepair);
var fromItemRangeRepair = document.createElement('div');
fromItemRangeRepair.className = 'from_item_range';
fromItemRangeRepair.innerHTML = '25 000';
rangeBlockRepair.appendChild(fromItemRangeRepair);
var toItemRangeRepair = document.createElement('div');
toItemRangeRepair.className = 'to_item_range';
toItemRangeRepair.innerHTML = '250 000';
rangeBlockRepair.appendChild(toItemRangeRepair);
var inputRangeRepair = document.createElement('input');
inputRangeRepair.id = 'range_repair';
inputRangeRepair.value = '150000';
inputRangeRepair.min = '25000';
inputRangeRepair.max = '250000';
inputRangeRepair.type = 'range';
inputRangeRepair.addEventListener('input', change_range_repair);
rangeBlockRepair.appendChild(inputRangeRepair);
var calculatorTextRepair = document.createElement('div');
calculatorTextRepair.className = 'calculator_text';
calculatorRangeRepair.appendChild(calculatorTextRepair);
var inputAmountRepair = document.createElement('input');
inputAmountRepair.id = 'amount_repair';
inputAmountRepair.type = 'text';
inputAmountRepair.value = '150 000';
inputAmountRepair.min = '25000';
inputAmountRepair.max = '250000';
inputAmountRepair.addEventListener('input', change_text_repair);
calculatorTextRepair.appendChild(inputAmountRepair);

var calculatorOptionsInsuriance = document.createElement('div');
calculatorOptionsInsuriance.className = 'calculator_options';
firstPageEmptyDiv.appendChild(calculatorOptionsInsuriance);
var calculatorRangeInsuriance = document.createElement('div');
calculatorRangeInsuriance.className = 'calculator_range';
calculatorOptionsInsuriance.appendChild(calculatorRangeInsuriance);
var rangeBlockInsuriance = document.createElement('div');
rangeBlockInsuriance.className = 'range_block';
calculatorRangeInsuriance.appendChild(rangeBlockInsuriance);
var itemRangeInsuriance = document.createElement('div');
itemRangeInsuriance.className = 'item_range';
itemRangeInsuriance.innerHTML = 'Страховка (руб/год) <span class="sm-span">(15 000 - 250 000)</span>';
rangeBlockInsuriance.appendChild(itemRangeInsuriance);
var fromItemRangeInsuriance = document.createElement('div');
fromItemRangeInsuriance.className = 'from_item_range';
fromItemRangeInsuriance.innerHTML = '15 000';
rangeBlockInsuriance.appendChild(fromItemRangeInsuriance);
var toItemRangeInsuriance = document.createElement('div');
toItemRangeInsuriance.className = 'to_item_range';
toItemRangeInsuriance.innerHTML = '250 000';
rangeBlockInsuriance.appendChild(toItemRangeInsuriance);
var inputRangeInsuriance = document.createElement('input');
inputRangeInsuriance.id = 'range_insuriance';
inputRangeInsuriance.value = '150000';
inputRangeInsuriance.min = '15000';
inputRangeInsuriance.max = '250000';
inputRangeInsuriance.type = 'range';
inputRangeInsuriance.addEventListener('input', change_range_insuriance);
rangeBlockInsuriance.appendChild(inputRangeInsuriance);
var calculatorTextInsuriance = document.createElement('div');
calculatorTextInsuriance.className = 'calculator_text';
calculatorRangeInsuriance.appendChild(calculatorTextInsuriance);
var inputAmountInsuriance = document.createElement('input');
inputAmountInsuriance.id = 'amount_insuriance';
inputAmountInsuriance.type = 'text';
inputAmountInsuriance.value = '150 000';
inputAmountInsuriance.min = '15000';
inputAmountInsuriance.max = '250000';
inputAmountInsuriance.addEventListener('input', change_text_insuriance);
calculatorTextInsuriance.appendChild(inputAmountInsuriance);

var firstPageSubmit = document.createElement('div');
firstPageSubmit.id = 'first-page-submit';
firstPageSubmit.className = 'buttons-container';
firstPageEmptyDiv.appendChild(firstPageSubmit);
var firstPageSubmitEmptyDiv = document.createElement('div');
firstPageSubmit.appendChild(firstPageSubmitEmptyDiv);
var firstPageSubmitEmptyDivText = document.createElement('div');
firstPageSubmitEmptyDivText.innerHTML = 'Узнать';
firstPageSubmitEmptyDiv.appendChild(firstPageSubmitEmptyDivText);


var secondPage = document.createElement('div');
secondPage.id = 'second-page';
secondPage.className = 'calculator-container';
emptyDiv.appendChild(secondPage);
var secondPageEmptyDiv = document.createElement('div');
secondPage.appendChild(secondPageEmptyDiv);
var secondCalculatorTitle = document.createElement('div');
secondCalculatorTitle.className = 'second-calculator-title';
secondPageEmptyDiv.appendChild(secondCalculatorTitle);
var tinkoffDrive = document.createElement('div');
tinkoffDrive.className = 'tinkoff-drive';
secondCalculatorTitle.appendChild(tinkoffDrive);
tinkoffDrive.innerHTML += 'За год вы бы заработали<br>';
tinkoffDrive.innerHTML += '<strong id="mainCash">30 000</strong> баллов на карту Tinkoff Drive.';
var sum = document.createElement('div');
sum.className = 'sum';
sum.innerHTML = 'Если сумма остальных трат по карте составила не менее <span id="remainderCash">6 000</span> <span class="ruble_symbol">₽</span> в месяц.';
tinkoffDrive.appendChild(sum);
var avtoservice = document.createElement('div');
avtoservice.className = 'avtoservice';
avtoservice.innerHTML = 'С топлива баллами возвращается 10%, с автоуслуг — 5%.';
tinkoffDrive.appendChild(avtoservice);
var avtoservice2 = document.createElement('div');
avtoservice2.className = 'avtoservice-2';
avtoservice2.innerHTML = 'Меняйте баллы на автоуслуги по курсу 1 к 1.';
tinkoffDrive.appendChild(avtoservice2);

var balls = document.createElement('div');
balls.className = 'balls';
secondPageEmptyDiv.appendChild(balls);

var secondQuestionBlock = document.createElement('div');
secondQuestionBlock.className = 'second-question-block';
secondPageEmptyDiv.appendChild(secondQuestionBlock);
var presentBlock = document.createElement('div');
presentBlock.className = 'present-block';
secondQuestionBlock.appendChild(presentBlock);
var circleDivPresent = document.createElement('div');
circleDivPresent.className = 'circleBase circle-div present-icon';
presentBlock.appendChild(circleDivPresent);
var presentImg = document.createElement('img');
presentImg.className = 'present_img';
presentImg.src = 'images/present.png';
presentImg.alt = 'present standing on oval';
circleDivPresent.appendChild(presentImg);
var presentText = document.createElement('div');
presentText.className = 'present-text';
presentText.innerHTML = '1500 баллов на кредитную карту<br> или 1000 баллов на дебетовую — в подарок!';
presentBlock.appendChild(presentText);
var getCard = document.createElement('a');
getCard.className = 'get_card ntvk1_ref';
getCard.target = '_blank';
getCard.href = '#';
secondPageEmptyDiv.appendChild(getCard);
var secondPageSubmit = document.createElement('div');
secondPageSubmit.id = 'second-page-submit';
secondPageSubmit.className = 'buttons-container btn-2';
getCard.appendChild(secondPageSubmit);
var secondPageSubmitEmptyDiv = document.createElement('div');
secondPageSubmit.appendChild(secondPageSubmitEmptyDiv);
var secondPageSubmitText = document.createElement('div');
secondPageSubmitText.innerHTML = 'Получить карту';
secondPageSubmitEmptyDiv.appendChild(secondPageSubmitText);

var thirdPage = document.createElement('div');
thirdPage.id = 'third-page';
thirdPage.className = 'calculator-container';
emptyDiv.appendChild(thirdPage);
var thirdCalculatorTitle = document.createElement('div');
thirdCalculatorTitle.className = 'third-calculator-title';
thirdPage.appendChild(thirdCalculatorTitle);
var finalText = document.createElement('div');
finalText.className = 'final_text';
thirdCalculatorTitle.appendChild(finalText);
var tinkoffFinalImg = document.createElement('img');
tinkoffFinalImg.src = 'images/tinkoff-bank-logo.png';
finalText.appendChild(tinkoffFinalImg);
finalText.innerHTML += '<br> Ваша заявка принята!';


body.appendChild(root);


var setRanges = function() { 
  var ranges = document.querySelectorAll("input[type=\"range\"]");
  for (var i = 0; i < ranges.length; i++) {
      var position = (ranges[i].value - ranges[i].min) / (ranges[i].max - ranges[i].min) * 100;
      ranges[i].style.background = 'linear-gradient(to right, #ffe60d 0%, #ffe60d '+position +'%, #dde0e1 ' + position + '%, #dde0e1 100%)'
      ranges[i].addEventListener("input", function() {
          var position = (this.value - this.min) / (this.max - this.min) * 100;
          this.style.background = 'linear-gradient(to right, #ffe60d 0%, #ffe60d '+position +'%, #dde0e1 ' + position + '%, #dde0e1 100%)'
      });
  }

  var texts = document.querySelectorAll("input[type=\"text\"]");
  for (var i = 0; i < texts.length; i++) {
    texts[i].addEventListener("input", function() {
      setRangesWhenTextChanges();
    });
  }
}

var setRangesWhenTextChanges = function() { 
  var ranges = document.querySelectorAll("input[type=\"range\"]");
  for (var i = 0; i < ranges.length; i++) {
      var position = (ranges[i].value - ranges[i].min) / (ranges[i].max - ranges[i].min) * 100;
      ranges[i].style.background = 'linear-gradient(to right, #ffe60d 0%, #ffe60d '+position +'%, #dde0e1 ' + position + '%, #dde0e1 100%)'
  }
}

var submitFirstPage = function() { 
  var fuel_value = document.querySelector("#range_fuel").value;
  var range_repair = document.querySelector("#range_repair").value;
  var insuriance_value = document.querySelector("#range_insuriance").value;
  
  data = {"b": "q7QKVm", "form": 1, "button": 1, "fuel": fuel_value,"repair": range_repair,"insurance": insuriance_value};
  send_data(data);

  var mainCash = Math.trunc(1.2 * fuel_value + 0.05 * range_repair + 0.1 * insuriance_value);
  var remainderCash = Math.trunc(mainCash * 20 / 12);
  document.querySelector("#mainCash").innerHTML = mainCash.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
  document.querySelector("#remainderCash").innerHTML = remainderCash.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
  var firstPage = document.querySelector("#first-page");
  var secondPage = document.querySelector("#second-page");
  firstPage.style.display = 'none';
  secondPage.style.display = 'block';
}

var submitSecondPage = function() {
  var fuel_value = document.querySelector("#range_fuel").value;
  var range_repair = document.querySelector("#range_repair").value;
  var insuriance_value = document.querySelector("#range_insuriance").value;
  var mainCash = Math.trunc(1.2 * fuel_value + 0.05 * range_repair + 0.1 * insuriance_value);
  var remainderCash = Math.trunc(mainCash * 20 / 12);

  data = {"b": "q7QKVm", "form": 2, "button": 1, "main_points": mainCash,"other_points": remainderCash};
  send_data(data);
  var secondPage = document.querySelector("#second-page");
  var thirdPage = document.querySelector("#third-page");
  secondPage.style.display = 'none';
  thirdPage.style.display = 'block';
  document.body.style['background-color'] = '#f5f5f6';
  setTimeout( function() {
    window.postMessage("AdVideoComplete", "*");
  }, 3000);
}

function send_data(data) {
  xhr = new XMLHttpRequest();
  var url = "https://ps4.ntvk1.ru/leadproxy/addlead/";
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-type", "text/plain");
  xhr.onreadystatechange = function () { 
      if (xhr.readyState == 4 && xhr.status == 200) {
        // console.log('ok');
      }
  }
  var data = JSON.stringify(data);
  xhr.send(data);
}

function change_range_insuriance() {
  var src = document.querySelector("#range_insuriance");
  var dest = document.querySelector("#amount_insuriance");
  dest.value = src.value.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
}

function change_text_insuriance() {
  var src = document.querySelector("#amount_insuriance");
  var dest = document.querySelector("#range_insuriance");
  dest.value = parseInt(src.value.split(' ').join(''))
}

function change_range_fuel() {
  var src = document.querySelector("#range_fuel");
  var dest = document.querySelector("#amount_fuel");
  dest.value = src.value.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
}

function change_text_fuel() {
  var src = document.querySelector("#amount_fuel");
  var dest = document.querySelector("#range_fuel");
  dest.value = parseInt(src.value.split(' ').join(''))
}

function change_range_repair() {
  var src = document.querySelector("#range_repair");
  var dest = document.querySelector("#amount_repair");
  dest.value = src.value.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
}

function change_text_repair() {
  var src = document.querySelector("#amount_repair");
  var dest = document.querySelector("#range_repair");
  dest.value = parseInt(src.value.split(' ').join(''))
}

firstPageSubmit.addEventListener("click", submitFirstPage);
secondPageSubmit.addEventListener("click", submitSecondPage);
setRanges();

document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".ntvk1_ref").href = clickUrl;
  var timerId = setInterval(function() {
    window.postMessage("AdLoaded", "*");
  }, 1000);

  setTimeout(function() {
    clearInterval(timerId);
  }, 5000);
});
