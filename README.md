# LeetCode Solutions
Welcome to my repository of LeetCode solutions!

This project is a collection of solutions for algorithms and data structure problems from LeetCode, implemented in TypeScript and organized by topic. Each solution is accompanied by unit tests using Jest to ensure correctness.

## 📁 Project Structure
Solutions are organized into folders by category. Within each category, there are subfolders for each problem, named for easy identification.

.
├── src/
│   ├── strings/
│   │   ├── 20-valid-parentheses/
│   │   │   ├── README.md         // Problem description
│   │   │   ├── solution.ts       // The TypeScript solution
│   │   │   └── test-cases.test.ts// Test cases
│   │   └── ...
│   ├── arrays/
│   │   └── ...
│   └── ...
├── .gitignore
├── jest.config.js
├── package.json
└── tsconfig.json

## 🛠️ Technologies Used
* TypeScript: A typed programming language for implementing the solutions.
* Jest: A testing framework to ensure the correctness of each function.

## 🚀 How to Run the Tests
To get started, clone the repository and install the dependencies:

```bash
git clone https://github.com/YourUsername/leetcode-solutions.git
cd leetcode-solutions
npm install
```

### Run All Tests
To run all tests in the project at once, use the following command:

```bash
npm test
```

### Run a Specific Problem's Tests
If you're working on a single solution and want to run its tests exclusively, you can pass the test file path as an argument to Jest:

```bash
npm test -- src/strings/20-valid-parentheses/test-cases.test.ts
```

### "Watch" Mode
To run the tests and have them automatically re-run every time you save a file, use "watch" mode:

```bash
npm run test:watch
```

## 🤝 Contributions
Contributions are welcome! If you have a more efficient solution or a better way to test a problem, feel free to open a pull request.

## 📄 License
This project is licensed under the MIT License. See the LICENSE file for more details.