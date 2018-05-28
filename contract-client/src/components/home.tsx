import * as React from 'react';
import {ActionLink} from './ActionLink';

export class Home extends React.Component {
    
    public render() {
        return (
            <div className="home-view">
            <div className="row">
                <div className="row-header">
                    <span>Recent Activity</span>
                </div>
                <ActionLink link="/messages" label="New Messages" value="45" />
                <ActionLink link="/contracts" label="Pending Contracts" value="26" />
                <ActionLink link="/contracts" label="Signed Contracts" value="2" />
            </div>
            <div className="row">
                <div className="row-header">
                    <span>Create, Send, Manage</span>
                </div>
                <ActionLink link="/contracts" label="Create Contract" glyph="glyphicons glyphicons-file-plus" />
                <ActionLink link="/companies" label="Companies" glyph="glyphicons glyphicons-building" />
                <ActionLink link="/users" label="Users" glyph="glyphicons glyphicons-user" />
            </div>
            <div className="row">
                <div className="row-header">
                    <span>Setup Contract Templates</span>
                </div>
                <ActionLink link="/templates" label="Contract Templates" glyph="glyphicons glyphicons-article" />
                <ActionLink link="/clauses" label="Clause Library" glyph="glyphicons glyphicons-book" />
            </div>
            </div>
        );
    }
}