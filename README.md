# Events and Debugging Assessment

Time to assess how well you have learned to use the debugging tools in Chrome Dev Tools, and writing click event listeners. This application is to show kids with illnesses and the memories the would like to make. Celebrities sign up to help kids make memories.

> 🧨 Make sure you answer the vocabulary and understanding questions at the end of this document before notifying your coaches that you are done with the project

## Event Listeners to Create

1. When the kid name is clicked, it should display their wish.
1. When the celebrity name is clicked, it should display their sport.
1. The pairings list should should contain the pairing in the following format.
    ```html
    {child name} will be making memories with {celebrity name}, a {celebrity sport} star, by {child wish}
    ```

Below is an animation showing how the application should look when complete and how the event listeners should work.

<img src="./images/debugging-events-assessment.gif" width="700px">

## Setup

Your instruction team will provide a link for you to create your assessment repository. Once your repo is created, clone it to your machine.

1. Make sure you are in your `workspace` directory.
1. `git clone {github repo SSH string}`.
1. `cd` into the directory it creates.
1. `code .` to open the project code.
1. Use the `serve` command to start the web server.
1. Open the URL provided in Chrome.

Make sure your Developer Tools are open at all times while working on this project. Use the messages provided in the Console to determine what code needs to be fixed or implemented, and use breakpoints in the Sources tab to step through your code as you debug.

## Vocabulary and Understanding

Before you click the "Complete Assessment" button on the Learning Platform, add your answers below each question and make a commit.

1. When a child is clicked on in the browser, which module contains the code that will execute on that event happening? Can you explain the algorithm of that logic?

   > the kids.js module contains the code that will execute the event when a child is clicked, specifically the document.addEventListener. I set a variable to return the object when it is clicked. If the data-type attribute is "child" (when clicked on the browser) then I will have access to all of the data state, and can see properties on the object such as id numbers or names, and be able to pull that data and store it in new variables such as childWish and childName in the module. Then those variables are read in the window alert interpolation.

2. In the **Pairings** module, why must the `findCelebrityMatch()` function be invoked inside the `for..of` loop that iterates the kids array?

   > The 'findCelebrityMatch()' function must be invoked inside the loop because the pairing between a specific kid and celebrity is dependent on the celebrityId property of each kid, which also requires checking the celebrities array for each kid. So by looping through the entire array this ensures that each kid if correctly paired with the right celebrity.

3. In the **CelebrityList** module, can you describe how the name of the sport that the celebrity plays can be displayed in the window alert text?

   > The properties from each object in the array 'celebrities' is stored as data attributes and added to each celebrities <li> element. data-sport is storing the data that is the sport the celebrity plays. So whenever a click happens on the browser, it checks if the clicked element has a data-type of "celebrity" and if that is true, then the value of data-sport is extracted and stored into a variable, in this case that variable is 'star'. The same process occurs for the celebrity's name, and the value is stored in 'celebName'. Then in the window alert method, I interpolate those variables so it displays in the window alert text.

4. Can you describe, in detail, the algorithm that is in the `main` module?

   > Three functions (Pairings, Celebrities, Kids) are imported, and they are responsible for returning the HTML strings with the necessary data.

   The mainContainer variable is assigned the HTML element ID 'container' and is the target for injecting the HTML.

   applicationHTML is a template literal, and contains the structured HTML layout. This is where Kids, Celebrities, and Pairings are interpolated to dynamically add the HTML content.

   The innerHTML property of the mainContainer is set to the value of applicationHTML. This injects the HTML content, which is the rendered kids, celebrities, pairings, into the container element, and that is what updates the webpage.
