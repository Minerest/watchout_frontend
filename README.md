# App in progress!
This is the landing page for my React App
I plan to have a couple of "Applettes" served from this
Most of the relevant code is stored under /src/components/*
Eventually, I'll have another directory for each applette I create.

## The way it works!
### https://www.ericdiaz.dev
Currently, there are 2 buttons on the home page. 1 button takes you to the writeup of how the app was built and the origin story of the app.
The second button takes you to the app itself.
On the app, the map defaults to Los Angeles which is the closest place I have data saved on the server closest to my house.
I have other places saved such as San Fransisco, Baltimore, and parts of Texas and New York State.

Once there, you can tap on the map and the app would make 2 AJAX requests.
1 Fast request giving you a monthly rollup of how many crimes happened at that location
and another slow request which gives you the raw data taken straight from the police station.
That data is displayed in the black box up top and in the space right below the map.

The API for the Watchout! applette is here: https://github.com/Minerest/gcp_hackathon_project
