/*
 * MIT License
 * 
 * Copyright (c) 2025 Technically Works
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice 
 * shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */



// ♠♥♦♣ Card Symbols from -> https://www.i2symbol.com/symbols/cards


export type Suit = "♠" | "♥" | "♦" | "♣";
export type Rank = "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "J" | "K" | "Q" | "A"

/**
 * Card interface
 */
export interface Card {
    suit: Suit,
    rank: Rank
}

/* createCard
 * Generates a card based on a selected rank and suit determined after shuffle.
 * 
 * Parameter(s):
 * rank: Of type Rank.
 * Suit: Of type Suit
 * 
 * returns a suit and rank as a card interface.
*/
export function createCard(rank: Rank, suit: Suit): Card {
    return { rank, suit } as Card;
}


/*
 * cardToString
 * Makes a card into a string format for Discord easy reading.
 * 
 * Parameter:
 * Card card: The card to turn into a string.
*/
export function cardToString(card: Card): string {
    return `${card.suit}${card.rank}`
}
