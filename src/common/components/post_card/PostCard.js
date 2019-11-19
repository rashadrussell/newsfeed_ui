import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faComment,
    faEllipsisH,
    faShare
} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import React, {Component} from 'react';

import Button from '../button/Button';
import PledgeCard from '../pledge_card/PledgeCard';

import './PostCard.css';


export default class PostCard extends Component {

    render() {
        let {
            author,
            title,
            description,
            isTrending,
            pledgeThumbnailUrl,
            codeSubmissionTotal,
            pledgeTotal,
            pledgeGoal,
            pledgerCount,
            numComments,
            status
        } = this.props;
        let statusLabel = null;

        if (status === 0) {
            statusLabel = (
                <span className="status-label task-complete">Task Complete</span>
            );
        } else if (isTrending) {
            statusLabel = (
                <span className="status-label trending">Trending</span>
            );
        }

        return (
            <div className="post-card">
                <div className="post-card-header">
                    <div className="author-container">
                        <div className="avatar-container">
                            <img className="avatar" src={author['picture']} alt="" />
                        </div>
                        <div className="name-container">
                            <p className="name">{author['name']}</p>
                        </div>
                        <div className="status-container">
                            {statusLabel}
                        </div>
                    </div>
                </div>
                <div className="post-card-body">
                    <h4 className="title">{title}</h4>
                    <p className="description">{description}</p>
                    <div className="pledge-card-container">
                        <PledgeCard
                            thumbnailUrl={pledgeThumbnailUrl}
                            codeSubmissionTotal={codeSubmissionTotal}
                            pledgeTotal={pledgeTotal}
                            pledgeGoal={pledgeGoal}
                            pledgerCount={pledgerCount}
                            status={status}
                        />
                    </div>
                </div>
                <div className="post-card-footer">
                    <div className="left-col">
                        <Button
                            className="num-comments-button"
                        >
                            <FontAwesomeIcon icon={faComment} color="#888" size="sm" />
                            <span className="text">{`Comments (${numComments})`}</span>
                        </Button>
                        <Button
                            className="share-button"
                        >
                            <FontAwesomeIcon icon={faShare} color="#888" size="sm" />
                            <span className="text">Share</span>
                        </Button>
                    </div>
                    <div className="right-col">
                        <FontAwesomeIcon icon={faEllipsisH} color="#888" size="1x" />
                    </div>
                </div>
            </div>
        );
    }

}

PostCard.propTypes = {
    author: PropTypes.object,
    title: PropTypes.string,
    description: PropTypes.string,
    isTrending: PropTypes.bool,
    pledgeThumbnailUrl: PropTypes.string,
    codeSubmissionTotal: PropTypes.number,
    pledgeTotal: PropTypes.number,
    pledgeGoal: PropTypes.number,
    pledgerCount: PropTypes.number,
    numComments: PropTypes.number
};
