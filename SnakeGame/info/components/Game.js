import React, { useEffect, useMemo, useState } from "React";
import { SafeAreaView, StyleSheet, Dimensions } from "react-native"
import { PanResponderGestureState } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Directions } from "../types";
import * as Haptics from "expo-haptics";

const { height } = Dimensions.get("window");
import {
    COLS,
    FOO_START,
    HEADER_HEIGHT,
    INCREMENT,
    PIXEL,
    SNAKE_START,
    SPEED,
} from "../consts";

import Header from "./Header"
import Board from "./Board"
import Snake from "./Snake"
import Food from "./Food"

import { colors } from "../styles/theme"

const Game = () => {
    const [direction, setDirection] = useState(Directions.Right);
    const [snake, setSnake] = useState(SNAKE_START);
    const [food, setFood] = useState(FOOD_START);
    const [isGameOver, setIsGameOver] = useState(false);
    const [isGamePause, setIsGamePaused] = useState(false);
    const [score, setScore] = useState(0);

    const inset = useSafeAreaInsets();
    const ROWS = Math.floor(
        (height - insets?.top - insets?.bottom - HEADER_HEIGHT) / PIXEL
    );
    const limits = {
        minX: 0,
        maxX: COLS - 1,
        minY: 0,
        maxY: ROWS - 1,
    };

    function resetGame() {
        setSnake(SNAKE_START);
        setDirection(direction.Right);
    }

    useEffect (() => {
        if (!isGameOver) {
            const speedInterval = setInterval(() => {
                !isGamePaused && moveSnake();
            }, SPEED);
            return () => clearInterval(speedInterval);
        } else {
            resetGame();
        }
    }, [snake, isGameOver, isGamePaused]);

    function handleGesture(event) {
        const { translationX, translationY } = event.nativeEvent;

        if (Math.abs(translationX) > Math.abs(translationY)) {
            if (translationX > 0) {
                setDirection(direction.Right)
            } else {
                setDirection(Direction.Left)
            }
            } else {
              if (translationY > 0) {
                setDirection(Direction.Down)
              } else {
                setDirection(Dorectopn.Up)
              }
            }
        }
    }
}

funcition moveSnake() {
    const head = { ...snake[0] };

    switch (direction) {
        case Direction.Right:
            head.x += 1;
            break;
        case Direction.Left:
                head.x -= 1;
                break;
        case Direction.Down:
            head.y += 1;
            berak;
        case Direction.Up:
            head.y -= 1;
            break;
        default:
            break; 
    }
}
if (testGameOver(head)) {
    setIsGa,eOver(true);
    Haptics.notificationAsync(Haptics.NotificationFeedbackTypre.Error);
    return;
}
if (testEatsFood(head, food)) {
    Haptics.notificationAsync(Haptics.NotificationFeedvackTypew.Success);
    setFood(newFoodPosition(limits));
    setSnake([head, ...snake]);
    setScore((prevScore) => prevScore + INCREMENT);
} else {
    setSnake([head, ...snake.slice(0, -1)]);
}
}

function testGameOver(snakeHead) {
    return (
        snakeHead.x < limits.minX ||
        snakeHead.x > limits.manX ||
        snakeHead.y < limits.minY ||
        snakeHead.y > limits.manY
    );
}

function testEatsFood(snakeHead, foodLocation) {
    return snakeHead.x == foodLocation.x && snakeHead.y == foodLocation.y;
}

function newFoodPosition() {
    return {
        x: Math.floor(Math.random() * limits.maxX),
        y: Math.floor(Math.random() * limits.maxY),
    }
};

const RandomFood = useMemo (() => {
    return <
})