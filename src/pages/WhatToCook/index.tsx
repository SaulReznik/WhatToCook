import React, { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import _ from 'lodash';

// import './WhatToCook.css';
import { IProduct, IRecipe } from 'store/types';

import Dropdown from '../../UI/Dropdown';
import RecipePopup from '../../components/RecipePopup';
import filterRecipes from '../../functions/filterRecipes';
import sortRecipes from '../../functions/sortRecipes';

import useStyles from './styles';

// -------------- Local Constants ----------------- //
const filters = [
  'all',
  'available products',
];

const sortByItems = [
  'names',
  'recent cooked',
];

const WhatToCook = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupContent, setPopupContent] = useState({});
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeSortByItem, setActiveSortByItem] = useState('names');
  const [processedRecipes, setProcessedRecipes] = useState<IRecipe[]>([]);

  // --------------------- Store ----------------------//
  const products: IProduct[] = useSelector((state: any) => state.products) || [];
  const recipes: IRecipe[] = useSelector((state: any) => state.recipes) || [];

  // -------------------- Styles ----------------------//
  const classes = useStyles();
  const { filterSortContainer, filterSortItem } = classes;

  // -------------------- Effects ---------------------//
  useEffect(() => {
    const processedRecipes = filterRecipes(activeFilter, products, recipes);
    if (!processedRecipes) return;
    setProcessedRecipes(sortRecipes(activeSortByItem, processedRecipes));
  }, []);

  // --------------- Dropdown handlers ----------------//
  const filterSelect = (filter: string) => {
    setActiveFilter(filter);
    setProcessedRecipes(filterRecipes(filter, products, recipes));
  };

  const sortByItemSelect = (sortByItem: string) => {
    setActiveSortByItem(sortByItem);
    setProcessedRecipes(sortRecipes(sortByItem, processedRecipes));
  };

  // ----------------- Popup handlers -----------------//
  const openPopup = (content: IRecipe) => {
    setIsPopupOpen(true);
    setPopupContent(content);
  };

  const cookTodayBtnHandler = useCallback(() => {
    setIsPopupOpen(false);
  }, [isPopupOpen]);

  const closePopup = useCallback(e => {
    if (e.target.className.includes('popupWrapper')) {
      setIsPopupOpen(false);
    }
  }, [isPopupOpen]);

  return (
    <div>
      <h2>What To Cook</h2>
      <div className={filterSortContainer}>
        <div className={filterSortItem}>
          <span>Show: </span>
          <Dropdown
            activeItem={activeFilter}
            dropdownItems={filters}
            selectHandler={filterSelect}
          />
        </div>
        <div className={filterSortItem}>
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
                isPopupOpen
                  ? (
                    <RecipePopup
                      recipe={popupContent}
                      closePopup={closePopup}
                      cookTodayBtnHandler={cookTodayBtnHandler}
                    />
                  ) : null
            }
    </div>
  );
};

export default WhatToCook;
