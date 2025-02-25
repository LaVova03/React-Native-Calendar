# React-Native + TypeScript + Expo Project

# 📚 Project Description

This project is built using React-Native, TypeScript, and Expo.
The architecture is designed with a focus on
reusability, scalability, and maintainability.

# 📂 Project Structure

```
/api                                   // backend requests
├── constants.ts                       // base url
├── getEvents.ts                       // request
/app                                   // main folder
├── _layout_.tsx                       // layout
├── +not-found.tsx                     // page not found
├── index.tsx                          // main page
/assets                                // all assets
├── /fonts                             // fonts folder
|   └── SpaceMono-Regular.ttf          // font file
├── /images                            // images folder
|   └── favicon.png                    // image file
/components                            // components folder
├── /__tests__                         // tests folder
|   └── Form-test.tsx                  // test file for component
├── /ui                                // ui components folder
|   └── Select.tsx                     // ui component
├── ThemedText.tsx                     // theme file
/constants                             // constants for theme folder
├── Colors.ts                          // constant file for theme
/hooks                                 // hooks folder
├── useColorScheme.ts                  // hook file
/store                                 // state manager folder
├── types.ts                           // state types
├── useStore.ts                        // store file
/types                                 // main types folder
├── react-native-calendar-picker.d.ts  // types for library
├── types.ts                           // types for components
/utils                                 // utils folder
└── alert.ts                           // helper function

```

# 🔍 Structure Details

🔍 Project Structure Overview
This project is structured with clear separation of concerns for easy scalability and maintainability. It is built with React Native, TypeScript, and Expo, focusing on reusability and performance.

📂 Folder Breakdown

1. /api (Backend Requests):
   This folder contains all files related to making requests to the backend. It is designed to manage the interaction with your API endpoints.

constants.ts: Contains constants like the base URL for the API.
getEvents.ts: Handles API request to fetch events from the backend. 2. /app (Main Folder):
This is the core of your application, containing the layout and different pages.

layout.tsx: Defines the main layout for the app, likely wrapping page components with a common structure.
+not-found.tsx: A 404 page to show when a route doesn’t match.
index.tsx: The main page, often serving as the entry point of the app. 3. /assets:
This folder holds all static assets used in the project.

/fonts: Contains font files used across the app.
SpaceMono-Regular.ttf: A specific font file.
/images: Contains images like icons, logos, or other media.
favicon.png: The favicon image used in the app. 4. /components:
This folder holds the reusable UI components that make up the interface of the app.

/tests: This subfolder contains the test files for your components.
Form-test.tsx: A test file for testing the Form component.
/ui: This subfolder contains UI components like buttons, forms, or select dropdowns.
Select.tsx: A component for rendering a select dropdown.
ThemedText.tsx: A theme-aware text component that adjusts based on the app's theme. 5. /constants:
This folder stores constants used across the app, such as color schemes and other global settings.

Colors.ts: Contains color constants used for theming and styling throughout the app. 6. /hooks:
Custom React hooks used across the app, usually for reusability and encapsulating logic.

useColorScheme.ts: A hook that determines the current color scheme (light/dark) for the app. 7. /store:
This folder is responsible for managing global state within the app, likely using something like Redux or React Context.

types.ts: Types related to the state structure and state management.
useStore.ts: The main store file managing state transitions and actions. 8. /types:
Centralized place for all type definitions used across the app. This includes types for components, backend responses, and other structures.

react-native-calendar-picker.d.ts: Type definitions for the react-native-calendar-picker library.
types.ts: A general file for types used by components or API responses. 9. /utils:
Utility functions and helpers that don't directly relate to the UI or state management.

alert.ts: A utility function for showing alerts across the app.

#📚 Project Description
This project is built using React Native, TypeScript, and Expo. It aims to provide a scalable, reusable, and maintainable codebase. The folder structure reflects modularity, ensuring that each section of the application (such as API calls, UI components, and state management) is kept separate, which makes development and debugging easier.

The app focuses on performance and simplicity while providing a rich user experience, leveraging Expo for quick development and TypeScript for type safety.

Example:

```ts
export const BUTTON_VARIANTS = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
};
```

# 🚀 Getting Started

Installation:

1. Clone the repository: `git clone <URL>`
2. Navigate to the project directory: `cd <project-name>`
3. Install dependencies: `npm install`

Scripts:

- Run the development server: `npm run start or npm start`
- Build the project: `npm run build`
- Run tests: npm `run test`

# 🛠️ Technologies Used

- React-Native: A library for building user mobile interfaces.
- TypeScript: Adds static typing for better reliability.
- Expo: A fast build tool.

# 📦 Example Component

- Component file: Button.tsx

```ts
import { Link, Stack } from "expo-router";
import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <ThemedView style={styles.container}>
        <ThemedText type="title">This screen doesn't exist.</ThemedText>
        <Link href="/" style={styles.link}>
          <ThemedText type="link">Go to home screen!</ThemedText>
        </Link>
      </ThemedView>
    </>
  );
}
```

- Types file: types.ts

```ts
export interface EventFormData {
  eventName: string;
  startDate: string;
  startTime: string;
  repeat: string;
  id?: number;
}
```

#🛠️ Technologies Used
React Native: Framework for building native mobile apps.
TypeScript: Ensures type safety across the codebase.
Expo: An open-source platform for building React Native apps faster
