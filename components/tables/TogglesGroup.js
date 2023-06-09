import toggleStyles from "../../styles/toggle/Toggle.module.css";
import React from "react";

export const ToggleGroup = (props) => {
    return (
        <div className={toggleStyles.toggleWrapper}>
            <div className={toggleStyles.buttonTableDiv}>
                <p className={toggleStyles.chartsTableDesc}>
                    Вы можете выбрать тип графика
                </p>
                <div className={toggleStyles.chartsCheckBox}>
                    <p className={toggleStyles.toggleCheckboxText}>Линейчатый</p>
                    <input
                        type="checkbox"
                        id={'check'}
                        className={toggleStyles.toggleCheckbox}
                        onChange={e => {
                            e.target.checked
                                ? props.setTypeOfChart('bar')

                                : props.setTypeOfChart('line');
                        }}
                    />
                    <label htmlFor="check"></label>
                    <p className={toggleStyles.toggleCheckboxText}>Столбчатый</p>
                </div>
            </div>
        </div>
    )
}
