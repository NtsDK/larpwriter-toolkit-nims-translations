.. _breifings-templates:

Handouts export
===============

Process organization
--------------------

Soon or later you will add all LARG game info into NIMS so you will need to export info in handouts. There is an export subsystem to solve this problem. There are two possible export formats now: docx files and text files. You need to specify characters list and template to export handouts. You can select characters in three ways: all characters, characters range and manually selected characters. I think it is not difficult. Lets proceed with templates.

**Template** is a NIMS instruction how to transform temporary data view to text/docx handout. **Temporary data view** is a data collection with export data. For example, when you work with NIMS you see characters inventory in separated lists but in handout inventory is a plain item list for each character. Character profile may be exported partially. Empty apadtations texts are replaced with origin event text and etc. Some restrictions are added by template engine. By these reasons temporary data view has many differences with base structure as is. 

Temporary data view structure specifies which information may be exported and how it is possible. This is a full schema of Temporary data view:

- ``gameName``, string - game name.

- ``briefings``, data array - data for each selected character.

	- ``gameName``, string - game name. It can be added to each handout header for example.
	
	- ``charName``, string - character name.
	
	- ``inventory``, string - character inventory.
	
	- ``profileInfo-"profile item name"``, string or text - character profile item.
	
	- ``profileInfo-splitted-"profile item name"``, string or text - character profile item splitted by strings.
	
		- ``string``, string.
	
	- ``profileInfoArray``, data array - profile info array.
	
		- ``itemName``, string - profile item name.
		
		- ``value``, string or text - profile item text.
		
		- ``splittedText``, string array - profile item splitted by strings. 
		
			- ``string``, string.
			
	- ``groupTexts``, data array - groups data.
	
		- ``groupName``, string - group name.
		
		- ``text``, text - group text.
		
		- ``splittedText``, string array - group text, splitted by strings. 
		
			- ``string``, string.
		
	- ``relations``, data array - character relations.
	
		- ``toCharacter``, string - counter character name.
		
		- ``text``, text - relation text.
		
		- ``splittedText``, string array - relation text splitted by string.
		
			- ``string``, string.
		
		- ``stories``, string - story list in which characters meets.
		
		- ``profile``, object - counter character profile. Data is extracted by profile item name.
			
	- ``eventsInfo``, data array - character events array sorted by timeline.
	
		- ``eventName``, string - event name.
		
		- ``storyName``, string - event story name.
		
		- ``time``, string - event time.
		
		- ``displayTime``, string - event subjective time.
		
		- ``text``, text - event text.
		
		- ``splittedText``, string array - event text splitted by strings. 
		
			- ``string``, string.
			
	- ``storiesInfo``, data array - character stories array sorted alphabetically.
	
		- ``storyName``, string - story name.
		
		- ``eventsInfo``, data array - character events array. Events have the same structure like in eventsInfo.


Template describes which data and in which sequence we want to print in handout. There two main data types: array and non-array. Non-array is a string or text and they printed as is. Arrays are objects lists for real data - strings and texts. Special case are texts splitted by strings but I will talk about them later.

Template creation examples
--------------------------

Lets consider template creation in examples. All examples are made for text template engine. You can easily check them in practice on ``Hangouts->Export->Advanced text export`` tab. You need to use single brackets in word templates instead double and triple brackets in Mustache. Lets begin with inventory list. We need character name and his inventory to do it. Minimal template which receives this data is::

	{{#briefings}}
	{{charName}}
	{{inventory}}
	{{/briefings}}

Now we need to add some formatting. Lets make a text format:: 

	{{#briefings}}{{charName}}: {{inventory}}
	{{/briefings}}

Pay attention if {{/briefings}} will be in the same string all output will be in one string. String break is a part of template so we need to save it.

If we want to add character outfit from profile we may use next template::

	{{#briefings}}{{charName}}: {{profileInfo-Outfit}}; {{inventory}}
	{{/briefings}}

You can see that inventory is separated from outfit with semicolon.

Minimal template to print character profile::

	{{#briefings}}
	{{charName}}

	{{#profileInfoArray}}
	{{itemName}}
	{{value}}
	{{/profileInfoArray}}

	{{/briefings}}

You can print specific profile items::

	{{#briefings}}
	{{charName}}

	{{profileInfo-Player}}
	{{profileInfo-Race}}
	{{profileInfo-Civility}}

	{{/briefings}}

Minimal template for printing events sorted by time::

	{{#briefings}}
	{{charName}}

	{{#eventsInfo}}
	{{{displayTime}}}
	{{text}}
	{{/eventsInfo}}

	{{/briefings}}

Minimal template for printing events grouped by story::

	{{#briefings}}
	{{charName}}

	{{#storiesInfo}}
	{{storyName}}

	{{#eventsInfo}}
	{{{displayTime}}}
	{{text}}
	{{/eventsInfo}}

	{{/storiesInfo}}

	{{/briefings}}

All these options can be combined and printed in any order. For example you can print profile in any order and you can print events before profile.

Details
-------

Template engines have some special aspects and it is necessary to know about it from the beginning. Lets start with multistring texts.

Let we have adaptation text::

	One, two, three, four, five,
	I caught a fish alive. 

There are two string in this text. If we use docx template{text} we will receive::

	One, two, three, four, five, I caught a fish alive.

In docx export string breaks are ignored so all paragraphs will be joined in one paragraph. To avoid this effect we need to print each paragraph separately. We need to use template (docx template)::

	{#splittedText}{string}
	{/splittedText} 

In this case text is splitted automatically by paragraphs.

It may be useful not only in docx export. For example in html export paragraphs are ignored too. We need to use such template in this case (Mustache template)::

	{{#splittedText}}<p>{{string}}</p>
	{{/splittedText}}

Also you can split profile texts by string (docx template)::

	{#profileInfo-splitted-Biography}{string}
	{/profileInfo-splitted-Biography} 

One more special aspect with Mustache engine is default special characters encoding. Simple example - print event time. If you use template ``{{time}}`` you will see ``3018&#x2F;09&#x2F;30 20:00``. To avoid it use triple brackets. With template ``{{{time}}}`` you will see ``3018/09/30 20:00``. So if you get strange symbols in text try to replace double brackets with triple.


