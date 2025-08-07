I made this idlegame to test myself on my data handeling skills in javascript with JSON.

The game is an idle clicker game, the main goal of an idle game is to make a number go higher.
And get passive ways to increase this. i saved the factories in localStorage and did the same with upgrades.
I spend about 40 work hours on this total.


This is still WIP. bellow is a list of comments i have to use as a writing guide. please ingore them for now.

/*
  
  This is a kind of proof of concept / test.
  I made a text based fishing game, i now want to make an idle game.
  both games are made in different methods.
  the fishing game took me a total of 3 days and like 15 hours with chatGPT total.
  i how ever know what it does but can only kind of explain the logic behind some of the choices.

  so now i want to make this idle game. in a way i can say i fully understand it.
  and also in a way where i CHOOSE what i can do, so with my logic.

  So,
  i made this entire idle game with just my knowledge and google,
  i will write down what i want how i solved it and such in comments,
  so that you can enjoy my mad attempts at doing something so hard as this.

  Math.

  Luckily for me, I use math as my alarm for a reason. 
  I think im pretty decent at it.

  PS, Sorry this file is only in English.

  A huge thanks to Street Side Software and their code spell checker extension.
  Without them this would be 10x harder to read because of my dyslexia. 

  Also this document will be as informal as can be because I can not be asked to behave.
  It is literally a window in my mindset as a programmer.

  Which is like me. Messy, Full of spelling errors. and some how working in the worst of conditions.
  Normally i would clean this up. But at the same time i want to proof i made this. So, enjoy!

  also. for those who are curious.
  # Days spent: 9
  @ Hours spent: 34

  ! HOURS SPENT ON UPGRADE BS: 14 // 
  !ended up using chat gpt when i had an issue with array manipulation and found .include also works on strings. 
  !which was my issue solution coded by me. 

  Hope your day is treating you well, and you enjoy some truly insane rambles from my mind. - Yvar

  personal goal is to not use any AI at all.

  took a 2 week personal break between day 4 and 5, also didnt sleep great last night

  after working on mainly one issue that was getting the JSON upgrades to localstorage, i can now happily say. that i got it working.
  the idle game is basicly finished its not ballanced but a proof of concept to show everyone i can make good code.
  in this journy of developing 3 small games i realised something.
  well a few things.
  - i can programm
  - i know what i write
  - i love this type of work more then i tought
  - i am so much more satisfied with what i made then i could ever imagine.
  - i do not need chatGPT to make complex and working website code.

  i am so happy i challanged myself i feel so more comfertable and sure of claiming i am a developer.
  my next challanges may make me question my compentence. but i have proofed to myself that a moment of doubt is healthy.
  and i have more skills then i would care to admit!

  anyway, i need to make some CSS clean this file up. and then make a new github repository for it.
  i am proud to say. that i have learned and masterd javascript. and i now knew all along i was a competend developer.

  */



/***
 * For information i love idle clicker games. i have spent to much time on stupid games like cookie clicker and leaf blower simulator......
 * So for this reason and as a fun challenge i wanted to make this game, there for i might ad its HEAVILY inspired by cookie clicker.
 * 
 * TODO ------   Version 0   ----------------------------------------------------------------------------------------------
 * ? Click function where we add current click + upgrades * multiplier
 * ? Seconds function that retriggers every second to get Point Per Seconds PPS x multiplier
 * ? save function to local storage.
 * ? For each with at least 10 buy able PPS factories scaling in cost per building and only unlocking after we have 10 of the last one
 * * Ability to buy upgrades and factories in a shop.
 * ------------------------------------------------------------------------------------------------------------------------
 */

/**
  declaring local variables, for usage throughout the project.
*/
 // for (let y in unlockedFactories) { 
        //   if(unlockedUpgradesFactory.length === unlockedFactories.length - 1){
            // if(factoryUpgrades[y].name == unlockedFactories[y].name && unlockedFactories[y].amount >= factoryUpgrades[y].Ramount && unlockedUpgradesFactory){
            //   unlockedUpgradesFactory.push(factoryUpgrades[y]);
            //   console.log("SUCSESS ENTERD THE UPGRADE TOO UNLOCKED U F");
            // }else{
            //   console.log( unlockedFactories[y].amount)
            //   console.log("Literaly fuck you ig (name is not BASMENT and RAMOUNT isnt enough)")

            /**
             * This system is breaking me, either because im looking over the simple solution or im just making an over complex thing,
             * so im gonna write my toughts out.
             * 
             * i want to get the factory upgrades from a server side JSON, Because i can.
             * i did this, Now i only want to add the upgrade if the user has the required amount (Ramount) of factories
             * this check isnt hard. but then saving the upgrades localy is the best thing i can think about,
             * but the thing is i need to then check an array aiganst 2 values 1 that isnt static and one that is.
             * i need to make sure that the Ramount is met, and if the array includes the upgrade
             * 
             * we can check if Ramount is met, with an if statement, and preferibly in the same check we check if the upgrade is saved in the unlocked factories upgrade array....
             * 
             * in theory
             * 
             * if(unlockedUpgradesFactory[y].amount >= factoryUpgrades[y].Ramount && Object.values(unlockedUpgradesFactory[y]).includes(factoryUpgrades[y].name) )
             * 
             * we now run in the issue, that we only have 1 upgrade, granted it only gets added once.
             * the issue is unlockedUF[1] is literaly 0 it doesnt exist. should i make a check for this
             * how would i do that?
             * just check if the UUF[1] is 0
             * or do i compare it to the factory building? but that would always be true....
             * i can compare the lengths to make sure they are one shorter. or that they are equal if the name is equal.
             * 
             * cant make the checks be the once i use right now, we need to check the following
             * we can also save the upgrades to a temporary variable and then work with it.
             * 
             * 
             */
            // }  
        //     console.log("BEFORE IF");
        // console.log(`VAR CHECKS`)
        // console.log(`VAR CHECKS OWO`)

        // console.log(y)
        // // console.log(Object.values(unlockedUpgradesFactory[y]).includes(factoryUpgrades[y].name))
        // console.log(unlockedUpgradesFactory)
        // console.log(factoryUpgrades[y].name)

        // console.log(factoryUpgrades)
        // console.log(unlockedFactories)
        // console.log(y)
        //   if(Object.values(unlockedFactories[y]).includes(factoryUpgrades[y].name) === false && unlockedFactories[y].amount >= factoryUpgrades[y].Ramount && unlockedUpgradesFactory[y].length != 0){

        //     unlockedUpgradesFactory.push(factoryUpgrades[y]);
        //     console.log("SUCSESS ENTERD THE UPGRADE TOO UNLOCKED U F");
        //   }else{
        //     console.log("bababoei");
        //   }
        //     console.log("AFTER IF");
          
        //   }else{
            
        // }
        // console.log(factoryUpgrades[y].name)
        // // console.log(unlockedUpgradesFactory[y].name)

        // console.log(`VAR CHECKS`)
        // console.log(unlockedUpgradesFactory.includes(factoryUpgrades[y]))
        // console.log(unlockedUpgradesFactory)

        // console.log(factoryUpgrades)
        // console.log(unlockedFactories)
        // console.log(y)
        
        // };


        // for (let y in unlockedFactories) {
        //   let fullname = `${unlockedFactories[y].name} Upgrade`; 
        //   let currentFactoryUpgrade = factoryUpgrades.find(({ name }) => name === fullname);
        //   console.log(factoryUpgrades);
        //   // adds the updates from JSON to the unlockedUpgradesFactory array
              
        //     for(let w in unlockedUpgradesFactory){
        //       if(Object.values(unlockedUpgradesFactory[w]).includes(fullname)){
        //         console.log("Upgrade is already in unlockedupgrades")
        //       }else{
        //         if(){

        //         }
        //       }
        //       console.log(Object.values(unlockedUpgradesFactory[OWO]));
        //     }
        //     if(unlockedFactories[y].amount >= currentFactoryUpgrade.Ramount ){
        //             console.log(fullname)
        //             console.log(unlockedUpgradesFactory.includes(currentFactoryUpgrade.name));
                  
        //       }
        //       // console.log(unlockedUpgradesFactory.find(({ name })));
              // console.log(Object.values(unlockedUpgradesFactory[y]));
              // ! CHECK RAMOUNT IS ENOUGH AND IF THIS ONE EXISTS IN THE UNLOCKED UPGRADES ARRAY
              

                    // unlockedUpgradesFactory.push(currentFactoryUpgrade);




              // console.log("BULLSHITERY BEFORE");
//               console.log(unlockedUpgradesFactory.includes(fullname))
// console.log("BULLSHITERY AFTER CHECK IF ITS IN ARRAY");
//               for(let OWO in unlockedUpgradesFactory){
//                   if(unlockedUpgradesFactory[OWO].name == fullname){
//                     console.log(fullname)
//                     console.log(unlockedUpgradesFactory[OWO].name);
//                     console.log("I am finaly fucking winning")
//                   }else{
//                     unlockedUpgradesFactory.push(currentFactoryUpgrade);
//                     console.log("FUCK")
//                     console.log(unlockedUpgradesFactory[OWO].name);
//                     console.log(fullname)
//                   }
//               }
//                 if(unlockedUpgradesFactory.includes(fullname) == false){


    
//               console.log("LAST FUCKING");
//                 }else{
// console.log("BULLSHIT");
//                 }
              
// console.log("BULLSHITERY after");

              // if(Object.values(unlockedUpgradesFactory).indexOf(currentFactoryUpgrade.name) > -1){
              //   console.log("LAST FUCKING");
              // }else{
              //   console.log("BULLSHIT");
              // }
            
            
        //};

        /**
         * ! ====================================================================================
         * !        RIGHT NOW IT STILL CANT TELL IF UPGRADE IS ALREADY SAVED FIX THIS
         * ! ====================================================================================
         */
        // clickUpgrades.forEach(clickUP => {
        //   if(totalPoints >= clickUP.RamountTP){
        //     console.log(unlockedUpgradesClick.includes(clickUP));
        //     if(unlockedUpgradesClick.includes((clickUP)) === false){
        //       unlockedUpgradesClick.forEach((Clickupgrades) => {if(Clickupgrades === clickUP){console.log("The peepeepoopoo man")}else{console.log("nee")}})

        //       console.log("in the if");
        //       console.log(unlockedUpgradesClick);
        //       console.log(clickUP);
        //       console.log(JSON.stringify([clickUP.name]));
        //       console.log(unlockedUpgradesClick.includes(JSON.stringify([clickUP])));
        //       console.log(unlockedUpgradesClick.includes({name: 'click level 1', modifier: 1.2, RamountTP: 1000, cost: 1000, costMult: 10}));
        //       console.log(unlockedUpgradesClick.includes(clickUP)); 
        //     }else{
        //       console.log("in the else");
        //     }
        //     unlockedUpgradesClick.push(clickUP);
        //   }
        // });
        // passiveUpgrades.forEach(passiveUP => {
        //   if(pointsPerSecond >= passiveUP.RamountPPS && unlockedUpgradesPassive.includes(passiveUP) === false ){
        //     unlockedUpgradesPassive.push(passiveUP);
        //   }
        // });

    
  // factories
  // make it so we check if the unlocked factories have more then Ramount or equal (Required amount)
  // if this is true, show the upgrade for the factory, 
  // dynamic loading factories from json, then by name check every step if requirements are met.
  //for to do a for each, if to check if the upgrade amount is equal to required amount.
  // if(){}

/**  This was a difficult one, I struggled a lot with how i wanted to make this work.
 * my idea was a nested array, that has the values of the items and the amount dynamically stored.
 * how ever i had no idea how to tackle this, normally i would just ask AI. but now i had to google. 
 * I needed to make the array for the items nested and declare it. how ever it also is a global scope variable. 
 * 
 * Currently working on this and am clueless. might just ask around to friends. what the best idea or practice could be.
 * 
 * FINALLY fucking figured it out (i swear im not stupid (sometimes)) BUT JESUS
 * so, i made it an array of objects. i don't know how i struggled with this that much, but basically
 * {name: "shed" , amount:0, cost:0 } <- this is what i ended up using. so i can keep the values of their cost and such dynamic
 * and only have to store them in one array. right now dreading the fucking shit i need to do for shop but FUCK IT i will figure it out.
 * 
 * so after testing it with just the first item IT IS EXACTLY WHAT I WANTED.
 * now the array stores the objects like 
 * 0:{name: "shed" , amount:0, cost:0 } 
 * 
 * Which is fucking goated. Sometimes i am impressed how quickly i can go from finding myself stupid to a genius B)
 * talk to you later when i want to punch myself in the face again.
 * 
 * decided to use a for each display method for the factories,
 * kinda joinked it from my fishing.js (seriously did so much here).
 * 
 * for each doesn't work
 * so fuck me ig
 * 
 * you know, what i just said about me being stupid
 * yeah, i am.
 * 
 * https://www.w3schools.com/js/js_object_display.asp
 * literally, so fucking stupid.
 *   
 * 
  let displayItem = "";
  for (let x in unlockedFactories) {
    displayItem += unlockedFactories[x].name + " " + unlockedFactories[x].amount + " " + unlockedFactories[x].cost + " ";
  };
  console.log(displayItem);
  
 * This is basically what i want for the dynamic display, just a name amount and buy button left..... 
 * Literally cant imagine how hard i facepalm sometimes....
 * 
 * i now know why some developers smoke, literally looked on my phone for not even 5 minutes, a fresh look can make such a difference.
 * ofc you need an "excuse" to make sure your boss doesn't think your slacking. so from now on every time im stuck im just gonna go get fresh air.
 * 
 * (btw im just writing down my struggles and inner monologues, so you may enjoy them to the fullest.)
 * 
 * So finally made the display for the unlocked factories, now i need to make logic for the thing that unlocks new factories.
 * i do love coding, but sometimes i feel like i have imposter syndrome.
 * then i make a fucking stupid display that WORKS
 * 
 * welp found immediately what i needed for displaying info.
 * 
 * thought about it added cost and costmult for multiplying cost to the items in the array.
 * kinda regret just starting keeping this log about my thoughts at this issue. then again. its better then nothing.
 * 
 * added buying something from the store, 
 * made it dynamic
 * need to clear the shop html. (cant be asked to clear just the count.)
 * 
 * idk what monster took over me when i made pointsPerSecondCalc but i thank it for its service,
 * its just math. but it works :D
 * 
 * so i don't know how or what but after that i made the unlock new factories functions a few hiccups later and boom we are DONE
 * goal for today is making the save function save things like unlocked buildings.
 * and doing that. is i hope not that difficult.
 * 
 * it is, been struggling for about half an hour now trying to save things to local storage, its nearing the end of the day so im just gonna say it,
 * Its a problem for tomorrow me. 
 * 
 * tomorrow me hates me, i give him so much to do, and so little time.
 * its been an hour
 * i give up.
 * 
 *  -- tomorrow me here, past me is a fucking dumb ass.
 * new day have some time so i am gonna try again.
 * 
 * decided to google some more. 
 * 
 * ..... I do find myself suprised how quickly you can fix things, not even 20 minutes of googleing and i found the solution.
 * 
 * realised (idk how yet) the points per second get added twice
 * apperently forgot i had declared it as well in the step.
 * its fixed now.
 * 
 * New day new me,
 * Today my goal is to get upgrades for the game.
 * 
 * ? Maybe make factory specific upgrades
 * ? make click upgrades
 * ! make an over all multiplier.
 * ? make simple upgrades and save them in local storage, OR get them from db.
 * 
 *  After all the things i mentioned above, i will focus on UI 
 * (i want this game to look at least a bit better.)
 * 
 * been feeling a lack of motivation,debating if i just want to make the shop and then leave the project after that for a bit.
 * For now nose back to the grindstone
 * 
 * got the upgrades in a json file that we accesses for the ease of use.
 * In this we have the base upgrades and such, debating if we make the upgrades dynamic.
 * or static, either way i gave them an unlock requirement and made them basic for now.
 * 
 * after a break and some brainstorming i think making it dynamic will carry me further, and leave me less work.
 * So, we need unlock requirments. we need to check them. and we need to make sure the variables are correct. so before we can even display them we need to get the right stuff.
 * 
 * got dynamic loading to work and realised i made a bunch of errors, also need to make it so that the buying is dynamic but also saves you buying the factory
 * right now it doesnt. so refreshing the page will have you fucked out of points, and a factory less.
 * 
 * forgot to save pps to the right place, i sometimes have an error with things saving twice, do not know if its accidental. will need to look into that
 * ! Check if we can replicate error with getting more of the SAME upgrade in the array of saved upgrades
 * if i cant find any then ill call it a day.
 * 
 * 
 * Buying is an option now but for some reason it duplicates the item and adds a new one to its parent array.
 * need to find out how and why this happens but i do not feel like it right now
 * its friday i have 10 minutes left so i will be doing some other stuff and calling it good for today.
 * 
 * regret the choice to leave it for me now, but hope caffeine is enough to get me trough this today.
 * > also note to self maybe do get that new laptop i was thinking about...... kinda fought with the screen for a solid half hour.
 * 
 *  * Upgrades buying fix, -> make function to buy dynamic factory upgrade
 *  * check if issue with Factories still exist, -> think this is linked to other error.
 *  * MAKE UPGRADES APPLY TO TOTAL MATH SUM
 *  * figure out why we have basement 2 times in unlocked factories.
 *  * Make CSS layout so 
*/

       //   if(unlockedUpgradesFactory.length <= unlockedFactories.length ){
        //     if(unlockedUpgradesFactory[y].name == unlockedFactories[y].name && unlockedFactories[y].amount >= unlockedUpgradesFactory[y].Ramount && unlockedUpgradesFactory){
        //       
        //       console.log("SUCSESS ENTERD THE UPGRADE TOO UNLOCKED U F");
        //     }else{
        //       console.log( unlockedFactories[y].amount)
        //       console.log("Literaly fuck you ig (name is not BASMENT and RAMOUNT isnt enough)")
        //     if(Object.values(unlockedFactories[y]).includes(factoryUpgrades[y].name) === false && unlockedFactories[y].amount >= factoryUpgrades[y].Ramount && unlockedUpgradesFactory[y].length != 0){

        //     unlockedUpgradesFactory.push(factoryUpgrades[y]);
        //     console.log("SUCSESS ENTERD THE UPGRADE TOO UNLOCKED U F");
        //   }else{
        //     console.log("bababoei");
        //   }
        //     console.log("AFTER IF");

        //   }
        // console.log(factoryUpgrades[y].name)
        // // console.log(unlockedUpgradesFactory[y].name)
        // //unlockedUpgradesFactory

        // console.log(`VAR CHECKS`)
        // console.log(unlockedUpgradesFactory.includes(factoryUpgrades[y]))
        // console.log(unlockedUpgradesFactory)

        // console.log(factoryUpgrades)
        // console.log(unlockedFactories)
        // console.log(y)
        

/**
 *   localStorage.clear.unlockedFactories; < just in case keep this
 * 
 * Just FYI i added this so that you could really see i didn't just use AI.
 * Even when i was tempted too, i challenged myself, so i am doing what i can.
 * 
 * I also looked at my own fishing minigame:
 * https://github.com/yvar-info/fishingMinigame/blob/main/main.js
 * that i made with AI
 * 
 * My argument is that its the same as using prewritten code or existing files you might already have in the project. 
 * This means that i know how it works, and i understand what it does.
 * I simpely do not want to google the same thing aigan and spend  
 * This is the same as refering to something you have written and getting inspiration, If you do not agree with this.
 * Then we can agree to disagree.
 * 
 * Sources:
 * https://www.w3schools.com/html/html5_webstorage.asp
 * https://stackoverflow.com/questions/23743862/save-data-to-local-storage/23744275
 * https://stackoverflow.com/questions/2170923/whats-the-easiest-way-to-call-a-function-every-5-seconds-in-jquery
 * https://stackoverflow.com/questions/3357553/how-do-i-store-an-array-in-localstorage
 * https://stackoverflow.com/questions/2010892/how-to-store-objects-in-html5-localstorage-sessionstorage
 * https://stackoverflow.com/questions/3216013/get-the-last-item-in-an-array
 * https://flexiple.com/javascript/get-last-array-element-javascript
 * https://stackoverflow.com/questions/73982440/javascript-adding-name-scores-key-values-of-an-object-within-an-array-to-get
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach 
 * https://stackoverflow.com/questions/4825295/onclick-to-get-the-id-of-the-clicked-button
 * https://www.w3schools.com/js/js_object_display.asp
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
 * https://www.w3schools.com/jsref/jsref_push.asp
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
 * https://stackoverflow.com/questions/43762363/how-to-store-an-array-of-objects-in-local-storage
 * https://stackoverflow.com/questions/19706046/how-to-read-an-external-local-json-file-in-javascript
 * https://stackoverflow.com/questions/11197818/how-do-i-make-a-json-object-with-multiple-arrays
 * https://stackoverflow.com/questions/45339607/onload-need-to-work-only-once
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 * https://www.geeksforgeeks.org/javascript/how-to-check-if-an-array-includes-an-object-in-javascript/
 * https://stackoverflow.com/questions/24342748/why-does-console-log-say-undefined-and-then-the-correct-value
 * https://www.reddit.com/r/learnjavascript/comments/doatq0/retrieving_variable_outside_of_fetch_request/
 * 
 */
