function startGameLogic() {
// JUST IN CASE check if cookies have been accepted (even tho i use local storage :P)
if (localStorage.getItem('userConsent') !== 'accepted') {
  console.warn("Consent not given. Aborting game/script logic.");
  return null;
}
/**==================================================
 *   Hello welcome to the code of my idle game!
 *   Please check out the github for more info:
 *    TODO GITHUB LINK
 * 
 *   Time spent on this project:
 *   # Days spent: 9
 *   @ Hours spent: 34
 *  
 * 
 *  ! TODO
 *  # add mult to click 
 * 
 *=================================================**/
}
// first load of the website disables this JS file.
startGameLogic();


// declaring global variables. so we can safe them or get them from LS (LS = LocalStorage)
let totalPoints = parseInt(localStorage.getItem("totalPointsLS")) || 0;
let pointsPerSecond = parseInt(localStorage.getItem("PPSLS")) || 0;

let unlockedFactories= JSON.parse(localStorage.getItem("unlockedFactoriesLS")) || [{name: "basement" , amount:0, cost:1 ,costmult: 2 ,PPS: 1 }];
let lockedFactories = JSON.parse(localStorage.getItem("lockedFactoriesLS")) ||[
  {name: "shed" , amount:0, cost:10, costmult: 4 ,PPS: 3},
  {name: "shared office" , amount:0, cost:1000 ,costmult: 6 ,PPS: 5 },
  {name: "office" , amount:0, cost:100000 ,costmult: 12 ,PPS: 10},
  {name: "factory hall" , amount:0, cost:10000000 ,costmult: 24 ,PPS: 100}, 
  {name: "factory" , amount:0, cost:1000000000 ,costmult: 48  ,PPS: 1000}, 
  {name: "overseas factory" , amount:0, cost:100000000000 ,costmult: 96 ,PPS: 10000},
  {name: "national factory" , amount:0, cost:10000000000000 ,costmult: 182 ,PPS: 100000},
  {name: "multi national factory" , amount:0, cost:1000000000000000, costmult: 334 ,PPS: 1000000},
  {name: "world wide factory" , amount:0, cost:100000000000000000 ,costmult: 668 ,PPS: 10000000},
  {name: "moon factory" , amount:0, cost:10000000000000000000 ,costmult: 1336 ,PPS: 100000000}];

let multiplierClick = parseInt(localStorage.getItem("multiplierLS")) || 1; 
let multiplierPPS = parseInt(localStorage.getItem("multiplierPPSLS")) || 1; 
let clickUpgrade = parseInt(localStorage.getItem("clickUpgradeLS")) || 0;

let lockedUpgradesFactory= JSON.parse(localStorage.getItem("lockedUpgradesFactoryLS")) || [];
let lockedUpgradesPassive= JSON.parse(localStorage.getItem("lockedUpgradesPassiveLS")) || [];
let lockedUpgradesClick= JSON.parse(localStorage.getItem("lockedUpgradesClickLS")) || [];

let unlockedUpgradesFactory= JSON.parse(localStorage.getItem("unlockedUpgradesFactoryLS")) || [];
let unlockedUpgradesPassive= JSON.parse(localStorage.getItem("unlockedUpgradesPassiveLS")) || [];
let unlockedUpgradesClick= JSON.parse(localStorage.getItem("unlockedUpgradesClickLS")) || [];

let displayTotalPoints = document.getElementById("totalPoints");
let displayTotalPPS = document.getElementById("totalPPS");
let displayShopFactories = document.getElementById("shopFactories");
let displayShopUpgrades = document.getElementById("shopUpgradeIdle");

// function to fetch upgrades from json file i saved to my server.
function unlockUpgrades(){
    fetch('json/upgradesIdle.json')
  .then(res => res.json())
    .then(data => {
      const upgradesIdledata = data;
      const factoryUpgrades = upgradesIdledata["upgrades"]["factories"];
      const clickUpgrades = upgradesIdledata["upgrades"]["click"];
      const passiveUpgrades = upgradesIdledata["upgrades"]["passive"];
      console.log("Idle data loaded!");
      if(lockedUpgradesFactory.length == 0){
            lockedUpgradesFactory = factoryUpgrades;
            localStorage.setItem("lockedUpgradesFactoryLS", JSON.stringify(lockedUpgradesFactory));
      }
      if(lockedUpgradesPassive.length == 0){
            lockedUpgradesPassive = passiveUpgrades;
            localStorage.setItem("lockedUpgradesPassiveLS", JSON.stringify(lockedUpgradesPassive));
      }
      if(lockedUpgradesClick.length == 0){
            lockedUpgradesClick = clickUpgrades;
            localStorage.setItem("lockedUpgradesClickLS", JSON.stringify(lockedUpgradesClick));
      }
  }).catch(err => console.error("Error loading idle data:", err));
}

window.onload = unlockUpgrades();

// start dynamic UI on load.
uiUpdate();
shopIdleGameDisplay();
saveUserData();

// triggers the game step every second.
// there is a chance that it will trigger later due to computing limits within javascript, there are two ways to fix this, both are a bit much for a simple project.
// 1. you can run two time lines. one for data and one for front end. one that shows everything and is dynamic. and another that saves the data. and then synch the frontend info to data.
// 2. you could run calculations and such once every 10 seconds, while making the front end dynamic and updating it accurately. making the end user feel like everything is going fine.
// but it works so for now i will leave it as is.
// but warnings are less important then errors for now. 
var intervalId = window.setInterval(function(){
  gameStep();
}, 1000);

//auto saves every minute
var intervalIdAutoSave = window.setInterval(function(){
  saveUserData();
  console.log(`AUTO SAVED~!`);
}, 60000);

// trigger function to update displays,calculate and call the functions.
function gameStep(){
  uiUpdate();
  unlockNextFactory();
  shopIdleGameDisplay();
  pointsPerSecondCalc();
  showPassiveUpgrades();
  showClickUpgrades();
  showFactoriesUpgrades();
}

function uiUpdate(){
  displayTotalPoints.innerHTML = `${totalPoints.toFixed(0)} Points`;
  displayTotalPPS.innerHTML = `${pointsPerSecond.toFixed(0)} PPS`;
}

// ! is not working with mult. look at it when i have time.
function clickTheButton(){
  let Multclick = 1
    for (let y in unlockedUpgradesClick){
    Multclick += unlockedUpgradesClick[y].modifier;
    }
    localStorage.totalPointsLS = totalPoints += 1 + clickUpgrade * Multclick;
  uiUpdate();
}

function saveUserData(){
  localStorage.setItem("lockedFactoriesLS", JSON.stringify(lockedFactories));
  localStorage.setItem("unlockedFactoriesLS", JSON.stringify(unlockedFactories));
  localStorage.setItem("unlockedUpgradesFactoryLS", JSON.stringify(unlockedUpgradesFactory));
  localStorage.setItem("unlockedUpgradesPassiveLS", JSON.stringify(unlockedUpgradesPassive));
  localStorage.setItem("unlockedUpgradesClickLS", JSON.stringify(unlockedUpgradesClick));
}

function shopIdleGameDisplay(){
  //clear the shop HTML
  displayShopUpgrades.innerHTML = "";
  displayShopFactories.innerHTML = "";
  for (let y in unlockedUpgradesPassive) {
    displayShopUpgrades.innerHTML += `
    <div class="idleShopItem">
        ${unlockedUpgradesPassive[y].name} modifier: ${unlockedUpgradesPassive[y].modifier}</br> 
        cost per unit: ${unlockedUpgradesPassive[y].cost}</br>
        <button value="${unlockedUpgradesPassive[y].name}" id="${unlockedUpgradesPassive[y].name}Buy" onClick="buyUpgradesPassive(this.value)">buy</button>
    </div>`
  };

  for (let z in unlockedUpgradesClick) {
    displayShopUpgrades.innerHTML += `
    <div class="idleShopItem">
        ${unlockedUpgradesClick[z].name} modifier: ${unlockedUpgradesClick[z].modifier}</br> 
        cost per unit: ${unlockedUpgradesClick[z].cost}</br>
        <button value="${unlockedUpgradesClick[z].name}" id="${unlockedUpgradesClick[z].name}Buy" onClick="buyUpgradesClick(this.value)">buy</button>
    </div>`
  };

  for (let e in unlockedUpgradesFactory) {
    displayShopUpgrades.innerHTML += `
    <div class="idleShopItem">
        ${unlockedUpgradesFactory[e].name} modifier: ${unlockedUpgradesFactory[e].modifier}</br> 
        cost per unit: ${unlockedUpgradesFactory[e].cost}</br>
        <button value="${unlockedUpgradesFactory[e].name}" id="${unlockedUpgradesFactory[e].name}Buy" onClick="buyUpgradesFactory(this.value)">buy</button>
    </div>`
  };

  for (let x in unlockedFactories) {
    displayShopFactories.innerHTML += `
    <div class="idleShopItem">
        ${unlockedFactories[x].name} amount: ${unlockedFactories[x].amount}</br> 
        cost per unit: ${unlockedFactories[x].cost}</br>
        <button value="${unlockedFactories[x].name}" id="${unlockedFactories[x].name}Buy" onClick="buyFactories(this.value)">buy</button>
    </div>`
  };
}

// CSF = currently selected factory (but used it as a place holder for curentvalue.)
function buyUpgradesFactory(clicked_value){
  const CSF = unlockedUpgradesFactory.find(({name}) => name === clicked_value);   
  if(CSF.cost <= totalPoints){
    totalPoints -= CSF.cost;
    CSF.cost *= CSF.costMult;
    CSF.modifier += 1;
  }
  localStorage.setItem("unlockedUpgradesFactoryLS", JSON.stringify(unlockedUpgradesFactory));
  saveUserData();
  shopIdleGameDisplay();
}
function buyUpgradesClick(clicked_value){
  const CSF = unlockedUpgradesClick.find(({name}) => name === clicked_value);   
  if(CSF.cost <= totalPoints){
    totalPoints -= CSF.cost;
    CSF.cost *= CSF.costMult;
    CSF.modifier += CSF.modifierStep;
  }
  saveUserData();
  shopIdleGameDisplay();
}
function buyUpgradesPassive(clicked_value){
  const CSF = unlockedUpgradesPassive.find(({name}) => name === clicked_value);   
  if(CSF.cost <= totalPoints){
    totalPoints -= CSF.cost;
    CSF.cost *= CSF.costMult;
    CSF.modifier += CSF.modifierStep;
  }
  saveUserData();
  shopIdleGameDisplay();
}
function buyFactories(clicked_value){
  const CSF = unlockedFactories.find(({name}) => name === clicked_value);    
  if(CSF.cost <= totalPoints){
    totalPoints -= CSF.cost;
    CSF.cost *= CSF.costmult;
    CSF.amount += 1;
  }
  saveUserData();
  shopIdleGameDisplay();
}

function pointsPerSecondCalc(){
  let PPScurrentFactories = 0;
  for (let x in unlockedFactories) {
    let UpgradesCurrentFactory = unlockedUpgradesFactory.find(({ name }) => name === unlockedFactories[x].name) ;
    if(UpgradesCurrentFactory != null){
      let PPSsingelFactory = unlockedFactories[x].amount * unlockedFactories[x].PPS * UpgradesCurrentFactory.modifier;
    PPScurrentFactories += PPSsingelFactory;
    }else{
    let PPSsingelFactory = unlockedFactories[x].amount * unlockedFactories[x].PPS ;
    PPScurrentFactories += PPSsingelFactory;
    }
  }; 
  let upgradeModifiersPPS = 0;
  if(unlockedUpgradesPassive.length >= 1 ){
  for (let y in unlockedUpgradesPassive){
    let MultUpgrade = unlockedUpgradesPassive[y].modifier;
    upgradeModifiersPPS += MultUpgrade;
  }
  }else{ upgradeModifiersPPS += 1; }
  let totalCurentPPS = PPScurrentFactories * upgradeModifiersPPS;
  localStorage.totalPointsLS = totalPoints += totalCurentPPS;
  pointsPerSecond = totalCurentPPS;
  localStorage.PPSLS = pointsPerSecond;
}

function unlockNextFactory(){
  let lastUnlocked = unlockedFactories.length - 1;
  if(unlockedFactories[lastUnlocked].amount === 10){
    let nextUnlock = lockedFactories.shift();
    unlockedFactories.push(nextUnlock);
  }
  localStorage.setItem("unlockedFactoriesLS", JSON.stringify(unlockedFactories));
}

function showFactoriesUpgrades(){
  for (let y in unlockedFactories) {
    // the one and only time i used chat gpt is for this, For some reason this always returned true when searching for office.
    // turns out that includes on a string is different. i feel like a massive numbskull but am happy i did it. 
    // because i am finally free of this upgrade stuff. for factories at least.
      if(unlockedUpgradesFactory.length < unlockedFactories.length){
      if(lockedUpgradesFactory[y].name == unlockedFactories[y].name && JSON.stringify(unlockedUpgradesFactory).match(`"${lockedUpgradesFactory[y].name}"`) === null){
        unlockedUpgradesFactory.push(lockedUpgradesFactory[y]);
  }}}
} 
function showClickUpgrades(){
  for (let y in lockedUpgradesClick) {
    if(totalPoints >= lockedUpgradesClick[y].RamountTP && JSON.stringify(unlockedUpgradesClick).match(`"${lockedUpgradesClick[y].name}"`) === null){
      unlockedUpgradesClick.push(lockedUpgradesClick[y]);
  }}
}
function showPassiveUpgrades(){
  for (let y in lockedUpgradesPassive) {
    if(pointsPerSecond >= lockedUpgradesPassive[y].RamountPPS && JSON.stringify(unlockedUpgradesPassive).match(`"${lockedUpgradesPassive[y].name}"`) === null){
      unlockedUpgradesPassive.push(lockedUpgradesPassive[y]);
  }}
}

/**           ██
 *              ██
 *            ██  ██
 *        ████      ████
 *  ██  ██    ██  ██    ██
 *██  ████    ██  ██    ████
 *██  ██                ██  ██
 *██            ██          ██
 *  ████████████  ██████████    -made a little doodle.   
 */
