"use client";

import React, { useState, useEffect } from 'react';

// Recipe and puzzle data
const recipes = [
  {
    id: 'favorite-pancakes',
    emoji: '🥞',
    title: 'Favorite Pancakes',
    category: 'Breakfast Favorites',
    prepTime: '15 minutes',
    serves: '8-12 pancakes',
    description: 'A classic from the Better Homes and Gardens New Cookbook and the first recipe ever posted on Lettergriddle.com.',
    ingredients: [
      '1¼ cups sifted all-purpose flour',
      '3 teaspoons baking powder',
      '1 tablespoon sugar',
      '½ teaspoon salt',
      '1 beaten egg',
      '1 cup milk*',
      '2 tablespoons salad oil'
    ],
    instructions: [
      'Sift together dry ingredients',
      'Combine egg, milk, and salad oil',
      'Add to dry ingredients, stirring just till moistened',
      'Bake on hot griddle'
    ],
    tip: '*For thinner pancakes, add 2 tablespoons milk to batter',
    source: 'Recipe from Better Homes and Gardens New Cookbook',
    didYouKnow: 'The bubbles that form on your pancake\'s surface are actually telling you it\'s time to flip! When the edges look set and bubbles pop without filling back in, that\'s your pancake\'s way of saying "I\'m ready!"',
    puzzle: {
      words: ['FLIP', 'SYRUP', 'FLUFFY', 'GRIDDLE', 'GOODNESS'],
      hints: ['To turn over', 'Sweet topping', 'Light and airy', 'Cooking surface', 'Deliciousness'],
      revealed: [
        { pos: 1, letter: 'L' },
        { pos: 2, letter: 'R' },
        { pos: 2, letter: 'U' },
        { pos: 1, letter: 'R' },
        { pos: 4, letter: 'N' }
      ]
    }
  },
  {
    id: 'coffee-tip',
    emoji: '☕',
    title: 'Perfect Coffee',
    category: 'Coffee, Coffee, Coffee',
    prepTime: '5 minutes',
    serves: '1 cup',
    description: 'The secret to a perfect cup starts with freshly ground beans.',
    ingredients: [
      'Fresh coffee beans',
      'Filtered water',
      'Your favorite mug'
    ],
    instructions: [
      'Grind beans just before brewing for maximum freshness',
      'Use water heated to 195-205°F (just off boiling)',
      'Use 2 tablespoons of coffee per 6 oz water',
      'Enjoy immediately for best flavor'
    ],
    tip: 'Freshly ground beans make for an excellent cup of coffee.',
    didYouKnow: 'The French press was actually patented by an Italian designer in 1929, but it was the French who popularized this beloved brewing method worldwide!',
    puzzle: {
      words: ['BREW', 'AROMA', 'BEANS', 'STEAM', 'ROBUST'],
      hints: ['To make coffee', 'Delightful smell', 'Coffee seeds', 'Rising vapor', 'Strong flavor'],
      revealed: [
        { pos: 0, letter: 'B' },
        { pos: 2, letter: 'O' },
        { pos: 3, letter: 'N' },
        { pos: 4, letter: 'M' },
        { pos: 2, letter: 'B' }
      ]
    }
  },
  {
    id: 'breakfast-casserole',
    emoji: '🍳',
    title: 'Breakfast Casserole',
    category: 'Ultimate Comfort',
    prepTime: 'Overnight + 45 min',
    serves: '6-8',
    description: 'The ultimate make-ahead breakfast! Prep it the night before and wake up to a delicious morning.',
    ingredients: [
      '1 lb. turkey sausage',
      '6 eggs',
      '2 C. milk',
      '1 tsp. dry mustard',
      '1 tsp. salt',
      '2 C. cubed bread crusts',
      '8 oz. Cheddar cheese, shredded'
    ],
    instructions: [
      'Brown turkey sausage in a medium skillet. Drain fat and set aside to cool.',
      'Lightly beat eggs in a large mixing bowl. Add milk, mustard and salt. Blend well.',
      'Stir in bread crust, sausage and cheese, mixing well.',
      'Pour into a shallow 2-quart glass baking dish and refrigerate overnight.',
      'Preheat oven to 350° and bake for 40-45 minutes or until edges are brown.',
      'Cut into wedges and serve hot or room temperature.'
    ],
    tip: 'The secret: Mix all ingredients, refrigerate overnight, then bake in the morning!',
    didYouKnow: 'Breakfast casseroles became popular in the 1950s when busy American families discovered the magic of "make-ahead" meals. The secret is letting it rest overnight so the bread soaks up all those delicious flavors while you sleep!',
    puzzle: {
      words: ['EGGS', 'BAKED', 'CHEESE', 'SAUSAGE', 'OVERNIGHT'],
      hints: ['Beaten and mixed in', 'Cooked in the oven', 'Shredded cheddar topping', 'Browned turkey meat', 'Refrigerate this long'],
      revealed: [
        { pos: 0, letter: 'E' },
        { pos: 1, letter: 'A' },
        { pos: 2, letter: 'E' },
        { pos: 3, letter: 'S' },
        { pos: 4, letter: 'N' }
      ]
    }
  },
  {
    id: 'honey-citrus-fruit-salad',
    emoji: '🍊',
    title: 'Honey Citrus Fruit Salad',
    category: 'Fresh & Fruity',
    prepTime: '15 minutes',
    serves: '4-6',
    description: 'This refreshing fruit salad combines sweet and tangy flavors, topped with crunchy walnuts and coconut flakes.',
    ingredients: [
      '1 Apple, cored and chunked',
      '1 Banana, sliced',
      '1/4 cup Blueberries',
      '1 cup Grapes (white or red)',
      '1 can (approx. 8 oz) Mandarin oranges, drained',
      '1 small can (approx. 8 oz) Pineapple tidbits, drained'
    ],
    ingredientsSections: [
      {
        title: 'For the Dressing',
        items: ['1/4 cup Orange juice', '2 tbsp Honey', 'Pinch of Cinnamon']
      },
      {
        title: 'For the Garnish',
        items: ['Shredded coconut (to taste)', 'Chopped walnuts (to taste)']
      }
    ],
    instructions: [
      { label: 'Prepare the fruit', text: 'In a large mixing bowl, gently combine the chunked apple, sliced banana, blueberries, grapes, drained mandarin oranges, and drained pineapple tidbits.' },
      { label: 'Make the dressing', text: 'In a small bowl, whisk together the orange juice, honey, and pinch of cinnamon until well blended.' },
      { label: 'Combine', text: 'Pour the dressing over the fruit mixture. Toss gently to ensure all the fruit is lightly coated.' },
      { label: 'Garnish and serve', text: 'Just before serving, top the salad with shredded coconut and chopped walnuts.' }
    ],
    tips: [
      { label: 'Prevent browning', text: 'The orange juice in the dressing helps prevent the apples and bananas from browning.' },
      { label: 'Chill', text: 'This salad tastes best when chilled for at least 30 minutes before serving.' },
      { label: 'Serve immediately after adding banana', text: 'Bananas can become mushy if left too long. Add them just before serving.' }
    ],
    didYouKnow: 'The orange juice in fruit salad dressing isn\'t just for flavor. The citric acid actually prevents apples and bananas from turning brown, keeping your salad looking fresh and beautiful!',
    puzzle: {
      words: ['TOSS', 'SWEET', 'CITRUS', 'WALNUTS', 'TROPICAL'],
      hints: ['Gently mix together', 'Honey adds this taste', 'Orange and tangy', 'Crunchy topping', 'Pineapple style'],
      revealed: [
        { pos: 2, letter: 'S' },
        { pos: 1, letter: 'W' },
        { pos: 0, letter: 'C' },
        { pos: 3, letter: 'N' },
        { pos: 4, letter: 'I' }
      ]
    }
  }
];

// Generate letters for a puzzle (excluding revealed letters)
function generateLetterPool(words, revealed) {
  const allLetters = words.join('').split('');
  
  // Remove revealed letters from the pool
  revealed.forEach((rev, wordIndex) => {
    if (rev) {
      const letterToRemove = rev.letter;
      const idx = allLetters.indexOf(letterToRemove);
      if (idx !== -1) {
        allLetters.splice(idx, 1);
      }
    }
  });
  
  // Shuffle the letters
  for (let i = allLetters.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [allLetters[i], allLetters[j]] = [allLetters[j], allLetters[i]];
  }
  return allLetters;
}

// Puzzle Component
function LetterGriddlePuzzle({ puzzle, category }) {
  const [letterPool, setLetterPool] = useState([]);
  const [guesses, setGuesses] = useState(puzzle.words.map(() => []));
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [completed, setCompleted] = useState(puzzle.words.map(() => false));
  const [revealedHints, setRevealedHints] = useState(puzzle.words.map(() => false));
  const [activeWordIndex, setActiveWordIndex] = useState(0);

  useEffect(() => {
    setLetterPool(generateLetterPool(puzzle.words, puzzle.revealed));
    // Initialize guesses with revealed letters
    const initialGuesses = puzzle.words.map((word, wordIndex) => {
      const guess = Array(word.length).fill(null);
      const revealed = puzzle.revealed[wordIndex];
      if (revealed) {
        guess[revealed.pos] = { letter: revealed.letter, revealed: true };
      }
      return guess;
    });
    setGuesses(initialGuesses);
    setCompleted(puzzle.words.map(() => false));
    setRevealedHints(puzzle.words.map(() => false));
  }, [puzzle]);

  // Keyboard handler
  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key.toUpperCase();
      
      // Handle letter keys A-Z
      if (/^[A-Z]$/.test(key)) {
        // Find the first available instance of this letter in the pool
        const poolIndex = letterPool.findIndex((letter, idx) => letter === key);
        if (poolIndex !== -1) {
          // Find the first empty slot in the active word
          const wordGuess = guesses[activeWordIndex];
          if (!wordGuess || completed[activeWordIndex]) return;
          
          const emptySlotIndex = wordGuess.findIndex(g => g === null);
          if (emptySlotIndex !== -1) {
            placeLetterInSlot(activeWordIndex, emptySlotIndex, key, poolIndex);
          }
        }
      }
      
      // Handle Backspace - remove last letter from active word
      if (e.key === 'Backspace') {
        const wordGuess = guesses[activeWordIndex];
        if (!wordGuess || completed[activeWordIndex]) return;
        
        // Find the last filled non-revealed slot
        for (let i = wordGuess.length - 1; i >= 0; i--) {
          if (wordGuess[i] && !wordGuess[i].revealed) {
            removeLetterFromSlot(activeWordIndex, i);
            break;
          }
        }
      }
      
      // Handle Arrow keys to switch active word
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault();
        setActiveWordIndex(prev => {
          let next = (prev + 1) % puzzle.words.length;
          // Skip completed words
          while (completed[next] && next !== prev) {
            next = (next + 1) % puzzle.words.length;
          }
          return next;
        });
      }
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        setActiveWordIndex(prev => {
          let next = (prev - 1 + puzzle.words.length) % puzzle.words.length;
          // Skip completed words
          while (completed[next] && next !== prev) {
            next = (next - 1 + puzzle.words.length) % puzzle.words.length;
          }
          return next;
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [letterPool, guesses, activeWordIndex, completed, puzzle.words.length]);

  const placeLetterInSlot = (wordIndex, slotIndex, letter, poolIndex) => {
    const newGuesses = [...guesses];
    newGuesses[wordIndex] = [...newGuesses[wordIndex]];
    newGuesses[wordIndex][slotIndex] = { letter, poolIndex };
    setGuesses(newGuesses);
    
    // Remove letter from pool
    const newPool = [...letterPool];
    newPool[poolIndex] = null;
    setLetterPool(newPool);
    setSelectedLetter(null);
    
    // Check if word is complete and correct
    const wordGuess = newGuesses[wordIndex];
    if (wordGuess.every(g => g !== null)) {
      const guessedWord = wordGuess.map(g => g.letter).join('');
      if (guessedWord === puzzle.words[wordIndex]) {
        const newCompleted = [...completed];
        newCompleted[wordIndex] = true;
        setCompleted(newCompleted);
        // Move to next incomplete word
        const nextIncomplete = newCompleted.findIndex((c, i) => !c && i > wordIndex);
        if (nextIncomplete !== -1) {
          setActiveWordIndex(nextIncomplete);
        } else {
          const firstIncomplete = newCompleted.findIndex(c => !c);
          if (firstIncomplete !== -1) {
            setActiveWordIndex(firstIncomplete);
          }
        }
      }
    }
  };

  const removeLetterFromSlot = (wordIndex, slotIndex) => {
    const newGuesses = [...guesses];
    newGuesses[wordIndex] = [...newGuesses[wordIndex]];
    const returnedLetter = newGuesses[wordIndex][slotIndex];
    newGuesses[wordIndex][slotIndex] = null;
    setGuesses(newGuesses);
    
    // Return letter to pool
    if (returnedLetter.poolIndex !== undefined) {
      const newPool = [...letterPool];
      newPool[returnedLetter.poolIndex] = returnedLetter.letter;
      setLetterPool(newPool);
    }
  };

  const shuffleLetters = () => {
    setLetterPool(prev => {
      const shuffled = [...prev];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    });
  };

  const handleLetterClick = (letter, poolIndex) => {
    if (selectedLetter?.poolIndex === poolIndex) {
      setSelectedLetter(null);
      return;
    }
    setSelectedLetter({ letter, poolIndex });
  };

  const handleSlotClick = (wordIndex, slotIndex) => {
    if (completed[wordIndex]) return;
    
    const currentGuess = guesses[wordIndex][slotIndex];
    
    // If slot has a revealed letter, can't change it
    if (currentGuess?.revealed) return;
    
    // If we have a selected letter and slot is empty
    if (selectedLetter && !currentGuess) {
      const newGuesses = [...guesses];
      newGuesses[wordIndex] = [...newGuesses[wordIndex]];
      newGuesses[wordIndex][slotIndex] = { letter: selectedLetter.letter, poolIndex: selectedLetter.poolIndex };
      setGuesses(newGuesses);
      
      // Remove letter from pool
      const newPool = [...letterPool];
      newPool[selectedLetter.poolIndex] = null;
      setLetterPool(newPool);
      setSelectedLetter(null);
      
      // Check if word is complete and correct
      const wordGuess = newGuesses[wordIndex];
      if (wordGuess.every(g => g !== null)) {
        const guessedWord = wordGuess.map(g => g.letter).join('');
        if (guessedWord === puzzle.words[wordIndex]) {
          const newCompleted = [...completed];
          newCompleted[wordIndex] = true;
          setCompleted(newCompleted);
        }
      }
    }
    // If slot has a letter and no letter selected, return it to pool
    else if (currentGuess && !currentGuess.revealed) {
      const newGuesses = [...guesses];
      newGuesses[wordIndex] = [...newGuesses[wordIndex]];
      const returnedLetter = newGuesses[wordIndex][slotIndex];
      newGuesses[wordIndex][slotIndex] = null;
      setGuesses(newGuesses);
      
      // Return letter to pool
      if (returnedLetter.poolIndex !== undefined) {
        const newPool = [...letterPool];
        newPool[returnedLetter.poolIndex] = returnedLetter.letter;
        setLetterPool(newPool);
      }
    }
  };

  const resetPuzzle = () => {
    setLetterPool(generateLetterPool(puzzle.words, puzzle.revealed));
    const initialGuesses = puzzle.words.map((word, wordIndex) => {
      const guess = Array(word.length).fill(null);
      const revealed = puzzle.revealed[wordIndex];
      if (revealed) {
        guess[revealed.pos] = { letter: revealed.letter, revealed: true };
      }
      return guess;
    });
    setGuesses(initialGuesses);
    setCompleted(puzzle.words.map(() => false));
    setRevealedHints(puzzle.words.map(() => false));
    setSelectedLetter(null);
    setActiveWordIndex(0);
  };

  const revealHint = (wordIndex) => {
    setRevealedHints(prev => {
      const newHints = [...prev];
      newHints[wordIndex] = true;
      return newHints;
    });
  };

  const allCompleted = completed.every(c => c);

  return (
    <div className="puzzle-container">
      <div className="puzzle-header">
        <span className="puzzle-icon">🥞</span>
        <span className="puzzle-title">Letter Griddle</span>
        <span className="puzzle-icon">🥞</span>
      </div>
      
      <div className="puzzle-category">{category}</div>
      
      {/* Word rows */}
      <div className="word-rows">
        {puzzle.words.map((word, wordIndex) => (
          <div 
            key={wordIndex} 
            className={`word-row ${completed[wordIndex] ? 'completed' : ''} ${activeWordIndex === wordIndex && !completed[wordIndex] ? 'active' : ''}`}
            onClick={() => !completed[wordIndex] && setActiveWordIndex(wordIndex)}
          >
            {revealedHints[wordIndex] && !completed[wordIndex] && (
              <div className="hint-text">{puzzle.hints[wordIndex]}</div>
            )}
            <div className="word-row-content">
              <div className="word-length">{word.length} Letters</div>
              <div className="letter-slots">
                {Array(word.length).fill(null).map((_, slotIndex) => {
                  const guess = guesses[wordIndex]?.[slotIndex];
                  return (
                    <button
                      key={slotIndex}
                      className={`letter-slot ${guess ? 'filled' : ''} ${guess?.revealed ? 'revealed' : ''} ${completed[wordIndex] ? 'correct' : ''}`}
                      onClick={(e) => { e.stopPropagation(); handleSlotClick(wordIndex, slotIndex); }}
                    >
                      {guess?.letter || ''}
                    </button>
                  );
                })}
              </div>
              {!completed[wordIndex] && !revealedHints[wordIndex] && (
                <button 
                  className="hint-btn"
                  onClick={(e) => { e.stopPropagation(); revealHint(wordIndex); }}
                >
                  Hint
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Letter pool */}
      <div className="letter-pool-container">
        <div className="letter-pool-header">
          <span className="skillet">🍳</span>
          <span>Letter Griddle</span>
          <span className="skillet">🍳</span>
        </div>
        <div className="letter-pool">
          {letterPool.map((letter, index) => (
            letter && (
              <button
                key={index}
                className={`pool-letter ${selectedLetter?.poolIndex === index ? 'selected' : ''}`}
                onClick={() => handleLetterClick(letter, index)}
              >
                {letter}
              </button>
            )
          ))}
        </div>
        <button className="shuffle-btn" onClick={shuffleLetters}>
          🔀 Shuffle
        </button>
      </div>

      {/* Instructions */}
      <div className="puzzle-instructions">
        <p>• Click a letter, then click a slot to place it</p>
        <p>• Click a filled slot to return the letter</p>
        <p>• Desktop? Type letters directly! Use ↑↓ to switch words, Backspace to remove</p>
        <p>• Like a good recipe, sometimes you just have to try it and see!</p>
      </div>

      {/* Reset button */}
      <button className="reset-btn" onClick={resetPuzzle}>
        🔄 Reset Puzzle
      </button>

      {/* Completion celebration with confetti */}
      {allCompleted && (
        <div className="celebration-overlay">
          <div className="confetti-container">
            {[...Array(50)].map((_, i) => (
              <div 
                key={i} 
                className="confetti" 
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  backgroundColor: ['#f59e0b', '#fbbf24', '#92400e', '#fde68a', '#d97706'][Math.floor(Math.random() * 5)]
                }}
              />
            ))}
          </div>
          <div className="completion-message">
            <div className="completion-emoji">🥞🍯☕</div>
            <h3>Delicious!</h3>
            <p>You solved the puzzle!</p>
          </div>
        </div>
      )}
    </div>
  );
}

// Recipe Card Component
function RecipeCard({ recipe, onClick }) {
  return (
    <button className="recipe-card" onClick={onClick}>
      <div className="recipe-card-emoji">{recipe.emoji}</div>
      <h3 className="recipe-card-title">{recipe.title}</h3>
      <p className="recipe-card-category">{recipe.category}</p>
      <div className="recipe-card-meta">
        <span>⏱️ {recipe.prepTime}</span>
        <span>🍽️ {recipe.serves}</span>
      </div>
    </button>
  );
}

// Recipe Detail Component
function RecipeDetail({ recipe, onBack }) {
  return (
    <div className="recipe-detail">
      <button className="back-btn" onClick={onBack}>
        ← Back to Recipes
      </button>
      
      <div className="recipe-header">
        <span className="recipe-emoji">{recipe.emoji}</span>
        <h1 className="recipe-title">{recipe.title}</h1>
        <p className="recipe-meta">
          <span>⏱️ {recipe.prepTime}</span>
          <span>🍽️ Serves {recipe.serves}</span>
        </p>
        <p className="recipe-description">{recipe.description}</p>
      </div>

      <div className="recipe-content">
        {/* Recipe Section */}
        <div className="recipe-section">
          <div className="ingredients-card">
            <h2>Ingredients</h2>
            <ul>
              {recipe.ingredients.map((ing, i) => (
                <li key={i}>{ing}</li>
              ))}
            </ul>
            {recipe.ingredientsSections?.map((section, i) => (
              <div key={i} className="ingredient-subsection">
                <h3>{section.title}:</h3>
                <ul>
                  {section.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="instructions-card">
            <h2>Instructions</h2>
            <ol>
              {recipe.instructions.map((inst, i) => (
                <li key={i}>
                  {typeof inst === 'string' ? inst : (
                    <><strong>{inst.label}:</strong> {inst.text}</>
                  )}
                </li>
              ))}
            </ol>
          </div>

          {recipe.tip && (
            <div className="tip-card">
              <span className="tip-icon">💡</span>
              <p>{recipe.tip}</p>
            </div>
          )}

          {recipe.tips && (
            <div className="tips-card">
              <h3>Tips for the Best Results:</h3>
              <ul>
                {recipe.tips.map((tip, i) => (
                  <li key={i}><strong>{tip.label}:</strong> {tip.text}</li>
                ))}
              </ul>
            </div>
          )}

          {recipe.source && (
            <p className="recipe-source">{recipe.source}</p>
          )}
        </div>

        {/* Puzzle Section */}
        <div className="puzzle-section">
          <div className="did-you-know">
            <h3>Did You Know?</h3>
            <p>{recipe.didYouKnow}</p>
          </div>
          
          <LetterGriddlePuzzle puzzle={recipe.puzzle} category={recipe.category} />
        </div>
      </div>
    </div>
  );
}

// Main App Component
export default function LetterGriddleCookbook() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <div className="cookbook-app">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&display=swap');
        
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .cookbook-app {
          min-height: 100vh;
          background: linear-gradient(180deg, #fffbeb 0%, #fef3c7 50%, #fde68a 100%);
          font-family: 'Georgia', serif;
        }

        /* Header */
        .cookbook-header {
          background: linear-gradient(135deg, #92400e 0%, #b45309 50%, #d97706 100%);
          padding: 2rem;
          text-align: center;
          box-shadow: 0 4px 20px rgba(146, 64, 14, 0.3);
        }

        .header-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .header-emoji {
          font-size: 3rem;
          display: block;
          margin-bottom: 0.5rem;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));
        }

        .header-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 2.5rem;
          color: #fffbeb;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
          margin-bottom: 0.5rem;
        }

        .header-tagline {
          color: #fef3c7;
          font-size: 1.1rem;
          font-style: italic;
        }

        /* Main Content */
        .main-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
        }

        /* Recipe Grid */
        .recipes-intro {
          text-align: center;
          margin-bottom: 2rem;
        }

        .recipes-intro h2 {
          font-family: 'Playfair Display', Georgia, serif;
          color: #92400e;
          font-size: 1.8rem;
          margin-bottom: 0.5rem;
        }

        .recipes-intro p {
          color: #b45309;
        }

        .recipe-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          max-width: 600px;
          margin: 0 auto;
        }

        @media (max-width: 500px) {
          .recipe-grid {
            grid-template-columns: 1fr;
            max-width: 300px;
          }
        }

        .recipe-card {
          background: white;
          border: none;
          border-radius: 1.5rem;
          padding: 2rem;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(146, 64, 14, 0.15);
          text-align: center;
          border: 3px solid transparent;
        }

        .recipe-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(146, 64, 14, 0.25);
          border-color: #f59e0b;
        }

        .recipe-card-emoji {
          font-size: 4rem;
          margin-bottom: 1rem;
        }

        .recipe-card-title {
          font-family: 'Playfair Display', Georgia, serif;
          color: #92400e;
          font-size: 1.4rem;
          margin-bottom: 0.5rem;
        }

        .recipe-card-category {
          color: #d97706;
          font-size: 0.9rem;
          margin-bottom: 1rem;
          font-style: italic;
        }

        .recipe-card-meta {
          display: flex;
          justify-content: center;
          gap: 1rem;
          color: #78716c;
          font-size: 0.85rem;
        }

        /* Recipe Detail */
        .recipe-detail {
          max-width: 1000px;
          margin: 0 auto;
        }

        .back-btn {
          background: #92400e;
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 2rem;
          cursor: pointer;
          font-family: Georgia, serif;
          font-size: 1rem;
          margin-bottom: 2rem;
          transition: all 0.2s ease;
        }

        .back-btn:hover {
          background: #b45309;
        }

        .recipe-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .recipe-emoji {
          font-size: 5rem;
          display: block;
          margin-bottom: 1rem;
        }

        .recipe-title {
          font-family: 'Playfair Display', Georgia, serif;
          color: #92400e;
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .recipe-meta {
          display: flex;
          justify-content: center;
          gap: 2rem;
          color: #b45309;
          font-size: 1rem;
          margin-bottom: 1rem;
        }

        .recipe-description {
          color: #78716c;
          font-style: italic;
          max-width: 600px;
          margin: 0 auto;
        }

        .recipe-content {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        @media (min-width: 768px) {
          .recipe-content {
            grid-template-columns: 1fr 1fr;
          }
        }

        .recipe-section {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .ingredients-card, .instructions-card, .tip-card, .tips-card {
          background: white;
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 0 4px 15px rgba(146, 64, 14, 0.1);
          border-left: 4px solid #f59e0b;
        }

        .ingredients-card h2, .instructions-card h2 {
          font-family: 'Playfair Display', Georgia, serif;
          color: #92400e;
          margin-bottom: 1rem;
          font-size: 1.3rem;
        }

        .ingredients-card ul {
          list-style: none;
        }

        .ingredients-card li {
          padding: 0.4rem 0;
          color: #44403c;
          border-bottom: 1px dashed #fde68a;
        }

        .ingredients-card li:last-child {
          border-bottom: none;
        }

        .ingredient-subsection {
          margin-top: 1rem;
        }

        .ingredient-subsection h3 {
          color: #b45309;
          font-size: 1rem;
          margin-bottom: 0.5rem;
        }

        .instructions-card ol {
          padding-left: 1.2rem;
        }

        .instructions-card li {
          padding: 0.5rem 0;
          color: #44403c;
          line-height: 1.6;
        }

        .tip-card {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          background: linear-gradient(135deg, #fef3c7, #fde68a);
        }

        .tip-icon {
          font-size: 1.5rem;
        }

        .tip-card p {
          color: #92400e;
          font-style: italic;
        }

        .tips-card {
          background: linear-gradient(135deg, #fef3c7, #fde68a);
        }

        .tips-card h3 {
          color: #92400e;
          margin-bottom: 1rem;
        }

        .tips-card ul {
          list-style: none;
        }

        .tips-card li {
          padding: 0.5rem 0;
          color: #78716c;
        }

        .recipe-source {
          text-align: center;
          color: #a8a29e;
          font-size: 0.85rem;
          font-style: italic;
        }

        /* Puzzle Section */
        .puzzle-section {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .did-you-know {
          background: white;
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 0 4px 15px rgba(146, 64, 14, 0.1);
          border-left: 4px solid #f59e0b;
        }

        .did-you-know h3 {
          color: #92400e;
          margin-bottom: 0.75rem;
        }

        .did-you-know p {
          color: #78716c;
          line-height: 1.6;
        }

        /* Puzzle Container */
        .puzzle-container {
          background: white;
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 0 4px 15px rgba(146, 64, 14, 0.1);
        }

        .puzzle-header {
          background: linear-gradient(135deg, #92400e, #b45309);
          color: white;
          padding: 0.75rem;
          border-radius: 0.5rem;
          text-align: center;
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1.2rem;
          margin-bottom: 1rem;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;
        }

        .puzzle-icon {
          font-size: 1.2rem;
        }

        .puzzle-category {
          text-align: center;
          color: #b45309;
          font-style: italic;
          margin-bottom: 1rem;
        }

        .word-rows {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }

        .word-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem;
          background: #fffbeb;
          border-radius: 0.5rem;
          flex-wrap: wrap;
          cursor: pointer;
          border: 2px solid transparent;
          transition: all 0.2s ease;
        }

        .word-row.active {
          border-color: #f59e0b;
          background: #fef9e7;
        }

        .word-row.completed {
          background: linear-gradient(135deg, #fef3c7, #fde68a);
          flex-direction: column;
          align-items: center;
        }

        .word-row.completed .word-length,
        .word-row.completed .hint-btn {
          display: none;
        }

        .word-row.completed .letter-slots {
          margin-bottom: 0.25rem;
        }

        .word-row.completed::after {
          content: '🍯';
          font-size: 1.2rem;
        }

        .word-length {
          font-size: 0.75rem;
          color: #b45309;
          min-width: 60px;
        }

        .letter-slots {
          display: flex;
          gap: 0.25rem;
          flex: 1;
          justify-content: center;
        }

        .letter-slot {
          width: 32px;
          height: 32px;
          border: 2px solid #fde68a;
          border-radius: 0.375rem;
          background: white;
          font-size: 1rem;
          font-weight: bold;
          color: #92400e;
          cursor: pointer;
          transition: all 0.2s ease;
          font-family: Georgia, serif;
        }

        .letter-slot:hover {
          border-color: #f59e0b;
        }

        .letter-slot.filled {
          background: #fef3c7;
        }

        .letter-slot.revealed {
          background: #f59e0b;
          color: white;
          border-color: #d97706;
        }

        .letter-slot.correct {
          background: #f59e0b;
          color: white;
          border-color: #d97706;
        }

        .hint-btn {
          font-size: 0.7rem;
          background: #fef3c7;
          border: 1px solid #fde68a;
          border-radius: 1rem;
          padding: 0.25rem 0.5rem;
          cursor: pointer;
          color: #b45309;
          flex-shrink: 0;
        }

        .hint-btn:hover {
          background: #fde68a;
        }

        .hint-text {
          width: 100%;
          font-size: 0.85rem;
          color: #b45309;
          font-style: italic;
          padding: 0.25rem 0.5rem;
          margin-bottom: 0.25rem;
        }

        .word-row-content {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          width: 100%;
        }

        .letter-pool-container {
          background: linear-gradient(135deg, #92400e, #b45309);
          border-radius: 0.5rem;
          padding: 1rem;
          margin-bottom: 1rem;
        }

        .letter-pool-header {
          text-align: center;
          color: white;
          margin-bottom: 0.75rem;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;
        }

        .skillet {
          font-size: 1rem;
        }

        .letter-pool {
          display: flex;
          flex-wrap: wrap;
          gap: 0.375rem;
          justify-content: center;
          margin-bottom: 0.75rem;
        }

        .pool-letter {
          width: 36px;
          height: 36px;
          border: none;
          border-radius: 0.375rem;
          background: linear-gradient(135deg, #fbbf24, #f59e0b);
          font-size: 1.1rem;
          font-weight: bold;
          color: #92400e;
          cursor: pointer;
          transition: all 0.2s ease;
          font-family: Georgia, serif;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }

        .pool-letter:hover {
          transform: scale(1.1);
        }

        .pool-letter.selected {
          background: linear-gradient(135deg, #92400e, #b45309);
          color: white;
          transform: scale(1.15);
        }

        .shuffle-btn {
          display: block;
          margin: 0 auto;
          background: linear-gradient(135deg, #fbbf24, #f59e0b);
          border: none;
          padding: 0.6rem 1.5rem;
          border-radius: 2rem;
          cursor: pointer;
          font-family: Georgia, serif;
          color: white;
          font-weight: bold;
          font-size: 0.95rem;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
          transition: all 0.2s ease;
        }

        .shuffle-btn:hover {
          background: linear-gradient(135deg, #fcd34d, #fbbf24);
          transform: scale(1.05);
        }

        .puzzle-instructions {
          text-align: center;
          font-size: 0.8rem;
          color: #a8a29e;
          margin-bottom: 1rem;
        }

        .puzzle-instructions p {
          margin: 0.25rem 0;
        }

        .reset-btn {
          display: block;
          margin: 0 auto;
          background: #fef3c7;
          border: 2px solid #fde68a;
          padding: 0.5rem 1.25rem;
          border-radius: 2rem;
          cursor: pointer;
          font-family: Georgia, serif;
          color: #b45309;
        }

        .reset-btn:hover {
          background: #fde68a;
        }

        .celebration-overlay {
          position: relative;
          margin-top: 1rem;
          overflow: hidden;
          border-radius: 1rem;
        }

        .confetti-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          overflow: hidden;
        }

        .confetti {
          position: absolute;
          width: 10px;
          height: 10px;
          top: -10px;
          border-radius: 2px;
          animation: confetti-fall 3s ease-in-out infinite;
        }

        @keyframes confetti-fall {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(200px) rotate(720deg);
            opacity: 0;
          }
        }

        .completion-message {
          text-align: center;
          background: linear-gradient(135deg, #fef3c7, #fde68a);
          padding: 2rem;
          border-radius: 1rem;
          border: 3px solid #f59e0b;
        }

        .completion-emoji {
          font-size: 3rem;
          margin-bottom: 0.5rem;
        }

        .completion-message h3 {
          font-family: 'Playfair Display', Georgia, serif;
          color: #92400e;
          font-size: 1.8rem;
          margin-bottom: 0.25rem;
        }

        .completion-message p {
          color: #b45309;
          font-size: 1.1rem;
        }

        /* Footer */
        .cookbook-footer {
          background: linear-gradient(135deg, #92400e 0%, #b45309 100%);
          padding: 2rem;
          text-align: center;
          margin-top: 2rem;
        }

        .footer-logo {
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }

        .footer-text {
          color: #fef3c7;
          font-size: 0.9rem;
        }

        .footer-social {
          margin: 1rem 0;
        }

        .instagram-link {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
        }

        .instagram-icon {
          width: 1.1rem;
          height: 1.1rem;
        }

        .footer-links {
          margin: 0.75rem 0;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;
        }

        .footer-divider {
          color: #d4a574;
        }

        .footer-link {
          color: #fcd34d;
          text-decoration: none;
        }

        .footer-link:hover {
          text-decoration: underline;
        }

        .footer-copyright {
          color: #d4a574;
          font-size: 0.8rem;
          margin-top: 1rem;
        }

        .footer-heart {
          color: #fbbf24;
        }
      `}</style>

      {/* Header */}
      <header className="cookbook-header">
        <div className="header-content">
          <span className="header-emoji">🥞</span>
          <h1 className="header-title">Letter Griddle Cookbook</h1>
          <p className="header-tagline">Delicious recipes paired with word puzzles</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {selectedRecipe ? (
          <RecipeDetail 
            recipe={selectedRecipe} 
            onBack={() => setSelectedRecipe(null)} 
          />
        ) : (
          <>
            <div className="recipes-intro">
              <h2>What&apos;s Cooking?</h2>
              <p>Choose a recipe to see the full details and play its themed puzzle!</p>
            </div>
            <div className="recipe-grid">
              {recipes.map(recipe => (
                <RecipeCard 
                  key={recipe.id} 
                  recipe={recipe} 
                  onClick={() => setSelectedRecipe(recipe)} 
                />
              ))}
            </div>
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="cookbook-footer">
        <div className="footer-logo">🥞</div>
        <p className="footer-text">
          Part of <a href="https://lettergriddle.com" className="footer-link">The Letter Griddle Games</a>
        </p>
        <div className="footer-social">
          <a href="https://instagram.com/letter_griddle" className="footer-link instagram-link" target="_blank" rel="noopener noreferrer">
            <svg className="instagram-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            @letter_griddle
          </a>
        </div>
        <div className="footer-links">
          <a href="https://lettergriddle.com/privacy" className="footer-link">Privacy</a>
          <span className="footer-divider">•</span>
          <a href="https://lettergriddle.com/terms" className="footer-link">Terms</a>
        </div>
        <p className="footer-copyright">
          © {new Date().getFullYear()} Letter Griddle. <span className="footer-heart">💛</span>
        </p>
      </footer>
    </div>
  );
}
