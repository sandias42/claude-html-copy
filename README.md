# claude-html-copy
Dead-simple plugin for easy copying of html context for claude.

Right click to copy a random chunk of the current page's (Outer) HTML to clipboard, small enough to paste into claude. 

Click the extension icon to copy the full OuterHTML. 

Given the right HTML context, Claude-3.5 Sonnet can: 
- explain the web technologies being used
- write you a parser in python or js
- answer questions about the page contents
- ...

But naively doing Save Page As -> .html will fail, neglecting dynamically rendered html. Even if you copy the correct OuterHTML using devtools, you then run into Claude chat's copy paste file limit. 
