# React-Native + TypeScript + Expo Project

## How to use:

To create an event, follow these steps:

1. **Click on the date** in the calendar.
2. If the date is correct and not in the past, **click the "+ Create New Event" button** below.
3. A modal window will open. **Fill out the form** and click **Save**.
4. If the selected date is in the past, an **alert will appear** with an error message.
5. After saving, your planned event will appear on the screen.
6. To **edit** the event, click on the **edit icon** (if the event date is not in the past).
7. To **delete** the event, click on the **trash can icon**.

## 📚 Project Description

This project is built using React Native, TypeScript, and Expo. The architecture focuses on reusability, scalability, and maintainability.

## 📂 Project Structure

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

## 🔍 Structure Details

### Project Overview

This project is structured with clear separation of concerns for easy scalability and maintainability. It is built with React Native, TypeScript, and Expo, focusing on reusability and performance.

### Folder Breakdown

1. **/api**: Contains files related to making requests to the backend.
   - `constants.ts`: Contains constants like the base URL for the API.
   - `getEvents.ts`: Handles API requests to fetch events from the backend.

2. **/app**: Core of your application containing layout and pages.
   - `_layout_.tsx`: Main layout for the app.
   - `+not-found.tsx`: 404 page when a route doesn't match.
   - `index.tsx`: The main entry point of the app.

3. **/assets**: Contains all static assets.
   - **/fonts**: Font files used in the app.
   - **/images**: Images such as icons or logos.

4. **/components**: Reusable UI components.
   - **/ui**: Contains UI components like buttons, select dropdowns, etc.
   - `ThemedText.tsx`: A theme-aware text component.

5. **/constants**: Constants for theming and global settings.
   - `Colors.ts`: Color constants used across the app.

6. **/hooks**: Custom React hooks for reusability.
   - `useColorScheme.ts`: A hook for determining the current color scheme (light/dark).

7. **/store**: State management folder (e.g., Redux or React Context).
   - `useStore.ts`: Manages global state transitions.
   - `types.ts`: Types related to state management.

8. **/types**: Centralized place for all type definitions.
   - `react-native-calendar-picker.d.ts`: Type definitions for the calendar picker library.
   - `types.ts`: General types used across the app.

9. **/utils**: Utility functions and helpers.
   - `alert.ts`: A utility function for showing alerts.

## 🚀 Getting Started

### Installation:

1. Clone the repository: `git clone <URL>`
2. Navigate to the project directory: `cd <project-name>`
3. Install dependencies: `npm install`

### Scripts:

- Run the development server: `npm run start` or `npm start`
- Build the project: `npm run build`
- Run tests: `npm run test`

## 🛠️ Technologies Used

- **React Native**: A framework for building native mobile apps.
- **TypeScript**: Adds static typing for better reliability.
- **Expo**: A platform for faster React Native development.

## 📦 Example Component

### Component file: `Button.tsx`

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

### Types file: `types.ts`

```ts
export interface EventFormData {
  eventName: string;
  startDate: string;
  startTime: string;
  repeat: string;
  id?: number;
}
```

---

Теперь описание более лаконичное и сфокусировано на ключевых аспектах проекта.