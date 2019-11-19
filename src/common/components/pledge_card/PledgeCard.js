import PropTypes from 'prop-types';
import React, {Component} from 'react';

import Button from '../button/Button';

import './PledgeCard.css';


export default class PledgeCard extends Component {

    render() {
        let {
            thumbnailUrl,
            codeSubmissionTotal = 0,
            pledgeTotal,
            pledgeGoal,
            pledgerCount,
            status
        } = this.props;
        let color = '#1dc8e4';
        let statusColorStyle = 'task-open-style';

        if (status === 0) {
            color = '#55d399';
            statusColorStyle = 'task-complete-style';
        }

        return (
            <div className="pledge-card">
                <div className="pledge-card-body">
                    <div className="thumbnail-container">
                        <img className="thumbnail" src={thumbnailUrl} alt="" />
                    </div>
                    <div className="metrics">
                        <p className={`pledge-total ${statusColorStyle}`}>{`$${pledgeTotal}`}</p>
                        <p className="pledge-goal-statement">{`pledged of $${pledgeGoal} goal`}</p>
                        <p className="number-of-pledgers">{pledgerCount}</p>
                        <p className="number-of-pledgers-label">pledgers</p>
                    </div>
                    <div className="action-controls">
                        <div className="pledge-action-button">
                            <Button
                                className={statusColorStyle}
                                type="outline"
                                color={color}
                            >
                                <span>Pledge</span>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="pledge-card-footer">
                    <span className="view-source-button-container">
                        <Button
                            className="view-source-button"
                        >
                            <span>View Source</span>
                        </Button>
                    </span>
                    <span>
                        <Button
                            className="view-code-submissions-button"
                        >
                            <span>{`</> Code Submissions (${codeSubmissionTotal})`}</span>
                        </Button>
                    </span>
                </div>
            </div>
        );
    }

};

PledgeCard.propTypes = {
    thumbnailUrl: PropTypes.string,
    codeSubmissionTotal: PropTypes.number,
    pledgeTotal: PropTypes.number,
    pledgeGoal: PropTypes.number,
    pledgerCount: PropTypes.number,
    status: PropTypes.bool
};
