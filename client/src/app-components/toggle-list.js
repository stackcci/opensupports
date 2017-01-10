import React from 'react';
import _ from 'lodash';
import classNames from 'classnames';

class ToggleList extends React.Component {
    static propTypes = {
        items: React.PropTypes.arrayOf(React.PropTypes.shape({
            content: React.PropTypes.node
        }))
    };

    state = {
        selected: [1, 3]
    };
    
    render() {
        return (
            <div className="toggle-list">
                {this.props.items.map(this.renderItem.bind(this))}
            </div>
        );
    }

    renderItem(obj, index) {

        return (
            <div className={this.getItemClass(index)} onClick={this.selectItem.bind(this, index)} key={index}>
                {obj.content}
            </div>
        );
    }

    getItemClass(index) {
        let classes = {
            'toggle-list__item': true,
            'toggle-list__first-item': (index === 0),
            'toggle-list__selected': (_.includes(this.state.selected, index))
        };

        return classNames(classes);
    }

    selectItem(index) {
        let actual = _.clone(this.state.selected);
        (_.includes(this.state.selected, index)) ? (_.remove(actual, t => t == index)) : (actual.push(index));
        this.setState({
            selected: actual
        });
    }
}

export default ToggleList;
