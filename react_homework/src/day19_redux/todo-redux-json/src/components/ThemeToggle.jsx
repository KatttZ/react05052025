import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../reducers/themeReducer';

export default function ThemeToggle() {
  const theme = useSelector(state => state.theme);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTheme())
  }

  return (
    <button onClick={handleToggle} className='toggle-button'>
        Switch to {theme === 'light' ? 'Dark' : 'Light'}
    </button>
  )
}
