import {useSelector} from 'react-redux';

export default function ThemeProvider({children}) {
    const {theme} = useSelector(state => state.theme)
  return (
    <div className={theme}>
      <div className='bg-gray-100 text-neutral-800 dark:text-neutral-100 dark:bg-gray-800 min-h-screen'>
        {children}
      </div>
    </div>
  )
}
