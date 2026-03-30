# 🪨📄✂️ Rock, Paper, Scissors (React + Tailwind)

A modern, responsive implementation of the classic Rock, Paper, Scissors game built with **React (Vite)** and **Tailwind CSS**.

This project focuses on **asynchronous state management**, **custom hooks**, and **advanced UI effects** to create a smooth and interactive user experience.

---

## 🚀 Tech Stack

- **Framework:** React (Vite)  
- **Styling:** Tailwind CSS (with custom configurations)  
- **State Management:** React Hooks (`useState`, `useEffect`)  

---

## 🧠 Technical Highlights

### 1. Asynchronous "House" Logic

To simulate a realistic "thinking" delay for the House:

- **Stage 1:**  
  When the user selects a token, a `setTimeout` introduces a 1-second delay before revealing the House’s choice.

- **Stage 2:**  
  A second `useEffect` watches the `housePick` state.  
  Once it updates, the game:
  - Determines the winner  
  - Updates the score  

---

### 2. Centralized Rules Engine

Instead of multiple `if/else` statements, the game logic is handled with a clean object map:

```javascript
const RULES = {
  paper: "rock",
  rock: "scissors",
  scissors: "paper",
};
```

**Benefits:**
- Improves readability  
- Easy to scale (e.g., adding "Lizard Spock")  

---

### 3. Custom "Winner Ripple" Effect

- Extended Tailwind configuration with custom `boxShadow`
- Created three concentric pulsing rings
- Achieved the design effect without extra div elements

---

## 🎨 Main Page Features

### 1. Reusable "Token" Component

- Built a dynamic `Token.jsx` component  
- Accepts props for:
  - Icon  
  - Border color  
  - Position  

---

### 2. Complex Positioning with Tailwind

- Used a **relative parent container**
- Positioned tokens with **absolute positioning**
- Leveraged Tailwind arbitrary values (e.g., `border-[15px]`) for precise styling  

---

### 3. State-Driven Modals

- Implemented the "Rules" modal using **conditional rendering**
- Controlled with a boolean state:

```javascript
const [showRules, setShowRules] = useState(false);
```

---

## 📈 Evolution of the Project

| Phase   | Focus        | Key Achievement |
|--------|-------------|----------------|
| Phase 1 | UI & Layout | Reusable Token component and triangle positioning |
| Phase 2 | Core Logic  | Randomizer engine and delayed House logic |
| Phase 3 | Polishing   | Winner ripple effect and persistent score |

---

## 💡 Lessons Learned

- **Asynchronous State Pitfall:**  
  Used functional updates:
  ```javascript
  setScore(prev => prev + 1);
  ```

- **Timer Cleanup:**  
  Prevented memory leaks:
  ```javascript
  return () => clearTimeout(timer);
  ```

- **CSS Stacking Context:**  
  Mastered `z-index`, `relative`, and `absolute` positioning  

- **Tailwind HSL Gotcha:**  
  Spaces break this syntax:
  ```css
  text-[hsl(229,25%,31%)]
  ```

---

## 📸 Screenshots

![Main page](image.png)  
![Game result](image-1.png)

<img width="2560" height="1272" alt="image" src="https://github.com/user-attachments/assets/c5b7fefa-c80f-4168-b7bd-a54672dc1580" />

<img width="2560" height="1272" alt="image" src="https://github.com/user-attachments/assets/50ca53ed-9dcb-4603-9f90-a6034f3e6c3d" />


---

## 🛠️ How to Run

```bash
npm install
npm run dev
```
