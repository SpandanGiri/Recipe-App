import React,{useState,useEffect} from 'react';
import Recipe from './Recipes'
import './App.css';

const App=()=>{
  
  const APP_ID='aac17023';
  const APP_KEY='7f5d6289a9e82acabfdbd8953c140aa8';
  const example=`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`  

  const [recipes,setRecipes]=useState([]);
  const [search,setSearch]=useState('');
  const [query,setQuery]=useState('chicken');
  
  useEffect(()=>{
    getRecipies();
  },[query]);

  const getRecipies= async()=>{
    const response=await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data=await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  const updateSearch= e =>{
    setSearch(e.target.value); 
  }

  const getSearch=e=>{
    e.preventDefault();
    setQuery(search); 
    setSearch('');
  }

  return(
    <div className="App">
      <form onSubmit={getSearch} className="searchForm">
        <input className="searchBar" type="text" value={search} onChange={updateSearch}/>
        <button className="searchButton" type='submit' >Search</button>
      </form>

      <div className="recipes">
        
      {recipes.map(recipe=>(
        <Recipe key={recipe.recipe.label}
        title={recipe.recipe.label} calories={recipe.recipe.calories}
        img={recipe.recipe.image} ingredients={recipe.recipe.ingredients} />
      ))}

      </div>
      
    </div>
  )
}

export default App;
