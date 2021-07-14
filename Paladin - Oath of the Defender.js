/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any character information. This should be added after the Custom Code.
	
*/

/*	-INFORMATION-
	Subject: Subclass / Archetype
	Effect:	This script adds a subclass for the Paladin called "Oath of the Defender"
		The Oath of the Defender is the default Oath for Paladins of Daemor
		This is made for the Points of Light homebrew campaign.
	Code By:	Ouronos
	Date:		2019.04.15 (sheet v. 12.999 custom)
*/

var iFileName = "Paladin - Oath of the Defender.js"; /*Paladin of Daemor*/
RequiredSheetVersion(12.999);

SourceList["Ouron:OaDefender"] = {
	name : "Points of Light: Oath of the Defender",
	abbreviation : "PoL:OaDefend",
	group : "Points of Light",
	date : "2019/04/15"
};

var FightingStyles = {
	dueling : {
		name : "Dueling Fighting Style",
		description : "\n   " + "+2 to damage rolls when wielding a melee weapon in one hand and no other weapons",
		calcChanges : {
			atkCalc : [
				function (fields, v, output) {
					for (var i = 1; i <= FieldNumbers.actions; i++) {
						if ((/off.hand.attack/i).test(What('Bonus Action ' + i))) return;
					};
					if (v.isMeleeWeapon && !v.isNaturalWeapon && !(/\b(2|two).?hand(ed)?s?\b/i).test(v.theWea.description)) output.extraDmg += 2;
				},
				"When I'm wielding a melee weapon in one hand and no weapon in my other hand, I do +2 damage with that melee weapon. This condition will always be false if the bonus action 'Off-hand Attack' exists."
			]
		}
	},
	great_weapon : {
		name : "Great Weapon Fighting Style",
		description : "\n   " + "Reroll 1 or 2 on damage if wielding two-handed/versatile melee weapon in both hands",
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if (v.isMeleeWeapon && (/\b(versatile|(2|two).?hand(ed)?s?)\b/i).test(v.theWea.description)) {
						fields.Description += (fields.Description ? '; ' : '') + 'Re-roll 1 or 2 on damage die' + ((/versatile/i).test(fields.Description) ? ' when two-handed' : '');
					}
				},
				"While wielding a two-handed or versatile melee weapon in two hands, I can re-roll a 1 or 2 on any damage die once."
			]
		}
	},
	protection : {
		name : "Protection Fighting Style",
		description : "\n   " + "As a reaction, I can give disadv. on an attack made vs. someone within 5 ft of me" + "\n   " + "I may do this even when unarmed.",
		action : ["reaction", ""]
	},
	daemordefense : {
		name : "Daemorian Defense",
		description : "\n   " + "I add 1/2 my melee proficiency to my AC when wearing armor.",
		additional : levels.map(function (n) {
				return "+" + (n < 2 ? 1 : n < 4 ? 1 : n < 7 ? 2 : n < 11 ? 2 : n < 15 ? 3 : 3) + " to AC";
				}),
		eval : "AddACMisc([1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3],'Daemorian Defense', 'When wearing armor, the class feature Daemorian Defense grants my melee proficiency as a bonus to AC', 'CurrentArmour.known && !ArmourList[CurrentArmour.known].type')",
		removeeval : "AddACMisc(0, 'Daemorian Defense', 'When wearing armor, the class feature Daemorian Defense grants my melee proficiency as a bonus to AC')"
		}
	};

AddSubClass("paladin", "defender", {
	regExpSearch : /^(?=.*defender)(((?=.*paladin)|((?=.*(exalted|sacred|holy|divine))(?=.*(knight|fighter|warrior|warlord|trooper|defender))))).*$/i,
	subname : "Oath of the Defender",
	source : ["Ouron:OaDefend", 1],
	spellcastingExtra : ["shield", "divine favor", "spiritual weapon", "lesser restoration", "elemental weapon", "protection from energy", "guardian of faith", "banishment", "planar binding", "greater restoration"],
	features : {
		"fighting style" : {
				name : "Fighting Style",
				source : [["SRD", 31], ["P", 84]],
				minlevel : 2,
				description : "\n   " + "Choose a Fighting Style for the paladin using the \"Choose Feature\" button above",
				choices : ["Defense", "Dueling", "Great Weapon Fighting", "Protection"],
				"defense" : FightingStyles.daemordefense,
				"dueling" : FightingStyles.dueling,
				"great weapon fighting" : FightingStyles.great_weapon,
				"protection" : FightingStyles.protection
			},
		"subclassfeature1" : {
			name : "Parry",
			source : ["Ouron:OaDefend", 1],
			minlevel : 1,
			description : "\n   " + "You gain the Parry Feat",
			},
		"subclassfeature3" : {
			name : "Channel Divinity: Call of the Shield",
			source : ["Ouron:OaDefend", 2],
			minlevel : 3,
			description : "\n  " + "I imbue my shield with divine energy. For one minute, I, and every ally within 10', adds my Charisma modifier to their armor class." + "\n  " + "This effect is centered on me, and moves as I move.",
			action : ["action", ""]
			},
		"subclassfeature3.1" : {
			name : "Channel Divinity: Call of the Hearth",
			source : ["Ouron:OaDefend", 2],
			minlevel : 3,
			description: "\n  " + "I and my shield glow with a soft light. I shed dim light within 10 feet." + "\n  " + "For one minute, I, and every ally within 10', gain resistance to one type of damage." + "\n  " + "This effect is centered on me, and moves as I move.",
			action : ["action", ""]
			},
		"subclassfeature7" : {
			name : "Aura of Awareness",
			source : ["Ouron:OaDefend", 2],
			minlevel : 7,
			description : "\n  " + "As long as I am conscious, I, and allies within range, cannot gain the flanked condition.",
			additional : ["", "", "", "", "", "", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "30-foot aura", "30-foot aura", "30-foot aura"],
			},
		"subclassfeature15" : {
			name : "Indomitable Shielding",
			source : ["Ouron:OaDefend", 2],
			minlevel : 15,
			description : "\n  " + "I am always under the effects of a Protection from Evil spell.",
			},
		"subclassfeature20" : {
			nane : "Daemor's Shield",
			source : ["Ouron:OaDefend", 2],
			minlevel : 20,
			description : "\n  " + "Once per long rest, I can take on the Aspect of Deamor." + "\n  " + "For one minute I gain the following benefits: " + "\n   " + "I sehd bright light in a 30' radius, and dim light 30' beyond that." + "\n    " + "All enemies within the bright light are subject to a Parry effect against any attack that is attempted against me or my allies. I must be aware of the attack." + "\n    " + "I gain advantage on all Inimidation checks." + "\n    " + "I have advantage on all attacks against, and saves against spells cast by, fiends and undead.",
			recovery : "long rest", 
			usages : 1
			}
		}

	} );