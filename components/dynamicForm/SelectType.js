import React from 'react'
import Select from 'react-select'
import styles from '../../styles/forms/Form.module.css'

export const SelectType = (props) => {
    const options = props.options;
    // const formatOptionLabel = ({ label, value, desc }) => (
    //     <div className={styles.optionItem}>
    //         <p>{label}</p>
    //         {(desc !== '') ? <p className={styles.optionChild}>{desc}</p> : ''}
    //     </div>
    // );


    const customStyles = {
        control: (defaultStyles) => ({
            ...defaultStyles,
            width: "220px",
            boxShadow: "none",
            borderRadius: "16px",
            border: '1px solid #D0D0D0',
            paddingLeft: '7px',
            height: '40px',
            fontSize: '16px',
            '&:hover': {
                border: '1px solid #0B0023'
            },
        }),
        input: (defaultStyles) => ({
            ...defaultStyles,
            margin: 0,
            padding: 0,
            height: '100%',
        }),
        placeholder: (defaultStyles) => ({
            ...defaultStyles,
            margin: 0,
            padding: 0,
            fontSize: '15px'
        }),
        valueContainer: (defaultStyles) => ({
            ...defaultStyles,
            display: 'flex',
            padding: 0,
            paddingLeft: '8px',
            alignItems: 'center',
            height: '40px'
        }),
        menu: (defaultStyles) => ({
            ...defaultStyles,
            width: '220px',
            borderRadius: '16px'
        }),
        menuList: (defaultStyles) => ({
            ...defaultStyles,
            width: '220px',
            padding: 0,
            borderRadius: '16px'
        }),
        option: (defaultStyles) => ({
            ...defaultStyles,
            padding: '12px 16px'
        }),
        group: (defaultStyles) => ({
            ...defaultStyles,
            padding: 0,
        })
    };

    return (
        <div className={props.className}>
            <p className={props.textClass}>{props.upText}</p>
            <Select
                classNamePrefix="react-select"
                isSearchable={props.isSearchable}
                options={options}
                id={props.id}
                onChange={props.onChange}
                placeholder={props.placeholder}
                name={props.name}
                styles={customStyles}
                required
            />
        </div>
    )
}
