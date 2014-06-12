homesecurity_raspPiArduino
==========================

Raspberry Pi and Arduino Motion Sensor with Nodejs

Few things are needed to get start:
1. Raspberry Pi and Arduino
2. Nodejs and NPM installed along with Upstart
3. Motion Sensor for Arduino
4. Pushover.com Account

Download the files and place in a folder location of your choice on the Pi.  Once they are there run npm install to get the needed files that go along with my project.

Next we need to setup the .conf file.  This file is for Upstart so that our app will run in the background and start back up automatically if the Pi gets rebooted.  You will probably have to change the file location of the project as well as the node and NPM install locations.  Once the .conf file is okay save that to the /etc/init folder so it will get picked up and ran on startup.

Final thing to do is to setup the Pushover account and insert your tokens into the www file in the bin folder.  This will allow Pushover to alert you if there is motion.

You are all set, you can restart the Pi and then navigate to http://yourPiIPAddress:3000/ihomesecurity here you will see the main page and the on/off buttons for the motion sensor.

This is a start, I have not had much time to play around with the Pi but was glad to be able to get something up and running.
