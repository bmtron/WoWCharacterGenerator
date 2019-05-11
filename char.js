const RACES = {
    faction: [
        {
            name: 'Horde',
            races: [
                {
                    name: 'Orc',
                    classes: ['Death Knight', 'Hunter', 'Monk', 'Mage', 'Rogue', 'Warlock', 'Shaman', 'Warrior'],
                },
                {
                    name: 'Undead',
                    classes: ['Death Knight', 'Hunter', 'Mage', 'Monk', 'Priest', 'Rogue', 'Warlock', 'Warrior']
                },
                {
                    name: 'Tauren',
                    classes: ['Death Knight', 'Hunter', 'Druid', 'Monk', 'Priest', 'Paladin', 'Shaman', 'Warrior']
                },
                {
                    name: 'Troll',
                    classes: ['Death Knight', 'Monk', 'Hunter', 'Druid', 'Mage', 'Priest', 'Rogue', 'Warlock', 'Shaman', 'Warrior']
                },
                {
                    name: 'Blood Elf',
                    classes: ['Demon Hunter', 'Death Knight', 'Hunter', 'Mage', 'Monk', 'Paladin', 'Priest', 'Rogue', 'Warlock', 'Warrior']
                },
                {
                    name: 'Goblin',
                    classes: ['Death Knight', 'Hunter', 'Mage', 'Priest', 'Rogue', 'Warlock', 'Shaman', 'Warrior']
                },
                {
                    name: 'Pandaren (H)',
                    classes: ['Monk', 'Rogue', 'Hunter', 'Mage', 'Priest', 'Shaman', 'Warrior']
                }
            ]
        },
        {
            name: 'Alliance',
            races: [
                {
                    name: 'Human',
                    classes: ['Death Kight', 'Hunter', 'Rogue', 'Monk', 'Mage', 'Warlock', 'Priest', 'Paladin', 'Warrior']
                },
                {
                    name: 'Dwarf',
                    classes: ['Death Knight', 'Rogue', 'Hunter', 'Monk', 'Mage', 'Warlock', 'Priest', 'Paladin', 'Shaman', 'Warrior']
                },
                {
                    name: 'Night Elf',
                    classes: ['Demon Hunter', 'Death Knight', 'Druid', 'Rogue', 'Hunter', 'Monk', 'Mage', 'Priest', 'Warrior']
                },
                {
                    name: 'Gnome',
                    classes: ['Death Knight', 'Hunter', 'Monk', 'Priest', 'Warlock', 'Warrior', 'Mage', 'Rogue']
                },
                {
                    name: 'Draenei',
                    classes: ['Death Knight', 'Hunter', 'Monk', 'Mage', 'Priest', 'Paladin', 'Shaman', 'Warrior']
                },
                {
                    name: 'Worgen',
                    classes: ['Death Knight', 'Druid', 'Rogue', 'Hunter', 'Mage', 'Priest', 'Warlock', 'Warrior']
                },
                {
                    name: 'Pandaren (A)',
                    classes: ['Monk', 'Rogue', 'Hunter', 'Mage', 'Priest', 'Shaman', 'Warrior']
                }
            ]
        }
    ]
}
let count = 3;
function handleRandomize() {
    $('.randomize').click(event => {
        event.preventDefault();
        $('.remove').remove();
        let playerFaction = handleFactionClick();
        getRandomRace(playerFaction);
    });
}
function handleFactionClick() {
    let playerFaction = $('input:radio[name="faction"]:checked').val();
    return playerFaction
}

function getRandomRace(rand) {
    let randTwo = Math.floor(Math.random() * 7);
    let faction = RACES.faction[rand].name;
    let race = RACES.faction[rand].races[randTwo].name;
    let classArray = RACES.faction[rand].races[randTwo].classes;
    let randThree = Math.floor(Math.random() * classArray.length);
    let playerClass = classArray[randThree];
    addResults(race, playerClass);
    
}
function addResults(race, playerClass) {
    $('.results').append(`<p class="remove">You will be playing a ${race} ${playerClass}.</p>`);
}
function changeFactionSelectionColor() {
    $('.main').on('click', '.faction-select', event => {
        $('.faction-select').removeClass('not-selected');
        let currentSelection = $(event.currentTarget);
        let notSelected = $('.faction-select').not(currentSelection);
        notSelected.removeClass('selected');
        notSelected.addClass('not-selected');
        currentSelection.addClass('selected');
    });
}
$(changeFactionSelectionColor);
$(handleRandomize);