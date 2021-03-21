# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Ivan Yeung

Time spent: 6 hours spent in total

Link to project: https://glitch.com/edit/#!/scented-fearless-tsunami

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:
<img src="8buttoncolorsound.mp4>


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

w3schools.com

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

A challenge I encountered while creating this submission initially figuring out the syntax for javascript as well as using built in functions. Coming from object oriented programming
languages like C++ and Java, it was a bit weird seeing how Javascript dealth with variables. I remember trying to initialize an integer only to receive an error. This was fixed
by me looking at parts of the given code where I saw that to initalize a local variable, you had to use let instead of int or string or any other data type as you would in C++
or Java. I was also confused by the use of the SetTimeout() method. I had looked over the intial given code a couple of times and CTRL-F'd to try and find where the code for that
function was. Having not found it anywhere, I googled it to find out that SetTimeout() was a built in function. This was different from that of C++ and Java where you would have to
import functions rather than have some built in. My issues weren't that much and were fairly minor. They were all solved with a couple links from w3schools from Googling the issue. 

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

Questions I would have related to web development would probably revolve around more backend serverside. This prework is an offline "website" html markup and can be run from the computer but I would like to know more about hosting such a website. How would websites be hosted? What communication is done back and forth from user to server? How is this processed and utilized? How does changes go live? What processes happen behind the scenes of a website from the perspective of the creators/coders/company? I would like to learn about what goes on behind a full fledged functioning website that delivers something or learn how to develop a such a website, especially what props up such a website.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)

If I had a few more hours to work on this project, I think I would work on a couple of features. First, this is a game. Considering this and how the game operates, I could implement custom levels so as to expand on the game such as an easy level with 4 buttons, slower speed, less steps to winning while having medium and harder levels with more buttons, faster speed, and more steps to winning. This allows for more nuanced gameplay that is more in control of the developer/level maker. Level designed gameplay is different from randomized gameplay and should be considered seperate. To expand on randomized gameplay, I could add levels to the randomization such as increasing/decreasing playback speed, pattern array size, timer, number of strikes/live and more. MemoryGame is a simple game with simple mechanics and I feel like adding images or crazy sounds would take away from the game and downgrade it so the design as is should be fine and stay that way. Another idea I thought that could be implemented would be an account and leaderboard system. I would add an infinite mode/level where it could go on as far as the player can go and their score could be saved onto a leaderboard which would drive some competitive players to continue playing again and again to try and get a high score. The issue with implementing this would be the need to save player accounts and information on a server and I currently do not know how to set up or host such a thing.



## License

    Copyright Ivan Yeung

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
