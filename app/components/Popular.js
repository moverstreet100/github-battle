import React, { Component } from 'react'
import PropTypes from 'prop-types'

function LanguagesNav ({selected, onUpdateLanguage}) {
    const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Pyton']
        
    return (
        <ul className='flex-center'>
           {languages.map((language, index) => (
               <li key={index}>
                   <button 
                        className='btn-clear nav-link'
                        style={ language === selected ? {color: 'rgb(187, 46, 31)'} : null }
                        onClick={() => onUpdateLanguage(language)}
                        //dont do this *****"this.updateLanguage(language)*****"
                        >
                        {language}
                   </button>
               </li>
           ))}
        </ul>
    )
}

LanguagesNav.propTypes = {
    selected: PropTypes.string.isRequired,
    onUpdateLanguage: PropTypes.func.isRequired
}

export default class Popular extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedLanguage: 'All'
        }
        this.updateLanguage = this.updateLanguage.bind(this)
    }
    updateLanguage (selectedLanguage) {
        //dont do this *****"this.state.selectedLanguage = selectedLanguage"*****
        this.setState({
            selectedLanguage
        })
    }
    render() {
        const { selectedLanguage } = this.state

        return (
            <React.Fragment>
                <LanguagesNav
                    selected={selectedLanguage}
                    onUpdateLanguage={this.updateLanguage}
                />
            </React.Fragment>
        )
    }
}