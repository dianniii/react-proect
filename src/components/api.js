export const fetchWords = async () => {
    try {
        const response = await fetch('https://itgirlschool.justmakeit.ru/api/words');
        if (!response.ok) {
            throw new Error('Сетевая ошибка');
        }
        const words = await response.json();
        return words;
    } catch (error) {
        console.error('Ошибка при загрузке слов', error);
        throw error;
    }
};
    