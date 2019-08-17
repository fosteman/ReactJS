##Archive in a list
###HOC transfer the logic, mainly the local state management, into a higher order component. 
Higher order components are reusable and thus the local state management could become reusable. 

The `List` component would only display the items. 
The ability to archive an item in the List component would be opt-in with a higher order component. 

In addition, the HOC can be reused in other List components too for managing the state of archived items. 
After all, higher order components are great to extract local state management from components and to reuse the local state management in other components.
