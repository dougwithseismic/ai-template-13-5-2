import { useTheme } from 'next-themes'

/**
 * useDarkMode - A custom hook to encapsulate dark mode logic.
 *
 * @returns {object} An object containing:
 * - `currentTheme`: A string indicating the current theme ('dark', 'light', 'system').
 * - `toggleDarkMode`: A function to toggle dark mode.
 * - `setDarkMode`: A function to explicitly set dark mode.
 */
export const useDarkMode = () => {
  const { theme, setTheme } = useTheme()

  /**
   * The current theme setting ('dark', 'light', 'system').
   */
  const mode: string = theme ?? 'system'

  /**
   * Toggle the dark mode setting.
   */
  const toggleDarkMode = () => {
    if (mode === 'dark') {
      setTheme('light')
    } else if (mode === 'light') {
      setTheme('dark')
    }
  }

  /**
   * Set dark mode based on a string parameter.
   *
   * @param {string} themeSetting - The theme setting ('dark', 'light', 'system').
   */
  const setDarkMode = (themeSetting: 'dark' | 'light' | 'system') => {
    setTheme(themeSetting)
  }

  return { currentTheme: mode, toggleDarkMode, setDarkMode }
}
