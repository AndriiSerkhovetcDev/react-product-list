import React, {useEffect, useState}  from 'react';
import PropTypes from 'prop-types';
import { compareTableParams } from '../mock/mock';

const ComparePlanTable = ({ current, prev }) => {
    const [shouldShow, setShouldShow] = useState(false);

    const tableCols = ["Parameter", "Current Plan", "Previous Plan", "Difference"];
    const params = compareTableParams;
    
    const getDifferentNumberParams = (currentValue, prevValue) => {
        if (currentValue === prevValue) return "Nothing changed";

        return Math.abs(currentValue - prevValue)
    }

    const getDifferentStringParams = (currentValue, prevValue) => {
        return currentValue !== prevValue 
            ? `${prevValue} -> ${currentValue}`
            : "Nothing changed"
    }

    const handleHideTable = () => {
        setShouldShow(false)
    }

    useEffect(() => {
        if (!current || !prev) return;

        const isDifferent = params.some(param => 
            current[param.key] === prev[param.key]
        )

        setShouldShow(isDifferent)

    }, [current, prev])

    if (!shouldShow) return null;

    return (
        <div>
            <div className="d-flex justify-content-end">
                 <button className="btn btn-warning mb-3" onClick={handleHideTable}>Close</button>
            </div>
            <table className="table mb-5">
                <thead>
                    <tr>
                        {tableCols.map((col, i) => (
                            <th key={i} scope="col">
                            {col}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {params.map((param, index) => {
                        const currentValue = current[param.key];
                        const prevValue = prev[param.key];

                        let diff = param.type === "number" 
                            ? getDifferentNumberParams(currentValue, prevValue)
                            : getDifferentStringParams(currentValue, prevValue)

                            return (
                                <tr key={index}>
                                    <th scope="row">{param.label}</th>
                                    <td>{currentValue}</td>
                                    <td>{prevValue}</td>
                                    <td>{diff}</td>
                                </tr>
                            )
                    })}
                </tbody>
            </table>
        </div>
    );
};

const planShape = PropTypes.shape({
    plan: PropTypes.string.isRequired,
    monthPrice: PropTypes.number.isRequired,
    userLimit: PropTypes.number.isRequired,
    memoryLimit: PropTypes.number.isRequired,
    support: PropTypes.string.isRequired,
    hasHelpCenter: PropTypes.string.isRequired,
    isSelectedPlan: PropTypes.bool.isRequired
});

ComparePlanTable.propTypes = {
    current: planShape.isRequired,
    prev: planShape.isRequired
};

export default ComparePlanTable;