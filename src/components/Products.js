import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs } from '@fortawesome/free-solid-svg-icons';
import { faWrench } from '@fortawesome/free-solid-svg-icons';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';
import { faRadiation } from '@fortawesome/free-solid-svg-icons';


const Products = (props) => {
    return(
        <div className = "mainProduct">
            <div className = "Product">
                <div className = "Product_title">{props.title}</div>
                <div className = "Product_description">{props.description}</div>
                <div className = "Product_place">Miejsce instalacji: {props.place}.</div>
                <button 
                    onClick={() => props.handleClick(props.id, `add`)} 
                    disabled = {props.active ? true : false}
                >
                    specyfikacja
                </button>

                {props.active ? 
                    <div className = "separator">
                        <div className = "title">Zastosowanie</div>
                        <div className = "txt">{props.spec}</div>
                        <div className = "title">Montaż</div>
                        <div className = "txt">{props.assembly}</div>
                        <div className = "title">Opis działania</div>
                        <div className = "txt">{props.workDesc}</div>
                        <div className = "title">Komunikacja i sygnalizacja</div>
                        <div className = "txt">{props.communication}</div>

                        <div className = "statistics">
                            <div className = "tile">
                                <i> <FontAwesomeIcon icon={ faCogs } /> </i>
                                <div className = "title">dane techniczne:</div>
                                <ul>{props.specyfication.map(item => <li key={item.id}>{item.id}. {item.description}</li>)}</ul>
                            </div>

                            <div className = "tile">
                                <i> <FontAwesomeIcon icon={ faWrench } /> </i>
                                <div className = "title">skład urządzenia:</div>
                                <ul>{props.composition.map(item => <li key={item.id}>{item.id}. {item.description}</li>)}</ul>
                            </div>

                            <div className = "tile">
                                <i> <FontAwesomeIcon icon={ faExclamation } /> </i>
                                <div className = "title">istotne cechy analizatora:</div>
                                <ul>{props.feature.map(item => <li key={item.id}>{item.id}. {item.description}</li>)}</ul>
                            </div>

                            <div className = "tile">
                                <i> <FontAwesomeIcon icon={ faRadiation } /> </i>
                                <div className = "title">bezpieczeństwo i promieniowanie:</div>
                                <div className = "txt">{props.radioactive_desc}</div>
                                <ul>{props.radioactive.map(item => <li key={item.id}>{item.id}. {item.description}</li>)}</ul>
                            </div>
                        </div>


                        <button onClick={() => props.handleClick(props.id, `remove`)} >zwiń</button>
                    </div> 
                    
                    : 
                    null}
            </div>
        </div>
    )
}

export default Products;