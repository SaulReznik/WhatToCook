import React from 'react';

import '../../styles/WhatToCook.css';

export default class WhatToCook extends React.Component{
    state = {
        filters: [
            'all',
            'available',
        ],
        activeFilter: 'all',
        showFilters: false,
        sortByItems: [
            'alphabet',
            'recent cooked'
        ],
        activeSortByItem: 'alphabet',
        showSortByItems: false,
    };

    toggleFilters = () => {
        this.setState({showFilters: !this.state.showFilters})
    }

    toggleSortByItems = () => {
        this.setState({ showSortByItems: !this.state.showSortByItems })
    }

    render(){
        const { 
            filters, 
            activeFilter,
            showFilters,
            sortByItems, 
            activeSortByItem,
            showSortByItems,
        } = this.state;
        const { recipes, products } = this.props;

        return (
            <div>
                <h2>What To Cook</h2>

                <div id='filterSortContainer'>

                    <div className='dropdownContainer'>
                        <span>Show: </span>
                        <div>
                            <button
                                onClick={this.toggleFilters}
                                className='dropdownBtn'
                            >{activeFilter}</button>
                            {
                                showFilters ?
                                filters.map((item, index) => (
                                    <div key={`${item}${index}`} className='dropdownItem'>{item}</div>
                                ))
                                : null
                            }
                        </div>
                    </div>

                    <div className='dropdownContainer'>
                        <span>Sort By: </span>
                        <div>
                            <button
                                onClick={this.toggleSortByItems}
                                className='dropdownBtn'
                            >{activeSortByItem}</button>
                            {   
                                showSortByItems ?
                                sortByItems.map((item, index) => (
                                    <div key={`${item}${index}`} className='dropdownItem'>{item}</div>
                                ))
                                : null
                            }
                        </div>
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

