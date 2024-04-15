
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './Profile.module.css';

const ThemeSwitcher = () => {
    const theme = useSelector(state => state);
    const dispatch = useDispatch();

    const toggleTheme = () => {
        dispatch({ type: 'TOGGLE_THEME' });
    };

    return (
        <div className={theme === 'light' ? `${classes.light}` : `${classes.dark}`}>
            <header style={{ width: '100%' }}>Хэдер</header>
            <button onClick={toggleTheme}>
                {theme === 'light' ? 'Переключить на темную тему' : 'Переключить на светлую тему'}
            </button>
            <input
        type="checkbox"
        id="toggle"
        checked={theme === 'light' ? false : true}
        onChange={toggleTheme}
      />
      <label htmlFor="toggle">{theme === 'light' ? 'Переключить на темную тему' : 'Переключить на светлую тему'}</label>
            <h1>Заголовок</h1>
            <p>Текст</p>
            <footer style={{ width: '100%' }}>Футер</footer>
        </div>
    );
};

export default ThemeSwitcher;