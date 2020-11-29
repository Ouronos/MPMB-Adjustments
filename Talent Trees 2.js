	
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
