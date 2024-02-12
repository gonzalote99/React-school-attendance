import React from 'react';

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
 return(
   <footer style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '1rem', backgroundColor: 'black', color: 'white', padding: '0.5rem' }}><p>project by <a href='https://github.com/gonzalote99?tab=repositories' target='_blank' style={{color: 'white'}}>me</a> &copy; {year} </p></footer>
 )
}

export default Footer;