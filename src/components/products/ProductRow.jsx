/* eslint-disable react/prop-types */
/**
 * Ligne produit avec un tableau à deux colonnes (nom/Prix)
 * 
 * @param {{name: string, stocked: boolean, price: string}} product 
 * @returns 
 */

export function ProductRow({product}){
    const style = product.stocked ? undefined : {color: 'red'}

    // throw new Error('MANSA ERROR')

    return <tr>
        <td style={style}>{product.name}</td>
        <td>{product.price}</td>
    </tr>
}