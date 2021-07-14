/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Feat
	Effect:		This script adds a feat called "Parry"
	Code by:	Gawain Ouronos
	Date:		2019.05.01 (sheet v12.999 Custom)
*/

var iFileName = "Feat - Parry";
RequiredSheetVersion(12.999);

SourceList["Ouron:FParry"] = {
	name : "Points of Light: Feat - Parry",
	abbreviation : "PoL:FParry",
	group : "Points of Light",
	date : "2019/05/01"
};

FeatsList["parry"] = {
	name : "Parry",
	source : ["Ouron:FParry", 0],
	description : "As a bonus action, I may perform a parry against an attack affecting me or an adjacent ally. I make an attack against the result of the incoming attack, adding my level to the roll. Success negates that attack.",
	prerequisite : "Dexterity 13 or higher",
	prereqeval : "What('Dex') >= 13",
	action : ["bonus action", ""]
};