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
                "name": "The Lord of the Rings",
                "date": "3019/02/27 00:00",
                "preGameDate": "3018/01/01 00:00",
                "description": "Film based LARP game basis. This base describes the first film from trilogy The Lord of the Rings. Timeline is taken from books.",
                "saveTime": "Mon Aug 01 2016 01:11:26 GMT+0500 (Pakistan Standard Time)"
              },
              "Characters": {
                "Aragorn": {
                  "name": "Aragorn",
                  "Player": "Micheal",
                  "Status": "Reserved",
                  "Race": "Human",
                  "Weapon": "sword, bow, knife",
                  "Civility": "M",
                  "Outfit": "",
                  "Weight, kilos.": 80,
                  "Sing good": true,
                  "Biography": "The last strider's leader and the first king of joined kingdoms, direct descent of Elendil's royal blood (by Isildur line).\nAragorn became the greatest human of his age. He leaded the people of west against Sauron forces. He helped to destroy the One Ring (he was one of the ring fellowship). He joined Arnor and Gondor kingdoms.",
                  "VKontakte image": "photo-17502880_426145599",
                  "Site image": "Aragorn"
                },
                "Arwen": {
                  "name": "Arwen",
                  "Player": "Jade",
                  "Status": "Reserved",
                  "Race": "Elf",
                  "Weapon": "",
                  "Civility": "F",
                  "Outfit": "",
                  "Weight, kilos.": 55,
                  "Sing good": true,
                  "Biography": "Elrond's daughter. Galadriel's granddaughter.\n",
                  "VKontakte image": "photo-17502880_426145598",
                  "Site image": "Arwen"
                },
                "Bilbo": {
                  "name": "Bilbo",
                  "Player": "Jack",
                  "Status": "In discussion",
                  "Race": "Hobbit",
                  "Weapon": "sword, chestnuts",
                  "Civility": "M",
                  "Outfit": "",
                  "Weight, kilos.": 73,
                  "Sing good": false,
                  "Biography": "Frodo's uncle.",
                  "VKontakte image": "photo-17502880_426145597",
                  "Site image": "Question"
                },
                "Boromir": {
                  "name": "Boromir",
                  "Player": "Peter",
                  "Status": "In discussion",
                  "Race": "Human",
                  "Weapon": "sword, bow",
                  "Civility": "M",
                  "Outfit": "the Horn of Gondor",
                  "Weight, kilos.": 90,
                  "Sing good": false,
                  "Biography": "The eldest son and successor of Steward of Gondor - Denethor the second and his wife Finduilas. He is a Faramir's brother.",
                  "VKontakte image": "photo-17502880_426145597",
                  "Site image": "Question"
                },
                "Galadriel": {
                  "name": "Galadriel",
                  "Player": "Anna",
                  "Status": "Reserved",
                  "Race": "Elf",
                  "Weapon": "",
                  "Civility": "F",
                  "Outfit": "the Nenya ring",
                  "Weight, kilos.": 53,
                  "Sing good": false,
                  "Biography": "The mightiest elven ruler in the Middle-earth after the War of Wrath. She is the ruler of Lothlórien. ",
                  "VKontakte image": "photo-17502880_426145597",
                  "Site image": "Question"
                },
                "Gandalf": {
                  "name": "Gandalf",
                  "Player": "",
                  "Status": "Open",
                  "Race": "Maiar",
                  "Weapon": "staff, magic",
                  "Civility": "M",
                  "Outfit": "the Narya ring",
                  "Weight, kilos.": 82,
                  "Sing good": false,
                  "Biography": "Mighty wizard.",
                  "VKontakte image": "photo-17502880_426145597",
                  "Site image": "Question"
                },
                "Gimli": {
                  "name": "Gimli",
                  "Player": "",
                  "Status": "Open",
                  "Race": "Dwarf",
                  "Weapon": "axe",
                  "Civility": "M",
                  "Outfit": "",
                  "Weight, kilos.": 80,
                  "Sing good": false,
                  "Biography": "He is dwarf joined to war against Sauron.",
                  "VKontakte image": "photo-17502880_426145597",
                  "Site image": "Question"
                },
                "Gollum": {
                  "name": "Gollum",
                  "Player": "",
                  "Status": "Open",
                  "Race": "Other",
                  "Weapon": "",
                  "Civility": "M",
                  "Outfit": "",
                  "Weight, kilos.": 34,
                  "Sing good": false,
                  "Biography": "A small, slimy creature who lived on a small island in the centre of an underground lake at the roots of the Misty Mountains. He survived on cave fish, which he caught from his small boat, and small goblins who strayed too far from the stronghold of the Great Goblin. Over the years, his eyes adapted to the dark and became \"lamp-like\", shining with a sickly pale light.",
                  "VKontakte image": "photo-17502880_426145597",
                  "Site image": "Question"
                },
                "Legolas": {
                  "name": "Legolas",
                  "Player": "",
                  "Status": "Open",
                  "Race": "Elf",
                  "Weapon": "bow, elven knifes",
                  "Civility": "M",
                  "Outfit": "",
                  "Weight, kilos.": 57,
                  "Sing good": true,
                  "Biography": "Legolas was the son of Thranduil, King of the Woodland Realm of Northern Mirkwood.",
                  "VKontakte image": "photo-17502880_426145597",
                  "Site image": "Question"
                },
                "Merry": {
                  "name": "Merry",
                  "Player": "",
                  "Status": "Open",
                  "Race": "Hobbit",
                  "Weapon": "chestnuts",
                  "Civility": "M",
                  "Outfit": "",
                  "Weight, kilos.": 57,
                  "Sing good": true,
                  "Biography": "Frodo's friend. The fellow of the ring.",
                  "VKontakte image": "photo-17502880_426145597",
                  "Site image": "Question"
                },
                "Nazgul": {
                  "name": "Nazgul",
                  "Player": "",
                  "Status": "Open",
                  "Race": "Other",
                  "Weapon": "sword",
                  "Civility": "M",
                  "Outfit": "",
                  "Weight, kilos.": 0,
                  "Sing good": true,
                  "Biography": "They were nine men who succumbed to Sauron's power and attained near-immortality as wraiths, servants bound to the power of the One Ring and completely under the dominion of Sauron.",
                  "VKontakte image": "photo-17502880_426145597",
                  "Site image": "Question"
                },
                "Pippin": {
                  "name": "Pippin",
                  "Player": "",
                  "Status": "Open",
                  "Race": "Hobbit",
                  "Weapon": "chestnuts",
                  "Civility": "M",
                  "Outfit": "",
                  "Weight, kilos.": 53,
                  "Sing good": true,
                  "Biography": "Frodo's friend. The fellow of the ring.",
                  "VKontakte image": "photo-17502880_426145597",
                  "Site image": "Question"
                },
                "Saruman": {
                  "name": "Saruman",
                  "Player": "",
                  "Status": "Open",
                  "Race": "Maiar",
                  "Weapon": "staff, magic",
                  "Civility": "M",
                  "Outfit": "palantir",
                  "Weight, kilos.": 68,
                  "Sing good": false,
                  "Biography": "He is leader of the Istari, wizards sent to Middle-earth in human form by the godlike Valar to challenge Sauron.",
                  "VKontakte image": "photo-17502880_426145597",
                  "Site image": "Question"
                },
                "Sauron": {
                  "name": "Sauron",
                  "Player": "",
                  "Status": "Open",
                  "Race": "Other",
                  "Weapon": "",
                  "Civility": "M",
                  "Outfit": "palantir",
                  "Weight, kilos.": 1,
                  "Sing good": false,
                  "Biography": "He is described as the chief lieutenant of the first Dark Lord, Morgoth.",
                  "VKontakte image": "photo-17502880_426145597",
                  "Site image": "Question"
                },
                "Sam": {
                  "name": "Sam",
                  "Player": "",
                  "Status": "Open",
                  "Race": "Hobbit",
                  "Weapon": "chestnuts",
                  "Civility": "M",
                  "Outfit": "Hollow-ware",
                  "Weight, kilos.": 57,
                  "Sing good": true,
                  "Biography": "Gardener, servant and friend of Frodo.",
                  "VKontakte image": "photo-17502880_426145597",
                  "Site image": "Question"
                },
                "Frodo": {
                  "name": "Frodo",
                  "Player": "",
                  "Status": "Open",
                  "Race": "Hobbit",
                  "Weapon": "chestnuts",
                  "Civility": "M",
                  "Outfit": "",
                  "Weight, kilos.": 64,
                  "Sing good": true,
                  "Biography": "Hobbit which became the Ring-bearer by the twist of fate.",
                  "VKontakte image": "photo-17502880_426145597",
                  "Site image": "Question"
                },
                "Elrond": {
                  "name": "Elrond",
                  "Player": "",
                  "Status": "Open",
                  "Race": "Elf",
                  "Weapon": "",
                  "Civility": "M",
                  "Outfit": "the Vilya ring",
                  "Weight, kilos.": 72,
                  "Sing good": false,
                  "Biography": "Elrond is a son of Eärendil and Elwing. Elrond was Lord of Rivendell, one of the mighty rulers of old that remained in Middle-earth in its Third Age. ",
                  "VKontakte image": "photo-17502880_426145597",
                  "Site image": "Question"
                }
              },
              "ProfileSettings": [
                {
                  "name": "Player",
                  "type": "string",
                  "value": "",
                  "doExport": true
                },
                {
                  "name": "Status",
                  "type": "enum",
                  "value": "Open,Reserved,In discussion",
                  "doExport": true
                },
                {
                  "name": "Race",
                  "type": "enum",
                  "value": "Human,Elf,Dwarf,Orc,Hobbit,Maiar,Other",
                  "doExport": true
                },
                {
                  "name": "Civility",
                  "type": "enum",
                  "value": "doesn't matter,M,F",
                  "doExport": true
                },
                {
                  "name": "Weapon",
                  "type": "string",
                  "value": "",
                  "doExport": true
                },
                {
                  "name": "Outfit",
                  "type": "string",
                  "value": "",
                  "doExport": true
                },
                {
                  "name": "Weight, kilos.",
                  "type": "number",
                  "value": 0,
                  "doExport": true
                },
                {
                  "name": "Sing good",
                  "type": "checkbox",
                  "value": false,
                  "doExport": false
                },
                {
                  "name": "Biography",
                  "type": "text",
                  "value": "",
                  "doExport": true
                },
                {
                  "name": "VKontakte image",
                  "type": "string",
                  "value": "photo-17502880_426145597",
                  "doExport": true
                },
                {
                  "name": "Site image",
                  "type": "string",
                  "value": "",
                  "doExport": true
                }
              ],
              "Stories": {
                "Arwen and Aragorn": {
                  "name": "Arwen and Aragorn",
                  "story": "Love story of Aragorn and Arwen. \n\n// activity\nBoth actively think about each other.\n// activity",
                  "characters": {
                    "Aragorn": {
                      "name": "Aragorn",
                      "inventory": "Evenstar",
                      "activity": {
                        "active": true
                      }
                    },
                    "Arwen": {
                      "name": "Arwen",
                      "inventory": "",
                      "activity": {
                        "active": true
                      }
                    }
                  },
                  "events": [
                    {
                      "name": "Evenstar",
                      "text": "Aragorn and Arwen. Arwen gives Aragorn her jeweled pendant - Evenstar.",
                      "time": "3018/10/25 02:00",
                      "characters": {
                        "Aragorn": {
                          "text": "",
                          "time": ""
                        },
                        "Arwen": {
                          "text": "",
                          "time": ""
                        }
                      }
                    }
                  ]
                },
                "The fellowship of the Ring": {
                  "name": "The fellowship of the Ring",
                  "story": "// activity\nFrodo actively moves forward.\nAll other heros follow him.\nBoromir actively think how to bring the Ring to Gondor.\nSaruman actively tries to stop the fellowship.\nElrond knows that the fellowship goes to Mount Doom.\nGaladriel waits fellowship in Lorien.\n// activity",
                  "characters": {
                    "Aragorn": {
                      "name": "Aragorn",
                      "inventory": "sheath, Elven cloak",
                      "activity": {
                        "follower": true
                      }
                    },
                    "Boromir": {
                      "name": "Boromir",
                      "inventory": "golden belt, Elven cloak",
                      "activity": {
                        "follower": true,
                        "active": true
                      }
                    },
                    "Galadriel": {
                      "name": "Galadriel",
                      "inventory": "",
                      "activity": {
                        "passive": true
                      }
                    },
                    "Gandalf": {
                      "name": "Gandalf",
                      "inventory": "",
                      "activity": {
                        "follower": true
                      }
                    },
                    "Gimli": {
                      "name": "Gimli",
                      "inventory": "Three strands of Galadriel's hair, Elven cloak",
                      "activity": {
                        "follower": true
                      }
                    },
                    "Legolas": {
                      "name": "Legolas",
                      "inventory": "Galadhrim bow, Elven cloak",
                      "activity": {
                        "follower": true
                      }
                    },
                    "Merry": {
                      "name": "Merry",
                      "inventory": "silver belt, Elven cloak",
                      "activity": {
                        "follower": true
                      }
                    },
                    "Pippin": {
                      "name": "Pippin",
                      "inventory": "silver belt, Elven cloak",
                      "activity": {
                        "follower": true
                      }
                    },
                    "Saruman": {
                      "name": "Saruman",
                      "inventory": "",
                      "activity": {
                        "active": true
                      }
                    },
                    "Sam": {
                      "name": "Sam",
                      "inventory": "small grey wooden box, Elven cloak, Elven rope",
                      "activity": {
                        "follower": true
                      }
                    },
                    "Frodo": {
                      "name": "Frodo",
                      "inventory": "Phial of Galadriel, Elven cloak",
                      "activity": {
                        "active": true
                      }
                    },
                    "Elrond": {
                      "name": "Elrond",
                      "inventory": "",
                      "activity": {
                        "passive": true
                      }
                    }
                  },
                  "events": [
                    {
                      "name": "Council of Elrond",
                      "text": "Council discuss the problem of destroying the Ring. Ring can be destroyed only in the Mount Doom. Nobody can do it. Frodo takes this task. Aragorn, Legolas, Gimli, Boromir, Gandalf and his Shire friends follow him. The fellowship of the Ring is created.",
                      "time": "3018/10/25 17:00",
                      "characters": {
                        "Aragorn": {
                          "text": "",
                          "time": ""
                        },
                        "Boromir": {
                          "text": "",
                          "time": ""
                        },
                        "Gandalf": {
                          "text": "",
                          "time": ""
                        },
                        "Gimli": {
                          "text": "",
                          "time": ""
                        },
                        "Legolas": {
                          "text": "",
                          "time": ""
                        },
                        "Merry": {
                          "text": "",
                          "time": ""
                        },
                        "Pippin": {
                          "text": "",
                          "time": ""
                        },
                        "Sam": {
                          "text": "",
                          "time": ""
                        },
                        "Frodo": {
                          "text": "",
                          "time": ""
                        },
                        "Elrond": {
                          "text": "",
                          "time": ""
                        }
                      }
                    },
                    {
                      "name": "The earth way",
                      "text": "First way is closed by Sauron patrols.",
                      "time": "3019/01/08 13:00",
                      "characters": {
                        "Aragorn": {
                          "text": "",
                          "time": ""
                        },
                        "Boromir": {
                          "text": "",
                          "time": ""
                        },
                        "Gandalf": {
                          "text": "",
                          "time": ""
                        },
                        "Gimli": {
                          "text": "",
                          "time": ""
                        },
                        "Legolas": {
                          "text": "",
                          "time": ""
                        },
                        "Merry": {
                          "text": "",
                          "time": ""
                        },
                        "Pippin": {
                          "text": "",
                          "time": ""
                        },
                        "Saruman": {
                          "text": "",
                          "time": ""
                        },
                        "Sam": {
                          "text": "",
                          "time": ""
                        },
                        "Frodo": {
                          "text": "",
                          "time": ""
                        }
                      }
                    },
                    {
                      "name": "The mountain way",
                      "text": "Saruman's magic blocks the mountain way.",
                      "time": "3019/01/12 16:00",
                      "characters": {
                        "Aragorn": {
                          "text": "",
                          "time": ""
                        },
                        "Boromir": {
                          "text": "",
                          "time": ""
                        },
                        "Gandalf": {
                          "text": "",
                          "time": ""
                        },
                        "Gimli": {
                          "text": "",
                          "time": ""
                        },
                        "Legolas": {
                          "text": "",
                          "time": ""
                        },
                        "Merry": {
                          "text": "",
                          "time": ""
                        },
                        "Pippin": {
                          "text": "",
                          "time": ""
                        },
                        "Saruman": {
                          "text": "",
                          "time": ""
                        },
                        "Sam": {
                          "text": "",
                          "time": ""
                        },
                        "Frodo": {
                          "text": "",
                          "time": ""
                        }
                      }
                    },
                    {
                      "name": "Moria way",
                      "text": "The fellowship goes to Moria. They awaken Watcher in the Water which destroys Moria's gate after fellowship come in. Inside fellowship find dead bodies and understand Moria is controlled by orcs.",
                      "time": "3019/01/13 18:00",
                      "characters": {
                        "Aragorn": {
                          "text": "",
                          "time": ""
                        },
                        "Boromir": {
                          "text": "",
                          "time": ""
                        },
                        "Gandalf": {
                          "text": "",
                          "time": ""
                        },
                        "Gimli": {
                          "text": "",
                          "time": ""
                        },
                        "Legolas": {
                          "text": "",
                          "time": ""
                        },
                        "Merry": {
                          "text": "",
                          "time": ""
                        },
                        "Pippin": {
                          "text": "",
                          "time": ""
                        },
                        "Sam": {
                          "text": "",
                          "time": ""
                        },
                        "Frodo": {
                          "text": "",
                          "time": ""
                        }
                      }
                    },
                    {
                      "name": "Moria",
                      "text": "Gandalf shows Gollum to Frodo and tells that Gollum walk with them for a long time.\nPippin accidentally drop bucket to well near Balin's grave. This sound awakes orcs and Balrog.",
                      "time": "3019/01/14 21:00",
                      "characters": {
                        "Aragorn": {
                          "text": "",
                          "time": ""
                        },
                        "Boromir": {
                          "text": "",
                          "time": ""
                        },
                        "Gandalf": {
                          "text": "",
                          "time": ""
                        },
                        "Gimli": {
                          "text": "",
                          "time": ""
                        },
                        "Legolas": {
                          "text": "",
                          "time": ""
                        },
                        "Merry": {
                          "text": "",
                          "time": ""
                        },
                        "Pippin": {
                          "text": "",
                          "time": ""
                        },
                        "Sam": {
                          "text": "",
                          "time": ""
                        },
                        "Frodo": {
                          "text": "",
                          "time": ""
                        }
                      }
                    },
                    {
                      "name": "Moria exit",
                      "text": "Gandalf defends the bridge from Balrog. Balrog breaks the bridge and fall down with Gandalf. The rest of fellowship goes away from Moria and go deep in Galadriel's Lorien.",
                      "time": "3019/01/15 16:00",
                      "characters": {
                        "Aragorn": {
                          "text": "",
                          "time": ""
                        },
                        "Boromir": {
                          "text": "",
                          "time": ""
                        },
                        "Gandalf": {
                          "text": "",
                          "time": ""
                        },
                        "Gimli": {
                          "text": "",
                          "time": ""
                        },
                        "Legolas": {
                          "text": "",
                          "time": ""
                        },
                        "Merry": {
                          "text": "",
                          "time": ""
                        },
                        "Pippin": {
                          "text": "",
                          "time": ""
                        },
                        "Sam": {
                          "text": "",
                          "time": ""
                        },
                        "Frodo": {
                          "text": "",
                          "time": ""
                        }
                      }
                    },
                    {
                      "name": "Galadriel's mirror",
                      "text": "Galadriel shows Frodo the future in the magic mirror.",
                      "time": "3019/02/14 21:30",
                      "characters": {
                        "Galadriel": {
                          "text": "",
                          "time": ""
                        },
                        "Frodo": {
                          "text": "",
                          "time": ""
                        }
                      }
                    },
                    {
                      "name": "Leaving Lórien",
                      "text": "Lorien elves give supplies to the fellowship help to go further.",
                      "time": "3019/02/16 12:00",
                      "characters": {
                        "Aragorn": {
                          "text": "",
                          "time": ""
                        },
                        "Boromir": {
                          "text": "",
                          "time": ""
                        },
                        "Galadriel": {
                          "text": "",
                          "time": ""
                        },
                        "Gimli": {
                          "text": "",
                          "time": ""
                        },
                        "Legolas": {
                          "text": "",
                          "time": ""
                        },
                        "Merry": {
                          "text": "",
                          "time": ""
                        },
                        "Pippin": {
                          "text": "",
                          "time": ""
                        },
                        "Sam": {
                          "text": "",
                          "time": ""
                        },
                        "Frodo": {
                          "text": "",
                          "time": ""
                        }
                      }
                    },
                    {
                      "name": "Uruk-hai",
                      "text": "Saruman sends Uruk-hai to catch the Ring-bearer.",
                      "time": "3019/01/10 00:00",
                      "characters": {
                        "Saruman": {
                          "text": "",
                          "time": ""
                        }
                      }
                    },
                    {
                      "name": "Waterfall",
                      "text": "Fellowship make stop near waterfall.",
                      "time": "3019/02/25 16:00",
                      "characters": {
                        "Aragorn": {
                          "text": "",
                          "time": ""
                        },
                        "Boromir": {
                          "text": "",
                          "time": ""
                        },
                        "Gimli": {
                          "text": "",
                          "time": ""
                        },
                        "Legolas": {
                          "text": "",
                          "time": ""
                        },
                        "Merry": {
                          "text": "",
                          "time": ""
                        },
                        "Pippin": {
                          "text": "",
                          "time": ""
                        },
                        "Sam": {
                          "text": "",
                          "time": ""
                        },
                        "Frodo": {
                          "text": "",
                          "time": ""
                        }
                      }
                    },
                    {
                      "name": "Fork",
                      "text": "Boromir tries to take the Ring from Frodo. At this moment Uruk-hai found them. They kill Boromir, take Merry and Pippin and run away to Saruman. Frodo decides to go alone but Sam goes with him. The rest of fellowship bury Boromir and run for Uruk-hai detachment.",
                      "time": "3019/02/26 17:20",
                      "characters": {
                        "Aragorn": {
                          "text": "",
                          "time": ""
                        },
                        "Boromir": {
                          "text": "",
                          "time": ""
                        },
                        "Gimli": {
                          "text": "",
                          "time": ""
                        },
                        "Legolas": {
                          "text": "",
                          "time": ""
                        },
                        "Merry": {
                          "text": "",
                          "time": ""
                        },
                        "Pippin": {
                          "text": "",
                          "time": ""
                        },
                        "Sam": {
                          "text": "",
                          "time": ""
                        },
                        "Frodo": {
                          "text": "",
                          "time": ""
                        }
                      }
                    }
                  ]
                },
                "Saruman's story": {
                  "name": "Saruman's story",
                  "story": "// activity\nSauron and Saruman actively work on their dark plans. \n// activity\n\nSaruman creates orc army and Uruk-hai.",
                  "characters": {
                    "Saruman": {
                      "name": "Saruman",
                      "inventory": "",
                      "activity": {
                        "active": true
                      }
                    },
                    "Sauron": {
                      "name": "Sauron",
                      "inventory": "",
                      "activity": {
                        "active": true
                      }
                    }
                  },
                  "events": [
                    {
                      "name": "Destroying grove",
                      "text": "Saruman creates orcs and gives order to destroy grove nearby Orthanc. Also he creates Uruk-hais.",
                      "time": "3018/07/13 18:00",
                      "characters": {
                        "Saruman": {
                          "text": "",
                          "time": ""
                        },
                        "Sauron": {
                          "text": "",
                          "time": ""
                        }
                      }
                    }
                  ]
                },
                "Journey begins": {
                  "name": "Journey begins",
                  "story": "// activity\nGandalf actively search the Ring information.\nGandalf sends Frodo to Bree. Frodo runs away from nazguls (defence).\nSam, Merry and Pippin follows Frodo.\nSaruman actively catches Gandalf. Gandalf actively running away.\nAragorn passively waits hobbits in Bree. After that he defends them.\nNazguls actively search hobbits.\nSauron passively waits when Frodo puts the Ring on to find him. Arwen actively saves Frodo from nazguls.\nElrond passively waits Frodo to cure him.\n// activity\n\nDuring another one birthday Bilbo make a festive occasion and mysteriously disappered. He leaves all his things to nephew - Frodo. And the unknown Ring too.\n\nGandalf feels black magic in the Ring so he goes to Minas Tirith to find more information.\n\nSauron takes information from Gollum who is the Ring bearer and sends nazguls to catch him. \n\nGandalf goes back to Shire to warn Frodo. Ancient evil is awaken and black knights are on the way. Gandalf checks the Ring and it is that ring. Gandalf sends Frodo to Bree to the Prancing Pony tavern. Sam listens all this conversation so he was added to party.\n\nGandalf goes to Saruman to discuss the plan. But Saruman already falls into the dark side.\n\nGoing from Shire Frodo and Sam meets Merry and Pippin which stole vegetables. Suddenly nazguls go near them. All hobbits run away from nazguls.\n\nHobbit party goes to Bree and finds the Prancing Pony. They don't find Gandalf there. Accidentally Frodo put the Ring on. Strider sees this. Strider explains he is a friend and take hobbits to other longing.\n\nNazguls goes to the Prancing Pony into the night. They break everything hobbit room but there are no hobbits.\n\nNazguls catch hobbits in Amon Sul. One of them wounded Frodo. Strider beats off the nazguls. Arwen finds them and takes wounded Frodo to Rivendell running from nazguls.\n\nArwen brings Frodo to Rivendell. Nazguls can't get across the river the Rivendell boundary.\n\nFrodo is cured. Frodo meets Bilbo and gets the last inherit. The sword and the Dwarven mail.",
                  "characters": {
                    "Aragorn": {
                      "name": "Aragorn",
                      "inventory": "",
                      "activity": {
                        "passive": true,
                        "follower": true
                      }
                    },
                    "Arwen": {
                      "name": "Arwen",
                      "inventory": "",
                      "activity": {
                        "active": true
                      }
                    },
                    "Bilbo": {
                      "name": "Bilbo",
                      "inventory": "",
                      "activity": {
                        "passive": true
                      }
                    },
                    "Gandalf": {
                      "name": "Gandalf",
                      "inventory": "",
                      "activity": {
                        "active": true
                      }
                    },
                    "Merry": {
                      "name": "Merry",
                      "inventory": "",
                      "activity": {
                        "follower": true
                      }
                    },
                    "Nazgul": {
                      "name": "Nazgul",
                      "inventory": "",
                      "activity": {
                        "active": true
                      }
                    },
                    "Pippin": {
                      "name": "Pippin",
                      "inventory": "",
                      "activity": {
                        "follower": true
                      }
                    },
                    "Saruman": {
                      "name": "Saruman",
                      "inventory": "",
                      "activity": {
                        "active": true
                      }
                    },
                    "Sauron": {
                      "name": "Sauron",
                      "inventory": "",
                      "activity": {
                        "passive": true
                      }
                    },
                    "Sam": {
                      "name": "Sam",
                      "inventory": "",
                      "activity": {
                        "follower": true
                      }
                    },
                    "Frodo": {
                      "name": "Frodo",
                      "inventory": "the Ring, Sting, Dwarven mail",
                      "activity": {
                        "defensive": true
                      }
                    },
                    "Elrond": {
                      "name": "Elrond",
                      "inventory": "",
                      "activity": {
                        "passive": true
                      }
                    }
                  },
                  "events": [
                    {
                      "name": "Bilbo's birthday",
                      "text": "During another one birthday Bilbo make a festive occasion and mysteriously disappered. He leaves all his things to nephew - Frodo. And the unknown Ring too.",
                      "time": "3001/09/22 21:00",
                      "characters": {
                        "Bilbo": {
                          "text": "So I live a long life. So I think my age is near over. Thats why I go to elves after my birthday. But I think speech disappearing wasn't brilliant idea. Seems the Ring goes to my finger itself.",
                          "time": "September 22, 3001",
                          "ready": true
                        },
                        "Gandalf": {
                          "text": "I always know Bilbo is unusual hobbit. I don't like his last disappearing joke in birthday but he has the heart and energy to go to elves.",
                          "time": "September 22, 3001",
                          "ready": true
                        },
                        "Merry": {
                          "text": "Old man Bilbo made a wonderful party on his 111 birthday. Then he just disappeared from stage during his speech. Nobody understand what happens. And nobody see Bilbo in Shire anymore. Bilbo left all his things to Frodo.",
                          "time": "September 22, 3001",
                          "ready": true
                        },
                        "Pippin": {
                          "text": "Old man Bilbo made a wonderful party on his 111 birthday. Then he just disappeared from stage during his speech. Nobody understand what happens. And nobody see Bilbo in Shire anymore. Bilbo left all his things to Frodo.",
                          "time": "September 22, 3001",
                          "ready": true
                        },
                        "Sam": {
                          "text": "Old man Bilbo made a wonderful party on his 111 birthday. Then he just disappeared from stage during his speech. Nobody understand what happens. And nobody see Bilbo in Shire anymore. Bilbo left all his things to Frodo.",
                          "time": "September 22, 3001",
                          "ready": true
                        },
                        "Frodo": {
                          "text": "Old man Bilbo made a wonderful party on his 111 birthday. Then he just disappeared from stage during his speech. Nobody understand what happens. And nobody see Bilbo in Shire anymore. He give all his things to me including strange ring which he never left before.",
                          "time": "September 22, 3001",
                          "ready": true
                        }
                      }
                    },
                    {
                      "name": "Gandalf's suspicions",
                      "text": "Gandalf feels black magic in the Ring so he goes to Minas Tirith to find more information.",
                      "time": "3001/09/23 12:00",
                      "characters": {
                        "Bilbo": {
                          "text": "So much time I tell myself - don't listen Gandalf. But he persuades me again. Thats why I left my precious ring to Frodo. Oh, how it lives without me?",
                          "time": "September 23, 3001",
                          "ready": true
                        },
                        "Gandalf": {
                          "text": "I'm worry about Bilbo's ring. It has powerful magic and he was so attached to the ring. It was very hard to persuade him to leave the ring to Frodo. I need to know more about this ring.",
                          "time": "September 23, 3001",
                          "ready": true
                        },
                        "Frodo": {
                          "text": "Usually I carry the Bilbo's Ring but don't use it. Generally life goes further. Gandalf goes away somewhere.",
                          "time": "September 23, 3001",
                          "ready": true
                        }
                      }
                    },
                    {
                      "name": "Nazguls",
                      "text": "Sauron takes information from Gollum who is the Ring bearer and sends nazguls to catch him. ",
                      "time": "3018/03/02 15:00",
                      "characters": {
                        "Nazgul": {
                          "text": "Overlord sends us to Shire. We need to find the Ring-bearer and take the Ring.",
                          "time": "March 2, 3018",
                          "ready": true
                        },
                        "Sauron": {
                          "text": "This beast tells us about the Ring bearer. This is some hobbit from Shire so I send nazguls to find him. By the way, who are hobbits?",
                          "time": "March 2, 3018",
                          "ready": true
                        }
                      }
                    },
                    {
                      "name": "Frodo's journey begin",
                      "text": "Gandalf goes back to Shire to warn Frodo. Ancient evil is awaken and black knights are on the way. Gandalf checks the Ring and it is that ring. Gandalf sends Frodo to Bree to the Prancing Pony tavern. Sam listens all this conversation so he was added to party.",
                      "time": "3018/04/13 20:00",
                      "characters": {
                        "Gandalf": {
                          "text": "In Minas Tirith I found that it can be the Sauron Ring. I went back to Shire. Unfortunately the ring check gives us the answer. There were fire letters on the Ring surface after throwing ring into the fire. I hear stories about black knights near the Shire. I sended Frodo to Bree. I hope I will be there in the same time. I need to have talk with Saruman. Sam heard our talk and I didn't want to send Frodo alone. I think Frodo needs somebody to remind him about home and resist to the Ring. Sam got a scolding for it. I'm sure he will do task well.",
                          "time": "April 4, 3018",
                          "ready": true
                        },
                        "Sam": {
                          "text": "It was a late night. I cut bushes near open window and suddenly heard Frodo and Gandalf talk. Gangalf's voice was very strained so I decided to listen carefully. I understand that Bilbo's Ring is real and it is very unusual and Sauron search it and it is actually not die. I listen so careful that forgot about cutting. And Gandalf pay attention that scissors are not clanking. He caught me and I tell about everything. So he sended me with Frodo to Bree.",
                          "time": "April 4, 3018",
                          "ready": true
                        },
                        "Frodo": {
                          "text": "I went home and found agitated Gandalf. He asked me to get Bilbo's ring and throw it to the fire. I was surprised but the Ring was cold and there were some strange letters. Gandalf said the only one Ring has such properties - the Sauron Ring. And now Sauron is not dead. He is growing in strength and search for the Ring. He sended black knights for me and I need to run. Sam listened our talk so Gandalf sended Sam with me. We go to Bree. Gandalf will meet us there.",
                          "time": "April 4, 3018",
                          "ready": true
                        }
                      }
                    },
                    {
                      "name": "Saruman captures Gandalf",
                      "text": "Gandalf goes to Saruman to discuss the plan. But Saruman already falls into the dark side.",
                      "time": "3018/07/10 16:00",
                      "characters": {
                        "Gandalf": {
                          "text": "I came to Saruman to discuss our actions. But as it happens Saruman is on the one side with Sauron. He caught me and lock on the Orthanc roof. Miraculously the eagle saved me. I can't be in Bree in time.",
                          "time": "July 10, 3018",
                          "ready": true
                        },
                        "Saruman": {
                          "text": "I see infinite darkness in palantir and I see this is my way. Gandalf's visit was not surprise. The overlord ordered to join Gandalf to us. But Gandalf find how to run away. So much the worse for him.",
                          "time": "July 10, 3018",
                          "ready": true
                        }
                      }
                    },
                    {
                      "name": "Merry and Pippin",
                      "text": "Going from Shire Frodo and Sam meets Merry and Pippin which stole vegetables. Suddenly nazguls go near them. All hobbits run away from nazguls.",
                      "time": "3018/04/17 13:00",
                      "characters": {
                        "Merry": {
                          "text": "I and Pippin run away from angry farmer by the field and suddenly meet Frodo and Sam. They run with us. I don't think farmer will examine who is not guilty. We escaped from farmer and found the road and suddenly feel cold. We hide nearby and at this moment see the black rider. Frodo tells that there are several riders which search him and they go to Bree as fast as possible. We joined their company.",
                          "time": "April 17, 3018",
                          "ready": true
                        },
                        "Pippin": {
                          "text": "I and Merry run away from angry farmer by the field and suddenly meet Frodo and Sam. They run with us. I don't think farmer will examine who is not guilty. We escaped from farmer and found the road and suddenly feel cold. We hide nearby and at this moment see the black rider. Frodo tells that there are several riders which search him and they go to Bree as fast as possible. We joined their company.",
                          "time": "April 17, 3018",
                          "ready": true
                        },
                        "Sam": {
                          "text": "Pippin and Merry as usual run away from angry farmer by the field and suddenly meet us. We run with them. I don't think farmer will examine who is not guilty. We escaped from farmer and found the road and suddenly feel cold. We hide nearby and at this moment see the black rider. Frodo told that there are several riders which search him and we go to Bree as fast as possible. Merry and Pippin joined to our company.",
                          "time": "April 17, 3018",
                          "ready": true
                        },
                        "Frodo": {
                          "text": "Pippin and Merry run away from angry farmer by the field and suddenly meet us. We run with them. I don't think farmer will examine who is not guilty. We escaped from farmer and found the road and suddenly feel cold. We hide nearby and at this moment see the black rider. I told that there are several riders which search me and we go to Bree. Merry and Pippin joined to our company.",
                          "time": "April 17, 3018",
                          "ready": true
                        }
                      }
                    },
                    {
                      "name": "the Prancing Pony",
                      "text": "Hobbit party goes to Bree and finds the Prancing Pony. They don't find Gandalf there. Accidentally Frodo put the Ring on. Strider sees this. Strider explains he is a friend and take hobbits to other longing.",
                      "time": "3018/09/30 20:00",
                      "characters": {
                        "Aragorn": {
                          "text": "Hobbits company came to Bree. Hobbits are so awkward. I knew that they will come but I decided to wait a bit. Too bad I didn't come at once - Frodo bering the Ring in the hall centre. Now Sauron and nazguls definitely knows where to search them. One way or another I introduced myself took hobbits to other longing. It is obvious nazguls will visit the Prancing Pony this night.",
                          "time": "September 30, 3018",
                          "ready": true
                        },
                        "Merry": {
                          "text": "We came to the Prancing Pony. There was no Gangalf. We didn't know what to do and decided to stay overnight. Suddenly Frodo felt sick and disappeared the same way as Bilbo in birthday. We didn't understand what happen. We tried to find Frodo without success. Suddenly we saw human going away with Frodo. We went for him and prepare to fight. It emerged that this is Strider, Gandalf's friend and he will guard us. Strider said it is dangerous to stay overnight in the Prancing Pony so he lead us to other longing.",
                          "time": "September 30, 3018",
                          "ready": true
                        },
                        "Pippin": {
                          "text": "We came to the Prancing Pony. There was no Gangalf. We didn't know what to do and decided to stay overnight. Suddenly Frodo felt sick and disappeared the same way as Bilbo in birthday. We didn't understand what happen. We tried to find Frodo without success. Suddenly we saw human going away with Frodo. We went for him and prepare to fight. It emerged that this is Strider, Gandalf's friend and he will guard us. Strider said it is dangerous to stay overnight in the Prancing Pony so he lead us to other longing.",
                          "time": "September 30, 3018",
                          "ready": true
                        },
                        "Sam": {
                          "text": "We came to the Prancing Pony. There was no Gangalf. We didn't know what to do and decided to stay overnight. Suddenly Frodo felt sick and disappeared the same way as Bilbo in birthday. We didn't understand what happen. We tried to find Frodo without success. Suddenly we saw human going away with Frodo. We went for him and prepare to fight. It emerged that this is Strider, Gandalf's friend and he will guard us. Strider said it is dangerous to stay overnight in the Prancing Pony so he lead us to other longing.",
                          "time": "September 30, 3018",
                          "ready": true
                        },
                        "Frodo": {
                          "text": "We came to the Prancing Pony. There was no Gangalf. We didn't know what to do and decided to stay overnight. Suddenly I felt irresistible desire to bear the Ring and did it. The world loose all colours. There were only shadows instead people. And among everything the big fire eye look at me. Horror stricken I slipped the ring off finger. Nobody looked at me. Thats why I think everything is good but suddenly human grabbed me and take away to internal rooms. It was a Strider a Gandalf's friend. He met us. He was very angry at me that I bering the ring. Sauron has eyes and ears everywhere. My friends tried to save me from Strider but I explain them he is a friend. Strider said it is dangerous to stay overnight in the Prancing Pony so he lead us to other longing.",
                          "time": "September 30, 3018",
                          "ready": true
                        }
                      }
                    },
                    {
                      "name": "Night attack",
                      "text": "Nazguls goes to the Prancing Pony into the night. They break everything hobbit room but there are no hobbits.",
                      "time": "3018/09/31 04:00",
                      "characters": {
                        "Aragorn": {
                          "text": "We heard strange sounds and screams from the Prancing Pony. In the morning hobbits room was upside down and beds were pierced with swords. This time nazguls made a mistake. We need to go away from Bree.",
                          "time": "October 1, 3018",
                          "ready": true
                        },
                        "Merry": {
                          "text": "We heard strange sounds and screams from the Prancing Pony. In the morning hobbits room was upside down and beds were pierced with swords. I'm very scared but I need to go with Frodo. He is in a big danger.",
                          "time": "October 1, 3018",
                          "ready": true
                        },
                        "Nazgul": {
                          "text": "We went to tavern in the night. There were hobbits which we searched for. But there were no one in their room. We will happily kill everybody in this city but Strider is nearby and only he can interferes. We have time. We will wait when hobbit bering the ring and show himself.",
                          "time": "October 1, 3018",
                          "ready": true
                        },
                        "Pippin": {
                          "text": "We heard strange sounds and screams from the Prancing Pony. In the morning hobbits room was upside down and beds were pierced with swords. I'm very scared but I need to go with Frodo. He is in a big danger.",
                          "time": "October 1, 3018",
                          "ready": true
                        },
                        "Sam": {
                          "text": "We heard strange sounds and screams from the Prancing Pony. In the morning hobbits room was upside down and beds were pierced with swords. I'm very scared but I need to go with Frodo. He is in a big danger.",
                          "time": "October 1, 3018",
                          "ready": true
                        },
                        "Frodo": {
                          "text": "We heard strange sounds and screams from the Prancing Pony. In the morning hobbits room was upside down and beds were pierced with swords. I'm very scared but we need to go. The Ring is my burden. Nobody can do this except me.",
                          "time": "October 1, 3018",
                          "ready": true
                        }
                      }
                    },
                    {
                      "name": "Amon Sûl",
                      "text": "Nazguls catch hobbits in Amon Sul. One of them wounded Frodo. Strider beats off the nazguls. Arwen finds them and takes wounded Frodo to Rivendell running from nazguls.",
                      "time": "3018/10/04 03:30",
                      "characters": {
                        "Aragorn": {
                          "text": "I went to patrol for nothing. Nazguls stole by me. I drove them away hardly but they wounded Frodo. I could save him. Arwen came unexpectedly. She took Frodo from me. I hope black riders will not overtake them on the Rivendell way.",
                          "time": "October 4, 3018",
                          "ready": true
                        },
                        "Arwen": {
                          "text": "I felt cold and pain and run to this place. Strider just drove nazguls away from hobbits. The ring-bearer was wounded. The only hope was my horse. We rode to Rivendell as far as we can.",
                          "time": "October 4, 3018",
                          "ready": true
                        },
                        "Merry": {
                          "text": "Strider went to patrol. Suddenly nazguls surrounded us. We tried to fight but they just throw us. They wounded me and finally Strider came back. Strider drove out nazguls. He tended to wound but suddenly we saw elven woman. So Rivendell was not far away. She took Frodo and rode to Rivendell. I hope Frodo will be fine.",
                          "time": "October 4, 3018",
                          "ready": true
                        },
                        "Nazgul": {
                          "text": "We surrounded hobbits. We felt the Ring power. And Strider came back. He countered an attack. We wounded the Ring bearer. He hadn't much time. Suddenly elven woman appered...",
                          "time": "October 4, 3018",
                          "ready": true
                        },
                        "Pippin": {
                          "text": "Strider went to patrol. Suddenly nazguls surrounded us. We tried to fight but they just throw us. They wounded me and finally Strider came back. Strider drove out nazguls. He tended to wound but suddenly we saw elven woman. So Rivendell was not far away. She took Frodo and rode to Rivendell. I hope Frodo will be fine.",
                          "time": "October 4, 3018",
                          "ready": true
                        },
                        "Sam": {
                          "text": "Strider went to patrol. Suddenly nazguls surrounded us. We tried to fight but they just throw us. They wounded me and finally Strider came back. Strider drove out nazguls. He tended to wound but suddenly we saw elven woman. So Rivendell was not far away. She took Frodo and rode to Rivendell. I hope Frodo will be fine.",
                          "time": "October 4, 3018",
                          "ready": true
                        },
                        "Frodo": {
                          "text": "Strider went to patrol. Suddenly nazguls surrounded us. We tried to fight but they just throw us. They wounded me and finally Strider came back. Strider drove out nazguls. He tended to wound but suddenly we saw elven woman. So Rivendell was not far away. She took me to Rivendell.",
                          "time": "October 4, 3018",
                          "ready": true
                        }
                      }
                    },
                    {
                      "name": "Rivendell",
                      "text": "Arwen brings Frodo to Rivendell. Nazguls can't get across the river the Rivendell boundary.",
                      "time": "3018/10/20 15:00",
                      "characters": {
                        "Aragorn": {
                          "text": "We went to Rivendell as far as we can. Fortunately Arwen successfully brought Frodo to Rivendell. We saw dead rider horses down the river. For some time nazguls will not bother us. Elves gave us a shelter. Gandalf is already in Rivendell. Elrond will heal Frodo. We will wait and when Frodo will be fine we will make the Ring council.",
                          "time": "October 20, 3018",
                          "ready": true
                        },
                        "Arwen": {
                          "text": "I took Frodo and fortunately we came across the boundary river in time. Black riders tried to go across the river and river sweep them. For some time they will not bother Frodo. Father healed Frodo but nazgul's wounds can't be healed completely.",
                          "time": "October 20, 3018",
                          "ready": true
                        },
                        "Bilbo": {
                          "text": "I heard my nephew with several friends came to Rivendell. Brave guys. I hope Frodo visit me. Perhaps his journey only begin and couple items... are not very useful for me so I will give it to him. I'm already in Rivendell. What a wonderful land.",
                          "time": "October 20, 3018",
                          "ready": true
                        },
                        "Gandalf": {
                          "text": "Arwen saved Frodo. I will heal him but it take some time. Now we sure black riders can't find way into Rivendell. Saruman left our side. Orthanc is orcs land now and nobody knows how strong Saruman's black magic is. Soon we will make the Ring council and decide what we can do.",
                          "time": "October 20, 3018",
                          "ready": true
                        },
                        "Merry": {
                          "text": "We went to Rivendell as far as we can. Fortunately Arwen successfully brought Frodo to Rivendell. We saw dead rider horses down the river. For some time nazguls will not bother us. Elves gave us a shelter. Gandalf is already in Rivendell. Elrond will heal Frodo. We will wait for Frodo healing.",
                          "time": "October 20, 3018",
                          "ready": true
                        },
                        "Nazgul": {
                          "text": "Elf brought Frodo to Rivendell. We can't find the way into the Rivendell. Ancient magic is still alive. The Lord ordered to come back to Mordor. We will know what to do next there.",
                          "time": "October 20, 3018",
                          "ready": true
                        },
                        "Pippin": {
                          "text": "We went to Rivendell as far as we can. Fortunately Arwen successfully brought Frodo to Rivendell. We saw dead rider horses down the river. For some time nazguls will not bother us. Elves gave us a shelter. Gandalf is already in Rivendell. Elrond will heal Frodo. We will wait for Frodo healing.",
                          "time": "October 20, 3018",
                          "ready": true
                        },
                        "Sam": {
                          "text": "We went to Rivendell as far as we can. Fortunately Arwen successfully brought Frodo to Rivendell. We saw dead rider horses down the river. For some time nazguls will not bother us. Elves gave us a shelter. Gandalf is already in Rivendell. Elrond will heal Frodo. We will wait for Frodo healing.",
                          "time": "October 20, 3018",
                          "ready": true
                        },
                        "Frodo": {
                          "text": "I didn't remember how I came to Rivendell. I came to life already here. All my followers are in Rivendell too.",
                          "time": "October 20, 3018",
                          "ready": true
                        },
                        "Elrond": {
                          "text": "Arwen saved Frodo. I will heal him but it take some time. Now we sure black riders can't find way into Rivendell. Soon we will make the Ring council and decide what we can do.",
                          "time": "October 20, 3018",
                          "ready": true
                        }
                      }
                    },
                    {
                      "name": "the Ring in Revendell",
                      "text": "Frodo is cured. Frodo meets Bilbo and gets the last inherit. The sword and the Dwarven mail.",
                      "time": "3018/12/24 16:00",
                      "characters": {
                        "Bilbo": {
                          "text": "Frodo visited me and I gave the last part of inheritance - sword and mail. Sword and mail served me well. Now they will serve Frodo. When I saw the Ring I asked Frodo to give it to me for a second but he hide it. I became angry and again quiet very fast. I don't know what happen with me.",
                          "time": "December 24, 3018",
                          "ready": true
                        },
                        "Frodo": {
                          "text": "I visited Bilbo in Rivendell. He is looking very old now. Bilbo gave me his sword and mail - magic items. I don't want to try them in action but it is better to have it. Bilbo asked to to show the Ring and suddenly became angry when I refused. He changed so quickly and became quiet again in a second. Now I know how what is the Ring stamp on the Ring-bearer which holds it too much time.",
                          "time": "December 24, 3018",
                          "ready": true
                        }
                      }
                    }
                  ]
                }
              },
              "Settings": {
                "BriefingPreview": {
                  "characterName": "Aragorn"
                },
                "Stories": {
                  "storyName": "The fellowship of the Ring"
                },
                "CharacterProfile": {
                  "characterName": "Galadriel"
                },
                "Events": {
                  "storyName": "Journey begins",
                  "characterNames": [
                    "Aragorn",
                    "Arwen",
                    "Bilbo",
                    "Elrond",
                    "Frodo",
                    "Gandalf",
                    "Merry",
                    "Nazgul",
                    "Pippin",
                    "Sam",
                    "Saruman",
                    "Sauron"
                  ],
                  "eventIndexes": [],
                  "selectedFilter": "adaptationFilterByCharacter"
                }
              },
              "Version": "0.4.4u3",
              "Log": [
                [
                  "user",
                  "Mon Aug 01 2016 01:11:26 GMT+0500 (Pakistan Standard Time)",
                  "getDatabase",
                  "[]"
                ]
              ]
            };

})(typeof exports === 'undefined'? this['BaseExample']={}: exports);