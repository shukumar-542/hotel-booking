import React, { useState } from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import './List.css'
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns'
import { DateRange } from 'react-date-range';
import SearchItem from '../SearchItem/SearchItem';
const List = () => {
      const location = useLocation()
      const [date, setDate] = useState(location.state.date);
      const [option, setOption] = useState(location.state.option);
      const [openDate, setOpenDate] =useState(false);
      const [destination, setDestiantion] = useState(location.state.destination);
      return (
            <div>
                  <Navbar/>
                  <Header type="list"/>
                  <div className="listContainer">
                        <div className="listWraper">
                              <div className="listSearch">
                                    <h1 className='liItem'>Search</h1>
                                    <div className="listitems">
                                    <label htmlFor="">Destination / PropartyName</label>
                                    <input type="text"  placeholder={destination}/>
                                    </div>
                                    <div className="listitems">
                                    <label htmlFor="">Check-in Date</label>
                                    <span onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate ,"dd/MM/yy")} to  ${format(date[0].endDate ,"dd/MM/yy")}`}</span>
                                     {openDate && <DateRange
                                          className="dateRanges"
                                          editableDateInputs={true}
                                          onChange={item => setDate([item.selection])}
                                          moveRangeOnFirstSelection={false}
                                          ranges={date}
                                    /> }
                                    </div>

                                    <div className="listitems">
                                          <span  >{`${option.adult} adult ${option.children} children  ${option.room} room`}</span>
                                    </div>
                                    <div className="listitems">
                                          <label htmlFor="">Option</label>
                                          <div className="optionitems">
                                                <span>Min Price <small>per Night</small></span>
                                                <input type="number" />
                                          </div>
                                    </div>


                                    <div className="listitems">
                                          <div className="optionitems">
                                                <span>Max Price <small>per Night</small></span>
                                                <input type="number" />
                                          </div>
                                    </div>



                                    <div className="listitems">
                                          <div className="optionitems">
                                                <span>Adult</span>
                                                <input type="number" Min={1} placeholder={option.adult} />
                                          </div>
                                    </div>


                                    <div className="listitems">
                                          <div className="optionitems">
                                                <span>Children</span>
                                                <input type="number" Min={0} placeholder={option.children} />
                                          </div>
                                    </div>


                                    <div className="listitems">
                                          <div className="optionitems">
                                                <span>Room</span>
                                                <input type="number" Min={1} placeholder={option.room}/>
                                          </div>
                                    </div>

                                    <button>Search</button>
                              </div>
                              <div className="listresult">
                                    <SearchItem/>
                                    <SearchItem/><SearchItem/>
                                    <SearchItem/>
                                    <SearchItem/>
                                    <SearchItem/>
                                    <SearchItem/><SearchItem/>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default List;