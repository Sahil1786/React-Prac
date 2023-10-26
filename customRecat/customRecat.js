  function custmonRender(recatElement,container){
    // const domElement = document.createElement(recatElement.type)
    // domElement.innerHTML=recatElement.children
    // domElement.setAttribute('href',recatElement.props.herf)
    // domElement.setAttribute('target',recatElement.props.target)


    // container.appendChild(domElement);

    const domElement=document.createElement(recatElement.type)
    domElement.innerHTML=recatElement.children
    for (const prop in recatElement.props) {
      if(prop==='children')continue;
      domElement.setAttribute(prop,recatElement.props[prop])
    
      
    }
    container.appendChild(domElement);

  }
 
 
 const recatElement={
    type:'a',
    props:{
        href:"https://google.com",
        target:'_blank'
    },
    children:'click me to visit google'
 }



 const maincointener=document.querySelector('#root');
 custmonRender(recatElement,maincointener);

