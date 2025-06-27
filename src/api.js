export const fetchWords = async () => {
    try {
        const response = await fetch('https://itgirlschool.justmakeit.ru/api/words');
        if (!response.ok) {
            throw new Error('Network error');
        }
        const words = await response.json();
        return words;
    } catch (error) {
        console.error('Error when loading words', error);
        throw error;
    }
};
    