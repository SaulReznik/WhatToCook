import React, { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import _ from 'lodash';

import '../../styles/WhatToCook.css';

import Dropdown from '../UI/Dropdown';
import RecipePopup from '../../components/RecipePopup';

import filterRecipes from '../../functions/filterRecipes';
import sortRecipes from '../../functions/sortRecipes';

// -------------- Local Constants ----------------- //
const filters = [
    'all',
    'available products',
];

const sortByItems = [
    'names',
    'recent cooked'
];

const WhatToCook = () => {
    const [ isPopupOpen, setIsPopupOpen ] = useState(false);
    const [ popupContent, setPopupContent ] = useState(null);
    const [ activeFilter, setActiveFilter] = useState('all');
    const [ activeSortByItem, setActiveSortByItem ] = useState('names');
    const [ processedRecipes, setProcessedRecipes ] = useState([]);

    // --------------------- Store ----------------------//
    const products = useSelector(state => state.products);
    const recipes = useSelector(state => state.recipes);

    // -------------------- Effects ---------------------//
    useEffect(() => {
        const processedRecipes = filterRecipes(activeFilter, products, recipes)

        setProcessedRecipes(sortRecipes(activeSortByItem, processedRecipes));
    }, [])

    // --------------- Dropdown handlers ----------------//
    const filterSelect = useCallback(filter => {
        setActiveFilter(filter);
        setProcessedRecipes(filterRecipes(filter, products, recipes));
    }, [ activeFilter, processedRecipes ]);

    const sortByItemSelect = useCallback(sortByItem => {
        setActiveSortByItem(sortByItem);
        setProcessedRecipes(sortRecipes(sortByItem, prevState.processedRecipes));
    }, [ activeSortByItem, processedRecipes ])

    // ----------------- Popup handlers -----------------//
    const openPopup = useCallback(content => {
        setIsPopupOpen(true);
        setPopupContent(content);
    }, [ isPopupOpen, popupContent ]);

    const cookTodayBtnHandler = useCallback(() => {
        setIsPopupOpen(false);
    }, [ isPopupOpen ]);

    const closePopup = useCallback((e) => {
        if(e.target.id === 'recipePopupWrapper'){
            setIsPopupOpen(false);
        };   
    });

    return (
        <div>
            <h2>What To Cook</h2>
            <div id='filterSortContainer'>
                <div className='filterSortItem'>
                    <span>Show: </span>
                    <Dropdown 
                        activeItem={activeFilter}
                        dropdownItems={filters}
                        selectHandler={filterSelect}
                    />
                </div>
                <div className='filterSortItem'>
                    <span>Sort By: </span>
                    <Dropdown 
                        activeItem={activeSortByItem}
                        dropdownItems={sortByItems}
                        selectHandler={sortByItemSelect}
                    />
                </div>
            </div>
            <ol>
                {
                    processedRecipes.map((item, index) => (
                        <li key={`${item.name}${index}`} onClick={() => openPopup(item)}>
                            <h3>{item.name}</h3>
                        </li>
                    ))
                }
            </ol>
            {
                isPopupOpen ? 
                <RecipePopup 
                    recipe={popupContent} 
                    closePopup={closePopup}
                    cookTodayBtnHandler={cookTodayBtnHandler}
                /> : null
            }
        </div>
    )
}

export default WhatToCook;