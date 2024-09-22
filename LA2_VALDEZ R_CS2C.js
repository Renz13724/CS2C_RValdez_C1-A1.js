// Name1
var name1 = "[Renz Galcon Valdez]";
var birthDate1 = "[April 13, 2005]";
var birthPlace1 = "[Resonable Hospital, Candon City, Ilocos Sur, Philippines 2710]";
var address1 = "[Oaig Daya, Candon City, Ilocos Sur, Philippines 2710]";
var course1 = "[Bachelor Of Science in Computer Science]";
var year1 = "2";
var dreamJob1 = "[Game Developer]";

// Name 2
var name2 = "[Jenny Saquiton Naungayan]";
var birthDate2 = "[June 20, 2004]";
var birthPlace2 = "[Oaig Daya, Candon City, Ilocos Sur, Philippines 2710]";
var address2 = "[Oaig Daya, Candon City, Ilocos Sur, Philippines 2710]";
var course2 = "[Bachelor Of Science in Computer Science]";
var year2 = "2";
var dreamJob2 = "[Software Engineer]";

//Name 3
var name3 = "[Karryle Banasan Lagrimas]";
var birthDate3 = "[July 20, 2005]";
var birthPlace3 = "[San Fernando City, La Union, Philippines 2500]";
var address3 = "[Bugnay, Candon City, Ilocos Sur, Philippines 2710]";
var course3 = "[Bachelor Of Science in Computer Science]";
var year3 = "2";
var dreamJob3 = "[Data Analysis]";

var name1= " Renz Galcon Valdez";
var classmate2Name = "Jenny Saquiton Naungayan";
var   classmate3Name = "Karryle Banasan Lagrimas";

var name1Rearrange = name1.split(" ");
var c1NameRearrange = classmate2Name.split(" ");
var c2NameRearrange = classmate3Name.split("");


var studentNameAddC1AddC2 = name1 + " " + classmate2name + " " + classmate3name;
var name1Addname2Addname3 = name1 + " " + classmate2name +" " + classmate3name;

console.log(name1.toUpperCase() + " was born " + birthDate1 + " at " + birthPlace1.toUpperCase() + ", and currently living at " + address1.toUpperCase()+".");
console.log(name1.toLowerCase() + " is taking up " + course1.toLowerCase() + " and dreams to be " + dreamJob1 + " after graduation."); 
console.log(name2.toUpperCase() + " was born " + birthDate2 + " at " + birthPlace2.toUpperCase() + ", and currently living at " + address2.toUpperCase()+".");
console.log(name2.toLowerCase() + " is taking up " + course2.toLowerCase() + " and dreams to be " + dreamJob2 + " after graduation."); 

console.log(name3.toUpperCase() + " was born " + birthDate3 + " at " + birthPlace3.toUpperCase() + ", and currently living at " + address3.toUpperCase()+".");
console.log(name3.toLowerCase() + " is taking up " + course3.toLowerCase() + " and dreams to be " + dreamJob3 + " after graduation.");
