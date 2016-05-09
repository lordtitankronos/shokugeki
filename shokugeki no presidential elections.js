// ==UserScript==
// @name         Shokugeki no Presidential Elections
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  changes the 2016 election to a fast food war
// @include      *
// @author       lordkronos ft. trlkly
// @match        http://*/*
// @grant        none
// ==/UserScript==


function checkWords() { //list of words in URL or title that hide page until script finished
	var words = ['republican', 'primary', 'election', 'rubio', 'cruz', 'clinton','sanders','bernie', 'hillary', 'democrat', 'president'];
	var regex = new RegExp(words.join('|'),'i');
	return document.title.search(regex) != -1 || window.location.href.search(regex) != -1;
}

function textReplace(text) { //function that actually replaces words. Modified from Drumpfinator
	if (typeof text != 'undefined') {
		        //console.log (text)
           text = text.replace(/\bTRUMP(S|ED|ed|ING|ing)?\b/g, 'MCDONALD$1');
           text = text.replace(/\bTrump(s|ed|ing)?\b/g, 'Mcdonald$1');
           text = text.replace(/\bDonald(s|ed|ing)?\b/g, 'Ronald$1');
           text = text.replace(/\bDONALD(S|ed|ing)?\b/g, 'RONALD$1');
           text = text.replace(/\bMake America Great Again(!?)\b/g, 'McDonald\'s Big Macs, only \$4.99 at participating locations$1');
           text = text.replace(/\MakeAmericaGreatAgain\b/g, 'ImLovingIt');
           text = text.replace(/Trump2016/gi, 'Mcdonald2016');
           text = text.replace(/TRUMP2016/gi, 'MCDONALD2016');
           text = text.replace(/donald(j?)trump\b/g, 'ronald mcdonald');
           text = text.replace(/DonaldTrump/g, 'RonaldMcdonald');
           text = text.replace(/THE_DONALD/g, 'THE_RONALD');
           text = text.replace(/Wall/g, 'Grill');
           text = text.replace(/wall/g, 'grill');
           text = text.replace(/HIGH ENERGY/g, 'HIGH CARB');
           text = text.replace(/LOW ENERGY/g, 'LOW CARB');
           text = text.replace(/wall/g, 'grill');
           text = text.replace(/jeb/g, 'papa john\'s');
           text = text.replace(/George/g, 'Domino\'s');
           text = text.replace(/Jeb/g, 'Papa John\'s');
           text = text.replace(/Bush/g, 'Pizza');
           text = text.replace(/immigrant(s|)/g, 'meat import$1');
           text = text.replace(/\b(donald[ -]*)(j?[ -]*)trump/g, 'ronald mcdonald');
           text = text.replace(/trump([ -]*)(tower)\b/gi, 'mcdonald empire');
           text = text.replace(/T-R-U-M-P/gi, 'm-c-d-o-n-a-l-d'); 
/*new*/		text = text.replace(/\bcuck(s|ed|ing)\b/g, 'saladlover$1'); 
/*new*/		text = text.replace(/\bCUCK(S|ED|ING)\b/g, 'SALADLOVER$1'); 
/*new*/		text = text.replace(/\bBernie\b/g, 'Colonel');
/*new*/		text = text.replace(/\bernie\b/g, 'colonel');
/*new*/		text = text.replace(/\bfeelthebern\b/g, 'feelthefrying');
/*new*/		text = text.replace(/\bHillary\b/g, 'Wendy\'s');
/*new*/		text = text.replace(/\bClinton\b/g, 'Frosty');
/*new*/		text = text.replace(/\bBarack\b/g, 'Popeye\'s');
/*new*/		text = text.replace(/\bObama\b/g, 'Louisiana Kitchen');
/*new*/		text = text.replace(/\bDropOutHillary\b/g, 'CloseDownWendys');
/*new*/		text = text.replace(/\bJohn\b/g, 'Taco');
/*new*/		text = text.replace(/\bKasich\b/g, 'Bell');
/*new*/		text = text.replace(/\bTed\b/g, 'Chick');
/*new*/		text = text.replace(/\bCruz\b/g, 'fil A');
/*new*/		text = text.replace(/\bDemocrat(s|ic)?\b/g, 'Coca Cola');
/*new*/		text = text.replace(/\bdemocrat(s|ic)?\b/g, 'coca cola');
/*new*/		text = text.replace(/\bRepublican(s|)?\b/g, 'Pepsi');
/*new*/		text = text.replace(/\brepublican(s|)?\b/g, 'pepsi');
/*new*/		text = text.replace(/\bIndependent(s|)?\b/g, 'House brand');
/*new*/		text = text.replace(/\bindependent(s|)?\b/g, 'house brand');
/*new*/		text = text.replace(/\bGov(s|)?\b/g, 'Manager$1');
/*new*/		text = text.replace(/\bgovernor(s|)?\b/g, 'manager$1');
/*new*/		text = text.replace(/\bPolitic(s|al)?\b/g, 'Fast food industry');
/*new*/		text = text.replace(/\bpolitic(s|al)?\b/g, 'fast food industry');
/*new*/		text = text.replace(/\bPolitician(s|)?\b/g, 'Fast food mogul$1');
/*new*/		text = text.replace(/\bpolitician(s|)?\b/g, 'fast food mogul$1');
/*new*/		text = text.replace(/\bGovernment(s|al)?\b/g, 'Fast food');
/*new*/		text = text.replace(/\bgovernment(s|al)?\b/g, 'fast food');
/*new*/		text = text.replace(/\bPundit(s|)?\b/g, 'Fast food critic$1');
/*new*/		text = text.replace(/\bpundit(s|)?\b/g, 'fast food critic$1');        
/*new*/		text = text.replace(/\bPresident(ial|s|)?\b/g, 'Fast food king');
/*new*/		text = text.replace(/\bpresident(ial|s|)?\b/g, 'fast food king'); 
/*new*/		text = text.replace(/\bElection(s|)?\b/g, 'Cook off$1');
/*new*/		text = text.replace(/\belection(s|)?\b/g, 'cook off$1'); 
/*new*/		text = text.replace(/\bDelegate(s|)?\b/g, 'Customer$1');
/*new*/		text = text.replace(/\bdelegate(s|)?\b/g, 'customer$1');
/*new*/		text = text.replace(/\bSuperdelegate(s|)?\b/g, 'Supercustomer$1');
/*new*/		text = text.replace(/\bsuperdelegate(s|)?\b/g, 'supercustomer$1');
/*new*/		text = text.replace(/\bVote(s|r|rs|)?\b/g, 'Taste$1');
/*new*/		text = text.replace(/\bvote(s|r|rs|)?\b/g, 'taste$1');
/*new*/		text = text.replace(/\bPrimar(y|ies)?\b/g, 'Cook offs');
/*new*/		text = text.replace(/\bprimar(y|ies)?\b/g, 'cook offs');
        return text;
	}
	return null;
}

function testSpellCheckOnFirefox (node) {
	if (typeof window.InstallTrigger != 'undefined') {
		return (!node.spellcheck);
	}
	return true;
}

function textNodeReplace(node) {   //faster node walker (for finding text to replace). 
	if (!node) node = document.body; 
	var walk = document.createTreeWalker(node,NodeFilter.SHOW_TEXT,null,false);
	while (walk.nextNode()) {
		var nodeType = walk.currentNode.parentNode.nodeName;
		if (nodeType != 'STYLE' && nodeType != 'LINK' && nodeType != 'SCRIPT' 
		  && nodeType != 'TEXTAREA' && !walk.currentNode.parentNode.isContentEditable
		  && testSpellCheckOnFirefox (walk.currentNode.parentNode)) { //DO NOT AFFECT TEXT BOXES!!!
			walk.currentNode.textContent = textReplace(walk.currentNode.nodeValue);
		}
	}

	if (style) { //unhides the page if it's been hidden
		style.parentNode.removeChild(style);
//		console.log(style.textContent)
		style = null;
	}
}

function hoverTextReplace(node) { //replaces text in tooltips. 
	if (!node) node = document.body;
	var walk = document.createTreeWalker(node,NodeFilter.SHOW_ELEMENT,null,false);
	while (walk.nextNode()) {
		if (walk.currentNode.getAttribute('title')) {
			walk.currentNode.setAttribute( 'title', textReplace(walk.currentNode.getAttribute('title')) );
		} 
		if (walk.currentNode.getAttribute('alt')) {
			walk.currentNode.setAttribute( 'alt', textReplace(walk.currentNode.getAttribute('alt')) );
		}
	}
}

function titleTextReplace() { //replaces text in title. Includes lowercase 'trump' 
	var oldTitle = document.title;
	if (window.location.href.search(/dictionary/i) == -1 //excudes dictionaries
	  && document.title.search(/dictionary/i) == -1 )  { 
		if (document.title) {
			document.title = document.title.replace(/trump/g, 'drumpf');
			document.title = textReplace(document.title); 
		} else if (typeof window.InstallTrigger != 'undefined') { //using Firefox;
			document.title = 'Connecting...\u200E';
		}
	} 
/*	console.log ((document.readyState == 'loading') +' '+ 
			(window.location.href.search(/trump/i) != -1) +' '+ (document.title != oldTitle)
			+' '+ siteCheck() +' '+ checkWords() + '');/**/
	if (!style && document.readyState == 'loading' && ( /*history.length == 1 
			||*/ window.location.href.search(/trump/i) != -1 || document.title != oldTitle
			|| siteCheck() || checkWords() ) ) {  //hides pages suspected to have "Trump" on them
		style = document.createElement('style'); 
		style.setAttribute('id', 'drumpf23434');
		style.textContent = '* { visibility: hidden !important; background-color: #FFF; }';
		document.head.appendChild(style);
//		console.log('before');
		var timer = new Date(); setTimeout(function fallback() { //fallback for iframe issues
			if (new Date() - timer < 5000 ) { 
				setTimeout(fallback, 5000 - (new Date()-timer)); 
				return; 
			}
			if (document.getElementById('drumpf23434')) {
				document.head.removeChild(document.getElementById('drumpf23434'));
			}
		}, 5000); /**/
//		console.log('after');
	}
}

function unblankTitle() { //if the title got blanked out because it wasn't ready
  if (document.title && document.title.search(/\u200E$/) != -1) {
		if (document.head.getElementsByTagName('title')[1]) {
			document.title = document.head.getElementsByTagName('title')[1].textContent;
			titleTextReplace();
		} else if (document.readyState != 'loading') { //no original title even after page loaded
			document.title = '';
		}
  }	
}

//Main script execution starts here

var style; //needed to hide pages if necessary.
titleTextReplace();
setTimeout(unblankTitle, 7); //if the title wasn't ready
setTimeout(unblankTitle, 50); 
setTimeout(unblankTitle, 100);
setTimeout(unblankTitle, 150);

window.addEventListener('DOMContentLoaded', main); //run the main script once DOM is loaded
if (document.readyState != 'loading') { main(); } //run if DOM is already loaded.
window.addEventListener('load', main); //run again after page is completely loaded, just in case

function main() {
  unblankTitle();
	textNodeReplace(document.body);
	setTimeout(textNodeReplace, 1000);
	hoverTextReplace(document.body);
	setTimeout(hoverTextReplace, 1500);	
}
