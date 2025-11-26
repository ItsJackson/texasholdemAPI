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



import { GameState } from "./types";

export class StateMachine {
    private state: GameState = GameState.Waiting;

    get current(): GameState {
        return this.state;
    }

    // TODO: Write next game state logic.
    next() {
        switch(this.state) {
            case GameState.Waiting: return this.set(GameState.Preflop);
            case GameState.Preflop: return this.set(GameState.Flop);
            case GameState.Flop: return this.set(GameState.Turn);
            case GameState.Turn: return this.set(GameState.River);
            case GameState.River: return this.set(GameState.Showdown);
            case GameState.Showdown: return this.set(GameState.End);
            default:                return this.state;

        }
    }

    set(state: GameState) {
        this.state = state;
        return this.state;
    }

    reset() {
        this.state = GameState.Waiting;
    }
}