/* eslint-disable react/prop-types */
import { Input } from "./components/forms/Input"
import { Checkbox } from "./components/forms/Checkbox"
import { ErrorBoundary } from "react-error-boundary";
import { ProductCategoryRow } from "./components/products/ProductCategoryRow";
import { ProductRow } from "./components/products/productRow";
import { useState } from "react";

const PRODUCTS = [
  { category: "Fruits", price: "$1.00", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1.50", stocked: true, name: "Banana" },
  { category: "Fruits", price: "$2.00", stocked: false, name: "Cherry" },
  { category: "Vegetables", price: "$0.50", stocked: true, name: "Carrot" },
  { category: "Vegetables", price: "$1.25", stocked: false, name: "Lettuce" },
  { category: "Dairy", price: "$2.50", stocked: true, name: "Milk" },
  { category: "Dairy", price: "$3.00", stocked: false, name: "Cheese" },
  { category: "Meat", price: "$5.00", stocked: true, name: "Chicken Breast" },
  { category: "Meat", price: "$7.50", stocked: false, name: "Steak" },
  { category: "Bakery", price: "$1.75", stocked: true, name: "Bread" },
  { category: "Bakery", price: "$2.00", stocked: false, name: "Croissant" }
];
function App() {
  const [showStockedOnly, setShowStockedOnly] = useState(false)
  const [search, setSearch] = useState('')

  const visibleProducts = PRODUCTS.filter(product=>{
    if(showStockedOnly && !product.stocked){
      return false
    }

    if(search && !product.name.includes(search)){
      return false
    }
    return true
  })
  return <div className="container my-5">
    <SearchBar search={search} onSearchChange={setSearch} showStockedOnly={showStockedOnly} onStockedOnlyChange={setShowStockedOnly} />
     
    <ErrorBoundary FallbackComponent={alertError} onReset={()=>console.log('Reset')}>
      {/* Fallback sera le composant à utiliser en cas d'erreur */}
      <ProductTable products={visibleProducts} />
    </ErrorBoundary> 
  </div>
  
}

function alertError({error, resetErrorBoundary}) {
  return <div className="alert alert-danger">
    {error.toString()}
    <button className="btn btn-secondary" onClick={resetErrorBoundary}>Reset</button>
  </div>
}

function SearchBar({search, onSearchChange, showStockedOnly, onStockedOnlyChange}){
  return <div>
    <div className="mb-3">
      <Input value={search} placeholder="Rechercher..." onChange={onSearchChange}/>
      <Checkbox 
      id="stocked" 
      label="N'affichez que les produits en stock" 
      checked={showStockedOnly} 
      onChange={onStockedOnlyChange}/>
      {/* Lorsque je change les choses je recois un boolean Donc je lui dit lorsque la valeur dans la checkbox change je veux que tu envoi le boolean a la methode que j'ai passé a onChange comme cela lui il fait remonter le changement d'etat vers la methode setShowStockedOnly qui mettra a jour l'info */}
    </div>
  </div>
}

function ProductTable({products}){
  const rows = []
  let lastCategory = null

  for (let product of products) {
    if(product.category !== lastCategory)
    {
      rows.push(<ProductCategoryRow key={product.category} name={product.category}/>)
    }
    lastCategory = product.category
    rows.push(<ProductRow product={product} key={product.name}/>)
  }
 return <>
  <table className="table">
    <thead>
      <tr>
        <th>Nom</th>
        <th>Prix</th>
      </tr>
    </thead>
    <tbody>
      {rows}
    </tbody>
  </table>
 </>
}


export default App
