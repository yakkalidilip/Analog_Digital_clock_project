## Design Approach

## clock-smart-component :  

1. Handles service interactions for fetching the data (using Rxjs observable/subscription).
2. Responsible for setting up the varibles which is used by two different components(Analog/Digital) to display UX based on requirement/need.
3. Sends data to child components using component interaction.

## Clock-smart-service
Implemented common functionlity such as 
1. Fetching the time every second using Moment
2. Formatting hh:mm:ss for customer readability/user friendliness Eg:(07:05:09)

## Styling :
1. Achieved responsive design using flex-box
2. mobile/desktop break points are defined globally in styles.scss

## Libraries Used :
1. RXJS Subscription
2. Moment js

## Enhancements :
1. increment/decrement timer
2. Internatialization of JSON content en/fr
3. Can add unit test cases
4. Improve UI for Analog clock