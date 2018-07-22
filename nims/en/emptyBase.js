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

'use strict';

((exports) => {
    exports.data = {
            "Meta": {
                "name": "",
                "date": "1970/01/01 00:00",
                "preGameDate": "1970/01/01 00:00",
                "description": "",
                "saveTime": "Sun Jul 22 2018 15:51:33 GMT+0500 (Екатеринбург, стандартное время)"
              },
              "Characters": {},
              "Stories": {},
              "Settings": {
                "BriefingPreview": {},
                "Stories": {},
                "CharacterProfile": {}
              },
              "Version": "0.7.2",
              "Log": [
                [
                  "user",
                  "Sun Jul 22 2018 15:51:31 GMT+0500 (Екатеринбург, стандартное время)",
                  "setDatabase",
                  "[]",
                  "[\"Sun Jul 22 2018 15:51:31 GMT+0500 (Екатеринбург, стандартное время)\",\"OK\"]"
                ]
              ],
              "Groups": {},
              "InvestigationBoard": {
                "groups": {},
                "resources": {},
                "relations": {}
              },
              "Relations": [],
              "CharacterProfileStructure": [],
              "PlayerProfileStructure": [],
              "Players": {},
              "ProfileBindings": {},
              "Gears": {
                  "nodes": [
                    {
                      "id": "0812a02f-7951-41d3-81b8-21bded1c67c5",
                      "x": -138,
                      "y": -11,
                      "label": "THE MESSAGE\n\nWhat’s the game abou\nt?\nWhat story does it t\nell?\nWhat questions does \nit pose?",
                      "name": "THE MESSAGE",
                      "group": "The Engine (Vision)",
                      "notes": "What’s the game about?\nWhat story does it tell?\nWhat questions does it pose?",
                      "shape": "box"
                    },
                    {
                      "id": "2112865a-3a91-4c2c-a3ae-ab928721c926",
                      "x": -99,
                      "y": -211,
                      "label": "THE AESTHETICS\n\nWhat does the game l\nook like?\nWhat senses does it \nengage?\nWhich element will t\nhe players remember \nand why?",
                      "name": "THE AESTHETICS",
                      "group": "The Engine (Vision)",
                      "notes": "What does the game look like?\nWhat senses does it engage?\nWhich element will the players remember and why?",
                      "shape": "box"
                    },
                    {
                      "id": "43dadc80-2084-4a70-b072-52a3fc285491",
                      "x": -314,
                      "y": -213,
                      "label": "PLAYERS' EXPERIENCE\n\nWhat emotions and st\nates do the players \nexperience during th\ne game? \nWhat relations do th\ney form?\nWhat is left in them\n after the game, wha\nt do they remember?",
                      "name": "PLAYERS' EXPERIENCE",
                      "group": "The Engine (Vision)",
                      "notes": "What emotions and states do the players experience during the game? \nWhat relations do they form?\nWhat is left in them after the game, what do they remember?",
                      "shape": "box"
                    },
                    {
                      "id": "e8387ac5-b29b-4f79-a3f0-c26a7180de50",
                      "x": -402,
                      "y": 13,
                      "label": "PLAYERS' ACTIONS\n\nWhat is the most imp\nortant for them duri\nng the game?\nWhat physical action\ns do they perform?\nWhat character inter\nactions can happen (\nrivalry or cooperati\non)?",
                      "name": "PLAYERS' ACTIONS",
                      "group": "The Engine (Vision)",
                      "notes": "What is the most important for them during the game?\nWhat physical actions do they perform?\nWhat character interactions can happen (rivalry or cooperation)?",
                      "shape": "box"
                    },
                    {
                      "id": "d9028776-70b6-4e62-832f-e07ab30199cf",
                      "x": 108,
                      "y": -217,
                      "label": "THE TIME\n\nDoes it take place a\nt a specific time of\n day? \nHow is it timed, if \nat all (and how do p\nlayers experience th\nat)?\nAre there any pre-pl\nanned events?",
                      "name": "THE TIME",
                      "group": "The Interface (Manipulation)",
                      "notes": "Does it take place at a specific time of day? \nHow is it timed, if at all (and how do players experience that)?\nAre there any pre-planned events?",
                      "shape": "box"
                    },
                    {
                      "id": "74fd7243-18aa-47e6-9684-35a16efbf513",
                      "x": -415,
                      "y": -450,
                      "label": "THE PLACE\n\nWhere is the game lo\ncated?\nHow does the space d\nelimit the game, if \nat all? \nDo you need special \nspace (like blackbox\nes) and how will you\n use it?",
                      "name": "THE PLACE",
                      "group": "The Interface (Manipulation)",
                      "notes": "Where is the game located?\nHow does the space delimit the game, if at all? \nDo you need special space (like blackboxes) and how will you use it?",
                      "shape": "box"
                    },
                    {
                      "id": "ec10124b-12ff-4ccd-9555-4143c0aae0ac",
                      "x": -159,
                      "y": -461,
                      "label": "SCENOGRAPHY\n\nRealistic or symboli\nc?\nWhat are the key ele\nments? \nHow can you use the \nscenography to play \n(what actions can th\ne players perform wi\nth it)?\nWhat ideas does the \nscenography convey?",
                      "name": "SCENOGRAPHY",
                      "group": "The Interface (Manipulation)",
                      "notes": "Realistic or symbolic?\nWhat are the key elements? \nHow can you use the scenography to play (what actions can the players perform with it)?\nWhat ideas does the scenography convey?",
                      "shape": "box"
                    },
                    {
                      "id": "f5477161-87f2-45f6-ba60-5a1c40bdb558",
                      "x": -521,
                      "y": -256,
                      "label": "GAME CHARACTERS\n\nDo the players creat\ne them, or you? \nIf you – how? (Writt\nen sheets, other mea\nns?) \nHow will they commun\nicate the desirable \ninteractions?",
                      "name": "GAME CHARACTERS",
                      "group": "The Interface (Manipulation)",
                      "notes": "Do the players create them, or you? \nIf you – how? (Written sheets, other means?) \nHow will they communicate the desirable interactions?",
                      "shape": "box"
                    },
                    {
                      "id": "9431a054-0c17-44e7-a3a1-8364e3a2e9cb",
                      "x": 116,
                      "y": -413,
                      "label": "OFF-GAME ELEMENTS\n\nWhere will the playe\nrs sleep, how will t\nhey eat? \nHow does that influe\nnce the game experie\nnce?\nCan you do it differ\nently?",
                      "name": "OFF-GAME ELEMENTS",
                      "group": "The Interface (Manipulation)",
                      "notes": "Where will the players sleep, how will they eat? \nHow does that influence the game experience?\nCan you do it differently?",
                      "shape": "box"
                    },
                    {
                      "id": "a52f0d31-5b33-4936-a981-ed80f152439d",
                      "x": 221,
                      "y": -608,
                      "label": "EXPECTATIONS TOWARDS PLAYERS\n\nHow do they prepare \nfor the game? \nWhat attitudes and b\nehaviours do you exp\nect before the game,\n what behaviour duri\nng and afterwards?",
                      "name": "EXPECTATIONS TOWARDS PLAYERS",
                      "group": "The Packaging (Communication)",
                      "notes": "How do they prepare for the game? \nWhat attitudes and behaviours do you expect before the game, what behaviour during and afterwards?",
                      "shape": "box"
                    },
                    {
                      "id": "6ec5f1b3-dd76-455a-8ad0-af3678d3e7a3",
                      "x": -68,
                      "y": -649,
                      "label": "THE GAME PROCESS\n\nDo you moderate the \ngame?\nHow much? \nWhich elements are k\nnown to the players,\n which should be sec\nret?",
                      "name": "THE GAME PROCESS",
                      "group": "The Packaging (Communication)",
                      "notes": "Do you moderate the game?\nHow much? \nWhich elements are known to the players, which should be secret?",
                      "shape": "box"
                    },
                    {
                      "id": "f4c3dfd6-062a-43d6-9ab1-235553064cca",
                      "x": -367,
                      "y": -678,
                      "label": "THE GAME RULES\n\nWhat game mechanics \nhelp lead the player\ns to the Vision, if \nany? \nWhat are the rules o\nf engagement and saf\nety rules? \nWhich rule could you\n forgot if you had t\no? Why?",
                      "name": "THE GAME RULES",
                      "group": "The Packaging (Communication)",
                      "notes": "What game mechanics help lead the players to the Vision, if any? \nWhat are the rules of engagement and safety rules? \nWhich rule could you forgot if you had to? Why?",
                      "shape": "box"
                    },
                    {
                      "id": "d06d709a-51af-4967-b13f-2800297c0ce4",
                      "x": -660,
                      "y": -644,
                      "label": "THE GAME UNIVERSE (DIEGESIS)\n\nWhich elements are c\nrucial for the playe\nrs? \nWhich elements lead \nthem to the Vision?",
                      "name": "THE GAME UNIVERSE (DIEGESIS)",
                      "group": "The Packaging (Communication)",
                      "notes": "Which elements are crucial for the players? \nWhich elements lead them to the Vision?",
                      "shape": "box"
                    },
                    {
                      "id": "ce7f9930-d7b6-4ebc-892a-b97de4821fdc",
                      "x": -790,
                      "y": -391,
                      "label": "COMMUNICATION WITH PLAYERS\n\nWhat communication c\nhannels do you use? \nWhat is the ratio of\n in-game information\n to technical descri\nptions?\nDo the players commu\nnicate before the ga\nme, and how do you i\nnfluence that?",
                      "name": "COMMUNICATION WITH PLAYERS",
                      "group": "The Packaging (Communication)",
                      "notes": "What communication channels do you use? \nWhat is the ratio of in-game information to technical descriptions?\nDo the players communicate before the game, and how do you influence that?",
                      "shape": "box"
                    },
                    {
                      "id": "5ae739b0-7bf6-495c-8cee-dd91d570ce63",
                      "x": -784,
                      "y": 51,
                      "label": "EMPTY CARD\n\nWhy is this element \nimportant?\nWhat do you want to \nachieve through it?",
                      "name": "EMPTY CARD",
                      "group": "Unassigned",
                      "notes": "Why is this element important?\nWhat do you want to achieve through it?",
                      "shape": "box"
                    }
                  ],
                  "edges": [],
                  "settings": {
                    "physicsEnabled": false,
                    "showNotes": true
                  }
                },
              "Sliders": [
                  {
                      "name": "Openness",
                      "top": "Transparency",
                      "bottom": "Secrecy",
                      "value": 0
                    },
                    {
                      "name": "Mechanics",
                      "top": "Intrusive",
                      "bottom": "Discreet",
                      "value": 0
                    },
                    {
                      "name": "Environment",
                      "top": "360° Illusion",
                      "bottom": "Material Independence",
                      "value": 0
                    },
                    {
                      "name": "Character Creation Responsibility",
                      "top": "Organizer",
                      "bottom": "Player",
                      "value": 0
                    },
                    {
                      "name": "Culture Creation Responsiblity",
                      "top": "Organizer",
                      "bottom": "Player",
                      "value": 0
                    },
                    {
                      "name": "Runtime Direction",
                      "top": "Active",
                      "bottom": "Passive",
                      "value": 0
                    },
                    {
                      "name": "Loyalty to the World",
                      "top": "Plausibility",
                      "bottom": "Playability",
                      "value": 0
                    },
                    {
                      "name": "Pressure on Players",
                      "top": "Hardcore",
                      "bottom": "Pretence",
                      "value": 0
                    },
                    {
                      "name": "Player Motivation",
                      "top": "Victory",
                      "bottom": "Exploration",
                      "value": 0
                    },
                    {
                      "name": "Character as Mask",
                      "top": "Differentiation",
                      "bottom": "Thin Characters",
                      "value": 0
                    },
                    {
                      "name": "Communication Style",
                      "top": "Verbal",
                      "bottom": "Physical",
                      "value": 0
                    },
                    {
                      "name": "Representation of Theme",
                      "top": "Stories",
                      "bottom": "Actions",
                      "value": 0
                    },
                    {
                      "name": "Your Slider Here",
                      "top": "Maximum",
                      "bottom": "Minimum",
                      "value": 0
                    }
                  ]
            };
})(typeof exports === 'undefined' ? this.EmptyBase = {} : exports);

