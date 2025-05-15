import { useState, useEffect } from "react";
import { LeetCodeData } from "../LeetCodeData";

const NUMBER_OF_QUESTIONS = 3; // Number of questions to display


function getRandomQuestions() {
    return LeetCodeData.sort(() => 0.5 - Math.random()).slice(0, NUMBER_OF_QUESTIONS);
}

export function useDailyQuestions() {
    const [questions, setQuestions] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Load questions from localStorage or generate new ones
    useEffect(() => {
        const today = new Date().toDateString();
        const storedDate = localStorage.getItem("leetcode-date");
        const storedQuestions = localStorage.getItem("daily-questions");

        if (storedDate === today && storedQuestions) {
            // Load questions from localStorage
            setQuestions(JSON.parse(storedQuestions));
        } else {
            // Generate new questions and save to localStorage
            const newQuestions = getRandomQuestions();
            localStorage.setItem("leetcode-date", today);
            localStorage.setItem("daily-questions", JSON.stringify(newQuestions));
            setQuestions(newQuestions);
        }

        setIsLoading(false); // Mark loading as complete
    }, []);

    // Function to manually refresh questions
    const refreshQuestions = () => {
        const today = new Date().toDateString();
        const newQuestions = getRandomQuestions();
        localStorage.setItem("leetcode-date", today);
        localStorage.setItem("daily-questions", JSON.stringify(newQuestions));
        setQuestions(newQuestions);
    };

    return { questions, isLoading, refreshQuestions };
}