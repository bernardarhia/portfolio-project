### Docs for the frontend devs


folder structure for the frontend
- **src**
    - apis
    - assets
        - img
    - components
        - containers
        - presentational
        - screens
    - context
    - pages
    - reducers
        - states
        - reducers
        - actions
    - routes
    - styles
        - configs
        - screens
        - templates
        - universal
        - utilities
    - templates
    - utils 


1. **API FOLDER**

    This folder contains the api requests that will be made to th backend
2. **ASSETS FOLDER**

    This folder contains all the images and icons that will be used in the project

    I. IMG FOLDER
        Contains images for the project
<br />

3. **COMPONENTS FOLDER**

      This is the **parent** folder that will contain all the components in the projects
    
    I. CONTAINERS FOLDER
    
      Contains all the components that doesn't have any logic to it. In other words, they are the 'useless' components
        
    II. PRESENTATIONAL FOLDER
    
    Contains components that have logics behind it 
    
    III. SCREENS FOLDER
    
     Folder that holds the components for the various screens
        
<br />

4.  **CONTEXT FOLDER**
    
       This is the **parent** folder that wraps all the contexts in the project

    I. UI FOLDER
       Contains the context for the uis

    II. PRESENTATIONAL FOLDER
    
       Contains the context for the states that will be shared across the various components
    
<br />

5. **REDUCERS FOLDER**

    This is the **parent** folder for the reducers

    I. STATES FOLDER
    
      
      Contains files for default states for the reducers in the project
    
    II. REDUCER FOLDER
    
    Contains the reducer functions for the project 
    
    III. ACTIONS
    
    Contains actions that will be performed by the various states in the project
    
<br />

6. **ROUTES FOLDER**

    This is the folder that contains both the private and public routes 
<br>

7. **STYLES FOLDER**

    This is the **parent** folder that contains all the styling for the project

    I. CONFIG FOLDER
    
    Contains configurations or resets for the styles in the project
    
    II. PAGES FOLDER
    Contains styles for the various pages in the project
    
    III. SCREENS FOLDER
    
    Contains styles for the screens in the project
    
    IV. TEMPLATES FOLDER
    
    Contains styles for the templates
    
    V. UNIVERSAL FOLDER
    
    Contains styles for the containers components or the useless components
    
    VI. UTILITIES
    
    Contains variables for the styling 
    
<br/>

8. **TEMPLATES FOLDER**

    Contains folders for the templates we will be using
    
<br />

9. **UTILS FOLDER**

    This folder will contain all the other functions and classes we will be using for the project

    

