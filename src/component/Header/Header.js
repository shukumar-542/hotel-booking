import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faPlane, faCar, faTaxi, faCalendarDay } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import './Header.css'
import { DateRange } from 'react-date-range';
import { format } from 'date-fns'

const Header = ({type}) => {
      const [openDate, setOpenDate] = useState(false);
      const [openOption, setOptionOption] = useState(false);
      const [option, setOption] = useState({
            adult: 1,
            children: 0,
            room: 1
      })
      const [date, setDate] = useState([
            {
                  startDate: new Date(),
                  endDate: new Date(),
                  key: 'selection'
            }
      ]);

      const handleOption = (name, operation) => {
            setOption(prev => {
                  return {
                        ...prev, [name]: operation === 'i' ? option[name] + 1 : option[name] - 1
                  }
            })
      }
      return (
            <div className='header'>
                  <div className={type === "list" ? "headerContainer listMode": "headerContainer"}>
                        <div className="headelist">
                              <div className="headeritem active">
                                    <FontAwesomeIcon icon={faBed} />
                                    <span>Stay</span>
                              </div>
                              <div className="headeritem">
                                    <FontAwesomeIcon icon={faPlane} />
                                    <span>Plane </span>
                              </div>
                              <div className="headeritem">
                                    <FontAwesomeIcon icon={faCar} />
                                    <span>Car Rantal</span>
                              </div>
                              <div className="headeritem">
                                    <FontAwesomeIcon icon={faBed} />
                                    <span>Attraction</span>
                              </div>
                              <div className="headeritem">
                                    <FontAwesomeIcon icon={faTaxi} />
                                    <span>Airport Taxi</span>
                              </div>

                        </div>
                        {type !== "list" && <>
                        <div className="header-title">
                              <h1 className="header-h1">Find Your Next Stay...</h1>
                              <p className="header-p">Search Deal On Hotel, Home And Much More...</p>
                        </div>
                        <div className="headerSearch">
                              <div className="headerSearchItem">
                                    <FontAwesomeIcon icon={faBed} className='headerIcon' />
                                    <input type="text" placeholder='Where Are You Going' className="headerSearchInput" />
                              </div>
                              <div className="headerSearchItem">
                                    <FontAwesomeIcon icon={faCalendarDay} className='headerIcon' />
                                    <span onClick={() => setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate, "dd/MM/yy")} To ${format(date[0].endDate, "dd/MM/yy")}`}</span>
                                    {openDate && <DateRange
                                          className='dateRange'
                                          editableDateInputs={true}
                                          onChange={item => setDate([item.selection])}
                                          moveRangeOnFirstSelection={false}
                                          ranges={date}
                                    />}
                              </div>

                              <div className="headerSearchItem">
                                    <FontAwesomeIcon icon={faBed} className='headerIcon' />
                                    <span
                                          onClick={() => setOptionOption(!openOption)}
                                          className='headerSearchText'>
                                          {`${option.adult} adult . ${option.children} children ${option.room} room`}</span>
                                    {openOption && <div className="option">
                                          <div className="optionItem">
                                                <span className="optionText">adult</span>
                                                <div className="optionContainer">
                                                      <button className="optionCounterBtn" disabled={option.adult <= 1} onClick={() => handleOption('adult', 'd')}>-</button>
                                                      <span className="optionNumber"> {option.adult}</span>
                                                      <button className="optionCounterBtn" onClick={() => handleOption('adult', 'i')}>+</button>
                                                </div>
                                          </div>

                                          <div className="optionItem">
                                                <span className="optionText">children</span>
                                                <div className="optionContainer">

                                                      <button className="optionCounterBtn" disabled={option.children <= 0} onClick={() => handleOption('children', 'd')}>-</button>
                                                      <span className="optionNumber"> {option.children}</span>
                                                      <button className="optionCounterBtn" onClick={() => handleOption('children', 'i')}>+</button>
                                                </div>
                                          </div><div className="optionItem">

                                                <span className="optionText">room</span>
                                                <div className="optionContainer">

                                                      <button className="optionCounterBtn" disabled={option.room <= 1} onClick={() => handleOption('room', 'd')}>-</button>
                                                      <span className="optionNumber"> {option.room}</span>
                                                      <button className="optionCounterBtn" onClick={() => handleOption('room', 'i')}>+</button>
                                                </div>
                                          </div>
                                    </div>}
                              </div>
                              <div className="headerSearchItem">
                                    <button className="SrcBtn">Search</button>
                              </div>
                        </div>
                        </>}
                  </div>
            </div>
      );
};

export default Header;