# Guessing Game
Guess the computer's # (1-100).

## "Problem" (requirements)
This mini web app should include a main function that takes no argument. When the page loads,
a random number between 1 and 100 shall be "chosen" by the computer.  The program should ask the user to
guess the number the computer picked, and every time they submit a guess, it should give one of the
following feedback messages: "Number too high", "Number Too low", or "Just Right".
If/when they guess correctly, the program shall display "Just Right" and then stop.

## Solution
### Method:   

**The method is straightforward:** 
- Take the player's guess and compare it with the number the computer
generated using, which I call the "House Number" (as in a gambling establishment).
- Then using conditional statements display one of the messages in the problem statement, depending on whether the player's
guess was too low, too high, or correct.  I decided I wanted to color the text of this feedback
blue, red, and green, respectively, so that players able to see color would have an additional visual cue.
- When the player makes the correct guess, the "Guess" button is removed because the game is
over; they can reload the page to play again.
- If the player guesses correctly within 7 attempts, then the number of guesses is displayed
as well and a simple confetti burst is shown for congratulatory effect. Including this bonus
animation was encouraged and I wanted the additional colors/flair so I decided to include it.
- Why 7, you may be wondering?  Because given a range of 100 consecutive numbers it is possible
to hit the right number with 7 attempts every time using the right strategy.  Hint: the range
size can be up to 128.

### Tools used:
- PhpStorm IDE for production
- Tailwind CSS framework
- JavaScript
- Canvas Confetti script (courtesy of catdad)
- GitHub for formal updates / version control
- Vercel for publishing the finished product

Thanks @github.com/catdad
