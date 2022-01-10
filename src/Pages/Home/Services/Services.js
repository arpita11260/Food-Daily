import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import Search from './Search/Search';

  import './Services.css';


const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        // fetch('https://gruesome-beast-09628.herokuapp.com/services')
        fetch('https://online-foodserver.herokuapp.com/services')

            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        
        <div id="services" className='bg-dark p-1'>
            <h2 className="text-primary p-2 border border-2 border-primary rounded-pill m-5">Our Food-Offer</h2>

            <div className="row  bg-dark">
<div className="col-md-2 text-primary">
  
        <Search></Search>
</div>
<div className="col-md-10 bg-dark">
<div className="service-container">
    {
        services.map(service => <Service
            key={service.id}
            service={service}
        ></Service>)
    }
</div>
</div>
</div>  
        </div>
    );
};

export default Services;

