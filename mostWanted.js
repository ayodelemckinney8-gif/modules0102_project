// const fugitives = ["Black Moses", "Switch", "Black Ink", "Black Light", "Subterfuge", "Mic Drop", "Charlie Maslow-Lamar", "Xavier House", "Upper Limit", "Erasure"]

// const fugitiveInfo = {
//     "Black Moses":{
//         imgSrc: "./classifiedPic.jpg",
//         subjectInfo: "",
//         bioCodename: "",
//         bioName: "",
//         bioAge: "",
//         bioAlphaClass: "",
//         bioKcategory: "",
//         knownAffiliates: ""
//     },
//     "Switch":{
//         imgSrc: "./SWTCH 3.jpg",
//         subjectInfo: "A rogue C.H.A.G. operative responsible for colluding with <mark>Amari Cloud, codename Fortune Cookie</mark> and <mark>codename Black Moses</mark> for 2013's <mark>Horsemen Leak</mark>. She finished second in her C.H.A.G. Academy cohort, also becoming the second youngest C.H.A.G. agent in history. Switch is reported to be a tactical genius and lethal CQ combatant. She utilizes tools such as cargo pants, assortments of bags, jackets, and other item carriers to maximize the efficiency of her 'Pockets.' Her previous C.H.A.G. files suggest anti-social tendencies originating from Operation Crowd Silencer. These earlier files, plus reports from both of her field partners and <mark>codename Aero</mark>, lend us to believe she is a lone operator. Despite this, she's killed or injured 60 agents over a ten year span.",
//         bioCodename: "",
//         bioName: "",
//         bioAge: "",
//         bioAlphaClass: "",
//         bioKcategory: "",
//         knownAffiliates: ""
//     },
//     "Black Ink":{
//         imgSrc: "./classifiedPic.jpg",
//         subjectInfo: "",
//         bioCodename: "",
//         bioName: "",
//         bioAge: "",
//         bioAlphaClass: "",
//         bioKcategory: "",
//         knownAffiliates: ""
//     },
//     "Black Light":{
//         imgSrc: "./classifiedPic.jpg",
//         subjectInfo: "",
//         bioCodename: "",
//         bioName: "",
//         bioAge: "",
//         bioAlphaClass: "",
//         bioKcategory: "",
//         knownAffiliates: ""
//     },
//     "Subterfuge":{
//         imgSrc: "./classifiedPic.jpg",
//         subjectInfo: "",
//         bioCodename: "",
//         bioName: "",
//         bioAge: "",
//         bioAlphaClass: "",
//         bioKcategory: "",
//         knownAffiliates: ""
//     },
//     "Mic Drop":{
//         imgSrc: "./classifiedPic.jpg",
//         subjectInfo: "",
//         bioCodename: "",
//         bioName: "",
//         bioAge: "",
//         bioAlphaClass: "",
//         bioKcategory: "",
//         knownAffiliates: ""
//     },
//     "Charlie Maslow-Lamar":{
//         imgSrc: "./classifiedPic.jpg",
//         subjectInfo: "",
//         bioCodename: "",
//         bioName: "",
//         bioAge: "",
//         bioAlphaClass: "",
//         bioKcategory: "",
//         knownAffiliates: ""
//     },
//     "Xavier House":{
//         imgSrc: "./classifiedPic.jpg",
//         subjectInfo: "",
//         bioCodename: "",
//         bioName: "",
//         bioAge: "",
//         bioAlphaClass: "",
//         bioKcategory: "",
//         knownAffiliates: ""
//     },
//     "Upper Limit":{
//         imgSrc: "./classifiedPic.jpg",
//         subjectInfo: "",
//         bioCodename: "",
//         bioName: "",
//         bioAge: "",
//         bioAlphaClass: "",
//         bioKcategory: "",
//         knownAffiliates: ""
//     },
//     "Erasure":{
//         imgSrc: "./classifiedPic.jpg",
//         subjectInfo: "",
//         bioCodename: "",
//         bioName: "",
//         bioAge: "",
//         bioAlphaClass: "",
//         bioKcategory: "",
//         knownAffiliates: ""
//     }
// }

const characterFile = {
    codename: "Black Moses",
    realName: "Shaun Brewer",
    age: 34,
    alphaClass: 'TELEP Class 4, ' + '"<b>Shmoke</b>"' + "<br>" + 'QUANTA Class 1, ' + '<b>Pocket Creation</b>' ,
    kCat: "D",
    imgSrc: "./classifiedPic.jpg",
    subjectInfo: "An extremely powerful and elusive S.A.G.A. He’s one of the Four Horsemen. He’s one of the few AGAs to create his own codename. He’s a quick witted, self-absorbed shit-talker. Having had to care for himself most of his life, he developed an inability to connect deeply with others. However, he compensates for this by single-handedly holding The Lair together using his immense power."
}

// console.log(characterFile.codename)
// console.log(characterFile.realName)

// const fugitiveToggle = document.getElementById("nextFugitive"); 
// fugitiveToggle.addEventListener("click", () => {
//     let img = document.getElementById("charaImage")
//     img.src = characterFile.imgSrc
// })
// const nextFugitive = document.getElementById("nextFugitive");

// let originalInfo = document.getElementsByClassName("subject-info")
// let originalCodename = document.getElementsByClassName("bioCodename")
// let originalName = document.getElementsByClassName("bioName")
// let originalAge = document.getElementsByClassName("bioAge")
// let originalClass = document.getElementsByClassName("bioAlphaClass")
// let originalCat = document.getElementsByClassName("kCat")
// const originalImg = document.getElementsById("charaImage");
       
// nextFugitive.addEventListener("click",() => {
    // let blackMosesFile = document.createElement("div")    
    // blackMosesFile.className = "characterFile"
    // let blackMosesImg = document.createElement("img")
    // blackMosesImg.src = fugitiveInfo["Black Moses"].imgSrc
    // blackMosesFile.appendChild(blackMosesImg)
    // let blackMosesNewFile = document.getElementsByClassName("characterFile")
    // blackMosesNewFile.appendChild(blackMosesFile)
   
    // originalImg.src = "./classifiedPic.jpg" 
    // })


// originalInfo.innerText = fugitiveInfo.fugitives.subjectInfo;
        // originalCodename.innerText = fugitiveInfo.fugitives.bioCodename;
        // originalName.innerText = fugitiveInfo.fugitives.bioName;
        // originalAge.innerText = fugitiveInfo.fugitives.bioAge;
        // originalClass.innerText = fugitiveInfo.fugitives.bioAlphaClass;
        // originalCat.innerText = fugitiveInfo.fugitives.bioKcategory;