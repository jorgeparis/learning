document.querySelectorAll('a').forEach((a_element)=>{
    a_element.addEventListener('click', (e) => {
        e.preventDefault(); 
        console.log('OLA')
      });
    
})