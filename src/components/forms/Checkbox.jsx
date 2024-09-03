/**
 * Checkbox avec un libellé sur la droite
 * @param {boolean} checked 
 * @param { (v: boolean) =>void } onChange 
 * @param {string} label 
 * @param {string} id 
 * @returns 
 */
// eslint-disable-next-line react/prop-types
export function Checkbox({checked, onChange, label, id}){

    return <div className="form-check my-5">

        <input 
            id={id}
            type="checkbox" 
            className="form-check-input" 
            checked={checked} 
            onChange={(e)=> onChange(e.target.checked)} 
        />
        <label htmlFor={id} className="form-check-label">{label}</label>

    </div>

}