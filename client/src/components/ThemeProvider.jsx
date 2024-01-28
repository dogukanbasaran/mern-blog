import {useSelector} from 'react-redux';

export default function ThemeProvider({children}) {
    const {theme} = useSelector(state => state.theme)
  return (
    <div className={theme}>
      <div className='bg-slate-50 text-gray-800 dark:text-gray-200 dark:bg-slate-950 min-h-screen'>
        {children}
      </div>
    </div>
  )
}
