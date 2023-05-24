import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav>
         <Link to="/aboutme">About Me</Link>
         &nbsp; | &nbsp;
         <Link to="/projects" >Projects</Link>
         &nbsp; | &nbsp;
         <Link to="/contact" >Contact</Link> 
         &nbsp; | &nbsp;
         <Link to="/" >Home</Link>
         &nbsp; | &nbsp;
        </nav>
        )
      };
    
