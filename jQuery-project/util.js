const tast = new Map();
const obj = [];
const arry = [];

$(document).ready(promiseajax);
const promise = [];
async function promiseajax() {
  try {
    console.log("request is sending now");
    const mainstore = await generateLegendaryFatch(
      "GET",
      "https://api.coingecko.com/api/v3/coins/list"
    );
    const mainstorejson = await mainstore.json();
    console.log(mainstorejson);
    for (let i = 0; i < 100; i++) {
      promise[i] = mainstorejson[i];

      $("#flex").append(`<div class= "bigdiv">
      <h5 class="allthecoin ${promise[i].name.trim()}">${promise[i].name} 
      <label class=" ok${promise[i].name.trim()} switch">
      <input class="1 style"  type="checkbox" checked>
      <span class="slider round"></span>
    </label></h5>
        <p class="pz">${promise[i].id}</p>
        <button type="button"  class=" btn btn-primary ">more info</button>
        <div class="content">
        </div>
        </div>
        `);
    }
    const bol = $(".1");
    for (const bo of bol) {
      bo.boolean = false;
    }

    $(".1").on("click", toggle);
    $(".btn-primary").on("click", moreInfoById);

    console.log(promise);
  } catch (error) {
    console.log(error);
  }
}

async function moreInfoById(event) {
  console.log("run");

  const parentelement = this.parentNode;
  const idcoin = parentelement.childNodes[3].innerText;
  let div = this.parentNode.childNodes[7];
  console.log(div.boolean);

  console.log(idcoin);
  this.classList.toggle("active");
  var content = this.nextElementSibling;
  console.log(content);
  if (content.style.display === "block") {
    content.style = "none";
  } else {
    content.style.display = "block";
  }
  if (div.boolean == true) {
    console.log("return div");
    return;
  }
  try {
    if (JSON.parse(localStorage.getItem(`${idcoin}`)) == null) {
      setTimeout(() => {
        localStorage.removeItem(idcoin);
        console.log(div.boolean);
        $(`2${idcoin}`).remove();
        console.log("remov form local");
      }, 20000);
      console.log("request is sending now");
      const mainstore = await generateLegendaryFatch(
        "GET",
        `https://api.coingecko.com/api/v3/coins/${idcoin}`
      );
      const mainstorejson = await mainstore.json();
      console.log(mainstorejson);

      console.log(
        `usd${mainstorejson.market_data.current_price.usd},eur${mainstorejson.market_data.current_price.eur},ils${mainstorejson.market_data.current_price.ils}`
      );
      div.boolean = true;
      console.log(mainstorejson.image.small);
      console.log(parentelement.childNodes[7]);
      $(div).append(`
      <div class= "2${idcoin}">
    <img class="imging" src="${mainstorejson.image.small}" alt="">
    <p class="tast">USD:${mainstorejson.market_data.current_price.usd}
    <br>EUR:${mainstorejson.market_data.current_price.eur}
    <br>ILS:${mainstorejson.market_data.current_price.ils}</p> </div>`);
      const item = {
        img: mainstorejson.image.small,
        usd: mainstorejson.market_data.current_price.usd,
        eur: mainstorejson.market_data.current_price.eur,
        ils: mainstorejson.market_data.current_price.ils,
      };
      obj.push(item);
      console.log(obj);
      localStorage.setItem(idcoin, JSON.stringify(obj));
    } else {
      let arr = [];
      arr = JSON.parse(localStorage.getItem(`${idcoin}`));
      console.log("else");

      for (const item of arr) {
        div.boolean = true;
        $(div).append(
          `<img  class="imging" src="${item.img}" alt="">
      <p class="tast">USD:${item.usd}
      <br>EUR:${item.eur}
      <br>ILS:${item.ils}</p>`
        );
        console.log("yesssssssss");
      }
    }
  } catch (error) {
    console.log(error);
  }
}
$('#fliter').on('keyup', function () {
 
  console.log('hhththth');
  const elements = $('.allthecoin')
  for (const element of elements) {
    let text = element.innerText
    if (text.toUpperCase().indexOf(this.value.toUpperCase()) > -1) {
      console.log('amirrr');
      let father = element.parentNode
      $(element.parentNode).show()
    } else {
      console.log('hi');
      let father = element.parentNode
      $(father ).hide()
    
    }
  }
})

function toggle(button) {
  const bol = this; //false
  const father = bol.parentNode;
  const grandfather = father.parentNode;
  const id = grandfather.parentNode;
  const theid = id.childNodes[3].innerText;
  const nameele = grandfather.innerText;

  bol.id = theid;

  bol.name = nameele;
  console.log(this.boolean);
  if (bol.boolean === false) {
    bol.boolean = true;
    console.log(bol.boolean);
  } else {
    bol.boolean = false;
    console.log(bol.boolean);
  }

  if (bol.boolean === true && arry.length < 5) {
    arry.push(bol);
    console.log(`this is bol: ${bol}`)
    console.log("name");
    console.log(bol.name);
    console.log("amir");
    console.log("id");
    console.log(bol.id);
  }
  if (arry.length == 5) {
    console.log("hide show");
    $("#flex").hide();
    $("#navbarel").after(`
    <div id="divtogglscards" >
    <div class="list-group">
    <a href="#" class="list-group-item list-group-item-action list-group-item-primary">${arry[0].name}<label class="switch ">
    <input class="2"  type="checkbox" checked>
    <span class="slider round "></span>
    </label></a>
    <a href="#" class="list-group-item list-group-item-action list-group-item-secondary">  ${arry[1].name}<label class="switch ">
    <input class="2"  type="checkbox" checked>
    <span class="slider round "></span>
    </label></a>
    <a href="#" class="list-group-item list-group-item-action list-group-item-success">    ${arry[2].name}<label class="switch ">
    <input class="2"  type="checkbox" checked>
    <span class="slider round "></span>
    </label></a>
    <a href="#" class="list-group-item list-group-item-action list-group-item-danger">  ${arry[3].name}<label class="switch ">
    <input class="2"  type="checkbox" checked>
    <span class="slider round "></span>
    </label></a>
    <a href="#" class="list-group-item list-group-item-action list-group-item-warning">   ${arry[4].name}<label class="switch ">
    <input class="2"  type="checkbox" checked>
    <span class="slider round "></span>
    </label></a>
    </div>
    <button id="ok" type="button">OK</button>
    </div>`);
   
    $(".2").on("click", comningBack);
    $("#ok").on("click", togglscards);
  }
  console.log(arry);
}

function togglscards() {
  console.log("wtf");
  $("#divtogglscards").hide();
  $("#flex").show();
  for (let i = 0; i < arry.length; i++) {
    console.log(arry);
    if (!arry[i].boolean) {
      let thename = arry[i].name.trim();
      let indexof = arry.indexOf(thename);
      console.log(arry[i].name);
      console.log("hhhhhhhhhhhhhhhhh");
      console.log(thename)
      console.log(indexof)
      for (let j = 0; j < promise.length; j++) {
        if (promise[j].name.trim() === thename.trim()) {
          console.log("fhuskj");
          arry.splice(indexof, 1);
          console.log(indexof);
          console.log(thename)
          const elemnt = $(`.ok${thename.trim()}`);
          console.log("vgvgvvgg");
          console.log(thename.trim());
          elemnt.remove();
          $(`.${thename.trim()}`).append(`<label class="ok${promise[i].name} switch">
          <input class="1 style"  type="checkbox" checked>
          <span class="slider round "></span>
        </label`);
          console.log(thename.trim());
          console.log(indexof)
          console.log(arry);
        }
      }
    }
  }
}

function comningBack() {
  console.log("asdkmnd");
  const bol = this.parentNode;
  const pelement = bol.parentNode;
  const tnieText = pelement.innerText;

  for (const bol of arry) {
    if (bol.name == tnieText) {
      bol.boolean = false;
      console.log(arry);
    }
  }
}

$("#live").on("click", livetracking);

async function livetracking() {
  if (arry.length < 1) {
    alert("you dont have a cions");
    return console.log("oooo");
  }
  $("#flex").hide();
  $(".myabot").remove()

  console.log("fffffff");
  console.log(arry);
  for (let i = 0; i < arry.length; i++) {
    let cion = arry[i].id;
    console.log(cion);
    console.log("request is sending now");
    const mainstore = await generateLegendaryFatch(
      "GET",
      `https://api.coingecko.com/api/v3/coins/${cion}`
    );
    const mainstorejson = await mainstore.json();
    console.log(mainstorejson);
    $("#navbarel").after(`
  <ul class="live list-group list-group-horizontal">
  <li class="list-group-item">NAME:${mainstorejson.name}</li>
  <li class="list-group-item">USD:${mainstorejson.market_data.current_price.usd}</li>
  <li class="list-group-item">EUR:${mainstorejson.market_data.current_price.eur}</li>
  <li class="list-group-item">ILS:${mainstorejson.market_data.current_price.ils}</li>
</ul>      
`);
  }
  return livetracking;
}

$("#home").on("click", homepage);

function homepage() {
  console.log("pppppp");
  $(".list-group").remove();
  $(".myabot").remove();
  $("#flex").show();
}
$("#abot").on("click", abuot);

function abuot() {
  console.log("about");
  $("#flex").hide();
  $('.live ').remove()
  $("#navbarel").after(
    `<div class = "myabot">
    <div class="card" style="width: 18rem;">
  <img src="./WhatsApp Image 2022-09-26 at 18.11.34.jpeg" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">This was my first serious project </p>
  </div>
</div>
  
  
  </div>`
  );
}

function generateLegendaryFatch(method, url, data = null) {
  const fetchObj = {
    method,
  };

  if (method === "POST") {
    fetchObj.headers = { "Content-Type": "application/json; charset=utf-8" };
    if (data) {
      fetchObj.body = JSON.stringify(data);
    }
  }

  return fetch(url, fetchObj);
}
