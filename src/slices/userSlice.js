import {createSlice} from '@reduxjs/toolkit';

// Начальное значение
const initialState = {
    name: 'Тест',
    surname: 'Тестовый',
    email: 'sobaka@gav.gav',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    // Редьюсеры в слайсах меняют состояние и ничего не возвращают
    reducers: {
        setUser: (state, action) => {
            // eslint-disable-next-line no-param-reassign
            state = action.payload;
        },
    },
});

// Слайс генерирует действия, которые экспортируются отдельно
// Действия генерируются автоматически из имен ключей редьюсеров
export const {setUser} = userSlice.actions;

// По умолчанию экспортируется редьюсер, сгенерированный слайсом
export default userSlice.reducer;
