var React = require('react');


var BadgeInstance = React.createClass({
  render: function() {
    var badge = this.props.badge,
        slug = "/badges/" + badge.slug + '?pretty=true';
    return (
      <div className="badge pure-u-1-4">
          <img src={ badge.badge.imageUrl }/>
          <h4><a href={ '/v/#/badges/' + badge.badge.slug }>{ badge.badge.name }</a></h4>
          <a href={ '/v/#/users/' + badge.orcid + '/badges'}> { badge.orcid } </a><br />
          <a href={ badge.evidenceUrl } > { badge.evidenceUrl } </a>
      </div>
    );
  }
});

module.exports = BadgeInstance;