import InfiniteScroll from 'react-infinite-scroller';
import React, {Component} from 'react';

import FeedFilterBar from './common/components/feed_filter_bar/FeedFilterBar';
import PostCard from './common/components/post_card/PostCard';
import {fetchApi} from './common/utils/api';

import './App.css';


const PostList = ({
    posts
}) => {
    let postCards = posts.map((entry, index) => (
        <div key={index} className="post-card-container">
            <PostCard
                author={entry['author']}
                title={entry['title']}
                isTrending={entry['isTrending']}
                description={entry['description']}
                pledgeThumbnailUrl={entry['thumbnail']}
                codeSubmissionTotal={entry['codeSubmissionTotal']}
                pledgeGoal={entry['pledgeGoal']}
                pledgeTotal={entry['pledgeTotal']}
                pledgerCount={entry['pledgerCount']}
                numComments={entry['numComments']}
                status={entry['status']}
            />
        </div>
    ));

    return postCards;
};

export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            filter: 'all',
            hasMorePosts: true,
            scrollPage: 0
        };
    }

    componentDidMount() {
        let {filter} = this.state;

        fetchApi('http://127.0.0.1:8000/api/v1/entries/', {filter})
            .then(({data, errors}) => {
                if (!errors) {
                    this.setState({
                        posts: data.getEntries.entries,
                        hasMorePosts: data.getEntries.hasMore
                    });
                }
            });
    }

    handleSelectFilter = (value) => {
        fetchApi('http://127.0.0.1:8000/api/v1/entries/', {filter: value})
            .then(({data}) => {
                this.setState({
                    filter: value,
                    posts: data.getEntries.entries,
                    hasMorePosts: data.getEntries.hasMore,
                    scrollPage: 0
                });
            });
    };

    handleScrollLoad = () => {
        let {
            filter,
            posts,
            scrollPage
        } = this.state;

        let newPage = scrollPage + 1;

        fetchApi(`http://127.0.0.1:8000/api/v1/entries/`, {page: newPage, filter})
            .then(({data}) => {
                this.setState({
                    filter,
                    posts: [
                        ...posts,
                        ...data.getEntries.entries
                    ],
                    hasMorePosts: data.getEntries.hasMore,
                    scrollPage: newPage
                });
            });
    };

    render() {
        let {
            posts,
            hasMorePosts
        } = this.state;

        return (
            <div className="App">
                <div className="feed-filter-bar-container">
                    <FeedFilterBar
                        onSelect={this.handleSelectFilter}
                    />
                </div>
                <InfiniteScroll
                    pageStart={0}
                    initialLoad={false}
                    loadMore={this.handleScrollLoad}
                    hasMore={hasMorePosts}
                >
                    <div className="post-list-container">
                        <PostList
                            posts={posts}
                        />
                    </div>
                </InfiniteScroll>
            </div>
        );
    }

}
