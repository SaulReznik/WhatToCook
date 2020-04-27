import React from 'react';
import _ from 'lodash';

import Dropdown from '../UI/Dropdown';
import RecipePopup from '../../components/RecipePopup';

import filterRecipes from '../../functions/filterRecipes';
import sortRecipes from '../../functions/sortRecipes';

import '../../styles/WhatToCook.css';

export default class WhatToCook extends React.Component{
    state = {
        filters: [
            'all',
            'available products',
        ],
        activeFilter: 'all',
        sortByItems: [
            'names',
            'recent cooked'
        ],
        activeSortByItem: 'names',
        processedRecipes: [...this.props.recipes],
        isPopupOpen: false,
        popupContent: null,
    }

    // shouldComponentUpdate(nextProps){
    //     console.log(this.props.recipes, nextProps.recipes);
    //     return _.isEqual(this.props.recipes, nextProps.recipes);
    // }

    // componentDidUpdate(prevProps, prevState) {
    //     console.log(_.isEqual(this.props.recipes, prevProps.recipes));
    // }

    componentDidMount() {
        const { activeFilter, activeSortByItem } = this.state;
        const { products, recipes } = this.props;
        const processedRecipes = filterRecipes(activeFilter, products, recipes)

        this.setState(prevState => ({
            processedRecipes: sortRecipes(activeSortByItem, prevState.processedRecipes)
        }))
    }

    filterSelect = filter => {
        const { products, recipes } = this.props;
        this.setState(prevState => ({
            activeFilter: filter,
            processedRecipes: filterRecipes(filter, products, recipes)
        }))
    }

    sortByItemSelect = sortByItem => {
        this.setState(prevState => ({ 
            activeSortByItem: sortByItem,
            processedRecipes: sortRecipes(sortByItem, prevState.processedRecipes),
        }))
    }

    openPopup = item => {
        this.setState({
            isPopupOpen: true,
            popupContent: item,
        })
    }

    cookTodayBtnHandler = () => this.setState({ isPopupOpen: false })

    closePopup = (e) => {
        if(e.target.id === 'recipePopupWrapper'){
            this.setState({ isPopupOpen: false })
        };   
    }

    render(){
        const { 
            filters, 
            activeFilter,
            sortByItems, 
            activeSortByItem,
            processedRecipes,
            isPopupOpen,
            popupContent
        } = this.state;
        const { products } = this.props;

        return (
            <div>
                <h2>What To Cook</h2>

                <div id='filterSortContainer'>

                    <div className='filterSortItem'>
                        <span>Show: </span>
                        <Dropdown 
                            activeItem={activeFilter}
                            dropdownItems={filters}
                            selectHandler={this.filterSelect}
                        />
                    </div>

                    <div className='filterSortItem'>
                        <span>Sort By: </span>
                        <Dropdown 
                            activeItem={activeSortByItem}
                            dropdownItems={sortByItems}
                            selectHandler={this.sortByItemSelect}
                        />
                    </div>

                </div>

                <ol>
                    {
                        processedRecipes.map((item, index) => (
                            <li key={`${item.name}${index}`} onClick={() => this.openPopup(item)}>
                                <h3>{item.name}</h3>
                            </li>
                        ))
                    }
                </ol>
                {
                    isPopupOpen ? 
                    <RecipePopup 
                        recipe={popupContent} 
                        closePopup={this.closePopup}
                        cookTodayBtnHandler={this.cookTodayBtnHandler}
                    /> : null
                }
            </div>
        )
    }
}

