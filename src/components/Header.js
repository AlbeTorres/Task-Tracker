
import React from 'react'
import Button from './Button';


const Header = ({title, showAddTask, showAdd}) => {

   


    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color={showAdd ? 'red' :'green'  }  text={showAdd ? 'Close' : 'Add' } onClick={showAddTask}/>
        </header>
    )
};

Header.defaultProps = {
    title: "Viva"
}


export default Header;