// IMPORT MODULES under test here:
import { makeStatsString } from '../utils.js';

const test = QUnit.test;

test('testing string', (expect) => {
    const string = ` You picked your head duck You picked your middle pink You picked your bottom leg`;
    //Arrange
    // Set up your arguments and expectations
    //const expected = `You clicked on the head 4 times, on the middle 5 times, and on the bottom 1 time. And everybody loves your character's catchphrases:`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = makeStatsString('duck', 'pink', 'leg');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, string);
});
