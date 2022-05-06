import React,{useState} from 'react';
import { Link } from 'react-router-dom';

const Menu = () =>{

const [name,setName] = useState('');
const errorMessage = 'Veuillez entrez un nom'


return(
    <div className="container">
        <h1 className="titre">JDP</h1>
        <h2>menu</h2>
        
        <div className='form__group field'> 
        <input placeholder="Pseudo" className="joinInput" type="text" onChange={(event) => setName(event.target.value)}/>
        <label for="pseudo" class="form__label">Pseudo</label>


        </div>
        
        <p></p>
        <Link onClick={event => (!name) ? event.preventDefault() : null} to={`/joinGame?name=${name}`}>
        <button className="btn_Rejoindre" type="submit">Rejoindre</button>
        </Link>
        <Link onClick={event => (!name) ? event.preventDefault() : null} to={`/gameMenu?name=${name}`}>
        <button className="btn_Creer" type="submit">Creer</button>
        </Link>
    </div>
    
)

}

export default Menu;