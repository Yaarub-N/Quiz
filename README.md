# React Quiz App

En interaktiv quizapplikation byggd med React som låter användare svara på frågor, samla poäng och se feedback i realtid.

---

## 🚀 Funktioner

- **Slumpmässiga frågor:** Frågorna hämtas från en `questions.json`-fil som ligger i **public**-mappen och blandas slumpmässigt.
- **Nedräkningstimer:** Tiden räknas ner från 30 sekunder per quizomgång.
- **Feedback:** Direkt återkoppling på om användaren svarade rätt eller fel.
- **Resultat:** Poängräkning och ett meddelande baserat på prestationen visas efter quizet.
- **Laddningsanimation:** En snygg "Three Dots"-loader visas medan frågorna hämtas.
- **Ljust/mörkt tema:** Du kan växla mellan mörkt och ljust tema för appen.

---

## 📂 Projektstruktur

```bash
/public
├── questions.json        # Frågorna för quizet
/src
├── components
│   ├── Quiz.jsx          # Huvudkomponent som hanterar quizet
│   ├── AnswerHandler.jsx # Komponent för svarshantering
│   ├── Result.jsx        # Visar resultatet efter quizet
│   ├── RestartButton.jsx # Omstartsknapp
│   ├── Question.jsx      # Frågekomponent (tillval)
├── styles
│   ├── App.css           # Globala stilar
│   ├── QuizStyles.css    # Specifika stilar för quizet
├── main.jsx               # Rotkomponent för appen
```

---

## 🛠️ Installation och körning

### 1. Klona projektet

```bash
git clone https://github.com/Yaarub-N/Quiz.git
cd Quiz
```

### 2. Installera beroenden

```bash
npm install
```

### 3. Starta utvecklingsservern

```bash
npm start
```

---

## 🧩 Frågedata (`public/questions.json`)

Frågorna för quizet ligger i en JSON-fil som heter `questions.json`, placerad i **public**-mappen. Här är ett exempel:

```json
[
  {
    "question": "Vad är state i React?",
    "options": ["Immutabelt", "Lokal lagring", "Globalt värde"],
    "answer": "Lokal lagring"
  },
  {
    "question": "Hur hanteras events i React?",
    "options": ["Event handlers", "Hooks", "DOM-manipulation"],
    "answer": "Event handlers"
  },
  {
    "question": "Vad är en prop i React?",
    "options": [
      "JavaScript-variabel",
      "Objekt till komponenter",
      "Funktion för state"
    ],
    "answer": "Objekt till komponenter"
  }
]
```

---

## 🧑‍💻 Användning

1. När appen startas visas en loader ("Three Dots") tills frågorna hämtas från `questions.json`.
2. Användare kan svara på frågor genom att klicka på något av alternativen.
3. Poäng visas efter att alla frågor är besvarade eller tiden har gått ut.
4. Användare kan klicka på knappen **"Starta om"** för att börja en ny quizomgång.

---

## 🎨 Anpassning

- **Lägga till frågor:** Du kan lägga till fler frågor i `public/questions.json`. Varje fråga ska följa detta format:
  ```json
  {
    "question": "Din fråga här",
    "options": ["Alternativ 1", "Alternativ 2", "Alternativ 3"],
    "answer": "Rätt svar här"
  }
  ```

---

## 👨‍💻 Byggt av [Yaarub]
