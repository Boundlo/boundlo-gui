import projectData from './project-data';
//const jsonData = require('./experience-container/experience.json')

/* eslint-disable import/no-unresolved */
import backdrop from '!raw-loader!./experience-container/cd21514d0531fdffb22204e0ec5ed84a.svg?';
import costume1 from '!raw-loader!./experience-container/d75b0e65f8a5955e3c5b6d7c6961c72b.svg?';
import costume2 from '!raw-loader!./experience-container/30019b8a176544062fbeb1913a00d13e.svg?';
/* eslint-enable import/no-unresolved */

const defaultProject = translator => {
    let _TextEncoder;
    if (typeof TextEncoder === 'undefined') {
        _TextEncoder = require('fastestsmallesttextencoderdecoder').TextEncoder;
    } else {
        _TextEncoder = TextEncoder;
    }
    const encoder = new _TextEncoder();

    const projectJson = projectData(translator);
    return [{
        id: 0,
        assetType: 'Project',
        dataFormat: 'JSON',
        data: JSON.stringify(projectJson)
    }, {
        id: 'cd21514d0531fdffb22204e0ec5ed84a',
        assetType: 'ImageVector',
        dataFormat: 'SVG',
        data: encoder.encode(backdrop)
    }, {
        id: 'd75b0e65f8a5955e3c5b6d7c6961c72b',
        assetType: 'ImageVector',
        dataFormat: 'SVG',
        data: encoder.encode(costume1)
    }, {
        id: '30019b8a176544062fbeb1913a00d13e',
        assetType: 'ImageVector',
        dataFormat: 'SVG',
        data: encoder.encode(costume2)
    }];
};

export default defaultProject;
