/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any character information. This should be added after the Custom Code.
	
*/

/*	-INFORMATION-
	Subject: Subclass / Archetype
	Effect:	This script adds a subclass for the Paladin called "Oath of Freedom"
		The Oath of Freedom is the default Oath for Paladins of Gaetor
		This is made for the Points of Light homebrew campaign.
	Code By:	Ouronos
	Date:		2019.04.15 (sheet v. 12.999 custom)
*/

var iFileName = "Paladin - Oath of Freedom.js"; /*Paladin of Gaetor*/
RequiredSheetVersion(12.999);

SourceList["Ouron:OaFree"] = {
	name : "Points of Light: Oath of Freedom",
	abbreviation : "PoL:OaFree",
	group : "Points of Light",
	date : "2019/04/15"
};

AddSubClass("paladin", "freedomer", {
	regExpSearch : /^(?=.*freedom)(((?=.*paladin)|((?=.*(exalted|sacred|holy|divine))(?=.*(knight|fighter|warrior|warlord|trooper))))).*$/i,
	subname : "Oath of Freedom",
	source : ["Ouron:OaFree", 1],
	spellcastingExtra : ["longstrider", "absorb elements", "knock", "zone of truth", "beacon of hope", "fly", "freedom of movement", "divination", "steel wind strike", "commune", "greater restoration"],
	features : {
		"subclassfeature1" : {
			name : "Unencumbered Movement",
			source : ["Ouron:OaFree", 1],
			minlevel : 1,
			description : "\n   " + "Light and medium Armor does not count towards carried weight" + "\n   " + "When unencumbered I gain +5 movement",
				speed : {
				walk : { spd : "+5", enc : "+0" }
				},
			},
		"subclassfeature3" : {
			name : "Channel Divinity: Freedom",
			source : ["Ouron:OaFree", 1],
			minlevel : 3,
			description : "\n  " + "As an action I grant the Freedom of Mind." + "\n  " + "Each ally that can see and hear my invocation may immediately end any single enchanment, charm, or an affect that impairs movement that is affecting them." + "\n  " + "In addition, they may may claim advantage on one roll against a single enchantment, charm, or movement imparing event befor their next rest.",
			action : ["action", ""]
			},
		"subclassfeature3.1" : {
			name : "Channel Divinity: Choice",
			source : ["Ouron:OaFree", 1],
			minlevel : 3,
			description: "\n  " + "As an action I grant the Freedom of Choice." + "\n  " + "Each ally that can see and hear my invocation gains Fate's Touch." + "\n  " + "While this abiliy is in effect (concentration up to one hour), a character may use a hit die to reroll any die roll. This must be performed after a die roll is made, but before the effect is known." + "\n  " + "If used on a result that would be a fumble, they may only negate the fumble and do not gain a second roll.",
			action : ["action", ""]
			},
		"subclassfeature6.1" : {
			name : "Unhindered Movement",
			source : ["Ouron:OaFree", 1],
			minlevel : 6,
			description : "\n   " + "I gain an additional +5 (total +10) movement when unencumbered",
				speed : {
				walk : { spd : "+5", enc : "+0" }
				},
			},
		"subclassfeature7" : {
			name : "Aura of Freedom",
			source : ["Ouron:OaFree", 2],
			minlevel : 7,
			description : "n\  " + "I, and allies within range, have adv. on saves against movement-effecting affects and charming effects while I am conscious." + "\n  " + "This includes saves to end these effects.",
			additional : ["", "", "", "", "", "", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "30-foot aura", "30-foot aura", "30-foot aura"],
			savetxt : { adv_vs : ["charms and movement effects"] }
			},
		"subclassfeature11.1" : {
			name : "Unfettered Movement",
			source : ["Ouron:OaFree", 1],
			minlevel : 11,
			description : "\n   " + "I gain an additional +5 (total +15) movement when unencumbered",
				speed : {
				walk : { spd : "+5", enc : "+0" }
				},
			},
		"subclassfeature15" : {
			name : "Uncontrolled Spirit",
			source : ["Ouron:OaFree", 2],
			minlevel : 15,
			/* description : "n\  " + "I gain proficiency in the Acrobatics and Athletics skills." + "\n  " + "If I already have proficiency in either of these, then I gain expertise in that skill instead."+ "\n  " + "Additionally, I am no longer affected by difficult terrain, nor affected by movement imparing effects. I cannot be charmed nor dominated against my will.", */
			description : "\n  " + "I gain proficiency in the Acrobatics, Athletics, and Swim skills." + "n\  " + "If I already have proficieny in any of these skills, then I gain expertise in that skill instead." + "\n  " + "Additionally, I am no longer affected by difficult terrain, nor affected by movement imparing effects. I cannot be charmed nor dominated against my will.",
			skills : ["Acrobatics", "Athletics"],
			skillstxt : "\n\n" + toUni("Oath of Freedom") + ": Athletics and Acrobatics. If already proficient with either, gain expertise in that skill instead.",
			},
		"subclassfeature16.1" : {
			name : "Unrestricted Movement",
			source : ["Ouron:OaFree", 1],
			minlevel : 16,
			description : "\n   " + "I gain an additional +5 (total +20) movement when unencumbered",
				speed : {
				walk : { spd : "+5", enc : "+0" }
				},
			},
		"subclassfeature20" : {
			nane : "Champion of Freedom",
			source : ["Ouron:OaFree", 2],
			minlevel : 20,
			description : "\n  " + "Once per long rest, I can take on the Aspect of Gaetor." + "\n  " + "For one minute I gain the following benefits: " + "\n   " + "If I was encumbered, I am no longer encumbered. I may not become encumbered while under this effect. (I am still limited in the weight I may carry)." + "\n    " + "I gain an additional action at the beginning of each round." + "\n    " + "During each of my actions, I gain an additional move action." + "\n    " + "My movements do not invoke attacks of opporunity." + "\n    " + "My attacks gain Reach +5",
			recovery : "long rest", 
			usages : 1
			}
		}

	} );