This project aims to create a functional asynchronus HTML5 tabletop experience.

Goals:
Build and Ajax based server and controller that allows multiple users to log into a session and play a D&D style Game.

Features:
tile based Map Creator
intuitive controls
Good object oriented classes to maintain an extensible game
import a ruleset via properly formatted XML or JSON
Internal live Chat during session
server side recording of session for fast play-back of an adventure
Pan/zoom/perspective transforms on map
functional line of sight and vision effects
user uploadable assets can be used to exted the game
GM adventure creation tools to make the Async game as easy as possible
an animation library to add cinematics and an api for creating custom skill animations as well as story line event cutscenes

Current Progress:
Basic movement
map creation
begining the entity class for objects on the grid (players monsters ect.)

TODO:
Convert current HTML & CSS mockup to work in canvas
convert basic movement to a node based system
determine how dynamic terain interacts with movement range/attacks/skill checks
Create a game loop to account for turns and ongoing effects as well as dynamic events that can have functions call in a specific times during the loop
get mongo DB and Node JS back-end running to start delegating features from front end to back end to build server side validation and view control.
Create alpha GM tools (map editor for now & possibly session based enemy control)Should eventually include overides and on-the-fly event control
Create dice rolling system
create carachter sheet classes and styles
create gui for map and player controls
implement ray tracing based Line of sight and allow that to restrict player and enemy movement, attacks, ect. (toggleable)
Begin creating session options menu for GM turn on/off vision options, and have a place to set global vars
implement a graphics engine and rules for tile size, and tileset management/animation
implement require.js to handle dynamic imports of assets based on session
create log-in and game selection pages

