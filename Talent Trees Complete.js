/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Talent Trees (a substitute for the base Feat system)
	Effect:		This script adds the Talents from Talent Trees as feats
	Code by:	Gawain
	Date:		2020.03.01 (sheet v12.999 Custom)
*/

var iFileName = "Talent Trees.js";
RequiredSheetVersion(12.999);

SourceList["Talent Trees"] = {
	name : "Points of Light: Talent Trees",
	abbreviation : "Talent Trees",
	group : "Points of Light",
	date : "2020/03/01"
	};

/* STRENGTH SKILLS */

/*	Str.Athletics 		*/

FeatsList["talent-jumper"] = {
	name : "Jumper",
	source : ["Talent Trees", 3],
	description : "I can make a running long jump or a running high jump after moving only 5 feet on foot, rather than 10 feet."
	};
FeatsList["talent-strapping"] = {
	name : "Strapping",
	source : ["Talent Trees", 3],
	description : "I am an exemplary athlete. I gain a swimming speed equal to my walking speed. I gain a climbing speed equal to my walking speed on vertical surfaces that have handholds. I also have advantage on Constitution saving throws for Forced Marching",
	speed : {
		swim : {spd : "walk", enc : 0}
		},
	speed : {
		climb : {spd : "walk", enc : 0}
		}
	};
FeatsList["talent-mighty"] = {
	name : "Mighty",
	source : ["Talent Trees", 3],
	description : "While underwater, I can drag another person with me at my swimming speed. I can move half my walk speed on horizontal surfaces that have handholds. I do damage with versatile weapons as if using two hands, even when using one hand."
	};
FeatsList["talent-chokehold"] = {
	name : "Choke-Hold",
	source : ["Talent Trees", 3],
	description : "I can use my action to try and pin a creature I have grappled. I make another grapple check; if I succeed, my speed becomes 0 and the creature I am grappling becomes restrained until the grapple ends."
	};
FeatsList["talent-wrestler"] = {
	name : "Wrestler",
	source : ["Talent Trees", 3],
	description : "I can use my action to reverse the grapple. I make a grapple check against the creature; if I am successful, the grapple is reversed. Additionally, all attacks I make at the creature I am grappling are with advantage."
	};
FeatsList["talent-brute"] = {
	name : "Brute",
	source : ["Talent Trees", 3],
	description : "When shoving a creature, I can push the target an additional 5 feet away. I deal double damage to objects and structures. As a bonus action I may attempt to break or smash a nonmagical object with advantage.",
	action : ["bonus action", " (Smash)"]
	};
FeatsList["talent-charger"] = {
	name : "Charger",
	source : ["Talent Trees", 3],
	description : "After a Dash, I can use a bonus action to make one melee weapon attack or shove a creature. If I moved at least 10' in a straight line before this, I gain +5 to damage, or push the target up to 10 feet (on a successful shove)",
	action : ["bonus action", " (after a dash)"]
	};
FeatsList["talent-colossus"] = {
	name : "Colossus",
	source : ["Talent Trees", 3],
	description : "I count as one size larger when determining my carrying capacity; and my push, drag, and lift limits. I can automatically break out of nonmagical restraints. I have advantage against magical restraints and grapples. When I shove a creature, they take my Str mod in bash damage."
	};
	
/* DEXTERITY SKILLS */
	
/* 	Dex.Acrobatics 		*/	
FeatsList["talent-handspring"] = {
	name : "Hand Spring Expert",
	source : ["Talent Trees", 4],
	description : "When I am prone, standing up takes only 10 feet of my movement."
	};
FeatsList["talent=freestride"] = {
	name : "Free Stride",
	source : ["Talent Trees", 4],
	description : "I stride easily across terrain. My unencumbered speed increases by 10 feet. When I take the Dash action, difficult terrain does not cost me extra movement during the action.",
	speed : {
		walk : {spd : "+10", enc : "+0"}
		}
	};
FeatsList["talent-withdraw"] = {
	name : "Withdraw",
	source : ["Talent Trees", 4],
	description : "When I make an attack against a creature, I don't provoke opportunity attacks from that creature (sustain 1) (regardless of whether I hit or miss). Only one such effect may be active at any given time."
	};
FeatsList["talent-tumble"] = {
	name : "Tumble",
	source : ["Talent Trees", 4],
	description : "As an action or a bonus action, I can tumble through the space of a hostile creature to a location on the other side. I can fall up to 20 feet without taking damage. Fall damage is calculated as if I fell 20 less",
	action : ["bonus action", ""]
	};
FeatsList["talent-agility"] = {
	name : "Agility",
	source : ["Talent Trees", 4],
	description : "When I take the Dodge action, I can immediately move 5 feet in any direction without provoking opportunity attacks, in addition to my normal movement"
	};
FeatsList["talent-slippery"] = {
	name : "Slippery",
	source : ["Talent Trees", 4],
	description : "I have advantage on saving throws to resist traps and have resistance to the damage dealt by traps. Whenever I succeed on a Dexterity saving through, I can use my reaction to move up to half my movement.",
	action : ["reaction", " (after a Dex save)"],
	savetxt : {
		adv_vs : ["traps"]
		},
	dmgres : ["Traps"]
	};
FeatsList["talent-escapist"] = {
	name : "Escape Artist",
	source : ["Talent Trees", 4],
	description : "On my turn, I can forego all of my movement to automatically escape from nonmagical restraints such as manacles or a creature that has me grappled."
	};
FeatsList["talent-freerunning"] = {
	name : "Freerunning",
	source : ["Talent Trees", 4],
	description : "When I take the Dash action, if I am wearing no armor or only light armor, I can run on vertical surfaces, along the edges of thing barriers, or hop from one outcropping to another as if traveling on normal terrain."
	};
	
/* 	Dex.SleightOfHand 	*/
FeatsList["talent-subtlety"] = {
	name : "Subtle Interactions",
	source : ["Talent Trees", 5],
	description : "I have advantage on Slight of Hand checks to conceal an object that is small enough to fit in my hand."
	};
FeatsList["talent-cleveraction"] = {
	name : "Clever Action",
	source : ["Talent Trees", 5],
	description : "I can make an extra object interaction on each of my turns."
	};
FeatsList["talent-quickthinking"] = {
	name : "Quick Thinking",
	source : ["Talent Trees", 5],
	description : "During the first turn of combat (or surprise round), if I am not surprised I may don/doff a shield; or draw/stow a weapon; or take a Use an Object action. Also, I may Use an Object rather than an Attack of Opportunity."
	};
	
FeatsList["talent-hiddenaction"] = {
	name : "Hidden Action",
	source : ["Talent Trees", 5],
	description : "I have advantage on Sleight of Hand checks against creatures you are hidden from."
	};
FeatsList["talent-thiefpropriety"] = {
	name : "Thief of Propriety",
	source : ["Talent Trees", 5],
	description : "As long as I am hidden from a creature, I may try to steal an object that it is holding. I make a Sleight of Hand contested by their Athletics or Acrobatics skill (target chooses); success means I take it, or they drop it."
	};
FeatsList["talent-handiwork"] = {
	name : "Perplexing Handiwork",
	source : ["Talent Trees", 5],
	description : "My complex movements allow me to capitalize on the enemies confusion to drive them back. I may use Sleight of Hand rather than Athletics when attempting the Shove action"
	};
FeatsList["talent-thieffocus"] = {
	name : "Thief of Focus",
	source : ["Talent Trees", 5],
	description : "As a reaction, I can disrupt a spell with a material component or arcane focus if it is cast within 5 feet of me. I make a Sleight of Hand check at disadvantage (DC Spell Save). If I succeed, the spell is not cast.",
	action : ["reaction", " (disrupt spell)"]
	};
FeatsList["talent-rapidpotion"] = {
	name : "Rapid Potions",
	source : ["Talent Trees", 5],
	description : "I may use a bonus action, rather than a minor action, to drink or administer potions",
	action : ["bonus action", " (quaff potion)"]
	};

/*	Dex.Stealth		*/
FeatsList["talent-unlikelyspot"] = {
	name : "Unlikely Spot",
	source : ["Talent Trees", 6],
	description : "I can try to Hide with disadvantage when I am lightly obscured from the creature from which I am hiding"
	};
FeatsList["talent-skulk"] = {
	name : "Skulk",
	source : ["Talent Trees", 6],
	description : "When I am hidden from a creature, missing it with a ranged attack does not reveal my position. When I take the Hide action, I treat half cover as if were three-quarters cover even if my position is revealed."
	};
FeatsList["talent-slither"] = {
	name : "Slither",
	source : ["Talent Trees" , 6],
	description : "After I reduce a creature to 0 hit points with a ranged weapon, I can use my reaction to move 5 feet and take the Hide action.",
	action : ["reaction", " (after killing a creature)"]
	};
FeatsList["talent-startle"] = {
	name : "Startle",
	source : ["Talent Trees" , 6],
	description : "Whenever I successfully become hidden from a creature, I gain advantage on the first of any Acrobatics, Athletics, Bluff, Intimidation, Performance, or Sleight of Hand check I make against it after I reveal myself."
	}
FeatsList["talent-ambusher"] = {
	name : "Ambusher",
	source : ["Talent Trees" , 6],
	description : "If I am hidden from all opponents on the first round of combat, I gain +3 to AP, and creatures that were surprised by me cannot use reactions against my actions during this turn."
	};
FeatsList["talent-slink"] = {
	name : "Slink",
	source : ["Talent Trees" , 6],
	description : "If I am hidden, I can move up to 10' in the open without revealing myself if I end the move in a position where I am not clearly visible. Also, I am invisible to creatures who rely on tremorsense if move 10' or less."
	};
FeatsList["talent-dive"] = {
	name : "Dive",
	source : ["Talent Trees" , 6],
	description : "When I fail a Stealth check, I can use my reaction to go prone and reroll the check without disadvantage. You may also use this feature on a friendly creature within 5' of me who fails its Stealth check; it goes prone."
	};
FeatsList["talent-disappear"] = {
	name : "Disappear",
	source : ["Talent Trees" , 6],
	description : "When a creature within 30' of me does not engage me on its action, I may use a reaction to Hide. If I succeed against every hostile creature within 30' I become perfectly silent and invisible; (see description)"
	};
	
/* INTELLEGENCE SKILLS */

/*	Int.Arcana		*/
FeatsList["talent-magicalintuition"] = {
	name : "Magical Intuition",
	source : ["Talent Trees" , 7],
	description : "Whenever I see a creature cast a spell, I can glean information from it. I can tell the creature's spellcasting ability relative to mine. I may spend 1 minute examining a spell scroll to determine the level of the spell it contains."
	};

/* These are already added and do not need to be duplicated
	FeatsList["talent-ritualcaster.bard"] = {
	name : "Ritual Caster [Bard]",
	description : "Choose a class: bard, cleric, druid, sorcerer, warlock, or wizard. You acquire a ritual book containing two 1st-level rituals of the your choice from the chosen class.",
	spellcastingBonus : {
		name : "Ritual Caster [Bard]",
		spellcastingAbility : 6,
		class : "bard",
		level : [1, 1],
		ritual : true,
		times : 2,
		prepared : true
		}
	};
*/	

FeatsList["talent-ritualcollector"] = {
	name : "Ritual Collector",
	source : ["Talent Trees" , 7],
	description : "If I come across a ritual spell in written form, I might be able to add it to my ritual book if it is on the spell list of a class I have chosen with ritual caster and the spell's level is no higher than half my level (rounded up)"
	};
FeatsList["talent-apprentice.bard"] = {
	name : "Magic Apprentice [Bard]",
	source : ["Talent Trees" , 7],
	description : "Choose a class: bard, cleric, druid, sorcerer, warlock, or wizard. I learn a cantrip of your choice from that class's spell list. My spellcasting ability or the chosen cantrip is the same as that of the chosen class (Upgrade to Magic Initiate)",
	spellcastingBonus : {
		name : "Apprentice [Bard]",
		speallcastingAbility : 6,
		class : "bard",
		level : [0, 0],
		times : 1,
		atwill : true
		}
	};
FeatsList["talent-apprentice.cleric"] = {
	name : "Magic Apprentice [Cleric]",
	source : ["Talent Trees" , 7],
	description : "Choose a class: bard, cleric, druid, sorcerer, warlock, or wizard. I learn a cantrip of your choice from that class's spell list. My spellcasting ability or the chosen cantrip is the same as that of the chosen class (Upgrade to Magic Initiate)",
	spellcastingBonus : {
		name : "Apprentice [Cleric]",
		speallcastingAbility : 5,
		class : "cleric",
		level : [0, 0],
		times : 1,
		atwill : true
		}
	};
FeatsList["talent-apprentice.druid"] = {
	name : "Magic Apprentice [Druid]",
	source : ["Talent Trees" , 7],
	description : "Choose a class: bard, cleric, druid, sorcerer, warlock, or wizard. I learn a cantrip of your choice from that class's spell list. My spellcasting ability or the chosen cantrip is the same as that of the chosen class (Upgrade to Magic Initiate)",
	spellcastingBonus : {
		name : "Apprentice [Druid]",
		speallcastingAbility : 5,
		class : "druid",
		level : [0, 0],
		times : 1,
		atwill : true
		}
	};
FeatsList["talent-apprentice.sorcerer"] = {
	name : "Magic Apprentice [Sorcerer]",
	source : ["Talent Trees" , 7],
	description : "Choose a class: bard, cleric, druid, sorcerer, warlock, or wizard. I learn a cantrip of your choice from that class's spell list. My spellcasting ability or the chosen cantrip is the same as that of the chosen class (Upgrade to Magic Initiate)",
	spellcastingBonus : {
		name : "Apprentice [Sorcerer]",
		speallcastingAbility : 6,
		class : "sorcerer",
		level : [0, 0],
		times : 1,
		atwill : true
		}
	};
FeatsList["talent-apprentice.warlock"] = {
	name : "Magic Apprentice [Warlock]",
	source : ["Talent Trees" , 7],
	description : "Choose a class: bard, cleric, druid, sorcerer, warlock, or wizard. I learn a cantrip of your choice from that class's spell list. My spellcasting ability or the chosen cantrip is the same as that of the chosen class (Upgrade to Magic Initiate)",
	spellcastingBonus : {
		name : "Apprentice [Warlock]",
		speallcastingAbility : 6,
		class : "warlock",
		level : [0, 0],
		times : 1,
		atwill : true
		}
	};
FeatsList["talent-apprentice.wizard"] = {
	name : "Magic Apprentice [Wizard]",
	source : ["Talent Trees" , 7],
	description : "Choose a class: bard, cleric, druid, sorcerer, warlock, or wizard. I learn a cantrip of your choice from that class's spell list. My spellcasting ability or the chosen cantrip is the same as that of the chosen class (Upgrade to Magic Initiate)",
	spellcastingBonus : {
		name : "Apprentice [Wizard]",
		speallcastingAbility : 4,
		class : "wizard",
		level : [0, 0],
		times : 1,
		atwill : true
		}
	};
FeatsList["talent-secretsbeyond"] = {
	name : "Secrets From Beyond",
	source : ["Talent Trees" , 7],
	description : "After studying an elemental, aberration, outsider, or portal; make an Arcana check. On a success, I can determine the creatures skills, abilities, common attacks, and if the creature is especially dangerous to a party of my level (or the portal's destination)."
	};
FeatsList["talent-planardisruption"] =  {
	name : "Planar Disruptor",
	source : ["Talent Trees" , 7],
	description : "Select one type of creature: Elementals, Aberration, Outsider. If I choose 'Outsider', also choose an alignment. I add my Intelligence modifier to the damage of any weapon or spell attack directed at the chosen enemy type (up to once per round)."
	};
/* ==> is there a way to menu this choice and have it apply to the sheet? */
FeatsList["talent-magesight"] = {
	name : "Magesight",
	source : ["Talent Trees" , 7],
	description : "I may spend 1 minute and an action to open my sense to the magic around me (per Detect Magic spell with double penetration). Spending the full 10-minute duration studying a magical item permits me to learn the item's ability (per Identify spell)"
	};

/*	Int.history	*/
FeatsList["talent-cultured"] = {
	name : "Cultured",
	source : ["Talent Trees" , 8],
	description : "I learn two languages of your choice.",
	languageProfs : [2]
	};
FeatsList["talent-lorerepisitory"] = {
	name : "Repository of Lore",
	source : ["Talent Trees" , 8],
	description : "My vast studies allow me to become a living historical archive. As an action, I can consult my accumulated knowledge on a topic. Doing so is akin to consulting a bestiary, travel guide, or library inside my own mind.",
	usages : 1,
	recovery : "short rest"
	};
FeatsList["talent-loremaster"] = {
	name : "Loremaster",
	source : ["Talent Trees" , 8],
	description : "My study of history lets me pick up a trade and have a deeper understanding of written text. I learn to read/write 3 languages; I recognize a language I can see or hear; I can create written cyphers; I can use my Repository of Lore twice between rests."
	};
/* ==> how do I have one feat change the details of another; in this case change the usages of Repository of Lore from one to two? */
FeatsList["talent.knowsociety"] = {
	name : "Knowledge of Society",
	source : ["Talent Trees" , 8],
	description : "When I see a coat of arms, livery, logo, insignia, or other identifier for a noble, guild, country, corporation, or other organization, I have advantage on checks to identify it or recreate them."
	};
FeatsList["talent.objectlegend"] = {
	name : "Objects of Legend",
	source : ["Talent Trees" , 8],
	description : "When I study a magical item, I can determine its rarity; if it is legendary, I also know its name and its previous owner. I gain advantage on checks to gain further information about the object. Attunement takes only one minute for me."
	};
FeatsList["talent.tactician"] = {
	name : "Tactician",
	source : ["Talent Trees" , 8],
	description : "The study of war tactics allow me to control the initiative of the battlefield. I gain an AP bonus equal to my Int or Wis mod (whichever is higher). Once per long rest, during my action I can have two friendly creatures exchange the AP of their next action.",
	usages : 1,
	recovery : "long rest"
	};
FeatsList["talent.martialadept"] = {
	name : "Martial Adept",
	source : ["Talent Trees" , 8],
	description : "I learn two maneuvers of my choice as a Battle Master archetype. If maneuver requires the target to make a saving throw, the DC is based on my STR. If I already have superiority dice, I gain one more; otherwise I gain 1d6 as a superiority die."
	};
/* ==> how do I menu the choices for this talent? how do I add a superiority die if I already have one? how do you check? */
FeatsList["talent.historian"] = {
	name : "Learning from History",
	source : ["Talent Trees" , 8],
	description : "When in a historically significant area, like a city, ruin, battlefield, or stronghold, or when I prepare to enter one, I can spend 10 minutes regaling creatures around me with the trials of the locale's past; this gives them advantages while in the area.",
	usages : 1,
	recovery : "long rest"
	};

/* 	Int.Investigation	 */
FeatsList["talent.eyefortrouble"] = {
	name : "An Eye for Trouble",
	source : ["Talent Trees", 9],
	description : "When I find a trap or secret door while investigating an aperture I gain the following additional information: approximately how long ago the trap was set (or door used); likely requirements for resetting the trap (or resealing the door)."
	};
FeatsList["talent.keenmind"] = {
	name : "Keen Mind",
	source : ["Talent Trees", 9],
	description : "I can accurately recall anything I have seen or heard in the past month, and always know which way is north, as well as how many hours left before the next sunrise or sunset. (DM's description as to additional requirements to recall/know this information.)"
	};
FeatsList["talent.heedful"] = {
	name : "Heedful",
	source : ["Talent Trees", 9],
	description : "I take in information with ease. I gain +5 to my Passive Investigation. Once per short rest, if given 1 minute to consult my copious mental notes, I gain advantage on my next INT check. Training takes half the normal time."
	};
FeatsList["talent.analyst"] = {
	name : "Analyst",
	source : ["Talent Trees", 9], 
	description : "If I have reference materials or other similar resources, I may use skill dice to any intelligence based skills that I am not proficient with."
	};
FeatsList["talent.memetic"] = {
	name : "Memetic Memory",
	source : ["Talent Trees", 9],
	description : "I can spend one hour (which may be during a short rest) bolstering my knowledge of a skill. Consulting reference materials or similar resources I gain proficiency with a skill or tool until the beginning of my next long rest."
	};
FeatsList["talent.seeker"] = {
	name : "Seeker",
	source : ["Talent Trees", 9],
	description : "Every time I successfully find a hidden or invisible opponent, I have advantage on all attacks against them, and they suffer disadvantage on all Dex saves incurred by me (sustain 1)."
	};
FeatsList["talent.attentive"] = {
	name : "Attentive",
	source : ["Talent Trees", 9],
	description : "By analyzing my opponents' moves, I can predict an incoming strike. As a reaction, when a creature attacks me, I may make an Investigation check against the DC of the attack roll. On success, they have disadvantage on attack rolls against me (unsustain 1).",
	usages : 1,
	recovery : "short rest",
	action : ["reaction", " (Analyze Opponent)"]
	};
FeatsList["talent.rigor"] = {
	name : "Rigor",
	source : ["Talent Trees", 9],
	description : "Once per short rest, I can replace an Investigation or Perception roll with a 20. I may do so after I make the roll, but before I know if the check has succeeded.",
	usages : 1,
	recovery : "short rest"
	};
	
/*	Int.Nature	*/
FeatsList["talent.naturesense"] = {
	name : "Nature Sense",
	source : ["Talent Trees", 10],
	description : "By spending 10 minutes studying my surroundings I can gain the following information (choose two): local weather and climate; closest water source; residential presence."
	};
FeatsList["talent.knowmonsters"] = {
	name : "Knowledge of Monsters",
	source : ["Talent Trees", 10],
	description : "After studying a beast, monstrosity, or dragon that I can see, I can make a Nature check. On a success, I can determine the creature's preferred skills, common attacks, and how the dangerous the creature is to a party of my level."
	};
FeatsList["talent.monsterbane"] = {
	name : "Monsterbane",
	source : ["Talent Trees", 10],
	description : "Select one type of creature: beasts, monstrosities, or dragons. I gain my Intelligence modifier (min: 1) to the damage of any weapon attack or spell attack directed at the chosen enemy (once per round)."
	};
/* ==> is there a way to menu this choice and have it show on the sheet? */
FeatsList["talent.knowplants"] = {
	name : "Knowledge of Plants and Oozes",
	source : ["Talent Trees", 10],
	description : "After studying a plant or ooze that I can see, I may make a Nature check. On success, I determine the creature's preferred skills, common attacks, and how dangerous the creature is to my party."
	};
FeatsList["talent.naturaldefense"] = {
	name : "Natural Defense",
	source : ["Talent Trees", 10],
	description : "I know how to avoid natural ambushes and organic traps. I cannot be surprised by plants or oozes; I have advantage on saving throws against them. Plants nor oozes score critical strikes against me. I add my INT modifier to damage rolls against plants and oozes (once/round)."
	};
FeatsList["talent.knowmateria"] = {
	name : "Knowledge of Materials",
	source : ["Talent Trees", 10],
	description : "I automatically recognize and know the rarity of woods, textiles, minerals, gems, and metals; I gain advantage on checks to recall information about them. I can also study a structure to determine its age and potential weak spots."
	};
FeatsList["talent.metallurgist"] = {
	name : "Metallurgist",
	source : ["Talent Trees", 10],
	description : "When striking an inanimate object or construct I may add my INT modifier to the damage. I can also create special acid to use against structures, stones, metals, and woods that I have studied."
	};
FeatsList["talent.naturecraft"] = {
	name : "Naturecraft",
	source : ["Talent Trees", 10],
	description : "You can use the tools of an herbalist for a variety of purposes. I can create herbalism kits. I can purify a portion of food or drink (per purify food and drink); I can increase the potency of a healing potion; I can create acid, sealing wax, or perfume."
	};

/*	Int.Religion	*/
FeatsList["talent.rites"] = {
	name : "Rites",
	source : ["Talent Trees", 11],
	description : "I learn and am able to cast the ceremony spell. Once I cast it, I must finish a long rest before I can cast it again.",
	spellcastingBonus : {
		name : "Rites",
		spellcastingability : 5,
		spells : ["Ceremony"],
		ritual : true,
		oncelr : true
		}
	};
FeatsList["talent.senseenchant"] = {
	name : "Sense Enchantment",
	source : ["Talent Trees", 11],
	description : "I can take 10 minutes to attune myself to the auras of creatures around me. I can discern if that creature is under the effect of a curse or enchantment of up to 3rd level (or my maximum spell slot level). I can also see the aura of magical or cursed items."
	};
FeatsList["talent.sacrament"] = {
	name : "Perform Sacrament",
	source : ["Talent Trees", 11],
	description : "I learn three cleric rituals of my choice of 2nd level or lower. I can cast these spells as rituals. My ceremonies now also include the following: Atonement; Bless Water; Funeral Rites.",
	spellcastingBonus : {
		name : "Sacraments",
		spellcastingAbility : 5,
		class : "cleric",
		level : [1,2],
		ritual : true,
		times : 3
		}
	};
FeatsList["talent.undeathlord.int"] = {
	name : "Lord of the Undeath [Int]",
	source : ["Talent Trees", 11],
	description : "My knowledge of the undead grants the following: I learn one necromancy spell of 1st level from any class. When touching or touched by undead, I may have it regain 1d6 hp.",
	spellcastingBonus : {
		name : "Lord of the Undeath",
		spellcastingAbility : 4,
		class : "any",
		level : [1,1],
		school : "Necro",
		times : 1,
		oncelr : true
		}
	};
FeatsList["talent.undeathlord.wis"] = {
	name : "Lord of the Undeath [Wis]",
	source : ["Talent Trees", 11],
	description : "My knowledge of the undead grants the following: I learn one necromancy spell of 1st level from any class. When touching or touched by undead, I may have it regain 1d6 hp.",
	spellcastingBonus : {
		name : "Lord of the Undeath",
		spellcastingAbility : 5,
		class : "any",
		level : [1,1],
		school : "Necro",
		times : 1,
		oncelr : true
		}
	};
FeatsList["talent.draintouch.int"] = {
	name : "Draining Touch [Int]",
	source : ["Talent Trees", 11],
	description : "I learn the chill touch cantrip. I have chosen Int as my spellcasting mod for this spell. When I attack with this cantrip, the creature's hit point maximum is reduced by the amount of damage that would have been done instead. This last until they take a long rest.",
	spellcastingBonus : {
		name : "Draining Touch",
		spellcastingability : 4,
		spells : ["chill touch"],
		atwill : true
		}
	};
FeatsList["talent.draintouch.wis"] = {
	name : "Draining Touch [Wis]",
	source : ["Talent Trees", 11],
	description : "I learn the chill touch cantrip. I have chosen Int as my spellcasting mod for this spell. When I attack with this cantrip, the creature's hit point maximum is reduced by the amount of damage that would have been done instead. This last until they take a long rest.",
	spellcastingBonus : {
		name : "Draining Touch",
		spellcastingability : 5,
		spells : ["chill touch"],
		atwill : true
		}
	};
FeatsList["talent.occultist"] = {
	name : "Occultist",
	source : ["Talent Trees", 11],
	description : "My knowledge of the gods and behaviors of cults grant me the following: I have advantage on Religion checks made to discern the information on cults. On success, I may add my Int modifier to Deception, Investigation and History checks regarding the cult or their patron."
	};
FeatsList["talent.alienbane"] = {
	name : "Alienbane",
	source : ["Talent Trees", 11],
	description : "After a minute of studying an undead, fey, fiend, or celestial I may make a Religion check. On success, I can determine the creature's skills, abilities, and if the creature is especially dangerous to my party. I also have enhanced damage against one of these types."
	};
FeatsList["talent.priest"] = {
	name : "Priest",
	source : ["Talent Trees", 11],
	description : "My study of Religion grants the following benefits: you learn the thaumaturgy cantrip, and may cast it as a bonus action; I learn the Prayer of Healing spell and can cast it at its lowest level once per long rest.",
	spellcastingBonus : {
		name : "Priest",
		spellcastingAbility : 4,
		spells : ["prayer of healing"],
		oncelr : true
		},
	action : ["bonus action", " (Thaumaturgy}"]
	};

/*	WISDOM SKILLS		*/

/*	Wis.AnimalHandling	*/
FeatsList["talent.trainanimal"] = {
	name : "Train Animal",
	source : ["Talent Trees", 12],
	descripton : "I gain the proficiency in the training of animals (per the current Train Animal rules in use)."
	};
FeatsList["talent.complexttrain"] = {
	name : "Complex Training",
	source : ["Talent Trees", 12],
	description : "I gain the ability to train animals with complex commands and roles (per the current Train Animals rules in use.}"
	};
FeatsList["talent.critterfriend"] = {
	name : "Critter Friend",
	source : ["Talent Trees", 12],
	description : "If I spend at least 1 minute observing or interacting with a beast, I may communicate simple ideas with the animal and understand its responses (such as 'Scary. Aggression. Predators.')"
	};
FeatsList["talent.mountedcombat"] = {
	name : "Mounted Combatant",
	source : ["Talent Trees", 12],
	description : "While mounted, I have advantage on melee weapon attacks and melee spell attacks against any unmounted target that is smaller than my mount. If my mount would is the target of an attack or spell, I may become the target instead."
	};
FeatsList["talent.onewithrider"] = {
	name : "One with the Rider",
	source : ["Talent Trees", 12],
	description : "When I, or an ally, casts a spell of 2nd level or lower that targets just me, I can choose also affect my mount. If my mount can save for half damage, it takes no damage on a success, and half damage on a failed save."
	};
FeatsList["talent.animalsavior"] = {
	name : "Animal Savior",
	source : ["Talent Trees", 12],
	description : "When I make a Heal or Medicine check to work on a beast, I can calm and soothe the animal under my care; I can add my Animal Handling skill to Heal/Medicine check. I also have advantage on checks to related to pacifying beasts."
	};
FeatsList["talent.bolsteranimal"] = {
	name : "Bolster Animal",
	source : ["Talent Trees", 12],
	description : "Animals grow strong after a time under my tender care. Whenever I spend an hour or more training with a friendly beast (can be during a rest) I can grant it temporary hp equal to thrice my Animal Handling. I can do this once per long rest.",
	usages : 1,
	recovery : "long rest"
	};
FeatsList["talent.animalpartner"] = {
	name : "Animal Partner",
	source : ["Talent Trees", 12],
	description : "I can give a trained animal commands as a bonus action. Additionally, I can select one beast that I have trained to be my partner. That beast increases their hit points by my Animal Handling skill. I can only have one animal partner at a time."
	};
	
/*	Wis.Insight	*/
FeatsList["talent.sharedinsight"] = {
	name : "Shared Insights",
	source : ["Talent Trees", 13],
	description : "When I use the Help action to aid an ally in attacking a creature, the target of that attack can be within 15 feet of me (or 40 feet if I am a Mastermind Rogue). The target must be able to see or hear me."
	};
FeatsList["talent.suspicious"] = {
	name : "Suspicious",
	source : ["Talent Trees", 13],
	description : "I cannot suffer disadvantage on Insight checks to discern if somebody is lying to me."
	};
FeatsList["talent.hearlies"] = {
	name : "Connoisseur of Lies",
	source : ["Talent Trees", 13],
	description : "If I determine that a creature is lying, I have advantage on Intelligence, Wisdom, and Charisma checks against the creature for one minute as long as I can see the creature's mouth and eyes."
	};
FeatsList["talent.disruptive"] = {
	name : "Disruptive",
	source : ["Talent Trees", 13],
	description : "When I damage a creature that is concentrating on a spell, that creature has disadvantage on the saving throw to maintain its concentration."
	};
FeatsList["talent.mageslayer"] = {
	name : "Mage Slayer",
	source : ["Talent Trees", 13],
	description : "I have advantage on saving throws against spells cast by creatures within 5 feet of me. Also, when a creature within 5 feet of me casts a spell, I can use my reaction to make a melee weapon attack against that creature.",
	action : ["reaction", " (melee attack)"]
	};
FeatsList["talent.combatinsight"] = {
	name : "Combat Insight",
	source : ["Talent Trees", 13],
	description : "I can predict and react to the movements of my opponents in combat. Creatures provoke opportunity attacks from me even they are using Disengage or another ability. When I hit a creature with an opportunity attack, their speed is reduced by half."
	};
FeatsList["talent.sentinel"] = {
	name : "Sentinel",
	source : ["Talent Trees", 13],
	description : "When I hit a creature with an opportunity attack, the creatures speed becomes 0 for the rest of the turn. When a creature within 5 feet of me makes an attack against a target other than me, I can use my reaction to make a melee weapon attack against them.",
	action : ["reaction", ""]
	};
FeatsList["talent.nextmove"] = {
	name : "Next Move",
	source : ["Talent Trees", 13],
	description : "When a creature I can see starts its turn, I can use my reaction to allow an ally to take an additional reaction this round. They must be able see or hear me. Class features of the ally may only use their original Reaction ability."
	};

/*	Wis.Medicine	*/
FeatsList["talent.medic"] = {
	name : "Medic",
	source : ["Talent Trees", 14],
	description : "I learn to use my medical supplies more efficiently, and package things tighter. Healer kits I possess have twice the number of usages. Additionally, when using a healer's kit to stabilize a creature, it wakes up in 1d4 rounds instead of 1d4 hours."
	};
FeatsList["talent.surgeon"] = {
	name : "Surgeon",
	source : ["Talent Trees", 14],
	description : "When I use a healer's kit to stabilize a creature, they also regain 1 hit point. I can use my bonus action to move half my speed towards an unstable, unconscious, or similarly affected creature.",
	action : ["reaction", ""]
	};
FeatsList["talent.healer"] = {
	name : "Healer",
	source : ["Talent Trees", 14],
	description : "As an action, I can spend one use of a healer's kit to tend to a creature and restore 1d6+4 hit points, plus hit points equal to the creature's maximum number of hit dice. That creature cannot regain hit points from this feature until they finishes a rest."
	};
FeatsList["talent.toxiturge"] = {
	name : "Toxiturge",
	source : ["Talent Trees", 14],
	description : "As an action with a healer's kit or poisoner's kit, I can check if a creature or liquid within 5 feet of me is poisoned or poisonous. I can attempt to remove poison from a poisonous creature or poisoned creature."
	};
FeatsList["talent.crippler"] = {
	name : "Crippler",
	source : ["Talent Trees", 14],
	description : "I can use my knowledge of the body in combat. When I score a critical strike I may choose one to apply to the target: become blind and deafened; reduce its speed to 0 and be unable to use reactions; increase the critical effect level by 1."
	};
FeatsList["talent.remedyinjury"] = {
	name : "Remedy Injury",
	source : ["Talent Trees", 14],
	description : "I can use my knowledge of medicine to treat minor conditions. As an action, I can use five charges of a healer's kit to remove one of the following conditions from a creature: blinded, deafened, or frightened."
	};
FeatsList["talent.fortifyingtreatment"] = {
	name : "Fortifying Treatment",
	source : ["Talent Trees", 14],
	description : "During a short rest I may choose one willing creature I can touch. When they spend hit dice to regain hit points during this rest, they regain the maximum number of hit points. I must expend a use of my healer's kit for each die maximized."
	};
FeatsList["talent.resuscitation"] = {
	name : "Resuscitation",
	source : ["Talent Trees", 14],
	description : "I may attempt to resuscitate a humanoid or beast that has died within the past minute. This attempt takes one hour of uninterrupted surgery. On success, the creature suffers from 3 levels of exhaustion, but is restored to 1 hit point (plus my Medicine skill if any."
	};

/*	Wis.Perception	*/
FeatsList["talent.acutesense"] = {
	name : "Acute Senses",
	source : ["Talent Trees", 15],
	description : "I can read text off of a book, scroll, or handwritten document as long as it is within a number of feet equal to my Passive Perception; I can overhear bits of lightly spoken, but not whispered, conversation as long as they within twice this distance."
	};
FeatsList["talent.aware"] = {
	name : "Aware",
	source : ["Talent Trees", 15],
	description : "Other creatures do not gain advantage on attack rolls against me as a result of being hidden from me."
	};
FeatsList["talent.alert"] = {
	name : "Alert",
	source : ["Talent Trees", 15],
	description : "I gain +4 to AP. I cannot be surprised while I am conscious."
	};
FeatsList["talent.observant"] = {
	name : "Observant",
	source : ["Talent Trees", 15],
	description : "I gain +4 bonus to my Passive Perception. If I can see a creature's mouth while it is speaking a language I understand, I can attempt to interpret what it is saying by reading its lips.",
	addMod : {type : "skill", field : "perception" , mod : +4  , text : "+4 from Observant" }
	};
FeatsList["talent.focused"] = {
	name : "Focused",
	source : ["Talent Trees", 15],
	description : "As a bonus action, I may enter a state of heightened focus (sustain 1 concentration). While focusing, when making a Dexterity save or Perception check, I may add a d4 to the result. I may not use this ability while blinded.",
	usages : "Wisdom modifier per ",
		usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
	recovery : "long rest"
	};
FeatsList["talent.lowlightvis"] = {
	name : "Low-Light Vision",
	source : ["Talent Trees", 15],
	description : "Dim light does not impose disadvantage on my Perception checks relying on sight. I gain blindsight out to a range of 5 feet.",
	vision : [["Darkvision", 5]]
	};
FeatsList["talent.tremortouch"] = {
	name : "Tremortouch",
	source : ["Talent Trees", 15],
	description : "As an action, I can touch a surface and attempt to discern the locations of moving creatures from the vibrations that I feel. I gain 15ft of Tremorsense (which stacks with other Tremorsense I may have (sustain 1)"
	};
FeatsList["talent.vigilant"] = {
	name : "Vigilant",
	source : ["Talent Trees", 15],
	description : "I am in tune with my surroundings. I have advantage on saving throws against being blinded or deafened. As a bonus action, I can focus my attention on a creature of my choice that I can see within 120 feet. That creature cannot be hidden from me (sustain 1)",
	usages : "Wisdom modifier per ",
		usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
	recovery : "long rest",
	action : ["bonus action", " (focus)"]
	};

/*	Wis.Survival	*/
FeatsList["talent.naturetools"] = {
	name : "Tools from Nature",
	source : ["Talent Trees", 16],
	description : "I can start fires, craft shelters, cook food, and perform similar mundane household tasks without requiring tools by using foraged items. As part of a short rest, I can harvest bone and hide from slain beasts, constructs and monstrosities."
	};
FeatsList["talent.survivalist"] = {
	name : "Survivalist",
	source : ["Talent Trees", 16],
	description : "I can make fires, craft shelters, cook food, etc. without having to make a survival check. Additionally, choose one type of terrain. While traveling an hour or more in my favored terrain, difficult terrain does not slow my group's travel."
	};
FeatsList["talent.fortify"] = {
	name : "Fortify",
	source : ["Talent Trees", 16],
	description : "When making temporary modifications to a campsite, battlefield, or other area, I may add my proficiency bonus to checks related to constructing barriers or similar works."
	};
FeatsList["talent.trapper"] = {
	name : "Trapper",
	source : ["Talent Trees", 16],
	description : "I gain proficiency with Tinkerer's Tools. I can increase the escape DC of hunting traps I place by my proficiency bonus. I can cast snare as a non-magical effect once per short rest.",
	usages : 1,
	recovery : "short rest"
	};
FeatsList["talent.dungeoneer"] = {
	name : "Dungeoneer",
	source : ["Talent Trees", 16],
	description : "I have advantage on Perception and Investigation checks made to detect the presence of secret doors and traps. I can also search for traps while traveling at a normal pace, instead of only at a slow pace."
	};
FeatsList["talent.weatheredtracker"] = {
	name : "Weathered Tracker",
	source : ["Talent Trees", 16],
	description : "I gain advantage on checks to discern the species of a creature based on its tracks. I ignore the adverse effects of harsh weather."
	};
FeatsList["talent.camouflage"] = {
	name : "Camouflage",
	source : ["Talent Trees", 16],
	description : "If you are outdoors or in a natural environment, I may spend 10 minutes to create camouflage for the local natural area I am in I am in (1 minute if I have a disguise kit). In camouflage I have advantage on stealth checks and when hiding in the chosen terrain."
	};
FeatsList["talent.survivor"] = {
	name : "Survivor",
	source : ["Talent Trees", 16],
	description : "I am a master of survival. I gain a bonus to stay conscious due to hit point loss equal to my skill. If I succeed on a consciousness check, I regain 1 hit point and do not have to make an additional check as long as I do not take damage or exert myself."
	};

/*	CHARISMA TALENTS	*/

/*	Cha.Deception	*/
FeatsList["talent.heartchanger"] = {
	name : "Change of Heart",
	source : ["Talent Trees", 17],
	description : "I learn how to make use of the creatures dropping their guard. For one minute after successfully deceiving someone, I gain +3 to initiative if that creature is participating in the combat as an opponent."
	};
FeatsList["talent.actor"] = {
	name : "Actor",
	source : ["Talent Trees", 17],
	description : "I have advantage on Deception and Performance checks when trying to pass myself off as a different person. I can mimic the exact words and voice of a person I have listened to, or the vocalizations of an animal that I have heard."
	};
FeatsList["talent.ventriloquist"] = {
	name : "Ventriloquist",
	source : ["Talent Trees", 17],
	description : "I can cause my voice to emit from a a point up to 15 feet away. If a creature is within 30 feet, I can give the impression that sounds I make originate from that creature."
	};
FeatsList["talent.fakeitmakeit"] = {
	name : "Fake It 'til you Make It",
	source : ["Talent Trees", 17],
	description : "When attempting to make a check for a task or skill in which I lack proficiency, I may instead use Deception instead of the original skill. I am at forced disadvantage on this check. This does not alter the original attribute that is used.",
	usages : 2,
	recovery : "long rest"
	};
FeatsList["talent.apparentcomp"] = {
	name : "Apparent Competence",
	source : ["Talent Trees", 17],
	description : "When attempting to don armor I am not proficient with, I ignore the disadvantage imposed by doing so. When wielding a weapon that I am not proficient in, I may add half of my melee proficiency bonus to my attack. This effect lasts for one hour.",
	usages : 1,
	recovery : "long rest"
	};
FeatsList["talent.ravelweb"] = {
	name : "Ravel the Web",
	source : ["Talent Trees", 17],
	description : "When I lie or mislead a creature but fail my Deception check, if that check was not made at disadvantage, I can attempt to do so again at disadvantage and must take the new result."
	};
FeatsList["talent.lairsliar"] = {
	name : "Liar's Liar",
	source : ["Talent Trees", 17],
	description : "I can add my Deception bonus to my Insight checks, and I gain advantage, to checks to determine if someone is lying or attempting to pass themselves as a different person."
	};
FeatsList["talent.hearttreachery"] = {
	name : "Heart of Treachey",
	source : ["Talent Trees", 17],
	description : "I have advantage on saving throws against being Charmed. I am also immune to spells that would determine if I am telling the truth or compel me to do so. These spells do not alert the caster when they fail on me."
	};
	
/*	Cha.Intimidation	*/
FeatsList["talent.imposting"] = {
	name : "Imposing",
	source : ["Talent Trees", 18],
	description : "When I am in the presence of the creature I am intimidating, I may use Strength instead of Charisma for Intimidation checks."
	};
FeatsList["talent.threatening"] = {
	name : "Threatending Presence",
	source : ["Talent Trees", 18],
	description : "Spaces within 10 feet of me are considered difficult terrain for creatures that are not immune to being frightened. I can choose any number of creatures within range to ignore this effect (friendly targets, for example)."
	};
FeatsList["talent.disrupthostile"] = {
	name : "Disrupting Hostility",
	source : ["Talent Trees", 18],
	description : "If a hostile creature is within 10 of me, it has disadvantage on its ranged attack rolls and skill checks that rely on Intelligence, Wisdom, or Charisma."
	};
FeatsList["talent.creativethreat"] = {
	name : "Creative Threat",
	source : ["Talent Trees", 18],
	description : "I specialize in creative intimidation. I can use a skill I am proficient in to add half my skill levels towards my Intimidation attempt. I must describe its appropriate use."
	};
FeatsList["talent.interrogator"] = {
	name : "Interrogator",
	source : ["Talent Trees", 18],
	description : "After I succeed on an Intimidation check against a creature, my allies and I have advantage on Insight, Persuasion, and Deception checks against the creature."
	};
FeatsList["talent.punisher"] = {
	name : "Punisher",
	source : ["Talent Trees", 18],
	description : "After damaging a creature on my turn, I have advantage on Intimidation checks against it (sustain 1)."
	};
FeatsList["talent.brutal"] = {
	name : "Brutal",
	source : ["Talent Trees", 18],
	description : "When I fell an enemy, I can use my reaction to attempt to frighten nearby creatures. I make an Intimidation check against all hostile creatures within 10 feet of the enemy. I must perform a long rest to use this ability again.",
	usages : 1,
	recovery : "long rest"
	};	
FeatsList["talent.fearless"] = {
	name : "Fearless",
	source : ["Talent Trees", 18],
	description : "I am immune to being Frightened. When a creature attempts to frighten me, I gain advantage on my next attack against it."
	};
	
/*	Cha.Performance		*/
FeatsList["talent.entertaining"] = {
	name : "Entertaining",
	source : ["Talent Trees", 19],
	description : "I gain proficiency in any combination of three musical instruments or game sets of my choice.",
	toolProfs : ["Musical Instruments or Game Sets", 3]
	};
FeatsList["talent.performer"] = {
	name : "Performer",
	source : ["Talent Trees", 19],
	description : "I gain proficiency with Disguise Kits and have gain proficiency with Craft: Disguise. I gain mastery with Craft: Disguise, instead, if I was already proficient. Also, I learn a language of my choice",
	languageProfs : [1, "from Performer"],
	toolProfs : ["Disguise Kit", "Cha"]
	};
FeatsList["talent.specialtyact"] = {
	name : "Specialty Acts",
	source : ["Talent Trees", 19],
	description : "I gain mastery in any two of the following: Acrobatics, Animal Handling, Deception, Athletics, Sleight of Hand."
	};
FeatsList["talent.theatrics"] = {
	name : "Theatrics",
	source : ["Talent Trees", 19],
	description : "When I take the Help action to ad an ally by distracting an enemy, I may also choose to distract any number of additional creatures within 5 feet of me; this gives the chosen ally advantage against all affected creatures."
	};
FeatsList["talent.stagefight"] = {
	name : "Stage Fighting",
	source : ["Talent Trees", 19],
	description : "I gain proficiency with rapiers, sickles, scimitars, tridents, daggers, and darts. I may use Cha in place of Str or Dex for these weapons for my attack rolls. When I score a critical hit with I can use Help as a reaction.",
	/* need to add weapons as profs here */
	/* need to add Cha attack bonus option here */
	action : ["reaction", " ('Help' with critical)"]
	};
FeatsList["talent.oration"] = {
	name : "Orator",
	source : ["Talent Trees", 19],
	description : "When I perform for creatures for at least 10 minutes and my unmodified roll is greater than a creatures Int, Wis, or Cha (whichever is higher), I gain advantage on all other Cha checks against those creatures for 10 minutes."
	};
FeatsList["talent.leadership"] = {
	name : "Leadership",
	source : ["Talent Trees", 19],
	description : "I can spend 10 minutes inspiring my companions. When I do, I choose a number of creatures equal to my Cha mod (plus two) within 30'. Each gains temporarily hit points equal to my level + my cha mod."
	};
FeatsList["talent.famous"] = {
	name : "Famous",
	source : ["Talent Trees", 19],
	description : "I have learned to preform certain legendary chants, music, or shanties. Once per short rest, as an action, I can perform this song affecting all creatures of my choice within 20 feet of me. (See Feat Description).",
	usages : 1,
	recovery : "short rest"
	};

/*	Cha.Persuasion		*/
FeatsList["talent.inspiring"] = {
	name : "Inspiring Word",
	source : ["Talent Trees", 20],
	description : "As an action, I can call out to a creature that can hear me that is within 10 feet of me and cast the guidance spell targeting the creature. I can do this a number of times per long rest equal to my Cha modifier.",
	spellcastingBonus : {
		name : "Inspiring Word",
		spellcastingAbility : 6,
		spells : ["guidance"],
		prepared : true
		},
	usages : "Charisma modifier per ",
		usagescalc : "event.value = Math.max(1, What('Cha Mod'));",
	recovery : "long rest"
	};
FeatsList["talent.truthvoice"] = {
	name : "Voice of Truth",
	source : ["Talent Trees", 20],
	description : "I have advantage on Persuasion checks where the goal is to convince someone of what I believe to be an objective truth (such as convincing someone that the local ruler is dead after visiting their burial."
	};
FeatsList["talent.charmer"] = {
	name : "Charmer",
	source : ["Talent Trees", 20],
	description : "If I am able to interact with a creature that can understand me for 10 minutes, I may attempt a Persuasion check contested by their Insight. If they fail, they are charmed by me for a number of minutes equal to my Cha score."
	};
FeatsList["talent.inspirecommand"] = {
	name : "Inspirational Commander",
	source : ["Talent Trees", 20],
	description : "Whenever I use the Help action, the targeted ally can add half my proficiency bonus to a non-skill action, or half my skill ranks to a skill action. I may use this action a number of times equal to my Charisma modifier per long rest.",
	usages : "Charisma modifier per ",
		usagescalc : "event.value = Math.max(1, What('Cha Mod'));",
	recovery : "long rest"
	};
FeatsList["talent.agimediator"] = {
	name : "Mediator/Agitator",
	source : ["Talent Trees", 20],
	description : "I have mastered the art of mitigating conflict among thinking creatures. See talent description. I must perform a long rest to use this feature again.",
	usages : 1,
	recovery : "long rest"
	};
FeatsList["talent.leadexample"] = {
	name : "Leading by Example",
	source : ["Talent Trees", 20],
	descripton : "When I first perform an action as a demonstration, I have advantage on Persuasion checks to convince others to follow suit."
	};
FeatsList["talent.followsuit"] = {
	name : "Following Suit",
	source : ["Talent Trees", 20],
	description : "Once per long rest, when I use Lead by Example, I can aid each creature in their attempts. As a bonus action, I may choose a number of creatures equal to my Charisma modifier and within 30'; they gain advantage on associated checks.",
	usages : 1,
	recovery : "long rest"
	};
FeatsList["talent.silvertongue"] = {
	name : "Silver Tongue",
	source : ["Talent Trees", 20],
	description : "My silver tongue grants me impressive power of character. Once per long rest I may use the suggestion spell as a non-magical effect with a duration of hours equal to my Charisma modifier (minimum of 1).",
	usages : 1,
	recovery : "long rest"
	};
	
/*	SPECIALTY TREES		*/

/*	Specialty.defense	*/
FeatsList["talent.armortraining"] = {
	name : "Armor Training",
	source : ["Talent Trees", 21],
	description : "I gain proficiency with armor, or improve my existing armor training. If I am not proficient with armor, I gain proficiency with light armor. If I am proficient with armor, I gain proficiency in the next armor rank."
	/* Armor : [true, true, true, true], */
	/* have to learn how to check for armor prof and increase by one */
	};
FeatsList["talent.featherlight"] = {
	name : "Light as a Feather",
	source : ["Talent Trees", 21],
	description : "While wearing no armor or only light armor, when an enemy hits me with a melee attack, I can use my reaction to prepare myself to disengage. My movement does not invoke attacks of opportunity. (sustain 1)",
	action : ["reaction", " (Disengaging Movement after being hit)"]
	};
FeatsList["talent.manypocket"] = {
	name : "Many Pockets",
	source : ["Talent Trees", 21],
	description : "I am able to hide a small number of small objects in crevices, pockets, or elsewhere on my person. 	If I am wearing clothing or light armor I can store up to 10 tiny items weight 1 lb. or less in my armor."
	};
FeatsList["talent.wearefficiency"] = {
	name : "Efficient Wearing",
	source : ["Talent Trees", 21],
	description : "Wearing medium armor does not impose disadvantage on my Stealth checks."
	/* is there a way to check for stealth disadvantages on medium armor and remove it? */
	};
FeatsList["talent.armormedmastery"] = {
	name : "Medium Armor Master",
	source : ["Talent Trees", 21],
	description : "If I am wearing medium armor, I may double my AC bonus from Dexterity"
	/* there has GOT to be a way to add to AC!! */
	};
FeatsList["talent.armorshieldbash"] = {
	name : "Shield Bash (Armor)",
	source : ["Talent Trees", 21],
	description : "If I take the Attack action on my turn, I can use a bonus action to try and shove a creature within 5 feet of my with my shield.",
	action : ["bonus action", " (with an Attack)"]
	};
FeatsList["talent.armorshieldmaster"] = {
	name : "Shield Master",
	source : ["Talent Trees", 21],
	description : "If I am not incapacitated, I can add my shield's AC bonus to any Dexterity saving throw I make against an effect that targets only me. Additionally, if I am saving to take half damage, I can use my reaction to take no damage if I succeed."
	};
FeatsList["talent.standingbuild"] = {
	name : "Built to Stand",
	source : ["Talent Trees", 21],
	description : "When I am wearing heavy armor, I have advantage on all checks that would knock me prone or push me. Additionally my speed is not reduced by wearing heavy armor, regardless of the Strength requirement."
	};
FeatsList["talent.armorheavymaster"] = {
	name : "Heavy Armor Master",
	source : ["Talent Trees", 21],
	description : "While I am wearing heavy armor, I gain DR vs. non-magical bludgeoning, piercing, and slashing damage. My DR is equal to the number of skill ranks I have in Heavy Armor mastery."
	};
FeatsList["talent.protected"] = {
	name : "Protected",
	source : ["Talent Trees", 21],
	description : "I have experience in wearing and managing different armor. See talent description."
	};

/*	Specialty.warcasting	*/
FeatsList["talent.warcaster-bard"] = {
	name : "Warcaster [Bard]",
	source : ["Talent Trees", 22],
	description : "Choose a class: bard, cleric, druid, sorcerer, warlock, or wizard. I learn two cantrips of your choice from that class's spell list. My spellcasting ability or the chosen cantrip is the same as that of the chosen class.",
	spellcastingBonus : {
		name : "Apprentice [Bard]",
		speallcastingAbility : 6,
		class : "bard",
		level : [0, 0],
		times : 2,
		atwill : true
		}
	};
FeatsList["talent.warcaster-cleric"] = {
	name : "Warcaster [Cleric]",
	source : ["Talent Trees", 22],
	description : "Choose a class: bard, cleric, druid, sorcerer, warlock, or wizard. I learn two cantrips of your choice from that class's spell list. My spellcasting ability or the chosen cantrip is the same as that of the chosen class.",
	spellcastingBonus : {
		name : "Apprentice [Cleric]",
		speallcastingAbility : 5,
		class : "cleric",
		level : [0, 0],
		times : 2,
		atwill : true
		}
	};
FeatsList["talent.warcaster-druid"] = {
	name : "Warcaster [Druid]",
	source : ["Talent Trees", 22],
	description : "Choose a class: bard, cleric, druid, sorcerer, warlock, or wizard. I learn two cantrips of your choice from that class's spell list. My spellcasting ability or the chosen cantrip is the same as that of the chosen class.",
	spellcastingBonus : {
		name : "Apprentice [Druid]",
		speallcastingAbility : 5,
		class : "druid",
		level : [0, 0],
		times : 2,
		atwill : true
		}
	};
FeatsList["talent.warcaster-sorcerer"] = {
	name : "Warcaster [Sorcerer]",
	source : ["Talent Trees", 22],
	description : "Choose a class: bard, cleric, druid, sorcerer, warlock, or wizard. I learn two cantrips of your choice from that class's spell list. My spellcasting ability or the chosen cantrip is the same as that of the chosen class.",
	spellcastingBonus : {
		name : "Apprentice [Sorcerer]",
		speallcastingAbility : 6,
		class : "sorcerer",
		level : [0, 0],
		times : 2,
		atwill : true
		}
	};
FeatsList["talent.warcaster-warlock"] = {
	name : "Warcaster [Warlock]",
	source : ["Talent Trees", 22],
	description : "Choose a class: bard, cleric, druid, sorcerer, warlock, or wizard. I learn two cantrips of your choice from that class's spell list. My spellcasting ability or the chosen cantrip is the same as that of the chosen class.",
	spellcastingBonus : {
		name : "Apprentice [Warlock]",
		speallcastingAbility : 6,
		class : "warlock",
		level : [0, 0],
		times : 2,
		atwill : true
		}
	};
FeatsList["talent.warcaster-wizard"] = {
	name : "Warcaster [Wizard]",
	source : ["Talent Trees", 22],
	description : "Choose a class: bard, cleric, druid, sorcerer, warlock, or wizard. I learn two cantrips of your choice from that class's spell list. My spellcasting ability or the chosen cantrip is the same as that of the chosen class.",
	spellcastingBonus : {
		name : "Apprentice [Wizard]",
		speallcastingAbility : 4,
		class : "wizard",
		level : [0, 0],
		times : 2,
		atwill : true
		}
	};
FeatsList["talent.elementalisti"] = {
	name : "Elemental Specialist",
	source : ["Talent Trees", 22],
	description : "Choose an damage type (acid, cold, fire, lightning, necrotic, poison, radiant, thunder). Spells I cast ignore resistance of the chosen type (up to my level in resistance)."
	};
FeatsList["talent.potentelementalist"] = {
	name : "Potent Specialty",
	source : ["Talent Trees", 22],
	description : "When I roll a 1 on a damage die for a spell that deals one or more types of damage that I have chosen with Damage Specialist, I can reroll the die once and use that result."
	};
FeatsList["talent.spellsnipe"] = {
	name : "Spell Sniper",
	source : ["Talent Trees", 22],
	description : "When I cast a spell that requires me to make an attack roll, the spell's range is doubled. My ranged spell attacks ignore half cover, and treat three-quarters cover as half cover."
	};
FeatsList["talent.spellmaster"] = {
	name : "Spell Mastery",
	source : ["Talent Trees", 22],
	description : "Being within 5 feet of a hostile creature does not impose disadvantage of my ranged spell attack rolls. I can increase the area of my spells by 5 feet, and the range by double. I always do at least damage equal to my spellcasting modifier to creatures in my areas of effect."
	};
FeatsList["talent.halfhanded"] = {
	name : "Half-Hand Casting",
	source : ["Talent Trees", 22],
	description : "I can perform the somatic components of spells even when I have weapons or a shield in one or both hands."
	};
FeatsList["talent.martialcast"] = {
	name : "Martial Casting",
	source : ["Talent Trees", 22],
	description : "I have advantage on saves to maintain concentration on spells when I take damage. Additionally, when a creature invokes an attack of opportunity from me, I can cast a spell at it instead. The spell must have a casting time of 1 action (or faster) and only target that creature.",
	action : ["reaction", " (Opportunity Attack)"]
	};
FeatsList["talent.warmage"] = {
	name : "Warmage",
	source : ["Talent Trees", 22],
	description : "I gain a bonus to spell attack rolls equal to the magic bonus of a magical weapon I am wielding. I can cast spells without using the material component if it is less than 50gp and not consumed. I may also teleport a missile or thrown weapon back to my free hand."
	};

/*	Specialty.rangedwarfare	*/
FeatsList["talent.rangedtraining"] = {
	name : "Ranged Training",
	source : ["Talent Trees", 23],
	description : "I gain proficiency with two simple or martial ranged weapons (or one exotic ranged weapon). I may substitute a weapon with the thrown property, but only learn it as a thrown weapon. I cannot use this talent to gain specialty with a weapon."
	};
FeatsList["talent.closequarterranged"] = {
	name : "Close Quarter Shooter",
	source : ["Talent Trees", 23],
	descriptoin : "I have extensive training in using ranged weapons in tight spaces. Being within 5' of a hostile creature does not impose disadvantage on my ranged attack rolls. I have advantage if I attack a prone creature within 5 feet of me with a ranged weapon attack."
	};
FeatsList["talent.quickshot"] = {
	name : "Quick Shot",
	source : ["Talent Trees", 23],
	description : "I am able to prepare missiles quickly. I ignore the loading property of ranged weapons I use. When I use the attack action and attack with a one handed weapon, I can use a bonus action to make an attack with a one-handed ranged weapon or throw a weapon I am holding in the other hand.",
	action : ["bonus action", " (with a 1h melee attack)"]
	};
FeatsList["talent.powershot"] = {
	name : "Power Shot",
	source : ["Talent Trees", 23],
	description : "I have trained to overcome obstacles and capitalize on my upper body strength. My ranged and thrown weapon attacks ignore half cover and three-quarters cover. I can use Str instead of Dex for attack and damage rolls with shortbows and longbows."
	};
FeatsList["talent.sharpshooter"] = {
	name : "Sharpshooter",
	source : ["Talent Trees", 23],
	description : "My missiles invariably find their target. Attacking at long range does not impose disadvantage. Before I make an attack, I may forgo my proficiency bonus to attack. It becomes a bonus to damage. I am not at disadvantage for a called shot, but still take the penalty to hit."
	};
FeatsList["talent.slinger"] = {
	name : "Slinger",
	source : ["Talent Trees", 23],
	description : "My experience with thrown weapons allows me greater efficiency with them. Weapons with the thrown property are treated as ammunition for the purpose of drawing them. Attacking with them at long range is not disadvantage. Class features and spells consider thrown weapons as ranged."
	};
FeatsList["talent.lobber"] = {
	name : "Lobber",
	source : ["Talent Trees", 23],
	descriptoin : "I have learned to throw unwieldily weapons. All light weapons get a range of 20/60. Weapons that are neither light nor heavy have a range of 15/40. Heavy weapons have a range of 10/30. I have proficiency with Improvised Weapons (Thrown). Weapons weighing less than my Str mod have finesse."
	};
	
FeatsList["talent.deadshot"] = {
	name : "Deadshot",
	source : ["Talent Trees", 23],
	descripton : "When I score a critical strike with a ranged or thrown weapon it causes a grave wound. The target gains bleeding equal to attacks non-critical damage."
	};


/*	Specialty.meleewarfare	*/
FeatsList["talent.meleetraining"] = {
	name : "Melee Training",
	source : ["Talent Trees", 24],
	description : "I gain proficiency with two simple or martial melee weapons (or one exotic melee weapon). I cannot use this talent to gain specialty with a weapon."
	};
FeatsList["talent.fencingxpert"] = {
	name : "Fencing Expert",
	source : ["Talent Trees", 24],
	description : "I have to be more agile and free in my movements when using a one handed weapon. I gain +1 bonus to AC when wielding a one-handed weapon. I can draw or stow a on-handed weapon as part of an Attack action."
	/* There is a calculation to add +1 to AC if wielding a 1h weapon; I need to find it and add it here */
	};
FeatsList["talent.fencingmaster"] = {
	name : "Fencing Master",
	source : ["Talent Trees", 24],
	description : "When I am wielding a melee weapon with which I am proficient in one hand, and nothing in the other; when a melee attack hits me, I may use my reaction to increase my AC by my melee proficiency bonus, which may cause the attack to miss.",
	action : ["reaction", " (add Melee Prof to AC"]
	};
FeatsList["talent.dual-wieldingxpert"] = {
	name : "Dual-Wielding Expert",
	source : ["Talent Trees", 24],
	description : "I can use two-weapon fighting even when one of the weapons is not light. I can draw or stow two one-handed weapons when I would normally be able to draw or stow only one."
	};
FeatsList["talent.dual-weildingmaster"] = {
	name : "Dual-Wielding Master",
	source : ["Talent Trees", 24],
	description : "When fighting with two weapons I gain the following benefits: I gain +1 to AC while I am dual-wielding. When an attack of opportunity misses me, I can make an attack of opportunity against that target as a reaction",
	action : ["reaction", " (when an AoO misses me)"]
	}
FeatsList["talent.greatweaponxpert"] = {
	name : "Great Weapon Expert",
	source : ["Talent Trees", 24],
	description : "On my turn, when I score a critical hit with a heavy weapon, or fell a creature, I can make another melee attack as a bonus action.",
	action : ["bonus action", " (when I fell a creature or score a critical}"]
	};
FeatsList["talent.greatweaponmaster"] = {
	name : "Great Weapon Master",
	source : ["Talent Trees", 24],
	description : "Whenever I make a melee attack with a heavy weapon, I can choose to forgo my proficiency bonus to hit. If I hit, I score additional damage equal to double my proficiency bonus."
	};
FeatsList["talent.rendingstrike"] = {
	name : "Rending Strike",
	source : ["Talent Trees", 24],
	description : "As a bonus action, I can prepare my weapon to pierce my target's defenses. I can make a special melee attack with a melee weapon. The target must save (DC: 8+Str/Dex+Prof). If it fails, it takes damage as if it had been hit with a normal attack.",
	action : ["bonus action", ""]
	};

/*	Specialty.weapons.polearms-restraining-blunt-cleaving	*/
FeatsList["talent.poleweaponxpert"] = {
	name : "Pole Weapon Expert",
	source : ["Talent Trees", 25],
	description : "During an attack I can use a bonus action to attack with the bunt of the weapon for 1d4 bludgeon. If I move 20' or more in a straight line before my attack, I deal an additional 1d4 damage.",
	action : ["bonus action", " (Pole Attack}"]
	};
FeatsList["talent.poleweaponmaster"] = {
	name : "Pole Weapon Mastery",
	source : ["Talent Trees", 25],
	description : "When wielding a pole arm, I have reach appropriate to my weapon. If I move 20 feet or more in a straight line before an attack, if I hit I may push the target up to 10' if I hit;I may use a bonus action to Shove the target on a miss.",
	action : ["bonus action", " (Shove after 20' movement)"]
	};
FeatsList["talent.restrainingxpert"] = {
	name : "Restraining Weapon Expertise",
	source : ["Talent Trees", 25],
	description : "I do not need a free hand to grapple while I am wielding a trident, war pick, or sickle. The damage of all tridents I wield increases to 1d8 piercing (1d10 versatile)."
	/* I need the code to have the sheet recognize tridents and increase the damage natively */
	};
FeatsList["talent.restrainingmaster"] = {
	name : "Restraining Weapon Mastery",
	source : ["Talent Trees", 25],
	description : "When I hit a creature with a trident, war pick, or sickle, I can use a bonus action to attempt to grapple the creature if it is no more than one size larger than I.",
	action : ["bonus action", " (Grapple after hitting)"]
	};
FeatsList["talent.bluntexpert"] = {
	name : "Blunt Weapon Expertise",
	source : ["Talent Trees", 25],
	description : "Using the Attack action, I can make a special melee attack to daze a creature. The target must make a Con save against DC 8+Str mod+prof bonus. If you would have hit the creature, the save is a disadvantage. On a fail, the target is stunned and cannot take reactions (unsustain 1)",
	action : ["action", " (Daze Attack)"]
	};
FeatsList["talent.bluntmaster"] = {
	name : "Blunt Weapon Mastery",
	source : ["Talent Trees", 25],
	descriptoin : "Once per attack, whenever I hit with a blunt weapon, I can knock the target back 5 feet if the target is no more than one size larger than me. Whenever I hit a creature with a blunt weapon, I may use a Bonus Action to Shove the creature.",
	action : ["bonus action", " (Shove after hit}"]
	};
FeatsList["talent.cleavexpert"] = {
	name : "Cleaving Weapon Expertise",
	source : ["Talent Trees", 25],
	description : "When attacking with a longsword, battleaxe, greatsword, or greataxe, I may use the heft of my weapon to rebuff up to two adjacent creatures. I make a single roll against those creatures; if I hit, I push it up to 10 feet away from me."
	};
FeatsList["talent.cleavemaster"] = {
	name : "Cleaving Weapon Mastery",
	source : ["Talent Trees", 25],
	description : "When I attack with a longsword, battleaxe, greatsword, or greataxe, I may choose to target two creatures within 5' of each other and within my reach. This attack uses the same attack and damage roll for both targets; the damage dealt in this way is halved."
	};

/*	Specialty.weapons.flexible.skirmishing.archiac	*/
FeatsList["talent.flexibleexpert"] = {
	name : "Flexible Weapon Expertise",
	source : ["Talent Trees", 26],
	description : "As a bonus action on my turn, I may prepare to extend my flail to sweep over shields. I gain +2 to attack against any target using a shield (sustain 1); whips I wield gain the Light property and, as an action, can pull objects weighing 5 pounds are less. I can catch it if I have a free hand.",
	action : ["bonus action", " (Extend Flail)"],
	action : ["action", " (Pull Object with Whip)"]
	};
FeatsList["talent.flexiblemaster"] = {
	name : "Flexible Weapon Mastery",
	source : ["Talent Trees", 26],
	description : "When I hit with an opportunity attack using a flail or whip, my target must make a Str save (DC: 8+my atk bonus) or be knocked prone. When I have advantage on a melee attack and hit I can knock a weapon or another object from the targets grasp if the lower number would also hit."
	};
FeatsList["talent.skirmishxpert"] = {
	name : "Skirmishing Weapon Expertise",
	source : ["Talent Trees", 26],
	description : "When wielding a dagger, handaxe, or light hammer, if a creature misses with their Attack of Opportunity, I can use my Reaction to make a melee attack against it.",
	action : ["reaction", " (on missed AoO"]
	};
FeatsList["talent.skirmishmaster"] = {
	name : "Skirmishing Weapon Mastery",
	source : ["Talent Trees", 26],
	description : "When I attack with a dagger, handaxe, or a light hammer and miss, I can use a bonus action to make another melee attack. When I hit a creature with a melee attack, I can Shift 1 as part of the attack.",
	action : ["bonus action", " (on a missed skirmish attack"]
	};
FeatsList["talent.archaicxpert"] = {
	name : "Archaic Weapon Expertise",
	source : ["Talent Trees", 26],
	description : "I may use Str with a sling.. On a sling critical hit, the target cannot take reactions (unsustain 1); being within 5 feet of a enemy does not impose disadvantage when using a net. The escape DC for a net is increased by my prof bonus. Blowguns may use Con, and I ignore loading with them."
	};
FeatsList["talent.archaicmaster"] = {
	name : "Archaic Weapon Master",
	source : ["Talent Trees", 26],
	description : "Once per turn I may target two adjacent creatures when using a sling. After attacking with a net, I may use a bonus action to make a melee attack with my other hand. When using a poisoned blowgun/dart, I may take -5 to my hit. If successful, save vs the poison is Disadvantaged.",
	action : ["bonus action", " (off-hand attack with net hit)"]
	};

/*	Specialty.adventuring	*/
FeatsList["talent.jackoftrades"] = {
	name : "Jack of Trades",
	source : ["Talent Trees", 27],
	description : "I gain proficiency with 3 tools or musical instruments of my choice.",
	toolProfs : ["Tool or Musical Instrument", 3]
	};
FeatsList["talent.hardy"] = {
	name : "Hardy",
	source : ["Talent Trees", 27],
	description : "My hit point maximum increases by an amount equal to my level. Whenever I gain a level thereafter, my hit point maximum increases by one additional hit point."
	};
FeatsList["talent.tough"] = {
	name : "Tough",
	source : ["Talent Trees", 27],
	description : "My hit point maximum increases further by an amount equal to my level and whenever I gain a level my hit point maximum increases by another one additional hit point."
	};
FeatsList["talent.favored"] = {
	name : "Favored",
	source : ["Talent Trees", 27],
	descriptions : "I have 1 Luck Point. When I make an attack, check, or save, I can spend one luck point to roll an additional d20. I may chose to spend my luck point after I roll the die, but before the result is known. I choose which die to use. I can also replace an attackers roll with mine, instead.",
	usages : 1,
	recovery : "long rest"
	};
FeatsList["talent.lucky"] = {
	source : ["Talent Trees", 27],
	description : "I have 3 Luck Points. When I make an attack, check, or save, I can spend one luck point to roll an additional d20. I may chose to spend my luck point after I roll the die, but before the result is known. I choose which die to use. I can also replace an attackers roll with mine, instead.",
	usages : 3,
	recovery : "long rest"
	};
