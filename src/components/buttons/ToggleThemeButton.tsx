import { Button } from "@/@core/components/ui/Button";
import { useTheme } from "@/contexts/theme-provider";
import { Moon, Sun } from "lucide-react";
import { useCallback } from "react";

export default function ToogleThemeButton() {
  const {setTheme, theme} = useTheme()

  const isDarkTheme = theme === "dark"


  const handleToggleTheme = useCallback(() => {
    if (isDarkTheme) {
      setTheme("light")
    } else {
      setTheme("dark")
    }
  }, [theme])

  return (
    <Button variant={"ghost"} className="aspect-square px-2" onClick={handleToggleTheme}>
      {!isDarkTheme && <Moon size={16}/>}
      {isDarkTheme && <Sun size={16}/>}
    </Button>
  )
}