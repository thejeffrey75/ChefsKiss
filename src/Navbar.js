import {Link, useMatch, useResolvedPath} from "react-router-dom"

export default function Navbar(){
    
return (
<nav className="nav">
    <Link to= "/" className="site-title"> 
    Site Name 
    </Link>
    <ul>
        <CustomLink to="/pricing">Pricing</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        <li className="active">

</li>
<li >

        </li>
    </ul>
</nav>
)
}

function CustomLink({to,children, ...props}){
   const resolvedPath= useResolvedPath(to )
   const isActive= useMatch({path:resolvedPath.pathname, end:true})
    const path = window.location.pathname
    return (<li className={ path === to? "active": ""}>
        <Link to={to} {...props} >
        {children}
        </Link>
    </li>
    )

}
 
