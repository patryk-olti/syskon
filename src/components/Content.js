import "./content.css";

import React from 'react';
import Slider from "./Slider";
import Products from "./Products";
import Installed from "./Installed";
import Galery from "./Galery";
import Auction from "./Auction";

import logo from './img/syskon1.png';
import company from './img/company.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Content = (props) => {    

    if(props.id === 1){
        return(
            <div className="content__wrapper">
                <div className="content__leftBar first">
                    <h1>Systemy Kontroli Procesów Przemysłowych</h1>
                    <div className="img"><img src={logo} alt="logo"></img></div>

                    <Slider 
                        lastRun={props.lastRun}
                        timeAnimation={props.timeAnimation}
                    />

                    <div className="txt">Od 1995 roku produkujemy i serwisujemy urządzenia do pomiaru zawartości części palnych w popiołach lotnych, oraz systemy kontroli jakości węgla kamiennego.</div>
                    <div className="txt">Intensywnie ulepszamy technologie wykonania urządzeń i prowadzimy działalność badawczą w celu opracowania nowych metod pomiarowych oraz wdrażania istniejących na nowych obszarach zastosowań.</div>
                    <div className="txt">Jesteśmy firmą z wieloletnim doświadczeniem w tworzeniu i wdrażaniu systemów ciągłego pomiaru jakości węgla na przenośnikach taśmowych oraz badania zawartości części palnych w spalinach.</div>
                    <div className="txt">Nasze urządzenia są w całości projektowane i budowane przez nas. Zapewniamy pełen zakres obsługi urządzenia: od montażu we wskazanym przez klienta miejscu, przez naprawy serwisowe w trakcie eksploatacji i działania, po nadzór nad poprawnością wskazań.</div>
                    <div className="txt">Obecnie pracujemy nad urządzeniami wykorzystującymi metodę aktywacji neutronowej, co pozwala na oznaczanie większej ilości pierwiastków w badanym materiale - niekoniecznie związanym z węglem.</div>
                </div>
            </div>
        )
    }else if(props.id === 2){

        const products = props.products.map(item => 
            <Products
                key={item.id}
                id={item.id}
                title={item.name}
                description={item.description}
                place={item.place}
                active={item.active}
                spec={item.spec}
                assembly={item.assembly}
                workDesc={item.workDesc}
                communication={item.communication}
                specyfication={item.specyfication}
                composition={item.composition}
                feature={item.feature}
                handleClick={props.handleClick}
                radioactive_desc={item.radioactive_desc}
                radioactive={item.radioactive}
            />
        )

        return(
            <div className="content__wrapper">
                <div className="content__leftBar">
                    <h2>Produkty</h2>
                    {products}
                </div>
            </div>       
        )
    }else if(props.id === 3){

        const installed = props.installed.map(item => 
            <Installed
                key={item.id}
                id={item.id}
                name_company={item.name}
                device_company={item.device}
            />
        )
        
        return(
            <div className="content__wrapper">
                <div className="content__leftBar">
                    <h2>Zainstalowane</h2>
                    {installed}
                </div>
            </div> 
        )
    }else if(props.id === 4){
        return(<Galery />)
    }else if(props.id === 5){

            const auction= props.auction.map(item => 
                <Auction
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    date={item.date}
                    more={item.more}
                    status={item.status}
                />
            )

            return(
                <div className="content__wrapper">
                <div className="content__leftBar">
                    <h2>Przetargi</h2>
                    {auction}
                </div>
            </div> 
            )
    }else if(props.id === 6){

        return(
            <div className="content__wrapper">
                <div className="content__leftBar sixth">
                    <h2>Kontakt</h2>
                    <div className = "img"><img src={company} alt="logo"></img></div>
                    <div className = "tiles">
                        <div className ="tile">
                            <i> <FontAwesomeIcon icon={ faMapMarkerAlt } /> </i>
                            <div className="txt">Henryk Zastawny "SYSKON" Systemy Kontroli Procesów Przemysłowych</div>
                            <div className="txt">Henryk Zastawny</div>
                            <div className="txt">ul. Kościerzyńska 7</div>
                            <div className="txt">51 - 416 Wrocław</div>
                        </div>
                        <div className ="tile">
                            <i> <FontAwesomeIcon icon={ faInfo } /> </i>
                            <div className="txt"><span>numer NIP:</span> 8981012891</div>
                            <div className="txt"><span>numer REGON:</span> 930709589</div>
                        </div>
                        <div className ="tile">
                            <i> <FontAwesomeIcon icon={ faPhone } /> </i>
                            <div className="txt"><span>firma:</span> 501 611 222</div>
                            <div className="txt"><span>serwis:</span> 71 3941813</div>
                        </div>
                        <div className ="tile">
                            <i> <FontAwesomeIcon icon={ faEnvelope } /> </i>
                            <div className="txt"><span>strona firmy:</span> www.syskon.eu</div>
                            <div className="txt"><span>firma:</span> syskon@syskon.eu</div>
                            <div className="txt"><span>serwis:</span> serwis@syskon.eu</div>
                        </div>
                    </div>
                </div>
            </div>       
        )
    } 
    
}

export default Content;