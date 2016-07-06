import React from 'react';
import Promise from 'bluebird';
import * as utils from '../utils';

export function collect(nextProps, callback) {
  const componentsList = utils.collectDocs(nextProps.data.components);

  let moduleDocs;
  moduleDocs = [
    ...utils.collectDocs(nextProps.data.docs.react),
    ...componentsList,
    /* eslint-disable new-cap */
    nextProps.data.CHANGELOG(),
    /* eslint-enable new-cap */
  ];

  const promises = [Promise.all(componentsList), Promise.all(moduleDocs)];

  Promise.all(promises)
    .then((list) => callback(null, {
      ...nextProps,
      components: list[0],
    }));
}

export default class Home extends React.Component {
  render() {
    const props = this.props;
    console.log(props);
    return (
      <div>
       1111111111
      </div>
    );
  }
}
