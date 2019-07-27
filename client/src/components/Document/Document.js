import React, { Component } from 'react';
import './Document.css'
import TitleShared from '../TitleShared/TitleShared';
import CalenderActivities from './CalenderActivities/CalenderActivities';
import HandBook from './HandBook/HandBook';
import DocDownload from './DocDownload/DocDownload';

class Document extends Component {
    

    render() {
        return (
            <div id="_documents">
                <TitleShared title="tài liệu" color="green"></TitleShared>
                <div className="content-documents">
                    <div className="container">
                        <CalenderActivities></CalenderActivities>
                        <HandBook></HandBook>
                        <DocDownload></DocDownload>
                    </div>
                </div> {/* content-documents */}
            </div>
        );
    }
}

export default Document;