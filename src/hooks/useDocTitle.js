import { useRef } from "react";
import { useEffect } from "react"
/**
 * 
 * @param {string} title 
 */

export function useDocTitle(title) {
    const titleRef = useRef(document.title)
    
    useEffect(() => { 
        return () => {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            document.title = titleRef.current
        }
    },[]); //Celui agit lorsque le composant est démonté

    useEffect(() => {
        document.title = title ? title : titleRef.current
    },[title]);
    
    
}
    //   const [state, setState] = useState(title)
    //   return [state, () => setState(v => document.title = v)]