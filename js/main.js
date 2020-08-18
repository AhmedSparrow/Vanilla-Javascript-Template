// **************** Template ******************
// Template Create With Only Vanill JavaScript
// Template Create By Hamada Mohamed
// No Style File
// Only FontAwosome
// EveryThing Dynmic
//---------------------------------------------

// Global variable
var myHtml = document.getElementsByTagName('html');
var myBody = document.querySelector('body');
var myLoad = document.createElement('div');
var backBtn = document.createElement('a');

var pageResize500 = false;
var pageResize765 = false;
var pageResize1000 = false;
var pageResizeFull = false;

//Create Html Scroll Smooth
myHtml[0].style.scrollBehavior = 'smooth';

//Create Style
myBody.style.margin = '0px';
myBody.style.padding = '0px';
myBody.style.fontFamily = 'sans-serif';
//-----
myLoad.style.position = 'fixed';
myLoad.style.top = '0';
myLoad.style.left = '0';
myLoad.style.width = '100%';
myLoad.style.height = '100%';
myLoad.style.backgroundColor = '#000';
myLoad.style.display = 'block';
myLoad.style.zIndex = '999999999';

//Back Button Style
backBtn.setAttribute('class', 'fas fa-arrow-alt-circle-up');
backBtn.style.position = 'fixed';
backBtn.style.width = '40px';
backBtn.style.height = '40px';
backBtn.style.right = '2%';
backBtn.style.bottom = '5%';
backBtn.style.display = 'none';
backBtn.style.fontSize = '40px';
backBtn.style.color = 'rgb(52, 68, 61)';
backBtn.style.cursor = 'pointer';
backBtn.style.zIndex = '9999';
backBtn.title = 'Go Up';
myBody.appendChild(backBtn);
backBtn.onclick = () => {
  window.scrollTo(0, 0);
};

// Create My Load Page
var loadDiv1 = document.createElement('div');
var loadDiv2 = document.createElement('div');
var loadDiv3 = document.createElement('div');
var animH3 = document.createElement('h3');

//Load Style
loadDiv1.style.position = 'absolute';
loadDiv1.style.top = '50%';
loadDiv1.style.left = '50%';
loadDiv1.style.transform = 'translate(-50% , -50%)';
loadDiv1.style.width = '300px';
loadDiv1.style.height = '300px';
loadDiv1.style.textAlign = 'center';
loadDiv1.style.display = 'inline-block';
//----
loadDiv2.style.position = 'absolute';
loadDiv2.style.width = '220px';
loadDiv2.style.height = '220px';
loadDiv2.style.top = '50px';
loadDiv2.style.left = '50px';
loadDiv2.style.borderTop = '15px solid #fff';
loadDiv2.style.borderBottom = '15px solid #fff';
loadDiv2.style.borderRadius = '50%';
loadDiv2.style.textAlign = 'center';
loadDiv2.style.display = 'block';
//----
loadDiv3.style.position = 'absolute';
loadDiv3.style.width = '150px';
loadDiv3.style.height = '150px';
loadDiv3.style.top = '40px';
loadDiv3.style.left = '40px';
loadDiv3.style.borderLeft = '6px solid #fff';
loadDiv3.style.borderRight = '6px solid #fff';
loadDiv3.style.borderRadius = '50%';
loadDiv3.style.display = 'block';
loadDiv3.style.color = '#fff';
//----
animH3.textContent = 'loading';
animH3.style.color = '#fff';
animH3.style.position = 'absolute';
animH3.style.top = '50%';
animH3.style.left = '50%';
animH3.style.zIndex = '10';
// Append Elements
loadDiv1.appendChild(animH3);
loadDiv1.appendChild(loadDiv2);
loadDiv2.appendChild(loadDiv3);
myLoad.appendChild(loadDiv1);
myBody.appendChild(myLoad);

//Create Animition
var animCounter = 0;
var animCounter2 = -1;
function anim() {
  var rotat = animCounter + 'deg';
  var rotat2 = animCounter2 + 'deg';
  loadDiv2.style.transform = 'rotate(' + rotat + ')';
  loadDiv3.style.transform = 'rotate(' + rotat2 + ')';
  animCounter += 10;
  animCounter2 -= 7;
}
var setAnim = setInterval(anim, 50);

window.onload = function () {
  clearInterval(setAnim);
  myLoad.style.display = 'none';
  if (window.innerWidth < 501) {
    mediaQuery500();
  } else if (window.innerWidth < 781) {
    mediaQuery780();
  } else if (window.innerWidth < 1000 && window.innerWidth > 766) {
    mediaQuery1000();
  } else if (window.innerWidth > 1000) {
    mediaQueryFull();
  }
};
// ===========================( Start header )===========================
// Create header Elements
var myHeader = document.createElement('header');
var headOver = document.createElement('div');
var sliderImg = document.createElement('img');
var titleDiv = document.createElement('div');
var headH1 = document.createElement('h1');
var headA = document.createElement('a');
var headUl = document.createElement('ul');

//Create Attribute
myHeader.setAttribute('id', 'myhome');
sliderImg.setAttribute('src', 'images/slid1.jpg');
sliderImg.setAttribute('alt', 'Slider Photo');
headUl.setAttribute('class', 'head-slid');

// Set TextContent
headH1.textContent = 'web & graphic designer';
headA.textContent = 'learn more';

// Create Header Style
myHeader.style.position = 'relative';
myHeader.style.height = '600px';

//Head Slider
headUl.style.listStyle = 'none';
headUl.style.position = 'absolute';
headUl.style.right = '8%';
headUl.style.bottom = '5%';
headUl.style.zIndex = '4';

// Create TitleDiv Style
titleDiv.style.position = 'absolute';
titleDiv.style.width = '70%';
titleDiv.style.top = '50%';
titleDiv.style.left = '50%';
titleDiv.style.transform = 'translate(-50% , -50%)';
titleDiv.style.textAlign = 'center';

// Slider Image Style
sliderImg.style.width = '100%';
sliderImg.style.height = '100%';
sliderImg.style.zIndex = '4';

//Head Over Style
headOver.style.position = 'absolute';
headOver.style.top = '0';
headOver.style.left = '0';
headOver.style.width = '100%';
headOver.style.height = '100%';
headOver.style.position = 'absolute';
headOver.style.zIndex = '3';
headOver.style.backgroundColor = 'rgba(0,0,0,.6';

//Creat TitleDiv Style
titleDiv.style.display = 'flex';
titleDiv.style.flexDirection = 'column';
titleDiv.style.alignItems = 'center';
titleDiv.style.zIndex = '4';

//Create HeadH1 Style
headH1.style.color = '#fff';
headH1.style.fontWeight = 'bold';
headH1.style.textTransform = 'uppercase';
headH1.style.fontSize = '50px';
headH1.style.borderTop = 'solid 1px #fff';
headH1.style.borderBottom = 'solid 1px #fff';
headH1.style.display = 'inline-block';

//Create HeadA Style
headA.style.fontSize = '17px';
headA.style.fontWeight = 'bold';
headA.style.color = '#fff';
headA.style.textTransform = 'uppercase';
headA.style.marginTop = '20px';
headA.style.padding = '10px 25px';
headA.style.border = 'solid 1px #fff';
headA.style.cursor = 'pointer';

// Append Header Elements
titleDiv.appendChild(headH1);
titleDiv.appendChild(headA);
myHeader.appendChild(sliderImg);
myHeader.appendChild(headOver);
myHeader.appendChild(titleDiv);
myHeader.appendChild(headUl);
myBody.appendChild(myHeader);

for (var x = 0; x < 3; x++) {
  var headLi = document.createElement('li');
  //Style
  headLi.style.margin = '15px';
  headLi.style.width = '10px';
  headLi.style.height = '10px';
  headLi.style.border = '2px solid #fff';
  headLi.style.borderRadius = '50%';
  headLi.style.cursor = 'pointer';
  //Append
  headUl.appendChild(headLi);
  //
}
// Head Slider Controls
var counter = 1;
var headSlider = document.querySelectorAll('.head-slid li');
headSlider[0].style.backgroundColor = '#fff';
headSlider[0].setAttribute('id', 'change');
for (var i = 0; i < headSlider.length; i++) {
  headSlider[i].onclick = function () {
    for (var a = 0; a < headSlider.length; a++) {
      headSlider[a].style.backgroundColor = 'transparent';
      headSlider[a].removeAttribute('id');
    }
    this.style.backgroundColor = '#fff';
    this.setAttribute('id', 'ac');
    if (headSlider[0].hasAttribute('id')) {
      sliderImg.src = 'images/slid1.jpg';
      headH1.textContent = 'web & graphic designer';
      counter = 0;
    } else if (headSlider[1].hasAttribute('id')) {
      sliderImg.src = 'images/slid2.jpg';
      headH1.textContent = 'javascript - developer';
      counter = 1;
    } else if (headSlider[2].hasAttribute('id')) {
      sliderImg.src = 'images/slid3.jpg';
      headH1.textContent = 'web & graphic designer';
      counter = 2;
    }
  };
}

function change() {
  for (var a = 0; a < headSlider.length; a++) {
    headSlider[a].style.backgroundColor = 'transparent';
  }

  if (counter === 0) {
    headSlider[counter].style.backgroundColor = '#fff';
    sliderImg.src = 'images/slid1.jpg';
    headH1.textContent = 'web & graphic designer';
    counter = 1;
  } else if (counter === 1) {
    headSlider[counter].style.backgroundColor = '#fff';
    sliderImg.src = 'images/slid2.jpg';
    headH1.textContent = 'javascript - developer';
    counter = 2;
  } else if (counter === 2) {
    headSlider[counter].style.backgroundColor = '#fff';
    sliderImg.src = 'images/slid3.jpg';
    headH1.textContent = 'web & graphic designer';
    counter = 0;
  }
}
setInterval(change, 5000);

// --------------------------( End Header )----------------------------
// =========================( Start NavBar )===========================

const myLinks = [
  'home',
  'about me',
  'skills',
  'resume',
  'testimonials',
  'portfolio',
  'contact me',
];

//Create Elements
var myBar = document.createElement('div');
var myDiv = document.createElement('div');
var navBar = document.createElement('nav');
var myh1 = document.createElement('h1');
var firstSpan = document.createElement('span');
var lastSpan = document.createElement('span');
var myUl = document.createElement('ul');
var myMenu = document.createElement('span');
var mySelect = document.createElement('select');

// Set Attribute
myUl.setAttribute('id', 'links');
myMenu.setAttribute('class', 'fas fa-bars');
mySelect.setAttribute('id', 'mylist');

// Create Text Content
myh1.textContent = 'fal';
firstSpan.textContent = 'f';
lastSpan.textContent = 'con';

// Create NavBar Style
myBar.style.width = '80%';
myBar.style.margin = 'auto';
myBar.style.borderRadius = '8px';
myBar.style.display = 'flex';
myBar.style.flexDirection = 'row';
myBar.style.flexWrap = 'nowrap';
myBar.style.justifyContent = 'space-between';
myBar.style.alignItems = 'center';
myBar.style.backgroundColor = 'transparent';
myBar.style.padding = '0';
myBar.style.zIndex = '1000000';
//-----
navBar.style.backgroundColor = 'rgb(52, 68, 61)';
navBar.style.height = 'auto';
navBar.style.zIndex = '999999999';
//-----
myh1.style.fontSize = '30px';
myh1.style.color = '#fff';
myh1.style.textTransform = 'uppercase';
myh1.style.display = 'block';
//-----
firstSpan.style.marginRight = '20px';
firstSpan.style.backgroundColor = '#777';
firstSpan.style.padding = '5px 10px';
firstSpan.style.borderRadius = '5px';
//-----
lastSpan.style.color = 'rgb(7, 160, 94)';
//-----
myUl.style.listStyle = 'none';
myUl.style.padding = '0';
myUl.style.display = 'flex';
myUl.style.backgroundColor = 'transparent';
//-----
myMenu.style.color = '#fff';
myMenu.style.fontSize = '30px';
myMenu.style.display = 'none';
myMenu.style.cursor = 'pointer';
//-----
mySelect.style.width = '250px';
mySelect.style.height = '35px';
mySelect.style.padding = '0 10px';
mySelect.style.color = 'rgb(7, 160, 94)';
mySelect.style.fontWeight = 'bold';
mySelect.style.textTransform = 'uppercase';
mySelect.style.outlineStyle = 'none';
mySelect.style.display = 'none';
mySelect.style.boxSizing = 'border-box';

// Create Append Child
myh1.insertBefore(firstSpan, myh1.firstChild);
myh1.appendChild(lastSpan);
myBar.appendChild(myh1);
myBar.appendChild(myUl);
myBar.appendChild(myMenu);
myBar.appendChild(mySelect);
navBar.appendChild(myBar);
myBody.appendChild(navBar);

// Create Bar Links
for (var x = 0; x < myLinks.length; x++) {
  var myUrl = document.createElement('a');
  myUrl.setAttribute('class', 'lo');
  // myUrl.setAttribute('href', '');
  myUrl.innerHTML = myLinks[x];
  var myLi = document.createElement('li');
  myLi.setAttribute('class', '');
  myLi.appendChild(myUrl);
  myUl.appendChild(myLi);
  myUrl.style.display = 'block';
  myUrl.style.cursor = 'pointer';
  myUrl.style.backgroundColor = 'transparent';
  myUrl.style.padding = '8px';
  myUrl.style.margin = '5px 0';
  myUrl.style.textDecoration = 'none';
  myUrl.style.fontWeight = 'bold';
  myUrl.style.textTransform = 'capitalize';
  myUrl.style.color = '#fff';
}

// Create Link Click Action
var allLink = document.querySelectorAll('li a');
allLink[0].setAttribute('id', 'activ');
allLink[0].style.color = 'rgb(7, 160, 94)';
for (var i = 0; i < allLink.length; i++) {
  allLink[i].onclick = function () {
    for (var r = 0; r < allLink.length; r++) {
      allLink[r].style.color = '#fff';
      allLink[r].style.border = 'none';
      allLink[r].removeAttribute('id');
    }
    this.style.color = 'rgb(7, 160, 94)';
    this.setAttribute('id', 'activ');
    //Page Width 500 Px
    if (pageResize500) {
      if (this.textContent == 'home') {
        window.scrollTo(0, 0);
        menuClick();
      } else if (this.textContent == 'about me') {
        this.href = '#aboutsMe';
        menuClick();
      } else if (this.textContent == 'skills') {
        this.href = '#skills';
        menuClick();
      } else if (this.textContent == 'resume') {
        this.href = '#resume';
        menuClick();
      } else if (this.textContent == 'testimonials') {
        this.href = '#edu';
        menuClick();
      } else if (this.textContent == 'portfolio') {
        this.href = '#portf';
        menuClick();
      } else if (this.textContent == 'contact me') {
        this.href = '#cont';
        menuClick();
      }
    }
    //----
    else if (pageResize1000 || pageResizeFull) {
      if (this.textContent == 'home') {
        window.scrollTo(0, 0);
      } else if (this.textContent == 'about me') {
        this.href = '#aboutsMe';
      } else if (this.textContent == 'skills') {
        this.href = '#skills';
      } else if (this.textContent == 'resume') {
        this.href = '#resume';
      } else if (this.textContent == 'testimonials') {
        this.href = '#edu';
      } else if (this.textContent == 'portfolio') {
        this.href = '#portf';
      } else if (this.textContent == 'contact me') {
        this.href = '#cont';
      }
    }
  };
}

//Create Select List
for (var x = 0; x < allLink.length; x++) {
  var myOption = document.createElement('option');
  myOption.setAttribute('value', '');
  myOption.style.fontSize = '15px';
  myOption.style.fontWeight = 'bold';
  myOption.textContent = allLink[x].innerHTML;
  myOption.value = allLink[x].innerHTML;
  mySelect.appendChild(myOption);
}

//List Action
var choose;
mySelect.onchange = function () {
  choose = mySelect.options[mySelect.selectedIndex];
  if (choose.textContent == 'home' && pageResize765) {
    window.scrollTo(0, 0);
  } else if (choose.textContent == 'about me' && pageResize765) {
    window.scrollTo(0, 850);
  } else if (choose.textContent == 'skills' && pageResize765) {
    window.scrollTo(0, 2070);
  } else if (choose.textContent == 'resume' && pageResize765) {
    window.scrollTo(0, 3180);
  } else if (choose.textContent == 'testimonials' && pageResize765) {
    window.scrollTo(0, 3600);
  } else if (choose.textContent == 'portfolio' && pageResize765) {
    window.scrollTo(0, 6465);
  } else if (choose.textContent == 'contact me' && pageResize765) {
    window.scrollTo(0, 8120);
  }
};

// Create Mouse Hover
for (var h = 0; h < allLink.length; h++) {
  allLink[h].onmousemove = function () {
    this.style.color = 'rgb(7, 160, 94)';
  };
}
for (var b = 0; b < allLink.length; b++) {
  allLink[b].onmouseleave = function () {
    if (this.hasAttribute('id')) {
      this.style.color = 'rgb(7, 160, 94)';
    } else {
      this.style.color = '#fff';
    }
  };
}
// --------------------------( End NavBar )------------------------------

// ===========================( Start Values )===========================
//Create Elements
var myValues = document.createElement('div');
var valuecontainer = document.createElement('div');
var valuesDiv = document.createElement('div');

// Create Values Style
valuecontainer.style.width = '80%';
valuecontainer.style.margin = 'auto';
//----
valuesDiv.style.minHeight = '160px';
valuesDiv.style.padding = '35px 0px';
valuesDiv.style.display = 'flex';
valuesDiv.style.justifyContent = 'space-between';

// Append Elements
valuecontainer.appendChild(valuesDiv);
myValues.appendChild(valuecontainer);
myBody.appendChild(myValues);

var myValueH3 = ['values', 'goals', 'hobbies'];
for (var x = 0; x < myValueH3.length; x++) {
  //Create Element
  var childDiv = document.createElement('div');
  var childH3 = document.createElement('h3');
  var childP = document.createElement('p');
  childDiv.setAttribute('class', 'value-child');
  childH3.setAttribute('class', 'my-h3');
  childP.setAttribute('class', 'my-p');
  //textContent
  childH3.textContent = myValueH3[x];
  //Style
  childDiv.style.width = '30%';
  childH3.style.marginBottom = '20px';
  childH3.style.fontWeight = 'bold';
  childH3.style.textTransform = 'uppercase';
  childH3.style.color = 'rgb(52, 68, 61)';
  //----
  childP.style.color = '#777';
  childP.style.textAlign = 'left';
  childP.style.lineHeight = '1.4';
  childP.style.textTransform = 'capitalize';
  //Add Node
  childP.textContent =
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab voluptates nemo distinctio atque veniam commodi.';
  //Append Elements
  childDiv.appendChild(childH3);
  childDiv.appendChild(childP);
  valuesDiv.appendChild(childDiv);
}
var queryValue = document.querySelectorAll('.value-child');
var queryValueP = document.querySelectorAll('.my-p');

// --------------------------( End Values )----------------------------
// =========================( Start About Me )=========================
//Create Elements
var sectionAbout = document.createElement('div');
var aboutImgDiv = document.createElement('div');
var aboutImg = document.createElement('img');
var aboutInfoDiv = document.createElement('div');
var aboutTopDiv = document.createElement('div');
var aboutDownDiv = document.createElement('div');
var aboutH3 = document.createElement('h3');
var aboutP1 = document.createElement('p');
var aboutP2 = document.createElement('p');

//Add Attribute
sectionAbout.setAttribute('id', 'aboutsMe');
aboutImg.setAttribute('src', 'images/aboutimg.jpeg');

//Add Node
aboutH3.textContent = 'about me';
aboutP1.textContent =
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente praesentium quod Sapiente praesentium quod enim facere error neque libero recusandae quasi incidunt,  culpa!';
aboutP2.textContent =
  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab voluptates nemo distinctio atque veniam commodi.';

// Create About Style
sectionAbout.style.boxSizing = 'border-box';
sectionAbout.style.minHeight = '650px';
sectionAbout.style.margin = 'auto';
sectionAbout.style.display = 'flex';
sectionAbout.style.justifyContent = 'center';
sectionAbout.style.flexWrap = 'no-wrap';
sectionAbout.style.backgroundColor = 'rgb(231, 231, 231)';
//-----
aboutImgDiv.style.width = '35%';
aboutImgDiv.style.height = '600px';
//-----
aboutImg.style.width = '100%';
aboutImg.style.height = '100%';
aboutImg.style.backgroundSize = 'cover';
//-----
aboutInfoDiv.style.width = '65%';
aboutInfoDiv.style.minHeight = '600px';
aboutInfoDiv.style.display = 'flex';
aboutInfoDiv.style.flexDirection = 'column';
aboutInfoDiv.style.boxSizing = 'border-box';
//-----
aboutTopDiv.style.marginBottom = '10px';
aboutTopDiv.style.padding = '30px 175px 0px 40px';
aboutTopDiv.style.minHeight = '250px';
aboutTopDiv.style.boxSizing = 'border-box';
//-------
aboutDownDiv.style.padding = '0px 0px 0px 40px';
aboutDownDiv.style.display = 'flex';
aboutDownDiv.style.flexWrap = 'wrap';
aboutDownDiv.style.width = '100%';
aboutDownDiv.style.minHeight = '300px';
aboutDownDiv.style.boxSizing = 'border-box';
//-----
aboutH3.style.fontSize = '22px';
aboutH3.style.textTransform = 'uppercase';
aboutH3.style.color = 'rgb(52, 68, 61)';
aboutH3.style.fontWeight = 'bold';
//-----
aboutP1.style.marginBottom = '10px';
aboutP1.style.textAlign = 'justify';
aboutP1.style.color = '#777';
aboutP1.style.lineHeight = '1.4';
aboutP1.style.textTransform = 'capitalize';
aboutP1.style.paddingBottom = '15px';
//----
aboutP2.style.paddingBottom = '15px';
aboutP2.style.textAlign = 'justify';
aboutP2.style.color = '#777';
aboutP2.style.lineHeight = '1.4';
aboutP2.style.textTransform = 'capitalize';

//Append Elements
aboutImgDiv.appendChild(aboutImg);
sectionAbout.appendChild(aboutImgDiv);
aboutTopDiv.appendChild(aboutH3);
aboutTopDiv.appendChild(aboutP1);
aboutTopDiv.appendChild(aboutP2);
aboutInfoDiv.appendChild(aboutTopDiv);
aboutInfoDiv.appendChild(aboutDownDiv);
sectionAbout.appendChild(aboutInfoDiv);
myBody.appendChild(sectionAbout);
//-----
for (var i = 0; i < 4; i++) {
  //Create Elements
  var aDiv = document.createElement('div');
  var aImg = document.createElement('img');
  var aDiv2 = document.createElement('div');
  var aH3 = document.createElement('h3');
  var aP = document.createElement('p');
  //Attribute
  aDiv.setAttribute('class', 'about');
  aDiv2.setAttribute('class', 'about-info');
  aImg.setAttribute('src', '');
  //Add Text Content
  aP.textContent = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.';
  //style
  aDiv.style.width = '40%';
  aDiv.style.minHeight = '100px';
  aDiv.style.margin = '20px 85px 20px 0px';
  aDiv.style.display = 'flex';
  aDiv.style.flexWrap = 'no-wrap';
  aDiv.style.justifyContent = 'space-between';
  aDiv.style.boxSizing = 'border-box';
  //------
  aH3.style.padding = '0px';
  aH3.style.textTransform = 'uppercase';
  aH3.style.color = 'rgb(52, 68, 61)';
  aH3.style.fontWeight = 'bold';
  //------
  aP.style.padding = '5px';
  aP.style.color = '#777';
  aP.style.textAlign = 'left';
  aP.style.lineHeight = '1.4';
  aP.style.textTransform = 'capitalize';
  //------
  aImg.style.paddingTop = '10px';
  aImg.style.marginRight = '10px';
  aImg.style.width = '50px';
  aImg.style.height = '50px';
  aImg.style.borderRadius = '50%';
  //Append Elements
  aDiv2.appendChild(aH3);
  aDiv2.appendChild(aP);
  aDiv.appendChild(aImg);
  aDiv.appendChild(aDiv2);
  aboutDownDiv.appendChild(aDiv);
}
var queryAbout = document.querySelectorAll('.about');
var aboutAllH3 = document.querySelectorAll('.about h3');
var aboutAllImg = document.querySelectorAll('.about img');
var aboutAllInfo = document.querySelectorAll('.about-info');

// Create TextContent
const aboutH3Content = [
  'web design',
  'graphic design',
  'online marketing',
  'seo',
];
const aboutImgScr = [
  'images/about1.jpg',
  'images/about2.jpg',
  'images/about3.jpg',
  'images/about4.jpg',
];
//Add Text Content
for (var i = 0; i < aboutH3Content.length; i++) {
  aboutAllH3[i].textContent = aboutH3Content[i];
}
//Add Image Src
for (var i = 0; i < aboutAllImg.length; i++) {
  aboutAllImg[i].src = aboutImgScr[i];
}
// -------------------------( End About Me )---------------------------
// ========================( Start My Skills )=========================
//Create Elements
var sectionSkill = document.createElement('div');
var containerSkill = document.createElement('div');
var leftDivSkill = document.createElement('div');
var rightDivSkill = document.createElement('div');
var skillH2 = document.createElement('h2');
var skillFirstP = document.createElement('p');
var skillLastP = document.createElement('p');
var skillBtn = document.createElement('a');

sectionSkill.setAttribute('id', 'skills');
//Add Text Content
skillH2.textContent = 'my skills';
skillFirstP.textContent =
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente praesentium quod Sapiente praesentium quod enim facere error neque libero recusandae quasi incidunt, deserunt unde et at veritatis quae voluptatum laudantium consequatur? Alias, culpa!';
skillLastP.textContent =
  'Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor sit amet consectetur adipisicing elit. Ab voluptates nemo distinctio atque veniam commodi.';
skillBtn.textContent = 'contact me';
//Style
sectionSkill.style.minHeight = '500px';
sectionSkill.style.padding = '30px 0px';
sectionSkill.style.boxSizing = 'border-box';
//-----
containerSkill.style.width = '80%';
containerSkill.style.margin = 'auto';
containerSkill.style.display = 'flex';
containerSkill.style.justifyContent = 'space-between';
containerSkill.style.boxSizing = 'border-box';
//-----
leftDivSkill.style.width = '50%';
leftDivSkill.style.minHeight = '500px';
leftDivSkill.style.padding = '30px 30px 30px 0px';
leftDivSkill.style.boxSizing = 'border-box';
//-----
skillH2.style.marginBottom = '30px';
skillH2.style.color = '#4E5B5B';
skillH2.style.textTransform = 'capitalize';
//-----
skillFirstP.style.lineHeight = '1.8';
skillFirstP.style.color = '#777';
skillFirstP.style.textAlign = 'left';
skillFirstP.style.textTransform = 'capitalize';
//-----
skillLastP.style.margin = '40px 0px';
skillLastP.style.lineHeight = '1.8';
skillLastP.style.color = '#777';
skillLastP.style.textAlign = 'left';
skillLastP.style.textTransform = 'capitalize';
//-----
skillBtn.style.color = '#4be08e';
skillBtn.style.fontSize = '17px';
skillBtn.style.fontWeight = 'bold';
skillBtn.style.textTransform = 'uppercase';
skillBtn.style.padding = '10px 25px';
skillBtn.style.border = 'solid 1px #4be08e';
skillBtn.style.cursor = 'pointer';
//-----
rightDivSkill.style.width = '50%';
rightDivSkill.style.height = '500px';
rightDivSkill.style.display = 'flex';
rightDivSkill.style.alignItems = 'flex-start';
rightDivSkill.style.flexDirection = 'column';
rightDivSkill.style.padding = '50px 0px 10px 0px';
rightDivSkill.style.boxSizing = 'border-box';

//Appent Elements
leftDivSkill.appendChild(skillH2);
leftDivSkill.appendChild(skillFirstP);
leftDivSkill.appendChild(skillLastP);
leftDivSkill.appendChild(skillBtn);
containerSkill.appendChild(leftDivSkill);
containerSkill.appendChild(rightDivSkill);
sectionSkill.appendChild(containerSkill);
myBody.appendChild(sectionSkill);

// Append Element Skills
for (var x = 0; x < 4; x++) {
  //Create Elements
  var parntDiv = document.createElement('div');
  var parntH3 = document.createElement('h3');
  var childDiv = document.createElement('div');
  var childSpan = document.createElement('span');
  // Create Attribute
  parntDiv.setAttribute('class', 'skill');
  //Element Style
  parntDiv.style.width = '100%';
  parntDiv.style.height = '15%';
  parntDiv.style.marginBottom = '5%';
  //-----
  parntH3.style.marginBottom = '10px';
  parntH3.style.textTransform = 'uppercase';
  parntH3.style.color = 'rgb(52, 68, 61)';
  parntH3.style.fontWeight = 'bold';
  //-----
  childDiv.style.width = '100%';
  childDiv.style.height = '20px';
  childDiv.style.backgroundColor = '#F2F2F2';
  //-----
  childSpan.style.backgroundColor = '#2DCC70';
  childSpan.style.color = '#fff';
  childSpan.style.display = 'inline-block';
  childSpan.style.height = '100%';
  //Append Element
  childDiv.appendChild(childSpan);
  parntDiv.appendChild(parntH3);
  parntDiv.appendChild(childDiv);
  rightDivSkill.appendChild(parntDiv);
}
//Create Text Content
var mySkillsH3 = document.querySelectorAll('.skill h3');
var mySkillsSpan = document.querySelectorAll('.skill span');
var skillH3Content = ['photoshop', 'illustrator', 'html / css', 'php / mysql'];
var skillSpanContent = ['85%', '80%', '90%', '70%'];
//Add H3 Text Content
for (var i = 0; i < mySkillsH3.length; i++) {
  mySkillsH3[i].textContent = skillH3Content[i];
}

// Create Skills Progress Bar
var photoshopCounter = 0;
var illustratorCounter = 0;
var htmlCounter = 0;
var phpCounter = 0;
//PhotoShop
var mySkillPhoto = setInterval(() => {
  mySkillsSpan[0].textContent = photoshopCounter + '%';
  mySkillsSpan[0].style.paddingLeft = photoshopCounter + '%';
  if (photoshopCounter == 70) {
    clearInterval(mySkillPhoto);
  }
  photoshopCounter++;
}, 50);
//illustrator
var mySkillIllustrator = setInterval(() => {
  mySkillsSpan[1].textContent = illustratorCounter + '%';
  mySkillsSpan[1].style.paddingLeft = illustratorCounter + '%';
  if (illustratorCounter == 60) {
    clearInterval(mySkillIllustrator);
  }
  illustratorCounter++;
}, 50);
//HTML
var mySkillHtml = setInterval(() => {
  mySkillsSpan[2].textContent = htmlCounter + '%';
  mySkillsSpan[2].style.paddingLeft = htmlCounter + '%';
  if (htmlCounter == 85) {
    clearInterval(mySkillHtml);
  }
  htmlCounter++;
}, 50);
//PHP
var mySkillPhp = setInterval(() => {
  mySkillsSpan[3].textContent = phpCounter + '%';
  mySkillsSpan[3].style.paddingLeft = phpCounter + '%';
  if (phpCounter == 70) {
    clearInterval(mySkillPhp);
  }
  phpCounter++;
}, 50);
// -------------------------( End My sKILLS )-------------------------
// =========================( Start Resume )==========================

//Create Elements
var sectionResume = document.createElement('div');
var containerResume = document.createElement('div');
var resumeH2 = document.createElement('h2');
var resumeP = document.createElement('p');
var resumeA = document.createElement('a');

//Create Attribute
sectionResume.setAttribute('id', 'resume');

//Create Text Content
resumeH2.textContent = 'resume';
resumeP.textContent =
  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatibus tempora hic debitis laborum in sunt tempore quasi. Enim porro, atque eveniet perferendis a earum velit reiciendis minima nisi consectetur!';
resumeA.textContent = 'download resume';

// Create Resume Style
sectionResume.style.minHeight = '300px';
sectionResume.style.backgroundColor = '#F2F2F2';
sectionResume.style.padding = '60px 0px';
//----
containerResume.style.width = '80%';
containerResume.style.margin = 'auto';
containerResume.style.textAlign = 'center';
//----
resumeH2.style.color = '#4E5B5B';
resumeH2.style.fontWeight = 'bold';
resumeH2.style.textTransform = 'uppercase';
//----
resumeP.style.margin = '60px 0px';
resumeP.style.textAlign = 'center';
resumeP.style.lineHeight = '1.8';
resumeP.style.color = '#777';
resumeP.style.textTransform = 'capitalize';
//----
resumeA.style.color = '#4be08e';
resumeA.style.fontSize = '17px';
resumeA.style.fontWeight = 'bold';
resumeA.style.textTransform = 'uppercase';
resumeA.style.padding = '10px 25px';
resumeA.style.border = 'solid 1px #4be08e';
resumeA.style.cursor = 'pointer';
resumeA.style.textDecoration = 'none';

//Append Elements
containerResume.appendChild(resumeH2);
containerResume.appendChild(resumeP);
containerResume.appendChild(resumeA);
sectionResume.appendChild(containerResume);
myBody.appendChild(sectionResume);

// -------------------------( End My Resume )-------------------------
// ===========================( Start EDU )===========================
//Create Elements
var sectionEdu = document.createElement('div');
var containerEdu = document.createElement('div');
var leftEduDiv = document.createElement('div');
var rightEduDiv = document.createElement('div');
var leftEduH2 = document.createElement('h2');
var firstEduP = document.createElement('p');
var lastEduP = document.createElement('p');

//Cerate Attribute
sectionEdu.setAttribute('id', 'edu');
rightEduDiv.setAttribute('class', 'eud');

//Creat Text Content
leftEduH2.textContent = 'my education';
firstEduP.textContent =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. S obcaecati porro doloremque quasi ratione voluptas non neque. Facilis dignissimos minus quaerat aliquid, voluptatem cum deleniti facere consectetur.';
lastEduP.textContent =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente Facilis dignissimos  cum deleniti facere consectetur.';

// Create EDU Style
sectionEdu.style.minHeight = '500px';
sectionEdu.style.padding = '50px 0px';
//----
containerEdu.style.width = '80%';
containerEdu.style.margin = 'auto';
containerEdu.style.display = 'flex';
containerEdu.style.justifyContent = 'space-between';
containerEdu.style.borderBottom = '1px solid #999';
containerEdu.style.paddingBottom = '30px';
//----
leftEduDiv.style.width = '47%';
//----
rightEduDiv.style.width = '47%';
rightEduDiv.style.minHeight = '400px';
rightEduDiv.style.paddingTop = '50px';
rightEduDiv.style.display = 'flex';
rightEduDiv.style.flexDirection = 'column';
//----
leftEduH2.style.color = '#4E5B5B';
leftEduH2.style.fontWeight = 'bold';
leftEduH2.style.textTransform = 'uppercase';
//----
firstEduP.style.margin = '30px 0px';
firstEduP.style.lineHeight = '1.8';
firstEduP.style.color = '#777';
firstEduP.style.textAlign = 'left';
firstEduP.style.textTransform = 'capitalize';
//----
lastEduP.style.lineHeight = '1.8';
lastEduP.style.color = '#777';
lastEduP.style.textAlign = 'left';
lastEduP.style.lineHeight = '1.4';
lastEduP.style.textTransform = 'capitalize';

//Append Elements
leftEduDiv.appendChild(leftEduH2);
leftEduDiv.appendChild(firstEduP);
leftEduDiv.appendChild(lastEduP);

containerEdu.appendChild(leftEduDiv);
containerEdu.appendChild(rightEduDiv);
sectionEdu.appendChild(containerEdu);
myBody.appendChild(sectionEdu);

for (var x = 0; x < 2; x++) {
  //Create Elements
  var parntEdu = document.createElement('div');
  var childEdu = document.createElement('div');
  var eudH3 = document.createElement('h3');
  var eudP = document.createElement('p');
  var eudA = document.createElement('a');
  var copyPeud = eudP.cloneNode();
  // Create Text Content
  eudA.textContent = '4.0 gpa';
  //Style
  parntEdu.style.height = '48%';
  parntEdu.style.paddingBottom = '20px';
  //----
  childEdu.style.paddingBottom = '30px';
  childEdu.style.borderBottom = '1px solid #999';
  //----
  eudH3.style.fontSize = '25px';
  eudH3.style.marginBottom = '10px';
  eudH3.style.textTransform = 'uppercase';
  eudH3.style.color = 'rgb(52, 68, 61)';
  eudH3.style.fontWeight = 'bold';
  //----
  eudP.style.lineHeight = '1.8';
  eudP.style.color = '#777';
  eudP.style.textAlign = 'left';
  eudP.style.textTransform = 'capitalize';
  //----
  copyPeud.style.color = '#777';
  copyPeud.style.textAlign = 'left';
  copyPeud.style.lineHeight = '1.4';
  copyPeud.style.textTransform = 'capitalize';
  //----
  eudA.style.color = '#fff';
  eudA.style.fontSize = '17px';
  eudA.style.fontWeight = 'bold';
  eudA.style.textTransform = 'uppercase';
  eudA.style.padding = '10px';
  eudA.style.backgroundColor = '#31CB6D';
  eudA.style.cursor = 'pointer';
  //Append Elements
  childEdu.appendChild(eudH3);
  childEdu.appendChild(copyPeud);
  childEdu.appendChild(eudA);
  parntEdu.appendChild(childEdu);
  parntEdu.appendChild(eudP);
  rightEduDiv.appendChild(parntEdu);
}
var eudCopyH3 = document.querySelectorAll('.eud h3');
var eudCopyP = document.querySelectorAll('.eud p');
//H3 Text Content
eudCopyH3[0].textContent = 'graphic design diploma';
eudCopyH3[1].textContent = 'cit diploma';
//P Text Content
eudCopyP[0].textContent = 'reeves college / june 2008 - may 2010';
eudCopyP[0].style.textTransform = 'capitalize';
eudCopyP[0].style.paddingBottom = '10px';
eudCopyP[1].textContent =
  'Lorem ipsum dolor sit amet porro doloremque quasi ratione voluptas non neque. Facilis dignissimos minus quaerat aliquid, voluptatem cum deleniti facere consectetur.';
eudCopyP[2].textContent = 'lethbridge college / june 1987 - may 2070';
eudCopyP[2].style.textTransform = 'capitalize';
eudCopyP[2].style.paddingBottom = '10px';
eudCopyP[3].textContent =
  'Lorem ipsum dolor sit amet porro doloremque quasi ratione voluptas non neque. Facilis dignissimos minus quaerat aliquid, voluptatem cum deleniti facere consectetur.';
// ----------------------------( End EDU )----------------------------
// ==========================( Start Work )===========================

//Create Elements
var sectionWork = document.createElement('div');
var containerWork = document.createElement('div');
var leftWorkDiv = document.createElement('div');
var rightWorkDiv = document.createElement('div');
var leftWorkH2 = document.createElement('h2');
var firstWorkP = document.createElement('p');
var lastWorkP = document.createElement('p');

//Cerate Attribute
sectionWork.setAttribute('id', 'works');
rightWorkDiv.setAttribute('class', 'work');

//Creat Text Content
leftWorkH2.textContent = 'work experience';
firstWorkP.textContent =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. S obcaecati porro doloremque quasi ratione voluptas non neque. Facilis dignissimos minus quaerat aliquid, voluptatem cum deleniti facere consectetur.';
lastWorkP.textContent =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente Facilis dignissimos  cum deleniti facere consectetur.';

//EDU Style
sectionWork.style.minHeight = '700px';
sectionWork.style.padding = '50px 0px';
//----
containerWork.style.width = '80%';
containerWork.style.margin = 'auto';
containerWork.style.display = 'flex';
containerWork.style.justifyContent = 'space-between';
containerWork.style.paddingBottom = '30px';
//----
leftWorkDiv.style.width = '47%';
//----
rightWorkDiv.style.width = '47%';
rightWorkDiv.style.minHeight = '600px';
rightWorkDiv.style.paddingTop = '50px';
rightWorkDiv.style.display = 'flex';
rightWorkDiv.style.flexDirection = 'column';
//----
leftWorkH2.style.color = '#4E5B5B';
leftWorkH2.style.fontWeight = 'bold';
leftWorkH2.style.textTransform = 'uppercase';
//----
firstWorkP.style.margin = '30px 0px';
firstWorkP.style.lineHeight = '1.8';
firstWorkP.style.color = '#777';
firstWorkP.style.textAlign = 'left';
firstWorkP.style.textTransform = 'capitalize';
//----
lastWorkP.style.lineHeight = '1.8';
lastWorkP.style.color = '#777';
lastWorkP.style.textAlign = 'left';
lastWorkP.style.textTransform = 'capitalize';

//Append Elements
leftWorkDiv.appendChild(leftWorkH2);
leftWorkDiv.appendChild(firstWorkP);
leftWorkDiv.appendChild(lastWorkP);

containerWork.appendChild(leftWorkDiv);
containerWork.appendChild(rightWorkDiv);
sectionWork.appendChild(containerWork);
myBody.appendChild(sectionWork);

for (var x = 0; x < 3; x++) {
  //Create Elements
  var parntWork = document.createElement('div');
  var childWork = document.createElement('div');
  var WorkH3 = document.createElement('h3');
  var WorkP = document.createElement('p');
  var WorkA = document.createElement('a');
  var copyPWork = WorkP.cloneNode();
  // Create Text Content
  WorkA.textContent = '4.0 gpa';
  //Style
  parntWork.style.height = '48%';
  parntWork.style.paddingBottom = '20px';
  //----
  childWork.style.paddingBottom = '30px';
  childWork.style.borderBottom = '1px solid #999';
  //----
  WorkH3.style.fontSize = '25px';
  WorkH3.style.marginBottom = '10px';
  WorkH3.style.textTransform = 'uppercase';
  WorkH3.style.color = 'rgb(52, 68, 61)';
  WorkH3.style.fontWeight = 'bold';
  //----
  WorkP.style.lineHeight = '1.8';
  WorkP.style.color = '#777';
  WorkP.style.textAlign = 'left';
  WorkP.style.textTransform = 'capitalize';
  //----
  WorkA.style.color = '#fff';
  WorkA.style.fontSize = '17px';
  WorkA.style.fontWeight = 'bold';
  WorkA.style.textTransform = 'uppercase';
  WorkA.style.padding = '10px';
  WorkA.style.backgroundColor = '#31CB6D';
  WorkA.style.cursor = 'pointer';
  //----
  copyPWork.style.paddingBottom = '10px';
  copyPWork.style.color = '#777';
  //Append Elements
  childWork.appendChild(WorkH3);
  childWork.appendChild(copyPWork);
  childWork.appendChild(WorkA);
  parntWork.appendChild(childWork);
  parntWork.appendChild(WorkP);
  rightWorkDiv.appendChild(parntWork);
}
var workCopyH3 = document.querySelectorAll('.work h3');
var workCopyP = document.querySelectorAll('.work p');
var workH3Content = ['lead web designer', 'junior designer', 'web developer'];
//H3 Text Content
for (var x = 0; x < workCopyH3.length; x++) {
  workCopyH3[x].textContent = workH3Content[x];
}
//P Text Content
for (var i = 0; i < workCopyP.length; i++) {
  if (i === 0) {
    workCopyP[i].textContent = 'reeves college / june 2008 - may 2010';
  } else if (i === 1) {
    workCopyP[i].textContent =
      'Lorem ipsum dolor sit amet porro doloremque quasi ratione voluptas non neque. Facilis dignissimos minus quaerat aliquid, voluptatem cum deleniti facere consectetur.';
  } else if (i === 2) {
    workCopyP[i].textContent = 'lethbridge college / june 1987 - may 2070';
  } else if (i === 3) {
    workCopyP[i].textContent =
      'Lorem ipsum dolor sit amet porro doloremque quasi ratione voluptas non neque. Facilis dignissimos minus quaerat aliquid, voluptatem cum deleniti facere consectetur.';
  } else if (i === 4) {
    workCopyP[i].textContent = 'lethbridge college / june 1987 - may 2070';
  } else if (i === 5) {
    workCopyP[i].textContent =
      'Lorem ipsum dolor sit amet porro doloremque quasi ratione voluptas non neque. Facilis dignissimos minus quaerat aliquid, voluptatem cum deleniti facere consectetur.';
  }
}
// ---------------------------( End Work )----------------------------
// =======================( Start SlideInfo )=========================
//Create Elements
var sectionSlide = document.createElement('div');
var containerSlide = document.createElement('div');
var slideH3 = document.createElement('h3');
var slideP = document.createElement('p');
var slideUl = document.createElement('ul');

//Create Attribute
slideUl.setAttribute('class', 'slid');

//Create Text Content
slideH3.textContent = 'hamada mohamed';
slideP.textContent =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quis tempore, doloribus veritatis, quisquam dolores debitis distinctio reprehenderit amet obcaecati quod, nobis deleniti commodi provident in numquam necessitatibus accusamus culpa  nobis deleniti commodi provident in numquam necessitatibus accusamus culpa.';

// Create Slide Style
sectionSlide.style.minHeight = '350px';
sectionSlide.style.backgroundColor = '#f2f2f2';
//----
containerSlide.style.width = '80%';
containerSlide.style.margin = 'auto';
containerSlide.style.textAlign = 'center';
containerSlide.style.padding = '60px 0px';
//----
slideH3.style.fontSize = '25px';
slideH3.style.margin = '25px 0px';
slideH3.style.textTransform = 'uppercase';
slideH3.style.color = 'rgb(52, 68, 61)';
slideH3.style.fontWeight = 'bold';
//----
slideP.style.textAlign = 'center';
slideP.style.lineHeight = '1.8';
slideP.style.padding = '0px 40px';
slideP.style.color = '#777';
slideP.style.textTransform = 'capitalize';
//----
slideUl.style.listStyle = 'none';

//Append Elements
containerSlide.appendChild(slideP);
containerSlide.appendChild(slideH3);
containerSlide.appendChild(slideUl);
sectionSlide.appendChild(containerSlide);
myBody.appendChild(sectionSlide);

for (var x = 0; x < 3; x++) {
  var slideLi = document.createElement('li');
  //Style
  slideLi.style.display = 'inline-block';
  slideLi.style.margin = '15px';
  slideLi.style.width = '15px';
  slideLi.style.height = '15px';
  slideLi.style.border = '2px solid #22D371';
  slideLi.style.borderRadius = '50%';
  slideLi.style.cursor = 'pointer';
  //Append
  slideUl.appendChild(slideLi);
  //
}
var allSlide = document.querySelectorAll('.slid li');

allSlide[0].style.backgroundColor = '#48bd7d';
allSlide[0].setAttribute('id', 'ac');
for (var i = 0; i < allSlide.length; i++) {
  allSlide[i].onclick = function () {
    for (var a = 0; a < allSlide.length; a++) {
      allSlide[a].style.backgroundColor = 'transparent';
      allSlide[a].removeAttribute('id');
    }
    this.style.backgroundColor = '#48bd7d';
    this.setAttribute('id', 'ac');
    if (allSlide[0].hasAttribute('id')) {
      slideH3.textContent = 'hamada mohamed';
    } else if (allSlide[1].hasAttribute('id')) {
      slideH3.textContent = 'ahmed mohamed';
    } else if (allSlide[2].hasAttribute('id')) {
      slideH3.textContent = 'ali ahmed';
    }
  };
}
// ---------------------------( End SlideInfo )----------------------------

// ==========================( Start Portfolio )===========================
//Create Portfolio Elements
var sectionPort = document.createElement('div');
var portContainer = document.createElement('div');
var portTopDiv = document.createElement('div');
var portDownDiv = document.createElement('div');
var portH3 = document.createElement('h3');
var portP = document.createElement('p');

//Create Attribute
sectionPort.setAttribute('id', 'portf');
portDownDiv.setAttribute('class', 'port');

//Create TextContent
portH3.textContent = 'portfolio';
portP.textContent =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum magnam fugit beatae eos modi maxime, quidem quasi tempora dolor similique repellendus ut excepturi officiis nam repudiandae sit ipsum corrupti voluptatum?';

//Create Portfolio Style
sectionPort.style.minHeight = '1000px';
//-----
portContainer.style.width = '80%';
portContainer.style.margin = 'auto';
portContainer.style.padding = '40px 0px';
//-----
portTopDiv.style.minHeight = '150px';
portTopDiv.style.textAlign = 'center';
portTopDiv.style.padding = '10px 0px';
//-----
portDownDiv.style.width = '100%';
portDownDiv.style.minHeight = '800px';
portDownDiv.style.display = 'flex';
portDownDiv.style.flexWrap = 'wrap';
portDownDiv.style.justifyContent = 'space-between';
portDownDiv.style.alignItems = 'space-between';
//-----
portH3.style.fontSize = '25px';
portH3.style.fontWeight = 'bold';
portH3.style.textTransform = 'uppercase';
portH3.style.color = 'rgb(52, 68, 61)';
//-----
portP.style.textAlign = 'center';
portP.style.padding = '10px 0px';
portP.style.lineHeight = '1.8';
portP.style.color = '#777';
portP.style.textTransform = 'capitalize';

//Append Elements
portTopDiv.appendChild(portH3);
portTopDiv.appendChild(portP);
portContainer.appendChild(portTopDiv);
portContainer.appendChild(portDownDiv);
sectionPort.appendChild(portContainer);
myBody.appendChild(sectionPort);

for (var i = 0; i < 9; i++) {
  //Create Elements
  var portDiv = document.createElement('div');
  var portImg = document.createElement('img');
  var portSpan = document.createElement('span');
  //Attribute
  portDiv.setAttribute('class', 'port-div');
  portImg.setAttribute('src', '');
  portImg.setAttribute('alt', 'Portfolio Images');
  portSpan.setAttribute('class', 'my-span');
  //Style
  portDiv.style.width = '30%';
  portDiv.style.height = '250px';
  portDiv.style.marginBottom = '5%';
  portDiv.style.overflow = 'hidden';
  portDiv.style.position = 'relative';
  //---
  portImg.style.width = '100%';
  portImg.style.height = '100%';
  portImg.style.transition = '500ms ease-in-out';
  //---
  portSpan.style.position = 'absolute';
  portSpan.style.top = '50%';
  portSpan.style.left = '50%';
  portSpan.style.opacity = '0';
  portSpan.style.fontSize = '30px';
  portSpan.style.opacity = '0';
  portSpan.style.transform = 'translate(-50% , -50%)';
  portSpan.style.color = 'rgb(49, 203, 109)';
  portSpan.style.transition = '500ms ease-in-out';
  portSpan.setAttribute('class', 'fas fa-search');

  portDiv.appendChild(portImg);
  portDiv.appendChild(portSpan);
  portDownDiv.appendChild(portDiv);
}
var allPortImg = document.querySelectorAll('.port img');
var allPortSpan = document.querySelectorAll('.port span');
var portHoverD = document.getElementsByClassName('port-div');
//-----
for (var i = 0; i < portHoverD.length; i++) {
  portHoverD[i].onmousemove = function () {
    this.children[0].style.transform = 'scale(1.1)';
    this.children[0].style.opacity = '.8';
    this.children[1].style.opacity = '1';
    this.children[1].style.fontSize = '40px';
  };
}
for (var i = 0; i < portHoverD.length; i++) {
  portHoverD[i].onmouseleave = function () {
    this.children[0].style.transform = 'scale(1)';
    this.children[0].style.opacity = '1';
    this.children[1].style.opacity = '0';
    this.children[1].style.fontSize = '30px';
  };
}
//----
// Add Img Src
const myPortImg = [
  'images/port1.jpg',
  'images/port2.jpg',
  'images/port3.png',
  'images/port4.jpg',
  'images/port5.jpg',
  'images/port6.webp',
  'images/port7.jpg',
  'images/port8.webp',
  'images/port9.jpg',
];
for (var x = 0; x < allPortImg.length; x++) {
  allPortImg[x].src = myPortImg[x];
}
// ---------------------------( End Portfolio )-----------------------------

// ==========================( Start Contact Me )===========================
//Cerate Elements
var sectionContact = document.createElement('div');
var containerCont = document.createElement('div');
var contactInfo = document.createElement('div');
var contactForm = document.createElement('div');

sectionContact.setAttribute('id', 'cont');
contactInfo.setAttribute('class', 'cont-info');
//Create Style
sectionContact.style.minHeight = '500px';
sectionContact.style.backgroundColor = '#252F31';
sectionContact.style.padding = '85px 0px';
sectionContact.style.boxSizing = 'border-box';
//----
containerCont.style.width = '80%';
containerCont.style.margin = 'auto';
containerCont.style.display = 'flex';
containerCont.style.boxSizing = 'border-box';
//----
contactInfo.style.width = '50%';
contactInfo.style.minHeight = '400px';
contactInfo.style.paddingRight = '40px';
//----
contactForm.style.width = '50%';
contactForm.style.minHeight = '400px';
contactForm.style.paddingTop = '30px';

//AppendChild
containerCont.appendChild(contactInfo);
containerCont.appendChild(contactForm);
sectionContact.appendChild(containerCont);
myBody.appendChild(sectionContact);

//Contact Info Child
var infoH3 = document.createElement('h3');
var infoP1 = document.createElement('p');
var infoP2 = document.createElement('p');
var infoP3 = document.createElement('p');
var infoP4 = document.createElement('p');
var infoEmail = document.createElement('h5');
var infoPhone = document.createElement('h5');
var infoSpan = document.createElement('span');
var copySpan = infoSpan.cloneNode(true);

//Style
infoH3.style.color = '#fff';
infoH3.style.fontSize = '25px';
infoH3.style.fontWeight = 'bold';
//----
infoEmail.style.color = '#fff';
infoPhone.style.color = '#fff';
//----
infoP1.style.margin = '40px 0px';
infoP1.style.padding = '0 140px 0 0';
infoP1.style.color = '#777';
infoP2.style.margin = '10px 0px';
infoP2.style.color = '#777';
infoP3.style.margin = '10px 0px';
infoP3.style.color = '#777';
infoP4.style.margin = '10px 0px 40px';
infoP4.style.color = '#777';

//Add TextContent
infoH3.textContent = 'contact me';
infoP1.textContent =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dolor, quia quam dolore repellat ad molestias eum natus totam voluptate nulla modi qui? Nemo quis ea, excepturi optio adipisci maxime?';

infoP2.textContent = '501 20 Street';
infoP3.textContent = 'Egypt Zagazeg';
infoP4.textContent = '501';
infoSpan.textContent = ' teky413@gmail.com';
copySpan.textContent = ' 0123456789';
infoEmail.innerHTML = 'Email &#160;&#160;&#160;&#160;&#160;&#160;&#160;:    ';
infoPhone.innerHTML = 'Phone &#160;&#160;&#160;&#160;&#160;&#160;:   ';

//Append Info Child
contactInfo.appendChild(infoH3);
contactInfo.appendChild(infoP1);
contactInfo.appendChild(infoP2);
contactInfo.appendChild(infoP3);
contactInfo.appendChild(infoP4);
infoEmail.appendChild(infoSpan);
contactInfo.appendChild(infoEmail);
infoPhone.appendChild(copySpan);
contactInfo.appendChild(infoPhone);
infoSpan.style.color = '#777';
copySpan.style.color = '#777';

//Contact Form Child
var infoForm = document.createElement('div');
var nameLabel = document.createElement('label');
var emailLabel = document.createElement('label');
var msgLabel = document.createElement('label');
var nameInput = document.createElement('input');
var emailInput = document.createElement('input');
var msgInput = document.createElement('textarea');
var contactBtn = document.createElement('button');

//Set Attribute
infoForm.setAttribute('class', 'my-form');
nameInput.setAttribute('type', 'text');
nameInput.setAttribute('value', '');
emailInput.setAttribute('type', 'email');
emailInput.setAttribute('value', '');
//Set Content
nameLabel.textContent = 'Name *';
emailLabel.textContent = 'Email Address *';
msgLabel.textContent = 'Text Message *';
contactBtn.textContent = 'Contact Me';
//Set Style
infoForm.style.minHeight = '600PX';
infoForm.style.padding = '0px 40px';
infoForm.style.boxSizing = 'border-box';
//----
nameLabel.style.color = '#fff';
nameLabel.style.margin = '30px 0px 15px';
nameLabel.style.display = 'block';
//----
emailLabel.style.color = '#fff';
emailLabel.style.margin = '30px 0px 15px';
emailLabel.style.display = 'block';
//----
msgLabel.style.color = '#fff';
msgLabel.style.margin = '30px 0px 15px';
msgLabel.style.display = 'block';
//----
nameInput.style.width = '100%';
nameInput.style.height = '40px';
nameInput.style.padding = '5px 15px';
nameInput.style.backgroundColor = '#495355';
nameInput.style.outlineStyle = 'none';
nameInput.style.color = '#fff';
nameInput.style.borderStyle = 'none';
//----
emailInput.style.width = '100%';
emailInput.style.height = '40px';
emailInput.style.padding = '5px 15px';
emailInput.style.backgroundColor = '#495355';
emailInput.style.outlineStyle = 'none';
emailInput.style.color = '#fff';
emailInput.style.borderStyle = 'none';
//----
msgInput.style.width = '100%';
msgInput.style.height = '200px';
msgInput.style.padding = '5px 15px';
msgInput.style.backgroundColor = '#495355';
msgInput.style.outlineStyle = 'none';
msgInput.style.color = '#fff';
msgInput.style.resize = 'none';
msgInput.style.borderStyle = 'none';
//----
contactBtn.style.padding = '10px 20px';
contactBtn.style.outLine = 'none';
contactBtn.style.color = '#fff';
contactBtn.style.fontWeight = 'bold';
contactBtn.style.textTransform = 'uppercase';
contactBtn.style.backgroundColor = '#191E22';
contactBtn.style.boxShadow = '2px 2px 5px 3px rgb(127 120 120)';
contactBtn.style.marginTop = '30px';

//Set Append Child
infoForm.appendChild(nameLabel);
infoForm.appendChild(nameInput);
infoForm.appendChild(emailLabel);
infoForm.appendChild(emailInput);
infoForm.appendChild(msgLabel);
infoForm.appendChild(msgInput);
infoForm.appendChild(contactBtn);
contactForm.appendChild(infoForm);

contactBtn.onclick = () => {
  var setName = /^([A-Z][a-z]*\s)([A-Z][a-z]*)$/;
  var nameCheck = setName.test(nameInput.value);
  var setEmail = /^[\w_\-\.]*@(gmail.com|yahoo.com|hotmail.com)$/;
  var emailCheck = setEmail.test(emailInput.value);
  var setMsg = /^[\w\s@.\-\*\+!_\#\$\%\^\&\/\;\,\.()]{50,}$/;
  var msgCheck = setMsg.test(msgInput.value);
  // Create Wrong message
  var wrong = document.createElement('span');
  wrong.setAttribute('id', 'wr');
  infoForm.appendChild(wrong);
  wrong.style.color = 'red';

  for (var x = 0; x < infoForm.children.length; x++) {
    if (infoForm.children[x].hasAttribute('id')) {
      infoForm.removeChild(infoForm.children[x]);
    }
  }
  if (!nameCheck) {
    wrong.textContent = 'You Need To Input A valid (First & Last Name) Aa';
    infoForm.insertBefore(wrong, infoForm.childNodes[1]);
  } else if (!emailCheck) {
    wrong.textContent = 'You Need To Input A valid Email..';
    infoForm.insertBefore(wrong, infoForm.childNodes[3]);
  } else if (!msgCheck) {
    wrong.textContent = 'You Need To Input A Message least 50 charatcer..';
    infoForm.insertBefore(wrong, infoForm.childNodes[5]);
  } else {
    mySendMsg.textContent =
      'Thank You ' + nameInput.value + ' Your Message Has Been Send ....';
    mySend.style.display = 'block';
    nameInput.value = '';
    emailInput.value = '';
    msgInput.value = '';
    setTimeout(() => {
      mySend.style.display = 'none';
    }, 5000);
  }
};

var mySend = document.createElement('div');
var mySendMsg = document.createElement('p');

mySend.style.position = 'fixed';
mySend.style.display = 'none';
mySend.style.top = '50%';
mySend.style.left = '0';
mySend.style.width = '100%';
mySend.style.minHeight = '10%';
mySend.style.textAlign = 'center';
mySend.style.zIndex = '500000';
mySend.style.backgroundColor = 'rgba(33, 58, 47, 0.7)';
mySend.style.border = 'solid 2px rgb(33, 58, 47)';
mySendMsg.style.color = '#fff';
mySendMsg.style.fontSize = '25px';
mySendMsg.style.fontWeight = 'bold';
mySend.appendChild(mySendMsg);
myBody.appendChild(mySend);

// ---------------------------( End Contact Me )----------------------------

// ============================( Start Footer )=============================
//Create Elements
var sectionFooter = document.createElement('section');
var copyRight = document.createElement('p');
var socialMedia = document.createElement('ul');

//Set Attribute
socialMedia.setAttribute('class', 'media');

//Add TextContent
copyRight.textContent = 'CopyRight 2020. vanilla javascript made by hamada501';

//Style
sectionFooter.style.minHeight = '150px';
sectionFooter.style.padding = '20px 0px';
sectionFooter.style.backgroundColor = '#191E22';
sectionFooter.style.textAlign = 'center';
//----
copyRight.style.textAlign = 'center';
copyRight.style.textTransform = 'capitalize';
copyRight.style.color = '#777';
copyRight.style.lineHeight = '1.4';
//----
socialMedia.style.listStyle = 'none';
//Append Child
sectionFooter.appendChild(copyRight);
sectionFooter.appendChild(socialMedia);
myBody.appendChild(sectionFooter);

var socialClass = [
  'fab fa-facebook-f',
  'fab fa-twitter',
  'fab fa-instagram-square',
  'fab fa-google',
  'fab fa-linkedin-in',
];

for (var i = 0; i < socialClass.length; i++) {
  //Create Element
  var socialLi = document.createElement('li');
  //SetAttribute
  socialLi.setAttribute('class', socialClass[i]);
  //Style
  socialLi.style.width = '45px';
  socialLi.style.height = '45px';
  socialLi.style.display = 'inline-block';
  socialLi.style.margin = '0px 5px';
  socialLi.style.padding = '10px';
  socialLi.style.borderRadius = '50%';
  socialLi.style.color = '#1E2327';
  socialLi.style.backgroundColor = '#4A5456';
  socialLi.style.fontSize = '25px';
  socialLi.style.cursor = 'pointer';
  socialLi.style.boxSizing = 'border-box';

  //AppendChild
  socialMedia.appendChild(socialLi);
}
//Hover
var allSocial = document.querySelectorAll('.media li');

for (var x = 0; x < allSocial.length; x++) {
  allSocial[x].onmousemove = function () {
    this.style.color = '#fff';
  };
}
for (var x = 0; x < allSocial.length; x++) {
  allSocial[x].onmouseleave = function () {
    this.style.color = '#1E2327';
  };
}

//Function Remove Activ class
function removeActiv() {
  for (var x = 0; x < allLink.length; x++) {
    allLink[x].style.color = '#fff';
    allLink[x].style.border = 'none';
    allLink[x].removeAttribute('id');
  }
}

// onScrol
window.onscroll = function () {
  console.log(window.scrollY + ' -|- ' + window.scrollX);

  if (pageResizeFull) {
    if (window.scrollY > 700) {
      for (var x = 0; x < allLink.length; x++) {
        allLink[x].style.padding = '0px 15px';
      }
      navBar.style.position = 'fixed';
      navBar.style.width = '100%';
      navBar.style.top = '0px';
      navBar.style.left = '0px';
      navBar.style.zIndex = '999';
      navBar.style.backgroundColor = 'rgba(33, 58, 47, 0.8)';
      myh1.style.fontSize = '30px';
      backBtn.style.display = 'block';
      removeActiv();
      allLink[1].style.color = 'rgb(7, 160, 94)';
      allLink[1].setAttribute('id', 'activ');
    } else {
      navBar.style.backgroundColor = 'rgb(52, 68, 61)';
      navBar.style.position = 'static';
      backBtn.style.display = 'none';
      myh1.style.fontSize = '30px';
      for (var x = 0; x < allLink.length; x++) {
        allLink[x].style.padding = '15px';
        myh1.style.fontSize = '30px';
      }
      removeActiv();
      allLink[0].style.color = 'rgb(7, 160, 94)';
      allLink[0].setAttribute('id', 'activ');
    }
    //---
    if (window.scrollY > 5800) {
      removeActiv();
      allLink[6].style.color = 'rgb(7, 160, 94)';
      allLink[6].setAttribute('id', 'activ');
    } else if (window.scrollY > 4500) {
      removeActiv();
      allLink[5].style.color = 'rgb(7, 160, 94)';
      allLink[5].setAttribute('id', 'activ');
    } else if (window.scrollY > 2300) {
      removeActiv();
      allLink[4].style.color = 'rgb(7, 160, 94)';
      allLink[4].setAttribute('id', 'activ');
    } else if (window.scrollY > 1850) {
      removeActiv();
      allLink[3].style.color = 'rgb(7, 160, 94)';
      allLink[3].setAttribute('id', 'activ');
    } else if (window.scrollY > 1330) {
      removeActiv();
      allLink[2].style.color = 'rgb(7, 160, 94)';
      allLink[2].setAttribute('id', 'activ');
    }
  }
  //--
  else if (pageResize1000) {
    if (window.scrollY > 480) {
      navBar.style.position = 'fixed';
      navBar.style.width = '100%';
      navBar.style.top = '0px';
      navBar.style.left = '0px';
      navBar.style.backgroundColor = 'rgba(33, 58, 47, 0.7)';
      myh1.style.display = 'none';
      backBtn.style.display = 'block';
    } else {
      navBar.style.backgroundColor = 'rgb(52, 68, 61)';
      navBar.style.position = 'static';
      myh1.style.display = 'block';
      backBtn.style.display = 'none';
      removeActiv();
      allLink[0].style.color = 'rgb(7, 160, 94)';
      allLink[0].setAttribute('id', 'activ');
    }
    //--Links Active
    if (window.scrollY > 7430) {
      removeActiv();
      allLink[6].style.color = 'rgb(7, 160, 94)';
      allLink[6].setAttribute('id', 'activ');
    } else if (window.scrollY > 5700) {
      removeActiv();
      allLink[5].style.color = 'rgb(7, 160, 94)';
      allLink[5].setAttribute('id', 'activ');
    } else if (window.scrollY > 3080) {
      removeActiv();
      allLink[4].style.color = 'rgb(7, 160, 94)';
      allLink[4].setAttribute('id', 'activ');
    } else if (window.scrollY > 2680) {
      removeActiv();
      allLink[3].style.color = 'rgb(7, 160, 94)';
      allLink[3].setAttribute('id', 'activ');
    } else if (window.scrollY > 1650) {
      removeActiv();
      allLink[2].style.color = 'rgb(7, 160, 94)';
      allLink[2].setAttribute('id', 'activ');
    } else if (window.scrollY > 950) {
      removeActiv();
      allLink[1].style.color = 'rgb(7, 160, 94)';
      allLink[1].setAttribute('id', 'activ');
    }
  }
  //--
  else if (pageResize765) {
    if (window.scrollY > 460) {
      navBar.style.position = 'fixed';
      navBar.style.width = '100%';
      navBar.style.top = '0px';
      navBar.style.left = '0px';
      navBar.style.backgroundColor = 'rgba(33, 58, 47, 0.7)';
      backBtn.style.display = 'block';
    } else {
      navBar.style.backgroundColor = 'rgb(52, 68, 61)';
      navBar.style.position = 'static';
      backBtn.style.display = 'none';
    }
    //--Links Active
    if (window.scrollY > 8000) {
      mySelect.value = mySelect[6].value;
    } else if (window.scrollY > 6230) {
      mySelect.value = mySelect[5].value;
    } else if (window.scrollY > 3420) {
      mySelect.value = mySelect[4].value;
    } else if (window.scrollY > 2940) {
      mySelect.value = mySelect[3].value;
    } else if (window.scrollY > 2000) {
      mySelect.value = mySelect[2].value;
    } else if (window.scrollY > 1000) {
      mySelect.value = mySelect[1].value;
    } else mySelect.value = mySelect[0].value;
  }
};

//On Window Resize
window.onresize = function () {
  if (window.innerWidth < 501) {
    mediaQuery500();
  } else if (window.innerWidth < 781) {
    mediaQuery780();
  } else if (window.innerWidth < 1000 && window.innerWidth > 766) {
    mediaQuery1000();
  } else if (window.innerWidth > 1000) {
    mediaQueryFull();
  }
};

//MY Menu Button Action
myMenu.onclick = menuClick;
function menuClick() {
  if (myUl.style.display === 'none') {
    myUl.style.display = 'block';
    myMenu.style.color = 'rgb(7, 160, 94)';
  } else {
    myUl.style.display = 'none';
    myMenu.style.color = '#fff';
  }
}

//Create Media Query
function mediaQuery500() {
  pageResize500 = true;
  pageResize765 = false;
  pageResize1000 = false;
  pageResizeFull = false;
  //Slider Media Query
  myHeader.style.display = 'none';
  mySelect.style.display = 'none';
  // Nav Bar Media Query
  myBar.style.borderRadius = '0';
  myBar.style.top = '0';
  myBar.style.left = '0';
  myBar.style.width = '100%';
  myBar.style.padding = '0 15px';
  myBar.style.position = 'fixed';
  myBar.style.flexDirection = 'row';
  myBar.style.flexWrap = 'wrap';
  myBar.style.justifyContent = 'space-between';
  myBar.style.alignItems = 'center';
  myBar.style.backgroundColor = 'rgba(52, 68, 61,.85)';
  myBar.style.boxSizing = 'border-box';
  myMenu.style.display = 'block';
  myh1.style.fontSize = '30px';
  myh1.style.margin = '12px 0';
  myh1.style.display = 'block';
  myUl.style.display = 'none';
  myUl.style.position = 'fixed';
  myUl.style.top = '40px';
  myUl.style.left = '0';
  myUl.style.width = '100%';
  myUl.style.height = '100%';
  myUl.style.padding = '0';
  myUl.style.textAlign = 'center';
  myUl.style.backgroundColor = 'rgba(52, 68, 61,.9)';
  myUl.style.boxSizing = 'border-box';
  //Values Media Query
  valuesDiv.style.paddingTop = '55px';
  valuesDiv.style.flexDirection = 'column';
  valuesDiv.style.justifyContent = 'center';
  for (var x = 0; x < queryValue.length; x++) {
    queryValue[x].style.width = '100%';
    queryValue[x].style.textAlign = 'center';
    queryValue[x].children[1].style.textAlign = 'center';
  }
  //About Media Query
  sectionAbout.style.width = '80%';
  sectionAbout.style.margin = 'auto';
  sectionAbout.style.flexDirection = 'column';
  aboutImgDiv.style.width = '100%';
  aboutImgDiv.style.height = '300px';
  aboutInfoDiv.style.width = '100%';
  aboutTopDiv.style.textAlign = 'center';
  aboutTopDiv.style.width = '100%';
  aboutTopDiv.style.padding = '0';
  aboutP1.style.padding = '0px 10px';
  aboutP1.style.textAlign = 'center';
  aboutP2.style.padding = '0px 10px';
  aboutP2.style.textAlign = 'center';
  aboutDownDiv.style.flexDirection = 'column';
  for (var x = 0; x < queryAbout.length; x++) {
    queryAbout[x].style.width = '100%';
  }
  // Skills Media Query
  containerSkill.style.flexDirection = 'column';
  leftDivSkill.style.width = '100%';
  leftDivSkill.style.textAlign = 'center';
  skillFirstP.style.textAlign = 'center';
  skillLastP.style.textAlign = 'center';
  rightDivSkill.style.width = '100%';
  rightDivSkill.style.marginTop = '70px';
  // My EDU Media Query
  containerEdu.style.flexDirection = 'column';
  leftEduDiv.style.width = '100%';
  rightEduDiv.style.width = '100%';
  //My Works Media Query
  containerWork.style.flexDirection = 'column';
  leftWorkDiv.style.width = '100%';
  rightWorkDiv.style.width = '100%';
  // SlideInfo Media Query
  slideP.style.padding = '0px 10px';
  // Portfolio Media Query
  portDownDiv.style.flexDirection = 'column';
  for (var x = 0; x < portHoverD.length; x++) {
    portHoverD[x].style.width = '100%';
  }
  // Contact Me Media Query
  containerCont.style.flexDirection = 'column';
  contactInfo.style.width = '100%';
  contactForm.style.width = '100%';
  infoForm.style.padding = '0';
  nameInput.style.height = '30px';
  emailInput.style.height = '30px';
  contactBtn.style.marginLeft = '25%';
}

//Create Media Query
function mediaQuery780() {
  pageResize500 = false;
  pageResize765 = true;
  pageResize1000 = false;
  pageResizeFull = false;
  //Slider Media Query
  myHeader.style.display = 'block';
  myHeader.style.height = '400px';
  headH1.style.fontSize = '25px';
  headUl.style.right = '40%';
  headUl.style.bottom = '3%';
  headUl.style.padding = '0';
  headUl.style.display = 'inline-block';
  for (var x = 0; x < headSlider.length; x++) {
    headSlider[x].style.display = 'inline-block';
  }
  // Nav Bar Media Query
  myBar.style.top = '0';
  myBar.style.left = '0';
  myBar.style.width = '100%';
  myBar.style.padding = '0 15px';
  myBar.style.borderRadius = '0';
  myBar.style.position = 'static';
  myBar.style.display = 'flex';
  myBar.style.flexDirection = 'row';
  myBar.style.justifyContent = 'space-between';
  myBar.style.alignItems = 'center';
  myBar.style.backgroundColor = 'rgba(52, 68, 61,.85)';
  myBar.style.boxSizing = 'border-box';
  myh1.style.fontSize = '30px';
  myh1.style.margin = '12px 0';
  myh1.style.display = 'block';
  mySelect.style.display = 'block';
  myMenu.style.display = 'none';
  myMenu.style.color = '#fff';
  myUl.style.display = 'none';
  myUl.style.backgroundColor = 'transparent';
  //---
  mySelect.style.backgroundColor = 'rgba(52, 68, 61,.85)';

  //Values Media Query
  valuesDiv.style.paddingTop = '55px';
  valuesDiv.style.flexDirection = 'column';
  valuesDiv.style.justifyContent = 'center';
  for (var x = 0; x < queryValue.length; x++) {
    queryValue[x].style.width = '100%';
    queryValue[x].style.textAlign = 'center';
    queryValueP[x].style.textAlign = 'center';
  }
  //About Media Query
  sectionAbout.style.width = '80%';
  sectionAbout.style.margin = 'auto';
  sectionAbout.style.flexDirection = 'column';
  aboutImgDiv.style.width = '100%';
  aboutImgDiv.style.height = '400px';
  aboutInfoDiv.style.width = '100%';
  aboutTopDiv.style.textAlign = 'center';
  aboutTopDiv.style.width = '100%';
  aboutTopDiv.style.padding = '0';
  aboutP1.style.padding = '0px 10px';
  aboutP1.style.textAlign = 'center';
  aboutP2.style.padding = '0px 10px';
  aboutP2.style.textAlign = 'center';
  aboutDownDiv.style.flexDirection = 'column';
  aboutDownDiv.style.justifyContent = 'center';
  aboutDownDiv.style.alignItems = 'center';
  aboutDownDiv.style.padding = '0';
  for (var x = 0; x < queryAbout.length; x++) {
    queryAbout[x].style.width = '80%';
    queryAbout[x].style.margin = 'auto';
    queryAbout[x].style.flexDirection = 'column';
    queryAbout[x].style.justifyContent = 'center';
    queryAbout[x].style.alignItems = 'center';
    aboutAllInfo[x].style.textAlign = 'center';
    aboutAllInfo[x].children[1].style.textAlign = 'center';
  }
  // Skills Media Query
  containerSkill.style.flexDirection = 'column';
  leftDivSkill.style.width = '100%';
  leftDivSkill.style.minHeight = '430px';
  leftDivSkill.style.padding = '0';
  leftDivSkill.style.textAlign = 'center';
  skillFirstP.style.textAlign = 'center';
  skillLastP.style.textAlign = 'center';
  rightDivSkill.style.width = '100%';
  rightDivSkill.style.padding = '0 20px';
  rightDivSkill.style.marginTop = '50px';
  slideUl.style.padding = '0';
  // My EDU Media Query
  containerEdu.style.flexDirection = 'column';
  leftEduDiv.style.width = '100%';
  rightEduDiv.style.width = '100%';
  //My Works Media Query
  containerWork.style.flexDirection = 'column';
  leftWorkDiv.style.width = '100%';
  rightWorkDiv.style.width = '100%';
  // SlideInfo Media Query
  slideP.style.padding = '0px 10px';
  // Portfolio Media Query
  portDownDiv.style.flexDirection = 'row';
  portDownDiv.style.flexWrap = 'wrap';
  for (var x = 0; x < portHoverD.length; x++) {
    portHoverD[x].style.width = '46%';
  }
  // Contact Me Media Query
  containerCont.style.flexDirection = 'column';
  containerCont.style.justifyContent = 'center';
  contactInfo.style.width = '100%';
  contactInfo.style.padding = '0';
  contactForm.style.width = '100%';
  infoForm.style.padding = '0';
  infoForm.style.width = '100%';
  nameInput.style.height = '35px';
  emailInput.style.height = '35px';
  contactBtn.style.marginLeft = '30%';
  console.log('my 765px = : ' + pageResize765);
}

//Create Media Query
function mediaQuery1000() {
  pageResize500 = false;
  pageResize765 = false;
  pageResize1000 = true;
  pageResizeFull = false;
  //Slider Media Query
  myHeader.style.display = 'block';
  myHeader.style.height = '400px';
  headH1.style.fontSize = '25px';
  headUl.style.right = '43%';
  headUl.style.bottom = '3%';
  headUl.style.padding = '0';
  headUl.style.display = 'inline-block';
  for (var x = 0; x < headSlider.length; x++) {
    headSlider[x].style.display = 'inline-block';
  }
  // NavBar Media Query
  myBar.style.flexDirection = 'column';
  myBar.style.flexWrap = 'wrap';
  myBar.style.justifyContent = 'center';
  myBar.style.alignItems = 'center';
  myBar.style.backgroundColor = 'transparent';
  myh1.style.fontSize = '30px';
  mySelect.style.display = 'none';
  myMenu.style.display = 'none';
  myMenu.style.color = '#fff';
  myUl.style.position = 'static';
  myUl.style.padding = '0 20px';
  myUl.style.display = 'flex';
  myUl.style.justifyContent = 'center';
  myUl.style.backgroundColor = 'transparent';
  // Value Media Query
  valuesDiv.style.paddingTop = '30px';
  valuesDiv.style.flexDirection = 'row';
  valuesDiv.style.flexWrap = 'wrap';
  valuesDiv.style.justifyContent = 'space-between';
  valuesDiv.style.alignItems = 'flex-start';
  for (var x = 0; x < queryValue.length; x++) {
    queryValue[x].style.width = '48%';
    queryValue[x].children[1].style.padding = '0 30px 0 0';
  }
  //About Media Query
  sectionAbout.style.width = '80%';
  sectionAbout.style.margin = 'auto';
  sectionAbout.style.flexDirection = 'column';
  aboutImgDiv.style.width = '100%';
  aboutImgDiv.style.height = '400px';
  aboutInfoDiv.style.width = '100%';
  aboutTopDiv.style.textAlign = 'center';
  aboutTopDiv.style.width = '100%';
  aboutTopDiv.style.padding = '30px';
  aboutP1.style.padding = '0px 10px';
  aboutP1.style.textAlign = 'center';
  aboutP2.style.padding = '0px 10px';
  aboutP2.style.textAlign = 'center';
  aboutDownDiv.style.flexDirection = 'row';
  aboutDownDiv.style.flexWrap = 'wrap';
  aboutDownDiv.style.justifyContent = 'center';
  aboutDownDiv.style.alignItems = 'center';
  aboutDownDiv.style.padding = '0';
  for (var x = 0; x < queryAbout.length; x++) {
    queryAbout[x].style.width = '45%';
    queryAbout[x].style.margin = '0';
    queryAbout[x].style.flexDirection = 'column';
    queryAbout[x].style.flexWrap = 'nowrap';
    queryAbout[x].style.justifyContent = 'center';
    queryAbout[x].style.alignItems = 'center';
    aboutAllInfo[x].style.textAlign = 'center';
    aboutAllInfo[x].children[1].style.textAlign = 'center';
  }
  // Skills Media Query
  containerSkill.style.flexDirection = 'column';
  leftDivSkill.style.width = '100%';
  leftDivSkill.style.minHeight = '430px';
  leftDivSkill.style.padding = '0';
  leftDivSkill.style.textAlign = 'center';
  skillFirstP.style.textAlign = 'center';
  skillLastP.style.textAlign = 'center';
  rightDivSkill.style.width = '100%';
  rightDivSkill.style.padding = '0 80px';
  rightDivSkill.style.marginTop = '50px';
  slideUl.style.padding = '0';
  // My EDU Media Query
  containerEdu.style.flexDirection = 'column';
  leftEduDiv.style.width = '100%';
  rightEduDiv.style.width = '100%';
  //My Works Media Query
  containerWork.style.flexDirection = 'column';
  leftWorkDiv.style.width = '100%';
  rightWorkDiv.style.width = '100%';
  // SlideInfo Media Query
  slideP.style.padding = '0px 10px';
  // Portfolio Media Query
  portDownDiv.style.flexDirection = 'row';
  portDownDiv.style.flexWrap = 'wrap';
  for (var x = 0; x < portHoverD.length; x++) {
    portHoverD[x].style.width = '46%';
  }
  // Contact Me Media Query
  containerCont.style.flexDirection = 'column';
  containerCont.style.justifyContent = 'center';
  contactInfo.style.width = '100%';
  contactInfo.style.padding = '0 20px';
  contactForm.style.width = '100%';
  infoForm.style.padding = '0 20px';
  infoForm.style.width = '100%';
  nameInput.style.width = '80%';
  emailInput.style.width = '80%';
  msgInput.style.width = '80%';
  nameInput.style.height = '40px';
  emailInput.style.height = '40px';
  contactBtn.style.marginLeft = '30%';
}

//Create Media Query
function mediaQueryFull() {
  pageResize500 = false;
  pageResize765 = false;
  pageResize1000 = false;
  pageResizeFull = true;
  //Slider Media Query
  myHeader.style.display = 'block';
  myHeader.style.height = '600px';
  headH1.style.fontSize = '25px';
  headUl.style.right = '5%';
  headUl.style.bottom = '3%';
  headUl.style.padding = '0';
  headUl.style.display = 'block';
  for (var x = 0; x < headSlider.length; x++) {
    headSlider[x].style.display = 'block';
  }
  // NavBar Media Query
  myBar.style.position = 'static';
  myBar.style.width = '80%';
  myBar.style.margin = 'auto';
  myBar.style.flexDirection = 'row';
  myBar.style.flexWrap = 'nowrap';
  myBar.style.justifyContent = 'space-between';
  myBar.style.alignItems = 'center';
  myBar.style.backgroundColor = 'transparent';
  myh1.style.fontSize = '30px';
  myh1.style.margin = '22px 0';
  myh1.style.display = 'block';
  mySelect.style.display = 'none';
  myMenu.style.display = 'none';
  myMenu.style.color = '#fff';
  myUl.style.position = 'static';
  myUl.style.width = 'auto';
  myUl.style.padding = '0 20px';
  myUl.style.display = 'flex';
  // Value Media Query
  valuesDiv.style.paddingTop = '30px';
  valuesDiv.style.flexDirection = 'row';
  valuesDiv.style.flexWrap = 'nowrap';
  valuesDiv.style.justifyContent = 'space-between';
  valuesDiv.style.alignItems = 'flex-start';
  for (var x = 0; x < queryValue.length; x++) {
    queryValue[x].style.width = '30%';
    queryValue[x].children[1].style.padding = '0';
  }
  //About Media Query
  sectionAbout.style.width = '100%';
  sectionAbout.style.margin = '0';
  sectionAbout.style.flexDirection = 'row';
  sectionAbout.style.justifyContent = 'center';
  sectionAbout.style.flexWrap = 'no-wrap';
  aboutImgDiv.style.width = '35%';
  aboutImgDiv.style.height = '500px';
  aboutInfoDiv.style.width = '65%';
  aboutTopDiv.style.textAlign = 'center';
  aboutTopDiv.style.width = '100%';
  aboutTopDiv.style.padding = '30px 175px 0px 40px';
  aboutP1.style.marginBottom = '10px';
  aboutP1.style.textAlign = 'justify';
  aboutP2.style.paddingBottom = '15px';
  aboutP2.style.textAlign = 'justify';
  aboutDownDiv.style.padding = '0px 40px 0px 35px';
  aboutDownDiv.style.flexDirection = 'row';
  aboutDownDiv.style.flexWrap = 'wrap';
  for (var x = 0; x < queryAbout.length; x++) {
    queryAbout[x].style.width = '35%';
    queryAbout[x].style.margin = '20px 85px 20px 0px';
    queryAbout[x].style.flexDirection = 'row';
    queryAbout[x].style.flexWrap = 'no-wrap';
    queryAbout[x].style.justifyContent = 'space-between';
    queryAbout[x].style.alignItems = 'center';
    aboutAllInfo[x].style.textAlign = 'left';
    aboutAllInfo[x].children[1].style.textAlign = 'left';
  }
  // Skills Media Query
  containerSkill.style.flexDirection = 'row';
  leftDivSkill.style.width = '50%';
  leftDivSkill.style.minHeight = '500px';
  leftDivSkill.style.padding = '30px 30px 30px 0px';
  leftDivSkill.style.textAlign = 'left';
  skillFirstP.style.textAlign = 'left';
  skillLastP.style.textAlign = 'left';
  rightDivSkill.style.width = '50%';
  rightDivSkill.style.padding = '50px 0px 10px 0px';
  rightDivSkill.style.marginTop = '50px';
  slideUl.style.padding = '0';
  // My EDU Media Query
  containerEdu.style.flexDirection = 'row';
  leftEduDiv.style.width = '47%';
  rightEduDiv.style.width = '47%';
  //My Works Media Query
  containerWork.style.flexDirection = 'row';
  leftWorkDiv.style.width = '47%';
  rightWorkDiv.style.width = '47%';
  // SlideInfo Media Query
  slideP.style.padding = '0px 40px';
  // Portfolio Media Query
  portDownDiv.style.flexDirection = 'row';
  portDownDiv.style.flexWrap = 'wrap';
  for (var x = 0; x < portHoverD.length; x++) {
    portHoverD[x].style.width = '30%';
  }
  // Contact Me Media Query
  containerCont.style.flexDirection = 'row';
  containerCont.style.justifyContent = 'center';
  contactInfo.style.width = '50%';
  contactInfo.style.padding = '40px';
  contactForm.style.width = '50%';
  infoForm.style.padding = '0px 40px';
  infoForm.style.width = '100%';
  nameInput.style.width = '100%';
  emailInput.style.width = '100%';
  msgInput.style.width = '100%';
  nameInput.style.height = '40px';
  emailInput.style.height = '40px';
  contactBtn.style.marginLeft = '0';
}
