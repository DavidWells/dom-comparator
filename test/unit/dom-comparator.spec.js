describe('module: DOMNode-Comparator', function () {
		describe('method: Compare', function () {
			it('case 1:compares the dom trees and outputs the final result', function () {
				var domNode = VWO.DOMComparator.create({
nodeA: VWO.DOMNode.create({el:$('<div class="chapter">\n<h2>Tutorial</h2>\n<div class="a" style=color:red>\n</div>\n</div>\n').get(0)}), 
nodeB: VWO.DOMNode.create({el:$('<div class="chapter">\n<h2>Tutorial311</h2>\n<div class="b style=color:blue">\n</div>\n</div>\n').get(0)})
		});

				// Suggested changes are the steps need to be followded to go for nodeA to nodeB .. ... 
		//		expect(domNode.compare().length).toBe(4) ;
				//expect(domNode.compare()).toBe('') ;

		});
	});

		describe('method: Compare', function () {
			it('case2 : compares the dom trees and outputs the final result', function () {
		var domNode = VWO.DOMComparator.create({
nodeA: VWO.DOMNode.create({el:$('<li class="testing fl "><div class="title" style="color:red">Testing</div><div class="text">Himanshu</div><h2>Hello</h2></li> ').get(0)}), 
nodeB: VWO.DOMNode.create({el:$('<li class="testing fl "><div class="title" style="color:blue">Testing</div><div class="text">Himanshu</div><h2>Hello guys</h2></li>').get(0)})
		});
				
		//		expect(domNode.compare()).toBe(1) ; // css-> color:blue change ...  

// { name : 'insertNode', selectorPath : null, content : { html : 'Hello guys', parentSelectorPath : 'DIV#DOMComparisonResult > LI:first-child > DIV:first-child + DIV + H2', indexInParent : 1, existsInDOM : true } }, { name : 'css', selectorPath : 'DIV#DOMComparisonResult > LI:first-child > DIV:first-child', content : { color : 'blue' } }, { name : 'deleteNode', selectorPath : null, content : { parentSelectorPath : 'DIV#DOMComparisonResult > LI:first-child > DIV:first-child + DIV + H2', indexInParent : 0, existsInDOM : false 

		 // Ok works fine .....  

		});
	});

		describe('method: Compare', function () {
			it('case2 : compares the dom trees and outputs the final result', function () {
		var domNode = VWO.DOMComparator.create({
		
		nodeA: VWO.DOMNode.create({el:$('<ul><li><a href="item1">IT1</a></li><li><a href="item2">IT2</a></li><li class="c"><a href="item3">IT3</a></li><li><a class="d" href="item4">IT4</a></li></ul>').get(0)}),
	
		nodeB: VWO.DOMNode.create({el:$('<ul><li><a href="item">IT1</a></li><li><a href="item2">IT2</a></li><li class="c"><a href="item3">IT</a></li><li><a class="e" href="item4">IT4</a></li></ul>').get(0)})
												    
		});
				
	//		expect(domNode.compare()).toBe() ; 
		
		// Output is ---> 
// { name : 'insertNode', selectorPath : null, content : { html : 'IT', parentSelectorPath : 'DIV#DOMComparisonResult > UL:first-child > LI:first-child + LI + LI > A:first-child', indexInParent : 1, existsInDOM : true } }, { name : 'attr', selectorPath : 'DIV#DOMComparisonResult > UL:first-child > LI:first-child > A:first-child', content : { href : 'item' } }, { name : 'attr', selectorPath : 'DIV#DOMComparisonResult > UL:first-child > LI:first-child + LI + LI + LI > A:first-child', content : { class : 'e' } }, { name : 'deleteNode', selectorPath : null, content : { parentSelectorPath : 'DIV#DOMComparisonResult > UL:first-child > LI:first-child + LI + LI > A:first-child', indexInParent : 0, existsInDOM : false } }
		

		// Checked for - 1. attr(class,href) 2. style 3. html content 4. Rearrangment 5. Exactly same  
		// Works fine 

		});
	});


		describe('method: Compare', function () {
			it('case3 : compares the dom trees and outputs the final result', function () {
		var domNode = VWO.DOMComparator.create({
		
		nodeA: VWO.DOMNode.create({el:$('<ul><li><a href="item1">IT1</a></li><li><a href="item2">IT2</a></li><li class="c"><a href="item3">IT3</a></li><li><a class="d" href="item4">IT4</a></li></ul>').get(0)}),
												    
		nodeB: VWO.DOMNode.create({el:$('<ul><li><a href="item1">IT1</a></li><li></li><li class="c"><a href="item3">IT3</a></li><li><a href="item4">IT4</a></li></ul>').get(0)})
		});
				
			//expect(domNode.compare()).toBe('') ; 

			// Output is --> 
			// [ { name : 'removeAttr', selectorPath : 'DIV#DOMComparisonResult > UL:first-child > LI:first-child + LI + LI + LI > A:first-child', content : { class : 'd' } }, { name : 'deleteNode', selectorPath : null, content : { parentSelectorPath : 'DIV#DOMComparisonResult > UL:first-child > LI:first-child + LI', indexInParent : 0, existsInDOM : false } } ]

			// checked for -->  1. removeattr 2. deleteNode 
			// Works fine 

		});
	});


		describe('method: Compare', function () {
			it('case4 : compares the dom trees and outputs the final result', function () {
		var domNode = VWO.DOMComparator.create({
		
		nodeA: VWO.DOMNode.create({el:$('<section class="section" style="color:red"><div class="container"><div class="main-heading"><h2 class="vwo_1403262964840">The</h2><div class="tagline">optimization</div></div></div><a href="google.com"></a></section>').get(0)}),												    		
		nodeB: VWO.DOMNode.create({el:$('<section class="section" style="color:blue"><div class="container12"><div class="main-heading"><h2 class="vwo_1403262964840">The</h2><div class="tagline">optimization</div></div></div><a href="google.com"></a></section>').get(0)})		
		
		});
				
	// 		expect(domNode.compare()).toBe('') ; 

			// checked for 1. insertNode 2. css 3. removecss  
			// Works fine 
		});
	});

		describe('method: Compare', function () {
			it('case5 : compares the dom trees and outputs the final result', function () {
		var domNode = VWO.DOMComparator.create({
		
		nodeA: VWO.DOMNode.create({el:$('<section class="a" style="color:blue"><div class="b"><div class="c"><h2 class="d">The</h2></div></div></a></section>').get(0)}),												    		
		
		nodeB: VWO.DOMNode.create({el:$('<section class="a1" style="color:red"><div class="b"><div class="c"><h2 class="d">The</h2></div></div></a></section>').get(0)})

		});
				
			//expect(domNode.compare()).toBe('') ; 
			// 1. Attr 2. css   3.inserNode  
			// Works fine 

		});
	});

		describe('method: Compare', function () {
			it('case6 : compares the dom trees and outputs the final result', function () {
		var domNode = VWO.DOMComparator.create({
		
		nodeA: VWO.DOMNode.create({el:$('<ul><li><a href="/about">Our Team</a></li><li><a href="/lab" style="color:red">Labs</a></li><li><a href="/careers">Careers</a></li><li class="trigger-contact"><a href="/contact" class="">Contact</a></li></ul>').get(0)}),												    		
		
		nodeB: VWO.DOMNode.create({el:$('<ul><li><a href="/about">Our Team</a></li><li><a href="/labs">Labs</a></li><li><a href="/careers">Careers</a></li><li class="trigger-contact"><a href="/contact" class="">Contact Us</a></li></ul>').get(0)})										    		
		});
		        		
//			expect(domNode.compare()).toBe('') ; 

		});
	});

		describe('method: Compare', function () {
			it('case7 : compares the dom trees and outputs the final result', function () {
		var domNode = VWO.DOMComparator.create({
		
		nodeA: VWO.DOMNode.create({el:$('<ul><li><a href="/hello">Hello</a></li><li><a href="/about">Our</a></li><li><a href="/lab">Labs</a></li><li><a href="/careers">Careers</a></li></ul>').get(0)}),												    		
		
		nodeB: VWO.DOMNode.create({el:$('<ul><li><a href="/about">Our Team</a></li><li><a href="/lab">Labs</a></li><li><a href="/careers">Careers</a></li><li><a href="/hello">Hello</a></li></ul>').get(0)}) 											    		
		});
		        		
	//		expect(domNode.compare()).toBe('') ; 
			
		// Output -> 
			// { name : 'insertNode', selectorPath : null, content : { html : 'Our Team', parentSelectorPath : 'DIV#DOMComparisonResult > UL:first-child > LI:first-child + LI > A:first-child', indexInParent : 1, existsInDOM : true } }, { name : 'insertNode', selectorPath : null, content : { html : '<li><a href="/hello">Hello</a></li>', parentSelectorPath : 'DIV#DOMComparisonResult > UL:first-child', indexInParent : 4, existsInDOM : true } }, { name : 'deleteNode', selectorPath : null, content : { parentSelectorPath : 'DIV#DOMComparisonResult > UL:first-child', indexInParent : 0, existsInDOM : false } }, { name : 'deleteNode', selectorPath : null, content : { parentSelectorPath : 'DIV#DOMComparisonResult > UL:first-child > LI:first-child > A:first-child', indexInParent : 0, existsInDOM : false } }


		});
	});

		describe('method: Compare', function () {
			it('case8 : compares the dom trees and outputs the final result', function () {
		var domNode = VWO.DOMComparator.create({
		
		nodeA: VWO.DOMNode.create({el:$('<div class="a"></div>').get(0)}),												    		
		nodeB: VWO.DOMNode.create({el:$('<div class="ta-c"><a href="vwo.com" style="color:red">Learn</a><h2>Himanshu</h2></div>').get(0)})												    		
		});

		// 	expect(domNode.compare()).toBe('') ; 

	//	Output --> 
			// { name : 'insertNode', selectorPath : null, content : { html : '<a href="vwo.com" style="color:red">Learn</a>', parentSelectorPath : 'DIV#DOMComparisonResult > DIV:first-child', indexInParent : 0, existsInDOM : true } }, { name : 'insertNode', selectorPath : null, content : { html : '<h2>Himanshu</h2>', parentSelectorPath : 'DIV#DOMComparisonResult > DIV:first-child', indexInParent : 1, existsInDOM : true } }, { name : 'attr', selectorPath : 'DIV#DOMComparisonResult > DIV:first-child', content : { class : 'ta-c' } }

		});
	});


		describe('method: Compare', function () {
			it('case9 : compares the dom trees and outputs the final result', function () {
		var domNode = VWO.DOMComparator.create({
			
		nodeA: VWO.DOMNode.create({el:$('<div id="sub_menu_campuslife" style="display: block;"><ul><li><a onfocus="if(this.blur)this.blur()" id="sub" href="http://iiit.ac.in/content/students_attendance">Student Attendance</a></li><li><a onfocus="if(this.blur)this.blur()" id="sub" href="http://iiit.ac.in/studentscorner/campus-life">Campus Life</a></li><!--li><a  onfocus="if(this.blur)this.blur()" id=sub href="http://iiit.ac.in/studentscorner/students" >Students</a></li--><li><a onfocus="if(this.blur)this.blur()" id="sub" href="http://iiit.ac.in/studentscorner/clubs">Clubs</a></li></ul></div>').get(0)}),							

		nodeB: VWO.DOMNode.create({el:$('<div id="sub_menu_campuslife" style="display: block;"><ul><li><a onfocus="if(this.blur)this.blur()" id="sub" href="http://iiit.ac.in/content/students_attendance">Student Attendance</a></li><li><a onfocus="if(this.blur)this.blur()" id="sub" href="http://iiit.ac.in/studentscorner/campus-life">Campus Life</a></li><!--li><a  onfocus="if(this.blur)this.blur()" id=sub href="http://iiit.ac.in/studentscorner/students" >Students</a></li--><li><a onfocus="if(this.blur)this.blur()" id="sub" href="http://iiit.ac.in/studentscorner/clubs">Clubs</a></li></ul></div>').get(0)})							
		});

//		 	expect(domNode.compare()).toBe('') ; 
			
			// Comments are assumed to be inserted ........  
			// 1. insertNode    2.deleteNode 

			// Output --> 
			// { name : 'insertNode', selectorPath : null, content : { html : '<a onfocus="if(this.blur)this.blur()" id="sub" href="http://iiit.ac.in/studentscorner/clubs">Clubs</a>', parentSelectorPath : 'DIV#DOMComparisonResult > DIV#sub_menu_campuslife:first-child > UL:first-child > LI:first-child + LI + LI', indexInParent : 1, existsInDOM : true } }, { name : 'deleteNode', selectorPath : null, content : { parentSelectorPath : 'DIV#DOMComparisonResult > DIV#sub_menu_campuslife:first-child > UL:first-child > LI:first-child + LI + LI', indexInParent : 0, existsInDOM : false }

		});
	});


		describe('method: Compare', function () {
			it('case10 : compares the dom trees and outputs the final result', function () {
		var domNode = VWO.DOMComparator.create({
			
		
		nodeA: VWO.DOMNode.create({el:$('<ul class="tabs "><li id="news_tab" class=""><a href="javascript:void(0);" onmouseover="ShowTabContent(1);"><span>News</span></a></li><li id="events_tab" class=""><a href="javascript:void(0);" onmouseover="ShowTabContent(2);"><span>Events</span></a></li><li id="notice_tab" class=""><a href="javascript:void(0);" onmouseover="ShowTabContent(3);"><span>Notice</span></a></li><li id="fop_tab" class="active"><a href="javascript:void(0);" onmouseover="ShowTabContent(4);"><span>Careers</span></a></li><li id="academic_tab" class=""><a href="javascript:void(0);" onmouseover="ShowTabContent(511);"><span>Academics</span></a></li></ul>').get(0)}),												    		
		nodeB: VWO.DOMNode.create({el:$('<ul class="tabs "><li id="news_tab" class=""><a href="javascript:void(0);" onmouseover="ShowTabContent(1);"><span>News</span></a></li><li id="events_tab" class=""><a href="javascript:void(0);" onmouseover="ShowTabContent(2);"><span>Events</span></a></li><li id="notice_tab" class=""><a href="javascript:void(0);" onmouseover="ShowTabContent(3);"><span>Notice</span></a></li><li id="fop_tab" class="active"><a href="javascript:void(0);" onmouseover="ShowTabContent(4);"><span>Careers</span></a></li><li id="academic_tab" class=""><a href="javascript:void(0);" onmouseover="ShowTabContent(5);"><span>Academics</span></a></li></ul>').get(0)})												    		

		});

		// 	expect(domNode.compare()).toBe('') ; 
			
		// Random attr changes  .... 
		// Works fine 
			
		});
	});

		describe('method: Compare', function () {
			it('case11 : compares the dom trees and outputs the final result', function () {
		var domNode = VWO.DOMComparator.create({
		
		nodeA: VWO.DOMNode.create({el:$('<ul><li>ITEM2</li><li>ITEM3</li><li>ITEM4</li><li>ITEM5</li></ul>').get(0)}),												    		
		nodeB: VWO.DOMNode.create({el:$('<ul><li>ITEM1</li><li>ITEM2</li><li>ITEM3</li><li>ITEM4</li><li>ITEM5</li></ul>').get(0)})												    		
		});
		        		
		// 	expect(domNode.compare()).toBe('') ; 
		// Output -> 
		// Asks to insert all the nodes , so not optimized ... But the steps are right 	

		});
	});

		describe('method: Compare', function () {
			it('case12 : compares the dom trees and outputs the final result', function () {
		var domNode = VWO.DOMComparator.create({
		
		nodeA: VWO.DOMNode.create({el:$('<div id="footer"><div>&nbsp;</div>(c) Paras Chopra |  <a href="http://visualwebsiteoptimizer.com/" title="A/B Testing Software">A/B Testing Software</a> | <a href="http://visualwebsiteoptimizer.com/" title="Multivariate Testing Software">Multivariate Testing Software</a> | <a href="http://visualwebsiteoptimizer.com/" title="Split Testing Software">Split Testing Software</a><div class="vwo_1403601793422 vwo_1403601805554">&nbsp;</div></div>').get(0)}),												    		

	
		nodeB: VWO.DOMNode.create({el:$('<div id="footer"><div>&nbsp;</div>Paras Chopra |  <a href="http://visualwebsiteoptimizer.com/" title="A/B Testing Software">A/B Testing Software</a> | <a href="http://visualwebsiteoptimizer.com/" title="Multivariate Testing Software">Multivariate Testing Software</a> | <a href="http://visualwebsiteoptimizer.com/" title="Split Testing Software" style="color:red">Split Testing</a><div class="vwo_1403601793422 vwo_1403601805554">&nbsp;</div></div>').get(0)})												    		
	//	nodeB: VWO.DOMNode.create({el:$('').get(0)})												    		


		});
		        		
	//	 	expect(domNode.compare()).toBe('') ;

			// Output ---> 
			// { name : 'insertNode', selectorPath : null, content : { html : 'Split Testing', parentSelectorPath : 'DIV#DOMComparisonResult > DIV#footer:first-child > DIV:first-child + A + A + A', indexInParent : 1, existsInDOM : true } }, { name : 'changeText', selectorPath : null, content : { text : 'Paras Chopra |  ', parentSelectorPath : 'DIV#DOMComparisonResult > DIV#footer:first-child', indexInParent : 1 } }, { name : 'css', selectorPath : 'DIV#DOMComparisonResult > DIV#footer:first-child > DIV:first-child + A + A + A', content : { color : 'red' } }, { name : 'deleteNode', selectorPath : null, content : { parentSelectorPath : 'DIV#DOMComparisonResult > DIV#footer:first-child > DIV:first-child + A + A + A', indexInParent : 0, existsInDOM : false } }

			// Works fine 
		});
	});

		describe('method: Compare', function () {
			it('case13 : compares the dom trees and outputs the final result', function () {
		var domNode = VWO.DOMComparator.create({

		nodeA: VWO.DOMNode.create({el:$('<div id="bottom-mid"><h2><a href="http://www.paraschopra.com/personal.php">Personal</a></h2></div>').get(0)}), 												    		
		nodeB: VWO.DOMNode.create({el:$('<div class="a"></div>').get(0)})												    		
		});
		        		
		// 	expect(domNode.compare()).toBe('') ;

		// 	*** for almost different nodes , if the parent structure is same, then works ...... 
		// 	***  If parent is not same, then typeError or SelectorPath error is shown ... 


			// Output --->
			// { name : 'attr', selectorPath : 'DIV#DOMComparisonResult > DIV#bottom-mid:first-child', content : { class : 'a' } }, { name : 'removeAttr', selectorPath : 'DIV#DOMComparisonResult > DIV#bottom-mid:first-child', content : { id : 'bottom-mid' } }, { name : 'deleteNode', selectorPath : null, content : { parentSelectorPath : 'DIV#DOMComparisonResult > DIV:first-child', indexInParent : 0, existsInDOM : false }

			// Works Fine 

		});
	});
	
		describe('method: Compare', function () {
			it('case14 : compares the dom trees and outputs the final result', function () {
		var domNode = VWO.DOMComparator.create({

		nodeA: VWO.DOMNode.create({el:$('<a href="#" data-suid="30345976" class="tab-change " data-b="_ylt=A2KLtXJObqlTcGEAflGuitIF" id="tab-p_30345976">               <span class="world-cup"><b class="wc-text">World Cup</b><span class="next-game fz-xxs">Next up</span><span class="name ell">Costa Rica</span><img src="https://sp.yimg.com/j/assets/i/us/sp/v/soccer/teams/70x70/443.png" alt="" class="team-icon"><span class="vs">v</span><img src="https://sp.yimg.com/j/assets/i/us/sp/v/soccer/teams/70x70/377.png" alt="" class="team-icon"><span class="name ell">England</span></span></a>').get(0)}), 						

		nodeB: VWO.DOMNode.create({el:$('<a class="a"></a>').get(0)})												    		
		});
		        		
		// 	expect(domNode.compare()).toBe('') ;


		// Output --> 
		// { name : 'attr', selectorPath : 'DIV#DOMComparisonResult > A#tab-p_30345976:first-child', content : { class : 'a' } }, { name : 'removeAttr', selectorPath : 'DIV#DOMComparisonResult > A#tab-p_30345976:first-child', content : { href : '#', data-suid : '30345976', data-b : '_ylt=A2KLtXJObqlTcGEAflGuitIF', id : 'tab-p_30345976' } }, { name : 'deleteNode', selectorPath : null, content : { parentSelectorPath : 'DIV#DOMComparisonResult > A:first-child', indexInParent : 0, existsInDOM : false } }

		});
	});


		describe('method: Compare', function () {
			it('case15 : compares the dom trees and outputs the final result', function () {
		var domNode = VWO.DOMComparator.create({

		nodeA: VWO.DOMNode.create({el:$('<a href="da" class="tab" data-b="ylt" id="tab"><span class="world"><b class="wc">World</b><span class="n">Next up</span><span class="n">Costa Rica</span><img src="hi" class="team-icon"><span class="vs">v</span><img src="Hi" alt="" class="team-icon"><span class="name">Eng</span></span></a>').get(0)}), 						

		nodeB: VWO.DOMNode.create({el:$('<a href="da" class="tab" data-b="ylt" id="tab"><span class="world"><b class="wc">World</b><span class="n">Next up</span><span class="n">Costa Rica</span><img src="hi" class="team-icon"><span class="vs">v</span><img src="Hi" alt="" class="team-icon"><span class="name">Eng</span></span></a>').get(0)}) 						

		});
			// One letter issue .... e.g here <span class="vs">v .... "v" was not considered as a word .. 		 			
//			expect(domNode.compare()).toBe('') ;
			
			// Works fine 
		});
	});


		describe('method: Compare', function () {
			it('case16 : compares the dom trees and outputs the final result', function () {
		var domNode = VWO.DOMComparator.create({

		nodeA: VWO.DOMNode.create({el:$('<a href="da"></a>').get(0)}), 			

		nodeB: VWO.DOMNode.create({el:$('<a href="da" class="tab" data-b="ylt" id="tab"><span class="world"><b class="wc">World</b><span class="n">Next up</span><span class="n">Costa Rica</span><img src="hi" class="team-icon"><span class="vs">vilan</span><img src="Hi" alt="" class="team-icon"><span class="name">Eng</span></span></a>').get(0)}) 						

		});

			//expect(domNode.compare()).toBe('') ;
			
			// Output --> 
			// { name : 'insertNode', selectorPath : null, content : { html : '<span class="world"><b class="wc">World</b><span class="n">Next up</span><span class="n">Costa Rica</span><img src="hi" class="team-icon"><span class="vs">vilan</span><img src="Hi" alt="" class="team-icon"><span class="name">Eng</span></span>', parentSelectorPath : 'DIV#DOMComparisonResult > A:first-child', indexInParent : 0, existsInDOM : true } }, { name : 'attr', selectorPath : 'DIV#DOMComparisonResult > A:first-child', content : { class : 'tab', data-b : 'ylt', id : 'tab' } }

		       	
			
		});
	});

		describe('method: Compare', function () {
			it('case17 : compares the dom trees and outputs the final result', function () {
		var domNode = VWO.DOMComparator.create({

		nodeA: VWO.DOMNode.create({el:$('<a href="da"><p>Hello Boy</p></a>').get(0)}), 			

		nodeB: VWO.DOMNode.create({el:$('<p>Hello Boy</p>').get(0)})

		});
		//	expect(domNode.compare()).toBe('') ;
			// Works fine 
		
		});
	});


		describe('method: Compare', function () {
			it('case18 : compares the dom trees and outputs the final result', function () {
		var domNode = VWO.DOMComparator.create({
		nodeA: VWO.DOMNode.create({el:$('<a href="da"><span><span class="name">Eng</span></span></a>').get(0)}), 						
		nodeB: VWO.DOMNode.create({el:$('<a href="da"><span class="world"><span class="name">Eng</span></span></a>').get(0)}) 						
		});
			//expect(domNode.compare()).toBe('') ;
			
		});
	});
	
		describe('method: Compare', function () {
			it('case19 : compares the dom trees and outputs the final result', function () {
		var domNode = VWO.DOMComparator.create({

		nodeA: VWO.DOMNode.create({el:$('<div class="article"><a class="article" href="http://mashable.com/">Lifestyle</a><h1 class="article"><a data-turbo-target="post-slider" href="http://mashable.com/2014/06/25/space-tourism-hot-air-balloon/">Hot-Air to Take Tourists 20 Miles Above Earth</a></h1><div class="article-byline">The Associated Press</div><p class="article-excerpt">A space-tourism company to offer tourists trips to space for $75,000</p></div>').get(0)}),

		nodeB: VWO.DOMNode.create({el:$('<div class="article"><a class="article" href="http://mashable.com/">Lifestyle</a><h1 class="article"><a data-turbo-target="post-slider" href="http://mashable.com/2014/06/25/space-tourism-hot-air-balloon/">Hot-Air to Take Tourists 20 Miles Above Earth</a></h1><div class="article-byline">The Associated Press</div><p class="article-excerpt">A space-tourism company to offer tourists trips to space for $75,000</p></div>').get(0)})
		});

		//	expect(domNode.compare()).toBe('') ;
			
		});
	});

		describe('method: Compare', function () {
			it('case20 : compares the dom trees and outputs the final result', function () {
		var domNode = VWO.DOMComparator.create({

		nodeA: VWO.DOMNode.create({el:$('<div><span class="cur">1</span></div>').get(0)}), 
		
		nodeB: VWO.DOMNode.create({el:$('<div><span class="current">1</span></div>').get(0)})

		});
			// 1 letter problem for the other things changed ... 

	//		expect(domNode.compare()).toBe() ;
			// was not working fine .... now works :D 
		});
	});

		describe('method: Compare', function () {
			it('case21 : compares the dom trees and outputs the final result', function () {
		var domNode = VWO.DOMComparator.create({

		nodeA: VWO.DOMNode.create({el:$('<div class="meta            "><div class="buttons"><a class="btn btn-large btn-primary open-gallery" href="#">Open Gallery</a><a class="btn btn-large btn-primary next" href="#">Next</a><a class="nice" href="#">Prev</a><span class="slides"><span class="current">1</span><span class="total">9</span></span></div><h2 class="title">The Face of Android Wear</h2><div class="caption"><p>The Motorola Moto 500 is the first Android Wear smartwatch with a round face. And it\'s beautiful.</p></div><div class="credit"></div></div>').get(0)}), 


		nodeB: VWO.DOMNode.create({el:$('<div class="meta            "><div class="buttons"><a class="btn btn-large btn-primary open-gallery" href="#">Open Gallery</a><a class="btn btn-large btn-primary next" href="#">Next</a><a class="btn btn-large btn-primary prev" href="#">Prev</a><span class="slides"><span class="current">1</span><span class="total">9</span></span></div><h2 class="title">The Face of Android Wear</h2><div class="caption"><p>The Motorola Moto 360 is the first Android Wear smartwatch with a round face. And it\'s beautiful.</p></div><div class="credit"></div></div>').get(0)})

		});
//			expect(domNode.compare()).toBe() ;

		});
	});


		describe('method: Compare', function () {
			it('case 22 : compares the dom trees and outputs the final result', function () {
		var domNode = VWO.DOMComparator.create({

		nodeA: VWO.DOMNode.create({el:$('<div class"a"><span class="current">1</span></div>').get(0)}), 
		
		nodeB: VWO.DOMNode.create({el:$('<div><span class="current">1</span></div>').get(0)})

		});
		//	expect(domNode.compare()).toBe('') ;

			// Problems for class removed ... 
			// Initially Not working ....
			// Now fixed ..... changes done in string-comparator.js
		});
	});





		describe('method: Compare', function () {
			it('case 23 : compares the dom trees and outputs the final result', function () {
		var domNode = VWO.DOMComparator.create({

		nodeA: VWO.DOMNode.create({el:$('<ul class="features-list"><li class="testingfl"><div class="titlemediumbold">Testing</div><div class="text">Easily run A/B tests on your website</div></li><li class="heatmapsfr"><div class="titlemediumbold">Heatmaps</div><div class="text">Track visitors click behavior</div></li><div class="clr"></div><li class="personalizationfl"><div class="titlemediumbold">Personalization</div><div class="text">Show targeted offers to visitors</div></li><li class="user-insightsfr"><div class="titlemediumbold">User Insights</div><div class="text">Get feedback from people on your website</div></li><div class="clr"></div></ul>').get(0)}), 
		
		nodeB: VWO.DOMNode.create({el:$('<ul class="features-list"><li class="testingfl"><div class="titlemediumbold">Testing</div><div class="text">Easily run A/B tests on your website</div><h3>Himanshu </h3></li><li class="heatmapsfr"><div class="titlemediumbold">Heatmaps</div><div class="text">Track visitors click behavior</div></li><div class="clr"></div><li class="personalizationfl"><div class="titlemediumbold">Personalization</div><div class="text" style="color:red">Show targeted offers to visitors</div></li><li class="user-insightsfr"><div class="titlemediumbold">User Insights</div><div class="himanshu">Get feedback people on your website</div></li><div class="clr"></div></ul>').get(0)})

		});

			// expect(domNode.compare()).toBe('') ;

		// Output ---> 

			//  { name : 'insertNode', selectorPath : null, content : { html : '<h3>Himanshu </h3>', parentSelectorPath : 'DIV#DOMComparisonResult > UL:first-child > LI:first-child', indexInParent : 2, existsInDOM : true } }, { name : 'insertNode', selectorPath : null, content : { html : 'Get feedback people on your website', parentSelectorPath : 'DIV#DOMComparisonResult > UL:first-child > LI:first-child + LI + DIV + LI + LI > DIV:first-child + DIV', indexInParent : 1, existsInDOM : true } }, { name : 'attr', selectorPath : 'DIV#DOMComparisonResult > UL:first-child > LI:first-child + LI + DIV + LI + LI > DIV:first-child + DIV', content : { class : 'himanshu' } }, { name : 'css', selectorPath : 'DIV#DOMComparisonResult > UL:first-child > LI:first-child + LI + DIV + LI > DIV:first-child + DIV', content : { color : 'red' } }, { name : 'deleteNode', selectorPath : null, content : { parentSelectorPath : 'DIV#DOMComparisonResult > UL:first-child > LI:first-child + LI + DIV + LI + LI > DIV:first-child + DIV', indexInParent : 0, existsInDOM : false } }

		});
	});
	

		// Comments thing not working .... 

		describe('method: Compare', function () {
			it('case 24 : compares the dom trees and outputs the final result', function () {
		var domNode = VWO.DOMComparator.create({

nodeA: VWO.DOMNode.create({el:$('<div class="container"><!-- <a href="google""></a> --><b>Visual</b></div>').get(0)}), 

nodeB: VWO.DOMNode.create({el:$('<div class="container"><!-- <a href="google""></a> --><b>Visual</b></div>').get(0)})

		});
			
			// Error with comments .... Unnecessary inserts are shown ... ???? 
			// Not working 
	//		expect(domNode.compare()).toBe('') ;

		});
	});

		describe('method: Compare', function () {
			it('case 25 : compares the dom trees and outputs the final result', function () {
		var domNode = VWO.DOMComparator.create({

nodeA: VWO.DOMNode.create({el:$('<div class="nav-item"><a href="http://vwo.com/"><div class="logo-vwo"></div></a><div class="links-wrapper"><a href="/careers" class="link">Careers</a><a href="/about" class="link">Team</a></div><div class="clr"></div><ul><li><a href="http://vwo.com/blog/">Blog</a></li><li><a href="http://team.wingify.com/">Team Blog</a></li><li><a href="http://engineering.wingify.com/">Engineering Blog</a></li><li class=""><a href="/contact">Contact Us</a></li></ul><div class="copyrightnav-item"><ul><li><span>Copyright © Wingify</span></li><li><a href="http://visualwebsiteoptimizer.com/terms-conditions.php">Terms of Use</a></li><li><a href="http://visualwebsiteoptimizer.com/privacy-policy.php">Privacy Policy</a></li></ul></div><div class="clr"></div></div>').get(0)}), 

nodeB: VWO.DOMNode.create({el:$('<div class="nav-item"><a href="http://vwo.com/"><div class="logo-vwo"></div></a><div class="links-wrapper"><a href="/careers" class="link">Careers</a><a href="/about" class="link">Team</a></div><div class="clr"></div><ul><li><a href="http://vwo.com/blog/">Blog</a></li><li><a href="http://team.wingify.com/">Team Blog</a></li><li><a href="http://engineering.wingify.com/">Engineering Blog</a></li><li class=""><a href="/contact">Contact Us</a></li></ul><div class="copyrightnav-item"><ul><li><span>Copyright © Wingify</span></li><li><a href="http://visualwebsiteoptimizer.com/terms-conditions.php">Terms of Use</a></li><li><a href="http://visualwebsiteoptimizer.com/privacy-policy.php">Privacy Policy</a></li></ul></div><div class="clr"></div></div>').get(0)})

		});
			
//			expect(domNode.compare()).toBe('') ;
		   // Works fine .... 

		});
	});



		describe('method: Compare', function () {
			it('case  26: compares the dom trees and outputs the final result', function () {
		var domNode = VWO.DOMComparator.create({

nodeA: VWO.DOMNode.create({el:$('<section class="section section-context-sense"><div class="container"><div class="grid_one_third alpha icon tab-grid-one-third"><img src="/images/labs/context_sens_2@2x.png"></div><div class="grid_two_third omega tab-grid-two-third"><div class="title bigger blue-dark">Context Sense</div><p class="text">Extracts sentiment, tags, concepts and categories from a URL or piece of text. Fetches webpages from the Internet which are perfectly targeted according to context and semantics.</p><form method="get" action="/contextsense" class="form-input-button"><input type="text" name="url" class="input-text inline" placeholder="http://wingify.com/"><input type="submit" class="button dark-blue filled-shadow clickable" value="Go"></form></div><div class="clr"></div></div></section>').get(0)}), 

nodeB: VWO.DOMNode.create({el:$('<section class="section section-context-sense"><div class="container"><div class="grid_one_third alpha icon tab-grid-one-third"><img src="/images/labs/context_sens_2@2x.png"></div><div class="grid_two_third omega tab-grid-two-third"><div class="title bigger">Context Sense</div><p class="text">Extracts sentiment,concepts and categories from a URL or piece of text. Fetches webpages from the Internet which are perfectly targeted according to context and semantics.</p><form method="get" action="/contextsense" class="form-input-button"><input type="text" name="url" class="input-text inline" placeholder="http://wingify.com/"><input type="submit" class="button dark-blue filled-shadow clickable" value="Go"></form></div><div class="clr"></div></div></section>').get(0)})

		});
			
			// expect(domNode.compare()).toBe('') ;
			// Works fine ---  

		});
	});




		describe('method: Compare', function () {
			it('case 27 : compares the dom trees and outputs the final result', function () {
		var domNode = VWO.DOMComparator.create({

nodeA: VWO.DOMNode.create({el:$('<nav class="head_nav"><ul><li><a href="/welcome">Home</a></li><li><a href="/home_bolly">Bollywood</a></li><li><a href="/home_tolly">Tollywood</a></li></ul></nav>').get(0)}), 

nodeB: VWO.DOMNode.create({el:$('<nav class="head_nav"><ul><li><a href="/welcome" style="color:blue">Home</a></li><li><a href="/home_bolly">Boll</a></li><li><a href="/home_tolly" class="hello">Tollywood</a></li></ul></nav>').get(0)})

		});
		//	expect(domNode.compare()).toBe('') ;

		});
	});


		describe('method: Compare', function () {
			it('case  28: compares the dom trees and outputs the final result', function () {
		var domNode = VWO.DOMComparator.create({

nodeA: VWO.DOMNode.create({el:$('<div class="inner"><h2>daily reddit gold goal</h2><div class="progress"><p>3%</p><div class="bar"><span style="width:3%"></span></div></div><a href="/gold?goldtype=code&amp;source=progressbar" target="_blank">help support reddit</a><div class="gold-bubble hover-bubble help-bubble anchor-top-centered"><p><span class="gold-branding">reddit gold</span> gives you extra features and helps keep our servers running. We believe the more reddit can be user-supported, the freer we will be to make reddit the best it can be.</p><p class="buy-gold">Buy gold for yourself to gain access to <a href="/gold/about" target="_blank">extra features</a> and <a href="/r/goldbenefits" target="_blank">special benefits</a>. A month of gold pays for  <b>231.26 minutes</b> of reddit server time!</p><p class="give-gold">Give gold to thank exemplary people and encourage them to post more.</p><p class="aside">This daily goal updates every 10 minutes and is reset at midnight <a target="_blank" href="http://en.wikipedia.org/wiki/Pacific_Time_Zone">Pacific Time</a>  (1 day, 12 minutes from now).</p><div class="history"><p>Yesterday\'s reddit gold goal</p><div class="progress"><p>103%</p><div class="bar"><span style="width:100%"></span></div></div></div></div></div>').get(0)}), 

nodeB: VWO.DOMNode.create({el:$('<div class="inner"><h2>daily reddit gold goal</h2><div class="progress"><p>3%</p><div class="bar"><span style="width:3%"></span></div></div><a href="/gold?goldtype=code&amp;source=progressbar" target="_blank">help support reddit</a><div class="gold-bubble hover-bubble help-bubble anchor-top-centered"><p><span class="gold-branding">reddit gold</span> gives you extra features and helps keep our servers running. We believe the more reddit can be user-supported, the freer we will be to make reddit the best it can be.</p><p class="buy-gold">Buy gold for yourself to gain access to <a href="/gold/about" target="_blank">extra features</a> and <a href="/r/goldbenefits" target="_blank">special benefits</a>. A month of gold pays for  <b>231.26 minutes</b> of reddit server time!</p><p class="give-gold">Give gold to thank exemplary people and encourage them to post more.</p><p class="aside">This daily goal updates every 10 minutes and is reset at midnight <a target="_blank" href="http://en.wikipedia.org/wiki/Pacific_Time_Zone">Pacific Time</a>  (1 day, 12 minutes from now).</p><div class="history"><p>Yesteay\'s reddit gold goal</p><div class="progress"><p>103%</p><div class="bar"><span style="width:100% "></span></div></div></div></div></div>').get(0)})

		});
			
	//		expect(domNode.compare()).toBe('') ;

		});
	});




		describe('method: Compare', function () {
			it('case  : compares the dom trees and outputs the final result', function () {
		var domNode = VWO.DOMComparator.create({

nodeA: VWO.DOMNode.create({el:$('<div by-zero="" class="footer rounded"><div class="col"><ul class="flat-vert hover"><li class="flat-vert title vwo_1404202932203">about</li><li><a href="http://www.reddit.com/blog/">blog</a></li><li><span class="separator"></span><a href="http://www.reddit.com/about/">about</a></li><li><span class="separator"></span><a href="http://www.reddit.com/about/team/">team</a></li><li><span class="separator"></span><a href="http://www.reddit.com/code/">source code</a></li><li><span class="separator"></span><a href="http://www.reddit.com/advertising/">advertise</a></li><li><span class="separator"></span><a href="http://www.reddit.com/r/redditjobs/">jobs</a></li></ul></div><div class="col"><ul class="flat-vert hover"><li class="flat-vert title">help</li><li><a href="http://www.reddit.com/wiki/">wiki</a></li><li><span class="separator"></span><a href="http://www.reddit.com/wiki/faq">FAQ</a></li><li><span class="separator"></span><a href="http://www.reddit.com/wiki/reddiquette">reddiquette</a></li><li><span class="separator"></span><a href="http://www.reddit.com/rules/">rules</a></li><li><span class="separator"></span><a href="http://www.reddit.com/contact/">contact us</a></li></ul></div><div class="col"><ul class="flat-vert hover"><li class="flat-vert title">tools</li><li><a href="http://i.reddit.com">mobile</a></li><li><span class="separator"></span><a href="https://addons.mozilla.org/firefox/addon/socialite/">firefox extension</a></li><li><span class="separator"></span><a href="https://chrome.google.com/webstore/detail/algjnflpgoopkdijmkalfcifomdhmcbe">chrome extension</a></li><li><span class="separator"></span><a href="http://www.reddit.com/buttons/">buttons</a></li><li><span class="separator"></span><a href="http://www.reddit.com/widget/">widget</a></li></ul></div><div class="col"><ul class="flat-vert hover"><li class="flat-vert title">&lt;3</li><li><a href="http://www.reddit.com/gold/about/" class="buygold">reddit gold</a></li><li><span class="separator"></span><a href="http://www.reddit.com/store/">store</a></li><li><span class="separator"></span><a href="http://redditgifts.com">redditgifts</a></li><li><span class="separator"></span><a href="http://reddit.tv">reddit.tv</a></li><li><span class="separator"></span><a href="http://radioreddit.com">radio reddit</a></li></ul></div></div>').get(0)}), 

nodeB: VWO.DOMNode.create({el:$('<div by-zero="" class="footer rounded"><div class="col"><ul class="flat-vert hover"><li class="flat-vert title vwo_1404202932203">about</li><li><a href="http://www.reddit.com/blog/">blog</a></li><li><span class="separator"></span><a href="http://www.reddit.com/about/">about</a></li><li><span class="separator"></span><a href="http://www.reddit.com/about/team/">team</a></li><li><span class="separator"></span><a href="http://www.reddit.com/code/">source code</a></li><li><span class="separator"></span><a href="http://www.reddit.com/advertising/">advertise</a></li><li><span class="separator"></span><a href="http://www.reddit.com/r/redditjobs/">jobs</a></li></ul></div><div class="col"><ul class="flat-vert hover"><li class="flat-vert title">help</li><li><a href="http://www.reddit.com/wiki/">wiki</a></li><li><span class="separator"></span><a href="http://www.reddit.com/wiki/faq">FAQ</a></li><li><span class="separator"></span><a href="http://www.reddit.com/wiki/reddiquette">reddiquette</a></li><li><span class="separator"></span><a href="http://www.reddit.com/rules/">rules</a></li><li><span class="separator"></span><a href="http://www.reddit.com/contact/">contact us</a></li></ul></div><div class="col"><ul class="flat-vert hover"><li class="flat-vert title">tools</li><li><a href="http://i.reddit.com">mobile</a></li><li><span class="separator"></span><a href="https://addons.mozilla.org/firefox/addon/socialite/">firefox extension</a></li><li><span class="separator"></span><a href="https://chrome.google.com/webstore/detail/algjnflpgoopkdijmkalfcifomdhmcbe">chrome extension</a></li><li><span class="separator"></span><a href="http://www.reddit.com/buttons/">buttons</a></li><li><span class="separator"></span><a href="http://www.reddit.com/widget/">widget</a></li></ul></div><div class="col"><ul class="flat hover"><li class="flat-vert title">&lt;3</li><li><a href="http://www.reddit.com/gold/about/" class="buygold">reddit gold</a></li><li><span class="separator"></span><a href="http://www.reddit.com/store/">store</a></li><li><span class="separator"></span><a href="http://redditgifts.com">redditgifts</a></li><li><span class="separator"></span><a href="http://reddit.tv">reddit.tv</a></li><li><span class="separator"></span><a href="http://radioreddit.com">reddit</a></li></ul></div></div>').get(0)})

		});
			
	//		expect(domNode.compare()).toBe('') ;

		});
	});


		describe('method: Compare', function () {
			it('case  29: compares the dom trees and outputs the final result', function () {
		var domNode = VWO.DOMComparator.create({

nodeA: VWO.DOMNode.create({el:$('<ul class="tabmenu about-menu"><li><a href="http://www.reddit.com/about/">about reddit</a></li><li class="selected"><a href="http://www.reddit.com/about/team/">team</a></li><li><a href="http://www.reddit.com/about/postcards/">postcards</a></li><li><a href="http://www.reddit.com/about/alien/">alien</a></li></ul>').get(0)}), 

nodeB: VWO.DOMNode.create({el:$('<ul class="tabmenu about"><li><a href="http://www.reddit.com/about/">about reddit</a></li><li class="selected"><a href="http://www.reddit.com/about/team/">team</a></li><li><a href="http://www.reddit.com/about/postcards/">postcards</a></li><li><a href="http://www.reddit.com/about/">alien</a></li></ul>').get(0)})

		});
			
		//	expect(domNode.compare()).toBe('') ;

		});
	});


		describe('method: Compare', function () {
			it('case  30: compares the dom trees and outputs the final result', function () {
		var domNode = VWO.DOMComparator.create({

nodeA: VWO.DOMNode.create({el:$('<ul class="content"><li><a href="http://www.reddit.com/user/krispykrackers" class="author may-blank id-t2_35gvu">krispykrackers</a><span class="flair flair-bulb" title=""></span><span class="userattrs"></span></li><li><a href="http://www.reddit.com/user/qgyh2" class="author may-blank id-t2_1uzpp">qgyh2</a><span class="flair flair-bulb" title=""></span><span class="userattrs"></span></li><li><a href="http://www.reddit.com/user/ytwang" class="author may-blank id-t2_8bne">ytwang</a><span class="flair flair-bulb" title=""></span><span class="userattrs"></span></li><li><a href="http://www.reddit.com/user/davidreiss666" class="author may-blank id-t2_pfn1">davidreiss666</a><span class="flair" title="Helper Monkey">Helper Monkey</span><span class="userattrs"></span></li><li><a href="http://www.reddit.com/user/Skuld" class="author may-blank id-t2_32zzr">Skuld</a><span class="flair flair-bulb" title=""></span><span class="userattrs"></span></li><li><a href="http://www.reddit.com/user/redtaboo" class="author may-blank id-t2_3belm">redtaboo</a><span class="flair flair-bulb" title=""></span><span class="userattrs"></span></li><li><a href="http://www.reddit.com/user/dzneill" class="author may-blank id-t2_3usiy">dzneill</a><span class="flair flair-bulb" title=""></span><span class="userattrs"></span></li><li><a href="http://www.reddit.com/user/Raerth" class="author may-blank id-t2_35izj">Raerth</a><span class="flair flair-bulb" title=""></span><span class="userattrs"></span></li><li><a href="http://www.reddit.com/user/sodypop" class="author may-blank id-t2_39hzo">sodypop</a><span class="flair flair-bulb" title=""></span><span class="userattrs"></span></li><li><a href="http://www.reddit.com/user/316nuts" class="author may-blank id-t2_4x3zj">316nuts</a><span class="flair flair-bulb" title=""></span><span class="userattrs"></span></li></ul>').get(0)}), 

nodeB: VWO.DOMNode.create({el:$('<ul class="content "><li><a href="http://www.reddit.com/" class="author may-blank id-t2_35gvu">krispykrackers</a><span class="flair flair-bulb" title=""></span><span class="userattrs"></span></li><li><a href="http://www.reddit.com/user/qgyh2" class="author may-blank id-t2_1uzpp">qgyh2</a><span class="flair flair-bulb" title=""></span><span class="userattrs"></span></li><li><a href="http://www.reddit.com/user/ytwang" class="author may-blank id-t2_8bne">ytwang</a><span class="flair flair-bulb" title=""></span><span class="userattrs"></span></li><li><a href="http://www.reddit.com/user/davidreiss666" class="author may-blank id-t2_pfn1">davidreiss666</a><span class="flair " title="Helper Monkey">Helper Monkey</span><span class="userattrs"></span></li><li><a href="http://www.reddit.com/user/Skuld" class="author may-blank id-t2_32zzr">Skuld</a><span class="flair flair-bulb" title=""></span><span class="userattrs"></span></li><li><a href="http://www.reddit.com/user/redtaboo" class="author may-blank id-t2_3belm">redtaboo</a><span class="flair flair-bulb" title=""></span><span class="userattrs"></span></li><li><a href="http://www.reddit.com/user/dzneill" class="author may-blank id-t2_3usiy">dzneill</a><span class="flair flair-bulb" title=""></span><span class="userattrs"></span></li><li><a href="http://www.reddit.com/user/Raerth" class="author may-blank id-t2_35izj">Raerth</a><span class="flair flair-bulb" title=""></span><span class="userattrs"></span></li><li><a href="http://www.reddit.com/user/sodypop" class="author may-blank id-t2_39hzo">sodypop</a><span class="flair flair-bulb" title=""></span><span class="userattrs"></span></li><li><a href="http://www.reddit.com/user/316nuts" class="author may-blank id-t2_4x3zj" style="color:red">316n</a><span class="flair flair-bulb" title="Jai ho"></span><span class="userattrs"></span></li></ul>').get(0)})

		});
		//	expect(domNode.compare()).toBe('') ;

		});
	});



		describe('method: Compare', function () {
			it('case 31: compares the dom trees and outputs the final result', function () {
		var domNode = VWO.DOMComparator.create({

nodeA: VWO.DOMNode.create({el:$('<ul class="content"><li><a href="http://www.reddit.com/user/krispykrackers" class="author may-blank id-t2_35gvu">krispykrackers</a><span class="flair flair-bulb" title=""></span><span class="userattrs"></span></li><li><a href="http://www.reddit.com/user/qgyh2" class="author may-blank id-t2_1uzpp">qgyh2</a><span class="flair flair-bulb vwo_1404205657551" title=""></span><span class="userattrs"></span></li><li><a href="http://www.reddit.com/user/ytwang" class="author may-blank id-t2_8bne">ytwang</a><span class="flair flair-bulb" title=""></span><span class="userattrs"></span></li><li><a href="http://www.reddit.com/user/davidreiss666" class="author may-blank id-t2_pfn1">davidreiss666</a><span class="flair" title="Helper Monkey">Helper Monkey</span><span class="userattrs"></span></li><li><a href="http://www.reddit.com/user/Skuld" class="author may-blank id-t2_32zzr">Skuld</a><span class="flair flair-bulb" title=""></span><span class="userattrs"></span></li><li><a href="http://www.reddit.com/user/redtaboo" class="author may-blank id-t2_3belm">redtaboo</a><span class="flair flair-bulb" title=""></span><span class="userattrs"></span></li><li><a href="http://www.reddit.com/user/dzneill" class="author may-blank id-t2_3usiy">dzneill</a><span class="flair flair-bulb" title=""></span><span class="userattrs"></span></li><li><a href="http://www.reddit.com/user/Raerth" class="author may-blank id-t2_35izj">Raerth</a><span class="flair flair-bulb" title=""></span><span class="userattrs"></span></li><li><a href="http://www.reddit.com/user/sodypop" class="author may-blank id-t2_39hzo">sodypop</a><span class="flair flair-bulb" title=""></span><span class="userattrs"></span></li><li><a href="http://www.reddit.com/user/316nuts" class="author may-blank id-t2_4x3zj">316nuts</a><span class="flair flair-bulb" title=""></span><span class="userattrs"></span></li></ul>').get(0)}), 

nodeB: VWO.DOMNode.create({el:$('<ul class="content"><li><a href="http://www.reddit.com/user/krispykrackers" class="author may-blank id-t2_35gvu">krispykrackers</a><span class="flair flair-bulb" title=""></span><span class="userattrs"></span></li><li><a href="http://www.reddit.com/user/qgyh2" class="author may-blank id-t2_1uzpp">qgyh2</a><span class="flair flair-bulb vwo_1404205657551" title=""></span><span class="userattrs"></span></li><li><a href="http://www.reddit.com/user/ytwang" class="author may-blank id-t2_8bne">ytwang</a><span class="flair flair-bulb" title=""></span><span class="userattrs"></span></li><li><a href="http://www.reddit.com/user/davidreiss666" class="author may-blank id-t2_pfn1">davidreiss666</a><span class="flair" title="Helper Monkey">Helper Monkey</span><span class="userattrs"></span></li><li><a href="http://www.reddit.com/user/Skuld" class="author may-blank id-t2_32zzr">Skuld</a><span class="flair flair-bulb" title=""></span><span class="userattrs"></span></li><li><a href="http://www.reddit.com/user/redtaboo" class="author may-blank id-t2_3belm">redtaboo</a><span class="flair flair-bulb" title=""></span><span class="userattrs"></span></li><li><a href="http://www.reddit.com/user/dzneill" class="author may-blank id-t2_3usiy">dzneill</a><span class="flair flair-bulb" title=""></span><span class="userattrs"></span></li><li><a href="http://www.reddit.com/user/Raerth" class="author may-blank id-t2_35izj">Raerth</a><span class="flair flair-bulb" title=""></span><span class="userattrs"></span></li><li><a href="http://www.reddit.com/user/sodypop" class="author may-blank id-t2_39hzo">sodypop</a><span class="flair flair-bulb" title=""></span><span class="userattrs"></span></li><li><a href="http://www.a.com" width="90" class="author may-blank id-t2_4x3zj">316nuts</a><span class="flair flair-bulb" title=""></span><span class="Hello">HEloooooo</span></li></ul>').get(0)})

		});
			
	//	expect(domNode.compare()).toBe('') ;

		});
	});



		describe('method: Compare', function () {
			it('case 32: compares the dom trees and outputs the final result', function () {
		var domNode = VWO.DOMComparator.create({


nodeA: VWO.DOMNode.create({el:$('<ul class="content"></ul>').get(0)}),
nodeB: VWO.DOMNode.create({el:$('<div>Third</div><ul class="content"></ul>').get(null)})


		});
			//expect(domNode.compare()).toBe('') ;

		});
	});



		describe('method: Compare', function () {
			it('case 33: compares the dom trees and outputs the final result', function () {
		var domNode = VWO.DOMComparator.create({


nodeA: VWO.DOMNode.create({el:$('<ul class="content"></ul>').get(0)}),
nodeB: VWO.DOMNode.create({el:$('<ul class="content"></ul><div>Third</div>').get(null)})


		});
//		 	expect(domNode.compare()).toBe('') ;

			// Bug Fixing done in string-comparator.js  

		});
	});


		describe('method: Compare', function () {
			it('case 34: compares the dom trees and outputs the final result', function () {
		var domNode = VWO.DOMComparator.create({


nodeA: VWO.DOMNode.create({el:$('<ul class="content"></ul><div>Third</div>').get(null)}), 
nodeB: VWO.DOMNode.create({el:$('<ul class="content"></ul>').get(0)})


		});
//			expect(domNode.compare()).toBe('') ;
			// Bug Fixing done in string-comparator.js  

		});
	});





		describe('method: Compare', function () {
			it('case 35: compares the dom trees and outputs the final result', function () {
		var domNode = VWO.DOMComparator.create({

nodeA: VWO.DOMNode.create({el:$('<ul class="content"><li><a href="http://www.reddit.com/user/krispykrackers" class="author may-blank id-t2_35gvu">krispykrackers</a><span class="flair flair-bulb" title=""></span><span class="userattrs"></span></li><li><a href="http://www.reddit.com/user/qgyh2" class="author may-blank id-t2_1uzpp">qgyh2</a><span class="flair flair-bulb vwo_1404205657551" title=""></span><span class="userattrs"></span></li><li><a href="http://www.reddit.com/user/ytwang" class="author may-blank id-t2_8bne">ytwang</a><span class="flair flair-bulb" title=""></span><span class="userattrs"></span></li><li><a href="http://www.reddit.com/user/davidreiss666" class="author may-blank id-t2_pfn1">davidreiss666</a><span class="flair" title="Helper Monkey">Helper Monkey</span><span class="userattrs"></span></li><li><a href="http://www.reddit.com/user/Skuld" class="author may-blank id-t2_32zzr">Skuld</a><span class="flair flair-bulb" title=""></span><span class="userattrs"></span></li><li><a href="http://www.reddit.com/user/redtaboo" class="author may-blank id-t2_3belm">redtaboo</a><span class="flair flair-bulb" title=""></span><span class="userattrs"></span></li><li><a href="http://www.reddit.com/user/dzneill" class="author may-blank id-t2_3usiy">dzneill</a><span class="flair flair-bulb" title=""></span><span class="userattrs"></span></li><li><a href="http://www.reddit.com/user/Raerth" class="author may-blank id-t2_35izj">Raerth</a><span class="flair flair-bulb" title=""></span><span class="userattrs"></span></li><li><a href="http://www.reddit.com/user/sodypop" class="author may-blank id-t2_39hzo">sodypop</a><span class="flair flair-bulb" title=""></span><span class="userattrs"></span></li><li><a href="http://www.reddit.com/user/316nuts" class="author may-blank id-t2_4x3zj">316nuts</a><span class="flair flair-bulb" title=""></span><span class="userattrs"></span></li></ul>').get(0)}), 


nodeB: VWO.DOMNode.create({el:$('<div>First</div><ul class="content"><li><a href="http://www.reddit.com/user/krispykrackers" class="author may-blank id-t2_35gvu">krispykrackers</a><span class="flair flair-bulb" title=""></span><span class="userattrs"></span></li><li><a href="http://www.reddit.com/user/qgyh2" class="author may-blank id-t2_1uzpp">qgyh2</a><span class="flair flair-bulb vwo_1404205657551" title=""></span><span class="userattrs"></span></li><li><a href="http://www.reddit.com/user/ytwang" class="author may-blank id-t2_8bne">ytwang</a><span class="flair flair-bulb" title=""></span><span class="userattrs"></span></li><li><a href="http://www.reddit.com/user/davidreiss666" class="author may-blank id-t2_pfn1">davidreiss666</a><span class="flair" title="Helper Monkey">Helper Monkey</span><span class="userattrs"></span></li><li><a href="http://www.reddit.com/user/Skuld" class="author may-blank id-t2_32zzr">Skuld</a><span class="flair flair-bulb" title=""></span><span class="userattrs"></span></li><li><a href="http://www.reddit.com/user/redtaboo" class="author may-blank id-t2_3belm">redtaboo</a><span class="flair flair-bulb" title=""></span><span class="userattrs"></span></li><li><a href="http://www.reddit.com/user/dzneill" class="author may-blank id-t2_3usiy">dzneill</a><span class="flair flair-bulb" title=""></span><span class="userattrs"></span></li><li><a href="http://www.reddit.com/user/Raerth" class="author may-blank id-t2_35izj">Raerth</a><span class="flair flair-bulb" title=""></span><span class="userattrs"></span></li><li><a href="http://www.reddit.com/user/sodypop" class="author may-blank id-t2_39hzo">sodypop</a><span class="flair flair-bulb" title=""></span><span class="userattrs"></span></li><div>Second</div><li><a href="http://www.reddit.com/user/316nuts" class="author may-blank id-t2_4x3zj">316nuts</a><span class="flair flair-bulb" title=""></span><span class="userattrs"></span></li></ul><div>Third</div>').get(null)})		
		});
			
		expect(domNode.compare()).toBe('') ;

		});
	});




/*
		describe('method: Compare', function () {
			it('case  : compares the dom trees and outputs the final result', function () {
		var domNode = VWO.DOMComparator.create({

nodeA: VWO.DOMNode.create({el:$('').get(0)}), 

nodeB: VWO.DOMNode.create({el:$('').get(0)})

		});
			
	//		expect(domNode.compare()).toBe('') ;

		});
	});
*/


})