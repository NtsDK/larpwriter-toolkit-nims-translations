.. _concepts-page:

Theory
======

.. _concepts-core-concepts:

Story, character, adaptation, handout
-------------------------------------

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

Each character in story has own vision of happened. *Adaptation* is an event participant vision of this event. *Handout* is a player's document for putting player to game game context. Cycle *story-event-adaptation-export is shown on the picture*.

.. figure:: images/nims-main.jpg

	SMTK NIMS workflow

In the basic case handouts are consist of adaptation texts. Also handouts may contain character profile info, relations and groups info. These entities are described below.

.. _concepts-character-profile:

Character profile
-----------------

*Profile* - list of important game facts about character.

For each character we can fill *profile*. We use profile to store basic character facts: sex, family, age, abilities, profession, etc. Without profile we know only character name. Profile structure is described on *Profile constructor* page. On this page you define which profile field you need and then fill them for each character.

Field types:

	``Text`` - stores text information. Example: character bio.

	``String`` - stores string information. Example: character motto.

	``Single choice`` - stores enumeration and one value is selected. You need to fill enumeration list with commas. First value in list is a default value. Example: sex - male,female,doesn't matter.

	``Number`` - number. Example: character age.

	``Checkbox`` - yes/no value. Example: is character a hacker.

Profile is a very important tool. Character filter and Groups are based on profiles. Also profile information can be printed in handouts.

.. note:: Example

	We can put Sam's cooking skill and age on the profile.

.. _concepts-character-inventory:

Character inventory
-------------------

Some items are very important in stories so game masters need to know which character will be item owner on game start and prepare this item. Inventory is a part of handouts too.

.. note:: Example

	On game start Frodo is a Ring keeper so masters need to be prepared and give it.

.. _concepts-character-relations:

Relations
---------

*Relation* is an information what character think about each other. It is implemented as text description. Character may have relation both to well known characters and to unknowns. Relation can be single unidirectional and bidirectional.

.. note:: Example

	Usual mobster of Salieri's band may have relation to Don Salieri and relation to Don Morello by stories from other mobsters. Don Salieri may be familiar with this mobster. Don Morello may not know all mobsters of Salieri's band.

.. _concepts-timeline:

Timeline
--------

We can set events time. So we can look at event distribution in time. Using Timeline you can check that events of one stories happens before other story and how events are correlated in time.

.. _concepts-character-filter:

Filter
------

*Character filter* - logical condition, which selects character subset. Filter is used for search characters by profile and make groups member list. Filter is based on character profile and character statistics.

.. note:: Example

	Profile has information about character age and his mafia family. We can make filter: show characters above 30 years from Salieri's family.

.. note:: Example

	To analyze handout status we want to see characters which have very small number of stories. We make filter: show characters which participates in 2 or lesser stories.

Detailed description of profile item types is available in  :ref:`concepts-character-profile`. 

Filtering of *string* and *text* is made by searching substring. *Single choice* items are filtered by selected value. It is possible to select several values. *Checkbox* items are equal to yes/no single choice item. *Number* items are filtered by number and one of conditions: doesn't matter, greater, equal, lesser.

.. _concepts-groups:

Groups
------

*Group* is a subset of characters which have some common characteristic. Group can have several characters, may be empty, may include all characters. Common characteristic is described by filter.

.. note:: Example

	Profile has information about mafia family. We create group ``Salieri's family``. Filter for this group: character family is Salieri's family. In the same way we create group for Morello's family.

This approach excludes manual editing of group lists. Updating character profile you automatically exclude character from some groups and add him to other.

.. note:: Example

	You decided to move character from Salieri's family to Morello's family. You change this information in profile. From this moment character can't see any Morello's family specific information but now he sees Salieri's information.

Each group has associated information which named *Group profile*. Group profile structure is not editable and consist of master description, text for character and checkbox if it is necessary to print this group in handouts. For details see :ref:`groups-desc`.

.. _concepts-investigation-board:

Story map
---------

During LARP game writing it is necessary to get a common vision. *Story map* is implemented to solve this problem. *Story map* is a schema on which you add active groups, resources and describe relations between them.

Resources - any objects or object sets which are points of interest for some characters or character groups. The One Ring, canned goods, magic mana, Moria's mines - all these things are resources.

Relations describe conflicts and interests of character groups. Relation can be started only from group and ended on group or resource. Groups are added from existing groups list. Resource are created directly on story map. Story map is filled manually. See details in :ref:`investigation-board`.

.. note::

	Salieri's family is the enemy of Morello's family and vice versa.

.. note::

	Morello's family has business for covering carjacking. Salieri's family wants to take this business under own control.
	
.. note::

	Morello's family is working with bootlegger band and trusts them. Bootlegger band secretly works with Salieri's family. 

.. _concepts-character-activity:

Character activity
------------------

Working or NIMS we remember about role gearwheels (well known character workload analysis concept in Russia). But we see that it can't be applied well in our approach. Instead we made other tool - *activity marks*. For each character in story we can mark expected activity type in this story. We selected four activity types:

	#. *Active* - character is active in story. Examples: Frodo, Don Quixote.
	#. *Follower* - character follows somebody but the main target is not important for him. Examples: Sam, Sancho Panza.
	#. *Defensive* - character is running from chasers. Examples: spy in raid, murderer running from police. If nobody found them - they will have nothing to do.
	#. *Passive* - character with some information or artifact but without any goals.

.. note::

	Character can have several activities simultaneously in one story. 

.. note::

	Character can have different activities in different stories. 

.. note:: Example

	Bilbo is active during birthday preparations. Bilbo is passive when Frodo visits him in Lorien.

Graphical and statistical activity view will help to analyze character workload for the LARP game.

.. _concepts-social-network:

Social network
--------------

*Social network* is a visual representation of character connections with other characters or stories in graph. Depends on social network type graph nodes and edges have different meaning.

There are next types of social networks in NIMS:

1. Social connections - connections between characters. Nodes: characters. Edges: two characters took part in the same event. If two characters were in the same event we expect they have social connection. On the one hand this approach is rude because it ignores many nuances. But in most cases it is enough. For example, officers go to restaurant. All of them know each other and all of them can remember what happens in restaurant. Other example, husband came back home early, wife's lover was in wardrobe, wife asks husband to take out the trash. While husband takes it out lover comes away. Wife and lover see each other in event. Wife and husband see each other in event. Lover knows that husband was there. Only husband doesn't see lover. In fact it means that lover-husband connection is unidirectional and this information is not available on graph. Unfortunately storing this information for each event will make event editing very difficult. In most cases it is not significant to lose some details. **Connection cardinality** shows how strong is connection between characters. Connection cardinality is a number of different stories in which characters took part. For example, two characters were in cruise and take part into 10 events but only in this story. Connection cardinality is 1. Two mobsters took part in 4 robberies with 5 events in each. Connection cardinality is 4. Connection cardinality is an edge width on graph.

2. Character-participation-story - network of characters and stories. Nodes: characters and stories. Edge: character participation in story. Even if character is not participated in any story event it is expected that he is story participant. *Node cardinality* is a number of characters in story. Node cardinality is shown as node size.

3. Character-activity-story - network of characters and stories by activity. Nodes: characters and stories. Edge: character activity in story (see. :ref:`concepts-character-activity`). For example, if character has active role then character and story will be connected with red edge. If character has no activity information there will no any connection of character and story.

.. _concepts-diagrams-n-statistics:

Diagrams and statistics
-----------------------

These tools were added to see common information about game base. Section ``Statistics`` has single number or single string values. For example, number of characters, number of stories, text completeness level. Diagrams block has two parts: base diagrams and profile diagrams.

Base diagrams aggregates information about base. For example, histogram ``Story count per character`` shows how many stories have each character. Maybe someone has too few and someone too many. It was possible to make statistics ``Average story count per character`` but this is like average temperature in hospital. It is based on real data but in fact is useless.

Profile diagrams are based on profile data. By this diagram you can see proportions of different groups and see problems in game balance.

.. _concepts-workload-analysis:

Character workload analysis
---------------------------

Analysing workload we want to understand is there are some problem with character workload and made necessary changes. All players are different, they have different possibilities and wishes. Masters resources are not unlimited. By this reason workload is an individual process and we can't make it systemization. But we can suggest some recommendations.

	#. Look at common base digrams and find outliers. If character has three times more stories then all other it should have explanation. Maybe he is a game technician/NPC, or maybe he is an informer, or maybe he is Aragorn and everyone wants to play with Aragorh and now he is in all stories. If character has small handout there should be reason why. Maybe he came from the Moon, maybe he is powerplayer and he finds everything without handout or maybe everybody forget about this character and don't add in any story.
	#. Check character activities in stories. See activity statistics in filter and social network. If you expect active actions in 15 stories for one character then be sure that player can take this workload.
	#. Character profile is very flexible. You can add checkbox *add character to love story*. You can specify workload type for this character: functional, narrative, mixed or some other. You can add character wishes. Maybe he has cool cosplay costume so he can be only beautiful picture and no action. In future you can compare wishes and expectations and made fixes.

.. _concepts-base:

Base
----

NIMS *base* is a fixed format text file which contains all information you created for LARP game. NIMS is in development so base format is constantly changes and bugs have fixes. I implement a special inner tool - migrator - which is used for base backward compatibility and bug fixes. This tool applies automatically on base loading. It is used from the very first versions of NIMS. You can be sure that old bases will work good on future NIMS versions.

.. note:: Technical details

	Base is a JSON format file. On base loading it is validated with JSON Schema and consistency check. If there will be a mistake NIMS shows message ``Detected base corruption during consistency check. Please contact developer to fix problems``. If there were no manual changes in base it means mistake was made by NIMS and this is my problem. So if you see this message and you don't see any visible problems anyway write me, please!

.. _concepts-dumping:

Export
------

*Export* is a process of making handouts from base data by template. Export can be made to docx or text files format.

.. _concepts-server-mode:

Single user and multi user NIMS versions
----------------------------------------

There are two NIMS implementations: single user and multi user.

*Single user* version is made for making single master work on LARP game base. You need to download NIMS archive, unpack it and start run it in browser. You don't need Internet in this mode and nobody in Internet can see your work. You are fully autonomous.

*Multi user (server)* version is implemented for collaborative master work on single LARP game via Internet. In multi user mode we have several problems which not exist in single user mode at all.

Let you have one base and several users.

Problem 1. What if users make simultaneous corrections and these corrections have conflict?

For example, two users make simultaneous corrections in event text. First made one and goes away. Then second user finishes his work. In fact we have three text versions: initial, user 1 version and user 2 version. What we should have in result?

We can apply different strategies. For example: first win all other, last win all other, intellectual merge (if it is possible) and other.

We consider different strategies but we prefer simple way to avoid this situation at all. Only one user can make changes in entities - character, story or group. This user is an entity *owner*. *Entity* is a common name for NIMS objects which can have owner (character, story or group). But any master has read-only access to any entity. This approach excludes possibility of accidental or not accidental editing but other user.

Problem 2. Characters, stories and groups have owner. But what to do with adaptations? Adaptations are part of story but are related to one character.

We don't fixed one of two possibilities and provide opportunity to select preferred way. Adaptation rights can be inherited by story or by character. There is a special switch on administration page. By default adaptation rights are inherited by story owners.

Which types of users exist?

	#. Administrator has right on user management and critical base actions (upload base and character profile structure editing). Administrator is not omnipotent. He can't edit entities if he is not an owner. But he can change owner of any entity. Administrator is also an author.

	#. Author - usual user which can modify his entities.

	#. Editor. Strictly editor is not a user but a special work mode. If administrator give somebody editor's role then this user receives exclusive access to all base. Editor can do any corrections and all other users can do nothing. In this mode all users are still owners of their entities. This mode was added to make a big proofreading/text cleaning and then easily return all entities to their owners.

Rights list

Administrator

	1. Can create users
	2. Can remove users
	3. Can't remove itself
	4. Can change user password
	5. Can assign entity to new owner
	6. Can take entity from owner and don't give it anybody
	7. Can assign/retire editor
	8. Can give administrative right to other user
	9. Can switch adaptation inheritance mode - by story or by character
	10. Can edit Overview and Profile constructor pages
	11. Can upload new database (think twice before doing it)

.. warning:: It is impossible to rename user.

Editor

	1. Has full access to all entities. New ones too but he is not an owner.
	2. Assigned/retired by admin
	3. Can retire by own wish
	4. Can rename/remove any character/story/group

Author

	1. Can create stories, characters and groups (author receives rights on created entities)
	2. Can give his entities to other author
	3. Can't give his entities to nobody

All

	1. Save base to own file for autonomous work (not finished)
	2. Handout export
	3. Character relations editing is not restricted by owner
	4. Story map editing is not restricted by owner

Entities and rights

Initially character owner is character creator. Only owner can edit character profile.

Initially story owner is story creator. Only owner can create new events and add characters (characters can be from other authors).

Initially group owner is group creator. Only group owner can edit group profile and group filter.

Adaptations rights can be in two modes - by story or by character.

Inventory rights are inherited by story.

Entity may have no owner.

There are no restrictions on story map editing and character relations editing. Any author can do it in any time. This is an experiment) If you will have problems here please right us a letter.
