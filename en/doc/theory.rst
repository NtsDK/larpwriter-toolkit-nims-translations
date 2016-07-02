Theory
======

Basic terms
-----------

SMTK NIMS is based on three main entities: Story, Character and Event.

*Character* is a subject in LARP game world.

	We don't use terms *player* or *role* because we think that it should be possible to abstract story master from concrete players.

*Story* is a separate action unit. Several characters take part in story.

Story consists of *events*. Each event has *event time* and *character list*. Character list is a list of characters which take part in event. Event is a union of place, time and characters.

.. note:: Example

	Story: Starting journey

	Characters: Gandalf, Frodo, Sam, Merry, Pippin

	Event 1: Gandalf goes back to Frodo to talk about the ring. Participants: Gandalf, Frodo, Sam

	...

	Event х: Frodo and Sam meet Merry and Pippin in the farm. Participants: Frodo, Sam, Merry, Pippin

	...

.. _secondary-entities-desc:

Secondary terms
---------------

For each character we can fill *profile*. We use profile to store basic character facts: sex, family, age, abilities, profession, etc. SMTK NIMS has profile filter and it can export profiles to handouts.

.. note:: Example

	We can put Sam's cooking skill and age on the profile.
	
*Character inventory*. Some items are very important in stories so game masters need to know which character will be item owner on game start. Inventory is a part of handouts too.
	
.. note:: Example

	On game start Frodo is a Ring keeper so masters need to be prepared and give it.
	
*Character activity*. Working or NIMS we remember about role gearwheels (well known character workload analysis concept in Russia). But we see that it can't be applied well in our approach. Instead we made other tool - *activity marks*. For each character in story we can mark expected activity type in this story. We selected four activity types:

	#. *Active* - character is active in story. Examples: Frodo, Don Quixote.
	#. *Follower* - character follows somebody but the main target is not important for him. Examples: Sam, Sancho Panza.
	#. *Defensive* - character is running from chasers. Examples: spy in raid, murderer running from police.
	#. *Passive* - character with some information or artifact but without any goals.

.. note::

	Character can have several activities simultaneously in one story. 

.. note::

	Character can have different activities in different stories. 

.. note:: Example
	
	Bilbo is active during birthday preparations. Bilbo is passive when Frodo visits him.

Graphical and statistical activity view will help to analyze character workload for the LARP game.