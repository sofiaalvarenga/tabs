import React, {useState } from 'react';
import './Tabs.css'

const Tabs = (props) => {
    const [tabs, setTabs] = useState([ //State inicial, se utiliza [arr] para utilizar map y filter
        {
            name: 'Tab1',
            content: 'Tab 1 content is showing here.',
            state: '',
        },
        {
            name: 'Tab2',
            content: 'Tab 2 content is showing here.',
            state: 'on',
        },
        {
            name: 'Tab3',
            content: 'Tab 3 content is showing here.',
            state: '',
        },
    ]);

    const changeTab = (idx) => { //opción que permite cambiar las pestañas según el estado
        let newTab = tabs.map((tab) => { //operador ternario, toma primer valor si es true y sino el segundo
            if (tab.name === tabs[idx].name){ //Si el tab.name es igual a name del arreglo tab según el idx
                tab.state= 'on';
            } else{ 
                tab.state = '';
            }
            return tab;
        });
        setTabs(newTab);
    };

    return (
        <div>
            <div className='header'>
                {tabs.map((item, idx) => (
                <button value={item.state} key={idx} onClick={(e) => changeTab(idx)}>
                    {item.name}
                </button>))}

            </div>
            <div className='content'>
                {tabs.filter((item) => item.state==='on') //filtará la tab seleccionada
                .map((item, idx) => (<p key={idx}> {item.content} </p> ))//map mostará el contenido según el filter
                } 
            </div>
        </div>
    );
};

export default Tabs;