import { Navigate } from "react-router-dom";
// import './css/customProfile.css';
// import './js/scripts.js';
import './js/datatables-simple-demo.js';
import './css/styles.css';
// import { useEffect } from 'react';
// import { Helmet } from "react-helmet";
// import React, { useEffect, useState } from "react";
import React, { useState } from "react";
// import axios from 'axios';
// import { getWithExpiry } from "../../helper/utils";
import { Link } from "react-router-dom";
import DashboardNavbar from "./base/DashboardNavbar";
import DashboardLayoutSideNav from "./base/DashboardLayoutSideNav.js";




const Trade = ({ user, setUser }) => {
    // const value = getWithExpiry("user-info");
    // console.log(value);
    // const cors = require('cors');
    // const corsOptions = {
    //   origin: 'https://cp.btfd.cc/api/v2/peatio/market/orders',
    //   credentials: true,            //access-control-allow-credentials:true
    //   optionSuccessStatus: 200
    // }
    // app.use(cors(corsOptions));
    const [market, setMarket] = useState("");
    const [side, setSide] = useState("buy");
    const [ord_type, setOrd_type] = useState("limit");
    const [price, setPrice] = useState("");
    const [volume, setVolume] = useState("");


    // submit buy sell form
    const onSubmitBuySell = async (e) => {
        e.preventDefault();

        let item = { market, side, ord_type, price, volume };
        const { csrf_token } = user;


        console.log(item);


        // let result = await fetch(
        //   "https://cp.btfd.cc/api/v2/peatio/market/orders",

        //   {

        //     mode: 'no-cors',
        //     withCredentials: 'true',
        //     method: "POST",
        //     body: JSON.stringify(item),
        //     headers: {

        //       "Content-Type": "application/json",
        //       "Accept": "application/json",
        //       "Access-Control-Allow-Origin": "*"
        //     },
        //   }
        // );

        // new request
        let result = await fetch("https://cp.btfd.cc/api/v2/peatio/market/orders",
            {
                mode: 'no-cors',
                method: "POST",
                withCredentials: 'true',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    // 'Cache': 'no-cache',
                    'X-Csrf-Token': csrf_token || undefined
                    // Authorization: csrf_token || undefined,
                },
                credentials: 'include',
                body: JSON.stringify(item),

            });




        console.log(result);

        // result = await result.json();
        // console.log({ result });
        // console.log(result);

        // if (!result.ok) {
        //   result = await result.json();
        //   console.log(result);


        // }
    }



    if (!user) return <Navigate to="/login" />;




    return (

        <div>



            <div className="sb-nav-fixed profilediv">
                <DashboardNavbar user={user} setUser={setUser} />

                <div id="layoutSidenav">
                    <DashboardLayoutSideNav />
                    <div id="layoutSidenav_content">
                        <main>
                            <div className="container-fluid px-4">







                                {/* for a user form */}

                                <div className="row mt-4  mt-5 ">
                                    <div className="col-md-6 offset-md-3 profile-user-form-div">
                                        <h3 className="text-center"> One Click Buy/Sell</h3>

                                        <form
                                            onSubmit={onSubmitBuySell}
                                        >

                                            <div className="form-floating mb-3">
                                                <select className="form-select" id="floatingSelect"
                                                    aria-label="Floating label select example"

                                                    value={market}
                                                    onChange={(e) => setMarket(e.target.value)}
                                                    name="market">
                                                    <option value="BTC">BTC</option>
                                                    <option value="ETH">ETH</option>
                                                    <option value="aaveusdt">AAVE</option>
                                                </select>
                                                <label htmlFor="floatingSelect">Market</label>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <select className="form-select" id="floatingSelect" aria-label="Floating label select example"


                                                    value={side}
                                                    onChange={(e) => setSide(e.target.value)}
                                                    name="side">
                                                    <option value="buy" selected>Buy</option>
                                                    <option value="sell">Sell</option>
                                                </select>
                                                <label htmlFor="floatingSelect">Order Side</label>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <select className="form-select" id="floatingSelect"
                                                    aria-label="Floating label select example"

                                                    value={ord_type}
                                                    onChange={(e) => setOrd_type(e.target.value)}
                                                    name="ord_type">
                                                    <option value="limit" selected>Limit</option>
                                                    <option value="market">Market</option>
                                                </select>
                                                <label htmlFor="floatingSelect">Order Type</label>
                                            </div>

                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" placeholder="Price"
                                                    aria-label="Recipient's username" aria-describedby="basic-addon2"
                                                    value={price}
                                                    onChange={(e) => setPrice(e.target.value)}
                                                    name="price"
                                                />
                                                <span className="input-group-text" id="basic-addon2">USDT</span>
                                            </div>
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" placeholder="Amount"
                                                    aria-label="Recipient's username" aria-describedby="basic-addon2"
                                                    value={volume}
                                                    onChange={(e) => setVolume(e.target.value)}
                                                    name="volume" />
                                                <span className="input-group-text" id="basic-addon2">AAVE</span>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-md-12">
                                                    <ul className="list-group">
                                                        <li className="list-group-item">Total  <span className=" float-end">{price * volume}.0000000000 USDT</span></li>
                                                        <li className="list-group-item">Available  <span className=" float-end">9892.98970000 USDT</span></li>

                                                    </ul>
                                                </div>

                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-md-12">

                                                    <div className="d-grid gap-2">
                                                        {/* <button className="btn btn-primary" type="button">Buy</button> */}
                                                        <input type="submit" value="Buy" className="btn btn-primary" />

                                                    </div>
                                                </div>

                                            </div>


                                        </form>

                                    </div>
                                </div>


                            </div>
                        </main>

                    </div>
                </div>

            </div>




        </div>

    );
};

export default Trade;
