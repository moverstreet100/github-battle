import React, { Component } from 'react'

export default class Popular extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedLanguage: 'All'
        }
    }
    updateLanguage (selectedLanguage) {
        this.setState({
            selectedLanguage
        })
    }
    render() {

        const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Pyton']
        
        return (
            <ul className='flex-center'>
               {languages.map((language, index) => (
                   <li key={index}>
                       <button 
                            className='btn-clear nav-link'
                            onClick={() => this.updateLanguage(language)}
                            >
                            {language}
                       </button>
                   </li>
               ))}
            </ul>
        )

    }
    
}