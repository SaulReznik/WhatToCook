import React from 'react';

import Dropdown from '../UI/Dropdown';

import '../../styles/WhatToCook.css';

export default class WhatToCook extends React.Component{
    state = {
        filters: [
            'all',
            'available products',
        ],
        activeFilter: 'all',
        sortByItems: [
            'alphabet',
            'recent cooked'
        ],
        activeSortByItem: 'alphabet',
    };

    filterSelect = filter => this.setState({activeFilter: filter})

    sortByItemSelect = sortByItem => this.setState({ activeSortByItem: sortByItem })

    render(){
        const { 
            filters, 
            activeFilter,
            sortByItems, 
            activeSortByItem,
        } = this.state;
        const { recipes, products } = this.props;

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
                        recipes.map((item, index) => (
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

