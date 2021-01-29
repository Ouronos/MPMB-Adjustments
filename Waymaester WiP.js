/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*  -INFORMATION-
	Subject:    Class
	Effect:     This script adds the class called "Waymaester" with its single subclass ("Way of the Road")

				This class has been made by /u/ouronos

	Code by:	Gawain Ouronos
	Date:		2021-01-25 (sheet v12.999)
*/

var iFileName = "Waymaester.js";
RequiredSheetVersion(12.999);

SourceList["PoL:Waymaester"] = {
	name : "Waymaester : Monks of Gaetor v1.0",
	abbreviation : "PoL:Waymaester",
	group : "Points of Light",
	date : "2021/01/25"
};

//Waymaester Class - which is based on monk

ClassList["waymaester"] = {
	regExpSearch : /waymaester/i,
	name : "Waymaester",
	source : ["PoL: Waymaester", 0],
	primaryAbility : "\n \u2022 Waymaester: Dexterity and Wisdom;",
	prereqs : "\n \u2022 Waymaester: Dexterity 13 and Wisdom 13;",
	die : 8,
	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
	saves : ["Dex", "Wis"],
	toolProfs : {
		primary : [["One artisan's tool or musical instrument",1]],
		secondary : [["One artisan's tool or musical instrument", 1]]
		},
	skills : ["\n\n" + toUni("Waymaester") + ": Choose two from Acrobatics, Athletics, History, Insight, Religion, and Stealth."],
	armor : [
		[false, false, false, false],
		[false, false, false, false]
	],
	weapons : [
		[true, false, ["shortsword"]],
		[true, false, ["shortsword"]]
	],
	equipment : "Waymaester starting equipment:\n \u2022 A shortsword -or- any simple weapon;\n \u2022 A dungeoneer's pack -or- an explorer's pack;\n \u2022 10 darts.\n\nAlternatively, choose 5d4 gp worth of starting equipment instead of both the class' and the background's starting equipment.",
	subclasses : ["Waymaester Focus", []],
	attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	features : {
			"unarmored defense" : {
				name : "Unarmored Defense",
				source : ["PoL:Waymaester", 48],
				minlevel : 1,
				description : "\n   " + "Without armor and no shield, my AC is 10 + Dexterity modifier + Wisdom modifier"
			},
			"martial arts" : {
				name : "Martial Arts",
				source : ["PoL:Waymaester", 78],
				minlevel : 1,
				description : "\n   " + "Waymaester: staves, unarmed strike" + "\n   " + "With these, I can use Dex instead of Str and use the Martial Arts damage die" + "\n   " + "When taking an Attack action with these, I get one unarmed strike as a bonus action",
				action : ["bonus action", " (with Attack action)"],
				eval : "AddString(\"Extra.Notes\", \"Waymaester features:\\n\\u25C6 Lose Unarmored Defense, Martial Arts, and Unarmored Movement with armor\/shields\", true);",
				removeeval : "RemoveString(\"Extra.Notes\", \"Waymaester features:\\n\\u25C6 Lose Unarmored Defense, Martial Arts, and Unarmored Movement with armor\/shields\", true);"
			},
			"ki" : {
				name : "Ki",
				source : ["PoL:Waymaester", 78],
				minlevel : 2,
				description : "\n   " + "I can spend ki to fuel special actions (see third page)" + "\n   " + "I need to meditate for at least 30 min of a short rest for that short rest to restore ki",
				usages : ["", 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
				recovery : "short rest",
				extraname : "Ki Feature",
				"flurry of blows" : {
					name : "Flurry of Blows",
					source : ["PoL:Waymaester", 78],
					description : " [1 ki point]" + "\n   " + "After taking the Attack action, I can make 2 unarmed attacks as a bonus action",
					action : ["bonus action", " (after Attack action)"]
				},
				"patient defense" : {
					name : "Patient Defense",
					source : ["PoL:Waymaester", 78],
					description : " [1 ki point]" + "\n   " + "As a bonus action, I gain my style's AC Bonus (+4) [sustain 1]",
					action : ["bonus action", ""]
				},
				"step of the wind" : {
					name : "Step of the Wind",
					source : ["PoL:Waymaester", 78],
					description : " [1 ki point]" + "\n   " + "As a bonus action, I may shift up to my movement",
					action : ["bonus action", ""]
				},
				"stunning strike" : {
					name : "Stunning Strike",
					source : ["PoL:Waymaester", 79],
					description : " [1 ki point]" + "\n   " + "Creature hit by my melee attack Con saves or it is Stunned 1; this "
				},
				eval : "ClassFeatureOptions([\"waymaester\", \"ki\", \"flurry of blows\", \"extra\"]); ClassFeatureOptions([\"waymaester\", \"ki\", \"patient defense\", \"extra\"]); ClassFeatureOptions([\"waymaester\", \"ki\", \"step of the wind\", \"extra\"]);"
				/*removeeval : "ClassFeatureOptions([\"waymaester\", \"ki\", \"flurry of blows\", \"extra\"], \"remove\"); ClassFeatureOptions([\"waymaester\", \"ki\", \"patient defense\", \"extra\"], \"remove\"); ClassFeatureOptions([\"waymaester\", \"ki\", \"step of the wind\", \"extra\"], \"remove\");",
				changeeval : "if (newClassLvl.waymaester >= 5 && (What(\"Extra.Notes\") + What(\"Class Features\")).toLowerCase().indexOf(\"stunning strike\") === -1) {ClassFeatureOptions([\"waymaester\", \"ki\", \"stunning strike\", \"extra\"])} else if (newClassLvl.waymaester < 5 && oldClassLvl.waymaester >= 5) {ClassFeatureOptions([\"waymaester\", \"ki\", \"stunning strike\", \"extra\"], \"remove\")};" */
			},
			"unarmored movement" : {
				name : "Unarmored Movement",
				source : ["PoL:Waymaester", 78],
				minlevel : 2,
				description : "\n   " + "Speed increases and eventually lets me traverse some surfaces without falling as I move",
				additional : ["", "+10 ft", "+10 ft", "+10 ft", "+10 ft", "+15 ft", "+15 ft", "+15 ft", "+15 ft; Vertical surfaces and liquids", "+20 ft; Vertical surfaces and liquids", "+20 ft; Vertical surfaces and liquids", "+20 ft; Vertical surfaces and liquids", "+20 ft; Vertical surfaces and liquids", "+25 ft; Vertical surfaces and liquids", "+25 ft; Vertical surfaces and liquids", "+25 ft; Vertical surfaces and liquids", "+25 ft; Vertical surfaces and liquids", "+30 ft; Vertical surfaces and liquids", "+30 ft; Vertical surfaces and liquids", "+30 ft; Vertical surfaces and liquids"],
				speed : {
					walk : { spd : "+10", enc : "+0" }
					} 
				/*changeeval : "if(oldClassLvl.waymaester) {ChangeSpeed(-1 * Number(CurrentClasses.waymaester.features[\"unarmored movement\"].additional[oldClassLvl.waymaester - 1].substring(1,3)))}; try {ChangeSpeed(CurrentClasses.waymaester.features[\"unarmored movement\"].additional[newClassLvl.waymaester - 1].substring(1,3));} catch (err) {};"*/
				
			},
			"subclassfeature3" : {
				name : "Waymaester Focus",
				source : ["PoL:Waymaester", 78],
				minlevel : 3,
				description : "\n   " + "Choose a Waymaester Focus to commit to and put it in the \"Class\" field on page 1" + "\n   " + "Waymaesters only have Way of the Road currently"
			},
			"deflect missiles" : {
				name : "Deflect Missiles",
				source : ["PoL:Waymaester", 78],
				minlevel : 3,
				description : "\n   " + "As a reaction, I can reduce ranged weapon attack damage done to me" + "\n   " + "If I have learned Missile Reversal, I may throw it back (20/60 ft) as a waymaester weapon",
				action : ["reaction", ""],
				additional : ["", "", "1d10 + 3 + Dexterity modifier; 1 ki to throw", "1d10 + 4 + Dexterity modifier; 1 ki to throw", "1d10 + 5 + Dexterity modifier; 1 ki to throw", "1d10 + 6 + Dexterity modifier; 1 ki to throw", "1d10 + 7 + Dexterity modifier; 1 ki to throw", "1d10 + 8 + Dexterity modifier; 1 ki to throw", "1d10 + 9 + Dexterity modifier; 1 ki to throw", "1d10 + 10 + Dexterity modifier; 1 ki to throw", "1d10 + 11 + Dexterity modifier; 1 ki to throw", "1d10 + 12 + Dexterity modifier; 1 ki to throw", "1d10 + 13 + Dexterity modifier; 1 ki to throw", "1d10 + 14 + Dexterity modifier; 1 ki to throw", "1d10 + 15 + Dexterity modifier; 1 ki to throw", "1d10 + 16 + Dexterity modifier; 1 ki to throw", "1d10 + 17 + Dexterity modifier; 1 ki to throw", "1d10 + 18 + Dexterity modifier; 1 ki to throw", "1d10 + 19 + Dexterity modifier; 1 ki to throw", "1d10 + 20 + Dexterity modifier; 1 ki to throw"]
			},
			"slow fall" : {
				name : "Slow Fall",
				source : ["PoL:Waymaester", 78],
				minlevel : 4,
				description : "\n   " + "As a reaction, I can reduce any falling damage I take by five times my waymaester level",
				additional : ["", "", "", "20 less falling damage", "25 less falling damage", "30 less falling damage", "35 less falling damage", "40 less falling damage", "45 less falling damage", "50 less falling damage", "55 less falling damage", "60 less falling damage", "65 less falling damage", "70 less falling damage", "75 less falling damage", "80 less falling damage", "85 less falling damage", "90 less falling damage", "95 less falling damage", "100 less falling damage"],
				action : ["reaction", ""]
			},
			"ki-empowered strikes" : {
				name : "Ki-Empowered Strikes",
				source : ["PoL:Waymaester", 79],
				minlevel : 6,
				description : "\n   " + "My unarmed strikes count as magical for overcoming resistances and immunities"
			},
			"increased movement 2" : {
				name : "Increased Movement II",
				source : "PoL:WayM 2",
				minlevel : 6,
				speed : {
					walk : { spd : "+5", enc : "+0" }
					}
			}, 
			"evasion" : {
				name : "Evasion",
				source : ["PoL:Waymaester", 79],
				minlevel : 7,
				description : "\n   " + "My Dexterity saves vs. areas of effect negate damage on success and halve it on failure",
				save : "Dex save vs. area effects: fail \u2015 half dmg, success \u2015 no dmg"
			},
			"travellers peace" : {
				name : "Traveller's peace",
				source : ["PoL:Waymaester", 79],
				minlevel : 7,
				description : "\n   " + "As an action, I can end one effect on me that causes me to be charmed, frightened, movement impaired, or may attempt to break stun",
				action : ["action", ""]
			},
			"surefooted" : {
				name : "Surefooted",
				source : ["PoL:Waymaester", 79],
				minlevel : 10,
				description : typeA4 ? "\n   " + "My mastery of the ki flowing through me makes me immune to stun and resistant to poisons and diseases" : " [" + "I am resistant to poison and disease" + "]",
				save : "Resistant to poison and disease"
			},
			"increased movement 3" : {
				name : "Increased Movement III",
				source : "PoL:WayM 2",
				minlevel : 10,
				speed : {
					walk : { spd : "+5", enc : "+0" }
					}
			}, 
			"travellers speech" : {
				name : "Traveller's Speech",
				source : ["PoL:Waymaester", 79],
				minlevel : 13,
				description : "\n   " + "I can understand all spoken languages and all creatures with a language understand me"
			},
			"travellers luck" : {
				name : "Traveller's Luck",
				source : ["PoL:Waymaester", 79],
				minlevel : 14,
				description : "\n   " + " [1 ki point]" + "\n   " + "I may reroll any save, skill check, or attack that is not a critical fail."
			},
			"increased movement 4" : {
				name : "Increased Movement IV",
				source : "PoL:WayM 2",
				minlevel : 14,
				speed : {
					walk : { spd : "+5", enc : "+0" }
					}
			}, 
			"travellers self" : {
				name : "Traveller's Self",
				source : ["PoL:Waymaester", 79],
				minlevel : 15,
				description : "\n   " + "I don't require food or water; I don't suffer age penalties and can't be aged magically"
			},
			"unseen traveller" : {
				name : "Unseen Traveller",
				source : ["PoL:Waymaester", 79],
				minlevel : 18,
				description : "\n   " + "Be invisible and resist non-force damage for 1 min or cast Astral Projection on self",
				additional : "Invisible: 4 ki point; Astral Projection: 8 ki points",
				action : ["action", ""],
				eval : "AddResistance(\"All -Force (invis.)\", \"Empty Body\");",
				removeeval : "RemoveResistance(\"All -Force (invis.)\");"
			},
			"increased movement 5" : {
				name : "Increased Movement V",
				source : "PoL:WayM 2",
				minlevel : 18,
				speed : {
					walk : { spd : "+5", enc : "+0" }
					}
			}, 
			"perfect self" : {
				name : "Perfect Self",
				source : ["PoL:Waymaester", 79],
				minlevel : 20,
				description : "\n   " + "When I roll AP and my natural roll is higher than my Ki, I gain that many Ki points."
			}
		}
	};

//Waymaester Subclass - Way of the Road

	
	AddSubClass(
		"waymaester",
		"way of the road",
		{
	regExpSearch : /^(?=.*road).$/i,
	subname : "Way of the Road",
	source : ["PoL:Waymaester", 1],
	features : {
		"subclassfeature3" : {
			name : "Traveller's Fist",
			source : ["PoL:Waymaester", 2],
			minlevel : 3,
			description : "\n   " + "When I hit a creature with a Flurry of Blows attack I can do one of the following:" + "\n    - " + "It has to make a Dexterity save or be knocked prone" + "\n    - " + "It has to make a Constitution save or it can't take reactions [unsustain 1]",
			action : ["bonus action", "with Flurry of Blows"]
		},
		"subclassfeature6" : {
			name : "Restful Road",
			source : ["PoL:Waymaester", 3],
			minlevel : 6,
			description : "\n   " + "As an action, I can spend ki equal to three times my exhaustion level to reduce my exhaustion one level or spend 2 ki points to regain hit points equal to two times my waymaester level",
			additional : ["", "", "", "", "", "12 hit points", "14 hit points", "16 hit points", "18 hit points", "20 hit points", "22 hit points", "24 hit points", "26 hit points", "28 hit points", "30 hit points", "32 hit points", "34 hit points", "36 hit points", "38 hit points", "40 hit points"],
			usages : 1,
			recovery : "long rest",
			action : ["action", ""]
		},
		"subclassfeature11" : {
			name : "Traveller's Tranquility",
			source : ["PoL:Waymaester", 4],
			minlevel : 11,
			description : "\n   " + "After a long rest, I gain the effect of a Sanctuary spell until a next long rest (PHB 272)",
		},
		"subclassfeature17" : {
			name : "Traveller's Companion",
			source : ["PoL:Waymaester", 5],
			minlevel : 17,
			description : "\n   " + "By spending an hour in meditation with another I create a Traveller's Link. I, and they, may use this link for mental communication when not in combat. I may, by meditating on this link for an hour, teleport without error to anywhere within one mile of their location"
		}
	}
} );

