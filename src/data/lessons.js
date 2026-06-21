// Full lesson content for modules 1-10.
// Each lesson follows the required 10-part structure:
// definition, easyExplanation, analogy, syntax, example, output,
// commonErrors, practice, quiz, summary.
//
// To publish a new module, add an entry here keyed by its module id.
// The Roadmap and Lesson pages automatically treat any id present in
// this object as "unlocked" — everything else shows a "not charted yet"
// placeholder, so you can grow from 10 lessons to 100 incrementally.

export const LESSONS = {
  1: {
    id: 1,
    definition:
      'Python is a high-level, interpreted programming language that lets you give instructions to a computer in syntax that reads close to plain English.',
    easyExplanation:
      'Computers only understand binary — streams of 0s and 1s. Python lets you write readable instructions, and a program called the interpreter translates those instructions into something the processor can run, one line at a time.',
    analogy:
      'Think of Python as a translator standing between you and the computer. You speak English ("print hello"), the translator instantly converts it, and the computer — which only understands machine code — carries out the action.',
    syntax: 'source_code.py  →  Python interpreter  →  result on screen',
    example: {
      code: 'print("Hello, World!")',
    },
    output: 'Hello, World!',
    commonErrors: [
      {
        error: "'python' is not recognized as a command",
        why: 'The terminal cannot find the Python interpreter because it is not installed, or it is not added to your system PATH.',
        fix: 'Install Python from python.org and make sure "Add Python to PATH" is checked during setup.',
      },
      {
        error: 'Using the wrong command (python vs python3)',
        why: 'Some systems only recognize one of these commands depending on how Python was installed.',
        fix: 'If one command fails, try the other, or confirm your install with `python --version`.',
      },
    ],
    practice: [
      'In your own words, explain what an interpreter does.',
      "Why can't a computer run plain English instructions directly?",
      'Name one real-world app you think might use Python behind the scenes.',
    ],
    quiz: [
      {
        question: 'What type of language is Python?',
        options: [
          'Compiled only',
          'Interpreted, high-level language',
          'Pure machine code',
          'A markup language',
        ],
        correctIndex: 1,
        explanation:
          'Python code is read and run line-by-line by an interpreter, rather than being compiled directly into machine code ahead of time.',
      },
      {
        question: 'What does the Python interpreter do?',
        options: [
          'Translates Python code into instructions the computer can run',
          'Designs the computer\'s hardware',
          'Permanently compiles Python into an .exe before anything runs',
          'Deletes unused variables automatically',
        ],
        correctIndex: 0,
        explanation:
          'The interpreter is the bridge between your readable code and the machine instructions the processor executes.',
      },
    ],
    summary:
      'Python is a beginner-friendly, interpreted language. The interpreter acts as a translator between the readable code you write and the machine instructions your computer actually runs.',
  },

  2: {
    id: 2,
    definition:
      'Setting up your environment means installing the Python interpreter on your computer and choosing a code editor so you can write and run .py files.',
    easyExplanation:
      'Download the installer from the official Python website, run it, and (on Windows) tick "Add Python to PATH" so your terminal can find it. Then verify the install and pick an editor like VS Code to write code in.',
    analogy:
      'Installing Python is like setting up a kitchen before you cook — you need the stove (the interpreter) and a clean counter to work on (the editor) before you can make anything.',
    syntax: 'python --version\npython3 --version',
    example: {
      code: '$ python --version',
    },
    output: 'Python 3.12.3   (your exact version may differ)',
    commonErrors: [
      {
        error: "'python' is not recognized as an internal or external command",
        why: 'Windows cannot find python.exe because it was not added to PATH during installation.',
        fix: 'Reinstall and check "Add Python to PATH", or manually add the install folder to your PATH environment variable.',
      },
      {
        error: 'python command runs Python 2, or runs nothing, on Mac/Linux',
        why: 'Many Mac and Linux systems reserve `python` for an old version and install Python 3 under a different name.',
        fix: 'Use `python3` instead of `python` when running scripts or checking the version.',
      },
    ],
    practice: [
      'Open a terminal and run `python --version` (or `python3 --version`). What version do you see?',
      'What is the name of the official website to download Python?',
      'Name one code editor you could use to write Python.',
    ],
    quiz: [
      {
        question: 'Which command checks your installed Python version?',
        options: ['python --version', 'python --start', 'run python', 'python --help'],
        correctIndex: 0,
        explanation: '--version is a standard flag that prints the interpreter version and exits.',
      },
      {
        question: 'On many Mac/Linux systems, which command usually points to Python 3?',
        options: ['python3', 'py2', 'pyth', 'pythonx'],
        correctIndex: 0,
        explanation: 'python3 is the conventional command name that avoids clashing with an older Python 2 install.',
      },
    ],
    summary:
      'Install Python from the official source, confirm the install with --version, and pick an editor such as VS Code — then you are ready to write code.',
  },

  3: {
    id: 3,
    definition:
      'print() is a built-in function that displays text or values on the screen.',
    easyExplanation:
      'Text inside quotes is called a "string." When you hand a string to print(), Python writes it to the console exactly as given.',
    analogy:
      'print() is like a megaphone — whatever you hand it, it announces out loud for you to see.',
    syntax: 'print("text")\nprint(value1, value2, sep=" ", end="\\n")',
    example: {
      code: 'print("Hello, World!")\nprint("Python", "is", "fun")',
    },
    output: 'Hello, World!\nPython is fun',
    commonErrors: [
      {
        error: "NameError: name 'Hello' is not defined",
        why: 'Writing print(Hello) without quotes makes Python look for a variable named Hello, which does not exist.',
        fix: 'Wrap text in quotes: print("Hello").',
      },
      {
        error: 'SyntaxError: unterminated string literal',
        why: 'The opening and closing quote marks do not match, e.g. print("Hello\').',
        fix: 'Use the same quote character to open and close the string, either both " or both \'.',
      },
    ],
    practice: [
      'Write a program that prints your name.',
      'Print three different words on the same line, separated by " - ", using the sep argument.',
      'Predict the output of print("A", "B", sep="") before you run it.',
    ],
    quiz: [
      {
        question: 'What does print() do?',
        options: [
          'Saves text to a file',
          'Displays output on the screen',
          'Deletes a variable',
          'Asks the user for input',
        ],
        correctIndex: 1,
        explanation: 'print() writes its arguments to standard output — the console you see your program run in.',
      },
      {
        question: 'Which of these is valid Python?',
        options: ['print(Hello World)', 'print("Hello World")', 'print "Hello World"', 'print(Hello World!)'],
        correctIndex: 1,
        explanation: 'Text passed to print() must be a string in quotes; the other options are missing quotes or use Python 2 syntax.',
      },
    ],
    summary:
      'print() is your first tool for seeing what your code does. Always wrap text you want displayed in matching quotes.',
  },

  4: {
    id: 4,
    definition:
      'A comment is a line of text in your code that Python ignores when running — it exists purely for humans reading the code.',
    easyExplanation:
      'A # starts a single-line comment that runs to the end of the line. Triple quotes (\'\'\' or """) can wrap multi-line notes, often used to describe what a file or function does.',
    analogy:
      'Comments are like sticky notes on a recipe card — the cook (the interpreter) skips right past them, but they help the next person who reads the recipe.',
    syntax: '# single-line comment\n"""\nmulti-line comment\n"""',
    example: {
      code: '# This program greets the user\nprint("Hello, World!")  # prints a greeting\n\n"""\nThis is a multi-line note,\noften used to describe a file or function.\n"""',
    },
    output: 'Hello, World!',
    commonErrors: [
      {
        error: 'SyntaxError when using // for comments',
        why: 'Python uses # for comments, not // like JavaScript or Java.',
        fix: 'Replace // with # at the start of the comment.',
      },
      {
        error: 'SyntaxError: EOF while scanning triple-quoted string literal',
        why: 'A multi-line comment was opened with \'\'\' or """ but never closed.',
        fix: 'Make sure every triple-quote block has both an opening and a matching closing triple-quote.',
      },
    ],
    practice: [
      'Add a comment above each line of a 3-line program explaining what it does.',
      'Convert a single-line comment into a multi-line """ comment.',
      'Why might comments matter more on a team project than when coding alone?',
    ],
    quiz: [
      {
        question: 'Which symbol starts a single-line comment in Python?',
        options: ['//', '#', '--', '<!--'],
        correctIndex: 1,
        explanation: '# marks the rest of the line as a comment in Python.',
      },
      {
        question: 'Does Python execute the text inside a comment?',
        options: [
          'Yes, always',
          "No, it's ignored",
          'Only if it starts with a capital letter',
          'Only inside functions',
        ],
        correctIndex: 1,
        explanation: 'The interpreter skips comments entirely — they have zero effect on the program.',
      },
    ],
    summary:
      'Comments explain code to humans and are ignored by Python. Use # for short notes and triple quotes for longer ones.',
  },

  5: {
    id: 5,
    definition: 'A variable is a name that refers to a value stored in memory.',
    easyExplanation:
      'The = sign is the assignment operator. It does not mean "equals" like in math — it means "store this value under this name."',
    analogy:
      'A variable is like a labeled box: you put a value inside, and later you can look it up again just by its label.',
    syntax: 'variable_name = value',
    example: {
      code: 'age = 16\nname = "Asha"\nprint(name, "is", age, "years old")\n\nage = 17  # reassigning\nprint(age)',
    },
    output: 'Asha is 16 years old\n17',
    commonErrors: [
      {
        error: 'SyntaxError: invalid syntax (e.g. 1name = "x")',
        why: 'Variable names cannot start with a digit.',
        fix: 'Start the name with a letter or underscore, e.g. name1 = "x".',
      },
      {
        error: 'SyntaxError when naming a variable "class" or "for"',
        why: 'These words are reserved keywords that Python uses for its own syntax.',
        fix: 'Pick a different name, such as class_name or for_count.',
      },
    ],
    practice: [
      'Create variables for your name, age, and favorite subject, then print a sentence using all three.',
      'Assign a new value to an existing variable and print it before and after. What changes?',
      'Which of these are valid variable names: 2cool, _score, my-name, total_marks?',
    ],
    quiz: [
      {
        question: 'What does = do in Python?',
        options: [
          'Checks if two values are equal',
          'Assigns a value to a variable',
          'Adds two numbers',
          'Compares two strings',
        ],
        correctIndex: 1,
        explanation: 'A single = stores a value under a name. Equality comparison instead uses ==.',
      },
      {
        question: 'Which variable name is valid?',
        options: ['2nd_place', 'total_score', 'first-name', 'def'],
        correctIndex: 1,
        explanation: 'total_score starts with a letter and avoids reserved words and hyphens, which are not allowed in names.',
      },
    ],
    summary:
      'Variables are labeled storage for values. Create them with =, and choose names that start with a letter or underscore and avoid reserved keywords.',
  },

  6: {
    id: 6,
    definition:
      'A data type describes what kind of value a variable holds — a whole number, a decimal, text, or a true/false value.',
    easyExplanation:
      'int is for whole numbers, float for decimals, str for text in quotes, and bool for True or False. The built-in type() function tells you which one you are working with.',
    analogy:
      'Data types are like different containers in a kitchen — flour goes in a jar, milk in a bottle, spices in a tin. Each container suits a certain kind of content.',
    syntax: 'type(value)',
    example: {
      code: 'age = 16          # int\nheight = 5.6      # float\nname = "Asha"     # str\nis_student = True # bool\n\nprint(type(age), type(height), type(name), type(is_student))',
    },
    output: "<class 'int'> <class 'float'> <class 'str'> <class 'bool'>",
    commonErrors: [
      {
        error: 'TypeError: can only concatenate str (not "int") to str',
        why: '"5" is text (a string), not the number 5, so it cannot be added directly to an int.',
        fix: 'Convert it first: int("5") + 2.',
      },
      {
        error: "NameError when writing true or false in lowercase",
        why: 'Python\'s boolean keywords are capitalized: True and False.',
        fix: 'Always capitalize them: True / False.',
      },
    ],
    practice: [
      'Create one variable of each type (int, float, str, bool) and print their types.',
      'What is the type of the result of 7 / 2? What about 7 // 2?',
      'Why does "10" + "5" give "105" instead of 15?',
    ],
    quiz: [
      {
        question: "Which function tells you a variable's data type?",
        options: ['type()', 'kind()', 'datatype()', 'class()'],
        correctIndex: 0,
        explanation: 'type() returns the class of the given value, e.g. <class \'int\'>.',
      },
      {
        question: 'Which of these is a float?',
        options: ['10', '"10"', '10.0', 'True'],
        correctIndex: 2,
        explanation: '10.0 has a decimal point, which makes it a float rather than an int, string, or bool.',
      },
    ],
    summary:
      "Python's core simple types are int, float, str, and bool. The type() function reveals which one a given value belongs to.",
  },

  7: {
    id: 7,
    definition: 'Arithmetic operators perform mathematical calculations on numeric values.',
    easyExplanation:
      'Use + - * / for the four basic operations, // for floor (whole-number) division, % for the remainder (modulus), and ** for exponents (powers).',
    analogy:
      'Arithmetic operators are the calculator buttons hiding inside Python — each symbol does one specific, predictable job.',
    syntax: 'a + b\na - b\na * b\na / b\na // b\na % b\na ** b',
    example: {
      code: 'a = 17\nb = 5\n\nprint(a + b)\nprint(a / b)\nprint(a // b)\nprint(a % b)\nprint(a ** b)',
    },
    output: '22\n3.4\n3\n2\n1419857',
    commonErrors: [
      {
        error: 'Confusing / and // results',
        why: '17 / 5 gives the float 3.4, while 17 // 5 gives the floor-divided whole number 3.',
        fix: 'Use // specifically when you want a whole-number quotient.',
      },
      {
        error: 'ZeroDivisionError: division by zero',
        why: 'Dividing any number by 0 is mathematically undefined, so Python raises an error.',
        fix: 'Check that the denominator is not zero before dividing.',
      },
    ],
    practice: [
      'Calculate the area of a rectangle with width 12 and height 7 using *.',
      'Use % to check whether the number 23 is even or odd.',
      'Predict the output of 2 ** 10 before you run it.',
    ],
    quiz: [
      {
        question: 'What does the % operator return?',
        options: ['The percentage of a number', 'The remainder after division', 'The square root', 'The average'],
        correctIndex: 1,
        explanation: '% (modulus) gives what is left over after dividing as far as possible by whole numbers.',
      },
      {
        question: 'What is 9 // 2?',
        options: ['4.5', '4', '5', '1'],
        correctIndex: 1,
        explanation: 'Floor division drops the remainder and any decimal part, leaving the whole number 4.',
      },
    ],
    summary:
      "Python's arithmetic operators cover the four basic operations plus floor division, modulus, and exponentiation.",
  },

  8: {
    id: 8,
    definition:
      'A string is a sequence of characters enclosed in quotes, and indexing lets you access a single character by its position.',
    easyExplanation:
      'Each character has a position, called an index, starting at 0 from the left. Negative indices count backward from the end, starting at -1.',
    analogy:
      'A string is like a row of numbered mailboxes on a street — each box (character) has an address (index) you can use to peek inside.',
    syntax: 'string[index]',
    example: {
      code: 'word = "Python"\nprint(word[0])\nprint(word[5])\nprint(word[-1])\nprint(len(word))',
    },
    output: 'P\nn\nn\n6',
    commonErrors: [
      {
        error: 'IndexError: string index out of range',
        why: '"Python" only has valid indices 0 through 5, so word[10] does not exist.',
        fix: 'Stay within len(word) - 1, or use a negative index to count from the end.',
      },
      {
        error: 'Off-by-one mistakes',
        why: 'Forgetting that indexing starts at 0, not 1.',
        fix: 'Remember the first character is always at index 0.',
      },
    ],
    practice: [
      'Store your name in a variable and print its first and last letters.',
      'Use len() to find how many characters are in the word "Programming".',
      'What does word[-2] return for "Python"? Predict it, then check.',
    ],
    quiz: [
      {
        question: 'What is the index of the first character in a string?',
        options: ['1', '0', '-1', 'depends on the string'],
        correctIndex: 1,
        explanation: 'Python strings are zero-indexed, so counting always starts at 0.',
      },
      {
        question: 'What does len("Hello") return?',
        options: ['4', '5', '6', '"Hello"'],
        correctIndex: 1,
        explanation: '"Hello" has five characters: H, e, l, l, o.',
      },
    ],
    summary:
      'Strings are indexed sequences of characters. Index 0 is always the first character, and -1 is always the last.',
  },

  9: {
    id: 9,
    definition: 'Slicing extracts a portion of a string using a start:stop:step range.',
    easyExplanation:
      'string[start:stop:step] returns the characters from start up to — but not including — stop, moving forward by step each time.',
    analogy:
      'Slicing is like cutting a specific section out of a long ribbon — you mark exactly where to start cutting and where to stop.',
    syntax: 'string[start:stop]\nstring[start:stop:step]\nstring[:n]\nstring[n:]\nstring[::-1]',
    example: {
      code: 'word = "Python Mastery"\nprint(word[0:6])\nprint(word[7:])\nprint(word[:6])\nprint(word[::-1])',
    },
    output: 'Python\nMastery\nPython\nyretsaM nohtyP',
    commonErrors: [
      {
        error: 'Expecting the stop index to be included',
        why: 'word[0:6] returns the 6 characters at indices 0-5; the stop index itself is always excluded.',
        fix: 'Read stop as "up to, but not including."',
      },
      {
        error: 'ValueError: slice step cannot be zero',
        why: 'A step of 0 would mean "move nowhere," which is not a valid instruction.',
        fix: 'Use any non-zero integer for the step, such as 1, 2, or -1.',
      },
    ],
    practice: [
      'From "Hello World", slice out just "World".',
      'Reverse the string "Mastery" using slicing.',
      'What does "abcdef"[1:5:2] return? Predict it, then check.',
    ],
    quiz: [
      {
        question: 'In string[2:5], which index is NOT included in the result?',
        options: ['2', '3', '4', '5'],
        correctIndex: 3,
        explanation: 'The stop index, 5, marks where slicing ends but is never itself included.',
      },
      {
        question: 'Which slice reverses a string?',
        options: ['string[::1]', 'string[::-1]', 'string[1:-1]', 'string[::0]'],
        correctIndex: 1,
        explanation: 'A step of -1 walks through the string backward from the end to the start.',
      },
    ],
    summary: 'Slicing pulls out substrings with [start:stop:step], where the stop index is always excluded.',
  },

  10: {
    id: 10,
    definition:
      'String methods are built-in functions attached to string objects that let you transform or inspect text.',
    easyExplanation:
      'Methods are called with dot notation, like text.upper(). Most string methods return a brand-new string rather than changing the original.',
    analogy:
      'String methods are like tools on a Swiss Army knife that comes built into every string — you just open the blade you need.',
    syntax: 'string.method()',
    example: {
      code: 'text = "  Hello, Python!  "\nprint(text.strip())\nprint(text.upper())\nprint(text.strip().replace("Python", "World"))\nprint(text.strip().split(","))',
    },
    output: "Hello, Python!\n  HELLO, PYTHON!  \nHello, World!\n['Hello', ' Python!']",
    commonErrors: [
      {
        error: 'Expecting text.upper() to change text itself',
        why: 'Strings are immutable in Python, so methods always return a new string instead of editing the original in place.',
        fix: 'Assign the result back to a variable, e.g. text = text.upper().',
      },
      {
        error: "AttributeError: 'str' object has no attribute 'uppercase'",
        why: 'The method name was misspelled or guessed instead of using the real method name.',
        fix: 'Use the correct built-in name, .upper(), not .uppercase().',
      },
    ],
    practice: [
      'Take "  python is FUN  " and clean it up so it reads "Python is fun" (hint: strip, lower, then capitalize).',
      'Split the string "apple,banana,cherry" into a list using split(",").',
      'Use replace() to turn "I like cats" into "I like dogs".',
    ],
    quiz: [
      {
        question: 'Does text.upper() change the original string?',
        options: [
          'Yes, it modifies it in place',
          'No, it returns a new string',
          'Only for short strings',
          'Only if reassigned with +=',
        ],
        correctIndex: 1,
        explanation: 'Strings can\'t be changed in place — .upper() hands back a new, uppercase string.',
      },
      {
        question: 'Which method removes whitespace from both ends of a string?',
        options: ['.trim()', '.clean()', '.strip()', '.cut()'],
        correctIndex: 2,
        explanation: '.strip() is Python\'s built-in method for removing leading and trailing whitespace.',
      },
    ],
    summary:
      'String methods like .strip(), .upper(), .lower(), .replace(), and .split() let you clean and transform text without writing manual loops.',
  },

  11: {
    id: 11,
    definition:
      'f-strings let you embed variables and expressions directly inside a string by prefixing it with f and wrapping the expression in curly braces.',
    easyExplanation:
      'Put f right before the opening quote, then use {variable} inside the string to insert its value — no more joining text and variables with +.',
    analogy:
      'An f-string is like a mail-merge template — you write the fixed text once, and Python automatically fills in the blanks with your variable\'s current value.',
    syntax: 'f"some text {variable} more text"\nf"{expression:.2f}"',
    example: {
      code: 'name = "Asha"\nscore = 92\nprint(f"{name} scored {score} out of 100")\nprint(f"That\'s {score/100:.0%} accuracy")',
    },
    output: "Asha scored 92 out of 100\nThat's 92% accuracy",
    commonErrors: [
      {
        error: 'Forgetting the f prefix',
        why: 'Without f, curly braces are just regular characters, so print("{name}") prints the literal text {name} instead of the value.',
        fix: 'Always add f directly before the opening quote when you want to embed variables.',
      },
      {
        error: "SyntaxError: f-string: expecting '}'",
        why: 'An opening curly brace inside the string was never closed.',
        fix: 'Check that every { inside an f-string has a matching }.',
      },
    ],
    practice: [
      'Use an f-string to print "Your age in 2030 will be X" with your current age filled in.',
      'Format a float to 2 decimal places inside an f-string, e.g. f"{3.14159:.2f}".',
      'Rewrite "Name: " + name + ", Age: " + str(age) using an f-string instead.',
    ],
    quiz: [
      {
        question: 'Which prefix turns a normal string into an f-string?',
        options: ['f', 's', 'fmt', '%'],
        correctIndex: 0,
        explanation: 'Placing f right before the opening quote activates f-string formatting.',
      },
      {
        question: 'What does f"{3.14159:.2f}" produce?',
        options: ['3.14', '3.14159', '"3.14159:.2f"', '3.1'],
        correctIndex: 0,
        explanation: ':.2f rounds the number and shows exactly two digits after the decimal point.',
      },
    ],
    summary:
      'f-strings let you embed variables and formatted expressions directly inside text using {} — the cleanest way to build strings in modern Python.',
  },

  12: {
    id: 12,
    definition:
      'Type conversion (casting) is converting a value from one data type to another, such as turning text into a number.',
    easyExplanation:
      'Functions like int(), float(), str(), and bool() take a value and return it converted to that type, where the conversion makes sense.',
    analogy:
      'Casting is like exchanging currency — the value is conceptually the same, but the "format" changes so it can be used somewhere else.',
    syntax: 'int(value)\nfloat(value)\nstr(value)\nbool(value)',
    example: {
      code: 'age_text = "16"\nage_number = int(age_text)\nprint(age_number + 1)\nprint(str(100) + " percent")\nprint(float("3.5") * 2)',
    },
    output: '17\n100 percent\n7.0',
    commonErrors: [
      {
        error: "ValueError: invalid literal for int() with base 10: 'sixteen'",
        why: 'int() can only convert text that actually looks like a whole number.',
        fix: 'Make sure the string contains digits, or use a different conversion approach.',
      },
      {
        error: 'ValueError when writing int("3.5")',
        why: "int() can't parse a decimal point directly out of a string.",
        fix: 'Convert to float first, then to int: int(float("3.5")).',
      },
    ],
    practice: [
      'Convert the string "42" to an integer and add 8 to it.',
      'What does bool(0) return? What about bool("")? Predict, then check.',
      'Why does int("7") + int("3") give 10, but "7" + "3" gives "73"?',
    ],
    quiz: [
      {
        question: 'What does int("16") return?',
        options: ["'16'", '16', '16.0', 'an error'],
        correctIndex: 1,
        explanation: 'int() reads the digits in the string and returns the whole number 16.',
      },
      {
        question: 'Which conversion would fail?',
        options: ['int("42")', 'float("3.5")', 'int("3.5")', 'str(99)'],
        correctIndex: 2,
        explanation: "int() can't directly parse a string containing a decimal point.",
      },
    ],
    summary:
      'Casting functions like int(), float(), and str() convert values between types so you can combine or compare them correctly.',
  },

  13: {
    id: 13,
    definition:
      'input() pauses the program and waits for the user to type something, then returns whatever they typed as a string.',
    easyExplanation:
      "Whatever the user types — even if it looks like a number — comes back as text, so you often need to cast it before doing math.",
    analogy:
      'input() is like a cashier asking "What\'s your order?" and waiting silently until you answer before the transaction continues.',
    syntax: 'variable = input("prompt text")',
    example: {
      code: 'name = input("What\'s your name? ")\nage = int(input("How old are you? "))\nprint(f"Hi {name}, next year you\'ll be {age + 1}.")',
    },
    output: "What's your name? Asha\nHow old are you? 16\nHi Asha, next year you'll be 17.",
    commonErrors: [
      {
        error: "TypeError: unsupported operand type(s) for +: 'int' and 'str'",
        why: 'input() always returns a string, even if the user types a number, so age + 1 fails before casting.',
        fix: 'Wrap input() in int() (or float()) when you need a number: int(input(...)).',
      },
      {
        error: 'Prompt text runs into the typed answer on screen',
        why: 'The prompt string had no trailing space, e.g. input("Age:") shows "Age:16" stuck together.',
        fix: 'Add a trailing space inside the prompt string, e.g. "Age: ".',
      },
    ],
    practice: [
      'Ask the user for their favorite color and print it back in a full sentence.',
      'Ask for two numbers and print their sum (remember to cast both to int).',
      'What data type does input() always return, no matter what the user types?',
    ],
    quiz: [
      {
        question: 'What data type does input() always return?',
        options: ['int', 'float', 'str', 'bool'],
        correctIndex: 2,
        explanation: 'input() hands back exactly what was typed, as text, regardless of its content.',
      },
      {
        question: 'Why might age + 1 crash right after age = input("Age: ")?',
        options: [
          'age is a string, not a number',
          'input() is deprecated',
          "+ can't be used with numbers",
          "There's a typo",
        ],
        correctIndex: 0,
        explanation: 'Without casting, age holds text, and you can\'t add an int to a str.',
      },
    ],
    summary:
      'input() reads whatever the user types as a string. Cast it with int() or float() before doing math with it.',
  },

  14: {
    id: 14,
    definition: 'Comparison operators compare two values and return a boolean — True or False.',
    easyExplanation:
      "== checks equality, != checks inequality, and <, >, <=, >= compare size — none of them change the original values.",
    analogy:
      'Comparison operators are like a referee — given two values, they simply call "true" or "false," nothing else.',
    syntax: 'a == b\na != b\na < b\na > b\na <= b\na >= b',
    example: {
      code: 'x = 10\ny = 15\nprint(x == y)\nprint(x != y)\nprint(x < y)\nprint(x >= 10)',
    },
    output: 'False\nTrue\nTrue\nTrue',
    commonErrors: [
      {
        error: 'Using = instead of == for comparison',
        why: '= assigns a value, while == compares two values — Python keeps these strictly separate.',
        fix: 'Always use == when checking whether two things are equal.',
      },
      {
        error: '"10" == 10 returns False, unexpectedly',
        why: 'A string and an int are never equal in Python, even if they "look" the same.',
        fix: 'Cast one side to match the other type before comparing, e.g. int("10") == 10.',
      },
    ],
    practice: [
      'Write code that checks whether 7 is less than 10 and print the result.',
      'Predict the output of "apple" == "Apple" before running it.',
      'What does 5 != 5 evaluate to?',
    ],
    quiz: [
      {
        question: 'Which operator checks if two values are NOT equal?',
        options: ['=', '==', '!=', '<>'],
        correctIndex: 2,
        explanation: '!= is Python\'s "not equal to" comparison operator.',
      },
      {
        question: 'What does a comparison operator always return?',
        options: ['A string', 'A number', 'A boolean', 'A list'],
        correctIndex: 2,
        explanation: 'Every comparison resolves to exactly one of two values: True or False.',
      },
    ],
    summary: 'Comparison operators (==, !=, <, >, <=, >=) compare values and always produce True or False.',
  },

  15: {
    id: 15,
    definition:
      'Logical operators combine multiple boolean conditions into a single True or False result.',
    easyExplanation:
      'and is True only if both sides are True; or is True if at least one side is True; not flips True to False and vice versa.',
    analogy:
      'Logical operators are like entry rules at a club — "and" needs every condition met (ID and ticket), "or" needs just one (cash or card), and "not" flips a rule on its head.',
    syntax: 'condition1 and condition2\ncondition1 or condition2\nnot condition',
    example: {
      code: 'age = 16\nhas_id = True\nprint(age >= 13 and age <= 19)\nprint(age < 10 or has_id)\nprint(not has_id)',
    },
    output: 'True\nTrue\nFalse',
    commonErrors: [
      {
        error: 'Using && or || instead of and/or',
        why: 'Python spells these operators out as words rather than using symbols.',
        fix: 'Replace && with and, and || with or.',
      },
      {
        error: 'Misreading how far not reaches in a complex expression',
        why: 'Precedence in a long expression can make it unclear what not actually applies to.',
        fix: 'Use parentheses to make your intent explicit, e.g. not (age == 16).',
      },
    ],
    practice: [
      'Write a condition that checks if a number is between 1 and 100 (inclusive) using and.',
      "Write a condition that's True if someone is a student OR a teacher.",
      'What does not (5 > 3) evaluate to?',
    ],
    quiz: [
      {
        question: 'When is "A and B" True?',
        options: ['When A is True', 'When B is True', 'Only when both A and B are True', 'Never'],
        correctIndex: 2,
        explanation: 'and requires every condition joined by it to be True.',
      },
      {
        question: 'What does Python use instead of && for logical AND?',
        options: ['&', 'and', 'AND', '&&'],
        correctIndex: 1,
        explanation: 'Python spells out and as a plain English word.',
      },
    ],
    summary:
      'and, or, and not combine boolean conditions — and needs all to be true, or needs at least one, and not reverses a single condition.',
  },

  16: {
    id: 16,
    definition:
      'Augmented assignment operators combine an arithmetic operation with assignment in a single step.',
    easyExplanation:
      'x += 5 means the same thing as x = x + 5 — it updates the variable using its own current value.',
    analogy:
      "It's like saying \"add 5 to what's already in the jar\" instead of \"take everything out, add 5, then put it all back in.\"",
    syntax: 'x += n\nx -= n\nx *= n\nx /= n\nx //= n\nx %= n\nx **= n',
    example: {
      code: 'score = 10\nscore += 5\nprint(score)\nscore *= 2\nprint(score)\nscore -= 3\nprint(score)',
    },
    output: '15\n30\n27',
    commonErrors: [
      {
        error: 'Writing x =+ 5 instead of x += 5',
        why: 'x =+ 5 is read as x = (+5) — it just assigns 5, not "add 5 to x".',
        fix: 'Keep the symbols in the right order: += not =+.',
      },
      {
        error: "NameError when using += on a variable that doesn't exist yet",
        why: 'count += 1 needs to read the current value of count before updating it.',
        fix: 'Initialize the variable first, e.g. count = 0, before using += on it.',
      },
    ],
    practice: [
      'Start with total = 0 and use += three times to add 10, then 20, then 5.',
      'Rewrite price = price - discount using the shortcut operator.',
      'What does x **= 2 do if x is 4 beforehand?',
    ],
    quiz: [
      {
        question: 'What does x += 1 do?',
        options: ['Sets x to 1', 'Adds 1 to x and stores the result back in x', 'Compares x to 1', 'Deletes x'],
        correctIndex: 1,
        explanation: '+= updates a variable using its own current value plus the given amount.',
      },
      {
        question: 'What is the long-hand equivalent of score *= 2?',
        options: ['score = 2', 'score = score * 2', 'score = score + 2', 'score == 2'],
        correctIndex: 1,
        explanation: '*= multiplies the variable by the given value and reassigns the result.',
      },
    ],
    summary:
      'Shortcut operators like += and *= update a variable using its current value in a single, shorter step.',
  },

  17: {
    id: 17,
    definition:
      'Operator precedence is the order in which Python evaluates operators when an expression contains more than one.',
    easyExplanation:
      'Python follows familiar math rules — exponents first, then multiplication/division, then addition/subtraction — and parentheses can always force a different order.',
    analogy:
      'Operator precedence is like the order of operations in a recipe — you blend ingredients before baking, no matter what order they appear in your shopping list.',
    syntax: '() highest  →  **  →  * / // %  →  + -',
    example: {
      code: 'result = 2 + 3 * 4\nprint(result)\nresult2 = (2 + 3) * 4\nprint(result2)\nresult3 = 2 ** 3 + 1\nprint(result3)',
    },
    output: '14\n20\n9',
    commonErrors: [
      {
        error: 'Assuming Python evaluates strictly left to right',
        why: '2 + 3 * 4 is not the same as (2 + 3) * 4 — multiplication runs first regardless of position.',
        fix: 'Add parentheses around the part you specifically want evaluated first.',
      },
      {
        error: '-2 ** 2 evaluates to -4, not 4',
        why: '** is evaluated before the unary minus is applied to the result.',
        fix: 'Use (-2) ** 2 if you actually want negative two squared.',
      },
    ],
    practice: [
      'Predict the output of 10 - 2 * 3 before running it.',
      'Add parentheses to 1 + 2 * 3 - 4 so the result becomes 5.',
      'What does 2 + 2 ** 3 evaluate to?',
    ],
    quiz: [
      {
        question: 'Which is evaluated first in 4 + 2 * 3?',
        options: ['4 + 2', '2 * 3', 'Left to right always', "It's a syntax error"],
        correctIndex: 1,
        explanation: 'Multiplication has higher precedence than addition, so it runs first.',
      },
      {
        question: 'What can you use to force a different evaluation order?',
        options: ['Quotation marks', 'Parentheses', 'A comment', 'A colon'],
        correctIndex: 1,
        explanation: 'Parentheses are always evaluated before anything outside them.',
      },
    ],
    summary:
      'Python evaluates expressions by precedence — parentheses, then exponents, then multiplication/division, then addition/subtraction — and parentheses always let you override the default order.',
  },

  18: {
    id: 18,
    definition: 'An if statement runs a block of code only when its condition is True.',
    easyExplanation:
      "Python checks the condition; if it's True, the indented block underneath runs, otherwise it's skipped entirely.",
    analogy:
      'An if statement is like an "if it\'s raining, take an umbrella" rule — the umbrella step only happens when the rain condition is actually true.',
    syntax: 'if condition:\n    code block',
    example: {
      code: 'temperature = 35\nif temperature > 30:\n    print("It\'s hot today!")',
    },
    output: "It's hot today!",
    commonErrors: [
      {
        error: "SyntaxError: expected ':'",
        why: 'The if line was missing its closing colon.',
        fix: 'Always end the if line with a colon.',
      },
      {
        error: 'IndentationError: expected an indented block',
        why: 'Python uses indentation, not braces, to mark which lines belong to the if block.',
        fix: 'Indent every line in the block by the same amount, commonly 4 spaces.',
      },
    ],
    practice: [
      'Write an if statement that prints "Pass" only when a score variable is 40 or above.',
      "What happens if the condition in an if statement is False — does anything print?",
      'Fix this broken code: if x > 5 print("big") — find both mistakes.',
    ],
    quiz: [
      {
        question: 'What must follow the condition in an if statement?',
        options: ['A semicolon', 'A colon', 'Nothing', 'Curly braces'],
        correctIndex: 1,
        explanation: 'Python requires a colon to mark the start of the indented block.',
      },
      {
        question: 'If the condition is False, what happens to the indented block?',
        options: ['It runs anyway', 'It is skipped', 'It causes an error', 'It runs twice'],
        correctIndex: 1,
        explanation: 'A False condition means the block underneath is simply never executed.',
      },
    ],
    summary: 'if checks a condition and runs its indented block only when that condition evaluates to True.',
  },

  19: {
    id: 19,
    definition:
      'if-else lets you run one block of code when a condition is True and a different block when it is False.',
    easyExplanation:
      "Python checks the if condition first; if it's True it runs that block and skips else; if it's False it skips straight to the else block.",
    analogy: 'if-else is like a fork in a hiking trail — you always take one path or the other, never both, never neither.',
    syntax: 'if condition:\n    block A\nelse:\n    block B',
    example: {
      code: 'age = 15\nif age >= 18:\n    print("You can vote.")\nelse:\n    print("Not old enough to vote yet.")',
    },
    output: 'Not old enough to vote yet.',
    commonErrors: [
      {
        error: 'Adding a condition to else',
        why: "else never takes its own condition — it's the catch-all for everything the if didn't cover.",
        fix: 'Remove the condition from else, or use elif if you need to check something else.',
      },
      {
        error: 'IndentationError between if and else',
        why: 'if and else must line up at the exact same indentation level.',
        fix: 'Make sure both keywords start at the same column.',
      },
    ],
    practice: [
      'Write code that prints "Even" or "Odd" depending on a number variable.',
      'What happens if you write else with a condition next to it?',
      'Combine two separate if statements that check opposite conditions of the same variable into one if-else.',
    ],
    quiz: [
      {
        question: 'Can else have its own condition?',
        options: ['Yes, always', 'No, never', 'Only with parentheses', 'Only in loops'],
        correctIndex: 1,
        explanation: 'else has no condition of its own — it simply catches whatever the if did not.',
      },
      {
        question: 'In if-else, how many blocks can run for a single check?',
        options: ['Always both', 'Exactly one', 'Zero or two', 'Depends on the data type'],
        correctIndex: 1,
        explanation: 'Exactly one branch always runs: the if block or the else block, never both.',
      },
    ],
    summary:
      'if-else guarantees exactly one branch runs — the if block when the condition is True, otherwise the else block.',
  },

  20: {
    id: 20,
    definition:
      'if-elif-else lets you check multiple conditions in order and run the block for the first one that is True.',
    easyExplanation:
      "Python tests each condition top to bottom; as soon as one is True, it runs that block and skips the rest — else only runs if none of them matched.",
    analogy:
      "if-elif-else is like a doctor's triage checklist — they check the most urgent condition first, then the next, and only fall back to the general waiting room (else) if nothing specific matches.",
    syntax: 'if condition1:\n    block A\nelif condition2:\n    block B\nelse:\n    block C',
    example: {
      code: 'marks = 72\nif marks >= 90:\n    grade = "A"\nelif marks >= 75:\n    grade = "B"\nelif marks >= 60:\n    grade = "C"\nelse:\n    grade = "F"\nprint(grade)',
    },
    output: 'C',
    commonErrors: [
      {
        error: 'Using separate if statements instead of elif',
        why: 'Independent if statements are each checked on their own, so more than one block can run by accident.',
        fix: 'Use elif when only one branch in the whole chain should ever run.',
      },
      {
        error: "SyntaxError from misspelling elif as elseif or else if",
        why: "Python's exact keyword is elif, written as one word with no space.",
        fix: 'Always write elif.',
      },
    ],
    practice: [
      'Write an if-elif-else chain that prints "Cold", "Warm", or "Hot" based on a temperature variable.',
      'What happens if two elif conditions are both True? Which block actually runs?',
      'Rewrite three independent if statements about the same variable into one if-elif-else chain.',
    ],
    quiz: [
      {
        question: 'What is Python\'s keyword for "else if"?',
        options: ['elseif', 'else if', 'elif', 'elf'],
        correctIndex: 2,
        explanation: 'elif is the single keyword Python uses to chain additional conditions.',
      },
      {
        question: 'In an if-elif-else chain, how many blocks run at most?',
        options: ['As many as match', 'Exactly one', 'Zero', 'All of them'],
        correctIndex: 1,
        explanation: 'The chain stops checking as soon as it finds the first True condition.',
      },
    ],
    summary:
      'if-elif-else checks conditions in order and runs only the first matching block, falling back to else if none match.',
  },
}

export function getLesson(id) {
  return LESSONS[Number(id)]
}

export const PUBLISHED_IDS = Object.keys(LESSONS).map(Number)
