// flags.
//========================//
//
// /g
// /i
// /m

/a(b)/g
"aabb" = "ab"

// i
// case insensitive
/A/gi
"aaa" = "a"

// m
// multiline mode
// match a again and again as long as it's on it's own line
/^a$/gm
`and then
again`
= "a", "a"

// metacharacters
//========================//

// {}
// []
// ()
// \
// ^
// $
// .
// |
// ?
// *
// +

// fuzzy matching
//========================//

// .
//match any character except line breaks
/.5/g
"3656" = "65"

// *
// match the prev character zero or more times (greedy)
/5*/g
"55555678" = "55555"

// quantifiers
//========================//
// specify amounts

// +
// match at least once to avoid matching an empty string (greedy)
/5+/g
"55555678" = "55555"
// "" will not match

// ?
// optionally match the preceding character
/regexp?/g
"regex" = "regex"
"regexp" = "regexp"

// you can use the ? to make . or + ungreedy
/<.+>/g
"<p>foo</p>" = "<p>foo</p>"
/<.+?>/g
"<p>foo</p>" = "<p>"

// {}
// match a character n times
/a{5}/g
"aaaaaaaaaa" = "aaaaa"

// {n,}
//match at least that amount (greedy)
/a{5,}/g
"aaaaaaaaaa aa" = "aaaaaaaaaa"

// {n,n}
//from the first amount to second amount (from 4 to 5)
/a{4,5}/g
"aaaa aaaaa aa" = "aaaa", "aaaaa"


// character classes
//========================//
// alternation between characgters (this or that)

// []
// match either a g or h
/[agh]/g
"dhjgggkluia" = "h", "g", "a"
// match either a g or h to any amount
/[agh]/g
"dhjgggkluia" = "h", "ggg", "a"

// [x-x}
// match a range (a to z)
/[a-z]/g
"fghj67" = "fghj"

// combine differnt things
// math a-z, 0-9, and underscore
/[a-z0-9_]/g

//shorthand character classes (make sure it's lowercase - uppercase is negated version)
//===========//

/\w/g
// equeivlent to:
[a-zA-Z0-9_]

/\d/g
// equeivlent to:
[0-9]

\s
// almost equeivelent to (tab, return, newline):
[\t\r\n]

//can combine shorthands into square brackets (match \W characers and the hyphen):
[\W-]


// negating character classes
//============//

//negate character classes using carat (match any character but g-z)
[^g-z]

//also works with shorthands
\W = [^\w]
\D = [^\d]
\S = [^\s]


// groub with parenthesis
//========================//

// ()
/(a|b)/g
"asdb" = "a", "b"

//used to group anything.
//this matches hex colors
//(match number sign then three letters once or twice)
/#([a-zA-Z0-9_]{3}){1,2}/g
"#FFF #ffffff" = "#FFF", "#ffffff"

//groupings also capture values for use later on
//stored by the regex engine to retrieve


//to avoid the need for this storage (consumenes extra memory, )
/(java|ECMA)Script)/g
"JavaScript"
//use ?: to opt out of capturing
/(?:java|ECMA)Script)/g
"JavaScript"

// anchors
//========================//

// ^
// match just to the beginning of a string
/^a/g
"adas" = "a"

// $
// match just at the end of a string
/a$/
"safa" = "a"

// assertions
//========================//

// \b
// word boundary
// match anything between a word and non word character
//will count the beginning and end of stirng as a non word character
/\bfoo\b/g
"foo bar" = "foo"
// B is a negaton of that (a non-word boundary)

// lookahead assertions
//============//









