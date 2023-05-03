import { Link } from "react-router-dom"
function Nav(props){

    function LogInHandler(){
        if(props.userState.name){
            props.userMethod({});
        }else {
            props.modalLoginState(true);
        }
    }
    return(
    <nav>
        <h1> Logo </h1>

        <form action="#">   
            <section>
                <input type="text" placeholder="" name="search"></input>
                <button type="submit" id="searchBtn">
                    <i className="fa-solid fa-magnifying-glass"></i>            
                </button>
            </section>
        </form>
        <aside >
            <Link hidden={!props.userState.name}  to="/profile">
                <button className="profile">{props.userState.name} </button>    
            </Link> 
        </aside>
        <h4 onClick={LogInHandler}>{props.userState.name? 'Sign out': 'Login'}</h4>
    </nav>)
}

export default Nav;