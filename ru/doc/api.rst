.. _api-description:

Прикладной программный интерфейс (API)
======================================

Часто при работе с разными сервисами возникает потребность в API - возможности программного доступа из сторонних источников. В НИМСе с этим всё проще - он сам с собой работает через API. Всё что здесь перечислено, это родной интерфейс НИМСа, работа с которым осуществляется через Ajax.

Общие соглашения
----------------

API разбит на модули, адаптированные для исполнения как в браузере, так и в Node.js. Модули принимают на вход объект базы и вспомогательные объекты/сущности/API. Модуль добавляет свои функции в прототип объекта базы.

Виды прототипных функций:

	#. Функции прототипа начинающиеся на get и is - функции возвращающие данные из базы. Все вызовы этих функций транслируются в GET запросы.
	
	#. Функции прототипа начинающиеся на _ - вспомогательные функции. Не транслируются в HTTP запросы.
	
	#. Все остальные функции прототипа - функции передачи данных для сохранения в базу. Все вызовы этих функций транслируются в PUT запросы.
	
Виды не прототипных функций:

	#. Внутренние вспомогательные функции - никому вне модуля не видны, в большинстве своем синхронны.
	
	#. Функции, добавляемые в объект listeners - функции, для сохранения согласованности данных между разными модулями. Должны быть синхронными. Пример: при удалении пункта досье необходимо удалить его из всех персонажей и фильтров групп.
	
	#. Функции, добавляемые в объект dbmsUtils - внутренние вспомогательные функции, которые могут использоваться в более чем одном модуле.
	
Все функции API, предполагающие асинхронное исполнение (GET/PUT запросы), принимают последним аргументом колбек.

Первым аргументом колбека всегда ожидается объект ошибки.

На сервере после колбека дополнительным аргументом передаётся информация о пользователе, инициировавшем вызов функции.

Вспомогательные функции могут быть как на колбеках, так и быть синхронными.

Виды вспомогательных объектов
-----------------------------

Модули принимают на вход объект базы и вспомогательные объекты/сущности/API.

	#. Migrator - объект, вносящий изменения для сохранения обратной совместимости в базу.
	
	#. CommonUtils - вспомогательные функции, которые необходимо вызывать как в браузере, так и на сервере.
	
	#. EventEmitter - внутренний обработчик событий для связи между модулями.
	
	#. R - библиотека для функционального программирования на JavaScript - Ramda.
	
	#. Ajv - библиотека проверки JSON схем.
	
	#. Schema - набор функций для генерации JSON схемы базы НИМС.
	
	#. Errors - набор объектов ошибок.
	
	#. listeners - объект для хранения подписчиков. На его основе инициализируется EventEmitter при загрузке базы НИМС.
	
	#. Constants - константы.
	
	#. dbmsUtils - межмодульные утилиты, необходимые для использования внутри базы.
	
	#. dateFormat - библиотека для работы с форматированием времени.
	
	#. custom - объект для получения вспомогательной информации из модуля.
	
Модули
------

Общий принцип работы модуля - разрешено читать любую информацию из базы напрямую, в том числе, не входящую в область ответственности модуля. Разрешено вносить изменения в только ту часть базы, которая входит в область ответственности модуля.

Стандартные модули
------------------

Модуль accessManagerAPI
^^^^^^^^^^^^^^^^^^^^^^^

Административные задачи - настройки прав, управление учетными записями мастеров и игроков.

	getManagementInfo(callback) - получение всей информации по уровням доступа.
	
	assignAdmin(name, callback) - назначение администратора.

	assignEditor(name, callback) - назначение редактора.

	removeEditor(callback) - удаление редактора.

	changeAdaptationRightsMode(mode, callback) - смена режима наследования адаптаций.

	removeMaster(name, callback) - удаление мастера.
	
	removePermission(userName, names, callback) - удаление прав владения объектом.
	
	assignPermission(userName, names, callback) - назначение права владения объектом.

	getPlayerLoginsArray(callback) - получение списка имен игроков с учетными записями.
	
	removePlayerLogin(userName, callback) - удаление учетной записи игрока.
	
	getWelcomeText(callback) - получение приветственного текста для игрока.

	setWelcomeText(text, callback) - изменение приветственного текста для игрока.
	
	getPlayersOptions(callback) - получение прав игроков: возможность создавать игрока и возможность создавать персонажа.
	
	setPlayerOption(name, value, callback) - изменение прав игроков.
				
Заглушки - эти функции реализованы на сервере, но необходимо иметь их прототипы в общем интерфейсе для сборки Ajax обёрток:
				
	createMaster(name, password, callback) - создание мастера. Невыполнимая операция: сохранение пароля.
	
	changeMasterPassword(userName, newPassword, callback) - Смена пароля мастера. Невыполнимая операция: сохранение пароля.

	publishPermissionsUpdate(callback) - широковещательная рассылка об изменении прав пользователей. Невыполнимая операция: принудительное уведомление всех пользователей об изменениях в правах владения/настройках сервера.
	
	createPlayer(userName, password, callback) - создание игрока+учетная запись. Невыполнимая операция: сохранение пароля.
	
	createPlayerLogin(userName, password, callback) - создание учетной записи игрока. Невыполнимая операция: сохранение пароля.
	
	changePlayerPassword(userName, password, callback) - смена пароля учетной записи игрока. Невыполнимая операция: сохранение пароля.
	
	getPlayerProfileInfo(callback) - получение информации о профилях игрока/персонажа. Невыполнимая операция: нет информации о пользователе, вызвавшем функцию.
	
	createCharacterByPlayer(characterName, callback) - создание персонажа игроком. Невыполнимая операция: нет информации о пользователе, вызвавшем функцию.

Зависимости от профилей - переименование/удаление профиля игрока приводит к переименованию/удалению учетной записи игрока:
        
	_renameProfile(type, fromName, toName)
	
	_removeProfile(type, characterName)


Модуль baseAPI
^^^^^^^^^^^^^^

Базовые функции.

	_init(listeners) - инициализация межмодульных подписок.

	getDatabase(callback) - вернуть базу.

	setDatabase(database, callback) - вгрузить базу.

	getMetaInfo(callback) - получить метаинформацию.

	setMetaInfo(name, value, callback) - обновить поле в метаинформации.


Модуль briefingExportAPI
^^^^^^^^^^^^^^^^^^^^^^^^

Выгрузка данных для экспорта.
	
	getBriefingData(selectedCharacters, selectedStories, exportOnlyFinishedStories, callback) - вернуть данные для выгрузки.

Модуль consistencyCheckAPI
^^^^^^^^^^^^^^^^^^^^^^^^^^

Проверка базы на согласованность с помощью JSON schema и инвариантов.

	getConsistencyCheckResult(callback) - проверить базу на согласованность.

Модуль entityAPI
^^^^^^^^^^^^^^^^

Общий интерфейс для работы с сущностями. Пока слабо развит.

	getEntityNamesArray(type, callback) - вернуть список имён сущностей указанного типа.

Модуль groupsAPI
^^^^^^^^^^^^^^^^

Работа с группами.

	getGroupNamesArray(callback) - возвращает названия всех групп.
	
	getGroup(groupName, callback) - возвращает всю информацию о группе.
	
	getCharacterGroupTexts(characterName, callback) - возвращает все тексты групп для конкретного персонажа.

	getAllCharacterGroupTexts(callback) - возвращает все тексты групп для каждого персонажа.
	
	createGroup(groupName, callback) - создать группу.

	renameGroup(fromName, toName, callback) - переименовать группу.

	removeGroup(groupName, callback) - удалить группу.
	
	saveFilterToGroup(groupName, filterModel, callback) - сохранить фильтр в группу.

	updateGroupField(groupName, fieldName, value, callback) - обновить данные о группе.
	
	getProfileFilterInfo(callback) - получить фильтр из группы.
	
	getGroupCharacterSets(callback) - вернуть списки персонажей, состоящих в каждой группе.

Зависимости от структуры досье - переименование/удаление/смена типа элементов досье, изменение списка элементов единственного/множественного выбора:
				
	_removeProfileItem(type, index, profileItemName)

	_changeProfileItemType(type, profileItemName, newType)

	_renameProfileItem(type, newName, oldName)
	
	_replaceEnumValue(type, profileItemName, defaultValue, newOptionsMap)

Модуль groupSchemaAPI
^^^^^^^^^^^^^^^^^^^^^

Построение иерархии групп.

	getGroupSchemas(callback) - возвращает иерархическую схему групп.

Модуль investigationBoardAPI
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Работа с картой сюжета.

	getInvestigationBoardData(callback) - возвращает информацию о карте сюжетов.
	
	addBoardGroup(groupName, callback) - добавить группу на карту сюжета.
	
	switchGroups(fromName, toName, callback) - заменить группу на карте сюжета.

	setGroupNotes(groupName, notes, callback) - изменить заметку к группе на карте сюжета.
	
	removeBoardGroup(groupName, callback) - удалить группу с карты сюжета.
	
	createResource(resourceName, callback) - создать ресурс.

	renameResource(fromName, toName, callback) - переименовать ресурс.
	
	removeResource(resourceName, callback) - удалить ресурс.
	
	addEdge(fromId, toId, callback) - добавить ребро.
	
	setEdgeLabel(fromId, toId, label, callback) - изменить надпись на ребре.
	
	removeEdge(fromId, toId, callback) - удалить ребро.

Зависимость - список ребер на карте сюжета должен содержать списки первого уровня. Они добавляются/удаляются автоматически при изменении узлов.
        
	_nodeAdded(nodeName, type)

	_nodeRemoved(nodeName, type)
	
	_nodeRenamed(fromName, toName, group)

Зависимость - переименование/удаление групп влияет на карту сюжета.
				
	_renameGroup(fromName, toName)
	
	_removeGroup(groupName)

Модуль logAPI
^^^^^^^^^^^^^

Модуль логирования действий пользователя.

	log(userName, funcName, rewrite, params, callback) - добавить запись в лог.
	
	getLog(pageNumber, callback) - получить записи лога.

Модуль profileBindingAPI
^^^^^^^^^^^^^^^^^^^^^^^^

Управление привязками персонаж-игрок.

	getProfileBindings(callback) - вернуть объект с привязками. Только привязки.
	
	getExtendedProfileBindings(callback) - вернуть расширенный массив с привязками. Он содержит пары персонаж-игрок. В этих парах есть информация обо всех персонажах и игроках.

	getProfileBinding(type, name, callback) - получить привязку для указанного профиля. Пара персонаж-игрок.

	createBinding(characterName, playerName, callback) - создать привязку.
	
	removeBinding(characterName, playerName, callback) - удалить привязку.
				
Зависимость - переименование и удаление профилей персонажей и игроков меняет привязки.
        
	_renameProfile(type, fromName, toName)
	
	_removeProfile(type, profileName)

Модуль profileConfigurerAPI
^^^^^^^^^^^^^^^^^^^^^^^^^^^

Работа со структурой досье.

	getProfileStructure(type, callback) - получение структуры профиля.

	createProfileItem(type, name, itemType, value, toEnd, selectedIndex, callback) - создать элемент профиля.

	moveProfileItem(type, index, newIndex, callback) - переместить элемент профиля.

	removeProfileItem(type, index, profileItemName, callback) - удалить элемент профиля.

	changeProfileItemType(type, profileItemName, newType, callback) - изменить тип элемента профиля.

	changeProfileItemPlayerAccess(type, profileItemName, playerAccessType, callback) - изменить уровень доступа игрока к элементу профиля.

	renameProfileItem(type, newName, oldName, callback) - переименовать элемент профиля.
	
	doExportProfileItemChange(type, profileItemName, checked, callback) - смена флага экспорта.

	updateDefaultValue(type, profileItemName, value, callback) - изменить значение по умолчанию.

Модуль profilesAPI
^^^^^^^^^^^^^^^^^^

Работа с досье персонажей и игроков.

	getProfileNamesArray(type, callback) - получение списка имен досье.

	getProfile(type, name, callback) - получить досье.

	getAllProfiles(type, callback) - получить все досье.

	createProfile(type, characterName, callback) - создать досье.

	renameProfile(type, fromName, toName, callback) - переименовать досье.

	removeProfile(type, characterName, callback) - удалить досье.

	updateProfileField(type, characterName, fieldName, itemType, value, callback) - изменить значение в досье.

Зависимость от структуры досье - создание/переименование/удаление элементов досье, смена типа элемента досье, изменение списка значений в единственном/множественном выборе.
        
	_createProfileItem(type, name, itemType, value)

	_removeProfileItem(type, index, profileItemName)

	_changeProfileItemType(type, profileItemName, newType)

	_renameProfileItem(type, newName, oldName)
	
	_replaceEnumValue(type, profileItemName, defaultValue, newOptionsMap)
	
	_replaceMultiEnumValue(type, profileItemName, defaultValue, newOptionsMap)

Модуль relationsAPI
^^^^^^^^^^^^^^^^^^^

Работа с отношениями персонажей.

	getRelationsSummary(characterName, callback) - получить информацию по отношениям указанного персонажа.
	
	setCharacterRelation(fromCharacter, toCharacter, text, callback) - изменить текст отношения между персонажами.

Зависимость - отношения зависят от переименования/удаления досье персонажей.
        
	_renameCharacter(type, fromName, toName)
	
	_removeCharacter(type, characterName)

Модуль statisticsAPI
^^^^^^^^^^^^^^^^^^^^

Сбор статистики.

	getStatistics(callback) - собрать и вернуть статистическую информацию.

Модуль storyAdaptationsAPI
^^^^^^^^^^^^^^^^^^^^^^^^^^

Работа с адаптациями.

	getFilteredStoryNames(showOnlyUnfinishedStories, callback) - возвращает список завершенных/незавершенных историй.

	getStory(storyName, callback) - возвращает историю целиком.
	
	setEventAdaptationProperty(storyName, eventIndex, characterName, type, value, callback) - изменяет свойство адаптации.

Модуль storyBaseAPI
^^^^^^^^^^^^^^^^^^^

Управление историями и мастерские истории.

	getStoryNamesArray(callback) - получить имена всех историй.

	@deprecated
	getAllStories(callback) - вернуть все истории. Используется в социальных сетях и по хорошему большая часть данных не используется.

	getMasterStory(storyName, callback) - получить мастерскую историю.

	setMasterStory(storyName, value, callback) - изменить мастерскую историю.

	createStory(storyName, callback) - создать историю.

	renameStory(fromName, toName, callback) - переименовать историю.

	removeStory(storyName, callback) - удалить историю.

Модуль storyCharactersAPI
^^^^^^^^^^^^^^^^^^^^^^^^^

Управление персонажами в истории.

	getStoryCharacterNamesArray(storyName, callback) - получить список имен персонажей истории.

	getStoryCharacters(storyName, callback) - получить персонажей истории.

	addStoryCharacter(storyName, characterName, callback) - добавить персонажа в историю.

	switchStoryCharacters(storyName, fromName, toName, callback) - заменить персонажа в истории.

	removeStoryCharacter(storyName, characterName, callback) - удалить персонажа из истории.
	
	updateCharacterInventory(storyName, characterName, inventory, callback) - изменить инвентарь персонажа.

	onChangeCharacterActivity(storyName, characterName, activityType, checked, callback) - изменить активность персонажа.

	addCharacterToEvent(storyName, eventIndex, characterName, callback) - добавить персонажа в событие.

	removeCharacterFromEvent(storyName, eventIndex, characterName, callback) - удалить персонажа из события.

Зависимость - переименование/удаление досье персонажей.        
				
	_renameCharacterInStories(type, fromName, toName)
	
	_removeCharacterFromStories(type, characterName)

Модуль storyEventsAPI
^^^^^^^^^^^^^^^^^^^^^

Управление событиями в истории.

	getStoryEvents(storyName, callback) - получить все события истории.

	createEvent(storyName, eventName, eventText, toEnd, selectedIndex, callback) - создать событие.

	moveEvent(storyName, index, newIndex, callback) - переместить событие.

	cloneEvent(storyName, index, callback) - клонировать событие.

	mergeEvents(storyName, index, callback) - объединить события.

	removeEvent(storyName, index, callback) - удалить события.

	setEventOriginProperty(storyName, index, property, value, callback) - изменить свойство события.

Модуль storyViewAPI
^^^^^^^^^^^^^^^^^^^

Функции специального представления историй.

	getAllInventoryLists(characterName, callback) - получить весь список инвентаря для выбранного персонажа.

	getCharacterEventGroupsByStory(characterName, callback) - получить список событий, сгруппированный по историям выбранного персонажа.

	getCharacterEventsByTime(characterName, callback) - получить список событий персонажа в хронологическом порядке.

	getEventsTimeInfo(callback) - получить информацию о времени событий (таймлайн).

	getCharactersSummary(callback) - получить статистическую информацию о персонажах (фильтр).

	getCharacterReport(characterName, callback) - собрать отчет о персонаже (отчет в досье).

Модуль textSearchAPI
^^^^^^^^^^^^^^^^^^^^

Поиск по текстам.

	getTexts(searchStr, textTypes, caseSensitive, callback) - возвращает список текстов с указанной подстрокой, в перечисленных типах текста и флагом регистрозависимости.

Серверные модули
----------------

Модуль accessManagerOverridesAPI
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Определения и переопределения функций accessManagerAPI

Модуль overridesAPI
^^^^^^^^^^^^^^^^^^^

Переопределения функций.

Модуль permissionAPI
^^^^^^^^^^^^^^^^^^^^

Модуль контроля доступа.

Модуль permissionSummaryAPI
^^^^^^^^^^^^^^^^^^^^^^^^^^^

Модуль поддержки информации о владельцах сущностей и администрированию.

Модуль userAPI
^^^^^^^^^^^^^^

Управление учётными записями.