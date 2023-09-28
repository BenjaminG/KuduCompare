# KuduCompare Application

## Table of Contents

- [Objective](#objective)
- [Technologies Used](#technologies-used)
- [Features](#features)
  - [Data Table](#data-table)
  - [Charts](#charts)
  - [Interactivity](#interactivity)
  - [UI Components](#ui-components)
- [State Management](#state-management)
- [Installation](#installation)

---

## Objective

The KuduCompare application aims to provide a user interface for viewing, comparing, and analyzing data on various species of antelopes. The application offers interactive data tables and charts for a better understanding of antelope attributes.

---

## Technologies Used

- **Frontend**: React, Next.js v13.5, Tailwind CSS, Shadcn/ui
- **Chart Libraries**: Recharts
- **Type Safety**: Zodios
- **API**: RESTful API (details to be specified)
- **State Management**: React Hooks, `useState`, `useMemo`, `useCallback`
- **Data Table**: react-table

---

## Features

### Data Table (react-table)

- Displays antelope data in an interactive table.
- Columns include: Name, Continent, Weight, Height, Horn Type, Picture.
- Row selection management for more detailed analysis.
- Sorting capabilities on each column.
- Pagination to navigate through the data.

---

### Charts

1. **Weight and Height Bar Chart**

   - Displays the weight and height of selected antelopes.

2. **Horn Type Pie Chart**

   - Displays the distribution of different horn types among the antelopes.
   - Labels display the percentage of each type.

3. **Average antelope weight/continent**
   - Displays the average weight of antelopes by continent.

---

### Interactivity

- Users can select rows in the table to update the charts accordingly.

---

### UI Components (Shadcn UI)

- Utilizes Shadcn UI to style Tailwind components, including cards, buttons, and other UI elements.

---

## State Management

- Uses `useState` for local state management.
- Uses `useMemo` and `useCallback` for performance optimization.

---

## Installation

- run `pnpm install`
- rename `.env.local.sample` to `.env.local`
- `pnpm dev`
