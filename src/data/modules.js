// Full 100-module curriculum for Python Mastery Hub.
// Tiers map to the site's trail metaphor:
//   beginner      -> "Basecamp"     (modules 1-30)
//   intermediate  -> "Ridge Trail"  (modules 31-65)
//   advanced      -> "Summit Push"  (modules 66-100)
//
// Only modules with a matching entry in `lessons.js` have full content right now.
// Everything else renders a friendly "not charted yet" placeholder so the trail
// always shows the complete 100-module map.

export const TIERS = {
  beginner: {
    key: 'beginner',
    label: 'Basecamp',
    subtitle: 'Beginner Roadmap',
    range: [1, 30],
    colorVar: '--tier-beginner',
  },
  intermediate: {
    key: 'intermediate',
    label: 'Ridge Trail',
    subtitle: 'Intermediate Roadmap',
    range: [31, 65],
    colorVar: '--tier-intermediate',
  },
  advanced: {
    key: 'advanced',
    label: 'Summit Push',
    subtitle: 'Advanced Roadmap',
    range: [66, 100],
    colorVar: '--tier-advanced',
  },
}

export function tierForModule(id) {
  if (id >= 1 && id <= 30) return TIERS.beginner
  if (id >= 31 && id <= 65) return TIERS.intermediate
  return TIERS.advanced
}

const TITLES = [
  'Introduction to Python & How Computers Run Code',
  'Installing Python and Setting Up Your Environment',
  'Your First Program — print() and Hello World',
  'Comments in Python',
  'Variables and Assignment',
  'Data Types Overview (int, float, str, bool)',
  'Numbers and Arithmetic Operators',
  'Strings — Basics and Indexing',
  'String Slicing',
  'String Methods',
  'f-Strings and String Formatting',
  'Type Conversion (Casting)',
  'Taking Input from the User — input()',
  'Comparison Operators',
  'Logical Operators (and, or, not)',
  'Assignment Shortcut Operators (+=, -=, etc.)',
  'Operator Precedence',
  'Conditional Statements — if',
  'Conditional Statements — if-else',
  'Conditional Statements — if-elif-else',
  'Nested Conditionals',
  'Introduction to Loops — while Loop',
  'The for Loop',
  'The range() Function',
  'break and continue',
  'Nested Loops',
  'The else Clause with Loops',
  'Lists — Basics',
  'List Indexing and Slicing',
  'List Methods',
  'List Comprehensions',
  'Tuples',
  'Sets',
  'Dictionaries — Basics',
  'Dictionary Methods',
  'Nested Data Structures',
  'Iterating Over Data Structures',
  'Sorting Data (sorted(), .sort())',
  'Functions — Defining and Calling',
  'Function Parameters and Arguments',
  'Default and Keyword Arguments',
  '*args and **kwargs',
  'Return Values',
  'Variable Scope (Local vs Global)',
  'Lambda Functions',
  'map(), filter(), and reduce()',
  'Recursion',
  'Docstrings and Function Documentation',
  'Modules — Importing and Using',
  'Python Standard Library Tour',
  'Errors and Exceptions — Introduction',
  'try-except Blocks',
  'Multiple Exceptions, else, and finally',
  'Raising Custom Exceptions',
  'File Handling — Reading Files',
  'File Handling — Writing and Appending',
  'Working with CSV Files',
  'Working with JSON Data',
  'Context Managers and the with Statement',
  'Regular Expressions — Basics',
  'Regular Expressions — Advanced Patterns',
  'Advanced String Formatting (format(), %)',
  'Date and Time in Python',
  'Working with Random Numbers',
  'The math Module and Useful Built-ins',
  'Introduction to Object-Oriented Programming',
  'Classes and Objects',
  'The __init__ Constructor',
  'Instance vs Class Attributes',
  'Methods in Classes',
  'Encapsulation',
  'Inheritance',
  'Multiple Inheritance',
  'Polymorphism',
  'Abstraction and Abstract Classes',
  'Magic / Dunder Methods',
  'Property Decorators (@property)',
  'Static and Class Methods',
  'Operator Overloading',
  'Composition vs Inheritance',
  'Decorators — Basics',
  'Decorators — Advanced (with arguments)',
  'Generators and yield',
  'Iterators and the Iterator Protocol',
  'Closures',
  'Packages and __init__.py',
  'Virtual Environments and pip',
  'Unit Testing with unittest / pytest',
  'Debugging Techniques',
  'Multithreading Basics',
  'Multiprocessing Basics',
  'Asynchronous Programming (async/await)',
  'Working with APIs (requests library)',
  'Web Scraping Basics',
  'Connecting to Databases (SQLite)',
  'Building a Command-Line Application',
  'Building a Simple GUI App (tkinter)',
  'Data Analysis Basics (pandas intro)',
  'Packaging and Distributing Python Code',
  'Final Capstone Project — Putting It All Together',
]

export const MODULES = TITLES.map((title, index) => {
  const id = index + 1
  return {
    id,
    title,
    tier: tierForModule(id).key,
  }
})

export function getModule(id) {
  return MODULES.find((m) => m.id === Number(id))
}

export function modulesByTier(tierKey) {
  return MODULES.filter((m) => m.tier === tierKey)
}
