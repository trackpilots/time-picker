# @trackpilots/time-picker

![npm](https://img.shields.io/npm/v/@trackpilots/time-picker?style=flat-square)
![license](https://img.shields.io/npm/l/@trackpilots/time-picker?style=flat-square)
![downloads](https://img.shields.io/npm/dt/@trackpilots/time-picker?style=flat-square)

A **customizable time picker** component built with **React** and **Tailwind CSS**.

## ✨ Screenshots  

![Screenshot](assets/image.png)
---

## 🚀 Installation  
You can install the package using **npm** or **yarn**:  

### **Using npm**  
```sh
npm install @trackpilots/time-picker
# or
yarn add @trackpilots/time-picker
```

Make sure Tailwind CSS is installed in your project.

##  📌 Usage
Use in Your Component
```sh
import React, { useState } from "react";
import TimePicker from "@trackpilots/time-picker";

const App = () => {
  const [selectedTime, setSelectedTime] = useState(null);

  const handleSelect = (time) => {
    setSelectedTime(time);
    console.log("Selected Time:", time);
  };


  return (
    <div className="p-4">
      <h2 className="text-lg font-bold">Date Picker</h2>
      <TimePicker
        selectedDate={new Date("2024-06-01")} 
        onSelect={handleSelect}
        selectedColor="#FF5733"
      />
      <p>Selected Time: {selectedTime ? selectedTime.time : "None"}</p>
    </div>
  );
};

export default App;
```

## 📌 DateFilter Component
A React Select component that allows users to choose a time

## ⚙️ Props  

| Prop Name      | Type              | Default          | Description                          |
|---------------|------------------|----------------|----------------------------------|
| `selectedDate` | `Date` or `null`  | `null`         | The date of the time picker. |
| `onSelect`    | `function`        | `() => {}`     | Triggered when a time is selected. |
| `selectedColor` | `string`        | `"#9D55FF"`    | Highlight color for the selected time. |
| `icon`        | `React.ElementType` | `IoCalendarOutline` | Custom calendar icon component. |
---

## **✨ Example**  
```sh
<TimePicker 
  selectedDate={new Date("2024-06-01")} 
  onSelect={(time) => console.log("User selected:", time)} 
  selectedColor="#007BFF"
/>
```

## 📦 Dependencies  

- [React](https://react.dev/)  
- [Tailwind CSS](https://tailwindcss.com/)  
- [react-icons](https://react-icons.github.io/react-icons/) (for `IoCalendarOutline` icon)  


## 📌 Maintainers
These packages are maintained by [**Quick App Studio**](https://quickappstudio.com/our-team) Developers.

##  📄 License
This project is licensed under the MIT License.