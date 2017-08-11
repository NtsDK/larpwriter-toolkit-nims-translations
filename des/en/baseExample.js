/*Copyright 2015, 2016 Timofey Rechkalov <ntsdk@yandex.ru>, Maria Sidekhmenova <matilda_@list.ru>

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
   limitations under the License. */

"use strict";

(function(exports){

    exports.data = {
            "Meta": {
                "name": "Властелин колец",
                "date": "3019/02/27 00:00",
                "preGameDate": "3018/01/01 00:00",
                "description": "События фильма, как основа для ролевой игры. В этой базе изложен первый фильм из трилогии Властелин колец. Хронология событий взята из книги.",
                "saveTime": "Mon Jul 17 2017 03:37:24 GMT+0500 (Pakistan Standard Time)"
              },
              "Settings": {
                "BriefingPreview": {
                  "characterName": "Арагорн"
                },
                "Stories": {
                  "storyName": "Братство кольца"
                },
                "CharacterProfile": {
                  "characterName": "Арагорн"
                },
                "Events": {
                  "storyName": "Начало пути",
                  "characterNames": [
                    "Арагорн"
                  ],
                  "eventIndexes": [],
                  "selectedFilter": "adaptationFilterByCharacter"
                },
                "GroupProfile": {
                  "groupName": "Нейтралы"
                }
              },
              "Version": "0.6.6",
              "Log": [
                [
                  "user",
                  "Thu Oct 13 2016 19:09:25 GMT+0500 (Pakistan Standard Time)",
                  "createProfileItem",
                  "[\"Блок\",\"enum\",\"_\",true,11]"
                ],
                [
                  "user",
                  "Thu Oct 13 2016 19:09:55 GMT+0500 (Pakistan Standard Time)",
                  "updateDefaultValue",
                  "[\"Блок\",\"Тёмный,Светлый,Нейтрал\"]"
                ],
                [
                  "user",
                  "Thu Oct 13 2016 19:10:09 GMT+0500 (Pakistan Standard Time)",
                  "moveProfileItem",
                  "[11,0]"
                ],
                [
                  "user",
                  "Thu Oct 13 2016 19:12:30 GMT+0500 (Pakistan Standard Time)",
                  "createGroup",
                  "[\"Светлый блок\"]"
                ],
                [
                  "user",
                  "Thu Oct 13 2016 19:12:37 GMT+0500 (Pakistan Standard Time)",
                  "createGroup",
                  "[\"Темный блок\"]"
                ],
                [
                  "user",
                  "Thu Oct 13 2016 19:12:47 GMT+0500 (Pakistan Standard Time)",
                  "createGroup",
                  "[\"Нейтралы\"]"
                ],
                [
                  "user",
                  "Thu Oct 13 2016 19:12:58 GMT+0500 (Pakistan Standard Time)",
                  "createGroup",
                  "[\"Эльфы\"]"
                ],
                [
                  "user",
                  "Thu Oct 13 2016 19:13:52 GMT+0500 (Pakistan Standard Time)",
                  "saveFilterToGroup",
                  "[\"Нейтралы\",[{\"type\":\"enum\",\"name\":\"profile-Блок\",\"selectedOptions\":{\"Нейтрал\":true}}]]"
                ],
                [
                  "user",
                  "Thu Oct 13 2016 19:13:55 GMT+0500 (Pakistan Standard Time)",
                  "saveFilterToGroup",
                  "[\"Светлый блок\",[{\"type\":\"enum\",\"name\":\"profile-Блок\",\"selectedOptions\":{\"Светлый\":true}}]]"
                ],
                [
                  "user",
                  "Thu Oct 13 2016 19:13:59 GMT+0500 (Pakistan Standard Time)",
                  "saveFilterToGroup",
                  "[\"Темный блок\",[{\"type\":\"enum\",\"name\":\"profile-Блок\",\"selectedOptions\":{\"Тёмный\":true}}]]"
                ],
                [
                  "user",
                  "Thu Oct 13 2016 19:14:05 GMT+0500 (Pakistan Standard Time)",
                  "saveFilterToGroup",
                  "[\"Эльфы\",[{\"type\":\"enum\",\"name\":\"profile-Раса\",\"selectedOptions\":{\"эльф\":true}}]]"
                ],
                [
                  "user",
                  "Thu Oct 13 2016 19:16:26 GMT+0500 (Pakistan Standard Time)",
                  "addBoardGroup",
                  "[\"Нейтралы\"]"
                ],
                [
                  "user",
                  "Thu Oct 13 2016 19:16:29 GMT+0500 (Pakistan Standard Time)",
                  "addBoardGroup",
                  "[\"Светлый блок\"]"
                ],
                [
                  "user",
                  "Thu Oct 13 2016 19:16:31 GMT+0500 (Pakistan Standard Time)",
                  "addBoardGroup",
                  "[\"Темный блок\"]"
                ],
                [
                  "user",
                  "Thu Oct 13 2016 19:16:33 GMT+0500 (Pakistan Standard Time)",
                  "addBoardGroup",
                  "[\"Эльфы\"]"
                ],
                [
                  "user",
                  "Thu Oct 13 2016 19:16:47 GMT+0500 (Pakistan Standard Time)",
                  "createResource",
                  "[\"Кольцо Всевластья\"]"
                ],
                [
                  "user",
                  "Thu Oct 13 2016 19:17:14 GMT+0500 (Pakistan Standard Time)",
                  "addEdge",
                  "[\"group-Темный блок\",\"resource-Кольцо Всевластья\",\"Стремится захватить\"]"
                ],
                [
                  "user",
                  "Thu Oct 13 2016 19:17:27 GMT+0500 (Pakistan Standard Time)",
                  "addEdge",
                  "[\"group-Светлый блок\",\"resource-Кольцо Всевластья\",\"Стремится уничтожить\"]"
                ],
                [
                  "user",
                  "Thu Oct 13 2016 19:17:50 GMT+0500 (Pakistan Standard Time)",
                  "addEdge",
                  "[\"group-Нейтралы\",\"resource-Кольцо Всевластья\",\"Стремятся эффективно использовать\"]"
                ],
                [
                  "user",
                  "Thu Oct 13 2016 19:18:15 GMT+0500 (Pakistan Standard Time)",
                  "addEdge",
                  "[\"group-Светлый блок\",\"group-Темный блок\",\"Хочет уничтожить\"]"
                ],
                [
                  "user",
                  "Thu Oct 13 2016 19:18:20 GMT+0500 (Pakistan Standard Time)",
                  "addEdge",
                  "[\"group-Темный блок\",\"group-Светлый блок\",\"Хочет уничтожить\"]"
                ],
                [
                  "user",
                  "Thu Oct 13 2016 19:19:40 GMT+0500 (Pakistan Standard Time)",
                  "saveFilterToGroup",
                  "[\"Эльфы\",[{\"type\":\"enum\",\"name\":\"profile-Блок\",\"selectedOptions\":{\"Светлый\":true}},{\"type\":\"enum\",\"name\":\"profile-Раса\",\"selectedOptions\":{\"эльф\":true}}]]"
                ],
                [
                  "user",
                  "Thu Oct 13 2016 19:20:25 GMT+0500 (Pakistan Standard Time)",
                  "addEdge",
                  "[\"group-Темный блок\",\"group-Нейтралы\",\"Хочет поработить\"]"
                ],
                [
                  "user",
                  "Thu Oct 13 2016 19:20:54 GMT+0500 (Pakistan Standard Time)",
                  "addEdge",
                  "[\"group-Светлый блок\",\"group-Нейтралы\",\"Хочет присоединить\"]"
                ],
                [
                  "user",
                  "Thu Oct 13 2016 19:21:37 GMT+0500 (Pakistan Standard Time)",
                  "addEdge",
                  "[\"group-Эльфы\",\"group-Светлый блок\",\"Направляют\"]"
                ],
                [
                  "user",
                  "Thu Oct 13 2016 19:22:00 GMT+0500 (Pakistan Standard Time)",
                  "createGroup",
                  "[\"Народ Рохана\"]"
                ],
                [
                  "user",
                  "Thu Oct 13 2016 19:22:04 GMT+0500 (Pakistan Standard Time)",
                  "createGroup",
                  "[\"Народ Гондора\"]"
                ],
                [
                  "user",
                  "Thu Oct 13 2016 19:22:11 GMT+0500 (Pakistan Standard Time)",
                  "addBoardGroup",
                  "[\"Народ Гондора\"]"
                ],
                [
                  "user",
                  "Thu Oct 13 2016 19:22:13 GMT+0500 (Pakistan Standard Time)",
                  "addBoardGroup",
                  "[\"Народ Рохана\"]"
                ],
                [
                  "user",
                  "Thu Oct 13 2016 19:22:51 GMT+0500 (Pakistan Standard Time)",
                  "addEdge",
                  "[\"group-Народ Гондора\",\"group-Народ Рохана\",\"Союзники\"]"
                ],
                [
                  "user",
                  "Thu Oct 13 2016 19:22:54 GMT+0500 (Pakistan Standard Time)",
                  "addEdge",
                  "[\"group-Народ Рохана\",\"group-Народ Гондора\",\"Союзники\"]"
                ],
                [
                  "user",
                  "Thu Oct 13 2016 19:23:20 GMT+0500 (Pakistan Standard Time)",
                  "addEdge",
                  "[\"group-Народ Гондора\",\"group-Светлый блок\",\"Склоняются\"]"
                ],
                [
                  "user",
                  "Thu Oct 13 2016 19:23:24 GMT+0500 (Pakistan Standard Time)",
                  "addEdge",
                  "[\"group-Народ Рохана\",\"group-Светлый блок\",\"Склоняются\"]"
                ],
                [
                  "user",
                  "Thu Oct 13 2016 19:26:04 GMT+0500 (Pakistan Standard Time)",
                  "createResource",
                  "[\"Шахты Мории\"]"
                ],
                [
                  "user",
                  "Thu Oct 13 2016 19:26:18 GMT+0500 (Pakistan Standard Time)",
                  "addEdge",
                  "[\"group-Темный блок\",\"resource-Шахты Мории\",\"Контролирует\"]"
                ],
                [
                  "user",
                  "Thu Oct 13 2016 19:26:47 GMT+0500 (Pakistan Standard Time)",
                  "addEdge",
                  "[\"group-Народ Гондора\",\"resource-Шахты Мории\",\"Хочет захватить\"]"
                ],
                [
                  "user",
                  "Thu Oct 13 2016 19:31:26 GMT+0500 (Pakistan Standard Time)",
                  "createCharacter",
                  "[\"Народ Гондора\"]"
                ],
                [
                  "user",
                  "Thu Oct 13 2016 19:31:30 GMT+0500 (Pakistan Standard Time)",
                  "createCharacter",
                  "[\"Народ Рохана\"]"
                ],
                [
                  "user",
                  "Thu Oct 13 2016 19:31:40 GMT+0500 (Pakistan Standard Time)",
                  "createProfileItem",
                  "[\"Народ Гондора\",\"checkbox\",false,true,12]"
                ],
                [
                  "user",
                  "Thu Oct 13 2016 19:31:46 GMT+0500 (Pakistan Standard Time)",
                  "createProfileItem",
                  "[\"Народ Рохана\",\"checkbox\",false,true,13]"
                ],
                [
                  "user",
                  "Thu Oct 13 2016 19:32:36 GMT+0500 (Pakistan Standard Time)",
                  "saveFilterToGroup",
                  "[\"Народ Гондора\",[{\"type\":\"checkbox\",\"name\":\"profile-Народ Гондора\",\"selectedOptions\":{\"true\":true}}]]"
                ],
                [
                  "user",
                  "Thu Oct 13 2016 19:32:53 GMT+0500 (Pakistan Standard Time)",
                  "saveFilterToGroup",
                  "[\"Народ Рохана\",[{\"type\":\"checkbox\",\"name\":\"profile-Народ Рохана\",\"selectedOptions\":{\"true\":true}}]]"
                ],
                [
                  "user",
                  "Sun May 28 2017 03:13:10 GMT+0500 (Pakistan Standard Time)",
                  "createAsset",
                  "[\"345\"]"
                ],
                [
                  "user",
                  "Sun May 28 2017 03:13:11 GMT+0500 (Pakistan Standard Time)",
                  "createAsset",
                  "[\"567\"]"
                ],
                [
                  "user",
                  "Sun May 28 2017 03:13:12 GMT+0500 (Pakistan Standard Time)",
                  "createAsset",
                  "[\"678\"]"
                ],
                [
                  "user",
                  "Sun May 28 2017 03:13:19 GMT+0500 (Pakistan Standard Time)",
                  "createShop",
                  "[\"456\",\"456\"]"
                ],
                [
                  "user",
                  "Sun May 28 2017 03:13:21 GMT+0500 (Pakistan Standard Time)",
                  "createShop",
                  "[\"567\",\"678\"]"
                ],
                [
                  "user",
                  "Sun May 28 2017 03:13:22 GMT+0500 (Pakistan Standard Time)",
                  "createShop",
                  "[\"789\",\"\"]"
                ],
                [
                  "user",
                  "Sun May 28 2017 03:13:25 GMT+0500 (Pakistan Standard Time)",
                  "createShop",
                  "[\"789\",\"456456\"]"
                ],
                [
                  "user",
                  "Tue May 30 2017 04:50:28 GMT+0500 (Pakistan Standard Time)",
                  "addAssetToShop",
                  "[\"345\",\"456\"]"
                ],
                [
                  "user",
                  "Tue May 30 2017 04:50:30 GMT+0500 (Pakistan Standard Time)",
                  "addAssetToShop",
                  "[\"567\",\"456\"]"
                ],
                [
                  "user",
                  "Tue May 30 2017 04:50:34 GMT+0500 (Pakistan Standard Time)",
                  "addAssetToShop",
                  "[\"567\",\"567\"]"
                ],
                [
                  "user",
                  "Tue May 30 2017 04:50:36 GMT+0500 (Pakistan Standard Time)",
                  "addAssetToShop",
                  "[\"678\",\"567\"]"
                ],
                [
                  "user",
                  "Tue May 30 2017 04:50:40 GMT+0500 (Pakistan Standard Time)",
                  "addAssetToShop",
                  "[\"345\",\"789\"]"
                ],
                [
                  "user",
                  "Tue May 30 2017 04:50:41 GMT+0500 (Pakistan Standard Time)",
                  "addAssetToShop",
                  "[\"678\",\"789\"]"
                ],
                [
                  "user",
                  "Tue May 30 2017 04:54:36 GMT+0500 (Pakistan Standard Time)",
                  "removeShop",
                  "[\"456\"]"
                ],
                [
                  "user",
                  "Tue May 30 2017 04:54:37 GMT+0500 (Pakistan Standard Time)",
                  "removeShop",
                  "[\"567\"]"
                ],
                [
                  "user",
                  "Tue May 30 2017 04:54:39 GMT+0500 (Pakistan Standard Time)",
                  "removeShop",
                  "[\"789\"]"
                ],
                [
                  "user",
                  "Tue May 30 2017 04:54:49 GMT+0500 (Pakistan Standard Time)",
                  "createShop",
                  "[\"США\",\" США \"]"
                ],
                [
                  "user",
                  "Tue May 30 2017 04:54:56 GMT+0500 (Pakistan Standard Time)",
                  "createShop",
                  "[\"Serenity\",\"Serenity\"]"
                ],
                [
                  "user",
                  "Tue May 30 2017 04:55:02 GMT+0500 (Pakistan Standard Time)",
                  "createShop",
                  "[\"Johnson&Johnson\",\"Johnson&Johnson\"]"
                ],
                [
                  "user",
                  "Tue May 30 2017 04:55:08 GMT+0500 (Pakistan Standard Time)",
                  "createShop",
                  "[\"PanAm\",\"PanAm\"]"
                ],
                [
                  "user",
                  "Tue May 30 2017 04:55:31 GMT+0500 (Pakistan Standard Time)",
                  "removeAsset",
                  "[\"345\"]"
                ],
                [
                  "user",
                  "Tue May 30 2017 04:55:33 GMT+0500 (Pakistan Standard Time)",
                  "removeAsset",
                  "[\"567\"]"
                ],
                [
                  "user",
                  "Tue May 30 2017 04:55:34 GMT+0500 (Pakistan Standard Time)",
                  "removeAsset",
                  "[\"678\"]"
                ],
                [
                  "user",
                  "Tue May 30 2017 04:59:21 GMT+0500 (Pakistan Standard Time)",
                  "createAsset",
                  "[\"Киберпротез руки «Орфей»\"]"
                ],
                [
                  "user",
                  "Tue May 30 2017 04:59:28 GMT+0500 (Pakistan Standard Time)",
                  "createAsset",
                  "[\"Киберпротез ноги «Стабильность»\"]"
                ],
                [
                  "user",
                  "Tue May 30 2017 04:59:35 GMT+0500 (Pakistan Standard Time)",
                  "createAsset",
                  "[\"Киберсердце «Железный дровосек»\"]"
                ],
                [
                  "user",
                  "Tue May 30 2017 04:59:44 GMT+0500 (Pakistan Standard Time)",
                  "createAsset",
                  "[\"Клон-сердце LoveIs\"]"
                ],
                [
                  "user",
                  "Tue May 30 2017 05:00:12 GMT+0500 (Pakistan Standard Time)",
                  "renameAsset",
                  "[\"Киберпротез ноги «Стабильность»\",\"Киберпротез руки «Орфей» (Sn)\"]"
                ],
                [
                  "user",
                  "Tue May 30 2017 05:00:29 GMT+0500 (Pakistan Standard Time)",
                  "renameAsset",
                  "[\"Киберпротез руки «Орфей»\",\"Киберпротез ноги «Стабильность» (Sn)\"]"
                ],
                [
                  "user",
                  "Tue May 30 2017 05:00:44 GMT+0500 (Pakistan Standard Time)",
                  "renameAsset",
                  "[\"Киберсердце «Железный дровосек»\",\"Киберсердце «Железный дровосек» (Sn)\"]"
                ],
                [
                  "user",
                  "Tue May 30 2017 05:00:59 GMT+0500 (Pakistan Standard Time)",
                  "renameAsset",
                  "[\"Клон-сердце LoveIs\",\"Клон-сердце LoveIs (J&J)\"]"
                ],
                [
                  "user",
                  "Tue May 30 2017 05:01:23 GMT+0500 (Pakistan Standard Time)",
                  "createAsset",
                  "[\"Клон-легкие BioAir (J&J)\"]"
                ],
                [
                  "user",
                  "Tue May 30 2017 05:01:38 GMT+0500 (Pakistan Standard Time)",
                  "createAsset",
                  "[\"Клон щитовидной железы BioBarHero (J&J)\"]"
                ],
                [
                  "user",
                  "Tue May 30 2017 05:01:51 GMT+0500 (Pakistan Standard Time)",
                  "createAsset",
                  "[\"BioLymph (J&J)\"]"
                ],
                [
                  "user",
                  "Tue May 30 2017 05:02:05 GMT+0500 (Pakistan Standard Time)",
                  "createAsset",
                  "[\"Мозговой имплант CyberGamer 1 (PA)\"]"
                ],
                [
                  "user",
                  "Tue May 30 2017 05:02:15 GMT+0500 (Pakistan Standard Time)",
                  "createAsset",
                  "[\"Имплант нервной системы FriendInside 1 (PA)\"]"
                ],
                [
                  "user",
                  "Tue May 30 2017 05:02:24 GMT+0500 (Pakistan Standard Time)",
                  "createAsset",
                  "[\"Киберстимулятор нервной системы «Снежинка» (Sn)\"]"
                ],
                [
                  "user",
                  "Tue May 30 2017 05:02:53 GMT+0500 (Pakistan Standard Time)",
                  "createAsset",
                  "[\"Запись воспоминаний\"]"
                ],
                [
                  "user",
                  "Tue May 30 2017 05:03:03 GMT+0500 (Pakistan Standard Time)",
                  "createAsset",
                  "[\"Копирование воспоминаний\"]"
                ],
                [
                  "user",
                  "Tue May 30 2017 05:03:13 GMT+0500 (Pakistan Standard Time)",
                  "createAsset",
                  "[\"Проигрывание воспоминаний\"]"
                ],
                [
                  "user",
                  "Tue May 30 2017 05:03:24 GMT+0500 (Pakistan Standard Time)",
                  "createAsset",
                  "[\"Сохранение слепка сознания\"]"
                ],
                [
                  "user",
                  "Tue May 30 2017 05:03:43 GMT+0500 (Pakistan Standard Time)",
                  "createAsset",
                  "[\"Модификация характера и личных черт\"]"
                ],
                [
                  "user",
                  "Tue May 30 2017 05:04:02 GMT+0500 (Pakistan Standard Time)",
                  "createAsset",
                  "[\"Криозаморозка (США)\"]"
                ],
                [
                  "user",
                  "Tue May 30 2017 05:04:38 GMT+0500 (Pakistan Standard Time)",
                  "createAsset",
                  "[\"extraVattoR\"]"
                ],
                [
                  "user",
                  "Tue May 30 2017 05:05:02 GMT+0500 (Pakistan Standard Time)",
                  "addAssetToShop",
                  "[\"BioLymph (J&J)\",\"Johnson&Johnson\"]"
                ],
                [
                  "user",
                  "Tue May 30 2017 05:05:05 GMT+0500 (Pakistan Standard Time)",
                  "addAssetToShop",
                  "[\"Клон щитовидной железы BioBarHero (J&J)\",\"Johnson&Johnson\"]"
                ],
                [
                  "user",
                  "Tue May 30 2017 05:05:06 GMT+0500 (Pakistan Standard Time)",
                  "addAssetToShop",
                  "[\"Клон-легкие BioAir (J&J)\",\"Johnson&Johnson\"]"
                ],
                [
                  "user",
                  "Tue May 30 2017 05:05:08 GMT+0500 (Pakistan Standard Time)",
                  "addAssetToShop",
                  "[\"Клон-сердце LoveIs (J&J)\",\"Johnson&Johnson\"]"
                ],
                [
                  "user",
                  "Tue May 30 2017 05:05:11 GMT+0500 (Pakistan Standard Time)",
                  "addAssetToShop",
                  "[\"Копирование воспоминаний\",\"Johnson&Johnson\"]"
                ],
                [
                  "user",
                  "Tue May 30 2017 05:05:13 GMT+0500 (Pakistan Standard Time)",
                  "addAssetToShop",
                  "[\"Запись воспоминаний\",\"Johnson&Johnson\"]"
                ],
                [
                  "user",
                  "Tue May 30 2017 05:05:18 GMT+0500 (Pakistan Standard Time)",
                  "addAssetToShop",
                  "[\"Модификация характера и личных черт\",\"Johnson&Johnson\"]"
                ],
                [
                  "user",
                  "Tue May 30 2017 05:05:23 GMT+0500 (Pakistan Standard Time)",
                  "addAssetToShop",
                  "[\"Киберпротез ноги «Стабильность» (Sn)\",\"Serenity\"]"
                ],
                [
                  "user",
                  "Tue May 30 2017 05:05:24 GMT+0500 (Pakistan Standard Time)",
                  "addAssetToShop",
                  "[\"Киберпротез руки «Орфей» (Sn)\",\"Serenity\"]"
                ],
                [
                  "user",
                  "Tue May 30 2017 05:05:26 GMT+0500 (Pakistan Standard Time)",
                  "addAssetToShop",
                  "[\"Киберсердце «Железный дровосек» (Sn)\",\"Serenity\"]"
                ],
                [
                  "user",
                  "Tue May 30 2017 05:05:28 GMT+0500 (Pakistan Standard Time)",
                  "addAssetToShop",
                  "[\"Киберстимулятор нервной системы «Снежинка» (Sn)\",\"Serenity\"]"
                ],
                [
                  "user",
                  "Tue May 30 2017 05:05:31 GMT+0500 (Pakistan Standard Time)",
                  "addAssetToShop",
                  "[\"Копирование воспоминаний\",\"Serenity\"]"
                ],
                [
                  "user",
                  "Tue May 30 2017 05:05:32 GMT+0500 (Pakistan Standard Time)",
                  "addAssetToShop",
                  "[\"Криозаморозка (США)\",\"Serenity\"]"
                ],
                [
                  "user",
                  "Tue May 30 2017 05:05:34 GMT+0500 (Pakistan Standard Time)",
                  "addAssetToShop",
                  "[\"Мозговой имплант CyberGamer 1 (PA)\",\"Serenity\"]"
                ],
                [
                  "user",
                  "Tue May 30 2017 05:05:40 GMT+0500 (Pakistan Standard Time)",
                  "addAssetToShop",
                  "[\"Имплант нервной системы FriendInside 1 (PA)\",\"PanAm\"]"
                ],
                [
                  "user",
                  "Tue May 30 2017 05:05:42 GMT+0500 (Pakistan Standard Time)",
                  "addAssetToShop",
                  "[\"Киберсердце «Железный дровосек» (Sn)\",\"PanAm\"]"
                ],
                [
                  "user",
                  "Tue May 30 2017 05:05:44 GMT+0500 (Pakistan Standard Time)",
                  "addAssetToShop",
                  "[\"Клон щитовидной железы BioBarHero (J&J)\",\"PanAm\"]"
                ],
                [
                  "user",
                  "Tue May 30 2017 05:05:45 GMT+0500 (Pakistan Standard Time)",
                  "addAssetToShop",
                  "[\"Мозговой имплант CyberGamer 1 (PA)\",\"PanAm\"]"
                ],
                [
                  "user",
                  "Tue May 30 2017 05:05:49 GMT+0500 (Pakistan Standard Time)",
                  "addAssetToShop",
                  "[\"Клон-сердце LoveIs (J&J)\",\"PanAm\"]"
                ],
                [
                  "user",
                  "Tue May 30 2017 05:05:51 GMT+0500 (Pakistan Standard Time)",
                  "addAssetToShop",
                  "[\"extraVattoR\",\"PanAm\"]"
                ],
                [
                  "user",
                  "Tue May 30 2017 05:05:54 GMT+0500 (Pakistan Standard Time)",
                  "addAssetToShop",
                  "[\"Криозаморозка (США)\",\"США\"]"
                ],
                [
                  "user",
                  "Tue May 30 2017 05:05:56 GMT+0500 (Pakistan Standard Time)",
                  "addAssetToShop",
                  "[\"Клон-легкие BioAir (J&J)\",\"США\"]"
                ],
                [
                  "user",
                  "Tue May 30 2017 05:05:58 GMT+0500 (Pakistan Standard Time)",
                  "addAssetToShop",
                  "[\"extraVattoR\",\"США\"]"
                ],
                [
                  "user",
                  "Tue May 30 2017 05:06:00 GMT+0500 (Pakistan Standard Time)",
                  "addAssetToShop",
                  "[\"BioLymph (J&J)\",\"США\"]"
                ],
                [
                  "user",
                  "Mon Jun 26 2017 03:29:03 GMT+0500 (Pakistan Standard Time)",
                  "createAsset",
                  "[\"Буст\"]"
                ],
                [
                  "user",
                  "Mon Jun 26 2017 03:34:20 GMT+0500 (Pakistan Standard Time)",
                  "createAsset",
                  "[\"Пластырь\"]"
                ],
                [
                  "user",
                  "Mon Jul 17 2017 00:47:35 GMT+0500 (Pakistan Standard Time)",
                  "addAssetToShop",
                  "[\"Буст\",\"Johnson&Johnson\"]"
                ],
                [
                  "user",
                  "Mon Jul 17 2017 00:47:36 GMT+0500 (Pakistan Standard Time)",
                  "addAssetToShop",
                  "[\"extraVattoR\",\"Johnson&Johnson\"]"
                ],
                [
                  "user",
                  "Mon Jul 17 2017 00:47:38 GMT+0500 (Pakistan Standard Time)",
                  "addAssetToShop",
                  "[\"Киберпротез руки «Орфей» (Sn)\",\"Johnson&Johnson\"]"
                ]
              ],
              "Shops": {
                "США": {
                  "name": "США",
                  "password": " США ",
                  "assets": {
                    "Криозаморозка (США)": true,
                    "Клон-легкие BioAir (J&J)": true,
                    "extraVattoR": true,
                    "BioLymph (J&J)": true
                  },
                  "categories": {},
                  "localAssets": {},
                  "corporation": ""
                },
                "Serenity": {
                  "name": "Serenity",
                  "password": "Serenity",
                  "assets": {
                    "Киберпротез ноги «Стабильность» (Sn)": true,
                    "Киберпротез руки «Орфей» (Sn)": true,
                    "Киберсердце «Железный дровосек» (Sn)": true,
                    "Киберстимулятор нервной системы «Снежинка» (Sn)": true,
                    "Копирование воспоминаний": true,
                    "Криозаморозка (США)": true,
                    "Мозговой имплант CyberGamer 1 (PA)": true
                  },
                  "categories": {
                    "Услуги": {
                      "globals": {},
                      "locals": {}
                    },
                    "Протезы": {
                      "globals": {},
                      "locals": {}
                    }
                  },
                  "localAssets": {
                    "Журнал \"Бодибилдинг\"": {
                      "description": "",
                      "displayString": ""
                    },
                    "Фигурка Iron Man": {
                      "description": "",
                      "displayString": ""
                    }
                  },
                  "corporation": ""
                },
                "Johnson&Johnson": {
                  "name": "Johnson&Johnson",
                  "password": "Johnson&Johnson",
                  "assets": {
                    "BioLymph (J&J)": true,
                    "Клон щитовидной железы BioBarHero (J&J)": true,
                    "Клон-легкие BioAir (J&J)": true,
                    "Клон-сердце LoveIs (J&J)": true,
                    "Копирование воспоминаний": true,
                    "Запись воспоминаний": true,
                    "Модификация характера и личных черт": true,
                    "Буст": true,
                    "extraVattoR": true,
                    "Киберпротез руки «Орфей» (Sn)": true
                  },
                  "categories": {
                    "Личность": {
                      "globals": {
                        "Копирование воспоминаний": {
                          "cost": 200
                        },
                        "Запись воспоминаний": {
                          "cost": 200
                        },
                        "Модификация характера и личных черт": {
                          "cost": 300
                        }
                      },
                      "locals": {}
                    },
                    "Внутренние органы": {
                      "globals": {
                        "BioLymph (J&J)": {
                          "cost": 2200
                        },
                        "Клон щитовидной железы BioBarHero (J&J)": {
                          "cost": 1200
                        },
                        "Клон-легкие BioAir (J&J)": {
                          "cost": 500
                        },
                        "Клон-сердце LoveIs (J&J)": {
                          "cost": 3000
                        }
                      },
                      "locals": {
                        "CyberTrader": {
                          "cost": 300
                        }
                      }
                    },
                    "Неликвид": {
                      "globals": {},
                      "locals": {
                        "Inquisitor": {
                          "cost": 100
                        }
                      }
                    }
                  },
                  "localAssets": {
                    "Golden Gate Times": {
                      "description": "",
                      "displayString": ""
                    },
                    "CyberTrader": {
                      "description": "",
                      "displayString": ""
                    },
                    "Inquisitor": {
                      "description": "",
                      "displayString": ""
                    }
                  },
                  "corporation": ""
                },
                "PanAm": {
                  "name": "PanAm",
                  "password": "PanAm",
                  "assets": {
                    "Имплант нервной системы FriendInside 1 (PA)": true,
                    "Киберсердце «Железный дровосек» (Sn)": true,
                    "Клон щитовидной железы BioBarHero (J&J)": true,
                    "Мозговой имплант CyberGamer 1 (PA)": true,
                    "Клон-сердце LoveIs (J&J)": true,
                    "extraVattoR": true
                  },
                  "categories": {},
                  "localAssets": {},
                  "corporation": ""
                }
              },
              "Assets": {
                "Киберпротез руки «Орфей» (Sn)": {
                  "name": "Киберпротез руки «Орфей» (Sn)",
                  "displayString": "",
                  "isPhysical": false,
                  "resourceCost": 20,
                  "apiKey": "",
                  "description": "заменяет поврежденную руку, добавляет +1 хит. Требует периодического сервиса, иначе теряет функциональность (нельзя пользоваться одной кистью)."
                },
                "Киберпротез ноги «Стабильность» (Sn)": {
                  "name": "Киберпротез ноги «Стабильность» (Sn)",
                  "displayString": "",
                  "isPhysical": false,
                  "resourceCost": 30,
                  "apiKey": "",
                  "description": "заменяет поврежденную ногу. Требует периодического сервиса, иначе теряет функциональность (хромота)."
                },
                "Киберсердце «Железный дровосек» (Sn)": {
                  "name": "Киберсердце «Железный дровосек» (Sn)",
                  "displayString": "",
                  "isPhysical": false,
                  "resourceCost": 10,
                  "apiKey": "",
                  "description": "заменяет поврежденное сердце. Требует периодического сервиса, иначе теряет функциональность (тяжелое ранение)."
                },
                "Клон-сердце LoveIs (J&J)": {
                  "name": "Клон-сердце LoveIs (J&J)",
                  "displayString": "",
                  "isPhysical": false,
                  "resourceCost": 20,
                  "apiKey": "",
                  "description": "заменяет поврежденное сердце. Ходят слухи, что значительно повышает эмоциональность."
                },
                "Клон-легкие BioAir (J&J)": {
                  "name": "Клон-легкие BioAir (J&J)",
                  "displayString": "",
                  "isPhysical": false,
                  "resourceCost": 10,
                  "apiKey": "",
                  "description": "заменяет поврежденные легкие. Ходят слухи, что они не долговечны."
                },
                "Клон щитовидной железы BioBarHero (J&J)": {
                  "name": "Клон щитовидной железы BioBarHero (J&J)",
                  "displayString": "",
                  "isPhysical": false,
                  "resourceCost": 30,
                  "apiKey": "",
                  "description": "восстанавливает поврежденную эндокринную систему. В силу ускоренного обмена веществ предотвращает похмелье. Ходят слухи, что люди с такими имплантами чаще зависают в барах."
                },
                "BioLymph (J&J)": {
                  "name": "BioLymph (J&J)",
                  "displayString": "",
                  "isPhysical": false,
                  "resourceCost": 10,
                  "apiKey": "",
                  "description": "восстанавливает поврежденную лимфатическую систему. При легком ранении хиты не теряются, а восстанавливаются со скоростью 1 хит в 10 минут (вне боевки). Ходят слухи, что люди у людей с новой биологической лимфой меняется и характер."
                },
                "Мозговой имплант CyberGamer 1 (PA)": {
                  "name": "Мозговой имплант CyberGamer 1 (PA)",
                  "displayString": "",
                  "isPhysical": false,
                  "resourceCost": 30,
                  "apiKey": "",
                  "description": "восстанавливает поврежденную нервную систему, +0,5 часа времени пребывания в VR. Ходят слухи, что те, кто много его используют, особенно сильно привязываются к VR."
                },
                "Имплант нервной системы FriendInside 1 (PA)": {
                  "name": "Имплант нервной системы FriendInside 1 (PA)",
                  "displayString": "",
                  "isPhysical": false,
                  "resourceCost": 10,
                  "apiKey": "",
                  "description": "восстанавливает поврежденную нервную систему, позволяет носителям импланта устанавливать связь мозг-мозг, передавая мысли или синхронизируя другие параметры. Широко не распространяется, но известно, что этой технологией пользуется группа Multisapiens."
                },
                "Киберстимулятор нервной системы «Снежинка» (Sn)": {
                  "name": "Киберстимулятор нервной системы «Снежинка» (Sn)",
                  "displayString": "",
                  "isPhysical": false,
                  "resourceCost": 20,
                  "apiKey": "",
                  "description": "восстанавливает поврежденную нервную систему, аугментация нервной системы широкого спектра. В зависимости от настроек позволяет до некоторой степени контролировать эмоции, стимулировать мозговую активность, эффективно работать с воспоминаниями."
                },
                "Запись воспоминаний": {
                  "name": "Запись воспоминаний",
                  "displayString": "",
                  "isPhysical": false,
                  "resourceCost": 30,
                  "apiKey": "",
                  "description": ""
                },
                "Копирование воспоминаний": {
                  "name": "Копирование воспоминаний",
                  "displayString": "",
                  "isPhysical": false,
                  "resourceCost": 30,
                  "apiKey": "",
                  "description": ""
                },
                "Проигрывание воспоминаний": {
                  "name": "Проигрывание воспоминаний",
                  "displayString": "",
                  "isPhysical": false,
                  "resourceCost": 10,
                  "apiKey": "",
                  "description": ""
                },
                "Сохранение слепка сознания": {
                  "name": "Сохранение слепка сознания",
                  "displayString": "",
                  "isPhysical": false,
                  "resourceCost": 40,
                  "apiKey": "",
                  "description": ""
                },
                "Модификация характера и личных черт": {
                  "name": "Модификация характера и личных черт",
                  "displayString": "",
                  "isPhysical": false,
                  "resourceCost": 20,
                  "apiKey": "",
                  "description": ""
                },
                "Криозаморозка (США)": {
                  "name": "Криозаморозка (США)",
                  "displayString": "",
                  "isPhysical": false,
                  "resourceCost": 10,
                  "apiKey": "",
                  "description": ""
                },
                "extraVattoR": {
                  "name": "extraVattoR",
                  "displayString": "",
                  "isPhysical": false,
                  "resourceCost": 20,
                  "apiKey": "",
                  "description": ""
                },
                "Буст": {
                  "name": "Буст",
                  "displayString": "",
                  "isPhysical": true,
                  "resourceCost": 2,
                  "apiKey": "",
                  "description": "Мощный стимулятор."
                },
                "Пластырь": {
                  "name": "Пластырь",
                  "displayString": "",
                  "isPhysical": false,
                  "resourceCost": 2,
                  "apiKey": "",
                  "description": "Медикамент."
                }
              }
            };

})(typeof exports === 'undefined'? this['BaseExample']={}: exports);