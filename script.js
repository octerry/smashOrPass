const body = document.body;
const container = document.getElementById('card_container');
const title = document.getElementById('title');
const smash = document.getElementById('smash');
const pass = document.getElementById('pass');
const listButton = document.getElementById('list');

const tab1 = ['Afro Samourai', 'Kaneda', 'Alice', 'Wraith', 'Lifeline', 'Loba', 'Desmond Miles', 'Ezio Auditore da Firenze', 'Connor', 'Edward Kenway', 'Shao Jun', 'Bayek', 'Aya', 'Khensa', 'Ezio Auditore da Firenze', 'Jacob Frye', 'Evie Frye', 'Arno', 'Mikasa', 'Annie', 'Levi', 'Eren Jaeger', 'Armin', 'Ivy', 'Catwoman', 'Le Joker', 'Nightwing', 'Batman Arkham Knight', 'Batman', 'Bayonetta', 'Jeanne', 'Bayonetta (cheveux court)', 'Elizabeth (version col/foulard)', 'Elizabeth (version dcollet)', 'w', 'Jin Kisaragi', 'Ulquiorra', 'Ichigo', 'Grimmjow', 'Rukia', 'Halibel', 'Soifon', 'Yoruichi', 'Ikkaku Madarame', 'Flynt', 'Lilith ', 'Mordecai', 'Maya ', 'Gaige', 'Moxxi', 'Roland', 'Sheriff', 'Zero', 'Boruto', 'Sarada', 'Konohamaru', 'Zelda', 'Spike Spiegel', "Solaire d'Astora", 'Flash - version Justice League (le film)', 'Green Arrow', 'Green Lantern', 'Power Girl', 'Wonder Woman', 'Nea Karlsson', 'k', 'Michael Myers', 'Feng Min', 'Leifang', 'Hayate', 'Kasumi', 'Jann Lee', 'Hitomi', 'Eliot', 'Mila', 'Isaac', 'Domino', 'Conan', 'Adam Jensen', 'Eliza Cassan', 'Dante', 'Lady', 'Dante', 'Nero', 'V', 'Esmeralda', 'Clochette', 'Jasmine', 'Aladdin', 'Dingo (version classique)', 'Hercule', 'Peter Pan', 'Pocahontas', 'Jane', 'Prince Eric', 'Li Shang ', 'Cloud', 'Djidane Tribal', 'Virgil', 'Cat', 'Dante', 'Drow Ranger', 'Lina', 'Wind Runner', 'Astrid', 'Hiccup', 'Sangohan (super guerrier jeune - saga cell)', 'Vegeta', 'Sangoku (super guerrier 1)', 'Vegeta (super guerrier)', 'Bulma', 'Android 21', 'Luceus', 'Aurora', 'Jessica', 'Terry', 'Hero', 'Jade', 'Sylvando', 'Erik', 'f', 'Monkey', 'Trip', 'Erza Scarlet', 'Natsu Dragneel', 'Gray Fullbusterc', 'Lucy Heartfilia', 'Vaas', 'Rikku', 'Tidus', 'Wakka', 'Paine', 'Rikku', 'Balthier', 'Lightning', 'Vanille', 'Lightning', 'Lightning', 'Noctis', 'Ignis', 'Prompto', 'Gladio', 'Tifa', 'Cloud', 'Aerith', 'Bareth', 'Linoa', 'Squall Leonhart', 'Edward Elric', 'Riza Hawkeye', 'Captain Falcon', 'Daenerys Targaryen', 'Jon Snow', 'Franklin Clinton', 'Kai', 'Nariko', 'Senua', 'Gon', 'Meruem', 'Cole', 'Fetch', 'Delsin', 'Black Canary', 'Captain Cold', 'Starfire', 'Firestorm', 'Deathstroke', 'Jak', 'Jonathan Joestar', 'Narciso Anasui', 'Giorno Giovanna', 'Hermes Costello', 'Jolyne Cujoh', 'William Anthonio Zeppeli', 'Rico Rodriguez', 'Hit Girl', 'Kick-Ass', 'Dingo', 'Riku', 'Roxas', 'Yuffie', 'Fuu', 'Hayner', 'Kairi', 'Namine', 'Aqua', 'Ventus', 'Mickey', 'Riku', 'Yuri Lowell', 'Anna', 'Ahri', 'Jinx', 'Fiora', 'Nasus', 'Miss Fortune - skin gardienne des toiles', 'Yasuo', 'Aatrox', 'Annie', 'Katarina', 'Miss Fortune', 'Shyvana', 'Francis', 'Zoey', 'Jack Frost', 'Syndrome', 'Marge Simpson', 'Lisa Simpson', 'Max', 'Warren', 'Chloe', 'Courtney', 'Brooke', 'Juliet Starling', 'Pauline', 'Venom', 'Thanos', 'Captain America', 'Winter Soldier', 'Black Widow', 'Thor - version Thor Ragnarok', 'Gambit', 'The Punisher', 'Nightcrawler', 'Shuri', 'Raiden', 'Snake', 'Psycho Mantis', 'Quiet', 'Ocelot (version Afghan mission)', 'Ocelot (version mother base)', 'Venom Snake', 'Faith Connors', 'Sub-Zero', 'Frost ', 'Jade', 'Kitana', 'Scorpion', 'Cassie Cage', 'Jacqueline Briggs', 'Kenshi', 'Katsuki', 'Izuku', 'Ochaco', 'Kakashi', 'Gaara', 'Hinata', 'Jiraiya', 'Killer Bee', 'Kiba', 'Neji Hyuga', 'Sasuke', 'Kabuto', 'Shikamaru', 'Itachi (sans veste)', '2B', 'A2', '9S', 'Ryu Hayabusa', 'Travis', 'Nico Robin', 'Franky', 'Nami', 'Brook', 'Roronoa Zoro', 'Portgas D. Ace', 'Sanji', 'Trafalgar Law', 'Genos', 'Mercy', 'Lucio', 'Hanzo', 'D.Va', 'Ashe', 'Widowmaker', 'Soldier:76', 'Symmetra', 'Mei', 'Sombra', 'Shinbi', 'Twinblast', 'Serath', 'Sparrow', 'Lt Belica', 'Countess', 'Protagonist', 'Chie Satonaka', 'Rise Kujikawa', 'Kanji Tatsumi', 'Naoto Shirogane', 'Ryuji Sakamoto', 'Protagonist', 'Ann Takamaki', 'Makoto Niijima', 'Yusuke Kitagawa', 'Hifumi Togo', 'Tae Takemi', 'Yuuki Mishima', 'Sae Niijima', 'Goro Akechi', 'Popeye', 'Prince ', 'Princesse Mononoke', 'Ashitaka', 'Phoenix Wright', 'Maya Fey', 'Heller', 'Alex Mercer', 'John Marston', 'Alexia', 'Nilin', 'Leon S. Kennedy', 'Rebecca Chambers', 'Jill Valentine', 'Chris Redfield', 'Jill Valentine', 'Sherry', 'Moira Burton', 'Darth Maul', 'Marty Mc Fly', 'Jessica Rabbit', 'Mugen', 'Arthur Pendragon', 'Yoh Asakura', 'Carl', 'Montgomery Burns', 'Silver - versio tron', 'Knuckles', 'Cassandra Alexandra', 'Taki', 'Talim', 'Kilik', 'Amy', 'Spider Gwen', 'Rey', 'Darth Maul', 'Jango Fett', 'Starkiller', 'Iden Versio', 'Sabine Wren', 'Chirrut Imwe', 'Jyn Erso', 'Cassian Andor', 'Sarah Kerrigan', 'Feilong', 'Chun-li', 'Cammy', 'Vega', 'Nash', 'Laura', 'Juri', 'Ibuki', 'Rashid', 'Sheik', 'Phosphora', 'Pit', 'Dark Pit', 'Ike', 'Lucina', 'Marth', 'Terry', 'Roy', 'Asuna', 'Sinon', 'Klein', 'Kirito', 'Leefa', 'Lloyd Irving', 'Marta Lualdi', 'Sheena', 'Flynn Scifo', 'Judith', 'Josie', 'Xiaoyu', 'Katarina', 'Ellie', 'Ellie', 'Korra', 'Daryl Dixon', 'Negan', 'Clementine', 'Carley', 'Lee Everett', 'Geralt de Riv ', 'Bigby', 'Bloody Mary', 'Snow White', 'Lara Croft (version reboot 2013)', "Buzz l'Eclair", 'Jessie', 'Sulivan', 'Nathan Drake', 'Chloe Frazer', 'Elena Fisher', 'Jett', 'Cyper', 'Omen', 'Sage', 'Viper', 'Phoenix', 'Breach', 'Brimstone', 'Nite Owl', 'Psylocke', 'Cyclope', 'Rogue', 'Storm', 'X-23', 'Kazuma Kiryu', 'Haruka Sawamura', 'Goro Majima', 'Shun Akiyama', 'Oni ', 'Ashe'];
const tab2 = ['Afro Samourai', 'Akira', 'Alice Madness Returns', 'Apex Legend', 'Apex Legend', 'Apex Legend', "Assassin's Creed", "Assassin's Creed 2", "Assassin's Creed 3", "Assassin's Creed Black Flag", "Assassin's Creed Chronicles China", "Assassin's Creed Origin", "Assassin's Creed Origin", "Assassin's Creed Origin", "Assassin's Creed Revelation", "Assassin's Creed Syndicate", "Assassin's Creed Syndicate", "Assassin's Creed Unity", 'Attack on Titan', 'Attack on Titan', 'Attack on Titan', 'Attack on Titan', 'Attack on Titan', 'Batman Arkham Asylum', 'Batman Arkham City', 'Batman Arkham City', 'Batman Arkham City', 'Batman Arkham Knight', 'Batman Origin', 'Bayonetta', 'Bayonetta', 'Bayonetta 2', 'Bioshock Infinite', 'Bioshock Inifnite', 'Black Rock Shooter', 'Blaze Blue', 'Bleach', 'Bleach', 'Bleach', 'Bleach', 'Bleach', 'Bleach', 'Bleach', 'Bleach', 'Borderland', 'Borderland', 'Borderland 1', 'Borderland 2', 'Borderland 2', 'Borderland 2', 'Borderland 2', 'Borderland 2', 'Borderland 2', 'Boruto', 'Boruto', 'Boruto', 'Breath of the wild', 'Cowboy Beebop', 'Dark Souls', 'DC Comics', 'DC Comics', 'DC Comics', 'DC Comics', 'DC Comics', 'Dead by daylight', 'Dead by daylight', 'Dead by daylight', 'Dead by daylight', 'Dead or alive 5', 'Dead or alive 5', 'Dead or alive 5', 'Dead or alive 5', 'Dead or alive 5', 'Dead or alive 5', 'Dead or alive 5', 'Dead Space', 'Deadpool - Marvel', 'Detective Conan', 'Deus Ex:Human Revolution', 'Deus Ex:Human Revolution', 'Devil May Cry 4', 'Devil May Cry 4', 'Devil May Cry 5', 'Devil May Cry 5', 'Devil May Cry 5', 'Disney', 'Disney', 'Disney', 'Disney', 'Disney', 'Disney', 'Disney', 'Disney', 'Disney', 'Disney (La petite Sirne)', 'Disney (Mulan)', 'Dissidia:Final Fantasy', 'Dissidia:Final Fantasy', 'DMC - Devil May Cry', 'DMC - Devil May Cry', 'DMC - Devil May Cry', 'Dota 2', 'Dota 2', 'Dota 2', 'Dragon', 'Dragon', 'Dragon Ball Z', 'Dragon Ball Z', 'Dragon Ball Z', 'Dragon Ball Z', 'Dragon Ball Z', 'Dragon Ball Z (Fighter Z)', 'Dragon Quest Heroes', 'Dragon Quest Heroes', 'Dragon Quest Heroes', 'Dragon Quest Heroes', 'Dragon Quest XI', 'Dragon Quest XI', 'Dragon Quest XI', 'Dragon Quest XI', 'Duke Nukem', 'Enslaved - Odyssey to the west', 'Enslaved - Odyssey to the west', 'Fairy Tail', 'Fairy Tail', 'Fairy Tail', 'Fairy Tail', 'Far Cry 3', 'Final Fantasy 10', 'Final Fantasy 10', 'Final Fantasy 10', 'Final Fantasy 10-2', 'Final Fantasy 10-2', 'Final Fantasy 12', 'Final Fantasy 13', 'Final Fantasy 13', 'Final Fantasy 13 - Lightning Returns', 'Final Fantasy 13-2', 'Final Fantasy 15', 'Final Fantasy 15', 'Final Fantasy 15', 'Final Fantasy 15', 'Final Fantasy 7 Remake', 'Final Fantasy 7 Remake', 'Final Fantasy 7 Remake', 'Final Fantasy 7 Remake', 'Final Fantasy 8', 'Final Fantasy 8', 'Full Metal Alchemist', 'Full Metal Alchemist', 'F-Zero', 'Game of Thrones (Telltale Games)', 'Game of Thrones (Telltale Games)', 'Grand Theft Auto V', 'Heavenly Sword', 'Heavenly Sword', 'Hellblade', 'Hunter X Hunter', 'Hunter X Hunter', 'Infamous 2', 'Infamous:Second Son', 'Infamous:Second Son', 'Injustice 2', 'Injustice 2', 'Injustice 2', 'Injustice 2', 'Injustice:Gods Among Us', 'Jak and Daxter 3', "Jojo's Bizarre Adventure", "Jojo's Bizarre Adventure", "Jojo's Bizarre Adventure", "Jojo's Bizarre Adventure", "Jojo's Bizarre Adventure", "Jojo's Bizarre Adventure", 'Just Cause 2', 'Kick-Ass', 'Kick-Ass', 'Kingdom Heart', 'Kingdom Heart', 'Kingdom Heart 2', 'Kingdom Heart 2', 'Kingdom Heart 2', 'Kingdom Heart 2', 'Kingdom Heart 2', 'Kingdom Heart 2', 'Kingdom Heart Birth By Sleep', 'Kingdom Heart Birth By Sleep', 'Kingdom Hearts 2', 'Kingdom Hearts 3', 'korra ', 'La Reine Des Neiges', 'League of Legends', 'League of Legends', 'League of Legends', 'League of Legends', 'League of Legends', 'League of Legends', 'League of Legends', 'League of Legends', 'League of Legends', 'League of Legends', 'League of Legends', 'Left 4 Dead', 'Left 4 Dead', 'Les 5 lgendes', 'Les Indestructibles - Disney', 'Les Simpson', 'Les Simpson', 'Life is strange', 'Life is strange', 'Life is strange', 'Life is strange', 'Life is strange', 'Lollipop Chainsaw', 'Mario Tennis Open', 'Marvel', 'Marvel', 'Marvel', 'Marvel', 'Marvel', 'Marvel', 'Marvel', 'Marvel', 'Marvel', 'Marvel (Black Panther)', 'Metal Gear Rising Revengeance', 'Metal Gear Solid', 'Metal Gear Solid', 'Metal Gear Solid 5 : Phantom Pain', 'Metal Gear Solid 5 : Phantom Pain', 'Metal Gear Solid 5 : Phantom Pain', 'Metal Gear Solid 5 : Phantom Pain', "Mirror's Edge", 'Mortal Kombat', 'Mortal Kombat', 'Mortal Kombat', 'Mortal Kombat', 'Mortal Kombat', 'Mortal Kombat', 'Mortal Kombat', 'Mortal Kombat', 'My Hero Academia', 'My Hero Academia', 'My Hero Academia', 'Naruto', 'Naruto', 'Naruto', 'Naruto', 'Naruto', 'Naruto', 'Naruto', 'Naruto', 'Naruto', 'Naruto', 'Naruto', 'Nier Automata', 'Nier Automata', 'Nier Automata', 'Ninja Gaiden', 'No More Hero', 'One Piece', 'One Piece', 'One Piece', 'One Piece', 'One Piece', 'One Piece', 'One Piece', 'One Piece', 'One Punch Man', 'Overwatch', 'Overwatch', 'Overwatch', 'Overwatch', 'Overwatch', 'Overwatch', 'Overwatch', 'Overwatch', 'Overwatch', 'Overwatch', 'Paragon', 'Paragon', 'Paragon', 'Paragon', 'Paragon', 'Paragon', 'Persona 4', 'Persona 4', 'Persona 4', 'Persona 4', 'Persona 4', 'Persona 5', 'Persona 5', 'Persona 5', 'Persona 5', 'Persona 5', 'Persona 5', 'Persona 5', 'Persona 5', 'Persona 5', 'Persona 5', 'Popeye', 'Prince of Persia : Warrior Within', 'Princesse Mononoke', 'Princesse Mononoke', 'Professor Layton vs. Phoenix Wright: Ace Attorney', 'Professor Layton vs. Phoenix Wright: Ace Attorney', 'Prototype 2', 'Protoype', 'Red Dead Redemption', 'Remember Me', 'Remember Me', 'Resident Evil ', 'Resident Evil 0', 'Resident Evil 3', 'Resident Evil 5', 'Resident Evil 5', 'Resident Evil 6', 'Resident Evil Revelation 2', 'Resident Evil Revelation 2', 'Retour vers le futur - Le jeu vido', 'Roger Rabbit', 'Samoura Champloo', 'Seven Deadly Sins', 'Shaman King', 'Simpsons', 'Simpsons', 'Sonic', 'Sonic The Hedgehog', 'Soul Calibur', 'Soul Calibur', 'Soul Calibur 2', 'Soul Calibur 4', 'Soul Calibur 4 ', 'Spiderman', 'Star Wars', 'Star Wars', 'Star Wars', 'Star Wars', 'Star Wars - Battlefront 2', 'Star Wars - Force Arena', 'Star Wars - Rogue One', 'Star Wars - Rogue One', 'Star Wars - Rogue One', 'Starcraft', 'Street Fighter 4 ', 'Street Fighter 5', 'Street Fighter 5', 'Street Fighter 5', 'Street Fighter 5', 'Street Fighter 5', 'Street Fighter 5', 'Street Fighter 5', 'Street Fighter 5', 'Super Smash Bros', 'Super Smash Bros', 'Super Smash Bros', 'Super Smash Bros', 'Super Smash Bros', 'Super Smash Bros', 'Super Smash Bros', 'Super Smash Bros', 'Super Smash Bros', 'Sword Art Online', 'Sword Art Online', 'Sword Art Online', 'Sword Art Online', 'Sword Art Online', 'Tales of Symphonia', 'Tales of Symphonia', 'Tales of Symphonia', 'Tales of Vesperia', 'Tales of Vesperia', 'Tekken 7', 'Tekken 7', 'Tekken 7', 'The Last of Us', 'The Last of Us 2', 'The Legend of Korra', 'The Walking Dead', 'The Walking Dead', 'The Walking Dead (TellTale Game)', 'The Walking Dead (TellTale Game)', 'The Walking Dead (TellTale Game)', 'The Witcher', 'The Wolf Among Us', 'The Wolf Among Us', 'The Wolf Among Us', 'Tomb Raider', 'Toy Story', 'Toy Story', 'Uncharted', 'Uncharted', 'Uncharted', 'Uncharted', 'Valorant', 'Valorant', 'Valorant', 'Valorant', 'Valorant', 'Valorant', 'Valorant', 'Valorant', 'Watchmen', 'X-Men', 'X-Men', 'X-Men', 'X-Men', 'X-Men', 'Yakuza', 'Yakuza (0)', 'Yakuza (0)', 'Yakuza (5)', "Zelda Majora's Mask","League Of Legends"];

const smashTab = new Array();
const passTab = new Array();
let linkTab = new Array();

let i = 0
let isDragging = false;
let startX = 0;
let currentCard = null;
let thisUrl = url(i);
let thisName = tab1[i] + " (" + tab2[i] + ")";
let nextUrl = url(i+1);

function nameContext(name) {
    name = name.replace("(","").replace(")","").replace(":","")
    let nameTab = name.split(/[ ,\-_/'"]+/);
    while (nameTab.includes('')) { 
        const index = nameTab.indexOf('');
        if (index > -1) {
            nameTab.splice(index, 1);
        }
    }

    let final = String(nameTab[0]).toLowerCase()
    
    for (let i=1; i<nameTab.length; i++) {
        final += String(nameTab[i]).charAt(0).toUpperCase() + String(nameTab[i]).slice(1);
    }

    return final
}

function serieContext(name) {
    name = name.replace("(","").replace(")","").replace(":","")
    let nameTab = name.split(/[ ,\-_/'"]+/);
    while (nameTab.includes('')) { 
        const index = nameTab.indexOf('');
        if (index > -1) {
            nameTab.splice(index, 1);
        }
    }

    let final = ''

    for (let i=0; i<nameTab.length; i++) {
        let toAdd = nameTab[i].toUpperCase().charAt(0)
        final += toAdd
    }

    return final
}

// for i in range (195,len(tab1)) :
//     print(str(i) + " " + tab1[i] + " (" + tab2[i] + ")")

function show() {
    container.innerHTML = '';
    showNext()
    showActual()
    firstCard = document.querySelector(".card:last-child")
    firstCard.style.rotate = `0deg`
}

function showActual() {
    const card = document.createElement("img");
    thisUrl = url(i);
    card.className = "card";
    card.src = thisUrl;
    container.appendChild(card);
}

function showNext() {
    if (tab1.length>1) {
        const card = document.createElement("img");
        nextUrl = url(i+1);
        card.className = "card";
        card.src = nextUrl;
        container.appendChild(card);
    }
}

function actualizeText() {
    thisName = tab1[i] + " (" + tab2[i] + ")";
    title.innerText = thisName
}

function url(id) {
    let fileName = nameContext(tab1[id]) + "_" + serieContext(tab2[id])
    return "Source/" + fileName + ".webp"
}

document.addEventListener('mousemove', event=>{
    if (isDragging) {
        firstCard.style.left = `${event.clientX - startX}px`;
        firstCard.style.rotate = `${(event.clientX - startX) / 10}deg`
        firstCard.style.transform = `none`;
            
        smash.style.transform = "translateY(-50%)"
        pass.style.transform = "translateY(-50%)"
        body.style.background = "radial-gradient(circle, transparent 20%, #0b0c1d 20%, #0b0c1d 80%, transparent 80%, transparent), radial-gradient(circle, transparent 20%, #0b0c1d 20%, #0b0c1d 80%, transparent 80%, transparent) 25px 25px, linear-gradient(#242649 2px, transparent 2px) 0 -1px, linear-gradient(90deg, #242649 2px, #0b0c1d 2px) -1px 0"
        body.style.backgroundSize = "50px 50px, 50px 50px, 25px 25px, 25px 25px"
        if(event.clientX - startX > window.innerWidth/6) {
            body.style.backgroundColor = "#3a213a";
            body.style.backgroundImage = "url(Source/heart.svg)"
            body.style.backgroundSize = "60px"
            smash.style.transform = "scale(3) translateY(10%)"
            smash.style.zIndex = "1";
        } else if(event.clientX - startX < -window.innerWidth/6) {
            body.style.backgroundColor = "#441313";
            body.style.backgroundImage = "url(Source/cross.svg)"
            body.style.backgroundSize = "60px"
            pass.style.transform = "scale(3) translateY(10%)"
            pass.style.zIndex = "1";
        } else {
            body.style.backgroundColor = "#0b0c1d";
        }
    }
})

container.addEventListener('mousedown', event=>{
    isDragging = true;
    startX = event.clientX;
    firstCard.style.transition = "rotate .1s";
    document.body.style.cursor = "pointer";
})

document.addEventListener('mouseup', event=>{
    isDragging = false;
    if(event.clientX - startX > window.innerWidth/6) {
        smashTab.push(thisName);
        tab1.shift();
        tab2.shift();
        firstCard.style.transition = ".2s";
        firstCard.style.left = `100vw`;
        actualizeText()
        setTimeout(() => {
            show();
        }, 300);
    } else if(event.clientX - startX < -window.innerWidth/6) {
        passTab.push(thisName);
        tab1.shift();
        tab2.shift();
        firstCard.style.transition = ".2s";
        firstCard.style.left = `-100vw`;
        actualizeText()
        setTimeout(() => {
            show();
        }, 300);
    } else {
        firstCard.style.transition = ".2s";
        firstCard.style.left = `50%`;
        firstCard.style.rotate = `0deg`
        firstCard.style.transform = "translateX(-50%)"
    }
    body.style.backgroundColor = "#0b0c1d";
    smash.style.transform = "translateY(-50%)"
    pass.style.transform = "translateY(-50%)"
    body.style.background = "radial-gradient(circle, transparent 20%, #0b0c1d 20%, #0b0c1d 80%, transparent 80%, transparent), radial-gradient(circle, transparent 20%, #0b0c1d 20%, #0b0c1d 80%, transparent 80%, transparent) 25px 25px, linear-gradient(#242649 2px, transparent 2px) 0 -1px, linear-gradient(90deg, #242649 2px, #0b0c1d 2px) -1px 0"
    body.style.backgroundSize = "50px 50px, 50px 50px, 25px 25px, 25px 25px"
})

show();
actualizeText();