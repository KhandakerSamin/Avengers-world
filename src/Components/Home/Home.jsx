/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Home.css'
import Cart from '../Cart/Cart';
import swal from 'sweetalert';

const Home = () => {

    const [allActors, setAllActors] = useState([]);

    const [selectedActors, setSelectedActors] = useState([]);

    const [remaining, setRemaining] = useState(0);

    const [totalCost, setTotalCost] = useState(0);

    const budget = 50000;

    useEffect(() => {
        fetch("./data.json")
            .then(res => res.json())
            .then((data) => setAllActors(data));
    }, []);

    const handleSelectActor = (actor) => {
        const isExist = selectedActors.find(item => item.id == actor.id);

        let cost = actor.salary;

        if (isExist) {
            return swal("Opps!", "You Can't Take Anyone Twice !", "error");
        } else {

            selectedActors.forEach(item => {
                cost += item.salary;
            })
            const totalRemaining = budget - cost;
            if (cost > budget) {
                return swal("Sorry!!", "You are runnig out of money $ ", "warning");
            } else {
                setTotalCost(cost);
                setRemaining(totalRemaining);
                setSelectedActors([...selectedActors, actor])
            }
        }
    }

    return (

        <div className='container'>
            <h1>Welcome to Avengers World</h1>
            <br />
                <h2>Choose Your Favourite Combination in {budget} $</h2>
                <br /><br />
            <div className="home-container">
                <div className="card-container">
                    {
                        allActors.map((actor) => (<div key={actor.id} className="card">
                            <div className="card-img">
                                <img className='photo' src={actor.image} alt="" />
                            </div>
                            <h2>{actor.name}</h2>
                            <p><small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, exercitationem.</small></p>
                            <div className="info">
                                <p>Salary: {actor.salary}$ </p>
                                <p>{actor.role}</p>
                            </div>
                            <button onClick={() => handleSelectActor(actor)} className='card-btn'>Select</button>
                        </div>))
                    }
                </div>
                <div className="cart">
                    <Cart selectedActors={selectedActors}
                        remaining={remaining}
                        totalCost={totalCost}
                        budget={budget}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Home;