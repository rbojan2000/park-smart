# park-smart

## Table of contents
* [General info](#general-info)
* [App Architecture](#app-architecture)


## General info

 * This application has been developed for the NS SMART Hackathon 2023. The main idea behind the application is to provide users with the optimal route with the least traffic congestion on maps from point A to point B. In this context, each intersection is considered as a node, and there is a camera placed at each intersection that records the direction from which a car is approaching (relative to the observed node) and the next node it is heading towards.

 * The application utilizes graphs to implement this functionality. Each node (intersection) is associated with its neighboring nodes (intersections) in terms of their relative positions (right, left, up, down). This information is stored in the camera_adj map. The traffic flow on each street is represented by a matrix. For example, cong_mat[1][2] represents the number of cars traveling from node 1 to node 2. The car counting process is performed through image processing techniques.

 * Furthermore, the application also covers parking areas equipped with cameras. These cameras monitor and count the number of available parking spaces in real-time. This allows users to be aware of the availability of parking spaces at any given moment.

## App Architecture

 * The application follows a client-server architecture. The client side includes the user interface through which users can input their starting and destination points to receive the optimal route suggestion. The server side consists of several components:

 * Producer: It generates and sends messages in the format of '001;R->L'. This message format indicates that it is an event related to traffic signal 1, where a car has arrived from the right (R) direction and is exiting towards the left (L) direction.
Graph Processing: This component utilizes graph algorithms to calculate the optimal route with the least traffic congestion based on the received messages from the producer.
 * Image Processing: It processes the images captured by the cameras at each intersection to count the number of cars approaching and leaving the intersection.
 * Parking Monitoring: This component is responsible for monitoring parking areas using cameras. It counts the number of empty parking spaces and provides real-time information to the users regarding the availability of parking spots.
Overall, the application integrates map data, graph algorithms, image processing techniques, and real-time monitoring to provide users with the most efficient and least congested routes as well as information about parking availability.

![Parking Slot Detection GIF](https://github.com/rbojan2000/park-smart/blob/main/parking_slot_detection/detection_poc.gif)

