import React from 'react';

import Dropdown from '../UI/Dropdown';

import filterRecipes from '../../functions/filterRecipes';

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
    };

    filterSelect = filter => {
        const { products, recipes } = this.props
        this.setState(prevstate => ({
            activeFilter: filter,
            processedRecipes: filterRecipes(filter, products, recipes)
        }))
    }

    sortByItemSelect = sortByItem => {
        const { processedRecipes } = this.state;

        if(sortByItem === "names"){
            processedRecipes.sort((a,b) => {
                if(a.name > b.name) return -1;
                if(a.name < b.name) return 1;
                return 0;
            });
        }

        this.setState({ 
            activeSortByItem: sortByItem,
            processedRecipes: processedRecipes,
        })
    }

    render(){
        const { 
            filters, 
            activeFilter,
            sortByItems, 
            activeSortByItem,
            processedRecipes
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
                            <li key={`${item.name}${index}`}>
                                <h3>{item.name}</h3>
                            </li>
                        ))
                    }
                </ol>
            </div>
        )
    }
}

