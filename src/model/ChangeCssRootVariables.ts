import { Theme } from "../context/ThemeContext";


export function changeCssRootVariables(theme: Theme) {
        const root = document.querySelector(':root') as HTMLElement;
   
    const components = [
      'text-color',
      'card-shadow',
      'card-background',
      'components-background',
      'body-background',
    
    ]

    components.forEach((component)=>{
          root.style.setProperty(
      `--${component}-default`, 
      `var(--${component}-${theme})`
      );
    })
}